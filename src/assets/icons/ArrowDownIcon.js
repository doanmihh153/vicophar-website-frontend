/**
 * ============================================================================
 * ARROW DOWN ICON (Mũi Tên Xuống)
 * ============================================================================
 * 
 * Icon mũi tên chỉ xuống - Dùng cho dropdown menu, accordion
 * 
 * SỬ DỤNG:
 * --------
 * import { ArrowDownIcon } from '@/assets/icons'
 * 
 * <ArrowDownIcon />
 * <ArrowDownIcon width={16} height={16} />
 * <ArrowDownIcon className="text-gray-600" />
 * <ArrowDownIcon fill="#0db061" />
 * 
 * PROPS:
 * ------
 * @param {number} width - Chiều rộng icon (default: 24px)
 * @param {number} height - Chiều cao icon (default: 24px)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {string} fill - Màu fill (default: "currentColor")
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 * 
 * THIẾT KẾ:
 * ----------
 * - Mũi tên chỉ xuống dạng chevron (hình chữ V ngược)
 * - Icon dạng filled (không có stroke)
 * - Sử dụng "currentColor" để kế thừa màu
 * 
 * NƠI SỬ DỤNG:
 * --------------
 * - Dropdown menu indicator
 * - Accordion expand/collapse
 * - Select box arrow
 * - "Xem thêm" (Show more) button
 * 
 * TODO:
 * -----
 * 💡 Có thể thêm animation rotate khi toggle dropdown
 * 
 * ============================================================================
 */

const ArrowDownIcon = ({ width = 24, height = 24, className = "", fill = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    className={className}
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      d="m8 10.767-4-4 .933-.934L8 8.9l3.067-3.067.933.934z"
    ></path>
  </svg>
);

export default ArrowDownIcon;
