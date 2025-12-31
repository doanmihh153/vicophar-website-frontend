"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import errorAnimation from "@/assets/lottie/404-error.json";
import { HomeIcon } from "@/assets/icons";

// Optimize Lottie: Lazy load to improve Initial Load Time & TBT
const LottiePlayer = dynamic(() => import("@/components/common/LottiePlayer"), {
    ssr: false, // Client-side only
    loading: () => (
        <div className="w-[300px] h-[200px] bg-gray-50 animate-pulse rounded-2xl mx-auto" />
    ),
});

export default function NotFound() {
    return (
        <section className="bg-white min-h-[calc(100vh-var(--height-vico-header))] flex items-center justify-center py-10 tablet:py-20">
            <div className="vico-container">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                    {/* LOTTIE ANIMATION - Optimized & Responsive */}
                    <div className="w-full max-w-3xl aspect-5/2 relative">
                        <LottiePlayer
                            src={errorAnimation}
                            className="w-full h-full"
                            renderMode="svg" // Better quality for vectors
                            loop={true}
                            autoplay={true}
                        />
                    </div>

                    {/* ARTISTIC TEXT MESSAGE */}
                    <div className="space-y-4">
                        <h2 className="text-2xl tablet:text-3xl font-bold text-vico-gray-800">
                            Oops! Trang này đã “đi lạc” đâu đó rồi...
                        </h2>
                        <p className="text-vico-gray-600 text-base tablet:text-lg leading-relaxed max-w-lg mx-auto">
                            Có thể liên kết bạn truy cập không tồn tại hoặc đã
                            bị hỏng. Đừng lo lắng, hãy quay về trang chủ để tiếp
                            tục hành trình chăm sóc sức khỏe cùng Vicophar nhé!
                        </p>
                    </div>

                    {/* ACTION BUTTON */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-vico-green text-white font-bold py-3 px-8 rounded-full"
                    >
                        <span>Về Trang Chủ</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
