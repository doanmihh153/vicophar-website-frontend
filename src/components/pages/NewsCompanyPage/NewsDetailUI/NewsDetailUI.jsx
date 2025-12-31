/**
 * ============================================================================
 * NEWS DETAIL UI - TRANG BÀI VIẾT CHI TIẾT (TIN TỨC CÔNG TY)
 * ============================================================================
 *
 * Trang hiển thị bài viết chi tiết cho News Company.
 * Structure kế thừa từ HealthCornerPage/SlugUI để đảm bảo consistency & SEO.
 *
 * REUSED COMPONENTS (từ common):
 * - ArticleHeader, ArticleBanner, TableOfContents, ArticleRenderer...
 * - HelpSidebar
 *
 * ADAPTATION:
 * - Breadcrumb logic riêng cho News
 * - Category Mapping riêng cho News
 *
 * ============================================================================
 */

"use client";

import React from "react";
import HelpSidebar from "@/components/common/HelpSidebar";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";
import ArticleDetailLayout from "@/components/layouts/ArticleDetailLayout/ArticleDetailLayout";
import StickyHeroBanner from "@/components/common/StickyHeroBanner/StickyHeroBanner";

// Article Detail Components (từ common - Reused from HealthCorner)
import {
    ArticleHeader,
    // ArticleBanner, // Removed: Using StickyHeroBanner instead
    TableOfContents,
    ArticleRenderer,
    ArticleRating,
    ArticleDisclaimer,
    CommentForm,
    FeaturedComments,
} from "@/components/common/Article/ArticleDetail";

import CategoryArticleSection from "@/components/common/CategoryArticleSection";
import { newsArticles } from "@/data/newsPage";

export default function NewsDetailUI({ article }) {
    const { title, content } = article;

    // Breadcrumb Items
    const breadcrumbItems = [
        { label: "Trang Chủ", href: "/" },
        { label: "Tin Tức", href: "/tin-tuc-cong-ty" },
        // Category Label - Cấp cuối cùng (active)
        {
            label: article.category,
            href: `/tin-tuc-cong-ty/${article.categorySlug}`,
        },
    ];

    return (
        <ArticleDetailLayout
            mainClassName="news-detail-page bg-vico-hover min-h-screen"
            // 1. Breadcrumbs
            breadcrumbs={
                <div className="py-4 bg-vico-green-light/50 border-b border-vico-gray-200 rounded-t-2xl">
                    <div className="vico-container">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
            }
            // 2. Hero (Sticky)
            hero={<StickyHeroBanner src={article.image} alt={title} />}
            // 3. Wrapper (Handles the overlay effect -mt)
            wrapperClassName="relative z-10 -mt-20 tablet:-mt-32 desktop:-mt-40 pb-10"
            backgroundLayer={
                <div className="absolute inset-0 top-20 tablet:top-32 desktop:top-40 bg-vico-hover -z-10" />
            }
            // 4. Sidebar
            sidebar={<HelpSidebar linkedProduct={article.linkedProduct} />}
            // 5. Related Articles
            relatedSection={
                <section className="relative z-10 bg-vico-white py-12">
                    <div className="vico-container">
                        <CategoryArticleSection
                            title="Tin liên quan"
                            variant="grid"
                            articles={newsArticles
                                .filter(
                                    (a) =>
                                        a.categorySlug ===
                                            article.categorySlug &&
                                        a.id !== article.id
                                )
                                .slice(0, 4)} // Mock limit
                            seeMoreLink={`/tin-tuc-cong-ty/${article.categorySlug}`}
                        />
                    </div>
                </section>
            }
        >
            {/* MAIN CONTENT CHILDREN (The Article) */}
            <article className="category-article-section">
                {/* ============================================
                    SECTION 1: NỘI DUNG CHÍNH BÀI VIẾT
                    ============================================ */}
                <section
                    aria-label="Nội dung bài viết"
                    className="bg-vico-white p-4 tablet:p-6 rounded-2xl"
                >
                    {/* 1. Header: H1 + Meta + Summary + CTA */}
                    <ArticleHeader article={article} />

                    {/* 2. Banner Image - REMOVED inside article since we have sticky hero */}

                    {/* 3. Table of Contents (collapsible) */}
                    {/* Only show if content exists/is long enough */}
                    {content && <TableOfContents content={content} />}

                    {/* 4. Article Content (H2-H6 only, no H1) */}
                    <div id="article-content" className="mt-8">
                        <ArticleRenderer
                            content={
                                content || "<p>Nội dung đang cập nhật...</p>"
                            }
                        />
                    </div>
                </section>
            </article>
        </ArticleDetailLayout>
    );
}
