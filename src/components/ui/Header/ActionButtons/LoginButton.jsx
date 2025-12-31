/**
 * ============================================================================
 * LOGINBUTTON COMPONENT - VICOPHAR
 * ============================================================================
 *
 * Component nút đăng nhập trong header
 *
 * FEATURES:
 * --------
 * ✅ Link đến trang đăng nhập
 * ✅ Icon user
 * ✅ Responsive: ẩn text trên mobile, hiện trên desktop
 * ✅ Hover effects
 * ✅ Accessibility support (aria-label, title)
 *
 * PROPS:
 * ------
 * @param {string} className - CSS classes tùy chỉnh (optional)
 *
 * USAGE:
 * ------
 * import LoginButton from './LoginButton';
 *
 * <LoginButton />
 * <LoginButton className="custom-class" />
 *
 * ============================================================================
 */

"use client";

import Link from "next/link";
import { UserIcon } from "@/assets/icons";

function LoginButton({ className = "" }) {
    return (
        <>
            {/* 
                LOGIN BUTTON - Nút đăng nhập responsive
                - Mobile/Tablet (<1040px): w-12 h-12 (48x48px) - Hình tròn, chỉ icon
                - Desktop (≥1040px): w-auto h-12 - Hình viên thuốc, có icon + text "Đăng nhập"
            */}
            <Link
                href="/dang-nhap"
                aria-label="Đăng nhập tài khoản"
                title="Đăng nhập vào tài khoản của bạn"
                className={`
                    flex items-center justify-center gap-2
                    w-12 h-12 desktop:w-auto
                    p-0 desktop:px-4
                    rounded-full
                    text-vico-green
                    hover:bg-gray-100
                    transition-colors duration-200
                    ${className}
                `}
            >
                {/* Icon user - Luôn hiển thị */}
                <UserIcon className="h-6 w-6" />

                {/* Text "Đăng nhập" - Ẩn trên mobile/tablet, hiện trên desktop (≥1040px) */}
                <span className="hidden desktop:inline whitespace-nowrap font-medium text-body">
                    Đăng nhập
                </span>
            </Link>
        </>
    );
}

export default LoginButton;
