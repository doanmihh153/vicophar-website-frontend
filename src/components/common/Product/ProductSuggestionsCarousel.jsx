/**
 * ============================================================================
 * PRODUCT SUGGESTIONS CAROUSEL - CAROUSEL GỢI Ý SẢN PHẨM
 * ============================================================================
 *
 * Component carousel hiển thị danh sách sản phẩm gợi ý với Embla Carousel
 * Tái sử dụng cho toàn bộ website Vicophar
 *
 * CẤU TRÚC:
 * ---------
 * - Container: vico-container (1280px max-width)
 * - Carousel: Embla Carousel với navigation buttons và dots
 * - Cards: Sử dụng ProductCard component
 * - Responsive: Hiển thị 1-4 cards tùy breakpoint
 *
 * FEATURES:
 * ---------
 * - Autoplay với delay tùy chỉnh
 * - Navigation buttons (prev/next)
 * - Dot indicators
 * - Loop infinite
 * - Responsive slides per view
 * - Touch/swipe support
 * - Keyboard navigation
 *
 * PROPS:
 * ------
 * - products: Array<Product> - Danh sách sản phẩm
 * - title?: string - Tiêu đề section (optional)
 * - autoplayDelay?: number - Delay autoplay (default: 3000ms)
 * - showDots?: boolean - Hiển thị dots (default: true)
 * - showArrows?: boolean - Hiển thị arrows (default: true)
 *
 * USAGE:
 * ------
 * import ProductSuggestionsCarousel from '@/components/common/ProductSuggestionsCarousel';
 *
 * <ProductSuggestionsCarousel
 *   products={danhSachSanPham}
 *   title="Sản phẩm nổi bật"
 *   autoplayDelay={4000}
 * />
 *
 * SEO & ACCESSIBILITY:
 * -------------------
 * ✅ Semantic HTML (section > div > article)
 * ✅ ARIA labels đầy đủ
 * ✅ Keyboard navigation
 * ✅ Screen reader support
 * ✅ Schema.org Product markup
 *
 * ============================================================================
 */

"use client";

import React from "react";
import EmblaCarousel from "@/components/common/EmblaCarousel";
import ProductCard from "./ProductCard";
import Autoplay from "embla-carousel-autoplay";

export default function ProductSuggestionsCarousel({
    products = [],
    title = "Sản phẩm gợi ý",
    autoplayDelay = 3000,
    showDots = true,
    showArrows = true,
}) {
    // ========================================
    // VALIDATION - Kiểm tra dữ liệu đầu vào
    // ========================================
    if (!Array.isArray(products) || products.length === 0) {
        console.warn(
            "ProductSuggestionsCarousel: Không có sản phẩm để hiển thị"
        );
        return null;
    }

    // ========================================
    // CAROUSEL OPTIONS
    // ========================================
    const carouselOptions = {
        loop: true,
        align: "start",
        skipSnaps: false,
        dragFree: false,
        slidesToScroll: 1,
        breakpoints: {
            // Mobile: 1 slide
            "(max-width: 767px)": {
                slidesToScroll: 1,
            },
            // Tablet: 2 slides
            "(min-width: 768px)": {
                slidesToScroll: 2,
            },
            // Desktop: 3 slides
            "(min-width: 1024px)": {
                slidesToScroll: 3,
            },
            // Wide: 4 slides
            "(min-width: 1280px)": {
                slidesToScroll: 4,
            },
        },
    };

    // ========================================
    // AUTOPLAY PLUGIN
    // ========================================
    const autoplayPlugin = Autoplay({
        delay: autoplayDelay,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
    });

    // ========================================
    // RENDER SLIDES - Mỗi slide chứa một ProductCard
    // ========================================
    const slides = products.map((product) => (
        <div
            key={product.id}
            className="flex-[0_0_100%] tablet:flex-[0_0_50%] desktop:flex-[0_0_33.333%] wide:flex-[0_0_25%] px-2"
        >
            <ProductCard product={product} />
        </div>
    ));

    // ========================================
    // RENDER COMPONENT
    // ========================================
    return (
        <section
            className="vico-section"
            aria-labelledby="product-suggestions-heading"
            role="region"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            {/* Tiêu đề section nếu có */}
            {title && (
                <header className="text-center mb-8">
                    <h2
                        id="product-suggestions-heading"
                        className="vico-heading-2 text-vico-green"
                        itemProp="name"
                        role="heading"
                        aria-level="2"
                    >
                        {title}
                    </h2>
                </header>
            )}

            {/* Container carousel */}
            <div className="vico-container">
                <div
                    className="product-suggestions-carousel"
                    aria-label={`Carousel sản phẩm: ${title}`}
                    role="region"
                >
                    <EmblaCarousel
                        slides={slides}
                        options={{
                            ...carouselOptions,
                            plugins: [autoplayPlugin],
                        }}
                        width="100%"
                        height="auto"
                        showControls={showArrows}
                        showDots={showDots}
                        className="product-suggestions-carousel"
                    />
                </div>
            </div>
        </section>
    );
}
