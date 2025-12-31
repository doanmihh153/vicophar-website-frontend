/**
 * ============================================================================
 * CARTBUTTON COMPONENT - VICOPHAR
 * ============================================================================
 *
 * Component nút giỏ hàng trong header với badge hiển thị số lượng sản phẩm
 *
 * FEATURES:
 * --------
 * ✅ Link đến trang giỏ hàng
 * ✅ Icon giỏ hàng
 * ✅ Badge hiển thị số lượng sản phẩm (chỉ hiện khi > 0)
 * ✅ Responsive: ẩn text trên mobile, hiện trên desktop
 * ✅ Hover effects
 * ✅ Accessibility support (aria-label, title)
 *
 * PROPS:
 * ------
 * @param {number} cartCount - Số lượng sản phẩm trong giỏ hàng (default: 0)
 * @param {string} className - CSS classes tùy chỉnh (optional)
 *
 * USAGE:
 * ------
 * import CartButton from './CartButton';
 *
 * <CartButton cartCount={5} />
 * <CartButton cartCount={0} className="custom-class" />
 *
 * ============================================================================
 */

"use client";

import Link from "next/link";
import { CartIcon } from "@/assets/icons";

function CartButton({ cartCount = 0, className = "" }) {
    return (
        <>
            {/* 
                CART BUTTON - Nút giỏ hàng responsive
                - Mobile/Tablet (<1040px): w-12 h-12 (48x48px) - Hình tròn, chỉ icon
                - Desktop (≥1040px): w-auto h-12 - Hình viên thuốc, có icon + text "Giỏ hàng"
            */}
            <Link
                href="/gio-hang"
                aria-label={`Xem giỏ hàng - ${cartCount} sản phẩm`}
                title={`Giỏ hàng của bạn có ${cartCount} sản phẩm`}
                className={`
                    relative
                    flex items-center justify-center gap-2
                    w-10 h-10 desktop:w-auto desktop:h-12
                    p-0 desktop:px-4
                    rounded-full
                    bg-vico-green
                    text-vico-text-white
                    transition-colors duration-200
                    ${className}
                `}
            >
                {/* Icon giỏ hàng - Luôn hiển thị */}
                <CartIcon className="h-4 w-4 desktop:h-5 desktop:w-5" />

                {/* Badge hiển thị số lượng - Chỉ hiện khi cartCount > 0 */}
                {cartCount > 0 && (
                    <span
                        className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-red-500 text-white text-xs font-semibold rounded-full border-2 border-white"
                        aria-label={`${cartCount} sản phẩm trong giỏ`}
                    >
                        {cartCount > 99 ? "99+" : cartCount}
                    </span>
                )}

                {/* Text "Giỏ hàng" - Ẩn trên mobile/tablet, hiện trên desktop (≥1040px) */}
                <span className="hidden desktop:inline whitespace-nowrap font-medium text-body">
                    Giỏ hàng
                </span>
            </Link>
        </>
    );
}

export default CartButton;
