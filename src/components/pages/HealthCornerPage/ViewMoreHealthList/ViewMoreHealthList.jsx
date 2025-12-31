/**
 * ============================================================================
 * VIEW MORE HEALTH LIST - HEALTH CATEGORY PAGE
 * ============================================================================
 *
 * Trang chi tiết từng danh mục Góc Sức Khỏe
 * Refactored: Sử dụng ArticleListingLayout
 *
 * USED FOR:
 * ---------
 * - /goc-suc-khoe/dinh-duong-loi-song
 * - /goc-suc-khoe/ho-tro-dieu-tri
 * - /goc-suc-khoe/suc-khoe-me-va-be
 *
 * ============================================================================
 */

"use client";

import React from "react";
import ArticleListingLayout from "@/components/layouts/ArticleListingLayout/ArticleListingLayout";
import HelpSidebar from "@/components/common/HelpSidebar";
import { healthHeroBanner, healthCategorySections } from "@/data/healthCorner";

export default function ViewMoreHealthList({ slug }) {
    // Tìm category dựa trên slug
    const category = healthCategorySections.find((cat) => cat.slug === slug);

    // Nếu không tìm thấy category, hiển thị placeholder
    if (!category) {
        return (
            <div className="vico-container py-20">
                <h1 className="text-4xl font-bold text-vico-green mb-6">
                    Danh mục không tồn tại
                </h1>
                <p className="text-lg text-gray-600">
                    Vui lòng chọn danh mục khác.
                </p>
            </div>
        );
    }

    return (
        <ArticleListingLayout
            // Hero props
            heroImage={healthHeroBanner.imageUrl}
            heroAlt={healthHeroBanner.altText}
            heroAriaLabel={`Banner trang ${category.title}`}
            // Breadcrumb props
            breadcrumbItems={[
                { label: "Trang Chủ", href: "/" },
                { label: "Góc Sức Khỏe", href: "/goc-suc-khoe" },
                { label: category.title },
            ]}
            // Featured section props
            featuredTitle={category.title}
            featuredArticles={category.articles}
            // Sidebar props
            sidebarContent={<HelpSidebar />}
            // Main content props (Article List)
            articles={category.articles} // Will use default ArticleList logic
            categories={[]} // Not needed
            showCategoryFilter={false} // Disable filter header
        />
    );
}
