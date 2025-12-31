"use client";

import React from "react";
import useSticky from "@/hooks/useSticky";
import HelpSidebar from "@/components/common/HelpSidebar/HelpSidebar";
import CategorySidebar from "@/components/common/CategorySidebar/CategorySidebar";
import { productCategories } from "@/data/productPage";

/**
 * PRODUCT SIDEBAR
 * Includes: Category Menu + HelpSidebar
 * Controlled Component: Receives active state from parent.
 */
export default function ProductSidebar({
    activeCategory = "all",
    onCategoryChange = () => {},
}) {
    // START: Refactor to use useSticky hook
    const { sentinelRef, state } = useSticky({ top: 120 });
    // END: Refactor

    // HANDLER: Auto scroll on category change (except 'all')
    const handleCategoryClick = (id) => {
        onCategoryChange(id);

        if (id !== "all") {
            // Smooth scroll to top of content
            const section = document.getElementById("main-content-col");
            if (section) {
                const yOffset = -150; // Offset for sticky header
                const y =
                    section.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    };

    return (
        <aside className="col-span-1 desktop:col-span-3 relative z-40">
            {/* Sentinel for sticky detection */}
            <div ref={sentinelRef} className="absolute top-0 w-full h-px" />

            <div className="space-y-4 desktop:sticky desktop:top-[120px]">
                {/* CATEGORY MENU (Dropdown Mobile / List Desktop) */}
                <CategorySidebar
                    categories={productCategories.map((c) => ({
                        id: c.id,
                        name: c.name,
                        count: 0,
                    }))}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryClick}
                    disableSticky={true}
                    initialVisibleCount={4}
                />

                {/* HELP SIDEBAR */}
                <div className="hidden desktop:block">
                    <HelpSidebar disableSticky={true} />
                </div>
            </div>
        </aside>
    );
}
