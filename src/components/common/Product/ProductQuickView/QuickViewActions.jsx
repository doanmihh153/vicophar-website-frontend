"use client";

import React from "react";
import Link from "next/link";

/**
 * ============================================================================
 * QUICK VIEW ACTIONS COMPONENT
 * ============================================================================
 *
 * Chứa các nút thao tác: Mua ngay, Xem chi tiết
 *
 * PROPS:
 * ------
 * @param {string} title - Tên sản phẩm (cho log/tracking)
 * @param {string} title - Tên sản phẩm (cho log/tracking)
 * @param {string} productLink - Link đến trang chi tiết
 * @param {function} onClose - Hàm đóng modal
 */
export default function QuickViewActions({ title, productLink, onClose }) {
    return (
        <div className="flex flex-col desktop:flex-row gap-2 desktop:gap-4 mt-auto shrink-0 pt-4 border-t border-gray-100">
            {/* BUTTON MUA NGAY - CTA Chính */}
            <button
                onClick={() => {
                    console.log("Add to cart:", title);
                    // TODO: Tích hợp logic giỏ hàng ở đây
                }}
                className="flex-1 px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white bg-vico-green rounded-full transition-colors duration-200 text-center leading-normal"
                aria-label={`Mua ngay ${title}`}
            >
                Mua sản phẩm
            </button>

            {/* BUTTON XEM CHI TIẾT - CTA Phụ */}
            {/* Link nội bộ sử dụng Next/Link để tối ưu navigation */}
            <Link
                href={productLink || "#"}
                className="flex-1 px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-vico-green border-2 border-vico-green rounded-full transition-colors duration-200 text-center leading-normal"
                onClick={onClose}
                itemProp="url" // Schema.org Property: Link đến sản phẩm chính
            >
                Xem chi tiết
            </Link>
        </div>
    );
}
