"use client";

import React from "react";
import Image from "next/image";
import { storyIntro } from "@/data/storyPage";

export default function StoryIntro() {
    const { introImage, heading, subtitle, title, paragraphs } = storyIntro;

    return (
        <section className="py-10 tablet:py-16 desktop:py-20">
            <div className="vico-container">
                <div className="grid grid-cols-1 desktop:grid-cols-12 gap-2 desktop:gap-4 items-start">
                    {/* Left Column: Image - 7 cols */}
                    <div className="desktop:col-span-7 relative desktop:-top-18">
                        {/* Aspect ratio container - dùng aspect ratio từ data */}
                        <div
                            className="relative w-full"
                            style={{ aspectRatio: introImage.aspectRatio }}
                        >
                            <Image
                                src={introImage.src}
                                alt={introImage.alt}
                                fill
                                priority
                                className="object-contain object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 58vw"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content - 5 cols */}
                    <div className="desktop:col-span-5">
                        {/* H1 Title - Red Gradient */}
                        <h1 className="text-h1 leading-[1.2]! font-bold uppercase mb-6 vico-text-gradient-red">
                            {heading}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-body font-semibold text-vico-gray-500 mb-4">
                            {subtitle}
                        </p>

                        {/* Green Title */}
                        <h2 className="text-h2 font-bold text-vico-green mb-6 uppercase">
                            {title}
                        </h2>

                        {/* Content */}
                        <div className="space-y-4 text-vico-text text-body font-normal text-justify">
                            <p>
                                <strong>{storyIntro.companyName}</strong> Thành
                                lập ngày{" "}
                                <strong>{storyIntro.establishmentDate}</strong>,
                                chứng nhận đăng ký kinh doanh số:{" "}
                                <strong>{storyIntro.registrationNumber}</strong>{" "}
                                tại {storyIntro.registrationLocation}.
                            </p>
                            {paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
