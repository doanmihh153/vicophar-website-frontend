"use client";

import Link from "next/link";
import { useState } from "react";
import LogoResponsive from "@/assets/icons/VicopharLogoMobile";
import MobileNavigationDrawer from "@/components/ui/Navigation/MobileNavigationDrawer";
import MobileSearchDrawer from "@/components/ui/Header/SearchForm/MobileSearchDrawer";
import { SearchIcon, HamburgerIcon, CloseIcon } from "@/assets/icons";

export default function HeaderMobile() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="block lg:hidden">
            {/* MAIN BAR */}
            <div className="bg-white relative z-50 py-2">
                <div className="vico-container flex items-center justify-between">
                    {/* LEFT: Logo */}
                    <div className="shrink-0 flex items-center gap-4">
                        <Link href="/">
                            <LogoResponsive className="w-20 h-auto" />
                        </Link>
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <button
                                className="p-2"
                                aria-label="Tìm kiếm"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <SearchIcon className="w-5 h-5 text-gray-600" />
                            </button>

                            <button
                                className="p-2 -mr-2 text-vico-primary relative w-10 h-10 flex items-center justify-center"
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                                aria-label={
                                    isMobileMenuOpen ? "Đóng menu" : "Mở menu"
                                }
                            >
                                <div
                                    className={`absolute transition-all duration-300 transform ${
                                        isMobileMenuOpen
                                            ? "opacity-0 rotate-90 scale-50"
                                            : "opacity-100 rotate-0 scale-100"
                                    }`}
                                >
                                    <HamburgerIcon className="w-6 h-6" />
                                </div>
                                <div
                                    className={`absolute transition-all duration-300 transform ${
                                        isMobileMenuOpen
                                            ? "opacity-100 rotate-0 scale-100"
                                            : "opacity-0 -rotate-90 scale-50"
                                    }`}
                                >
                                    <CloseIcon className="w-6 h-6" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer (Full-Screen Overlay) */}
            <MobileNavigationDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            {/* Search Drawer */}
            <MobileSearchDrawer
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </div>
    );
}
