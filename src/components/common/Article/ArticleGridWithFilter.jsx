/**
 * ============================================================================
 * ARTICLE GRID WITH FILTER - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component hiển thị danh sách bài viết với FilterTabs - Section chính
 *
 * PROPS:
 * ------
 * @param {string} title - Tiêu đề section (VD: "TIN TỨC CÔNG TY")
 * @param {array} articles - Mảng bài viết { id, title, image, link, isFeatured, category }
 * @param {string} className - Custom className cho section
 * @param {array} filterTabs - Mảng tabs cho filter [{ id, label }]
 * @param {string} activeFilter - ID của filter đang active
 * @param {function} onFilterChange - Callback khi thay đổi filter
 *
 * LAYOUT:
 * -------
 * - Grid 12 cột:
 *   - 7 cột trái: Featured article (1 bài lớn)
 *   - 5 cột phải: List articles (4 bài nhỏ)
 * - Background: #E7FFEA
 * - Không có border
 * - Không có link "Xem tất cả"
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ArticleGridWithFilter({
    title = "TIN TỨC CÔNG TY",
    articles = [],
    className = "",
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
        <section
            className={`py-10 tablet:py-16 desktop:py-10 ${className}`}
            style={{ backgroundColor: "#E7FFEA" }}
        >
            <div className="vico-container">
                {/* HEADER: Title */}
                <div className="mb-8">
                    <h1 className="text-h1 font-bold text-vico-red mb-6 uppercase">
                        {title}
                    </h1>
                </div>

                {/* CONTENT GRID - 7 cols (Featured) + 5 cols (List) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[600px]">
                    {/* LEFT COLUMN - FEATURED ARTICLE (7 COLS) */}
                    <div className="lg:col-span-7 h-full">
                        {featuredArticle && (
                            <Link
                                href={featuredArticle.link}
                                className="group block h-full"
                            >
                                <article className="h-full flex flex-col transition-shadow duration-300">
                                    <div className="relative w-full aspect-16/10 lg:h-auto lg:aspect-auto lg:flex-1 lg:min-h-0 overflow-hidden rounded-2xl">
                                        <Image
                                            src={featuredArticle.image}
                                            alt={featuredArticle.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 58vw"
                                        />
                                    </div>
                                    <div className="pt-4 shrink-0">
                                        {/* Category Badge */}
                                        {featuredArticle.category && (
                                            <span className="inline-block px-3 py-1 bg-vico-white text-vico-green text-small font-medium rounded-full mb-3 line-clamp-2">
                                                {featuredArticle.category}
                                            </span>
                                        )}
                                        <h2 className="text-h2 leading-[1.3]! font-bold text-vico-gray-900 transition-colors line-clamp-2">
                                            {featuredArticle.title}
                                        </h2>
                                    </div>
                                </article>
                            </Link>
                        )}
                    </div>

                    {/* RIGHT COLUMN - LIST ARTICLES (5 COLS) */}
                    <div className="lg:col-span-5 h-full grid grid-rows-4 gap-3 tablet:gap-4">
                        {listArticles.map((article) => (
                            <Link
                                key={article.id}
                                href={article.link}
                                className="group block h-full"
                            >
                                <article className="flex gap-3 tablet:gap-4 items-center h-full duration-300">
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
                                        {/* Category Badge */}
                                        {article.category && (
                                            <span className="inline-block px-2 py-0.5 bg-vico-white text-vico-green text-xs font-medium rounded-full mb-2">
                                                {article.category}
                                            </span>
                                        )}
                                        <h3 className="text-h4 font-semibold text-vico-gray-900 transition-colors line-clamp-3">
                                            {article.title}
                                        </h3>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
