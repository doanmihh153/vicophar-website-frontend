/**
 * ============================================================================
 * ARTICLE SUMMARY - NỘI DUNG CHÍNH
 * ============================================================================
 *
 * Component hiển thị tóm tắt nội dung chính của bài viết
 * - Background màu xanh nhạt
 * - Heading "Nội dung chính"
 * - Summary text
 * - CTA button với icon chevrons
 *
 * USAGE:
 * ------
 * <ArticleSummary description={description} onReadMore={handleReadMore} />
 *
 * ============================================================================
 */

"use client";

import React from "react";

export default function ArticleSummary({ description, onReadMore }) {
    const handleReadMore = () => {
        const content = document.getElementById("article-content");
        if (content) {
            content.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        if (onReadMore) onReadMore();
    };

    return (
        <div className="bg-vico-green/10 p-4 tablet:p-8 rounded-2xl mb-8">
            {/* Heading */}
            <h2 className="text-2xl tablet:text-3xl font-bold text-vico-green mb-4">
                Nội dung chính
            </h2>

            {/* Summary Text */}
            <div className="text-base tablet:text-lg text-vico-gray-700 leading-relaxed mb-6 space-y-4">
                {description}
            </div>

            {/* CTA Button */}
            <button
                onClick={handleReadMore}
                className="inline-flex items-center bg-vico-green text-white px-6 py-2 rounded-full font-semibold transition-all"
            >
                <span>Đọc chi tiết</span>
            </button>
        </div>
    );
}
