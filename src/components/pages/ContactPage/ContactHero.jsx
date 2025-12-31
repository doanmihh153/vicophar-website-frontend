"use client";

import React from "react";
import StickyHeroBanner from "@/components/common/StickyHeroBanner";

/**
 * ============================================================================
 * CONTACT HERO - HERO BANNER FOR CONTACT PAGE
 * ============================================================================
 *
 * Hero banner cho trang Liên hệ
 * Uses Shared Component: StickyHeroBanner
 *
 * PROPS:
 * ------
 * @param {string} imageUrl - Đường dẫn ảnh banner
 * @param {string} altText - Alt text cho SEO
 *
 * ============================================================================
 */
export default function ContactHero({ imageUrl, altText }) {
    return (
        <StickyHeroBanner src={imageUrl} alt={altText} className="bg-white" />
    );
}
