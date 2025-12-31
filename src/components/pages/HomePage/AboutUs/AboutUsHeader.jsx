/**
 * ============================================================================
 * ABOUT US HEADER
 * ============================================================================
 *
 * Component hiển thị phần Tiêu đề và Giới thiệu chung về Vicophar.
 *
 * NỘI DUNG:
 * ---------
 * - Icon thương hiệu (Double Quote).
 * - Tiêu đề H1: "Gia đình Vicophar".
 * - Subtitle H2: "Về chúng tôi".
 * - Mô tả ngắn (TipTap HTML content).
 * - Nút CTA: "Xem chi tiết".
 *
 * SEO & ACCESSIBILITY:
 * --------------------
 * - Sử dụng thẻ <header> và role="banner".
 * - Heading hierarchy (H1, H2) chuẩn SEO.
 * - Schema markup cho Brand và Description.
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Link from "next/link";
import { aboutUsData } from "@/data/mockHomePage";
import { DoubleQuoteIcon } from "@/assets/icons";

export default function AboutUsHeader() {
    return (
        <header
            className="flex flex-col items-center text-center mb-10"
            role="banner"
        >
            {/* Brand Icon + Company Identity */}
            <div
                className="flex flex-col items-center mb-2 desktop:mb-6"
                itemProp="brand"
            >
                {/* Brand Quote Icon - SEO: Decorative icon với proper ARIA */}
                <DoubleQuoteIcon
                    width={60}
                    height={48}
                    fill="var(--color-vico-red)"
                    className="mb-2 hidden! lg:block!"
                    role="img"
                    aria-label="Biểu tượng trích dẫn Vicophar"
                    title="Vicophar - Thương hiệu dược mỹ phẩm uy tín"
                />

                {/* SEO Optimized Heading Structure */}
                <div className="flex flex-col items-center">
                    {/* H1 – SEO ưu tiên */}
                    <h1
                        id="about-us-heading"
                        className="order-2 text-h1 font-bold! text-vico-green uppercase"
                    >
                        Gia đình Vicophar
                    </h1>

                    {/* Subtitle – hiển thị trên */}
                    <h2 className="order-1 text-h2 font-bold text-vico-red uppercase tracking-wide translate-y-1.5">
                        Về chúng tôi
                    </h2>
                </div>
            </div>

            {/* SEO Optimized Content - Main Description */}
            <div
                className="vico-tiptap-content max-w-4xl mb-4 desktop:mb-8 text-body font-normal leading-normal [&>p]:mb-4 text-vico-text"
                dangerouslySetInnerHTML={{ __html: aboutUsData.content }}
                itemProp="description"
                role="main"
                aria-label="Mô tả chi tiết về công ty Vicophar"
            />

            {/* SEO Optimized CTA Button */}
            <Link
                href={aboutUsData.ctaLink}
                className="vico-btn-secondary"
                aria-label="Tìm hiểu thêm về câu chuyện và lịch sử phát triển của Vicophar"
                title="Khám phá hành trình 7 năm phát triển của Vicophar"
                rel="nofollow"
                itemProp="url"
                role="button"
            >
                <span itemProp="name">{aboutUsData.ctaText}</span>
            </Link>
        </header>
    );
}
