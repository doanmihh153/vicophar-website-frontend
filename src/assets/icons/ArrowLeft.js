/**
 * ============================================================================
 * ARROW LEFT ICON (Mũi Tên Trái)
 * ============================================================================
 *
 * Icon mũi tên chỉ sang trái - Dùng cho back button, prev button
 *
 * SỬ DỤNG:
 * --------
 * import { ArrowLeft } from '@/assets/icons'
 *
 * <ArrowLeft />
 * <ArrowLeft width={20} height={20} />
 * <ArrowLeft className="text-gray-600" />
 *
 * ============================================================================
 */

const ArrowLeft = ({ width = 24, height = 24, className = "", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowLeft;
