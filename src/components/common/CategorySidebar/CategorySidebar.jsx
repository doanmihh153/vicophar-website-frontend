/**
 * ============================================================================
 * CATEGORY SIDEBAR - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component sidebar hiển thị danh mục và bài viết nổi bật
 *
 * PROPS:
 * ------
 * @param {array} categories - Mảng danh mục [{ id, name, count }]
 * @param {object} featuredSections - Object chứa các section bài viết nổi bật
 *   {
 *     "promotion": { title: "TIN KHUYẾN MÃI", articles: [...] },
 *     "treatment": { title: "TIN TRỊ LIỆU", articles: [...] },
 *     ...
 *   }
 * @param {string} activeCategory - ID danh mục đang active
 * @param {function} onCategoryChange - Callback khi click danh mục
 * @param {string} className - Custom className
 *
 * USAGE:
 * ------
 * <CategorySidebar
 *   categories={[
 *     { id: "all", name: "Tất cả", count: 120 },
 *     { id: "promotion", name: "Khuyến mãi", count: 45 }
 *   ]}
 *   featuredSections={{
 *     promotion: {
 *       title: "TIN KHUYẾN MÃI",
 *       articles: [...]
 *     }
 *   }}
 *   activeCategory="all"
 *   onCategoryChange={(id) => console.log(id)}
 * />
 *
 * ============================================================================
 */

"use client";

import React, { useState, useEffect } from "react";
import useSticky from "@/hooks/useSticky";
import { CategoryListIcon, ArrowDownIcon } from "@/assets/icons";

export default function CategorySidebar({
    categories = [],
    activeCategory = "",
    onCategoryChange = () => {},
    disableSticky = false, // Disable sticky khi wrap trong parent Sticky
    className = "",
    initialVisibleCount,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Determines effective limit. If initialVisibleCount is undefined/0, show all.
    const limit = initialVisibleCount || categories.length;
    const shouldShowButton = categories.length > limit;

    // Detect desktop viewport (>= 1280px)
    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };

        // Check on mount
        checkDesktop();

        // Check on resize
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    const activeCategoryName =
        categories.find((c) => c.id === activeCategory)?.name || "Danh mục";

    // Use Observer Hook to detect state
    // CSS handles actual layout
    const { sentinelRef } = useSticky({
        enabled: isDesktop && !disableSticky,
        top: 120,
        onStateChange: (state) => console.log("CategorySidebar State:", state),
    });

    return (
        <React.Fragment>
            {/* SENTINEL - Lính gác vô hình để detect scroll */}
            {!disableSticky && isDesktop && (
                <div
                    ref={sentinelRef}
                    className="absolute w-0 h-px -mt-[120px] pointer-events-none opacity-0"
                    aria-hidden="true"
                />
            )}

            <aside
                className={`
                    ${className}
                    ${
                        !disableSticky && isDesktop
                            ? "desktop:sticky desktop:top-[120px] desktop:z-20"
                            : ""
                    }
                `}
            >
                {/* MOBILE & TABLET: SELECT DROPDOWN */}
                <div className="block desktop:hidden relative z-10">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between bg-white border border-vico-gray-200 rounded-lg px-4 py-3 active:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <CategoryListIcon className="w-5 h-5 text-vico-green" />
                            <span className="text-body font-medium text-vico-gray-900">
                                {activeCategoryName}
                            </span>
                        </div>
                        <ArrowDownIcon
                            className={`w-5 h-5 text-vico-gray-500 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {/* Dropdown Content */}
                    {isOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-vico-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                            <ul className="py-2 max-h-[60vh] overflow-y-auto">
                                {categories.map((category) => {
                                    const isActive =
                                        category.id === activeCategory;
                                    return (
                                        <li key={category.id}>
                                            <button
                                                onClick={() => {
                                                    onCategoryChange(
                                                        category.id
                                                    );
                                                    setIsOpen(false);
                                                }}
                                                className={`
                                            w-full text-left px-4 py-3 flex items-center justify-between
                                            ${
                                                isActive
                                                    ? "bg-vico-green-light/10 text-vico-green font-semibold"
                                                    : "text-vico-gray-700 hover:bg-gray-50"
                                            }
                                        `}
                                            >
                                                <span>{category.name}</span>
                                                {isActive && (
                                                    <svg
                                                        className="w-5 h-5 text-vico-green"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>

                {/* DESKTOP: LIST VIEW */}
                <div className="hidden desktop:block space-y-8">
                    {categories && categories.length > 0 && (
                        <div className="bg-white rounded-xl p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <CategoryListIcon className="w-10 h-10 -translate-y-1 text-vico-green" />
                                <h3 className="text-h3 font-bold text-vico-green uppercase">
                                    Danh Mục
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {(isExpanded
                                    ? categories
                                    : categories.slice(0, limit)
                                ).map((category) => {
                                    const isActive =
                                        category.id === activeCategory;

                                    return (
                                        <li key={category.id}>
                                            <button
                                                onClick={() =>
                                                    onCategoryChange(
                                                        category.id
                                                    )
                                                }
                                                className={`
                                            w-full text-left text-lg font-semibold uppercase transition-colors duration-200
                                            ${
                                                isActive
                                                    ? "text-vico-green"
                                                    : "text-vico-gray-600 hover:text-vico-green"
                                            }
                                        `}
                                            >
                                                {category.name}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>

                            {shouldShowButton && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="justify-center text-center w-full mt-4 text-vico-green font-semibold flex items-center gap-2 transition-all"
                                >
                                    <span>
                                        {isExpanded ? "Thu gọn" : "Xem thêm"}
                                    </span>
                                    <ArrowDownIcon
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                            isExpanded ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </aside>
        </React.Fragment>
    );
}
