/**
 * ============================================================================
 * ARTICLE GRID - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component hiển thị danh sách bài viết với layout Grid - Có thể tái sử dụng
 *
 * PROPS:
 * ------
 * @param {string} title - Tiêu đề section (VD: "Bài viết nổi bật", "Tin tức công ty")
 * @param {string} viewAllLink - Link "Xem tất cả" (default: "/blog")
 * @param {array} articles - Mảng bài viết { id, title, description, image, link, isFeatured }
 * @param {string} className - Custom className cho section
 * @param {boolean} showBorder - Hiển thị border container (default: true)
 *
 * LAYOUT:
 * -------
 * - Grid 12 cột với 2 columns:
 *   - Col 1 (6 cols): Featured article (1 bài lớn)
 *   - Col 2 (6 cols): List articles (4 bài nhỏ)
 *
 * ============================================================================
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleGrid({
    title = "Bài viết nổi bật",
    viewAllLink = "/blog",
    articles = [],
    className = "",
    showBorder = true,
}) {
    // ========================================
    // DATA PROCESSING
    // ========================================

    const featuredArticle = articles.find((article) => article.isFeatured);
    const listArticles = articles
        .filter((article) => !article.isFeatured)
        .slice(0, 4);

    // ========================================
    // RENDER
    // ========================================

    return (
        <section className={`py-16 ${className}`}>
            <div className="vico-container">
                <div
                    className={`${
                        showBorder
                            ? "max-lg:bg-transparent max-lg:rounded-none max-lg:px-0 max-lg:pt-0 max-lg:pb-0 max-lg:border-0 bg-white rounded-2xl px-8 pt-4 pb-6 border border-vico-green"
                            : ""
                    }`}
                >
                    {/* HEADER SECTION */}
                    <div
                        className={`flex items-center justify-between mb-6 ${
                            showBorder
                                ? "max-lg:border-0 max-lg:pb-0 border-b border-vico-green pb-4"
                                : ""
                        }`}
                    >
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
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* CONTENT GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[600px]">
                        {/* LEFT COLUMN - FEATURED ARTICLE (6 COLS) */}
                        <div className="lg:col-span-6 h-full">
                            {featuredArticle && (
                                <Link
                                    href={featuredArticle.link}
                                    className="group block h-full"
                                >
                                    <article className="h-full flex flex-col">
                                        <div className="relative w-full aspect-16/10 lg:h-auto lg:aspect-auto lg:flex-1 lg:min-h-0 rounded-xl overflow-hidden mb-4">
                                            <Image
                                                src={featuredArticle.image}
                                                alt={featuredArticle.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                        <div className="shrink-0">
                                            <h3 className="text-h3 font-bold mb-3 group-hover:text-vico-green transition-colors line-clamp-2">
                                                {featuredArticle.title}
                                            </h3>
                                            <p className="text-small font-normal text-vico-text line-clamp-3">
                                                {featuredArticle.description}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            )}
                        </div>

                        {/* RIGHT COLUMN - LIST ARTICLES (6 COLS) */}
                        <div className="lg:col-span-6 h-full grid grid-rows-4 gap-2 tablet:gap-2 desktop:gap-4">
                            {listArticles.map((article) => (
                                <Link
                                    key={article.id}
                                    href={article.link}
                                    className="group block h-full"
                                >
                                    <article className="flex px-2 gap-3 tablet:gap-4 items-center h-full rounded-lg transition-colors">
                                        <div className="relative w-[140px] h-vico-header-top tablet:w-[180px] tablet:h-[120px] desktop:w-[200px] desktop:h-[130px] shrink-0 rounded-xl overflow-hidden bg-gray-100">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 140px, (max-width: 1024px) 180px, 200px"
                                            />
                                        </div>
                                        <div className="flex-1 py-1 overflow-hidden">
                                            <h3 className="text-h4 font-semibold text-vico-gray-900 mb-1 group-hover:text-vico-green transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-small font-normal text-vico-text line-clamp-2">
                                                {article.description}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
