/**
 * ============================================================================
 * DELIVERY ICON (Giao hàng - Vận chuyển)
 * ============================================================================
 *
 * Icon giao hàng/vận chuyển - Dùng cho dịch vụ giao hàng và logistics
 *
 * SỬ DỤNG:
 * --------
 * import { DeliveryIcon } from '@/assets/icons'
 *
 * <DeliveryIcon />
 * <DeliveryIcon width={32} height={32} />
 * <DeliveryIcon className="text-blue-500" />
 * <DeliveryIcon fill="#007BFF" /> // Màu xanh vận chuyển
 *
 * PROPS:
 * ------
 * @param {number} width - Chiều rộng icon (default: 51px)
 * @param {number} height - Chiều cao icon (default: 51px)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {string} fill - Màu fill (default: "#fff")
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 *
 * THIẾT KẾ:
 * ----------
 * - Icon xe tải giao hàng với hộp hàng
 * - ViewBox: 0 0 51 51
 * - Icon dạng filled với stroke outline
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Footer - Thông tin giao hàng
 * - Trang thanh toán - Phương thức vận chuyển
 * - Header - Hotline giao hàng
 * - Trang chính sách - Điều khoản giao hàng
 *
 * MÀU SẮC GỢI Ý:
 * -----------------
 * - Delivery Blue: #007BFF
 * - Fast Orange: #FF6B35
 * - Success Green: #28A745
 * - Vicophar Red: var(--color-vico-red)
 *
 * ============================================================================
 */

const DeliveryIcon = ({
    width = 51,
    height = 51,
    className = "",
    fill = "#fff",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 51 51"
        className={className}
        {...props}
    >
        <path
            stroke={fill}
            strokeMiterlimit="10"
            d="M25.5 50.5c13.807 0 25-11.193 25-25S39.307.5 25.5.5s-25 11.193-25 25 11.193 25 25 25Z"
        />
        <path
            fill={fill}
            d="M19.601 12.86c6.433-.043 7.36 9.255 1.166 10.561-7.584 1.601-8.933-10.505-1.166-10.561m2.233 3.146c-.421.112-2.584 2.78-2.907 2.837-.492-.169-1.067-1.222-1.56-1.293-.49-.07-.856.478-.631.97.225.491 1.7 1.755 1.812 1.811.21.099.421.085.632-.028l3.314-3.286c.351-.464-.126-1.166-.674-1.011zM42.803 27.312h-8.258v-3.624h5.899z"
        />
        <path
            fill={fill}
            d="M31.09 19.573v9.452H7.874v-9.452c0-1.11.898-2.008 2.008-2.008h2.992v.365a6.84 6.84 0 0 0 6.84 6.84 6.84 6.84 0 0 0 6.84-6.84v-.365h2.556c1.109 0 2.008.898 2.008 2.008zM43.07 28.59c.042 0 .07.028.07.07v5.042c0 .913-.674 1.657-1.544 1.784-.871.126-.085-.028-.085-.084v-.337c0-2.43-1.98-4.41-4.41-4.41s-4.41 1.98-4.41 4.41 0 .238.014.365c.014.126-.028.084-.07.084h-.45c-.042 0-.07-.028-.07-.07v-15.73c0-.043.028-.07.07-.07h5.211a2.57 2.57 0 0 1 2.57 2.57c0 .042-.028.07-.07.07h-5.112c-.9 0-1.643.73-1.643 1.643v3.048c0 .898.73 1.643 1.643 1.643h8.286zM31.09 30.346v4.662a.77.77 0 0 1-.773.773H18.843c.028-.21.056-.435.056-.66a4.343 4.343 0 0 0-4.34-4.34 4.334 4.334 0 0 0-4.34 4.34c0 2.401.014.45.056.66h-.772a1.63 1.63 0 0 1-1.63-1.63v-3.805z"
        />
        <path
            fill={fill}
            d="M14.545 38.14a3.02 3.02 0 1 0 0-6.039 3.02 3.02 0 0 0 0 6.04M37.045 38.14a3.02 3.02 0 1 0 0-6.039 3.02 3.02 0 0 0 0 6.04"
        />
    </svg>
);

export default DeliveryIcon;
