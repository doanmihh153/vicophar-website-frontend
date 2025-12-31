"use client";

import dynamic from "next/dynamic";
import NewsletterSubscription from "@/components/common/Newsletter/NewsletterSubscription";
import comingSoonAnimation from "@/assets/lottie/comming-soon.json";

// Lazy load LottiePlayer
// ssr: false because it relies on browser APIs (SVG/Canvas) and we want to isolate the bundle
const LottiePlayer = dynamic(
    () => import("@/components/common/LottiePlayer/LottiePlayer"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-64 bg-gray-50 rounded-xl animate-pulse" />
        ),
    }
);

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-linear-to-b from-vico-white to-vico-gray-50">
            {/* Hero Section */}
            <section className="py-12 md:py-20">
                <div className="vico-container">
                    <div className="flex flex-col items-center text-center">
                        {/* Lottie Animation */}
                        <div className="w-full max-w-md md:max-w-lg mb-8">
                            <LottiePlayer
                                animationData={comingSoonAnimation}
                                loop={true}
                                autoplay={true}
                                renderMode="svg"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Coming Soon Text */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vico-gray-900 mb-4">
                            Sắp Ra Mắt
                        </h1>
                        <p className="text-lg md:text-xl text-vico-gray-700 max-w-2xl mb-6 leading-relaxed">
                            Chúng tôi đang chuẩn bị một trải nghiệm mua sắm
                            tuyệt vời dành cho bạn.
                            <br />
                            <span className="text-vico-green font-semibold">
                                Hãy đăng ký để nhận thông báo khi cửa hàng mở
                                cửa!
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <NewsletterSubscription
                title="Đăng ký nhận thông báo"
                description={
                    <>
                        Để lại email của bạn để được{" "}
                        <span className="font-bold">thông báo ngay</span> khi
                        Vicophar Shop chính thức ra mắt và nhận{" "}
                        <span className="font-bold">ưu đãi độc quyền</span> cho
                        khách hàng đầu tiên!
                    </>
                }
                className="pb-12 md:pb-20"
            />
        </div>
    );
}
