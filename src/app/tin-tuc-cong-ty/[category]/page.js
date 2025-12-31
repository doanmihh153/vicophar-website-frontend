/**
 * ============================================================================
 * NEWS CATEGORY PAGE - DYNAMIC ROUTE
 * ============================================================================
 *
 * Route: /tin-tuc-cong-ty/[category]
 * Example: /tin-tuc-cong-ty/khuyen-mai
 *
 * ============================================================================
 */

import React from "react";
import { notFound } from "next/navigation";
import NewsCompanyPage from "@/components/pages/NewsCompanyPage";
import { newsCategories } from "@/data/newsPage";

// SSG: Generate parameters for all categories at build time
export async function generateStaticParams() {
    return newsCategories.map((cat) => ({
        category: cat.id,
    }));
}

// Metadata generation
export async function generateMetadata({ params }) {
    const { category } = await params;
    const currentCategory = newsCategories.find((cat) => cat.id === category);

    if (!currentCategory) {
        return {
            title: "Tin Tức Công Ty | Vicophar Việt Nam",
        };
    }

    return {
        title: `Tin ${currentCategory.name} | Vicophar Việt Nam`,
        description: `Cập nhật tin tức mới nhất về ${currentCategory.name.toLowerCase()} từ Vicophar Việt Nam`,
    };
}

export default async function NewsCategoryPage({ params }) {
    const { category } = await params;

    // Validate category
    const isValidCategory = newsCategories.some((cat) => cat.id === category);

    if (!isValidCategory) {
        notFound();
    }

    return <NewsCompanyPage initialCategory={category} />;
}
