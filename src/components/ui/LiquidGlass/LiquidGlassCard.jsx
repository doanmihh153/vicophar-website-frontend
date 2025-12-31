/**
 * ============================================================================
 * LIQUID GLASS CARD - HIỆU ỨNG KÍNH MỜ CAO CẤP
 * ============================================================================
 *
 * Component tạo hiệu ứng Glass Morphism cao cấp với 3 layers:
 *
 * 1. BEND LAYER (Lớp làm mờ):
 *    - Backdrop blur để làm mờ nền phía sau
 *    - SVG Filter tùy chọn để tạo hiệu ứng distortion (méo nhẹ)
 *
 * 2. FACE LAYER (Lớp ánh sáng ngoài):
 *    - Shadow bên ngoài tạo hiệu ứng phát sáng (glow)
 *    - Làm cho card nổi lên khỏi nền
 *
 * 3. EDGE LAYER (Lớp viền sáng):
 *    - Inset shadow tạo highlight bên trong
 *    - Tạo cảm giác độ dày như kính thật
 *
 * PROPS:
 * ------
 * @param {string} blurIntensity - Độ mờ: 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} shadowIntensity - Độ sáng viền trong: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} glowIntensity - Độ phát sáng ngoài: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} borderRadius - Bo góc (CSS value)
 * @param {boolean} enableDistortion - Bật hiệu ứng méo nhẹ (SVG filter)
 * @param {string} as - Render thành element khác (div, section, article...)
 *
 * ============================================================================
 */

"use client";

import React from "react";

// ============================================================================
// CẤU HÌNH BLUR - ĐỘ MỜ CỦA NỀN
// ============================================================================
// Sử dụng Tailwind classes cho backdrop-blur
// Giá trị càng lớn thì nền phía sau càng mờ

const BLUR_CLASSES = {
    sm: "backdrop-blur-xs", // Mờ rất nhẹ
    md: "backdrop-blur-md", // Mờ vừa phải
    lg: "backdrop-blur-lg", // Mờ mạnh
    xl: "backdrop-blur-xl", // Mờ rất mạnh
};

// ============================================================================
// CẤU HÌNH SHADOW - VIỀN SÁNG BÊN TRONG (INSET SHADOW)
// ============================================================================
// Tạo hiệu ứng highlight ở rìa card, như ánh sáng phản chiếu
// Sử dụng inset shadow với màu trắng bán trong suốt

const SHADOW_STYLES = {
    none: "none",
    xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
    sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
    md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
    lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
    xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)",
};

// ============================================================================
// CẤU HÌNH GLOW - ÁNH SÁNG PHÁT RA BÊN NGOÀI
// ============================================================================
// Tạo hiệu ứng hào quang xung quanh card
// Kết hợp shadow đen (bóng) và shadow trắng (glow)

const GLOW_STYLES = {
    none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
    xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
    sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
    md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
    lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
    xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)",
};

// ============================================================================
// SVG FILTER - HIỆU ỨNG MÉO NHẸ (DISTORTION)
// ============================================================================
// Sử dụng SVG filter với feTurbulence để tạo hiệu ứng méo nhẹ
// Làm cho kính trông tự nhiên hơn, như kính thật có độ dày

let filterRendered = false; // Đảm bảo chỉ render 1 lần

function GlassDistortionFilter() {
    // Chỉ render trên client
    if (typeof window === "undefined") return null;
    // Chỉ render 1 lần duy nhất
    if (filterRendered) return null;
    // eslint-disable-next-line react-hooks/globals
    filterRendered = true;

    return (
        <svg className="hidden" aria-hidden="true">
            <defs>
                {/* 
                    Filter tạo hiệu ứng distortion:
                    - feTurbulence: Tạo noise ngẫu nhiên
                    - feDisplacementMap: Dùng noise để làm méo ảnh
                */}
                <filter
                    id="liquid-glass-distortion"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.003 0.007"
                        numOctaves="1"
                        result="turbulence"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="turbulence"
                        scale="150"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>
        </svg>
    );
}

// ============================================================================
// MAIN COMPONENT - LIQUID GLASS CARD
// ============================================================================

export default function LiquidGlassCard({
    children,
    className = "",
    contentClassName = "", // Class cho wrapper nội dung (để truyền flex, items-center, etc.)
    as: Component = "div",
    // Cấu hình hiệu ứng
    blurIntensity = "lg", // Độ mờ backdrop
    shadowIntensity = "md", // Độ sáng viền trong
    glowIntensity = "sm", // Độ phát sáng ngoài
    borderRadius = "24px", // Bo góc
    enableDistortion = false, // Bật hiệu ứng méo
    // Style bổ sung
    style = {},
    // Accessibility
    role,
    "aria-label": ariaLabel,
    ...props
}) {
    // Lấy class và style tương ứng với cường độ đã chọn
    const blurClass = BLUR_CLASSES[blurIntensity] || BLUR_CLASSES.lg;
    const shadowStyle = SHADOW_STYLES[shadowIntensity] || SHADOW_STYLES.md;
    const glowStyle = GLOW_STYLES[glowIntensity] || GLOW_STYLES.sm;

    return (
        <>
            {/* Render SVG filter nếu bật distortion */}
            {enableDistortion && <GlassDistortionFilter />}

            <Component
                className={`
                    relative 
                    overflow-hidden
                    transition-all duration-300
                    ${className}
                `
                    .replace(/\s+/g, " ")
                    .trim()}
                style={{
                    borderRadius,
                    ...style,
                }}
                role={role}
                aria-label={ariaLabel}
                {...props}
            >
                {/* ============================================
                    LAYER 1: BEND - LỚP LÀM MỜ
                    ============================================
                    - Backdrop blur để làm mờ nền phía sau
                    - Có thể thêm SVG filter để tạo distortion
                */}
                <div
                    className={`absolute inset-0 ${blurClass} z-0`}
                    style={{
                        borderRadius,
                        ...(enableDistortion && {
                            filter: "url(#liquid-glass-distortion)",
                        }),
                    }}
                    aria-hidden="true"
                />

                {/* ============================================
                    LAYER 2: FACE - LỚP ÁNH SÁNG NGOÀI
                    ============================================
                    - Shadow bên ngoài tạo hiệu ứng glow
                    - Làm card nổi lên khỏi nền
                */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        borderRadius,
                        boxShadow: glowStyle,
                    }}
                    aria-hidden="true"
                />

                {/* ============================================
                    LAYER 3: EDGE - LỚP VIỀN SÁNG
                    ============================================
                    - Inset shadow tạo highlight bên trong
                    - Tạo cảm giác độ dày như kính thật
                */}
                <div
                    className="absolute inset-0 z-20"
                    style={{
                        borderRadius,
                        boxShadow: shadowStyle,
                    }}
                    aria-hidden="true"
                />

                {/* ============================================
                    LAYER 4: CONTENT - NỘI DUNG
                    ============================================
                    - Nội dung thực tế của card
                    - z-30 để nằm trên tất cả các layer
                    - contentClassName cho phép truyền flex, items-center, etc.
                */}
                <div className={`relative z-30 ${contentClassName}`.trim()}>
                    {children}
                </div>
            </Component>
        </>
    );
}

// ============================================================================
// PRESETS - CÁC CẤU HÌNH SẴN CÓ
// ============================================================================

export const LiquidGlassPresets = {
    // Nhẹ nhàng, tinh tế
    subtle: {
        blurIntensity: "md",
        shadowIntensity: "xs",
        glowIntensity: "xs",
    },
    // Chuẩn - Phù hợp đa số trường hợp
    standard: {
        blurIntensity: "lg",
        shadowIntensity: "sm",
        glowIntensity: "sm",
    },
    // Mạnh - Hiệu ứng rõ ràng
    strong: {
        blurIntensity: "xl",
        shadowIntensity: "md",
        glowIntensity: "md",
    },
    // Premium - Có distortion, rất đẹp
    premium: {
        blurIntensity: "xl",
        shadowIntensity: "lg",
        glowIntensity: "lg",
        enableDistortion: true,
    },
    // Dùng cho Service Cards
    serviceCard: {
        blurIntensity: "lg",
        shadowIntensity: "sm",
        glowIntensity: "xs",
        borderRadius: "16px",
    },
    // Dùng cho Feature Wrapper
    featureWrapper: {
        blurIntensity: "xl",
        shadowIntensity: "md",
        glowIntensity: "sm",
        borderRadius: "24px",
    },
};

// ============================================================================
// HELPER FUNCTION - HÀM TIỆN ÍCH
// ============================================================================

/**
 * Kết hợp preset với custom props
 * @param {string} preset - Tên preset (subtle, standard, strong, premium...)
 * @param {object} overrides - Props ghi đè
 * @returns {object} Props đã merge
 */
export function useLiquidGlassProps(preset, overrides = {}) {
    const presetProps =
        LiquidGlassPresets[preset] || LiquidGlassPresets.standard;
    return { ...presetProps, ...overrides };
}
