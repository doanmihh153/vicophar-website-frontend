/**
 * ============================================================================
 * ARTICLE PREVIEW TOOLTIP - RADIX HOVER CARD
 * ============================================================================
 *
 * Component hiển thị preview bài viết khi hover vào link
 * CHỈ HOẠT ĐỘNG TRÊN DESKTOP (≥1024px) để tối ưu performance
 *
 * FEATURES:
 * ---------
 * ✅ Desktop only - không render trên mobile/tablet
 * ✅ Lazy render - chỉ render khi hover
 * ✅ Portal rendering - không ảnh hưởng layout
 * ✅ Open delay 300ms - tránh flicker
 * ✅ SEO safe - content trong portal không được crawler index
 *
 * ============================================================================
 */

"use client";

import React, { useState, useEffect } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";
import Link from "next/link";

export default function ArticlePreviewTooltip({ article, children }) {
    // Check if desktop (≥1024px)
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check initial screen size
        const checkDesktop = () => {
            setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
        };

        checkDesktop();

        // Listen for resize
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        mediaQuery.addEventListener("change", checkDesktop);

        return () => mediaQuery.removeEventListener("change", checkDesktop);
    }, []);

    // Không render HoverCard trên mobile/tablet
    if (!article || !isDesktop) return children;

    const { title, description, image, category, link } = article;

    return (
        <HoverCard.Root openDelay={300} closeDelay={100}>
            {/* Trigger - Wrap the children (Link) */}
            <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>

            {/* Portal - Render outside DOM hierarchy */}
            <HoverCard.Portal>
                <HoverCard.Content
                    className="article-preview-tooltip w-vico-sidebar bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100"
                    sideOffset={-20}
                    align="center"
                    side="right"
                >
                    {/* Image Preview */}
                    <div className="relative w-full h-[140px] overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            loading="lazy"
                            sizes="280px"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {/* Category Badge */}
                        {category && (
                            <span className="inline-block mb-2 text-xs bg-vico-green-light text-vico-gray-600 px-2 py-1 rounded">
                                {category}
                            </span>
                        )}

                        {/* Title - Font lớn hơn, đầy đủ */}
                        <h4 className="font-semibold text-xl leading-6! text-vico-gray-900 mb-2">
                            {title}
                        </h4>

                        {/* Description - 2 lines max */}
                        {description && (
                            <p className="text-base text-vico-text line-clamp-2 mb-3">
                                {description}
                            </p>
                        )}

                        {/* CTA - Xem thêm */}
                        <Link
                            href={link}
                            className="inline-flex items-center gap-1 text-vico-green text-base font-medium hover:text-vico-green-dark transition-colors"
                        >
                            Xem thêm
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </div>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
}
