/**
 * ============================================================================
 * HERO STICKY BACKGROUND (LAYER 1) - CSS STICKY VERSION
 * ============================================================================
 *
 * Component hiển thị Banner nền (Background Cover) với hiệu ứng sticky.
 * Sử dụng component dùng chung StickyHeroBanner.
 *
 * ============================================================================
 */

import StickyHeroBanner from "@/components/common/StickyHeroBanner";
import { heroTopBanner } from "@/data/mockHomePage";

export default function HeroStickyBackground() {
    return (
        <StickyHeroBanner src={heroTopBanner.image} alt={heroTopBanner.alt} />
    );
}
