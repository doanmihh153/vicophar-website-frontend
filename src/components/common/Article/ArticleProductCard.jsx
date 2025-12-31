/**
 * ============================================================================
 * ARTICLE PRODUCT CARD - Sản phẩm liên quan bài viết
 * ============================================================================
 *
 * Component hiển thị sản phẩm được gán vào bài viết.
 * Xuất hiện khi sidebar ở trạng thái sticky.
 * Có thể bật/tắt từ dashboard via `linkedProduct.enabled`.
 *
 * USAGE:
 * <ArticleProductCard linkedProduct={article.linkedProduct} isVisible={showCard} />
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/data/mockProducts";

export default function ArticleProductCard({ linkedProduct, isVisible }) {
    // Early return nếu không có linkedProduct hoặc bị disable
    if (!linkedProduct?.enabled) return null;

    // Lookup product từ featuredProducts by ID
    const product = featuredProducts.find(
        (p) => p.id === linkedProduct.productId
    );

    // Nếu không tìm thấy product
    if (!product) return null;

    return (
        <div
            className={`
                transition-all duration-500 ease-out
                ${
                    isVisible
                        ? "opacity-100 translate-y-0 max-h-[500px] mt-4"
                        : "opacity-0 -translate-y-4 max-h-0 overflow-hidden mt-0"
                }
            `}
            aria-hidden={!isVisible}
        >
            {/* Divider */}
            <hr className="border-vico-gray-200 mb-4" />

            {/* Card Container */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-vico-gray-100">
                {/* Label */}
                <p className="text-small text-vico-gray-600 text-center mb-2">
                    Sản phẩm liên quan
                </p>

                {/* Product Image */}
                <div className="relative w-full max-w-[180px] aspect-square mx-auto mb-3">
                    <Image
                        src={product.image || "/imgs/placeholder.png"}
                        alt={product.title || "Sản phẩm"}
                        fill
                        className="object-contain"
                        sizes="180px"
                    />
                </div>

                {/* Product Title */}
                <h4 className="text-body font-semibold text-vico-text text-center line-clamp-2 mb-3">
                    {product.title}
                </h4>

                {/* CTA Button */}
                <Link
                    href={product.link || "#"}
                    className="block w-full bg-vico-green text-white font-semibold text-body py-2 rounded-full text-center hover:bg-vico-green-hover transition-colors"
                >
                    Xem chi tiết
                </Link>
            </div>
        </div>
    );
}
