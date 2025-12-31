/**
 * ============================================================================
 * ARTICLE CARD - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component card bài viết có thể tái sử dụng
 *
 * PROPS:
 * ------
 * @param {object} article - Object bài viết
 *   - id: string
 *   - title: string
 *   - description: string
 *   - image: string (URL)
 *   - category: string
 *   - date: string
 *   - link: string
 * @param {string} variant - "default" | "compact" (default: "default")
 * @param {string} className - Custom className
 *
 * USAGE:
 * ------
 * <ArticleCard
 *   article={{
 *     id: "1",
 *     title: "Tiêu đề bài viết",
 *     description: "Mô tả ngắn...",
 *     image: "/imgs/article.jpg",
 *     category: "Khuyến mãi",
 *     date: "04.06",
 *     link: "/tin-tuc/bai-viet-1"
 *   }}
 * />
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({
    article,
    variant = "default",
    className = "",
}) {
    if (!article) return null;

    const { title, description, image, category, date, link } = article;

    // Compact variant for sidebar
    if (variant === "compact") {
        return (
            <Link href={link} className={`group block ${className}`}>
                <article className="flex gap-3 items-start">
                    <div className="relative w-[140px] h-vico-header-top tablet:w-[180px] tablet:h-[120px] desktop:w-[200px] desktop:h-[130px] shrink-0 rounded-xl overflow-hidden bg-gray-100">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 140px, (max-width: 1024px) 180px, 200px"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-small font-normal text-vico-gray-500 mb-1">
                            {date}
                        </p>
                        <h4 className="text-small font-semibold text-vico-gray-900 line-clamp-2 group-hover:text-vico-green transition-colors">
                            {title}
                        </h4>
                    </div>
                </article>
            </Link>
        );
    }

    // Default variant for main grid
    return (
        <Link href={link} className={`group block h-full ${className}`}>
            <article className="h-full flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative w-full aspect-16/10 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {category && (
                        <div className="absolute top-3 left-3">
                            <span className="inline-block px-3 py-1 bg-vico-green text-white text-small font-medium rounded-full">
                                {category}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col">
                    <h3 className="text-h4 font-bold text-vico-gray-900 mb-2 line-clamp-2 group-hover:text-vico-green transition-colors">
                        {title}
                    </h3>
                    <p className="text-body font-normal text-vico-text line-clamp-3 mb-3 flex-1">
                        {description}
                    </p>
                    {date && (
                        <p className="text-small font-normal text-vico-gray-500">
                            {date}
                        </p>
                    )}
                </div>
            </article>
        </Link>
    );
}
