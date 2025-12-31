/**
 * ============================================================================
 * CHEVRON DOWN ICON (Mũi Tên Xuống - Dạng Chevron)
 * ============================================================================
 *
 * Icon mũi tên chỉ xuống dạng chevron - Dùng cho accordion expand
 *
 * SỬ DỤNG:
 * --------
 * import { ChevronDownIcon } from '@/assets/icons'
 *
 * <ChevronDownIcon />
 * <ChevronDownIcon width={20} height={20} />
 * <ChevronDownIcon className="text-vico-green" />
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
 * - Mũi tên chevron rounded, filled
 * - Sử dụng "currentColor" để kế thừa màu
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Accordion/Collapsible indicators (expanded state)
 * - Table of Contents toggle
 * - Dropdown indicators
 *
 * ============================================================================
 */

const ChevronDownIcon = ({
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
        fill="none"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path
            fill={fill}
            d="M5.707 9.71a1 1 0 0 0 0 1.415l4.892 4.887a2 2 0 0 0 2.828 0l4.89-4.89a1 1 0 1 0-1.414-1.415l-4.185 4.186a1 1 0 0 1-1.415 0L7.121 9.71a1 1 0 0 0-1.414 0"
        />
    </svg>
);

export default ChevronDownIcon;
