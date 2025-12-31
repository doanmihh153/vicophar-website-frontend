/**
 * ============================================================================
 * HEADER MOBILE COMPONENT - SIMPLIFIED
 * ============================================================================
 *
 * Mobile header layout - clean and simple
 * Visible trên màn hình < 1024px
 *
 * CHANGES:
 * - Removed internal state (lifted to parent)
 * - Removed drawers (moved to parent)
 * - Removed z-50 wrapper (thừa)
 * - Callbacks for menu/search actions
 *
 * ============================================================================
 */

"use client";

import Link from "next/link";
import LogoResponsive from "@/assets/icons/VicopharLogoMobile";
import { SearchIcon, HamburgerIcon, CloseIcon } from "@/assets/icons";

export default function HeaderMobile({
    onMenuClick,
    onSearchClick,
    isMenuOpen,
}) {
    return (
        <div className="block lg:hidden bg-white py-2">
            <div className="vico-container flex items-center justify-between">
                {/* ========================================
                    LEFT: Logo
                    ======================================== */}
                <div className="shrink-0 flex items-center gap-4">
                    <Link href="/">
                        <LogoResponsive className="w-20 h-auto" />
                    </Link>
                </div>

                {/* ========================================
                    RIGHT: Search + Menu Buttons
                    ======================================== */}
                <div className="flex items-center gap-3">
                    {/* Search Button */}
                    <button
                        className="p-2"
                        onClick={onSearchClick}
                        aria-label="Tìm kiếm"
                    >
                        <SearchIcon className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Menu Button with Smooth Rotation Animation */}
                    <button
                        className="p-2 -mr-2 text-vico-primary relative w-10 h-10 flex items-center justify-center"
                        onClick={() => onMenuClick(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
                    >
                        {/* Hamburger Icon */}
                        <div
                            className={`absolute transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "opacity-0 rotate-180 scale-50"
                                    : "opacity-100 rotate-0 scale-100"
                            }`}
                        >
                            <HamburgerIcon className="w-6 h-6" />
                        </div>

                        {/* Close Icon */}
                        <div
                            className={`absolute transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "opacity-100 rotate-0 scale-100"
                                    : "opacity-0 -rotate-180 scale-50"
                            }`}
                        >
                            <CloseIcon className="w-6 h-6" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
