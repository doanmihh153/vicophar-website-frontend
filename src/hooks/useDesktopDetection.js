/**
 * ============================================================================
 * USE DESKTOP DETECTION HOOK
 * ============================================================================
 *
 * Custom hook để phát hiện desktop viewport (>= 1280px)
 * Sử dụng cho Sticky components hoặc responsive logic
 *
 * USAGE:
 * ------
 * const isDesktop = useDesktopDetection();
 *
 * <Sticky enabled={isDesktop}>
 *   content
 * </Sticky>
 *
 * BREAKPOINT:
 * -----------
 * Desktop: >= 1280px (Tailwind 'desktop' breakpoint)
 *
 * ============================================================================
 */

"use client";

import { useState, useEffect } from "react";

/**
 * Hook phát hiện desktop viewport
 * @param breakpoint - Custom breakpoint (default: 1280px)
 * @returns true nếu >= breakpoint
 */
export default function useDesktopDetection(breakpoint = 1280) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Hàm kiểm tra viewport width
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= breakpoint);
        };

        // Kiểm tra khi mount
        checkDesktop();

        // Lắng nghe resize event
        window.addEventListener("resize", checkDesktop);

        // Cleanup listener
        return () => window.removeEventListener("resize", checkDesktop);
    }, [breakpoint]);

    return isDesktop;
}
