/**
 * ============================================================================
 * HEALTH CORNER CARD - THẺ BÀI VIẾT GÓC SỨC KHỎE
 * ============================================================================
 *
 * Component hiển thị bài viết trong góc sức khỏe
 * Tái sử dụng cho: HomePage, HealthCornerPage, RelatedPosts, etc.
 *
 * FEATURES:
 * ---------
 * ✅ Hiển thị ảnh thumbnail với Next Image
 * ✅ Tiêu đề bài viết (line-clamp)
 * ✅ Mô tả ngắn (excerpt)
 * ✅ Ngày đăng, tác giả (optional)
 * ✅ Category badge (optional)
 * ✅ Hover effect
 * ✅ SEO optimized
 *
 * PROPS:
 * ------
 * @param {object} article - Thông tin bài viết
 *   - id: string
 *   - title: string
 *   - slug: string
 *   - image: string
 *   - excerpt: string (mô tả ngắn)
 *   - category: string (optional)
 *   - author: string (optional)
 *   - publishedAt: string (optional)
 *
 * @param {string} variant - Kiểu hiển thị: "horizontal" | "vertical"
 * @param {string} className - Custom className
 *
 * USAGE:
 * ------
 * import HealthCornerCard from '@/components/common/HealthCornerCard';
 *
 * <HealthCornerCard article={articleData} variant="horizontal" />
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Component HealthCornerCard - Thẻ bài viết góc sức khỏe
 * @param {object} props - Props
 */
export default function HealthCornerCard({
    article,
    variant = "vertical", // "vertical" | "horizontal"
    className = "",
}) {
    // ========================================
    // DESTRUCTURE ARTICLE DATA
    // ========================================

    const { id, title, slug, image, excerpt, category, author, publishedAt } =
        article;

    // ========================================
    // FORMAT NGÀY THÁNG
    // ========================================

    const formatDate = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);
        return new Intl.DateTimeFormat("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).format(date);
    };

    // ========================================
    // RENDER VERTICAL (Dọc)
    // ========================================

    if (variant === "vertical") {
        return (
            <article className={`vico-card group ${className}`}>
                <Link
                    href={`/goc-suc-khoe/${slug}`}
                    className="block"
                    aria-label={`Đọc bài viết: ${title}`}
                >
                    {/* Ảnh thumbnail */}
                    <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                        />

                        {/* Category badge */}
                        {category && (
                            <div className="absolute top-3 left-3 bg-vico-green text-white px-3 py-1 rounded-full text-small font-medium">
                                {category}
                            </div>
                        )}
                    </div>

                    {/* Nội dung */}
                    <div className="p-4 flex flex-col gap-2">
                        {/* Tiêu đề */}
                        <h3 className="text-h4 line-clamp-2 min-h-[56px]">
                            {title}
                        </h3>

                        {/* Mô tả ngắn */}
                        {excerpt && (
                            <p className="text-vico-text-light text-small line-clamp-3">
                                {excerpt}
                            </p>
                        )}

                        {/* Meta info */}
                        <div className="flex items-center gap-3 text-xs text-vico-text-light mt-auto">
                            {publishedAt && (
                                <span>{formatDate(publishedAt)}</span>
                            )}
                            {author && publishedAt && <span>•</span>}
                            {author && <span>{author}</span>}
                        </div>
                    </div>
                </Link>
            </article>
        );
    }

    // ========================================
    // RENDER HORIZONTAL (Ngang)
    // ========================================

    return (
        <article className={`vico-card group flex ${className}`}>
            <Link
                href={`/goc-suc-khoe/${slug}`}
                className="flex w-full gap-4"
                aria-label={`Đọc bài viết: ${title}`}
            >
                {/* Ảnh thumbnail */}
                <div className="relative w-40 shrink-0 aspect-4/3 overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="160px"
                    />
                </div>

                {/* Nội dung */}
                <div className="flex-1 flex flex-col gap-2 py-2">
                    {/* Category badge */}
                    {category && (
                        <span className="text-vico-green text-xs font-semibold uppercase">
                            {category}
                        </span>
                    )}

                    {/* Tiêu đề */}
                    <h3 className="font-semibold text-vico-gray-600 text-body line-clamp-2">
                        {title}
                    </h3>

                    {/* Mô tả ngắn */}
                    {excerpt && (
                        <p className="text-vico-text-light text-small line-clamp-2">
                            {excerpt}
                        </p>
                    )}

                    {/* Meta info */}
                    <div className="flex items-center gap-3 text-xs text-vico-text-light mt-auto">
                        {publishedAt && <span>{formatDate(publishedAt)}</span>}
                        {author && publishedAt && <span>•</span>}
                        {author && <span>{author}</span>}
                    </div>
                </div>
            </Link>
        </article>
    );
}
