/**
 * ============================================================================
 * HERO SECTION WRAPPER
 * ============================================================================
 *
 * Section chứa:
 * 1. HeroStickyBackground - Banner nền sticky parallax
 * 2. HeroMarketingWidget - Khuyến mãi + Side banners + AboutUsHeader
 *
 * ============================================================================
 */

"use client";

import React from "react";
import HeroStickyBackground from "./Hero/HeroStickyBackground";
import HeroMarketingWidget from "./Hero/HeroMarketingWidget";

export default function HeroSectionWrapper() {
    return (
        <section
            className="hero-section w-full relative bg-transparent pb-6"
            aria-label="Banner chính và Khuyến mãi"
            role="region"
        >
            {/* HERO BACKGROUND - Sticky parallax */}
            <HeroStickyBackground />

            {/* MARKETING WIDGET - Khuyến mãi (chìa lên banner) */}
            <div className="z-layer-content">
                <HeroMarketingWidget />
            </div>
        </section>
    );
}
