/**
 * ============================================================================
 * BUTTONHOVERUNDERLINE COMPONENT - VICOPHAR
 * ============================================================================
 *
 * Component button với hiệu ứng underline animation khi hover
 * Underline xuất hiện từ phải sang trái với cubic-bezier easing
 *
 * FEATURES:
 * --------
 * ✅ Smooth underline animation (scale-x transform)
 * ✅ Cubic-bezier easing cho animation mượt mà
 * ✅ Customizable underline color, height, duration
 * ✅ Support dark mode
 * ✅ Flexible với children content
 * ✅ Forward ref support
 * ✅ Có thể dùng như button hoặc link
 *
 * PROPS:
 * ------
 * @param {ReactNode} children - Nội dung button
 * @param {string} href - URL cho link button (optional)
 * @param {Function} onClick - Click handler (optional)
 * @param {string} className - Custom CSS classes (optional)
 * @param {string} underlineColor - Màu underline (default: "bg-green-primary")
 * @param {string} underlineHeight - Chiều cao underline (default: "h-[2px]")
 * @param {string} duration - Thời gian animation (default: "duration-300")
 * @param {boolean} disabled - Disable button (default: false)
 * @param {string} type - Button type: "button", "submit", "reset" (default: "button")
 *
 * USAGE:
 * ------
 * import ButtonHoverUnderline from '@/components/common/ButtonHoverUnderline';
 *
 * // Basic
 * <ButtonHoverUnderline>Contact me</ButtonHoverUnderline>
 *
 * // As link
 * <ButtonHoverUnderline href="/contact">Contact</ButtonHoverUnderline>
 *
 * // Custom color
 * <ButtonHoverUnderline underlineColor="bg-red-500">
 *     Click me
 * </ButtonHoverUnderline>
 *
 * // Custom duration
 * <ButtonHoverUnderline duration="duration-500">
 *     Slow animation
 * </ButtonHoverUnderline>
 *
 * ============================================================================
 */

"use client";

import { forwardRef } from "react";
import Link from "next/link";

const ButtonHoverUnderline = forwardRef(
    (
        {
            children,
            href,
            onClick,
            className = "",
            underlineColor = "bg-green-primary",
            underlineHeight = "h-[2px]",
            duration = "duration-300",
            disabled = false,
            type = "button",
            ...props
        },
        ref
    ) => {
        // Combine all classes với underline animation
        // Phải viết inline để Tailwind JIT compiler nhận diện được
        const allClasses = `
            relative inline-block transition-colors
            after:absolute after:bottom-0 after:left-0 after:w-full 
            after:origin-bottom-right after:scale-x-0 
            after:transition-transform after:ease-[cubic-bezier(0.65,0.05,0.36,1)]
            hover:after:origin-bottom-left hover:after:scale-x-100
            ${underlineHeight === "h-[1px]" ? "after:h-[1px]" : ""}
            ${underlineHeight === "h-[2px]" ? "after:h-[2px]" : ""}
            ${underlineHeight === "h-[3px]" ? "after:h-[3px]" : ""}
            ${underlineHeight === "h-1" ? "after:h-1" : ""}
            ${underlineColor === "bg-green-primary" ? "after:bg-green-primary" : ""}
            ${underlineColor === "bg-vico-green" ? "after:bg-vico-green" : ""}
            ${underlineColor === "bg-red-500" ? "after:bg-red-500" : ""}
            ${underlineColor === "bg-blue-500" ? "after:bg-blue-500" : ""}
            ${underlineColor === "bg-white" ? "after:bg-white" : ""}
            ${duration === "duration-150" ? "after:duration-150" : ""}
            ${duration === "duration-300" ? "after:duration-300" : ""}
            ${duration === "duration-500" ? "after:duration-500" : ""}
            ${duration === "duration-700" ? "after:duration-700" : ""}
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            ${className}
        `.trim();

        // Render as Link nếu có href
        if (href && !disabled) {
            return (
                <Link
                    href={href}
                    ref={ref}
                    className={allClasses}
                    {...props}
                >
                    {children}
                </Link>
            );
        }

        // Render as Button
        return (
            <button
                ref={ref}
                type={type}
                onClick={disabled ? undefined : onClick}
                disabled={disabled}
                className={allClasses}
                {...props}
            >
                {children}
            </button>
        );
    }
);

ButtonHoverUnderline.displayName = "ButtonHoverUnderline";

export default ButtonHoverUnderline;
