"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "@/components/common/Product/ProductCard";

// Mock DoubleDown icon (can replace with actual library later if available)
const DoubleDownIcon = ({ size = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
    </svg>
);

/**
 * PRODUCT GRID
 * Grid layout + See More logic
 */
export default function ProductGrid({ products = [] }) {
    // Default to Desktop (9) for SSR/SEO, adjust on client
    const [displayCount, setDisplayCount] = useState(9);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Tailwind 'lg' breakpoint is 1024px.
            // < 1024: 2 cols -> want 8 items (even).
            // >= 1024: 3 cols -> want 9 items (divisible by 3).
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            // Only update on resize if needed to avoid resetting user progress?
            // Actually user specified "render 8", implies initial load.
            // We'll set it once on mount if we haven't loaded more.
            if (displayCount === 9 || displayCount === 8) {
                // Heuristic check
                setDisplayCount(mobile ? 8 : 9);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Run once on mount

    const hasMore = displayCount < products.length;

    const handleLoadMore = () => {
        setDisplayCount((prev) => prev + (isMobile ? 8 : 9));
    };

    // Visible products
    const visibleProducts = useMemo(
        () => products.slice(0, displayCount),
        [products, displayCount]
    );

    if (products.length === 0) {
        return (
            <div className="w-full py-20 text-center bg-gray-50 rounded-xl">
                <p className="text-gray-500 text-lg">
                    Chưa có sản phẩm nào trong danh mục này.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* GRID: Mobile 2 cols, Desktop 3 cols */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleProducts.map((product) => (
                    <div key={product.id} className="h-full">
                        <ProductCard
                            product={product}
                            className="hover:border hover:border-vico-green"
                        />
                    </div>
                ))}
            </div>

            {/* SEE MORE BUTTON */}
            {hasMore && (
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        className="flex flex-row items-center justify-center gap-2 text-vico-green transition-colors group px-6 py-2"
                    >
                        <DoubleDownIcon
                            size={28}
                            className="animate-bounce group-hover:translate-y-1 transition-transform"
                        />
                        <span className="font-semibold text-lg">
                            Xem thêm sản phẩm
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
}
