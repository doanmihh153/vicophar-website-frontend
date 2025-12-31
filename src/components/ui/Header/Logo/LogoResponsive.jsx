/**
 * LOGO RESPONSIVE COMPONENT
 *
 * Component logo riêng cho mobile/tablet layout
 * Import SVG từ icons và wrap với Link
 *
 * Features:
 * - Link về trang chủ (/)
 * - Dùng VicopharLogoMobile từ icons
 * - Size cố định h-8 cho mobile
 *
 * Props: Không có props
 */

import Link from "next/link";
import LogoResponsive from "@/assets/icons/VicopharLogoMobile";

function LogoResponsiveMobile() {
    return (
        <Link
            href="/"
            className="flex items-center"
            aria-label="Vicophar - Trang chủ"
            title="Về trang chủ Vicophar"
        >
            <LogoResponsive className="h-8 w-auto" />
        </Link>
    );
}

export default LogoResponsiveMobile;
