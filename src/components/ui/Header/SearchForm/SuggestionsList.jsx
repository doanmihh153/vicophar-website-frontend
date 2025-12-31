/**
 * ============================================================================
 * SUGGESTIONSLIST COMPONENT - VICOPHAR
 * ============================================================================
 *
 * Component hiển thị danh sách gợi ý sản phẩm khi tìm kiếm
 *
 * FEATURES:
 * --------
 * ✅ Hiển thị sản phẩm với hình ảnh, tên, giá
 * ✅ Arrow icon bên phải
 * ✅ Highlight suggestion được chọn (keyboard navigation)
 * ✅ Hover effects
 * ✅ Click để xem chi tiết sản phẩm
 * ✅ ARIA attributes cho accessibility
 *
 * PROPS:
 * ------
 * @param {Array} suggestions - Mảng các sản phẩm gợi ý (objects với id, name, price, image)
 * @param {number} selectedIndex - Index của suggestion đang được chọn (-1 nếu không có)
 * @param {Function} onSuggestionClick - Callback khi click vào suggestion
 * @param {boolean} isVisible - Hiển thị hay ẩn dropdown
 *
 * USAGE:
 * ------
 * <SuggestionsList
 *     suggestions={productSuggestions}
 *     selectedIndex={selectedSuggestionIndex}
 *     onSuggestionClick={handleProductClick}
 *     isVisible={isSearchFocused}
 * />
 *
 * ============================================================================
 */

"use client";

import Image from "next/image";
import { ArrowRight } from "@/assets/icons";
import { formatPrice } from "@/data/mockProducts";
import { formatDate } from "@/data/mockBlogs";

function SuggestionsList({
    suggestions = [],
    selectedIndex = -1,
    onSuggestionClick,
    isVisible = false,
}) {
    // Không render nếu không có suggestions hoặc không visible
    if (!isVisible || suggestions.length === 0) {
        return null;
    }

    return (
        <div
            id="search-suggestions"
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-[600px] overflow-y-auto"
            role="listbox"
            aria-label="Gợi ý tìm kiếm"
        >
            {suggestions.map((item, index) => {
                const isProduct = item.type === "product";
                const isBlog = item.type === "blog";

                return (
                    <div
                        key={item.id || index}
                        className={`
                            px-4 py-3 cursor-pointer 
                            border-b border-gray-100 last:border-b-0
                            transition-all duration-200
                            ${
                                index === selectedIndex
                                    ? "bg-green-50"
                                    : "hover:bg-gray-50"
                            }
                        `}
                        onClick={() => onSuggestionClick(item)}
                        role="option"
                        aria-selected={index === selectedIndex}
                    >
                        <div className="flex items-center gap-3">
                            {/* Hình ảnh */}
                            <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src={item.image}
                                    alt={isProduct ? item.name : item.title}
                                    fill
                                    className="object-cover"
                                    sizes="48px"
                                />
                            </div>

                            {/* Thông tin */}
                            <div className="flex-1 min-w-0">
                                {/* Type badge */}
                                <span
                                    className={`
                                        inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-1
                                        ${
                                            isProduct
                                                ? "bg-green-100 text-green-700"
                                                : "bg-blue-100 text-blue-700"
                                        }
                                    `}
                                >
                                    {isProduct ? "Sản phẩm" : "Bài viết"}
                                </span>

                                {/* Tiêu đề */}
                                <h4 className="text-h4 text-gray-900 truncate">
                                    {isProduct ? item.name : item.title}
                                </h4>

                                {/* Thông tin phụ */}
                                {isProduct ? (
                                    <p className="text-body font-medium text-green-primary mt-0.5">
                                        {formatPrice(item.price)}
                                    </p>
                                ) : (
                                    <p className="text-body text-gray-500 mt-0.5">
                                        {item.category} • {item.readTime} phút
                                        đọc
                                    </p>
                                )}
                            </div>

                            {/* Arrow icon */}
                            <div className="shrink-0">
                                <ArrowRight className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SuggestionsList;
