/**
 * ============================================================================
 * PAGE SECTION - REUSABLE WRAPPER COMPONENT
 * ============================================================================
 *
 * Wrapper component với z-index layer cho hiệu ứng parallax sticky.
 * Dùng cho các page có banner sticky ở background.
 *
 * LAYERS:
 * - base: z-index 0 (banner sticky)
 * - content: z-index 10 (content trong hero section)
 * - section: z-index 20 (các section cuộn đè lên banner)
 *
 * ============================================================================
 */

import React from "react";

/**
 * PageSection - Wrapper với z-index layer
 *
 * @param {React.ReactNode} children - Nội dung bên trong
 * @param {string} className - CSS classes bổ sung
 * @param {"base" | "content" | "section"} layer - Lớp z-index
 * @param {React.ElementType} as - HTML tag (mặc định: section)
 */
export default function PageSection({
    children,
    className = "",
    layer = "section",
    as: Tag = "section",
    ...props
}) {
    return (
        <Tag className={`z-layer-${layer} ${className}`} {...props}>
            {children}
        </Tag>
    );
}
