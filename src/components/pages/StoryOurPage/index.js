/**
 * ============================================================================
 * STORY OUR PAGE - MAIN COMPONENT
 * ============================================================================
 *
 * Trang Câu Chuyện Vicophar
 *
 * LAYOUT:
 * -------
 * - Hero Banner
 * - Intro Section
 * - Vision & Mission
 * - Technology
 * - Company News
 * - Newsletter
 *
 * ============================================================================
 */

"use client";

import dynamic from "next/dynamic";
import StoryHero from "./StoryHero";
import StoryIntro from "./StoryIntro";
import StoryGradientWrapper from "./StoryGradientWrapper";
// ✅ Lazy load các sections bên dưới fold để tối ưu performance
const StoryVisionMission = dynamic(
    () => import("@/components/pages/StoryOurPage/StoryVisionMission"),
    {
        loading: () => <div className="h-96 animate-pulse" />,
    }
);
const StoryTechnology = dynamic(
    () => import("@/components/pages/StoryOurPage/StoryTechnology"),
    {
        loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
    }
);
const StoryCompanyNews = dynamic(
    () => import("@/components/pages/StoryOurPage/StoryCompanyNews"),
    {
        loading: () => <div className="h-96 bg-white animate-pulse" />,
    }
);
const StorysLetterNews = dynamic(
    () => import("@/components/pages/StoryOurPage/StorysLetterNews"),
    {
        loading: () => <div className="h-64 bg-vico-green/10 animate-pulse" />,
    }
);

export default function StoryOurPage() {
    return (
        <main className="w-full ">
            {/* ✅ Hero: Không lazy vì là above-the-fold (LCP) */}
            <StoryHero />

            {/* ✅ Wrapper z-10 để nằm trên hero sticky */}
            <div className="relative bg-white z-10">
                {/* ✅ Gradient Background Wrapper cho 2 sections */}
                <StoryGradientWrapper>
                    <StoryIntro />
                    <StoryVisionMission />
                </StoryGradientWrapper>

                {/* ✅ Lazy load các sections bên dưới */}
                <StoryTechnology />
                <StoryCompanyNews />
                <StorysLetterNews />
            </div>
        </main>
    );
}
