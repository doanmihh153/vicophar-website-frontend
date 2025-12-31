/**
 * ============================================================================
 * FACEBOOK ICON (Logo Facebook)
 * ============================================================================
 *
 * Icon logo Facebook - Dùng cho link mạng xã hội
 *
 * SỬ DỤNG:
 * --------
 * import { FacebookIcon } from '@/assets/icons'
 *
 * <FacebookIcon />
 * <FacebookIcon width={32} height={32} />
 * <FacebookIcon className="text-blue-600" />
 * <FacebookIcon fill="#1877F2" /> // Màu xanh Facebook chính thức
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
 * - Logo Facebook chính thức (chữ f trong hình vuông)
 * - ViewBox: 0 0 16 16
 * - Icon dạng filled
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Footer - Social media links
 * - Share buttons
 * - Contact page
 *
 * MÀU SẮC FACEBOOK:
 * ------------------
 * - Brand Blue: #1877F2
 * - Dark Blue: #0C63D4
 *
 * ============================================================================
 */

const FacebookIcon = ({
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
        className={className}
        viewBox="0 0 16 16"
        {...props}
    >
        <path d="M14.095 0H1.905A1.905 1.905 0 0 0 0 1.905v12.19C0 15.147.853 16 1.905 16h12.19A1.905 1.905 0 0 0 16 14.095V1.905A1.905 1.905 0 0 0 14.095 0m-1.524 5.714h-.761c-.816 0-1.143.19-1.143.762V7.62h1.904l-.38 1.905h-1.524v5.714H8.762V9.524H7.238V7.619h1.524V6.476c0-1.524.762-2.666 2.286-2.666 1.104 0 1.523.38 1.523.38z"></path>
    </svg>
);

export default FacebookIcon;
