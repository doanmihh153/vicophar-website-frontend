/**
 * ============================================================================
 * RIBBON BANNER ICON (Băng Rôn Trang Trí)
 * ============================================================================
 *
 * Icon băng rôn dạng ribbon - Dùng cho tiêu đề, heading trang trí
 *
 * SỬ DỤNG:
 * --------
 * import { RibbonBanner } from '@/assets/icons'
 *
 * <RibbonBanner />
 * <RibbonBanner width={500} height={91} />
 * <RibbonBanner className="text-vico-green" />
 *
 * PROPS:
 * ------
 * @param {number} width - Chiều rộng icon (default: 500px)
 * @param {number} height - Chiều cao icon (default: 91px)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 *
 * THIẾT KẾ:
 * ----------
 * - Băng rôn dạng ribbon với hiệu ứng 3D
 * - Sử dụng "currentColor" để kế thừa màu từ CSS
 * - Có drop shadow để tạo chiều sâu
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Tiêu đề section "Góc Sức Khỏe"
 * - Heading trang trí cho các section quan trọng
 * - Banner tiêu đề trang
 *
 * ============================================================================
 */

const RibbonBanner = ({
    width = 500,
    height = 91,
    className = "",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        fill="none"
        viewBox="0 0 500 91"
        {...props}
    >
        <path
            fill="currentColor"
            d="M500 38.827 483.634 8.326c-2.311-4.312-6.363-6.468-10.415-6.468H26.782c-4.053 0-8.096 2.156-10.416 6.468L0 38.827z"
        />
        <g filter="url(#ribbon-shadow)">
            <path
                fill="currentColor"
                d="M473.202 2H26.781c4.052 0 8.095 2.173 10.414 6.518l32.47 60.966c2.31 4.346 6.59 7.021 11.21 7.021h338.232c4.63 0 8.901-2.675 11.211-7.02l32.469-60.967C465.098 4.173 469.15 2 473.202 2"
            />
        </g>
        <path
            fill="currentColor"
            opacity="0.8"
            d="m0 39.257 9.496-17.96 4.752-8.975c.805-1.49 1.558-2.998 2.398-4.478.875-1.461 2.004-2.742 3.334-3.719 2.66-1.973 6.057-2.704 9.216-2.011 3.168.654 6.056 2.77 7.798 5.72 3.247 5.959 6.415 11.926 9.618 17.894l19.132 35.834 2.389 4.478 1.199 2.24c.403.749.779 1.498 1.243 2.172 1.802 2.751 4.586 4.743 7.631 5.436 1.523.389 3.09.304 4.691.313h4.779l9.548-.019 152.772-.142 152.771.161h9.549l4.778.02c1.602 0 3.177.075 4.7-.314 3.054-.693 5.837-2.685 7.64-5.436.455-.683.84-1.433 1.243-2.182l1.199-2.24 2.389-4.478 19.132-35.834 9.618-17.893c1.741-2.95 4.621-5.057 7.789-5.711 3.159-.693 6.555.038 9.207 2.001 1.33.978 2.468 2.258 3.334 3.71.841 1.48 1.593 2.989 2.398 4.478l4.753 8.975L500 39.257l-9.592-17.903-4.796-8.946c-.805-1.48-1.584-2.999-2.415-4.46-.867-1.432-1.987-2.685-3.3-3.633-2.617-1.917-5.951-2.61-9.041-1.917-3.098.655-5.89 2.733-7.57 5.617l-9.513 17.94-19.062 35.882-2.38 4.488-1.19 2.239c-.394.74-.779 1.508-1.261 2.23-1.872 2.874-4.769 4.952-7.946 5.682-1.593.408-3.238.323-4.814.332h-4.778l-9.548.02-152.772.16-152.772-.142h-9.548l-4.778-.019c-1.576-.01-3.221.076-4.814-.332-3.186-.73-6.082-2.808-7.955-5.683-.482-.72-.867-1.49-1.26-2.23l-1.19-2.238-2.381-4.488-19.062-35.881L36.74 8.043c-1.68-2.884-4.472-4.952-7.561-5.616-3.081-.693-6.415 0-9.032 1.907-1.313.948-2.433 2.2-3.3 3.624-.831 1.451-1.61 2.97-2.415 4.459l-4.796 8.947z"
        />
        <defs>
            <filter
                id="ribbon-shadow"
                width="462.421"
                height="90.505"
                x="18.78"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.407843 0 0 0 0 0.219608 0 0 0 0.3 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_ribbon"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_ribbon"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);

export default RibbonBanner;
