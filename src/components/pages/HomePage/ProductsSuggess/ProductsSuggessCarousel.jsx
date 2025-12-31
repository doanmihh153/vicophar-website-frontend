/**
 * ProductsSuggessCarousel - Carousel Section
 *
 * Chứa:
 * - Embla Carousel setup
 * - Prev/Next navigation buttons
 * - Products grid với CSS Grid layout
 * - ProductCard rendering
 */

"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ProductCard } from "@/components/common/Product";
import {
    PrevButton,
    NextButton,
} from "@/components/common/EmblaCarousel/EmblaCarouselArrowButtons";

function ProductsSuggessCarousel({ products, selectedCategory }) {
    // ========================================
    // EMBLA CAROUSEL SETUP
    // ========================================

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 2,
        breakpoints: {
            "(min-width: 1040px)": { slidesToScroll: 4, watchDrag: false },
        },
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    // Reset scroll khi đổi category
    useEffect(() => {
        if (emblaApi) emblaApi.scrollTo(0);
    }, [selectedCategory, emblaApi]);

    // ========================================
    // RENDER
    // ========================================

    return (
        <main className="relative">
            <div className="vico-container">
                <div className="relative group">
                    {/* Navigation Buttons */}
                    {prevBtnEnabled && (
                        <PrevButton
                            onClick={scrollPrev}
                            className="embla__button embla__button--prev absolute left-0 top-55 -translate-y-1/2 -translate-x-1/2 z-30 hidden desktop:inline-flex"
                        />
                    )}
                    {nextBtnEnabled && (
                        <NextButton
                            onClick={scrollNext}
                            className="embla__button embla__button--next absolute right-0 top-55 -translate-y-1/2 translate-x-1/2 z-30 hidden desktop:inline-flex"
                        />
                    )}

                    {/* Embla Carousel Viewport */}
                    <div
                        className="overflow-hidden -mx-4 px-4 md:-mx-5 md:px-4 desktop:-mx-6 desktop:px-6 pb-6"
                        ref={emblaRef}
                        role="list"
                        aria-label="Danh sách sản phẩm nổi bật"
                    >
                        {/* Embla Container */}
                        <div className="flex gap-4 md:gap-6 desktop:gap-6 touch-pan-y touch-pinch-zoom">
                            {products.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="flex-none w-[calc((100%-16px)/2)] desktop:w-[calc((100%-72px)/4)]"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                    role="listitem"
                                >
                                    <meta
                                        itemProp="position"
                                        content={index + 1}
                                    />
                                    <ProductCard
                                        product={product}
                                        priority={index === 0}
                                        className="hover:border hover:border-vico-green"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default memo(ProductsSuggessCarousel);
