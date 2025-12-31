/**
 * ============================================================================
 * BLOG CARD - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component card bài viết blog có thể tái sử dụng (horizontal layout)
 * Layout: Hình bên trái - Nội dung bên phải (Tag, Tiêu đề, Mô tả, Ngày đăng)
 *
 * PROPS:
 * ------
 * @param {object} article - Object bài viết
 *   - id: string
 *   - title: string (Tiêu đề - hiển thị 2 dòng)
 *   - description: string (Mô tả - hiển thị 2 dòng)
 *   - image: string (URL)
 *   - category: string (Tag)
 *   - date: string (Ngày đăng - VD: "01/07/2025")
 *   - author: string (Tác giả - VD: "Vicophar")
 *   - link: string (URL link)
 * @param {string} className - Custom className
 *
 * USAGE:
 * ------
 * <BlogCard
 *   article={{
 *     id: "1",
 *     title: "Liệu bạn có thắc mắc: Cú ớn xong là buồn nôn có phải có thai không?",
 *     description: "Bầu 23 tuần là mấy tháng? Bầu 23 tuần cần lưu ý những gì?...",
 *     image: "/imgs/blog.jpg",
 *     category: "Tin mới nhất",
 *     date: "01/07/2025",
 *     author: "Vicophar",
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

export default function BlogCard({ article, className = "" }) {
    if (!article) return null;

    const { title, description, image, category, date, author, link } = article;

    return (
        <Link href={link} className={`group block w-full ${className}`}>
            <article className="tablet:bg-white flex gap-4 tablet:gap-6 items-center h-full transition-all duration-300 hover:translate-x-1 tablet:rounded-2xl tablet:p-2">
                {/* IMAGE - BÊN TRÁI */}
                <div className="relative w-[140px] h-vico-header-top tablet:w-vico-sidebar tablet:h-[200px] desktop:w-[340px] desktop:h-[240px] shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 140px, (max-width: 1024px) 280px, 340px"
                    />
                </div>

                {/* CONTENT - BÊN PHẢI */}
                <div className="flex-1 flex flex-col justify-center min-w-0 py-1">
                    {/* CATEGORY TAG */}
                    {category && (
                        <span className="inline-block w-fit px-3 py-1 bg-vico-green-light text-vico-green text-xs tablet:text-sm font-medium rounded-full mb-2 tablet:mb-3">
                            {category}
                        </span>
                    )}

                    {/* TITLE - 2 DÒNG */}
                    <h3 className="text-h4 tablet:text-h3 font-bold text-vico-gray-900 mb-2 tablet:mb-3 line-clamp-2 transition-colors">
                        {title}
                    </h3>

                    {/* DESCRIPTION - 2 DÒNG (ẨN Ở MOBILE, HIỆN TỪ TABLET) */}
                    <p className="hidden tablet:block text-sm tablet:text-base font-normal text-vico-gray-600 mb-3 tablet:mb-4 line-clamp-2">
                        {description}
                    </p>

                    {/* AUTHOR + DATE (ẨN Ở MOBILE, HIỆN TỪ TABLET) */}
                    <div className="hidden tablet:flex items-center gap-2 text-xs tablet:text-sm text-vico-gray-500 mt-auto">
                        {author && (
                            <>
                                <span className="font-medium">{author}</span>
                                <span className="w-1 h-1 rounded-full bg-vico-gray-400"></span>
                            </>
                        )}
                        {date && <time dateTime={date}>{date}</time>}
                    </div>
                </div>
            </article>
        </Link>
    );
}
