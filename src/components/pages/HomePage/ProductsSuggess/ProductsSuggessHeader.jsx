/**
 * ProductsSuggessHeader - Header Section
 *
 * Chứa:
 * - Ribbon Banner decoration
 * - H2 heading "Sản phẩm nổi bật"
 * - Description text
 * - Category filter tabs
 */

"use client";

import React, { memo } from "react";
import { RibbonBanner } from "@/assets/icons";

const categories = [
    { id: "featured", label: "Sản phẩm nổi bật" },
    { id: "kids", label: "Phát triển toàn diện cho trẻ nhỏ" },
    { id: "liver-heart", label: "Gan sạch, tim khỏe" },
    { id: "respiratory", label: "Hô hấp khỏe mạnh" },
];

function ProductsSuggessHeader({ selectedCategory, onCategoryChange }) {
    return (
        <>
            {/* Ribbon Banner - Decoration */}
            <div className="absolute -top-7.5 tablet:-top-10.5 desktop:-top-10.5 left-1/2 -translate-x-1/2 z-10 mobile:h-[81px] mobile:w-[380px] tablet:w-[550px] tablet:h-[101px] desktop:w-[550px] desktop:h-[101px]">
                <RibbonBanner
                    width={550}
                    height={101}
                    className="text-vico-green"
                />
            </div>

            <div className="vico-container">
                <header className="relative text-center mb-8">
                    <h2
                        id="featured-products-heading"
                        className="absolute -top-5 desktop:-top-6 left-1/2 -translate-x-1/2 z-20 text-h2 font-bold text-white uppercase whitespace-nowrap"
                        itemProp="name"
                        role="heading"
                        aria-level="2"
                    >
                        Sản phẩm nổi bật
                    </h2>
                    <p className="text-body font-normal text-vico-text-light pt-16">
                        Hành trình sức khỏe - Đồng hành cùng triệu gia đình
                    </p>

                    <div className="mt-8 flex desktop:justify-center tablet:justify-start mobile:justify-start gap-3 overflow-x-auto scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => onCategoryChange(category.id)}
                                className={`
                                    px-6 py-3 rounded-full font-semibold text-base leading-none! whitespace-nowrap transition-all duration-300 shrink-0
                                    ${
                                        selectedCategory === category.id
                                            ? "bg-vico-green text-white"
                                            : "bg-white text-vico-gray-600 hover:bg-vico-gray-50"
                                    }
                                `}
                                aria-label={`Lọc theo ${category.label}`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </header>
            </div>
        </>
    );
}

export default memo(ProductsSuggessHeader);
