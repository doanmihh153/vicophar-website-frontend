"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import QuickViewImage from "./QuickViewImage";
import QuickViewInfo from "./QuickViewInfo";
import QuickViewActions from "./QuickViewActions";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import BestSellerBadge from "../BestSellerBadge";

/**
 * ============================================================================
 * PRODUCT QUICK VIEW CONTAINER
 * ============================================================================
 *
 * Component cha quản lý trạng thái và layout của Modal Quick View.
 * Tập hợp các components con: Image, Info, Actions.
 *
 * SEO Note: Sử dụng Schema.org/Product microdata.
 *
 * PROPS:
 * ------
 * @param {boolean} isOpen - Trạng thái hiển thị modal
 * @param {function} onClose - Callback khi đóng modal
 * @param {Object} product - Dữ liệu sản phẩm
 */
export default function ProductQuickView({ isOpen, onClose, product }) {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // ========================================
    // EFFECTS - Quản lý Lifecycle & Animation
    // ========================================

    // 1. Handle Mounting (cho Portal)
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // 2. Handle Visibility (Animation only)
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Đợi animation đóng
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // 3. Prevent Body Scroll (Robust method)
    useBodyScrollLock(isOpen || isVisible);

    // 4. Handle Keyboard (Escape to close)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // ========================================
    // RENDER LOGIC
    // ========================================

    if (!mounted) return null;
    if (!isOpen && !isVisible) return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-10000 flex items-end md:items-center justify-center transition-all duration-300 p-2 ${
                isOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* 1. BACKDROP - Nền tối mờ */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* 2. MODAL CONTAINER - Fullscreen Mobile, Modal Desktop */}
            <div
                className={`relative w-full h-full md:h-[500px] lg:h-[600px] xl:h-[650px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1100px] bg-white rounded-xl md:rounded-2xl shadow-2xl transform transition-all duration-300 ease-out flex flex-col md:flex-row ${
                    isOpen
                        ? "translate-y-0 md:scale-100"
                        : "translate-y-full md:translate-y-0 md:scale-95"
                }`}
                itemScope
                itemType="https://schema.org/Product"
            >
                {/* BADGE BÁN CHẠY (Ribbon style) */}
                {product?.isBestSeller && <BestSellerBadge />}

                {/* CLOSE BUTTON - Nút đóng góc phải */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 z-10 p-2 text-gray-500 bg-white/80 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none"
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
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* 3. LEFT COLUMN - IMAGE */}
                <QuickViewImage image={product?.image} title={product?.title} />

                {/* 4. RIGHT COLUMN - DETAILS & ACTIONS */}
                <div className="w-full md:w-1/2 flex-1 md:h-full p-6 md:p-8 lg:p-10 flex flex-col overflow-y-auto md:rounded-r-2xl">
                    {/* Phần thông tin: Title, Specs, Description */}
                    <QuickViewInfo product={product} />

                    {/* Phần nút bấm: Mua ngay, Xem chi tiết */}
                    <QuickViewActions
                        title={product?.title}
                        productLink={product?.link}
                        onClose={onClose}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}
