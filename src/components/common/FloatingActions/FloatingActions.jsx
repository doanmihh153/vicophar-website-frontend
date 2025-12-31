/**
 * ============================================================================
 * FLOATING ACTIONS
 * ============================================================================
 *
 * Container cho các nút floating action:
 * - ContactButton: Liên hệ tư vấn (Zalo + Phone)
 * - ScrollToTopButton: Cuộn lên đầu trang
 *
 * Component này được đặt trong layout.js để hiển thị trên mọi trang.
 *
 * ============================================================================
 */

"use client";

import { usePathname } from "next/navigation";
import ScrollToTopButton from "./ScrollToTopButton";
import ContactButton from "./ContactButton";
import ShopButton from "./ShopButton";

export default function FloatingActions() {
    const pathname = usePathname();
    const isProductPage = pathname?.startsWith("/san-pham/");

    return (
        <div
            className={`fixed bottom-10 right-4 tablet:right-6 z-50 flex flex-col gap-2 desktop:gap-4 items-center transition-[padding-right] duration-0 ${
                isProductPage ? "hidden desktop:flex" : "flex"
            }`}
            style={{ paddingRight: "var(--scrollbar-padding, 0px)" }}
        >
            {/* Shop Button - Above Contact */}
            <ShopButton />

            {/* Nút liên hệ - luôn hiện */}
            <ContactButton />

            {/* Nút scroll lên - chỉ hiện khi cuộn xuống */}
            <ScrollToTopButton />
        </div>
    );
}
