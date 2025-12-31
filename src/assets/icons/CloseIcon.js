/**
 * ============================================================================
 * CLOSE ICON COMPONENT (Nút Đóng)
 * ============================================================================
 * 
 * Icon dấu X (close/cancel) - Dùng để đóng modal, xóa input, hủy hành động
 * 
 * SỬ DỤNG:
 * --------
 * import { CloseIcon } from '@/assets/icons'
 * 
 * <CloseIcon />
 * <CloseIcon size={20} />
 * <CloseIcon color="#ff0000" />
 * <CloseIcon strokeWidth={3} />
 * <CloseIcon className="text-gray-400 hover:text-gray-600" />
 * 
 * PROPS:
 * ------
 * @param {number} size - Kích thước icon (width & height, default: 24px)
 * @param {string} color - Màu stroke (default: "currentColor")
 * @param {number} strokeWidth - Độ dày đường kẻ (default: 2)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 * 
 * THIẾT KẾ:
 * ----------
 * - Icon dạng X đơn giản (2 đường chéo giao nhau)
 * - Sử dụng "currentColor" để kế thừa màu từ parent
 * - Có thể tùy chỉnh độ dày stroke
 * 
 * NƠI SỬ DỤNG:
 * --------------
 * - Nút xóa trong SearchForm (clear search)
 * - Đóng modal/dialog
 * - Xóa tags/chips
 * - Hủy thông báo (toast/alert)
 * 
 * ============================================================================
 */

const CloseIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 6L18 18M6 18L18 6" />
  </svg>
);

export default CloseIcon;
