"use client";

/**
 * ============================================================================
 * HELP SIDEBAR - STICKY SIDEBAR + OPTIONAL PRODUCT CARD
 * ============================================================================
 *
 * Sidebar hỗ trợ liên hệ Vicophar.
 * Có thể hiển thị ProductCardMini khi sticky (nếu có linkedProduct).
 *
 * PROPS:
 * - linkedProduct: { enabled: boolean, productId: number } - Optional
 * - disableSticky: boolean - Tắt sticky behavior
 *
 * USAGE:
 * <HelpSidebar linkedProduct={article.linkedProduct} />
 *
 * ============================================================================
 */

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCardMini from "@/components/common/Product/ProductCardMini";
import { featuredProducts } from "@/data/mockProducts";

export default function HelpSidebar({
    className = "",
    disableSticky = false,
    linkedProduct = null,
}) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [showProductCard, setShowProductCard] = useState(false);
    const sidebarRef = useRef(null);

    // Check desktop breakpoint
    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    // Detect sticky state via scroll position (like ProductContentSidebar)
    useEffect(() => {
        if (!isDesktop || disableSticky) return;

        const handleScroll = () => {
            if (!sidebarRef.current) return;
            const sidebarTop = sidebarRef.current.getBoundingClientRect().top;
            // Khi sidebar.top <= 120 (top offset của sticky), sidebar đang sticky
            setShowProductCard(sidebarTop <= 120);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check initial state

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDesktop, disableSticky]);

    // Lookup product if linkedProduct exists and enabled
    const product = linkedProduct?.enabled
        ? featuredProducts.find((p) => p.id === linkedProduct.productId)
        : null;

    return (
        <div
            ref={sidebarRef}
            className={`
                ${className}
                ${
                    !disableSticky && isDesktop
                        ? "desktop:sticky desktop:top-[120px] desktop:z-20"
                        : ""
                }
            `}
        >
            {/* HELP CARD */}
            <div className="bg-white rounded-xl p-2 tablet:p-4 desktop:p-6">
                <h3 className="text-h4 tablet:text-h4 desktop:text-h3 font-bold text-vico-text text-center leading-[1.2]!">
                    Chúng Tôi Luôn Sẵn Sàng Giúp Đỡ Bạn
                </h3>

                <div className="relative w-full aspect-square max-w-[200px] tablet:max-w-[250px] desktop:max-w-[300px] mx-auto">
                    <Image
                        src="/imgs/sidebar/doctor-support.svg"
                        alt="Bác sĩ tư vấn Vicophar"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <p className="text-body tablet:text-lg desktop:text-xl text-vico-gray-700 text-center mb-3 desktop:mb-4">
                    Để được hỗ trợ tốt nhất. Hãy liên hệ tư vấn ngay
                </p>

                <Link
                    href="tel:0333152545"
                    className="block text-center mb-4 desktop:mb-6"
                >
                    <span className="text-h3 tablet:text-h2 desktop:text-h1 font-bold text-vico-green">
                        0333 152 545
                    </span>
                </Link>

                <Link
                    href="tel:0333152545"
                    className="block w-full bg-vico-green text-white font-semibold text-body tablet:text-lg desktop:text-xl py-2 rounded-full text-center"
                >
                    Gọi ngay
                </Link>
            </div>

            {/* PRODUCT CARD - Hiện khi sticky và có linkedProduct */}
            {product && (
                <div
                    className={`
                        transition-all duration-500 ease-out mt-4
                        ${
                            showProductCard
                                ? "opacity-100 translate-y-0 max-h-[500px]"
                                : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
                        }
                    `}
                    aria-hidden={!showProductCard}
                >
                    <ProductCardMini product={product} />
                </div>
            )}
        </div>
    );
}
