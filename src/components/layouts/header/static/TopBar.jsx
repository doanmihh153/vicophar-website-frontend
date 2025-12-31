/**
 * ============================================================================
 * TOP BAR COMPONENT - SSR HEADER
 * ============================================================================
 *
 * Top bar với green gradient background
 * Hiển thị social links, quick links, và language selector
 *
 * LAYOUT:
 * -------
 * Desktop: [Social Links] --------- [Quick Links | Language Selector]
 * Mobile:  [Social Links (centered)]
 *
 * FEATURES:
 * ---------
 * ✅ Social links: Facebook, Lazada, Tiktok, Shopee
 * ✅ Quick links (Desktop only): Mua hàng, Khoẻ từ thiên nhiên, Tuyển dụng
 * ✅ Language selector (Desktop only): VN với dropdown icon
 * ✅ Responsive: Mobile centered, Desktop full layout
 * ✅ Green gradient background
 * ✅ Hover effects
 *
 * RESPONSIVE:
 * -----------
 * - Mobile (< lg): Social links centered, quick links hidden
 * - Desktop (≥ lg): Full layout với dividers
 *
 * ============================================================================
 */

"use client";

import Link from "next/link";
import {
    FacebookIcon,
    LazadaIcon,
    TiktokIcon,
    ShopeeIcon,
    ChevronDownIcon,
} from "@/assets/icons";

// ============================================================================
// DATA - Social Links
// ============================================================================
const SOCIAL_LINKS = [
    {
        icon: FacebookIcon,
        name: "Facebook",
        url: "https://www.facebook.com/vicophar",
    },
    {
        icon: LazadaIcon,
        name: "Lazada",
        url: "https://www.lazada.vn/shop/vicophar-viet-nam",
    },
    {
        icon: TiktokIcon,
        name: "Tiktok",
        url: "https://www.tiktok.com/@vicophar_viet_nam",
    },
    {
        icon: ShopeeIcon,
        name: "Shopee",
        url: "https://shopee.vn/vicophar",
    },
];

// ============================================================================
// DATA - Top Bar Quick Links (Desktop Only)
// ============================================================================
const TOP_LINKS = [
    { name: "Mua hàng trực tuyến", url: "/san-pham" },
    { name: "Khoẻ từ thiên nhiên", url: "/cau-chuyen-vicophar" },
    { name: "Tuyển dụng", url: "/tuyen-dung" },
];

export default function TopBar() {
    return (
        <div className="bg-[linear-gradient(90deg,#006838,#00A551,#006838)] text-white py-1 lg:py-2 text-sm block">
            <div className="vico-container flex justify-between items-center h-[24px] lg:h-[30px]">
                {/* ========================================
                    LEFT SIDE - Social Links
                    Mobile: Centered
                    Desktop: Left aligned
                    ======================================== */}
                <div className="flex items-center gap-3 w-full justify-center lg:w-auto lg:justify-start lg:gap-6">
                    {SOCIAL_LINKS.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 lg:gap-2 hover:opacity-80 transition-opacity"
                            aria-label={`Visit our ${item.name} page`}
                        >
                            <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span className="font-medium text-xs lg:text-sm">
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* ========================================
                    RIGHT SIDE - Quick Links + Language
                    Hidden on Mobile
                    Visible on Desktop only
                    ======================================== */}
                <div className="hidden lg:flex items-center divide-x divide-white/20">
                    {/* Quick Links */}
                    <div className="flex items-center gap-6 px-4">
                        {TOP_LINKS.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className="hover:underline transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Language Selector */}
                    <div className="pl-4 flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
                        <span>VN</span>
                        <ChevronDownIcon className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
