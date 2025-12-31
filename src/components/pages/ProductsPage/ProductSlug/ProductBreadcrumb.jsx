/**
 * ============================================================================
 * PRODUCT BREADCRUMB
 * ============================================================================
 *
 * Component breadcrumb cho trang chi tiết sản phẩm
 * Follow pattern của HealthCornerBreadcrumb, sử dụng shared Breadcrumb component
 *
 * RESPONSIVE BEHAVIOR (theo shared component - breakpoint tablet:768px):
 * - Mobile: Icon (Home) > Icon (Product) > [Category text]
 * - Tablet+: Trang Chủ > Sản phẩm > [Category text]
 *
 * NOTE: Category không có href (không click được), không có icon (luôn hiển thị text)
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";
import { HomeIcon, ProductIcon } from "@/assets/icons";

export default function ProductBreadcrumb({ categoryName, className = "" }) {
    const items = [
        {
            label: "Trang Chủ",
            href: "/",
            icon: <HomeIcon className="w-5 h-5" />,
        },
        {
            label: "Sản phẩm",
            href: "/san-pham",
            icon: <ProductIcon className="w-5 h-5" />,
        },
    ];

    // Thêm category nếu có (không có href = không click được, không có icon = text on all devices)
    if (categoryName) {
        items.push({
            label: categoryName,
            // No href - không click được
            // No icon - hiển thị text trên mọi thiết bị
        });
    }

    return <Breadcrumb items={items} className={className} />;
}
