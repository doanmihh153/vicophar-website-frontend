/**
 * ============================================================================
 * PLUS ICON COMPONENT (Nút Thêm/Mở rộng)
 * ============================================================================
 *
 * Icon dấu + (plus/add) - Dùng để mở rộng accordion, thêm item
 *
 * SỬ DỤNG:
 * --------
 * import { PlusIcon } from '@/assets/icons'
 *
 * <PlusIcon />
 * <PlusIcon size={20} />
 * <PlusIcon color="#10b981" />
 *
 * PROPS:
 * ------
 * @param {number} size - Kích thước icon (width & height, default: 24px)
 * @param {string} color - Màu stroke (default: "currentColor")
 * @param {number} strokeWidth - Độ dày đường kẻ (default: 2)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 *
 * ============================================================================
 */

const PlusIcon = ({
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
        <path d="M12 5v14M5 12h14" />
    </svg>
);

export default PlusIcon;
