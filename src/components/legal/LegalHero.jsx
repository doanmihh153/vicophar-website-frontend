"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import feedbackAnimation from "@/assets/lottie/feed-back.json";

// Lazy load Lottie player for performance
const LottiePlayer = dynamic(() => import("@/components/common/LottiePlayer"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[200px] bg-gray-50 animate-pulse rounded-xl" />
    ),
});

const LegalHero = memo(function LegalHero() {
    return (
        <div className="bg-white rounded-none -mx-4 tablet:-mx-5 desktop:mx-0 desktop:rounded-2xl p-6 tablet:p-8">
            <div className="flex flex-col tablet:flex-row items-center gap-6 desktop:gap-10">
                {/* Animation Container - Fixed width/height aspect ratio to prevent layout shift */}
                <div className="w-full tablet:w-1/3 flex justify-center tablet:justify-start">
                    <div className="w-[180px] h-[180px] tablet:w-[220px] tablet:h-[220px] desktop:w-[240px] desktop:h-[240px] relative">
                        <LottiePlayer
                            src={feedbackAnimation}
                            className="w-full h-full"
                            renderMode="svg"
                            autoplay={true}
                            loop={true}
                        />
                    </div>
                </div>

                {/* Text Content - SEMANTIC HTML for SEO */}
                <div className="w-full tablet:w-2/3 text-center tablet:text-left">
                    <h2 className="text-xl tablet:text-2xl desktop:text-3xl font-bold text-vico-primary mb-3 tablet:mb-4">
                        CHÚNG TÔI LUÔN LẮNG NGHE Ý KIẾN TỪ BẠN
                    </h2>
                    <p className="text-gray-600 text-base tablet:text-lg leading-relaxed">
                        Mọi đóng góp của bạn đều là động lực để Vicophar không
                        ngừng cải thiện và phát triển. Hãy chia sẻ với chúng tôi
                        để cùng xây dựng một cộng đồng sức khỏe tốt đẹp hơn.
                    </p>
                </div>
            </div>
        </div>
    );
});

export default LegalHero;
