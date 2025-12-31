"use client";

import React from "react";
import Image from "next/image";

/**
 * ============================================================================
 * QUICK VIEW IMAGE COMPONENT
 * ============================================================================
 *
 * Hiển thị hình ảnh sản phẩm trong modal Quick View
 * Đảm bảo hiển thị tốt trên mọi thiết bị và tối ưu SEO
 *
 * PROPS:
 * ------
 * @param {string} image - Đường dẫn ảnh
 * @param {string} title - Tên sản phẩm dùng cho Alt text (SEO)
 */
export default function QuickViewImage({ image, title }) {
    return (
        <div className="w-full md:w-1/2 h-[35%] md:h-full bg-white relative shrink-0 rounded-none md:rounded-tr-none md:rounded-l-2xl mt-4 tablet:mt-0">
            {/*
             * CONTAINER ẢNH
             * padding lớn để tạo khoảng trắng xung quanh ảnh
             */}
            <div className="relative w-full h-full px-8 py-8 md:px-12 md:py-12">
                <Image
                    src={image || "/imgs/placeholder.png"}
                    alt={title || "Hình ảnh sản phẩm"}
                    fill
                    className="object-contain" // Giữ tỉ lệ ảnh, không bị méo
                    sizes="(max-width: 768px) 100vw, 550px" // Optimization cho Next.js Image
                    itemProp="image" // Microdata cho SEO (Schema.org/Product)
                />
            </div>
        </div>
    );
}
