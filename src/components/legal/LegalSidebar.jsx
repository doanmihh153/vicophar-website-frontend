"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LEGAL_LINKS } from "@/data/legal-policies";
import { CategoryListIcon, ArrowDownIcon } from "@/assets/icons";

export default function LegalSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Get current active link label for mobile button
    const activeLink =
        LEGAL_LINKS.find((link) => link.href === pathname) || LEGAL_LINKS[0];

    return (
        <>
            {/* MOBILE & TABLET: DROPDOWN */}
            <div className="block desktop:hidden relative z-10 w-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between bg-white border border-vico-gray-200 rounded-xl px-4 py-3 active:bg-gray-50 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <CategoryListIcon className="w-5 h-5 text-vico-green" />
                        <span className="text-base font-bold text-vico-primary truncate">
                            {activeLink?.label || "Danh mục"}
                        </span>
                    </div>
                    <ArrowDownIcon
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {/* Dropdown Content */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-vico-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
                        <ul className="py-2 max-h-[60vh] overflow-y-auto">
                            {LEGAL_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`
                                                w-full text-left px-4 py-3 flex items-center justify-between
                                                ${
                                                    isActive
                                                        ? "bg-vico-green/10 text-vico-green font-bold"
                                                        : "text-gray-600 hover:bg-gray-50 hover:text-vico-green"
                                                }
                                            `}
                                        >
                                            <span>{link.label}</span>
                                            {isActive && (
                                                <svg
                                                    className="w-5 h-5 text-vico-green"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>

            {/* DESKTOP: VERTICAL LIST (Keep styling exactly as before) */}
            <div className="hidden desktop:block bg-white rounded-2xl p-4">
                <h3 className="text-xl font-bold text-vico-primary mb-4 pb-2 border-b border-vico-gray-100">
                    Danh mục
                </h3>
                <nav className="flex flex-col space-y-2">
                    {LEGAL_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                                    isActive
                                        ? "bg-vico-green/10 text-vico-green translate-x-1"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-vico-green"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}
