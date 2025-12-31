/**
 * ============================================================================
 * ARROW RIGHT ICON (Mũi Tên Phải)
 * ============================================================================
 *
 * Icon mũi tên chỉ sang phải - Dùng cho navigation, next button
 *
 * SỬ DỤNG:
 * --------
 * import { ArrowRight } from '@/assets/icons'
 *
 * <ArrowRight />
 * <ArrowRight width={20} height={20} />
 * <ArrowRight className="text-white" />
 *
 * PROPS:
 * ------
 * @param {number} width - Chiều rộng icon (default: 24px)
 * @param {number} height - Chiều cao icon (default: 24px)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 *
 * THIẾT KẾ:
 * ----------
 * - Mũi tên chỉ sang phải với đường thẳng và mũi nhọn
 * - StrokeWidth: 2
 * - Sử dụng "currentColor" để kế thừa màu
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Nút "Tiếp theo" (Next button)
 * - Link "Xem thêm" (View more)
 * - Carousel navigation
 * - Breadcrumb separator
 *
 * ============================================================================
 */

const ArrowRight = ({ width = 24, height = 24, className = "", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 16 17"
        {...props}
    >
        <path
            stroke="currentColor" // 👈 đổi từ #fff thành currentColor
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
        />
    </svg>
);

export default ArrowRight;
