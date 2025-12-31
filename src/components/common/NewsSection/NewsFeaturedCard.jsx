/**
 * ============================================================================
 * NEWS FEATURED CARD - CARD BÀI VIẾT LỚN
 * ============================================================================
 *
 * Component hiển thị bài viết featured (nổi bật)
 * Có HoverCard tooltip preview
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsPreviewTooltip from "./NewsPreviewTooltip";

export default function NewsFeaturedCard({ article, className = "" }) {
    if (!article) return null;

    const { title, description, image, link, category } = article;

    return (
        <NewsPreviewTooltip article={article}>
            <Link
                href={link}
                className={`group block h-full ${className}`}
                aria-label={`Đọc bài viết: ${title}`}
            >
                <article className="h-full flex flex-col">
                    {/* Image Container - Kế thừa từ ArticleGrid: aspect-16/10, lg:flex-1 */}
                    <div className="relative w-full aspect-16/10 lg:h-auto lg:aspect-auto lg:flex-1 lg:min-h-0 rounded-xl overflow-hidden mb-4">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Content */}
                    <div className="shrink-0">
                        {/* Category Badge */}
                        {category && (
                            <span className="inline-block mb-1 text-xs text-vico-gray-500 font-medium bg-vico-green-light text-vico-gray-600 p-1 rounded-lg">
                                {category}
                            </span>
                        )}

                        <h3 className="text-h3 font-bold mb-3 group-hover:text-vico-green transition-colors line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-small font-normal text-vico-text line-clamp-3">
                            {description}
                        </p>
                    </div>
                </article>
            </Link>
        </NewsPreviewTooltip>
    );
}
