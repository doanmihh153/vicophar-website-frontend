/**
 * ============================================================================
 * ACTION BUTTONS COMPONENT - INDEX FILE
 * ============================================================================
 *
 * Export ActionButtons component - Các nút hành động ở header
 *
 * IMPORT:
 * -------
 * import ActionButtons from '@/components/ui/Header/ActionButtons'
 *
 * CHỨC NĂNG:
 * ----------
 * 1. Nút "Đăng nhập" - Link đến trang login
 * 2. Nút "Giỏ hàng" - Link đến trang giỏ hàng với badge số lượng
 *
 * PROPS:
 * ------
 * - cartCount: number (default: 0) - Số lượng sản phẩm trong giỏ
 *
 * SỬ DỤNG:
 * --------
 * <ActionButtons />
 * <ActionButtons cartCount={5} />
 *
 * ============================================================================
 */

export { default } from "./ActionButtons";
