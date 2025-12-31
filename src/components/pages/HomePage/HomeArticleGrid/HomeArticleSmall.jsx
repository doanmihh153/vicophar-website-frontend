/**
 * ============================================================================
 * HOME ARTICLE SMALL - CARD BÀI VIẾT NHỎ
 * ============================================================================
 *
 * Component hiển thị bài viết nhỏ (horizontal layout)
 * Kế thừa image styles từ ArticleGrid
 * Có HoverCard tooltip preview
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArticlePreviewTooltip from "./ArticlePreviewTooltip";

export default function HomeArticleSmall({ article, className = "" }) {
    if (!article) return null;

    const { title, description, image, link, category } = article;

    return (
        <ArticlePreviewTooltip article={article}>
            <Link
                href={link}
                className={`group block ${className}`}
                aria-label={`Đọc bài viết: ${title}`}
            >
                <article className="flex gap-3 tablet:gap-4 items-start border-t border-neutral-200 pt-4 md:border-0 md:pt-0">
                    {/* Image - Kế thừa từ ArticleGrid */}
                    <div className="relative w-[140px] h-vico-header-top tablet:w-[180px] tablet:h-[120px] desktop:w-[200px] desktop:h-[130px] shrink-0 rounded-xl overflow-hidden bg-gray-100">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 140px, (max-width: 1024px) 180px, 200px"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-1 overflow-hidden">
                        {/* Category Badge */}
                        {category && (
                            <span className="inline-block mb-1 text-xs text-vico-gray-500 font-medium bg-vico-green-light text-vico-gray-600 p-1 rounded-lg">
                                {category}
                            </span>
                        )}

                        {/* Title */}
                        <h3 className="text-h4 font-semibold text-vico-gray-900 mb-1 group-hover:text-vico-green transition-colors line-clamp-3">
                            {title}
                        </h3>
                    </div>
                </article>
            </Link>
        </ArticlePreviewTooltip>
    );
}
