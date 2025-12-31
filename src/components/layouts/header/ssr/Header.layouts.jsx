"use client";

import Link from "next/link";
import useSticky from "@/hooks/useSticky";
import HeaderDesktop from "../HeaderDesktop";
import HeaderMobile from "../HeaderMobile";
import TopBar from "../TopBar";

export default function HeaderLayouts() {
    // Enable sticky behavior at top: 0
    const { outerRef, innerRef } = useSticky({
        top: 0,
    });

    return (
        <>
            {/* Top Bar: Separate from Header for SEO */}
            <TopBar />

            {/* Sticky Wrapper */}
            <div ref={outerRef} className="w-full z-vico-fixed">
                <header
                    ref={innerRef}
                    style={{ zIndex: 9999 }}
                    className="w-full relative bg-white data-[sticky=true]:shadow-vico-header"
                >
                    {/* Desktop Header: Visible on lg (1024px) and above */}
                    <HeaderDesktop />

                    {/* Mobile Header: Visible below lg (1024px) */}
                    <HeaderMobile />
                </header>
            </div>
        </>
    );
}
