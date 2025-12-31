"use client";

import React from "react";

/**
 * CẤU HÌNH NHÃN (LABELS) CHO THÔNG TIN SẢN PHẨM
 * Có thể thêm/sửa/xóa các trường tại đây
 */
const PRODUCT_SPECS = [
    { key: "brand", label: "Thương hiệu" },
    { key: "categoryName", label: "Danh mục" },
    { key: "unit", label: "Quy cách" },
    { key: "manufacturer", label: "Nhà sản xuất" },
    { key: "country", label: "Xuất xứ" },
];

/**
 * ============================================================================
 * QUICK VIEW INFO COMPONENT
 * ============================================================================
 *
 * Hiển thị thông tin chi tiết sản phẩm: Tên, Specs, Mô tả
 *
 * PROPS:
 * ------
 * @param {Object} product - Dữ liệu sản phẩm
 */
export default function QuickViewInfo({ product }) {
    if (!product) return null;

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/*
             * HEADER
             * Bao gồm: Badge Bán chạy + Tên sản phẩm
             */}
            <div className="mb-2 desktop:mb-6 shrink-0">
                {/* H2 tag cho tên sản phẩm - Quan trọng cho SEO on-page của modal */}
                <h2
                    id="modal-title"
                    className="text-xl md:text-2xl desktop:text-3xl font-bold text-gray-900 leading-[1.2]! line-clamp-2"
                    itemProp="name" // Schema.org Property
                >
                    {product.title}
                </h2>
            </div>
            {/*
             * SPECIFICATIONS LIST
             * Hiển thị các thông số: Thương hiệu, Danh mục, Quy cách...
             * Configurable Labels: Dễ dàng thay đổi text hiển thị
             * Hidden on Mobile as per request
             */}
            {/*
             * SPECIFICATIONS LIST
             * Hiển thị các thông số: Thương hiệu, Danh mục, Quy cách...
             * Configurable Labels: Dễ dàng thay đổi text hiển thị
             * Hidden on Mobile as per request
             */}
            <div className="mb-6 space-y-2 text-base hidden desktop:block">
                {PRODUCT_SPECS.map(({ key, label }) => (
                    <InfoRow key={key} label={label} value={product[key]} />
                ))}
            </div>
            {/*
             * DESCRIPTION
             * Mô tả ngắn gọn về sản phẩm
             * Sử dụng scrollbar custom nếu nội dung quá dài
             */}
            <div className="prose prose-sm md:prose-base text-gray-600 mb-4 grow overflow-y-auto pr-2 custom-scrollbar">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                    Mô tả sản phẩm
                </h3>
                <p itemProp="description">{product.description}</p>
            </div>
        </div>
    );
}

// Component con hiển thị 1 dòng thông tin
function InfoRow({ label, value }) {
    if (!value) return null;
    return (
        <div className="flex">
            <span className="w-32 text-gray-500 shrink-0">{label}:</span>
            <span className="font-medium text-gray-900">{value}</span>
        </div>
    );
}
