/**
 * ============================================================================
 * TIKTOK ICON (Logo TikTok)
 * ============================================================================
 * 
 * Icon logo TikTok - Dùng cho link mạng xã hội
 * 
 * SỬ DỤNG:
 * --------
 * import { TiktokIcon } from '@/assets/icons'
 * 
 * <TiktokIcon />
 * <TiktokIcon width={32} height={32} />
 * <TiktokIcon className="text-black" />
 * <TiktokIcon fill="#000000" /> // Màu đen TikTok
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
 * - Logo TikTok chính thức (nốt nhạc)
 * - ViewBox: 0 0 16 16
 * - Icon dạng filled
 * 
 * NƠI SỬ DỤNG:
 * --------------
 * - Footer - Social media links
 * - Share buttons
 * - Contact page
 * 
 * MÀU SẮC TIKTOK:
 * ----------------
 * - Black: #000000
 * - Cyan: #00F2EA
 * - Pink: #FF0050
 * 
 * ============================================================================
 */

const TiktokIcon = ({ width = 24, height = 24, className = "", fill = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    className={className}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      d="M14.735 0H2.545C1.493 0 .64.854.64 1.905v12.19c0 1.05.854 1.905 1.904 1.905h12.19c1.051 0 1.906-.854 1.906-1.905V1.905C16.64.855 15.785 0 14.735 0m-1.522 6.98a2.854 2.854 0 0 1-2.651-1.277v4.395A3.249 3.249 0 1 1 7.314 6.85c.068 0 .134.006.2.01v1.6c-.066-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.916 0 1.724-.721 1.724-1.637l.016-7.465h1.53a2.85 2.85 0 0 0 2.63 2.547z"
    ></path>
  </svg>
);

export default TiktokIcon;
