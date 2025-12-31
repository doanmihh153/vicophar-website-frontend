/**
 * ============================================================================
 * STORY HERO SECTION - BANNER TRANG CÂU CHUYỆN VICOPHAR
 * ============================================================================
 *
 * Banner cho trang "Câu Chuyện Vicophar"
 * Sử dụng component dùng chung StickyHeroBanner.
 *
 * ============================================================================
 */

import StickyHeroBanner from "@/components/common/StickyHeroBanner";
import { storyHeroBanner } from "@/data/storyPage";

export default function StoryHero() {
    return (
        <StickyHeroBanner
            src={storyHeroBanner.imageUrl}
            alt={storyHeroBanner.altText}
            className="bg-[#E7FFEA]"
        />
    );
}
