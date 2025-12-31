/**
 * ============================================================================
 * SLUG UI - TRANG BÀI VIẾT CHI TIẾT
 * ============================================================================
 *
 * Trang hiển thị bài viết đầy đủ với cấu trúc SEO-friendly:
 * - Chỉ có DUY NHẤT 1 H1 tag (ở ArticleHeader)
 * - Layout 2 cột: Content (9 cols) + Sidebar (3 cols)
 * - Thứ tự content đúng chuẩn SEO
 *
 * ============================================================================
 */

"use client";

import React from "react";
import ArticleDetailLayout from "@/components/layouts/ArticleDetailLayout/ArticleDetailLayout";
import HelpSidebar from "@/components/common/HelpSidebar";

// Article Detail Components (từ common)
import {
    ArticleHeader,
    ArticleBanner,
    TableOfContents,
    ArticleRenderer,
    ArticleRating,
    ArticleDisclaimer,
    CommentForm,
    FeaturedComments,
} from "@/components/common/Article/ArticleDetail";

// Other imports
import CategoryArticleSection from "@/components/common/CategoryArticleSection";
import HealthCornerBreadcrumb from "../HealthCornerBreadcrumb";
import { healthArticles } from "@/data/healthCorner";

/**
 * Extract category info from article link
 */
function getCategoryFromLink(link) {
    const parts = link.split("/");
    const categorySlug = parts[2]; // /goc-suc-khoe/[category]/[slug]

    const categoryMap = {
        "suc-khoe-me-va-be": "Sức khoẻ mẹ và bé",
        "ho-tro-dieu-tri": "Hỗ trợ điều trị và phòng ngừa bệnh",
        "dinh-duong-loi-song": "Dinh dưỡng và lối sống",
    };

    return {
        slug: categorySlug,
        name: categoryMap[categorySlug] || "Góc Sức Khỏe",
    };
}

export default function SlugUI({ article }) {
    const { title, content } = article;
    const category = getCategoryFromLink(article.link);

    return (
        <ArticleDetailLayout
            mainClassName="slug-article"
            // 1. Breadcrumbs
            breadcrumbs={
                <section className="py-4 bg-vico-green-light border-b border-vico-gray-200">
                    <div className="vico-container">
                        <HealthCornerBreadcrumb
                            categoryName={category.name}
                            categorySlug={category.slug}
                        />
                    </div>
                </section>
            }
            // 2. Hero (None for SlugUI)
            hero={null}
            // 3. Wrapper
            WrapperTag="section"
            containerId="article-section"
            wrapperClassName="py-10 pt-4 bg-vico-hover"
            // 4. Sidebar
            sidebar={<HelpSidebar />}
            // 5. Related Articles
            relatedSection={
                <section>
                    {/* RELATED ARTICLES SECTION (Moved outside article, full width) */}
                    <div className="mb-16 bg-vico-white">
                        <CategoryArticleSection
                            title="Các bài tin liên quan"
                            variant="grid"
                            articles={healthArticles.filter(
                                (a) =>
                                    a.link.includes(category.slug) &&
                                    a.id !== article.id
                            )}
                            seeMoreLink={`/goc-suc-khoe/${category.slug}`}
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
                    className="bg-vico-white -mx-4 tablet:-mx-5 desktop:mx-0 p-4 tablet:p-6 rounded-none desktop:rounded-2xl"
                >
                    {/* 1. Header: H1 + Meta + Summary + CTA */}
                    <ArticleHeader article={article} />

                    {/* 2. Banner Image */}
                    <ArticleBanner
                        image={article.image}
                        alt={title}
                        title={title}
                    />

                    {/* 3. Table of Contents (collapsible) */}
                    <TableOfContents content={content} />

                    {/* 4. Article Content (H2-H6 only, no H1) */}
                    <div id="article-content">
                        <ArticleRenderer content={content} />
                    </div>

                    {/* 5. Rating */}
                    <ArticleRating articleId={article.id} />

                    {/* 6. Disclaimer - Lưu ý pháp lý */}
                    <ArticleDisclaimer />
                </section>

                {/* ============================================
                    SECTION 2: TƯƠNG TÁC & BÀI VIẾT LIÊN QUAN
                    ============================================ */}
                <section
                    aria-label="Bình luận và bài viết liên quan"
                    className="mt-6"
                >
                    {/* 7. Comment Form */}
                    <CommentForm articleId={article.id} />

                    {/* 8. Featured Comments */}
                    <FeaturedComments articleId={article.id} />
                </section>
            </article>
        </ArticleDetailLayout>
    );
}
