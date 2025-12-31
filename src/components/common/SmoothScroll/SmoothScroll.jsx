"use client";

import useSmoothScroll from "@/hooks/useSmoothScroll";
import useScrollToTop from "@/hooks/useScrollToTop";

/**
 * SMOOTH SCROLL COMPONENT
 *
 * Component Client-side dùng để kích hoạt hook useSmoothScroll.
 * Đặt component này vào RootLayout để áp dụng toàn trang.
 */
export default function SmoothScroll() {
    useSmoothScroll();
    useScrollToTop(); // Kích hoạt Scroll To Top
    return null; // Component này không render UI gì cả
}
