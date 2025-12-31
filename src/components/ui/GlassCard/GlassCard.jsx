/**
 * ============================================================================
 * GLASS CARD - REUSABLE LIQUID GLASS COMPONENT
 * ============================================================================
 *
 * Hiệu ứng Glass Morphism (Liquid Glass) có thể tái sử dụng.
 *
 * VARIANTS:
 * ---------
 * - "glass": Nền trong suốt + backdrop-blur (mặc định)
 * - "frosted": Nền trắng mờ đậm hơn
 * - "solid": Nền trắng đục (cho browser không hỗ trợ)
 *
 * USAGE:
 * ------
 * <GlassCard variant="glass" className="p-4">
 *   Content here
 * </GlassCard>
 *
 * ============================================================================
 */

import React from "react";

const VARIANTS = {
    // Trong suốt với blur mạnh (Desktop only)
    glass: `
        bg-white/10 
        supports-[backdrop-filter:blur(0px)]:bg-white/5 
        supports-[backdrop-filter:blur(0px)]:backdrop-blur-md 
        shadow-lg 
        ring-1 ring-white/30
    `,
    // Trắng mờ đậm hơn
    frosted: `
        bg-white/20 
        supports-[backdrop-filter:blur(0px)]:bg-white/20 
        supports-[backdrop-filter:blur(0px)]:backdrop-blur-sm 
        shadow-lg 
        ring-1 ring-white/50
    `,
    // Nền trắng đục (fallback)
    solid: `
        bg-white 
        shadow-lg
    `,
    // Hero style - Responsive: Solid on mobile, Glass on desktop
    // Matches HeroPromotions exactly
    hero: `
        bg-white 
        lg:supports-[backdrop-filter:blur(0px)]:bg-white/5 
        lg:supports-[backdrop-filter:blur(0px)]:backdrop-blur-md 
        lg:shadow-lg 
        lg:ring-1 lg:ring-white/40
        max-lg:w-screen max-lg:ml-[calc(-50vw+50%)] max-lg:mr-[calc(-50vw+50%)] 
        max-lg:rounded-none 
        lg:rounded-4xl 
        p-2 lg:p-4
    `,
};

export default function GlassCard({
    children,
    variant = "glass",
    className = "",
    as: Component = "div",
    ...props
}) {
    const variantClasses = VARIANTS[variant] || VARIANTS.glass;

    return (
        <Component
            className={`
                ${variantClasses}
                rounded-2xl
                transition-all duration-300
                ${className}
            `.trim()}
            {...props}
        >
            {children}
        </Component>
    );
}

/**
 * Preset styles cho các use-case phổ biến
 */
export const GlassCardPresets = {
    // Cho service cards (About Us)
    serviceCard: "frosted",
    // Cho hero promotions wrapper
    heroWrapper: "glass",
    // Cho navigation items
    navItem: "frosted",
};
