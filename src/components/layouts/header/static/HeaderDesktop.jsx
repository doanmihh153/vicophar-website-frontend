/**
 * ============================================================================
 * SSR HEADER DESKTOP COMPONENT
 * ============================================================================
 *
 * Desktop header layout cho SSR version
 * Visible trên màn hình ≥ 1024px
 *
 * LAYOUT:
 * -------
 * [Logo] [Navigation Menu] [Search Icon Button]
 *
 * FEATURES:
 * ---------
 * ✅ Logo component (left aligned)
 * ✅ Navigation horizontal menu (center)
 * ✅ Search icon button (right aligned)
 * ✅ Opens DesktopSearchDrawer on search click
 * ✅ Hover effects
 * ✅ Clean, minimal design
 *
 * DIFFERENCES FROM STATIC VERSION:
 * ---------------------------------
 * ❌ No inline SearchForm
 * ❌ No Login button
 * ❌ No Cart button
 * ✅ Only Search icon that opens drawer
 *
 * ============================================================================
 */

"use client";

import { useState } from "react";
import Logo from "@/components/ui/Header/Logo/Logo";
import Navigation from "@/components/ui/Navigation/Navigation";
import DesktopSearchDrawer from "@/components/ui/Header/SearchForm/DesktopSearchDrawer";
import { SearchIcon } from "@/assets/icons";

export default function HeaderDesktop() {
    // ========================================
    // STATE - Search Drawer
    // ========================================
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="hidden lg:block">
            {/* ========================================
                MAIN BAR - White background
                ======================================== */}
            <div className="bg-white top-0 z-50 py-4">
                <div className="vico-container flex items-center justify-between">
                    {/* ========================================
                        LEFT: Logo
                        ======================================== */}
                    <div className="shrink-0 flex items-center gap-4">
                        <Logo className="w-30" />
                    </div>

                    {/* ========================================
                        RIGHT: Navigation & Search
                        ======================================== */}
                    <div className="flex items-center gap-6">
                        <Navigation />

                        <button
                            className="p-2 hover:bg-gray-50 rounded-full transition-colors group"
                            aria-label="Tìm kiếm"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <SearchIcon className="w-5 h-5 text-vico-text group-hover:text-vico-green transition-colors" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ========================================
                SEARCH DRAWER
                ======================================== */}
            <DesktopSearchDrawer
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </div>
    );
}
