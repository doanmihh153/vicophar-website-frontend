/**
 * ============================================================================
 * EMBLA CAROUSEL - EXPORTS
 * ============================================================================
 *
 * Export tất cả components và hooks liên quan đến Embla Carousel
 *
 * USAGE:
 * ------
 * // Import component chính
 * import EmblaCarousel from '@/components/common/EmblaCarousel';
 *
 * // Hoặc import riêng lẻ
 * import { DotButton, useDotButton } from '@/components/common/EmblaCarousel';
 * import { PrevButton, NextButton, usePrevNextButtons } from '@/components/common/EmblaCarousel';
 *
 * ============================================================================
 */

// Export component chính
export { default } from "./EmblaCarousel";

// Export dot button components và hooks
export { DotButton, useDotButton } from "./EmblaCarouselDotButton";

// Export arrow button components và hooks
export {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
