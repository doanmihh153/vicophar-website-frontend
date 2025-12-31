/**
 * ============================================================================
 * CATEGORY ARTICLE SECTION - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component hiển thị section bài viết theo category
 *
 * VARIANTS:
 * ---------
 * - "default": Complex layout (Featured + Text + Links) - Used in HealthCornerPage
 * - "grid": 4-column grid layout - Used in SlugUI for related articles
 *
 * PROPS:
 * ------
 * @param {string} title - Tiêu đề category
 * @param {string} slug - URL slug cho "Xem tất cả" (for default variant)
 * @param {array} articles - Mảng bài viết
 * @param {string} className - Custom className
 * @param {string} variant - "default" | "grid"
 * @param {string} seeMoreLink - URL for "Xem thêm" (for grid variant)
 *
 * ============================================================================
 */

"use client";

import React from "react";
import GridVariant from "./GridVariant";
import DefaultVariant from "./DefaultVariant";

export default function CategoryArticleSection({
    title,
    slug,
    articles = [],
    className = "",
    variant = "default",
    seeMoreLink = null,
}) {
    // VARIANT: GRID (4 columns)
    if (variant === "grid") {
        return (
            <GridVariant
                title={title}
                articles={articles}
                seeMoreLink={seeMoreLink}
                className={className}
            />
        );
    }

    // VARIANT: DEFAULT (Complex layout)
    return (
        <DefaultVariant
            title={title}
            slug={slug}
            articles={articles}
            className={className}
        />
    );
}
