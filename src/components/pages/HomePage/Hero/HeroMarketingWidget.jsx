/**
 * ============================================================================
 * HERO MARKETING WIDGET (LAYER 2)
 * ============================================================================
 *
 * Component hiển thị Carousel chính và Static Banners bên cạnh.
 * Đè lên HeroStickyBackground với negative margin.
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "@/components/common/EmblaCarousel";
import { heroBanners, heroSideBanners } from "@/data/mockHomePage";
import Autoplay from "embla-carousel-autoplay";
import AboutUsHeader from "../AboutUs/AboutUsHeader";

export default function HeroMarketingWidget() {
    // Cấu hình Carousel
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

    // Plugin Autoplay
    const autoplayPlugin = Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
    });

    return (
        <div className="vico-container relative z-10 mt-0 desktop:-mt-20 before:content-[''] before:absolute before:left-[-50vw] before:right-[-50vw] before:top-20 before:bottom-[-100vh] before:bg-white before:-z-10">
            {/* 
                LIQUID GLASS WRAPPER
                - Mobile/Tablet (< 1024px): Solid White, Full width, No radius.
                - Desktop (>= 1024px): Glass effect (bg-white/5), Blur, Shadow, Rounded.
            */}
            <div className="bg-white lg:supports-[backdrop-filter:blur(0px)]:bg-white/5 lg:supports-[backdrop-filter:blur(0px)]:backdrop-blur-md lg:shadow-lg lg:ring-1 lg:ring-white/40 max-lg:w-screen max-lg:ml-[calc(-50vw+50%)] max-lg:mr-[calc(-50vw+50%)] max-lg:rounded-none lg:rounded-4xl lg:-mx-6 p-2 lg:p-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 h-full">
                    {/* LEFT COLUMN: MAIN CAROUSEL */}
                    <div className="lg:col-span-8 relative rounded-2xl overflow-hidden max-lg:w-screen! max-lg:ml-[calc(-50vw+50%)]! max-lg:mr-[calc(-50vw+50%)]! max-lg:rounded-none!">
                        <div className="w-full aspect-2/1 relative h-full">
                            <EmblaCarousel
                                slides={heroBanners}
                                options={{
                                    ...carouselOptions,
                                    plugins: [autoplayPlugin],
                                    sizes: "(max-width: 1024px) 100vw, 860px",
                                }}
                                width="100%"
                                height="100%"
                                showControls={true}
                                showDots={true}
                                className="hero-carousel absolute inset-0 h-full"
                                priority
                                loading="eager"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 2 STATIC BANNERS */}
                    <div className="lg:col-span-4 hidden lg:grid grid-rows-2 gap-2 h-full">
                        {heroSideBanners.map((banner, index) => (
                            <Link
                                key={banner.id}
                                href={banner.link || "#"}
                                className="relative w-full h-full rounded-2xl overflow-hidden duration-300"
                            >
                                <div className="w-full h-full relative">
                                    <Image
                                        src={banner.image}
                                        alt={banner.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 1200px) 33vw, 400px"
                                        priority={index === 0}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ABOUT US HEADER - Giới thiệu đôi điều */}
            <div className="vico-container mt-8 lg:mt-12">
                <AboutUsHeader />
            </div>
        </div>
    );
}
