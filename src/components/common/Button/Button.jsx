/**
 * ============================================================================
 * BUTTON COMPONENT - VICOPHAR
 * ============================================================================
 *
 * Component button tổng quát có thể tái sử dụng cho nhiều mục đích khác nhau
 * Hỗ trợ cả button thường và link button với đầy đủ tùy chỉnh
 *
 * FEATURES:
 * --------
 * ✅ Hỗ trợ cả <button> và <a> (link)
 * ✅ Nhiều variants: primary, secondary, outline, ghost
 * ✅ Nhiều sizes: sm, md, lg
 * ✅ Nhiều shapes: rounded, pill, square
 * ✅ Icon support (left/right position)
 * ✅ Badge support với nhiều màu
 * ✅ Custom colors, dimensions, effects
 * ✅ Accessibility support (aria-label, disabled, focus states)
 * ✅ Forward ref support
 *
 * PROPS:
 * ------
 * @param {ReactNode} children - Nội dung bên trong button (text, icon, etc.)
 * @param {string} href - URL để tạo link button (nếu có thì render <a>)
 * @param {Function} onClick - Function xử lý click event (chỉ cho button type)
 * @param {string} type - Type của button ("button", "submit", "reset") - default: "button"
 * @param {string} variant - Style variant ("primary", "secondary", "outline", "ghost") - default: "primary"
 * @param {string} size - Kích thước ("sm", "md", "lg") - default: "md"
 * @param {string} shape - Hình dạng ("rounded", "pill", "square") - default: "rounded"
 * @param {boolean} disabled - Disable button
 * @param {string} className - CSS classes tùy chỉnh
 * @param {string} title - Tooltip text
 * @param {string} ariaLabel - Aria label cho accessibility
 * @param {string} target - Target cho link (_blank, _self, etc.)
 * @param {string} rel - Rel attribute cho link
 * @param {Component} icon - Icon component để hiển thị
 * @param {string} iconPosition - Vị trí icon ("left", "right") - default: "left"
 * @param {number|string} badge - Badge content (số, text) để hiển thị
 * @param {string} badgeColor - Màu badge ("red", "green", "blue") - default: "red"
 *
 * CUSTOM PROPS - MÀU SẮC:
 * -----------------------
 * @param {string} textColor - Màu chữ: "text-red-500", "text-blue-600"
 * @param {string} bgColor - Màu nền: "bg-red-500", "bg-green-primary"
 * @param {string} borderColor - Màu viền: "border-red-500", "border-2 border-blue-600"
 * @param {string} hoverBg - Màu nền khi hover: "hover:bg-red-600"
 * @param {string} hoverText - Màu chữ khi hover: "hover:text-white"
 * @param {string} hoverBorder - Màu viền khi hover: "hover:border-red-600"
 *
 * CUSTOM PROPS - KÍCH THƯỚC & HÌNH DẠNG:
 * ---------------------------------------
 * @param {string} customWidth - Chiều rộng: "w-full", "w-32", "w-[200px]"
 * @param {string} customHeight - Chiều cao: "h-12", "h-[50px]"
 * @param {string} customPadding - Padding: "px-8 py-4", "p-6"
 * @param {string} customRadius - Border radius: "rounded-xl", "rounded-none"
 *
 * CUSTOM PROPS - HIỆU ỨNG:
 * -------------------------
 * @param {string} shadow - Bóng đổ: "shadow-lg", "shadow-xl"
 * @param {string} animation - Animation: "animate-pulse", "animate-bounce"
 * @param {string} transform - Transform: "scale-105", "rotate-3"
 *
 * USAGE:
 * ------
 * // Basic button
 * <Button>Click me</Button>
 *
 * // Link button với icon
 * <Button href="/login" icon={UserIcon}>Đăng nhập</Button>
 *
 * // Custom variant và size
 * <Button variant="outline" size="lg" onClick={handleClick}>Submit</Button>
 *
 * // Button với badge
 * <Button href="/cart" badge={5} badgeColor="red" icon={CartIcon}>Giỏ hàng</Button>
 *
 * // Custom colors
 * <Button bgColor="bg-red-500" textColor="text-white" hoverBg="hover:bg-red-600">
 *     Custom Button
 * </Button>
 *
 * ============================================================================
 */

"use client";

import { forwardRef } from "react";

const Button = forwardRef(function Button(
    {
        children,
        href,
        onClick,
        type = "button",
        variant = "primary",
        size = "md",
        shape = "rounded",
        disabled = false,
        className = "",
        title,
        ariaLabel,
        target,
        rel,
        icon: Icon,
        iconPosition = "left",
        badge,
        badgeColor = "red",

        // === PROPS TÙY CHỈNH MÀU SẮC ===
        textColor,
        bgColor,
        borderColor,
        hoverBg,
        hoverText,
        hoverBorder,

        // === PROPS TÙY CHỈNH KÍCH THƯỚC & HÌNH DẠNG ===
        customWidth,
        customHeight,
        customPadding,
        customRadius,

        // === PROPS TÙY CHỈNH HIỆU ỨNG ===
        shadow,
        animation,
        transform,

        ...props
    },
    ref
) {
    // ========================================
    // BASE STYLES - Styles cơ bản cho tất cả buttons
    // ========================================
    const baseStyles =
        "inline-flex items-center justify-center font-medium leading-normal! transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 relative";

    // ========================================
    // VARIANT STYLES - Các kiểu button mặc định
    // ========================================
    const variantStyles = {
        primary:
            "bg-vico-green text-white hover:bg-vico-green-hover focus:ring-vico-green",
        secondary:
            "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
        outline:
            "border border-vico-green text-vico-green hover:bg-vico-green hover:text-white focus:ring-vico-green",
        ghost: "text-vico-green hover:text-vico-green-hover hover:bg-green-50 focus:ring-vico-green",
    };

    // ========================================
    // SIZE STYLES - Kích thước button
    // ========================================
    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm leading-normal! gap-1.5",
        md: "px-4 py-2 text-base leading-normal! gap-2",
        lg: "px-6 py-3 text-lg leading-normal! gap-3",
    };

    // ========================================
    // SHAPE STYLES - Hình dạng button
    // ========================================
    const shapeStyles = {
        rounded: "rounded-lg",
        pill: "rounded-full",
        square: "rounded-none",
    };

    // ========================================
    // BADGE STYLES - Màu sắc badge
    // ========================================
    const badgeStyles = {
        red: "bg-red-500",
        green: "bg-green-primary",
        blue: "bg-blue-500",
        yellow: "bg-yellow-500",
    };

    // ========================================
    // DISABLED STYLES - Styles khi disabled
    // ========================================
    const disabledStyles = disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "cursor-pointer";

    // ========================================
    // COMBINE TẤT CẢ STYLES
    // ========================================
    const combinedClassName = [
        // 1. Base styles (luôn có)
        baseStyles,

        // 2. Variant styles (chỉ khi không có custom colors)
        !textColor && !bgColor && !borderColor
            ? variantStyles[variant] || variantStyles.primary
            : "",

        // 3. Size styles (có thể override bằng customWidth, customHeight, customPadding)
        !customWidth && !customHeight && !customPadding
            ? sizeStyles[size] || sizeStyles.md
            : "",

        // 4. Shape styles (có thể override bằng customRadius)
        !customRadius ? shapeStyles[shape] || shapeStyles.rounded : "",

        // 5. Disabled styles
        disabledStyles,

        // === 6. CUSTOM COLORS ===
        textColor, // Màu chữ tùy chỉnh
        bgColor, // Màu nền tùy chỉnh
        borderColor, // Màu viền tùy chỉnh
        hoverBg, // Màu nền hover tùy chỉnh
        hoverText, // Màu chữ hover tùy chỉnh
        hoverBorder, // Màu viền hover tùy chỉnh

        // === 7. CUSTOM DIMENSIONS ===
        customWidth, // Chiều rộng tùy chỉnh
        customHeight, // Chiều cao tùy chỉnh
        customPadding, // Padding tùy chỉnh
        customRadius, // Border radius tùy chỉnh

        // === 8. CUSTOM EFFECTS ===
        shadow, // Bóng đổ tùy chỉnh
        animation, // Animation tùy chỉnh
        transform, // Transform tùy chỉnh

        // === 9. CLASSNAME CUỐI CÙNG (override tất cả) ===
        className,
    ]
        .filter(Boolean)
        .join(" ");

    // ========================================
    // COMMON PROPS - Props chung cho cả button và link
    // ========================================
    const commonProps = {
        className: combinedClassName,
        title,
        "aria-label": ariaLabel,
        disabled,
        ref,
        ...props,
    };

    // ========================================
    // RENDER CONTENT - Nội dung bên trong button
    // ========================================
    const renderContent = () => (
        <>
            {/* Icon bên trái */}
            {Icon && iconPosition === "left" && (
                <Icon
                    className={`${
                        size === "sm"
                            ? "h-4 w-4"
                            : size === "lg"
                            ? "h-6 w-6"
                            : "h-5 w-5"
                    }`}
                />
            )}

            {/* Text content */}
            {children && (
                <span
                    className={`${
                        Icon ? (iconPosition === "left" ? "ml-0" : "mr-0") : ""
                    } leading-normal!`}
                >
                    {children}
                </span>
            )}

            {/* Icon bên phải */}
            {Icon && iconPosition === "right" && (
                <Icon
                    className={`${
                        size === "sm"
                            ? "h-4 w-4"
                            : size === "lg"
                            ? "h-6 w-6"
                            : "h-5 w-5"
                    }`}
                />
            )}

            {/* Badge - Hiển thị số lượng */}
            {badge !== undefined && badge !== null && (
                <span
                    className={`absolute -top-1 -right-1 ${
                        badgeStyles[badgeColor] || badgeStyles.red
                    } text-white text-xs rounded-full min-w-[20px] h-5 px-1.5 flex items-center justify-center font-bold border-2 border-white`}
                    aria-label={`${badge} items`}
                >
                    {typeof badge === "number" && badge > 99 ? "99+" : badge}
                </span>
            )}
        </>
    );

    // ========================================
    // RENDER AS LINK - Nếu có href
    // ========================================
    if (href) {
        return (
            <a href={href} target={target} rel={rel} {...commonProps}>
                {renderContent()}
            </a>
        );
    }

    // ========================================
    // RENDER AS BUTTON - Mặc định
    // ========================================
    return (
        <button type={type} onClick={onClick} {...commonProps}>
            {renderContent()}
        </button>
    );
});

export default Button;
