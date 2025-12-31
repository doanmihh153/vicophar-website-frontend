/**
 * ============================================================================
 * CONTACT BUTTON
 * ============================================================================
 *
 * Nút liên hệ tư vấn với dropdown ngang
 * - Mặc định: Icon tròn với animation pulse tỏa ra
 * - Click: Expand sang trái hiện Zalo + Phone
 * - Click outside: Thu lại
 * - Có text "Liên hệ" bên dưới
 *
 * ============================================================================
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { PhoneIcon, ZaloIcon, CloseIcon } from "@/assets/icons";

// Config - có thể chuyển ra file config sau
const CONTACT_CONFIG = {
    phone: "0333152545",
    zaloLink: "https://zalo.me/0333152545",
};

export default function ContactButton() {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setIsExpanded(false);
            }
        };

        if (isExpanded) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isExpanded]);

    return (
        <div
            ref={containerRef}
            className="relative flex flex-col items-center justify-end group"
        >
            {/* Expanded Options - Slide from right */}
            <div
                className={`absolute right-16 tablet:right-20 top-2.5 flex items-center gap-2 transition-all duration-300 ease-out z-10 
                    ${
                        isExpanded
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-4 pointer-events-none"
                    }
                `}
            >
                {/* Zalo Button */}
                <a
                    href={CONTACT_CONFIG.zaloLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center relative"
                    aria-label="Liên hệ qua Zalo"
                >
                    <ZaloIcon
                        width={50}
                        height={50}
                        className="w-full h-full transition-all duration-300 hover:scale-110 active:scale-95"
                    />
                </a>

                {/* Phone Button */}
                <a
                    href={`tel:${CONTACT_CONFIG.phone}`}
                    className="w-12 h-12 rounded-full bg-vico-green text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Gọi điện tư vấn"
                >
                    <PhoneIcon width={22} height={22} />
                </a>
            </div>

            {/* Main Toggle Button */}
            <div className="relative">
                {/* Pulse Animation Ring */}
                {!isExpanded && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-vico-green opacity-75 animate-ping duration-1000"></span>
                )}

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`
                        relative w-14 h-14 tablet:w-16 tablet:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95
                        ${
                            isExpanded
                                ? "bg-vico-gray-200 text-gray-700 rotate-0"
                                : "bg-vico-green text-white"
                        }
                    `}
                    aria-label={
                        isExpanded ? "Đóng menu liên hệ" : "Mở menu liên hệ"
                    }
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? (
                        <CloseIcon width={20} height={20} />
                    ) : (
                        <PhoneIcon
                            width={22}
                            height={22}
                            className="animate-wiggle"
                        />
                    )}
                </button>
            </div>
            <span className="text-sm font-medium text-vico-text mt-2 hidden desktop:block">
                Liên hệ
            </span>
        </div>
    );
}
