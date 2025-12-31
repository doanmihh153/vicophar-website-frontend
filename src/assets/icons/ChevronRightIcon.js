/**
 * ============================================================================
 * CHEVRON RIGHT ICON (Mũi Tên Phải - Dạng Chevron)
 * ============================================================================
 *
 * Icon mũi tên chỉ sang phải dạng chevron - Dùng cho accordion collapse
 *
 * SỬ DỤNG:
 * --------
 * import { ChevronRightIcon } from '@/assets/icons'
 *
 * <ChevronRightIcon />
 * <ChevronRightIcon width={20} height={20} />
 * <ChevronRightIcon className="text-vico-green" />
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
 * - Accordion/Collapsible indicators (collapsed state)
 * - Table of Contents toggle
 * - Dropdown indicators
 *
 * ============================================================================
 */

const ChevronRightIcon = ({
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
            d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414"
        />
    </svg>
);

export default ChevronRightIcon;
