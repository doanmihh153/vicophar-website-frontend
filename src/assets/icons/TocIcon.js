/**
 * ============================================================================
 * TOC ICON (Table of Contents - Mục Lục)
 * ============================================================================
 *
 * Icon mục lục - Dùng cho Table of Contents trong bài viết
 *
 * SỬ DỤNG:
 * --------
 * import { TocIcon } from '@/assets/icons'
 *
 * <TocIcon />
 * <TocIcon width={20} height={20} />
 * <TocIcon className="text-vico-green" />
 *
 * PROPS:
 * ------
 * @param {number} width - Chiều rộng icon (default: 24px)
 * @param {number} height - Chiều cao icon (default: 24px)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {string} stroke - Màu stroke (default: "currentColor")
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 *
 * THIẾT KẾ:
 * ----------
 * - Icon dạng danh sách có bullet points
 * - Stroke-based với rounded caps
 * - Sử dụng "currentColor" để kế thừa màu từ parent
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Table of Contents header trong bài viết
 * - Navigation sidebar
 * - Article outline
 *
 * ============================================================================
 */

const TocIcon = ({
    width = 24,
    height = 24,
    className = "",
    stroke = "currentColor",
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
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 8h12m-9 4h9m-6 4h6M4 8h.01M7 12h.01M10 16h.01"
        />
    </svg>
);

export default TocIcon;
