"use client";

import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import useLightbox from "./hooks/useLightbox";
import useImageSlider from "./hooks/useImageSlider";

/**
 * ============================================================================
 * PRODUCT IMAGE LIGHTBOX (QUICK VIEW STYLE)
 * ============================================================================
 *
 * Modal hiển thị thư viện ảnh sản phẩm.
 * Style: Giống ProductQuickView (Modal trắng, bo góc, bóng đổ).
 * Layout: 2 Cột (Trái: Ảnh lớn, Phải: Grid Thumbnails).
 *
 * Sử dụng các hooks đã tách:
 * - useLightbox: Quản lý modal state (mount, visible, scroll lock, ESC)
 * - useImageSlider: Quản lý slider navigation + drag
 *
 * @param {boolean} isOpen - Trạng thái mở lightbox
 * @param {function} onClose - Hàm đóng lightbox
 * @param {Array} images - Danh sách ảnh [{src, alt}]
 * @param {number} initialIndex - Index của ảnh bắt đầu hiển thị
 * @param {string} productTitle - Tên sản phẩm
 */
export default function ProductImageLightbox({
    isOpen,
    onClose,
    images = [],
    initialIndex = 0,
    productTitle = "",
}) {
    // ========================================
    // HOOKS
    // ========================================
    const { mounted, isVisible } = useLightbox({ isOpen, onClose });

    const {
        currentIndex,
        goToSlide,
        goToPrev,
        goToNext,
        isDragging,
        dragOffset,
        dragHandlers,
    } = useImageSlider({
        totalSlides: images.length,
        initialIndex,
        isOpen,
        enableKeyboard: true,
    });

    // ========================================
    // RENDER GUARDS
    // ========================================
    const [isReady, setIsReady] = React.useState(false);

    // Prevent initial "swipe" animation when opening at index > 0
    React.useEffect(() => {
        if (isOpen) {
            // Delay slightly to allow initial layout to settle at correct position
            const timer = setTimeout(() => setIsReady(true), 50);
            return () => clearTimeout(timer);
        } else {
            setIsReady(false);
        }
    }, [isOpen]);

    if (!mounted) return null;
    if (!isOpen && !isVisible) return null;

    // ========================================
    // RENDER
    // ========================================
    return createPortal(
        <div
            className={`fixed inset-0 z-9999 flex items-center justify-center p-0 md:p-6 transition-all duration-300 ${
                isOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
            }`}
            role="dialog"
            aria-modal="true"
        >
            {/* BACKDROP */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* MODAL CONTAINER */}
            <div
                className={`
                    relative w-full h-full md:max-w-none md:w-[800px] lg:w-[1000px] xl:w-[1200px]
                    bg-white rounded-none md:rounded-2xl shadow-2xl overflow-hidden
                    flex flex-col md:flex-row
                    md:h-[600px] lg:h-[700px]
                    transform transition-all duration-300 ease-out
                    ${
                        isOpen
                            ? "scale-100 translate-y-0"
                            : "scale-95 translate-y-4"
                    }
                `}
            >
                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 text-gray-500 bg-white/80 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none shadow-sm border border-gray-100"
                    aria-label="Đóng cửa sổ"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* LEFT COLUMN: MAIN IMAGE (65%) */}
                <div
                    className="w-full md:w-[65%] h-[60%] md:h-full relative bg-gray-50 flex items-center justify-center touch-none"
                    {...dragHandlers}
                >
                    {/* Slides Track */}
                    <div className="relative w-full h-full overflow-hidden">
                        <div
                            className={`flex h-full ${
                                isDragging || !isReady
                                    ? "transition-none"
                                    : "transition-transform duration-300 ease-out"
                            }`}
                            style={{
                                width: `${images.length * 100}%`,
                                transform: `translateX(calc(-${
                                    currentIndex * (100 / images.length)
                                }% + ${dragOffset}px))`,
                            }}
                        >
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="relative h-full shrink-0 flex items-center justify-center p-2 md:p-8"
                                    style={{ width: `${100 / images.length}%` }}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={img.src}
                                            alt={
                                                img.alt ||
                                                `${productTitle} - ${index + 1}`
                                            }
                                            fill
                                            className="object-contain select-none"
                                            sizes="(max-width: 768px) 100vw, 70vw"
                                            priority={
                                                Math.abs(
                                                    index - currentIndex
                                                ) <= 1
                                            }
                                            draggable={false}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nav Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrev();
                                }}
                                className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-400 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 ${
                                    currentIndex === 0
                                        ? "opacity-50 cursor-not-allowed"
                                        : "opacity-100"
                                }`}
                                aria-label="Ảnh trước"
                                disabled={currentIndex === 0}
                            >
                                <svg
                                    width="24"
                                    height="24"
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

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-400 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 ${
                                    currentIndex === images.length - 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : "opacity-100"
                                }`}
                                aria-label="Ảnh sau"
                                disabled={currentIndex === images.length - 1}
                            >
                                <svg
                                    width="24"
                                    height="24"
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
                        </>
                    )}
                </div>

                {/* RIGHT COLUMN: THUMBNAILS (35%) */}
                <div className="w-full md:w-[35%] h-[40%] md:h-full bg-white border-l border-gray-100 flex flex-col">
                    <div className="p-3 md:p-4 pr-12 border-b border-gray-100">
                        <h3 className="font-bold text-gray-800 text-base md:text-lg line-clamp-2 translate-y-1">
                            {productTitle}
                        </h3>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 md:p-4 custom-scrollbar">
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 gap-2 md:gap-3">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                        index === currentIndex
                                            ? "border-vico-green ring-1 ring-vico-green"
                                            : "border-transparent hover:border-vico-green/20"
                                    }`}
                                >
                                    <Image
                                        src={img.src}
                                        alt={`Thumb ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="150px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
