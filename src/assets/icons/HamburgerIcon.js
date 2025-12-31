/**
 * ============================================================================
 * HAMBURGER ICON COMPONENT (Menu 3 Gạch)
 * ============================================================================
 * 
 * Icon menu hamburger (3 gạch ngang) - Dùng cho mobile menu
 * 
 * SỬ DỤNG:
 * --------
 * import { HamburgerIcon } from '@/assets/icons'
 * 
 * <HamburgerIcon />
 * <HamburgerIcon width={28} height={28} />
 * <HamburgerIcon className="text-green-500" />
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
 * - 3 đường ngang song song
 * - StrokeWidth: 2 (vừa phải)
 * - Sử dụng "currentColor" để kế thừa màu
 * 
 * NƠI SỬ DỤNG:
 * --------------
 * - Mobile navigation menu toggle
 * - Responsive header (khi màn hình nhỏ)
 * - Sidebar toggle
 * 
 * TODO:
 * -----
 * ⚠️ Chưa được sử dụng trong dự án hiện tại
 * 💡 Cần implement mobile responsive menu
 * 
 * ============================================================================
 */

const HamburgerIcon = ({
    width = 24,
    height = 24,
    className = "",
    fill = "currentColor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        viewBox="0 0 24 24" // ✅ Fix viewBox rộng hơn để chứa path
        preserveAspectRatio="xMidYMid meet" // ✅ Giữ tỉ lệ logo
        className={className}
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 17h14M5 12h14M5 7h14"
        ></path>
    </svg>
);

export default HamburgerIcon;