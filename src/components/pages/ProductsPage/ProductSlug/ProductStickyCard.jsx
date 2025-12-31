"use client";

import React from "react";
import Image from "next/image";
import ProductCTAButtons from "./ProductCTAButtons";

/**
 * ProductStickyCard - Card hiển thị khi sidebar trở thành sticky
 * Bao gồm: Hình ảnh, Tên sản phẩm, CTA buttons, Policy icons
 *
 * @param {Object} product - Thông tin sản phẩm
 * @param {string} product.image - URL hình ảnh
 * @param {string} product.title - Tên sản phẩm
 */
export default function ProductStickyCard({ product }) {
    if (!product) return null;

    return (
        <div className="p-4">
            {/* Product Image - To như ProductCard */}
            <div className="relative w-full max-w-[200px] aspect-square mx-auto mb-4">
                <Image
                    src={product.image || "/imgs/placeholder.png"}
                    alt={product.title || "Sản phẩm"}
                    fill
                    className="object-contain"
                    sizes="200px"
                />
            </div>

            {/* Product Title - Font lớn như ProductCard */}
            <h3 className="text-lg font-bold text-vico-primary text-center line-clamp-2 mb-4">
                {product.title}
            </h3>

            {/* CTA Buttons & Policy Icons */}
            <ProductCTAButtons />
        </div>
    );
}
