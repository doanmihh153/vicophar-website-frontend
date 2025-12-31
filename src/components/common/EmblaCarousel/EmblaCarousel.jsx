/**
 * ============================================================================
 * EMBLA CAROUSEL COMPONENT - VICOPHAR (PERFORMANCE OPTIMIZED)
 * ============================================================================
 *
 * PERFORMANCE OPTIMIZATIONS:
 * - fetchPriority="high" cho hero slide (LCP)
 * - Dragging class để enable will-change chỉ khi cần
 * - React.memo cho controls
 *
 * ============================================================================
 */

"use client";

import React, { useCallback, useEffect, useState, memo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const EmblaControls = memo(function EmblaControls({
    showDots,
    showArrows,
    scrollSnaps,
    selectedIndex,
    onDotButtonClick,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
}) {
    return (
        <div className="embla__controls">
            {showArrows && (
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            )}

            {showDots && (
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={
                                index === selectedIndex
                                    ? "embla__dot--selected"
                                    : ""
                            }
                            aria-label={`Chuyển đến slide ${index + 1}`}
                            aria-current={
                                index === selectedIndex ? "true" : "false"
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
});

const EmblaCarousel = ({
    slides = [],
    options = {},
    width = "100%",
    height = "100%",
    showControls = true,
    showDots = true,
    showArrows = true,
    className = "",
    renderSlide,
}) => {
    const { plugins, ...emblaOptions } = options;
    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, plugins || []);
    const [slidesInView, setSlidesInView] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(new Set()); // Keep track of loaded slides to avoid unloading

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const updateSlidesInView = useCallback((emblaApi) => {
        setSlidesInView((prevSlidesInView) => {
            if (
                emblaApi.slidesInView().length === prevSlidesInView.length &&
                emblaApi
                    .slidesInView()
                    .every((v, i) => v === prevSlidesInView[i])
            ) {
                return prevSlidesInView;
            }
            const inView = emblaApi.slidesInView();

            // Update hasLoaded synchronously with slidesInView
            setHasLoaded((prev) => {
                const newSet = new Set(prev);
                let changed = false;
                inView.forEach((index) => {
                    if (!newSet.has(index)) {
                        newSet.add(index);
                        changed = true;
                    }
                });
                return changed ? newSet : prev;
            });

            return inView;
        });
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        updateSlidesInView(emblaApi);
        emblaApi.on("slidesInView", updateSlidesInView);
        emblaApi.on("reInit", updateSlidesInView);

        return () => {
            emblaApi.off("slidesInView", updateSlidesInView);
            emblaApi.off("reInit", updateSlidesInView);
        };
    }, [emblaApi, updateSlidesInView]);

    // Handle isDragging via ref to prevent re-renders
    const containerRef = React.useRef(null);
    useEffect(() => {
        if (!emblaApi) return;
        const onPointerDown = () => {
            if (containerRef.current)
                containerRef.current.classList.add("embla--dragging");
        };
        const onPointerUp = () => {
            if (containerRef.current)
                containerRef.current.classList.remove("embla--dragging");
            if (emblaApi.plugins().autoplay)
                emblaApi.plugins().autoplay.reset();
        };
        emblaApi.on("pointerDown", onPointerDown);
        emblaApi.on("pointerUp", onPointerUp);
        return () => {
            emblaApi.off("pointerDown", onPointerDown);
            emblaApi.off("pointerUp", onPointerUp);
        };
    }, [emblaApi]);

    return (
        <section
            ref={containerRef}
            className={`embla ${className}`}
            style={{ width, height }}
        >
            <div className="embla__viewport h-full" ref={emblaRef}>
                <div className="embla__container h-full">
                    {slides.map((slide, index) => {
                        const SlideWrapper = slide.link ? Link : "div";
                        const wrapperProps = slide.link
                            ? {
                                  href: slide.link,
                                  className: "block w-full h-full",
                              }
                            : { className: "w-full h-full" };

                        const isHeroSlide = slide.priority || index === 0;

                        // SSR/SSG Optimization:
                        // Always render standard visible slides on initial load to avoid hydration mismatch/flash.
                        // 1. Hero (0)
                        // 2. Next (1) - Common for peeking
                        // 3. Last (length-1) - For loop/prev peeking
                        const isInitialStaticSlide =
                            index === 0 ||
                            index === 1 ||
                            index === slides.length - 1;

                        // Smart Buffer Logic:
                        const inViewBuffer = slidesInView.some(
                            (viewIndex) => Math.abs(viewIndex - index) <= 1
                        );

                        const shouldRender =
                            isInitialStaticSlide ||
                            hasLoaded.has(index) ||
                            slidesInView.includes(index) ||
                            inViewBuffer;

                        return (
                            <div
                                className="embla__slide w-full h-full"
                                key={slide.id || index}
                            >
                                <SlideWrapper {...wrapperProps}>
                                    <div className="relative w-full h-full">
                                        {/* 
                                            PERFORMANCE OPTIMIZATION EXPLANATION (VIETNAMESE):
                                            ... (Keep comments)
                                        */}
                                        {renderSlide ? (
                                            renderSlide({
                                                slide,
                                                index,
                                                inView: shouldRender,
                                                isHero: isHeroSlide,
                                            })
                                        ) : shouldRender ? (
                                            <Image
                                                src={slide.image}
                                                alt={
                                                    slide.alt ||
                                                    `Slide ${index + 1}`
                                                }
                                                fill
                                                className="embla__slide__img"
                                                // QUAN TRỌNG: Sửa lỗi LCP tại đây
                                                // Nếu là slide đầu tiên (Hero Slide) -> Priority = true
                                                priority={isHeroSlide}
                                                loading={
                                                    isHeroSlide
                                                        ? "eager"
                                                        : "lazy"
                                                }
                                                fetchPriority={
                                                    isHeroSlide
                                                        ? "high"
                                                        : "auto"
                                                }
                                                decoding={
                                                    isHeroSlide
                                                        ? "sync"
                                                        : "async"
                                                }
                                                sizes={options.sizes || "100vw"}
                                                quality={85}
                                            />
                                        ) : null}
                                    </div>
                                </SlideWrapper>
                            </div>
                        );
                    })}
                </div>
            </div>

            {showControls && (
                <EmblaControls
                    showDots={showDots}
                    showArrows={showArrows}
                    scrollSnaps={scrollSnaps}
                    selectedIndex={selectedIndex}
                    onDotButtonClick={onDotButtonClick}
                    prevBtnDisabled={prevBtnDisabled}
                    nextBtnDisabled={nextBtnDisabled}
                    onPrevButtonClick={onPrevButtonClick}
                    onNextButtonClick={onNextButtonClick}
                />
            )}
        </section>
    );
};

export default EmblaCarousel;
