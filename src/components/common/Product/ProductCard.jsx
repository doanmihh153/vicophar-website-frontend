/**
 * ============================================================================
 * PRODUCT CARD COMPONENT
 * ============================================================================
 *
 * Component hiển thị thông tin sản phẩm dạng card
 * Sử dụng trong: Featured Products, Recommended Products, etc.
 *
 * PROPS:
 * ------
 * @param {Object} product - Thông tin sản phẩm
 * @param {string} product.title - Tên sản phẩm
 * @param {string} product.description - Mô tả ngắn
 * @param {string} product.image - Đường dẫn ảnh
 * @param {string} product.link - Link đến trang chi tiết
 * @param {boolean} product.isBestSeller - Hiển thị badge "Bán chạy"
 * @param {boolean} priority - (Optional) Ưu tiên load ảnh (cho LCP optimization)
 *
 * FEATURES:
 * ---------
 * ✅ Badge "Bán chạy" (nếu isBestSeller = true)
 * ✅ Image optimization với Next.js Image
 * ✅ LCP optimization với priority prop
 * ✅ Hover effects
 * ✅ SEO optimization (Schema.org Product)
 * ✅ Accessibility (ARIA labels)
 *
 * USAGE:
 * ------
 * // Card thường
 * <ProductCard product={productData} />
 *
 * // Card đầu tiên (LCP optimization)
 * <ProductCard product={productData} priority={true} />
 *
 * ============================================================================
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductQuickView from "./ProductQuickView/ProductQuickView";
import BestSellerBadge from "./BestSellerBadge";

export default function ProductCard({
    product,
    priority = false,
    className = "",
}) {
    // ========================================
    // STATE - Quản lý Modal
    // ========================================
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    // ========================================
    // VALIDATION - Kiểm tra dữ liệu đầu vào
    // ========================================
    if (!product) {
        console.warn("ProductCard: Missing product data");
        return null;
    }

    const {
        id,
        title,
        description,
        image,
        link,
        isBestSeller = false,
    } = product;

    // ========================================
    // RENDER COMPONENT
    // ========================================
    // ========================================
    // RENDER COMPONENT
    // ========================================
    return (
        <div className="relative w-full h-[380px] md:h-[480px] desktop:h-[520px]">
            <Link
                href={link || "#"}
                className="group block h-full"
                aria-label={`Xem chi tiết sản phẩm: ${title}`}
            >
                {/* ========================================
                    BADGE "BÁN CHẠY" - NGOÀI ARTICLE, CÙNG CẤP VỚI LINK
                    ========================================
                    - Nằm cùng cấp với article để tràn ra ngoài
                    - Viền trái tiếp xúc với rìa container
                    - Màu: vico-orange (#F4831F) và vico-orange-dark (#BF610D)
                    ======================================== */}
                {product?.isBestSeller && <BestSellerBadge />}

                <article
                    className={`relative h-full bg-white rounded-lg border border-vico-gray-200 transition-all duration-vico-normal overflow-hidden ${className}`}
                    itemScope
                    itemType="https://schema.org/Product"
                    role="article"
                >
                    {/* ========================================
                        PRODUCT IMAGE - Trung tâm, object-contain
                        ========================================
                        - Size: Responsive max 264px
                        - Margin top: 8px để tạo khoảng trống
                        - Priority: Dùng cho LCP optimization (card đầu tiên)
                        ======================================== */}
                    <div className="relative w-full max-w-[200px] md:max-w-[240px] desktop:max-w-[264px] aspect-square mx-auto mt-2 px-2">
                        <Image
                            src={image || "/imgs/placeholder.png"}
                            alt={title || "Sản phẩm Vicophar"}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 260px, 300px"
                            itemProp="image"
                            priority={priority}
                            loading={priority ? "eager" : "lazy"}
                        />
                    </div>

                    {/* ========================================
                        PRODUCT INFO - Title và Description
                        - Title: Bold, xanh, 2 dòng max
                        - Description: Gray, 3 dòng max
                        ======================================== */}
                    <div className="px-2 pb-2 md:px-4 md:pb-4">
                        {/* Product Title */}
                        <h3
                            className="mt-2 md:mt-4 mb-2 md:mb-3 text-h4 tracking-0 line-clamp-2 transition-colors duration-vico-fast"
                            itemProp="name"
                            role="heading"
                            aria-level="3"
                        >
                            {title}
                        </h3>

                        {/* Product Description */}
                        <p
                            className="text-small md:text-body desktop:text-body line-clamp-2"
                            itemProp="description"
                        >
                            {description}
                        </p>
                    </div>

                    {/* ========================================
                        HIDDEN SEO DATA - Cho search engines
                        ======================================== */}
                    <meta itemProp="brand" content="Vicophar Việt Nam" />
                    <meta
                        itemProp="manufacturer"
                        content="Công ty Cổ phần Vicophar Việt Nam"
                    />
                    <link itemProp="url" href={link} />
                </article>
            </Link>

            {/* ========================================
                BUTTON "THÊM VÀO GIỎ" - Nằm ngoài Link
                - Nằm dưới article, cùng cấp với Link
                - Không bị ảnh hưởng bởi hover của Link
                ======================================== */}
            <button
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-32px)] h-8 md:h-9 desktop:h-10 bg-vico-green text-white text-sm md:text-base font-semibold rounded-full transition-colors duration-vico-fast"
                aria-label="Thêm vào giỏ hàng"
                onClick={(e) => {
                    e.preventDefault();
                    setIsQuickViewOpen(true);
                }}
            >
                <span className="leading-normal!">Xem thêm</span>
            </button>

            <ProductQuickView
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                product={product}
            />
        </div>
    );
}
