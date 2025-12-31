"use client";

import React, { useEffect, useState, useRef } from "react";
import ProductStickyCard from "./ProductStickyCard";
import useSticky from "@/hooks/useSticky";

/**
 * Helper to extract headings from Tiptap JSON
 * Chỉ lấy H2 (level 2), không lấy H3
 */
const getHeadings = (content) => {
    if (!content?.content) return [];
    return content.content
        .map((node, index) => {
            if (node.type === "heading" && node.attrs.level === 2) {
                return {
                    id: `heading-${index}`,
                    text: node.content?.[0]?.text || "",
                };
            }
            return null;
        })
        .filter(Boolean);
};

/**
 * ProductContentSidebar
 * Refactored to use useSticky hook
 */
export default function ProductContentSidebar({ content, product }) {
    const headings = getHeadings(content);
    const [activeId, setActiveId] = useState("");

    // START: Refactor to use useSticky hook
    const { sentinelRef, state } = useSticky({ top: 120 });
    const showStickyCard = state === "sticky";
    // END: Refactor

    // Flag để tạm dừng scroll spy khi đang scroll programmatic
    const isScrollingRef = useRef(false);

    // cardRef cho animation của sticky card
    const cardRef = useRef(null);

    // Scroll Spy Logic - chỉ update khi không đang scroll programmatic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Bỏ qua nếu đang scroll programmatic
                if (isScrollingRef.current) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-150px 0px -60% 0px" }
        );

        headings.forEach((h) => {
            const el = document.getElementById(h.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    const scrollToHeading = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Set flag để tạm dừng scroll spy
            isScrollingRef.current = true;

            // Set active ngay lập tức
            setActiveId(id);

            // Responsive offset: 100px for mobile/tablet, 150px for desktop
            const offset = window.innerWidth >= 1024 ? 150 : 100;
            const offsetTop =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                offset;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });

            // Clear flag sau khi scroll animation hoàn tất (khoảng 800ms)
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 800);
        }
    };

    if (headings.length === 0) return null;

    return (
        <aside className="product-toc-sidebar hidden desktop:block relative h-full">
            {/* Sentinel for sticky detection */}
            <div ref={sentinelRef} className="absolute top-0 w-full h-px" />

            <div className="sticky top-[120px] self-start">
                {/* TOC */}
                <div className="py-0 px-0 desktop:px-4">
                    <h3 className="font-bold text-gray-900 mb-3 text-base md:text-xl">
                        Mục lục
                    </h3>
                    <ul className="space-y-2">
                        {headings.map((heading) => (
                            <li key={heading.id}>
                                <a
                                    href={`#${heading.id}`}
                                    onClick={(e) =>
                                        scrollToHeading(e, heading.id)
                                    }
                                    className={`
                                        block text-xl py-2 px-3 rounded-lg transition-all duration-200
                                        ${
                                            activeId === heading.id
                                                ? "bg-vico-green-light text-vico-green font-semibold"
                                                : "text-gray-600 hover:bg-gray-100 hover:text-vico-green"
                                        }
                                    `}
                                >
                                    {heading.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Product Sticky Card - Hiện khi sidebar đang sticky, nằm dưới TOC */}
                {product && (
                    <div
                        ref={cardRef}
                        className={`
                            transition-all duration-600 ease-out
                            ${
                                showStickyCard
                                    ? "opacity-100 translate-y-0 max-h-[600px]"
                                    : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
                            }
                        `}
                        aria-hidden={!showStickyCard}
                    >
                        {/* Divider */}
                        <hr className="border-gray-100 my-4" />

                        {/* Product Sticky Card */}
                        <ProductStickyCard product={product} />
                    </div>
                )}
            </div>
        </aside>
    );
}
