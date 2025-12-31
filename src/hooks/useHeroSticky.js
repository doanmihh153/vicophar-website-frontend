/**
 * ============================================================================
 * USE HERO STICKY HOOK - DÀNH RIÊNG CHO HERO BANNER
 * ============================================================================
 *
 * Hook đơn giản cho HeroTopBanner:
 * - Cuộn đến top 100px thì dính (fixed)
 * - Dùng shared scrollManager để không xung đột với Header
 * - Tối ưu cho Safari với backfaceVisibility
 *
 * ============================================================================
 */

"use client";

import { useEffect, useRef, useCallback } from "react";
import { subscribeScroll, unsubscribeScroll } from "@/utils/scrollManager";

export default function useHeroSticky({
    enabled = true,
    top = 100,
    minWidth = 1024,
}) {
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const isFixedRef = useRef(false);
    const isEnabledRef = useRef(false);

    // Cache dimensions
    const cacheRef = useRef({
        outerTop: 0,
        innerHeight: 0,
        innerWidth: 0,
    });

    /**
     * Apply styles - Với WebKit optimizations cho Safari
     */
    const applyStyles = useCallback(
        (shouldFix) => {
            if (!outerRef.current || !innerRef.current) return;
            if (isFixedRef.current === shouldFix) return;

            isFixedRef.current = shouldFix;
            const outer = outerRef.current;
            const inner = innerRef.current;
            const { innerHeight, innerWidth } = cacheRef.current;

            if (shouldFix) {
                outer.style.height = `${innerHeight}px`;
                inner.style.position = "fixed";
                inner.style.top = `${top}px`;
                inner.style.left = "0";
                inner.style.right = "0";
                inner.style.width = `${innerWidth}px`;
                inner.style.zIndex = "0";

                // GPU Acceleration
                inner.style.transform = "translate3d(0, 0, 0)";
                inner.style.willChange = "transform";

                // Transition cho Safari - giảm giật khi chuyển fixed
                inner.style.transition = "transform 0.1s ease-out";
                inner.style.WebkitTransition = "transform 0.1s ease-out";

                // WebKit (Safari) specific
                inner.style.WebkitTransform = "translate3d(0, 0, 0)";
                inner.style.backfaceVisibility = "hidden";
                inner.style.WebkitBackfaceVisibility = "hidden";
                inner.style.perspective = "1000px";
                inner.style.WebkitPerspective = "1000px";
            } else {
                outer.style.height = "";
                inner.style.position = "";
                inner.style.top = "";
                inner.style.left = "";
                inner.style.right = "";
                inner.style.width = "";
                inner.style.zIndex = "";
                inner.style.transform = "";
                inner.style.willChange = "";
                inner.style.transition = "";
                inner.style.WebkitTransition = "";
                inner.style.WebkitTransform = "";
                inner.style.backfaceVisibility = "";
                inner.style.WebkitBackfaceVisibility = "";
                inner.style.perspective = "";
                inner.style.WebkitPerspective = "";
            }
        },
        [top]
    );

    /**
     * Update cache
     */
    const updateCache = useCallback(() => {
        if (!outerRef.current || !innerRef.current) return;

        const outerRect = outerRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;

        cacheRef.current.outerTop = outerRect.top + scrollTop;
        cacheRef.current.innerHeight = innerRef.current.offsetHeight;
        cacheRef.current.innerWidth = outerRef.current.offsetWidth;
    }, []);

    /**
     * Check scroll - nhận scrollTop từ scroll manager
     */
    const checkScroll = useCallback(
        (scrollTop) => {
            if (!isEnabledRef.current) return;

            const { outerTop } = cacheRef.current;
            const shouldFix = scrollTop >= outerTop - top;
            applyStyles(shouldFix);
        },
        [top, applyStyles]
    );

    /**
     * Setup
     */
    useEffect(() => {
        const checkEnabled = () => {
            const isWideEnough = window.innerWidth >= minWidth;
            isEnabledRef.current = enabled && isWideEnough;

            if (!isEnabledRef.current) {
                applyStyles(false);
            } else {
                updateCache();
            }
        };

        checkEnabled();

        // Dùng shared scroll manager
        subscribeScroll(checkScroll);
        window.addEventListener("resize", checkEnabled, { passive: true });

        const timer = setTimeout(() => {
            if (isEnabledRef.current) {
                updateCache();
            }
        }, 300);

        return () => {
            clearTimeout(timer);
            unsubscribeScroll(checkScroll);
            window.removeEventListener("resize", checkEnabled);
            applyStyles(false);
        };
    }, [enabled, minWidth, checkScroll, updateCache, applyStyles]);

    return { outerRef, innerRef };
}
