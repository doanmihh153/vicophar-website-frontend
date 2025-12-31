"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * ============================================================================
 * useBodyScrollLock Hook - Unified Version
 * ============================================================================
 *
 * Locks body scroll when modals/drawers are open.
 * Works with scrollbar-gutter: stable in CSS to prevent layout shifts.
 *
 * Strategy:
 * - ALL devices: Uses overflow: hidden on HTML element (preserves sticky)
 * - iOS Safari ONLY: Falls back to position: fixed on body (rubber-banding fix)
 *
 * IMPORTANT: We use html.style.overflow instead of body.style.overflow
 * because overflow:hidden on body creates a new containing block
 * which breaks position: sticky elements.
 *
 * ============================================================================
 */

let lockCount = 0;

/**
 * Detect iOS Safari (needs special handling for rubber-banding)
 */
function isIOSSafari() {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent;
    const isIOS =
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    return isIOS && isSafari;
}

function useBodyScrollLock(isLocked) {
    const pathname = usePathname();
    const pathnameAtLock = useRef(pathname);

    useEffect(() => {
        if (!isLocked) return;

        pathnameAtLock.current = pathname;
        lockCount++;

        const scrollY = window.scrollY;
        const body = document.body;
        const html = document.documentElement;
        const needsIOSFix = isIOSSafari();

        // =========================
        // APPLY LOCK
        // =========================
        if (needsIOSFix) {
            // iOS Safari: Use position fixed to prevent rubber-band scrolling
            // This is the only reliable way on iOS Safari
            body.style.position = "fixed";
            body.style.top = `-${scrollY}px`;
            body.style.left = "0";
            body.style.right = "0";
            body.style.overflow = "hidden";
        } else {
            // All other devices: Use overflow hidden on HTML
            // This preserves position: sticky on child elements
            html.style.overflow = "hidden";
        }

        // =========================
        // CLEANUP
        // =========================
        return () => {
            lockCount--;

            if (lockCount === 0) {
                // Reset all styles
                body.style.position = "";
                body.style.top = "";
                body.style.left = "";
                body.style.right = "";
                body.style.overflow = "";
                html.style.overflow = "";

                // Restore scroll position (only if still on same page)
                if (window.location.pathname === pathnameAtLock.current) {
                    window.scrollTo(0, scrollY);
                }
            }
        };
    }, [isLocked, pathname]);
}

export default useBodyScrollLock;
