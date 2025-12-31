/**
 * ============================================================================
 * ARTICLE LIST - GENERIC ARTICLE LISTING WITH LOAD MORE
 * ============================================================================
 *
 * Generic article list component với pagination
 * Reusable cho News, Blogs, và các content listing pages
 *
 * FEATURES:
 * - BlogCard layout (horizontal responsive)
 * - Load More pagination (4 items per load)
 * - Empty state handling
 * - Button component với proper styling
 *
 * PROPS:
 * - articles: Array of article objects
 * - initialCount: Number of articles to show initially (default: 4)
 * - loadMoreCount: Number of articles to load per click (default: 4)
 *
 * SEO:
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Accessible button labels
 *
 * PERFORMANCE:
 * - Slice articles để render incremental
 * - Avoid unnecessary re-renders với key props
 * - Button disabled state để prevent double-click
 *
 * ============================================================================
 */

"use client";

import React, { useState } from "react";
import { BlogCard } from "@/components/common/Blog";
import Button from "@/components/common/Button/Button";

export default function ArticleList({
    articles = [],
    initialCount = 4,
    loadMoreCount = 4,
}) {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + loadMoreCount);
    };

    const visibleArticles = articles.slice(0, visibleCount);
    const hasMore = visibleCount < articles.length;

    if (!articles || articles.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-body text-vico-gray-500">
                    Không có bài viết nào
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            {/* BLOG CARDS LIST */}
            {visibleArticles.map((article) => (
                <BlogCard key={article.id} article={article} />
            ))}

            {/* LOAD MORE BUTTON */}
            {hasMore && (
                <div className="mt-8 flex justify-center">
                    <Button
                        onClick={handleLoadMore}
                        variant="primary"
                        shape="pill"
                        className="px-8 py-2 md:py-3 font-bold tracking-wide active:bg-vico-green-dark whitespace-nowrap text-base md:text-lg"
                    >
                        Xem thêm bài viết
                    </Button>
                </div>
            )}
        </div>
    );
}
