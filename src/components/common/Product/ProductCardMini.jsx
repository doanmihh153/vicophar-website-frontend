/**
 * ============================================================================
 * PRODUCT CARD MINI - Phiên bản nhỏ gọn cho Sidebar
 * ============================================================================
 *
 * Component hiển thị sản phẩm dạng card nhỏ gọn.
 * Sử dụng trong: Article Sidebar, Related Products, etc.
 *
 * PROPS:
 * @param {Object} product - Thông tin sản phẩm (từ mockProducts)
 * @param {string} [label] - Label hiển thị trên card
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCardMini({
    product,
    label = "Sản phẩm liên quan",
}) {
    if (!product) return null;

    const { title, image, link } = product;

    return (
        <aside className="bg-white rounded-xl p-4" aria-label={label}>
            {/* Label */}
            {label && (
                <p className="text-base text-vico-gray-600 text-center mb-2 font-medium">
                    {label}
                </p>
            )}

            {/* Product Image */}
            <Link
                href={link || "#"}
                className="block"
                title={`Xem chi tiết sản phẩm ${title}`}
                aria-label={`Xem chi tiết sản phẩm ${title}`}
            >
                <div className="relative w-full max-w-[160px] aspect-square mx-auto mb-3">
                    <Image
                        src={image || "/imgs/placeholder.png"}
                        alt={`Hình ảnh sản phẩm ${title}`}
                        fill
                        className="object-contain"
                        sizes="160px"
                    />
                </div>
            </Link>

            {/* Product Title */}
            <h4 className="text-body font-bold text-vico-text text-center line-clamp-2 mb-3">
                <Link
                    href={link || "#"}
                    className="hover:text-vico-green transition-colors"
                    title={title}
                >
                    {title}
                </Link>
            </h4>

            {/* CTA Button */}
            <Link
                href={link || "#"}
                className="block w-full bg-vico-green text-white font-semibold text-body py-2 rounded-full text-center hover:bg-vico-green-hover transition-colors"
                title={`Mua ngay sản phẩm ${title}`}
            >
                Xem chi tiết
            </Link>
        </aside>
    );
}
