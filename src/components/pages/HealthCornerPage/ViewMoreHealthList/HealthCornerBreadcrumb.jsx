/**
 * ============================================================================
 * HEALTH CORNER BREADCRUMB
 * ============================================================================
 *
 * Component breadcrumb tái sử dụng cho các trang trong Góc Sức Khỏe
 * - Trang chủ (icon trên mobile)
 * - Góc Sức Khỏe (icon trên mobile)
 * - Category (optional, text trên mobile)
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";
import { HomeIcon, HealthIcon } from "@/assets/icons";

export default function HealthCornerBreadcrumb({
    categoryName,
    categorySlug,
    className = "",
}) {
    const items = [
        {
            label: "Trang Chủ",
            href: "/",
            icon: <HomeIcon className="w-5 h-5" />,
        },
        {
            label: "Góc Sức Khỏe",
            href: "/goc-suc-khoe",
            icon: <HealthIcon className="w-5 h-5" />,
        },
    ];

    // Thêm category nếu có
    if (categoryName && categorySlug) {
        items.push({
            label: categoryName,
            href: `/goc-suc-khoe/${categorySlug}`,
            // No icon - keep text for context on mobile
        });
    } else if (categoryName) {
        // Category cuối cùng (không có link)
        items.push({
            label: categoryName,
        });
    }

    return <Breadcrumb items={items} className={className} />;
}
