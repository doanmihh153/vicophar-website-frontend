"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import useSliderDrag from "@/hooks/useSliderDrag";
import useScrollGrab from "./hooks/useScrollGrab";
import ProductImageLightbox from "./ProductImageLightbox";

/**
 * ============================================================================
 * PRODUCT IMAGE SLIDER - WITH DRAG & DROP
 * ============================================================================
 *
 * Slider ảnh sản phẩm với hiệu ứng TRƯỢT NGANG (slide)
 * Hỗ trợ Touch/Swipe trên mobile và Mouse Drag trên desktop
 *
 * @param {Array} images - Danh sách ảnh [{src, alt}]
 * @param {string} productTitle - Tên sản phẩm (cho alt text fallback)
 *
 * ============================================================================
 */
export default function ProductImageSlider({ images = [], productTitle = "" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [initialLightboxIndex, setInitialLightboxIndex] = useState(0);

    // ========================================
    // HANDLERS (Navigation)
    // ========================================
    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    }, []);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? prev : prev + 1
        );
    }, [images.length]);

    // ========================================
    // DRAG HOOK INTEGRATION
    // ========================================
    const { isDragging, dragOffset, dragHandlers } = useSliderDrag({
        currentIndex,
        totalSlides: images.length,
        onSlideChange: goToSlide,
        threshold: 50, // 50px để đổi slide
    });

    // Scroll Grab for Thumbnails (Mobile)
    const {
        scrollRef,
        isDragging: isGrabDragging,
        events: grabEvents,
    } = useScrollGrab();

    if (!images || images.length === 0) return null;

    return (
        <div className="product-image-slider overflow-hidden max-w-full mb-8">
            {/* ========================================
                MAIN SLIDER - SLIDE EFFECT
                ======================================== */}
            {/* Thêm touch-action-pan-y để cho phép scroll dọc trang web khi lướt lên xuống */}
            <div
                className="relative group rounded-xl overflow-hidden bg-white mb-4 touch-pan-y select-none cursor-zoom-in active:cursor-grabbing"
                {...dragHandlers}
                onClick={() => {
                    if (!isDragging) {
                        setInitialLightboxIndex(currentIndex);
                        setIsLightboxOpen(true);
                    }
                }}
            >
                {/* Slides Container - Trượt ngang */}
                <div className="relative aspect-square overflow-hidden">
                    <div
                        className={`flex h-full ${
                            isDragging
                                ? "transition-none"
                                : "transition-transform duration-300 ease-out"
                        }`}
                        style={{
                            width: `${images.length * 100}%`,
                            // Tính toán transform:
                            // 1. Vị trí cơ bản: -(currentIndex * 100 / length)%
                            // 2. Cộng thêm dragOffset (px)
                            transform: `translateX(calc(-${
                                currentIndex * (100 / images.length)
                            }% + ${dragOffset}px))`,
                        }}
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="relative h-full shrink-0"
                                style={{ width: `${100 / images.length}%` }}
                            >
                                <Image
                                    src={img.src}
                                    alt={
                                        img.alt ||
                                        `${productTitle} - Ảnh ${index + 1}`
                                    }
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index === 0}
                                    draggable={false} // Ngăn drag ảnh mặc định
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons (Conditional Logic) */}
                {images.length > 1 && (
                    <>
                        {/* Prev Button - Hidden at Start */}
                        {currentIndex > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Ngăn trigger drag start
                                    goToPrev();
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-400 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20"
                                aria-label="Ảnh trước"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>
                        )}

                        {/* Next Button - Hidden at End */}
                        {currentIndex < images.length - 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-400 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20"
                                aria-label="Ảnh sau"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        )}
                    </>
                )}
            </div>

            {/* ========================================
                THUMBNAIL SLIDER
                ======================================== */}
            {/* ========================================
                THUMBNAIL GRID (Fixed 5 Cols)
                ======================================== */}
            {/* ========================================
                THUMBNAIL SLIDER
                ======================================== */}
            {images.length > 1 && (
                <>
                    {/* MOBILE/TABLET: Horizontal Scroll List (All Images) */}
                    <div
                        ref={scrollRef}
                        className="flex desktop:hidden gap-2 overflow-x-auto scrollbar-hide p-0.5 mb-2 cursor-grab active:cursor-grabbing select-none"
                        {...grabEvents}
                    >
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isGrabDragging) {
                                        goToSlide(index);
                                    }
                                }}
                                className={`
                                    relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 cursor-pointer bg-white
                                    ${
                                        index === currentIndex
                                            ? "border-vico-green ring-1 ring-vico-green"
                                            : "border-transparent"
                                    }
                                `}
                                aria-label={`Xem ảnh ${index + 1}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={`Thumb ${index + 1}`}
                                    fill
                                    className="object-contain p-1"
                                    sizes="80px"
                                    draggable={false}
                                />
                            </button>
                        ))}
                    </div>

                    {/* DESKTOP: Grid 5 Cols (Limit 5 + Overlay) */}
                    <div className="hidden desktop:grid grid-cols-5 gap-2 p-0.5 mb-2">
                        {images.slice(0, 5).map((img, index) => {
                            // Check if this is the last slot (5th item) and we have more images
                            const isLastSlot = index === 4;
                            const remainingCount = images.length - 5;
                            const showOverlay =
                                isLastSlot && remainingCount > 0;

                            return (
                                <button
                                    key={index}
                                    ref={scrollRef}
                                    onClick={() => {
                                        if (showOverlay) {
                                            setInitialLightboxIndex(index);
                                            setIsLightboxOpen(true);
                                        } else {
                                            goToSlide(index);
                                        }
                                    }}
                                    className={`
                                    relative w-full aspect-square rounded-lg overflow-hidden border-2 cursor-pointer bg-white group/thumb
                                    ${
                                        index === currentIndex && !showOverlay
                                            ? "ring-1 ring-vico-green"
                                            : "border-transparent"
                                    }
                                `}
                                    aria-label={
                                        showOverlay
                                            ? `Xem thêm ${
                                                  remainingCount + 1
                                              } ảnh`
                                            : `Xem ảnh ${index + 1}`
                                    }
                                >
                                    <Image
                                        src={img.src}
                                        alt={`Thumb ${index + 1}`}
                                        fill
                                        className={`object-contain p-1 transition-transform ${
                                            showOverlay
                                                ? "opacity-50 blur-[1px]"
                                                : ""
                                        }`}
                                        sizes="10vw"
                                    />

                                    {/* Overlay for "View More" */}
                                    {showOverlay && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white font-bold p-1">
                                            <span className="text-xs text-center leading-tight">
                                                Xem thêm
                                            </span>
                                            <span className="text-sm">
                                                {remainingCount + 1} ảnh
                                            </span>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </>
            )}
            <span className="text-sm italic leading-none!">
                Sản phẩm chính hãng 100%, mẫu mã sản phẩm có thể thay đổi theo
                lô hàng.
            </span>

            {/* ========================================
                LIGHTBOX MODAL
                ======================================== */}
            <ProductImageLightbox
                isOpen={isLightboxOpen}
                initialIndex={initialLightboxIndex}
                onClose={() => setIsLightboxOpen(false)}
                images={images}
                productTitle={productTitle}
            />
        </div>
    );
}
