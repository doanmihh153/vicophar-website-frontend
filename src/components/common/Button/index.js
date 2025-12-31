/**
 * ============================================================================
 * BUTTON COMPONENT - INDEX FILE
 * ============================================================================
 *
 * Export Button component - Component button tổng quát tái sử dụng
 *
 * IMPORT:
 * -------
 * import Button from '@/components/common/Button'
 *
 * TÍNH NĂNG CHÍNH:
 * ----------------
 * ✅ Hỗ trợ cả <button> và <a> (link)
 * ✅ Nhiều variants: primary, secondary, outline, ghost
 * ✅ Nhiều sizes: sm, md, lg
 * ✅ Icon và badge support
 * ✅ Custom colors, dimensions, effects
 * ✅ Accessibility optimized
 *
 * PROPS:
 * ------
 * - children: ReactNode - Nội dung button
 * - href: string (optional) - URL cho link button
 * - variant: "primary" | "secondary" | "outline" | "ghost"
 * - size: "sm" | "md" | "lg"
 * - icon: Component (optional) - Icon component
 * - badge: number | string (optional) - Badge content
 * - disabled: boolean
 * - className: string (optional) - Custom classes
 * - ...và nhiều props khác (xem Button.js)
 *
 * SỬ DỤNG:
 * --------
 * <Button>Click me</Button>
 * <Button href="/login" icon={UserIcon}>Đăng nhập</Button>
 * <Button variant="outline" size="lg">Submit</Button>
 * <Button badge={5} badgeColor="red">Giỏ hàng</Button>
 *
 * ============================================================================
 */

export { default } from "./Button";
