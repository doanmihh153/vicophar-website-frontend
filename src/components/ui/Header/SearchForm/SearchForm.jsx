/**
 * ============================================================================
 * SEARCHFORM COMPONENT - VICOPHAR
 * ============================================================================
 *
 * Component tìm kiếm với đầy đủ tính năng cho website Vicophar
 *
 * FEATURES:
 * --------
 * ✅ Auto-suggestions khi người dùng nhập
 * ✅ Keyboard navigation (ArrowUp/Down, Enter, Escape)
 * ✅ Input validation (chỉ cho phép ký tự hợp lệ)
 * ✅ Clear button để xóa nội dung
 * ✅ Click outside để đóng suggestions
 * ✅ SEO và accessibility optimized
 * ✅ ARIA labels cho screen readers
 * ✅ Form submission với URL encoding
 * ✅ Smooth animations và transitions
 *
 * PROPS:
 * ------
 * @param {string} className - CSS classes tùy chỉnh (optional)
 *
 * CSS VARIABLES USED (từ base.css):
 * ----------------------------------
 * --bg-green-primary          : Màu xanh chính (border, button)
 * --color-text-primary        : Màu text chính
 * --color-text-gray           : Màu text xám (placeholder)
 * --h-div-input-search        : Chiều cao input (48px)
 *
 * ============================================================================
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { SearchIcon, CloseIcon } from "@/assets/icons";
import { searchAll } from "@/data/mockSearch";
import SuggestionsList from "./SuggestionsList";
import MobileSearchDrawer from "./MobileSearchDrawer";

function SearchForm({ className = "" }) {
    // ========================================
    // STATE MANAGEMENT
    // ========================================

    // Từ khóa tìm kiếm hiện tại
    const [searchTerm, setSearchTerm] = useState("");

    // Trạng thái focus của input (để hiện/ẩn suggestions)
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    // Danh sách gợi ý tìm kiếm
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    // Index của suggestion đang được chọn (dùng cho keyboard navigation)
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

    // State cho Mobile Search Drawer (< 1024px)
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    // ========================================
    // REFS
    // ========================================

    // Ref để truy cập input element (dùng cho focus/blur)
    const searchInputRef = useRef(null);

    // Ref để truy cập form wrapper (dùng cho click outside detection)
    const searchFormRef = useRef(null);

    // Ref để truy cập MobileSearchDrawer (dùng cho focus input)
    const mobileDrawerRef = useRef(null);

    // ========================================
    // EVENT HANDLERS
    // ========================================

    /**
     * Xử lý thay đổi input với validation
     *
     * Validation rules:
     * - Không cho phép bắt đầu bằng khoảng trắng
     * - Chỉ cho phép: chữ cái (Unicode), số, dấu cách, dấu chấm, dấu phẩy, dấu gạch ngang, dấu chấm than
     *
     * @param {Event} e - Input change event
     */
    const handleInputChange = (e) => {
        const value = e.target.value;

        // Validation: chỉ cho phép chữ cái, số, dấu cách và một số ký tự đặc biệt
        const allowedPattern = /^[\p{L}\p{N}.,\-!\s]*$/u;

        // Không cho phép bắt đầu bằng khoảng trắng
        if (value.startsWith(" ")) {
            return;
        }

        // Kiểm tra pattern hợp lệ
        if (!allowedPattern.test(value)) {
            return;
        }

        // Cập nhật search term
        setSearchTerm(value);

        // Reset selected suggestion index
        setSelectedSuggestionIndex(-1);

        // Tạo suggestions dựa trên input (cả products và blogs)
        if (value.length > 0) {
            const results = searchAll(value, {
                productLimit: 3, // Tối đa 3 sản phẩm
                blogLimit: 2, // Tối đa 2 bài viết
                mixResults: true, // Trộn kết quả
            });
            setSearchSuggestions(results);
        } else {
            setSearchSuggestions([]);
        }
    };

    /**
     * Xử lý click vào input
     * Nếu màn hình < 1024px -> Mở Drawer và blur input hiện tại
     */
    const handleInputClick = () => {
        // Mobile/Tablet: Mở drawer
        if (typeof window !== "undefined" && window.innerWidth < 1024) {
            setIsMobileDrawerOpen(true);
            // Focus input sau khi drawer mở (iOS Safari compatible)
            setTimeout(() => {
                if (mobileDrawerRef.current) {
                    mobileDrawerRef.current.focusInput();
                }
            }, 100);
            searchInputRef.current?.blur(); // Blur the current input
        }
        // Desktop: Giữ nguyên behavior (hiện suggestions)
        // The onFocus handler on the input itself will handle setIsSearchFocused(true)
    };

    /**
     * Xử lý submit form - chuyển hướng đến trang kết quả tìm kiếm
     *
     * URL format: /tim-kiem?q=<search_term>
     * Search term được encode để đảm bảo URL an toàn
     *
     * @param {Event} e - Form submit event
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Chỉ submit nếu có nội dung (sau khi trim)
        if (searchTerm.trim()) {
            console.log("Tìm kiếm:", searchTerm);

            // Chuyển hướng đến trang kết quả với URL encoding
            // encodeURIComponent đảm bảo các ký tự đặc biệt được encode đúng
            window.location.href = `/tim-kiem?q=${encodeURIComponent(
                searchTerm.trim()
            )}`;
        }
    };

    /**
     * Xử lý keyboard navigation cho suggestions dropdown
     *
     * Keyboard shortcuts:
     * - ArrowDown: Di chuyển xuống suggestion tiếp theo (loop về đầu nếu ở cuối)
     * - ArrowUp: Di chuyển lên suggestion trước đó (loop về cuối nếu ở đầu)
     * - Enter: Chọn suggestion hiện tại hoặc submit form
     * - Escape: Đóng dropdown và blur input
     *
     * @param {KeyboardEvent} e - Keyboard event
     */
    const handleKeyDown = (e) => {
        // Chỉ xử lý khi có suggestions
        if (searchSuggestions.length === 0) return;

        switch (e.key) {
            case "ArrowDown":
                // Prevent default để không scroll page
                e.preventDefault();

                // Di chuyển xuống, loop về 0 nếu đang ở cuối
                setSelectedSuggestionIndex((prev) =>
                    prev < searchSuggestions.length - 1 ? prev + 1 : 0
                );
                break;

            case "ArrowUp":
                // Prevent default để không scroll page
                e.preventDefault();

                // Di chuyển lên, loop về cuối nếu đang ở đầu
                setSelectedSuggestionIndex((prev) =>
                    prev > 0 ? prev - 1 : searchSuggestions.length - 1
                );
                break;

            case "Enter":
                // Prevent default để không submit form ngay
                e.preventDefault();

                if (selectedSuggestionIndex >= 0) {
                    // Có product được chọn -> chuyển đến trang chi tiết
                    const selectedProduct =
                        searchSuggestions[selectedSuggestionIndex];
                    handleSuggestionClick(selectedProduct);
                } else {
                    // Không có suggestion nào được chọn -> submit form
                    handleSubmit(e);
                }
                break;

            case "Escape":
                // Đóng suggestions và blur input
                setSearchSuggestions([]);
                setSelectedSuggestionIndex(-1);
                searchInputRef.current?.blur();
                break;
        }
    };

    /**
     * Xử lý click vào một suggestion (product hoặc blog)
     *
     * Actions:
     * - Chuyển hướng đến trang chi tiết tương ứng
     *
     * @param {Object} item - Item được chọn (product hoặc blog)
     */
    const handleSuggestionClick = (item) => {
        if (item.type === "product") {
            // Chuyển đến trang chi tiết sản phẩm
            window.location.href = `/san-pham/${item.id}`;
        } else if (item.type === "blog") {
            // Chuyển đến trang chi tiết bài viết
            window.location.href = `/tin-tuc/${item.id}`;
        }
    };

    /**
     * Xóa toàn bộ nội dung search
     *
     * Actions:
     * - Clear search term
     * - Đóng suggestions
     * - Reset selected index
     * - Focus lại input
     */
    const handleClearSearch = () => {
        setSearchTerm("");
        setSearchSuggestions([]);
        setSelectedSuggestionIndex(-1);
        searchInputRef.current?.focus();
    };

    // ========================================
    // EFFECTS
    // ========================================

    /**
     * Effect: Click outside detection
     *
     * Đóng suggestions dropdown khi user click bên ngoài search form
     * Sử dụng mousedown event thay vì click để detect sớm hơn
     */
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Kiểm tra xem click có nằm ngoài searchFormRef không
            if (
                searchFormRef.current &&
                !searchFormRef.current.contains(event.target)
            ) {
                setIsSearchFocused(false);
                setSelectedSuggestionIndex(-1);
            }
        };

        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup function - remove event listener khi component unmount
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ========================================
    // RENDER
    // ========================================

    return (
        <div className={`relative ${className}`} ref={searchFormRef}>
            {/* ========================================
                SEARCH FORM - Form tìm kiếm chính
                ======================================== */}
            <form
                className="font-semibold grid grid-cols-1 text-body relative w-full"
                onSubmit={handleSubmit}
                role="search"
                aria-label="Tìm kiếm sản phẩm"
            >
                {/* Container cho input và buttons */}
                <div className="relative h-[42px] md:h-[42px] lg:h-(--height-vico-search)">
                    {/* ========================================
                        SEARCH INPUT - Ô nhập tìm kiếm
                        - Border radius 100% (rounded-full)
                        - Border 1px màu xanh (không phải 2px)
                        - Không có hiệu ứng focus
                        - Padding đơn giản: px-6 py-2
                        ======================================== */}
                    <input
                        ref={searchInputRef}
                        type="search"
                        placeholder="Tìm kiếm thuốc, sản phẩm y tế..."
                        aria-label="Nhập từ khóa tìm kiếm sản phẩm"
                        aria-describedby="search-help"
                        name="q"
                        autoComplete="off"
                        id="searchInput"
                        value={searchTerm}
                        onChange={handleInputChange}
                        onClick={handleInputClick}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setIsSearchFocused(true)}
                        className="w-full h-full border border-green-primary rounded-full px-4 md:px-4 lg:px-6 pr-20 outline-none focus:border-green-primary! transition-all duration-200 bg-white text-primary text-input font-medium placeholder:text-gray-400 placeholder:text-body shadow-none!"
                        aria-expanded={searchSuggestions.length > 0}
                        aria-haspopup="listbox"
                        aria-owns={
                            searchSuggestions.length > 0
                                ? "search-suggestions"
                                : undefined
                        }
                    />

                    {/* ========================================
                        CLEAR BUTTON - Nút xóa (chỉ hiện khi có text)
                        - Vị trí: right-12 (48px từ phải)
                        - Hover: bg-gray-100
                        ======================================== */}
                    {searchTerm && (
                        <button
                            type="button"
                            onClick={handleClearSearch}
                            className="flex items-center justify-center absolute right-14 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full bg-vico-gray-200 transition-colors"
                            aria-label="Xóa nội dung tìm kiếm"
                            tabIndex={0}
                        >
                            <CloseIcon className="h-4 w-4 text-gray-500" />
                        </button>
                    )}
                    {/* ========================================
                        SUBMIT BUTTON - Nút tìm kiếm
                        - Vị trí: absolute right-2
                        - Background: bg-green-primary
                        - Padding: p-2
                        - Border radius: rounded-full
                        ======================================== */}
                    <button
                        type="submit"
                        aria-label="Thực hiện tìm kiếm"
                        className="absolute right-1 lg:right-2 top-1/2 transform -translate-y-1/2 p-2 bg-vico-green rounded-full transition-colors duration-200 focus:outline-none hover:bg-green-600"
                    >
                        <SearchIcon className="stroke-white h-4.5 w-4.5 lg:h-5 lg:w-5" />
                    </button>
                </div>
            </form>

            {/* ========================================
                SEARCH SUGGESTIONS DROPDOWN - Danh sách gợi ý
                - Component riêng để dễ bảo trì
                - Keyboard navigation support
                - Hover effects
                ======================================== */}
            <SuggestionsList
                suggestions={searchSuggestions}
                selectedIndex={selectedSuggestionIndex}
                onSuggestionClick={handleSuggestionClick}
                isVisible={isSearchFocused}
            />

            {/* ========================================
                HIDDEN HELP TEXT - Cho screen readers
                ======================================== */}
            <div id="search-help" className="sr-only">
                Nhập từ khóa để tìm kiếm sản phẩm. Sử dụng phím mũi tên để điều
                hướng gợi ý, Enter để chọn.
            </div>
            {/* ========================================
                MOBILE SEARCH DRAWER - Hiển thị trên mobile/tablet (< 1024px)
                ======================================== */}
            <MobileSearchDrawer
                ref={mobileDrawerRef}
                isOpen={isMobileDrawerOpen}
                onClose={() => setIsMobileDrawerOpen(false)}
            />
        </div>
    );
}

export default SearchForm;
