"use client";

import Link from "next/link";
import {
    FacebookIcon,
    LazadaIcon,
    TiktokIcon,
    ShopeeIcon,
    ChevronDownIcon,
} from "@/assets/icons";

// Social Links Data
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

// Top Bar Links (Desktop Only)
const TOP_LINKS_INTERNAL = [
    { name: "Mua hàng trực tuyến", url: "/san-pham" },
    { name: "Khoẻ từ thiên nhiên", url: "/goc-suc-khoe" },
    { name: "Tuyển dụng", url: "/tin-tuc-cong-ty/tuyen-dung" },
];

export default function TopBar() {
    return (
        <div className="bg-[linear-gradient(90deg,#006838,#00A551,#006838)] text-white py-1 lg:py-2 text-sm block">
            <div className="vico-container flex justify-between items-center h-[24px] lg:h-[30px]">
                {/* 
                  1. LEFT SIDE 
                  - Mobile: Centered (Justify Center in parent override? No, handling via classes)
                  - Desktop: Left Aligned
                */}
                <div className="flex items-center gap-3 w-full justify-center lg:w-auto lg:justify-start lg:gap-6">
                    {SOCIAL_LINKS.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 lg:gap-2"
                        >
                            <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span className="font-medium text-xs lg:text-sm">
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* 
                  2. RIGHT SIDE (Desktop Only)
                  - Hidden on Mobile
                  - Visible on Desktop
                */}
                <div className="hidden lg:flex items-center divide-x divide-white/20">
                    {/* Links */}
                    <div className="flex items-center gap-6 px-4">
                        {TOP_LINKS_INTERNAL.map((link, index) => (
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
                    <div className="pl-4 flex items-center gap-1 cursor-pointer hover:opacity-80">
                        <span>VN</span>
                        <ChevronDownIcon className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
