/**
 * ============================================================================
 * USE FIXED HEADER HOOK - OPTIMIZED (Based on useSticky)
 * ============================================================================
 *
 * Hook tối ưu cho fixed header với RAF + Hardware Acceleration.
 * Copy từ useSticky.js nhưng thêm performance optimizations.
 *
 * OPTIMIZATIONS:
 * --------------
 * ✅ RequestAnimationFrame - Sync với refresh rate (60/120Hz)
 * ✅ Throttled resize handler - Giảm unnecessary recalculations
 * ✅ CSS contain property - Isolate layout reflows
 * ✅ Transform instead of top - GPU acceleration
 * ✅ Data attributes - Smooth shadow transitions
 *
 * ============================================================================
 */

"use client";

import { useEffect, useRef, useCallback } from "react";
import { subscribeScroll, unsubscribeScroll } from "@/utils/scrollManager";

// Sticky states
const STATUS = {
    UNFIXED: 0,
    FIXED: 1,
    RELEASED: 2,
};

export default function useFixedHeader({
    enabled = true,
    top = 0, // Offset from top
    bottomBoundary = null, // Selector string or Ref or Element
    minWidth = 0, // Minimum window width to enable
    isFrozen = false, // Prevents updates when true (e.g. during body scroll lock)
}) {
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const statusRef = useRef(STATUS.UNFIXED);
    const isEnabledRef = useRef(false);
    const tickingRef = useRef(false); // RAF ticking flag
    const isFrozenRef = useRef(isFrozen);

    // Sync ref with prop
    useEffect(() => {
        isFrozenRef.current = isFrozen;
    }, [isFrozen]);

    // Cache layout values separately to minimize reflows
    const cacheRef = useRef({
        outerTop: 0,
        innerHeight: 0,
        innerWidth: 0,
        boundaryBottom: 0,
    });

    /**
     * APPLY STYLES (OPTIMIZED)
     * Thao tác DOM trực tiếp với performance tweaks
     */
    const applyStyles = useCallback(
        (newStatus, releasedOffset = 0) => {
            if (!outerRef.current || !innerRef.current) return;

            const outer = outerRef.current;
            const inner = innerRef.current;
            const { innerHeight } = cacheRef.current;

            // Only update if status actually changes
            if (
                statusRef.current === newStatus &&
                newStatus !== STATUS.RELEASED
            ) {
                return; // Skip if no change
            }

            statusRef.current = newStatus;

            switch (newStatus) {
                case STATUS.FIXED:
                    // ✅ FIX: Outer container giữ chiều cao để không bị nhảy layout
                    outer.style.height = `${innerHeight}px`;

                    inner.style.position = "fixed";
                    inner.style.top = `${top}px`;
                    inner.style.left = "0";
                    inner.style.right = "0";
                    inner.style.width = "auto";
                    inner.style.zIndex = "9998"; // Trên backdrop nhưng dưới drawer panel

                    // ✅ OPTIMIZATION: GPU acceleration
                    inner.style.transform = "translate3d(0, 0, 0)";
                    inner.style.willChange = "transform";
                    inner.style.contain = "layout style paint";

                    // ✅ SAFARI: WebKit specific + Transition
                    inner.style.WebkitTransform = "translate3d(0, 0, 0)";
                    inner.style.backfaceVisibility = "hidden";
                    inner.style.WebkitBackfaceVisibility = "hidden";
                    inner.style.perspective = "1000px";
                    inner.style.WebkitPerspective = "1000px";
                    inner.style.transition = "transform 0.1s ease-out";
                    inner.style.WebkitTransition = "transform 0.1s ease-out";

                    // Data attribute for CSS shadow transition
                    inner.setAttribute("data-sticky", "true");
                    break;

                case STATUS.RELEASED:
                    outer.style.height = `${innerHeight}px`;
                    inner.style.position = "relative";
                    inner.style.top = "auto";
                    inner.style.left = "";
                    inner.style.right = "";
                    inner.style.width = "";
                    inner.style.zIndex = "";

                    inner.style.transform = `translate3d(0, ${releasedOffset}px, 0)`;
                    inner.style.willChange = "transform";
                    inner.style.contain = "layout style paint";

                    // Safari
                    inner.style.WebkitTransform = `translate3d(0, ${releasedOffset}px, 0)`;
                    inner.style.transition = "transform 0.1s ease-out";
                    inner.style.WebkitTransition = "transform 0.1s ease-out";

                    inner.setAttribute("data-sticky", "false");
                    break;

                default: // STATUS.UNFIXED
                    outer.style.height = "";
                    inner.style.position = "";
                    inner.style.top = "";
                    inner.style.left = "";
                    inner.style.right = "";
                    inner.style.width = "";
                    inner.style.transform = "";
                    inner.style.willChange = "";
                    inner.style.contain = "";
                    inner.style.zIndex = "";
                    inner.style.WebkitTransform = "";
                    inner.style.backfaceVisibility = "";
                    inner.style.WebkitBackfaceVisibility = "";
                    inner.style.perspective = "";
                    inner.style.WebkitPerspective = "";
                    inner.style.transition = "";
                    inner.style.WebkitTransition = "";

                    inner.setAttribute("data-sticky", "false");
                    break;
            }
        },
        [top]
    );

    /**
     * RESOLVE BOUNDARY
     */
    const getBoundaryElement = useCallback(() => {
        if (!bottomBoundary) return null;
        if (typeof bottomBoundary === "string") {
            return document.querySelector(bottomBoundary);
        }
        if (typeof bottomBoundary === "object" && "current" in bottomBoundary) {
            return bottomBoundary.current;
        }
        if (bottomBoundary instanceof Element) {
            return bottomBoundary;
        }
        return null;
    }, [bottomBoundary]);

    /**
     * UPDATE CACHE (OPTIMIZED)
     * Recalculates dimensions with minimal reflows
     */
    const updateCache = useCallback(() => {
        if (!outerRef.current || !innerRef.current) return;

        // ✅ OPTIMIZATION: Batch reads để minimize reflows
        const outerRect = outerRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;

        cacheRef.current.outerTop = outerRect.top + scrollTop;
        cacheRef.current.innerHeight = innerRef.current.offsetHeight;
        cacheRef.current.innerWidth = outerRef.current.offsetWidth;

        const boundaryEl = getBoundaryElement();
        if (boundaryEl) {
            const boundaryRect = boundaryEl.getBoundingClientRect();
            cacheRef.current.boundaryBottom = boundaryRect.bottom + scrollTop;
        } else {
            cacheRef.current.boundaryBottom = Infinity;
        }
    }, [getBoundaryElement]);

    /**
     * PERFORM SCROLL LOGIC (OPTIMIZED)
     */
    const performScrollCheck = useCallback(() => {
        if (!isEnabledRef.current || isFrozenRef.current) {
            tickingRef.current = false;
            return;
        }

        const scrollTop = window.scrollY || window.pageYOffset;
        const { outerTop, innerHeight, boundaryBottom } = cacheRef.current;

        const stickyStart = outerTop - top;
        const stickyEnd = boundaryBottom - innerHeight - top;

        if (scrollTop < stickyStart) {
            applyStyles(STATUS.UNFIXED);
        } else if (scrollTop >= stickyStart && scrollTop < stickyEnd) {
            applyStyles(STATUS.FIXED);
        } else {
            const offset = stickyEnd - stickyStart;
            applyStyles(STATUS.RELEASED, offset > 0 ? offset : 0);
        }

        tickingRef.current = false;
    }, [top, applyStyles]);

    /**
     * SCROLL CALLBACK - Nhận scrollTop từ shared manager
     */
    const onScrollCallback = useCallback(
        (scrollTop) => {
            if (!isEnabledRef.current || isFrozenRef.current) return;

            const { outerTop, innerHeight, boundaryBottom } = cacheRef.current;
            const stickyStart = outerTop - top;
            const stickyEnd = boundaryBottom - innerHeight - top;

            if (scrollTop < stickyStart) {
                applyStyles(STATUS.UNFIXED);
            } else if (scrollTop >= stickyStart && scrollTop < stickyEnd) {
                applyStyles(STATUS.FIXED);
            } else {
                const offset = stickyEnd - stickyStart;
                applyStyles(STATUS.RELEASED, offset > 0 ? offset : 0);
            }
        },
        [top, applyStyles]
    );

    /**
     * GLOBAL LISTENERS SETUP (OPTIMIZED)
     */
    useEffect(() => {
        const checkEnabled = () => {
            const isWideEnough = window.innerWidth >= minWidth;
            isEnabledRef.current = enabled && isWideEnough;

            if (!isEnabledRef.current) {
                applyStyles(STATUS.UNFIXED);
            } else {
                updateCache();
                requestAnimationFrame(performScrollCheck);
            }
        };

        checkEnabled();

        // Dùng shared scroll manager thay vì listener riêng
        subscribeScroll(onScrollCallback);

        // ✅ OPTIMIZATION: Throttle resize với RAF
        let resizeRAF;
        const onResize = () => {
            if (resizeRAF) cancelAnimationFrame(resizeRAF);
            resizeRAF = requestAnimationFrame(checkEnabled);
        };
        window.addEventListener("resize", onResize, { passive: true });

        // Backup update for dynamic content
        const timer = setTimeout(() => {
            if (isEnabledRef.current) {
                updateCache();
            }
        }, 500);

        return () => {
            clearTimeout(timer);
            if (resizeRAF) cancelAnimationFrame(resizeRAF);
            unsubscribeScroll(onScrollCallback);
            window.removeEventListener("resize", onResize);
            applyStyles(STATUS.UNFIXED);
        };
    }, [enabled, minWidth, onScrollCallback, updateCache, applyStyles]);

    /**
     * RESIZE OBSERVER (OPTIMIZED)
     * For dynamic content resizing
     */
    useEffect(() => {
        if (!outerRef.current) return;

        // ✅ OPTIMIZATION: Throttle ResizeObserver callbacks
        let observerRAF;
        const observer = new ResizeObserver(() => {
            if (!isEnabledRef.current) return;

            if (observerRAF) cancelAnimationFrame(observerRAF);
            observerRAF = requestAnimationFrame(() => {
                updateCache();
                performScrollCheck();
            });
        });

        observer.observe(outerRef.current);
        if (innerRef.current) observer.observe(innerRef.current);

        return () => {
            if (observerRAF) cancelAnimationFrame(observerRAF);
            observer.disconnect();
        };
    }, [updateCache, performScrollCheck]);

    return { outerRef, innerRef };
}
