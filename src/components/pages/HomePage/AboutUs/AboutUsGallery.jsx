/**
 * ============================================================================
 * ABOUT US GALLERY (REFACTORED)
 * ============================================================================
 *
 * Slider ảnh hoạt động của Vicophar.
 * Style: Clean box, rounded, shadow (tương tự HeroMarketingWidget).
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import EmblaCarousel from "@/components/common/EmblaCarousel";
import { aboutUsSliderData } from "@/data/mockHomePage";
import Autoplay from "embla-carousel-autoplay";

export default function AboutUsGallery() {
    // Carousel Options (Matched with HeroMarketingWidget)
    const carouselOptions = {
        loop: true,
        align: "center",
        skipSnaps: false,
        dragFree: false,
        containScroll: false,
        watchDrag: true,
        duration: 20,
        slidesToScroll: 1,
    };

    const autoplayPlugin = Autoplay({
        delay: 4000,
        stopOnInteraction: false,
    });

    // Map complex data structure to flat structure for EmblaCarousel
    const slides = aboutUsSliderData.map((slide) => ({
        id: slide.id,
        image: slide.banner.desktop,
        mobile: slide.banner.mobile,
        alt: slide.banner.alt,
    }));

    // Custom Slide Renderer for Art Direction (Desktop/Mobile images)
    const renderCustomSlide = ({ slide, index, inView, isHero }) => {
        if (!inView) return null;

        return (
            <>
                {/* Desktop Image (>= 1024px) */}
                <div className="hidden lg:block w-full h-full relative">
                    <Image
                        src={slide.image}
                        alt={slide.alt || `Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={isHero}
                        loading={isHero ? "eager" : "lazy"}
                        sizes="(min-width: 1024px) 1216px, 100vw"
                        quality={90}
                    />
                </div>

                {/* Mobile Image (< 1024px) */}
                <div className="block lg:hidden w-full h-full relative rounded-2xl overflow-hidden">
                    <Image
                        src={slide.mobile}
                        alt={slide.alt || `Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={isHero}
                        loading={isHero ? "eager" : "lazy"}
                        sizes="(max-width: 1024px) 100vw, 1216px"
                        quality={90}
                    />
                </div>
            </>
        );
    };

    return (
        <div className="vico-container relative z-10 mb-4 lg:mb-6 text-center lg:text-left">
            {/* WRAPPER STYLE: Clean Box Desktop / Full-Bleed Mobile */}
            <div className="lg:rounded-4xl max-lg:w-screen max-lg:ml-[calc(-50vw+50%)] max-lg:mr-[calc(-50vw+50%)] max-lg:rounded-none">
                <div className="rounded-2xl overflow-hidden relative w-full aspect-2/1 max-lg:w-screen! max-lg:ml-[calc(-50vw+50%)]! max-lg:mr-[calc(-50vw+50%)]! max-lg:rounded-none!">
                    <EmblaCarousel
                        slides={slides}
                        options={{
                            ...carouselOptions,
                            plugins: [autoplayPlugin],
                        }}
                        width="100%"
                        height="100%"
                        showControls={true}
                        showDots={true}
                        className="about-gallery-carousel absolute inset-0 h-full"
                        renderSlide={renderCustomSlide}
                    />
                </div>
            </div>
        </div>
    );
}
