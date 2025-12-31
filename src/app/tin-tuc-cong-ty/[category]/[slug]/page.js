/**
 * ============================================================================
 * NEWS DETAIL PAGE - DYNAMIC ROUTE
 * ============================================================================
 *
 * Route: /tin-tuc-cong-ty/[category]/[slug]
 * Example: /tin-tuc-cong-ty/khuyen-mai/sieu-sale-ngay-doi
 *
 * ============================================================================
 */

import React from "react";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/newsPage";
import NewsDetailUI from "@/components/pages/NewsCompanyPage/NewsDetailUI/NewsDetailUI";

// SSG: Generate parameters for all articles at build time
export async function generateStaticParams() {
    return newsArticles.map((article) => ({
        category: article.categorySlug,
        slug: article.slug,
    }));
}

// Metadata generation
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = newsArticles.find((item) => item.slug === slug);

    if (!article) {
        return {
            title: "Tin Tức | Vicophar Việt Nam",
        };
    }

    return {
        title: `${article.title} | Vicophar Việt Nam`,
        description: article.description,
    };
}

export default async function NewsDetailPage({ params }) {
    const { category, slug } = await params;

    // Find article
    const article = newsArticles.find(
        (item) => item.slug === slug && item.categorySlug === category
    );

    if (!article) {
        notFound();
    }

    return <NewsDetailUI article={article} />;
}
