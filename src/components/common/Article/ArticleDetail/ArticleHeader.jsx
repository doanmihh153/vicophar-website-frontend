/**
 * ============================================================================
 * ARTICLE HEADER - PHẦN ĐẦU BÀI VIẾT
 * ============================================================================
 *
 * Component hiển thị phần header của bài viết bao gồm:
 * - H1: Tiêu đề bài viết (DUY NHẤT H1 trong toàn trang - quan trọng cho SEO)
 * - Meta: Ngày đăng và tác giả với icons
 * - Summary: Mô tả tóm tắt cho Google hiểu nội dung
 * - CTA: Nút "Đọc chi tiết" để scroll xuống content
 *
 * USAGE:
 * ------
 * <ArticleHeader article={article} onReadMore={handleReadMore} />
 *
 * ============================================================================
 */

"use client";

import React from "react";
import { CalendarIcon, AuthorIcon } from "@/assets/icons";
import ArticleSummary from "./ArticleSummary";

export default function ArticleHeader({ article, onReadMore }) {
    const { title, author, date, description } = article;

    return (
        <div className="mb-8">
            {/* H1 - DUY NHẤT trong toàn trang */}
            <h1 className="text-3xl tablet:text-4xl desktop:text-5xl font-bold text-vico-green-dark mb-4 leading-[1.2]! pt-2">
                {title}
            </h1>

            {/* Decorative underline */}
            <div className="w-full h-px bg-vico-gray-400 rounded-full mb-6"></div>

            {/* Meta Information với icons */}
            <div className="flex flex-wrap items-center gap-4 text-vico-gray-600 mb-6 font-medium">
                <span className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 -translate-y-0.5 text-vico-green" />
                    <span>{date}</span>
                </span>
                <span className="flex items-center gap-2">
                    <AuthorIcon className="w-5 h-5 -translate-y-0.5 text-vico-green" />
                    <span>{author}</span>
                </span>
            </div>

            {/* Article Summary - Nội dung chính */}
            <ArticleSummary description={description} onReadMore={onReadMore} />
        </div>
    );
}
