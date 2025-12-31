"use client";

import StickyHeroBanner from "@/components/common/StickyHeroBanner";

/**
 * PRODUCT HERO
 * Simple Banner Image (2.3:1 Aspect Ratio) matching NewsHero
 */
export default function ProductHero({ image, alt }) {
    return (
        <StickyHeroBanner
            src={image}
            alt={alt}
            className="bg-vico-green-light"
        />
    );
}
