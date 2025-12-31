/**
 * ============================================================================
 * ABOUT US SERVICES - CAM KẾT DỊCH VỤ
 * ============================================================================
 *
 * Component hiển thị 4 đặc điểm nổi bật về dịch vụ (Trust, Delivery, Support, Brand).
 * Style: Clean Grid cards on Vico Hover background.
 *
 * ============================================================================
 */

"use client";

import React from "react";
import {
    TrustIcon,
    FreeShipIcon,
    ContactIcon,
    AwardIcon,
} from "@/assets/icons";

// Static data
const FEATURES = [
    {
        id: "authentic-products",
        icon: TrustIcon,
        titleBold: "100% Hàng",
        highlight: "Chính Hãng",
        description: "Cam kết sản phẩm chính hãng 100%",
        ariaLabel: "Cam kết 100% hàng chính hãng từ Vicophar",
    },
    {
        id: "free-shipping",
        icon: FreeShipIcon,
        titleBold: "Miễn Phí",
        highlight: "Vận chuyển",
        description: "Giao hàng miễn phí toàn quốc",
        ariaLabel: "Miễn phí vận chuyển toàn quốc",
    },
    {
        id: "pharmacist-support",
        icon: ContactIcon,
        titleBold: "Dược sĩ",
        highlight: "tư vấn 24/7",
        description: "Hỗ trợ tư vấn chuyên nghiệp 24/7",
        ariaLabel: "Dược sĩ tư vấn chuyên nghiệp 24/7",
    },
    {
        id: "trusted-brand",
        icon: AwardIcon,
        titleBold: "Thương hiệu",
        highlight: "từ 2018",
        description: "Thương hiệu uy tín với 7 năm kinh nghiệm",
        ariaLabel: "Thương hiệu Vicophar uy tín từ năm 2018",
    },
];

export default function AboutUsServices() {
    return (
        <section
            role="region"
            aria-labelledby="features-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className="vico-container px-0!">
                {/* Hidden heading for SEO */}
                <h2 id="features-heading" className="sr-only">
                    Cam kết dịch vụ của Vicophar
                </h2>

                {/* Features Grid Layout - Clean White Cards */}
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 auto-rows-auto md:auto-rows-[72px] items-center">
                    {FEATURES.map((feature) => {
                        const IconComponent = feature.icon;

                        return (
                            <article
                                key={feature.id}
                                className="bg-white rounded-2xl p-3 h-full flex flex-col md:flex-row items-center justify-center md:justify-start"
                                itemScope
                                itemType="https://schema.org/Service"
                                itemProp="itemListElement"
                                role="article"
                                aria-labelledby={`feature-title-${feature.id}`}
                            >
                                {/* Feature Icon */}
                                <div
                                    className="shrink-0 mb-1 md:mb-0 md:mr-3"
                                    itemProp="image"
                                >
                                    <IconComponent
                                        width={48}
                                        height={48}
                                        className="fill-vico-primary text-vico-white"
                                        aria-hidden="true"
                                        role="img"
                                    />
                                </div>

                                {/* Feature Text */}
                                <div className="min-w-0 text-center md:text-left w-full">
                                    <h3
                                        id={`feature-title-${feature.id}`}
                                        className="font-semibold whitespace-normal md:whitespace-nowrap text-vico-primary leading-tight"
                                        itemProp="name"
                                        role="heading"
                                        aria-level="3"
                                    >
                                        <span className="font-bold block md:inline">
                                            {feature.titleBold}{" "}
                                        </span>
                                        <span className="font-normal block md:inline">
                                            {feature.highlight}
                                        </span>
                                    </h3>

                                    {/* Hidden description for SEO */}
                                    <span
                                        className="sr-only"
                                        itemProp="description"
                                        aria-label={feature.ariaLabel}
                                    >
                                        {feature.description}
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
