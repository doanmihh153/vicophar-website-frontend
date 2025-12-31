/**
 * ============================================================================
 * ARTICLE HERO - GENERIC HERO BANNER
 * ============================================================================
 *
 * Generic hero banner component cho Article Listing pages
 * Sử dụng component dùng chung StickyHeroBanner (giống StoryHero)
 *
 * FEATURES:
 * - Aspect ratio 3.2:1
 * - Sticky on desktop (top: 100px)
 * - Rounded corners on desktop
 * - next/image với priority loading (LCP optimization)
 *
 * ============================================================================
 */

import StickyHeroBanner from "@/components/common/StickyHeroBanner";

export default function ArticleHero({ imageUrl, altText }) {
    return (
        <StickyHeroBanner
            src={imageUrl}
            alt={altText}
            // className="bg-[#E7FFEA]"
        />
    );
}
