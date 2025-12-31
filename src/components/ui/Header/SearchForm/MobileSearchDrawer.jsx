"use client";

import React, {
    useRef,
    useEffect,
    useState,
    forwardRef,
    useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ArrowLeft, SearchIcon, CloseIcon, ArrowRight } from "@/assets/icons";
import { formatPrice } from "@/data/mockProducts";
import { useMobileSearch } from "./useMobileSearch";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

/**
 * MobileSearchDrawer Component
 *
 * A full-screen drawer for search on mobile/tablet devices (< 1024px).
 *
 * Props:
 * - isOpen: boolean - Controls visibility
 * - onClose: function - Handler to close drawer
 */
const MobileSearchDrawer = forwardRef(function MobileSearchDrawer(
    { isOpen, onClose },
    ref
) {
    const {
        searchTerm,
        productResults,
        blogResults,
        handleSearchChange,
        clearSearch,
    } = useMobileSearch();

    const inputRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Expose focus method to parent component
    useImperativeHandle(ref, () => ({
        focusInput: () => {
            if (inputRef.current) {
                // Multiple strategies for iOS/mobile browsers
                // Strategy 1: Immediate focus
                inputRef.current.focus();

                // Strategy 2: Focus with click simulation (iOS Safari workaround)
                setTimeout(() => {
                    if (inputRef.current) {
                        inputRef.current.focus();
                        inputRef.current.click();
                    }
                }, 10);

                // Strategy 3: Focus after animation frame
                requestAnimationFrame(() => {
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                });
            }
        },
    }));

    // Handle drawer open/close with animation
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
            // Small delay to trigger animation after mount
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            // Wait for animation to finish before unmounting
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Auto-focus when drawer becomes visible (fallback for iOS)
    useEffect(() => {
        if (isVisible && inputRef.current) {
            // Multiple attempts to ensure focus works
            const focusAttempts = [50, 100, 200];
            focusAttempts.forEach((delay) => {
                setTimeout(() => {
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }, delay);
            });
        }
    }, [isVisible]);

    // Auto-focus input when drawer animation completes
    useEffect(() => {
        if (isAnimating && inputRef.current) {
            // Chỉ focus, KHÔNG cuộn trang
            const timer = setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    // Prevent body scroll when drawer is open (Robust method)
    useBodyScrollLock(isVisible);

    // Handle submit (Enter key)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            window.location.href = `/tim-kiem?q=${encodeURIComponent(
                searchTerm.trim()
            )}`;
        }
    };

    if (!isVisible) return null;

    // Use Portal to render at root level (z-index handling)
    if (typeof document === "undefined") return null;

    return createPortal(
        <>
            {/* Backdrop Overlay - Z-index 9999 (covers header z-9998) */}
            <div
                className={`fixed inset-0 bg-black z-9999 transition-opacity duration-300 touch-none ${
                    isAnimating ? "opacity-50" : "opacity-0"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer Container - Z-index 10000 (above backdrop) */}
            <div
                className={`fixed inset-y-0 right-0 w-full bg-white z-10000 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
                    isAnimating ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ maxWidth: "100vw" }}
            >
                {/* ========================================
                    HEADER
                    ======================================== */}
                <div className="flex items-center gap-2 p-3 md:p-4 border-b border-gray-100 shadow-sm bg-white shrink-0">
                    {/* Back Button */}
                    <button
                        onClick={onClose}
                        className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Quay lại"
                    >
                        <ArrowLeft className="w-7 h-7 text-gray-600" />
                    </button>

                    {/* Search Input Container */}
                    <div className="relative flex-1 h-10 md:h-12">
                        <form onSubmit={handleSubmit} className="h-full">
                            {/* ========================================
                                SEARCH INPUT - Ô nhập tìm kiếm
                                - Border radius 100% (rounded-full)
                                - Border 1px màu xanh (không phải 2px)
                                - Không có hiệu ứng focus
                                - Padding đơn giản: px-6 py-2
                                ======================================== */}
                            <input
                                ref={inputRef}
                                type="search"
                                inputMode="search"
                                placeholder="Tìm kiếm thuốc, sản phẩm y tế..."
                                aria-label="Nhập từ khóa tìm kiếm sản phẩm"
                                name="q"
                                autoComplete="off"
                                id="mobileSearchInput"
                                value={searchTerm}
                                onChange={(e) =>
                                    handleSearchChange(e.target.value)
                                }
                                onClick={(e) => {
                                    // Ensure focus on click (iOS fallback)
                                    e.currentTarget.focus();
                                }}
                                className="w-full h-full border border-green-primary rounded-full px-4 md:px-6 pr-16 md:pr-20 outline-none focus:border-green-primary! transition-all duration-200 bg-white text-primary text-input font-medium placeholder:text-gray-400 placeholder:text-body"
                                style={{ fontSize: "16px" }}
                            />

                            {/* ========================================
                                CLEAR BUTTON - Nút xóa (chỉ hiện khi có text)
                                - Vị trí: right-14 (56px từ phải)
                                - Hover: bg-gray-100
                                ======================================== */}
                            {searchTerm && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="flex items-center justify-center absolute right-12 md:right-14 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full bg-vico-gray-200 transition-colors"
                                    aria-label="Xóa nội dung tìm kiếm"
                                    tabIndex={0}
                                >
                                    <CloseIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-500" />
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
                        </form>
                    </div>
                </div>

                {/* ========================================
                    BODY - RESULTS
                    ======================================== */}
                <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                    {/* Empty State */}
                    {!searchTerm && (
                        <div className="text-center text-gray-400 mt-10">
                            <SearchIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                            <p>Nhập từ khóa để tìm kiếm</p>
                        </div>
                    )}

                    {/* Results */}
                    {searchTerm && (
                        <div className="space-y-6">
                            {/* SECTION 1: PRODUCTS */}
                            {productResults.length > 0 && (
                                <section>
                                    <h3 className="text-h5 uppercase tracking-wider mb-3 px-1">
                                        Sản phẩm liên quan
                                    </h3>
                                    <div className="overflow-hidden divide-y divide-gray-100">
                                        {productResults.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() =>
                                                    (window.location.href = `/san-pham/${item.id}`)
                                                }
                                                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 active:bg-gray-50 transition-colors"
                                            >
                                                <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        sizes="(max-width: 768px) 64px, 80px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-small md:text-body font-medium text-gray-900 line-clamp-2">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-small font-bold text-vico-green mt-1">
                                                        {formatPrice(
                                                            item.price
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* SECTION 2: BLOGS */}
                            {blogResults.length > 0 && (
                                <section>
                                    <h3 className="text-h5 uppercase tracking-wider mb-3 px-1">
                                        Bài viết & Tin tức
                                    </h3>
                                    <div className="overflow-hidden divide-y divide-gray-100">
                                        {blogResults.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() =>
                                                    (window.location.href = `/tin-tuc/${item.id}`)
                                                }
                                                className="flex items-start gap-2 md:gap-3 p-2 md:p-3 active:bg-gray-50 transition-colors"
                                            >
                                                <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        sizes="(max-width: 768px) 64px, 80px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-small md:text-body font-medium text-gray-900 line-clamp-2">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-small text-gray-500 mt-1">
                                                        {item.category} •{" "}
                                                        {item.readTime} phút
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* No Results */}
                            {productResults.length === 0 &&
                                blogResults.length === 0 && (
                                    <div className="text-center py-10">
                                        <p className="text-gray-500">
                                            Không tìm thấy kết quả nào cho
                                            &quot;
                                            <span className="font-medium text-gray-900">
                                                {searchTerm}
                                            </span>
                                            &quot;
                                        </p>
                                    </div>
                                )}
                        </div>
                    )}
                </div>
            </div>
        </>,
        document.body
    );
});

export default MobileSearchDrawer;
