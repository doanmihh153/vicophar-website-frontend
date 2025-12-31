/**
 * ============================================================================
 * NEWS COMPANY PAGE - MAIN PAGE COMPONENT
 * ============================================================================
 *l
 * Trang Tin tức công ty
 *
 * REFACTORED: Sử dụng ArticleListingLayout để tránh duplicate code
 * Component này giờ chỉ làm data provider - pass data vào shared layout
 *
 * LAYOUT STRUCTURE:
 * -----------------
 * Sử dụng ArticleListingLayout với:
 * - Hero Banner
 * - Breadcrumb
 * - Featured Articles Grid
 * - Main Content (Article List + Category Sidebar)
 * - Newsletter Section
 *
 * ============================================================================
 */

"use client";

import React from "react";
import ArticleListingLayout from "@/components/layouts/ArticleListingLayout/ArticleListingLayout";
import { newsHeroBanner, newsCategories, newsArticles } from "@/data/newsPage";

export default function NewsCompanyPage({ initialCategory = "tat-ca" }) {
    return (
        <ArticleListingLayout
            // Hero props
            heroImage={newsHeroBanner.imageUrl}
            heroAlt={newsHeroBanner.altText}
            heroAriaLabel="Tin tức công ty Vicophar"
            // Breadcrumb props
            breadcrumbItems={[
                { label: "Trang Chủ", href: "/" },
                { label: "Tin Tức" },
            ]}
            // Featured section props
            featuredTitle="Tin tức công ty"
            featuredArticles={newsArticles}
            // Main content props
            articles={newsArticles}
            categories={newsCategories}
            initialCategory={initialCategory}
        />
    );
}
