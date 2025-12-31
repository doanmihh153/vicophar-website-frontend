/**
 * ============================================================================
 * PHỤ LỤC - TABLE OF CONTENTS
 * ============================================================================
 *
 * Auto-generates navigation từ H2 và H3 headings
 * - Có thể đóng/mở (collapsible) để tiết kiệm không gian
 * - Danh sách có đánh số
 * - Smooth scroll khi click
 *
 * USAGE:
 * ------
 * <TableOfContents content={tiptapContent} />
 *
 * ============================================================================
 */

"use client";

import React, { useState } from "react";
import { TocIcon, ChevronDownIcon, ChevronRightIcon } from "@/assets/icons";

/**
 * Extract H2 and H3 headings from Tiptap JSON content
 */
function extractHeadings(content) {
    const headings = [];

    content?.content?.forEach((node, index) => {
        if (node.type === "heading" && [2, 3].includes(node.attrs?.level)) {
            const text = node.content?.[0]?.text || "Untitled";
            headings.push({
                id: `heading-${index}`,
                level: node.attrs.level,
                text: text,
            });
        }
    });

    return headings;
}

export default function TableOfContents({ content }) {
    const [isOpen, setIsOpen] = useState(true);
    const headings = extractHeadings(content);

    const scrollToHeading = (id) => {
        const element = document.getElementById(id);
        if (element) {
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
        }
    };

    if (headings.length === 0) {
        return null;
    }

    return (
        <div className="bg-vico-hover p-4 rounded-xl mb-8">
            {/* Header với nút toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full group"
            >
                <div className="flex items-center gap-2">
                    <TocIcon
                        width={28}
                        height={28}
                        className="text-vico-text -translate-0.5"
                    />
                    <h2 className="text-xl font-bold text-vico-text">
                        Mục lục
                    </h2>
                </div>
                <div className="text-vico-gray-600">
                    {isOpen ? (
                        <ChevronDownIcon width={24} height={24} />
                    ) : (
                        <ChevronRightIcon width={24} height={24} />
                    )}
                </div>
            </button>

            {/* Danh sách headings (có thể đóng/mở) */}
            {isOpen && (
                <ul className="space-y-2">
                    {headings.map((heading) => (
                        <li
                            key={heading.id}
                            className={`${heading.level === 3 ? "ml-8" : ""}`}
                        >
                            <button
                                onClick={() => scrollToHeading(heading.id)}
                                className="text-left text-vico-text hover:text-vico-green transition-colors"
                            >
                                {heading.text}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
