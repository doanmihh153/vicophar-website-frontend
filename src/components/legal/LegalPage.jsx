"use client";

import React from "react";
import LegalSidebar from "./LegalSidebar";
import HelpSidebar from "@/components/common/HelpSidebar/HelpSidebar";
import LegalHero from "./LegalHero";

/**
 * ============================================================================
 * LEGAL PAGE WRAPPER
 * ============================================================================
 *
 * Layout chuẩn cho các trang pháp lý.
 * - Desktop: 12 columns grid (3 col Sidebar - 9 col Content).
 * - Mobile/Tablet: Stacked layout.
 *
 * @param {children} ReactNode - Nội dung chính của trang
 */
export default function LegalPage({ children }) {
    return (
        <section className="bg-vico-hover min-h-[calc(100vh-var(--height-vico-header))] py-4">
            <div className="vico-container">
                {/* Main Grid: items-start để sticky hoạt động */}
                <div className="grid grid-cols-1 desktop:grid-cols-12 gap desktop:gap-4 items-start">
                    {/* LEFT SIDEBAR (3 Columns) */}
                    <aside className="desktop:col-span-3 space-y-4">
                        <LegalSidebar />
                        <div className="hidden desktop:block">
                            <HelpSidebar disableSticky={true} />
                        </div>
                    </aside>

                    {/* MAIN CONTENT (9 Columns) */}
                    <main className="desktop:col-span-9 flex flex-col gap-4">
                        {/* ROW 1: HERO SECTION */}
                        <LegalHero />

                        {/* ROW 2: PAGE CONTENT */}
                        <div className="bg-white rounded-none -mx-4 tablet:-mx-5 desktop:mx-0 desktop:rounded-2xl p-4 tablet:p-6 desktop:p-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}
