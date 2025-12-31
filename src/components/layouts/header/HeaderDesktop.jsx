"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/ui/Header/Logo/Logo";
import Navigation from "@/components/ui/Navigation/Navigation";
import DesktopSearchDrawer from "@/components/ui/Header/SearchForm/DesktopSearchDrawer";
import { SearchIcon } from "@/assets/icons";

export default function HeaderDesktop() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="hidden lg:block">
            {/* =======================
             * 2. MAIN BAR (White)
             * ======================= */}
            <div className="bg-white top-0 z-50 py-4">
                <div className="vico-container flex items-center justify-between">
                    {/* LEFT: Logo */}
                    <div className="shrink-0 flex items-center gap-4">
                        <Logo className="w-30" />
                    </div>

                    {/* DESKTOP CENTER: Navigation */}
                    <div className="flex flex-1 items-center justify-end gap-8">
                        <Navigation />
                    </div>

                    {/* RIGHT: Actions (Search) */}
                    <div className="flex items-center gap-4">
                        <div className="flex shrink-0 items-center gap-4 ml-4">
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
            </div>

            {/* Search Drawer */}
            <DesktopSearchDrawer
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </div>
    );
}
