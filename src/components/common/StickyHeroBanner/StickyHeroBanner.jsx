/**
 * ============================================================================
 * STICKY HERO BANNER - Reusable Component
 * ============================================================================
 *
 * Component dùng chung cho Hero Banner.
 * Giữ nguyên 100% Tailwind classes từ HeroStickyBackground.jsx
 *
 * PROPS:
 * ------
 * @param {string} src - Image source
 * @param {string} alt - Image alt text
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";

export default function StickyHeroBanner({ src, alt, className = "" }) {
    return (
        <div className={`w-full z-0 lg:sticky lg:top-[100px] ${className}`}>
            <div className="w-full lg:px-4 lg:pt-4">
                <div className="relative w-full aspect-[3.2/1] lg:rounded-3xl overflow-hidden">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
