/**
 * ============================================================================
 * SCROLL TO TOP BUTTON
 * ============================================================================
 *
 * Nút cuộn lên đầu trang
 * - Ẩn khi ở đầu trang (scrollY < 300)
 * - Hiện với animation khi cuộn xuống
 * - Smooth scroll về top khi click
 *
 * ============================================================================
 */

"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@/assets/icons";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                w-12 h-12 tablet:w-14 tablet:h-14 rounded-2xl bg-vico-green text-white flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                }
            `}
            aria-label="Cuộn lên đầu trang"
        >
            <ArrowUpIcon width={28} height={28} className="-translate-y-0.5" />
        </button>
    );
}
