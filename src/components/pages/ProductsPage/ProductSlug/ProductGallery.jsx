"use client";

import React from "react";
import ProductImageSlider from "./ProductImageSlider";
import useSticky from "@/hooks/useSticky";
import BestSellerBadge from "@/components/common/Product/BestSellerBadge";

/**
 * ============================================================================
 * PRODUCT GALLERY
 * ============================================================================
 */
export default function ProductGallery({
    images,
    productTitle,
    isBestSeller = false,
}) {
    // START: Refactor to use useSticky hook
    const { sentinelRef, state } = useSticky({ top: 120 });
    // END: Refactor

    return (
        <div className="relative h-full">
            {/* Sentinel for sticky detection */}
            <div ref={sentinelRef} className="absolute top-0 w-full h-px" />
            {/* có thuộc tính relative ở 👇🏼 nếu lỗi hãy thêm vào */}
            <div className="product-gallery-wrapper sticky top-[120px] self-start hidden desktop:block">
                {/* Best Seller Badge */}
                {isBestSeller && (
                    <BestSellerBadge className="z-20 -left-2! md:-left-5.5! desktop:-left-[18px]!" />
                )}

                <div className="overflow-hidden relative rounded-2xl">
                    <ProductImageSlider
                        images={images}
                        productTitle={productTitle}
                    />
                </div>
            </div>

            {/* Mobile/Tablet Fallback (Non-sticky, visible) */}
            <div className="block desktop:hidden h-full relative">
                {/* Best Seller Badge */}
                {isBestSeller && (
                    <BestSellerBadge className="z-20 -left-3! md:-left-4! desktop:-left-[18px]!" />
                )}

                <div className="overflow-hidden relative rounded-2xl">
                    <ProductImageSlider
                        images={images}
                        productTitle={productTitle}
                    />
                </div>
            </div>
        </div>
    );
}
