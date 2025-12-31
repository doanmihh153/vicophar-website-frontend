/**
 * LOGO COMPONENT
 *
 * Component logo cho desktop layout
 * Import SVG từ icons và wrap với Link
 *
 * Features:
 * - Link về trang chủ (/)
 * - Dùng VicopharLogo từ icons
 * - Responsive size h-10 cho desktop
 *
 * Props: Không có props
 */

import Link from "next/link";
import { VicopharLogo } from "@/assets/icons/index";

function Logo({ className = "h-10 w-auto" }) {
    return (
        <Link
            href="/"
            className="flex items-center"
            aria-label="Vicophar - Trang chủ"
            title="Về trang chủ Vicophar"
        >
            <VicopharLogo width={120} height={"100%"} className={className} />
        </Link>
    );
}

export default Logo;
