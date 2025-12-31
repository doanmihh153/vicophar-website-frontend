"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { CloseIcon } from "@/assets/icons";
import LogoResponsive from "@/components/ui/Header/Logo/LogoResponsive";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

function MobileNavigationDrawer({ isOpen, onClose }) {
    const pathname = usePathname();

    // Lock body scroll khi drawer mở (Robust method using position:fixed)
    useBodyScrollLock(isOpen);

    // ========================================
    // EFFECT: Đóng drawer khi ESC key
    // ========================================
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    // ========================================
    // EFFECT: Đóng drawer khi chuyển trang
    // ========================================
    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    // ========================================
    // RENDER
    // ========================================
    return (
        <>
            {/* Overlay Backdrop */}
            <div
                className={`
                    fixed inset-0 bg-black/50 z-110 lg:hidden
                    w-screen h-screen
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                style={{
                    touchAction: "none",
                    overscrollBehavior: "contain",
                }}
                onClick={onClose}
                onTouchMove={(e) => e.preventDefault()}
                aria-hidden="true"
            />

            {/* Drawer Panel */}
            <aside
                className={`
                    fixed top-0 left-0 h-full w-vico-sidebar bg-white z-120 lg:hidden
                    shadow-2xl flex flex-col
                    transition-transform duration-300 ease-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
                role="dialog"
                aria-modal="true"
                aria-label="Menu điều hướng mobile"
            >
                {/* Header với Logo */}
                <div className="flex items-center justify-between p-4 border-b border-vico-gray-200">
                    <LogoResponsive className="h-8 w-auto" />
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Đóng menu"
                    >
                        <CloseIcon className="h-6 w-6 text-vico-gray-600" />
                    </button>
                </div>

                {/* Login/Register Section */}
                <div className="bg-vico-green p-4">
                    <p className="text-white text-body font-normal mb-3">
                        Đăng nhập để hưởng những ưu đãi dành riêng cho thành
                        viên.
                    </p>
                    <div className="flex gap-2 ">
                        <Link
                            href="/dang-nhap"
                            className="flex-1 bg-white text-vico-green tablet:text-base! text-button pt-2.5 pb-2 px-4 rounded-full text-center hover:bg-gray-100 transition-colors"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            href="/dang-ky"
                            className="flex-1 bg-transparent border border-white text-white tablet:text-base! text-button pt-2.5 pb-2 px-4 rounded-full text-center transition-colors"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>

                {/* Navigation Links - Scrollable */}
                <nav
                    className="flex-1 overflow-y-auto overscroll-behavior-contain p-4"
                    role="navigation"
                >
                    <ul className="space-y-2 list-none m-0 p-0">
                        {navLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                pathname.startsWith(link.href + "/");

                            return (
                                <li key={link.id}>
                                    <Link
                                        href={link.href}
                                        className={`
                                            block px-4 py-3 rounded-lg
                                            font-semibold! text-body
                                            transition-all duration-200
                                            ${
                                                isActive
                                                    ? "bg-vico-green-light text-vico-green border-l-4 border-vico-green"
                                                    : "text-vico-gray-600"
                                            }
                                        `}
                                        aria-label={link.description}
                                        title={link.description}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Phone Consultation Button - Fixed at Bottom */}
                <div className="p-4 border-t border-vico-gray-200">
                    <a
                        href="tel:0333152545"
                        className="flex items-center justify-center gap-2 w-full bg-vico-green text-white text-button py-3 px-4 rounded-full transition-colors"
                        aria-label="Gọi tư vấn: 0333 152 545"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <span>
                            Tư vấn:{" "}
                            <span className="font-semibold">0333 152 545</span>
                        </span>
                    </a>
                </div>
            </aside>
        </>
    );
}

export default MobileNavigationDrawer;
