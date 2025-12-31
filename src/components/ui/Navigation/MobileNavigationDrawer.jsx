"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CloseIcon, ArrowRight } from "@/assets/icons";
import LogoResponsive from "@/assets/icons/VicopharLogoMobile";
import { navLinks } from "@/data/navigation";
import { featuredProducts } from "@/data/mockProducts";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

/**
 * MobileNavigationDrawer Component (Redesigned)
 *
 * A full-screen navigation drawer that acts as a separate page.
 * Features:
 * - Slides from TOP to BOTTOM (Full Screen Overlay)
 * - Promo Banner & Quick Links
 * - Main Navigation
 * - Help Sidebar Footer
 * - Discreet Login Link
 */
const MobileNavigationDrawer = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Handle drawer open/close
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
            const timer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => setIsVisible(false), 400);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Close on path change
    useEffect(() => {
        if (isOpen) onClose();
    }, [pathname]);

    // Scroll Lock
    useBodyScrollLock(isVisible);

    if (!isVisible) return null;
    if (typeof document === "undefined") return null;

    return createPortal(
        <>
            {/* Backdrop (Z-index 9999) */}
            <div
                className={`fixed inset-0 bg-black/60 z-9998 transition-opacity duration-300 backdrop-blur-sm touch-none ${
                    isAnimating
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer Container (Z-index 10000) - Slides from TOP */}
            <div
                className={`fixed inset-0 bg-white z-10000 flex flex-col shadow-2xl transition-transform duration-400 cubic-bezier(0.16, 1, 0.3, 1) origin-top ${
                    isAnimating ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                {/* 1. HEADER section */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white shrink-0">
                    <Link href="/" onClick={onClose} aria-label="Về trang chủ">
                        <LogoResponsive className="w-20 h-auto" />
                    </Link>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Đóng menu"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div className="flex-1 overflow-y-auto pb-6">
                    {/* 2. PROMO BANNER (Yellow - Best Selling) */}
                    <div className="bg-vico-green-light p-4 border-b border-vico-green/50">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-vico-primary font-bold text-sm uppercase flex items-center gap-2">
                                Sản phẩm bán chạy
                            </span>
                        </div>

                        {featuredProducts && featuredProducts.length > 0 && (
                            <Link
                                href={featuredProducts[0].link}
                                onClick={onClose}
                                className="flex items-start gap-4 group"
                            >
                                {/* Product Image (Left) */}
                                <div className="w-24 h-24 relative shrink-0 bg-white rounded-xl border border-white p-2">
                                    <Image
                                        src={featuredProducts[0].image}
                                        alt={featuredProducts[0].title}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        fill
                                        className="object-contain transition-transform group-active:scale-95"
                                    />
                                </div>

                                {/* Content (Right) */}
                                <div className="flex-1 min-w-0 pt-1">
                                    <h3 className="text-vico-text font-bold text-base leading-tight mb-1 line-clamp-2 group-active:text-vico-green">
                                        {featuredProducts[0].title}
                                    </h3>
                                    <p className="text-gray-500 text-xs mb-2 line-clamp-2">
                                        {featuredProducts[0].description}
                                    </p>
                                </div>
                            </Link>
                        )}
                    </div>
                    {/* 3. QUICK LINKS (Bán chạy, Ưu đãi, Flash Sale) */}
                    <div className="px-4 py-4 space-y-3 bg-white">
                        <Link
                            href="/san-pham?sort=best-selling"
                            onClick={onClose}
                            className="flex items-center justify-between p-3 bg-cyan-100/50 rounded-lg"
                        >
                            <span className="font-bold text-cyan-800 text-sm uppercase">
                                BÁN CHẠY
                            </span>
                            <span className="text-[10px] border border-cyan-600 text-cyan-700 px-2 py-0.5 rounded-full font-bold">
                                BEST
                            </span>
                        </Link>
                        <Link
                            href="/khuyen-mai"
                            onClick={onClose}
                            className="flex items-center justify-between p-3 bg-emerald-100/50 rounded-lg"
                        >
                            <span className="font-bold text-emerald-800 text-sm uppercase">
                                ƯU ĐÃI
                            </span>
                            <span className="text-[10px] border border-emerald-600 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                                HOT
                            </span>
                        </Link>
                        <Link
                            href="/khuyen-mai?type=flash-sale"
                            onClick={onClose}
                            className="flex items-center justify-between p-3 bg-rose-100/50 rounded-lg"
                        >
                            <span className="font-bold text-rose-800 text-sm uppercase">
                                TIN MỚI NHẤT
                            </span>
                            <span className="text-[10px] border border-rose-600 text-rose-700 px-2 py-0.5 rounded-full font-bold">
                                NEW
                            </span>
                        </Link>
                    </div>

                    {/* 4. MAIN NAVIGATION */}
                    <nav className="px-4 py-2">
                        <ul className="space-y-1 divide-y-0">
                            {navLinks.map((link) => {
                                const isActive =
                                    pathname === link.href ||
                                    (link.href !== "/" &&
                                        pathname.startsWith(link.href));

                                return (
                                    <li key={link.id}>
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className={`flex items-center justify-between py-3 px-4 rounded-xl font-normal transition-colors ${
                                                isActive
                                                    ? "bg-vico-green-light/30 text-vico-green font-semibold"
                                                    : "text-vico-text hover:text-vico-green hover:bg-gray-50"
                                            }`}
                                        >
                                            <span>{link.title}</span>
                                            {isActive ? (
                                                <div className="w-1.5 h-1.5 rounded-full bg-vico-green"></div>
                                            ) : (
                                                <ArrowRight className="w-4 h-4 text-gray-400" />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* 5. FOOTER (Mimic HelpSidebar) */}
                    <div className="mx-4 mt-6 bg-vico-green-light/50 rounded-2xl p-4 text-center">
                        <h4 className="font-bold text-vico-text text-lg mb-2">
                            Chúng Tôi Luôn Sẵn Sàng
                            <br />
                            Giúp Đỡ Bạn
                        </h4>

                        {/* Doctor Image */}
                        <div className="relative w-50 h-50 mx-auto mb-2">
                            <Image
                                src="/imgs/sidebar/doctor-support.svg"
                                alt="Support Doctor"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="w-full h-px bg-gray-200 my-3"></div>

                        {/* Action Buttons */}
                        <div className="space-y-2">
                            <Link
                                href="tel:0333152545"
                                className="block w-full text-center"
                            >
                                <span className="text-base text-gray-500 block">
                                    Để được hỗ trợ tốt nhất. Hãy liên hệ tư vấn
                                    ngay
                                </span>
                                <span className="text-xl font-bold text-vico-green">
                                    0333 152 545
                                </span>
                            </Link>

                            <Link
                                href="tel:0333152545"
                                onClick={onClose}
                                className="block w-full bg-vico-green text-white font-semibold py-2.5 rounded-full hover:bg-green-700 transition-colors"
                            >
                                Liên hệ ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default MobileNavigationDrawer;
