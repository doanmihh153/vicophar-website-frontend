/**
 * ============================================================================
 * HEALTH CORNER PAGE - GÓC SỨC KHỎE VICOPHAR
 * ============================================================================
 *
 * Trang Góc sức khỏe hiển thị các category sections
 * Sử dụng ArticleListingLayout để đảm bảo consistency
 *
 * STRUCTURE:
 * ----------
 * - Hero Banner (via Layout)
 * - Breadcrumb (via Layout)
 * - Featured Articles (via Layout)
 * - Main Content: List of CategoryArticleSection
 * - Sidebar: HelpSidebar
 * - Newsletter (via Layout)
 *
 * ============================================================================
 */

"use client";

import React from "react";
import ArticleListingLayout from "@/components/layouts/ArticleListingLayout/ArticleListingLayout";
import CategoryArticleSection from "@/components/common/CategoryArticleSection";
import HelpSidebar from "@/components/common/HelpSidebar";
import {
    healthHeroBanner,
    healthCategorySections,
    healthArticles,
} from "@/data/healthCorner";

export default function HealthCornerPage() {
    return (
        <ArticleListingLayout
            // Hero props
            heroImage={healthHeroBanner.imageUrl}
            heroAlt={healthHeroBanner.altText}
            heroAriaLabel="Banner trang Góc sức khỏe"
            // Breadcrumb props
            breadcrumbItems={[
                { label: "Trang Chủ", href: "/" },
                { label: "Góc Sức Khỏe" },
            ]}
            // Featured section props
            featuredTitle="Bài viết mới nhất"
            featuredArticles={healthArticles}
            // Sidebar props
            sidebarContent={<HelpSidebar />}
            // Main content props
            mainContent={
                <div className="flex flex-col gap-4 tablet:gap-4 desktop:gap-6">
                    {healthCategorySections.map((section) => (
                        <CategoryArticleSection
                            key={section.id}
                            title={section.title}
                            slug={section.slug}
                            articles={section.articles}
                        />
                    ))}
                </div>
            }
            // Options
            showCategoryFilter={false} // Disable default filter
            categories={[]} // Not needed as we use custom mainContent
        />
    );
}
