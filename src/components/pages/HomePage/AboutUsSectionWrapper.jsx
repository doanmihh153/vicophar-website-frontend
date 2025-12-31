/**
 * ============================================================================
 * ABOUT US SECTION WRAPPER
 * ============================================================================
 *
 * Wrapper chứa các component About Us:
 * 1. AboutUsGallery: Slider ảnh hoạt động (Clean box style)
 * 2. AboutUsServices: Cam kết dịch vụ
 * 3. AboutUsFeatures: Vùng nguyên liệu sạch
 *
 * Style: Background Vico Hover (color-vico-primary/5)
 *
 * ============================================================================
 */

"use client";

import React from "react";
import AboutUsGallery from "./AboutUs/AboutUsGallery";
import AboutUsServices from "./AboutUs/AboutUsServices";
import AboutUsFeatures from "./AboutUs/AboutUsFeatures";

export default function AboutUsSectionWrapper() {
    return (
        <section
            className="z-layer-section bg-vico-primary/5 relative py-8 desktop:py-16 pb-16 desktop:pb-28 bg-vico-hover"
            aria-label="about-us-section"
            role="region"
            itemScope
            itemType="https://schema.org/Organization"
        >
            {/* GALLERY SLIDER */}
            <AboutUsGallery />

            {/* SERVICES & FEATURES */}
            <div className="vico-container relative z-10">
                {/* SERVICES (Grid 4 features) */}
                <div className="mb-4 lg:mb-6">
                    <AboutUsServices />
                </div>

                {/* FEATURES (Vùng nguyên liệu) */}
                <AboutUsFeatures />
            </div>
        </section>
    );
}
