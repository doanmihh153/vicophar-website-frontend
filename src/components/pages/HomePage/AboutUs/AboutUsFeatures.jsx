/**
 * ============================================================================
 * ABOUT US FEATURES - VÙNG NGUYÊN LIỆU SẠCH
 * ============================================================================
 *
 * Component hiển thị 3 đặc điểm nổi bật về nguyên liệu và sản xuất.
 * Style: Clean, no glass effect, transparent background (rely on parent section bg).
 *
 * ============================================================================
 */

import React from "react";
import Image from "next/image";

// Static data outside component for performance
const FEATURES = [
    {
        id: "clean-herbs-extraction",
        title: "Chiết xuất dược liệu sạch Đạt Chuẩn TCCS",
        image: "/imgs/home-page/vung-nguyen-lieu.webp",
        alt: "Vùng nguyên liệu sạch - Chiết xuất dược liệu đạt chuẩn TCCS của Vicophar",
        description:
            "Nguyên liệu dược liệu được chiết xuất theo tiêu chuẩn TCCS, đảm bảo chất lượng và an toàn tuyệt đối",
        ariaLabel:
            "Chiết xuất dược liệu sạch đạt chuẩn TCCS - Cam kết chất lượng từ Vicophar",
    },
    {
        id: "family-suitable",
        title: "Phù hợp với mọi đối tượng",
        image: "/imgs/home-page/gia-dinh-vui-ve.webp",
        alt: "Gia đình vui vẻ - Sản phẩm Vicophar phù hợp với mọi lứa tuổi",
        description:
            "Sản phẩm được nghiên cứu và phát triển phù hợp với mọi lứa tuổi trong gia đình",
        ariaLabel:
            "Sản phẩm phù hợp với mọi đối tượng - An toàn cho cả gia đình",
    },
    {
        id: "gmp-production",
        title: "Sản xuất trên dây chuyền đạt chuẩn GMP",
        image: "/imgs/home-page/chat-luong-kiem-duyet.webp",
        alt: "Dây chuyền sản xuất GMP - Chất lượng cao của Vicophar",
        description:
            "Quy trình sản xuất hiện đại đạt tiêu chuẩn GMP quốc tế, đảm bảo chất lượng sản phẩm",
        ariaLabel:
            "Sản xuất trên dây chuyền đạt chuẩn GMP - Tiêu chuẩn quốc tế",
    },
];

export default function AboutUsFeatures() {
    return (
        <section
            role="region"
            aria-labelledby="features-section-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            {/* Wrapper without background (transparent) */}
            <div className="relative py-2 tablet:py-4 bg-white p-4 rounded-none md:rounded-2xl max-md:w-screen max-md:ml-[calc(-50vw+50%)] max-md:mr-[calc(-50vw+50%)]">
                {/* Section Heading */}
                <header className="text-center mb-6 tablet:mb-8 desktop:mb-8">
                    <h2
                        id="features-section-heading"
                        className="text-h2 font-bold text-vico-green uppercase"
                        itemProp="name"
                        role="heading"
                        aria-level="2"
                    >
                        VÙNG NGUYÊN LIỆU SẠCH
                    </h2>
                    <p
                        className="text-body font-normal text-vico-text text-center opacity-90 max-w-3xl mx-auto"
                        itemProp="description"
                    >
                        Ba điểm nổi bật của Vicophar: Dược liệu sạch TCCS, phù
                        hợp mọi đối tượng, <br />
                        và quy trình sản xuất đạt chuẩn GMP.
                    </p>
                </header>

                {/* Features Grid */}
                <div
                    className="grid grid-cols-1 tablet:grid-cols-12 gap-4 tablet:gap-5 desktop:gap-[20px] tablet:h-[300px] items-center"
                    role="list"
                    aria-label="Danh sách đặc điểm nổi bật của Vicophar"
                >
                    {FEATURES.map((feature, index) => (
                        <article
                            key={feature.id}
                            className="col-span-1 tablet:col-span-4 relative h-[300px] tablet:h-full rounded-2xl overflow-hidden"
                            itemScope
                            itemType="https://schema.org/Service"
                            itemProp="itemListElement"
                            role="listitem"
                            aria-labelledby={`feature-title-${feature.id}`}
                            tabIndex={0}
                        >
                            {/* Feature Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={feature.image}
                                    alt={feature.alt}
                                    fill
                                    className="object-cover transition-opacity duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    priority={index === 0}
                                    quality={85}
                                    itemProp="image"
                                    role="img"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div
                                className="absolute inset-0 bg-linear-to-t from-vico-green from-0% to-transparent to-40% opacity-90 z-10"
                                aria-hidden="true"
                                role="presentation"
                            />

                            {/* Feature Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                <h3
                                    id={`feature-title-${feature.id}`}
                                    className="text-white text-h3 font-bold"
                                    itemProp="name"
                                    role="heading"
                                    aria-level="3"
                                >
                                    {feature.title}
                                </h3>

                                <span
                                    className="sr-only"
                                    itemProp="description"
                                    aria-label={feature.ariaLabel}
                                >
                                    {feature.description}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
