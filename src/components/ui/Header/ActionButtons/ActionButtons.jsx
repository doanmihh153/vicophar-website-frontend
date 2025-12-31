/**
 * ============================================================================
 * ACTIONBUTTONS COMPONENT - VICOPHAR
 * ============================================================================
 *
 * Component chứa các button hành động ở phía bên phải header
 *
 * FEATURES:
 * --------
 * Nút đăng nhập (LoginButton) - có thể ẩn trên mobile
 * Nút giỏ hàng với badge (CartButton)
 * Responsive design: ẩn text trên mobile
 * Dễ bảo trì: mỗi button là component riêng
 *
 * PROPS:
 * ------
 * @param {number} cartCount - Số lượng sản phẩm trong giỏ hàng (default: 0)
 * @param {boolean} showLogin - Hiển thị nút đăng nhập (default: true)
 * @param {string} className - CSS classes tùy chỉnh (optional)
 *
 * USAGE:
 * ------
 * import ActionButtons from '@/components/ui/Header/ActionButtons';
 *
 * <ActionButtons />
 * <ActionButtons cartCount={5} />
 * <ActionButtons cartCount={5} showLogin={false} /> // Mobile - chỉ cart
 *
 * ============================================================================
 */

"use client";

import LoginButton from "./LoginButton";
import CartButton from "./CartButton";

function ActionButtons({ cartCount = 0, showLogin = true, className = "" }) {
    return (
        <div className={`flex items-center gap-vico-md ${className}`}>
            {/* Nút đăng nhập - ẩn khi showLogin = false */}
            {showLogin && <LoginButton />}

            {/* Nút giỏ hàng với badge số lượng */}
            <CartButton cartCount={cartCount} />
        </div>
    );
}

export default ActionButtons;
