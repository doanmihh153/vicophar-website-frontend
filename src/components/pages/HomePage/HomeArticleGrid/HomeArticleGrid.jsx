/**
 * ============================================================================
 * HOME ARTICLE GRID - LAYOUT 3 CỘT BẰNG NHAU CHO TRANG CHỦ
 * ============================================================================
 *
 * Component hiển thị bài viết với layout đặc trưng cho HomePage
 * Layout: 3 cột bằng nhau, bài featured span 3 rows
 *
 * RESPONSIVE:
 * -----------
 * - Desktop (lg+): 3 cột, border, container với padding
 * - Mobile/Tablet (<lg): 1 cột, full-width, không border
 *
 * ============================================================================
 */

import React from "react";
import Link from "next/link";
import HomeArticleFeatured from "./HomeArticleFeatured";
import HomeArticleSmall from "./HomeArticleSmall";

export default function HomeArticleGrid({
    title = "Bài viết nổi bật",
    viewAllLink = "/goc-suc-khoe",
    articles = [],
    className = "",
}) {
    // ========================================
    // DATA PROCESSING
    // ========================================

    const featuredArticle = articles.find((article) => article.isFeatured);
    const smallArticles = articles
        .filter((article) => !article.isFeatured)
        .slice(0, 6);

    // ========================================
    // RENDER
    // ========================================

    return (
        <section
            className={`py-8 md:py-16 ${className}`}
            aria-label="Bài viết nổi bật"
        >
            <div className="vico-container">
                {/* Container - Giống ArticleGrid pattern với max-lg: override */}
                <div className="max-lg:bg-transparent max-lg:rounded-none max-lg:px-0 max-lg:pt-0 max-lg:pb-0 max-lg:border-0 bg-white rounded-2xl! px-4 pt-4 pb-4">
                    {/* HEADER SECTION */}
                    <div className="flex items-center justify-between mb-6 max-lg:border-0 max-lg:pb-0 border-b border-vico-green pb-4">
                        <h2 className="text-h2 font-bold text-vico-green uppercase">
                            {title}
                        </h2>
                        <Link
                            href={viewAllLink}
                            className="group flex items-center gap-1 text-vico-red font-semibold hover:text-vico-red-dark transition-colors"
                        >
                            <span className="text-body font-normal">
                                Xem tất cả
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* CONTENT GRID - 3 Equal Columns trên Desktop only */}
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
                        {/* FEATURED ARTICLE - span 3 rows */}
                        <div className="lg:row-span-3">
                            {featuredArticle && (
                                <HomeArticleFeatured
                                    article={featuredArticle}
                                />
                            )}
                        </div>

                        {/* SMALL ARTICLES - fill remaining cells */}
                        {smallArticles.map((article) => (
                            <div key={article.id}>
                                <HomeArticleSmall article={article} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
