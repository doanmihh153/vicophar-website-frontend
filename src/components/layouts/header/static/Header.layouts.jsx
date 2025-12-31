/**
 * ============================================================================
 * STATIC HEADER LAYOUT - CSS STICKY VERSION
 * ============================================================================
 *
 * Header với hiệu ứng sticky THUẦN CSS:
 * - TopBar cuộn đi theo trang.
 * - Header chính dính vào top: 0 với CSS position: sticky.
 * - Sử dụng IntersectionObserver để detect sticky state (cho shadow).
 * - KHÔNG sử dụng scroll listeners → performance tốt hơn.
 *
 * ============================================================================
 */

"use client";

import { useState, useRef, useEffect } from "react";
import TopBar from "./TopBar";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import MobileNavigationDrawer from "@/components/ui/Navigation/MobileNavigationDrawer";
import MobileSearchDrawer from "@/components/ui/Header/SearchForm/MobileSearchDrawer";

function HeaderLayouts({ cartCount = 0 }) {
    // ========================================
    // STATE - Drawer control
    // ========================================
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Sentinel ref for IntersectionObserver
    const sentinelRef = useRef(null);

    // ========================================
    // INTERSECTION OBSERVER - Detect sticky state
    // Không dùng scroll listener → 0 performance overhead
    // ========================================
    useEffect(() => {
        if (!sentinelRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Khi sentinel không còn intersecting → header đã sticky
                setIsSticky(!entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: "0px 0px 0px 0px",
            }
        );

        observer.observe(sentinelRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* ========================================
                TOP BAR - Cuộn đi tự nhiên
                ======================================== */}
            <TopBar />

            {/* ========================================
                SENTINEL - Invisible element để detect sticky
                Khi element này scroll khỏi viewport → header sticky
                ======================================== */}
            <div ref={sentinelRef} className="h-0 w-full" aria-hidden="true" />

            {/* ========================================
                STICKY HEADER - CSS position: sticky
                z-index 9998 để nằm trên backdrop (9997) nhưng dưới panel (9999)
                ======================================== */}
            <header
                className={`sticky top-0 z-9998 w-full bg-white transition-shadow duration-200 ${
                    isSticky ? "shadow-md" : ""
                }`}
                // style={{
                //     paddingRight: "var(--scrollbar-padding, 0px)",
                //     marginRight: "calc(var(--scrollbar-padding, 0px) * -1)",
                //     width: "calc(100% + var(--scrollbar-padding, 0px))",
                // }}
                role="banner"
                data-sticky={isSticky}
            >
                {/* Desktop Layout */}
                <HeaderDesktop />

                {/* Mobile Layout */}
                <HeaderMobile
                    isMenuOpen={menuOpen}
                    onMenuClick={(val) =>
                        setMenuOpen(val === undefined ? true : val)
                    }
                    onSearchClick={() => setSearchOpen(true)}
                />
            </header>

            {/* ========================================
                DRAWERS - At root level
                ======================================== */}
            <MobileNavigationDrawer
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />

            <MobileSearchDrawer
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
            />
        </>
    );
}

export default HeaderLayouts;
