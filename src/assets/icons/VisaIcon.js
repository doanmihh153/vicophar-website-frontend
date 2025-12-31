/**
 * ============================================================================
 * VISA ICON - Payment Method Logo
 * ============================================================================
 *
 * Icon logo Visa - Dùng cho payment methods trong footer
 *
 * SỬ DỤNG:
 * --------
 * import { VisaIcon } from '@/assets/icons'
 *
 * <VisaIcon />
 * <VisaIcon width={58} height={48} />
 * <VisaIcon className="h-8 w-auto" />
 *
 * PROPS:
 * ------
 * @param {number} width - Chiều rộng icon (default: 58px)
 * @param {number} height - Chiều cao icon (default: 48px)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 *
 * THIẾT KẾ:
 * ----------
 * - ViewBox: 0 0 300 173
 * - Màu chính: Blue (#15195A)
 * - Card style với border
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Footer - Payment methods section
 *
 * ============================================================================
 */

const VisaIcon = ({ width = 58, height = 48, className = "", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 300 173"
        className={className}
        {...props}
    >
        <rect width="300" height="173" fill="#fff" rx="16" />
        <path
            fill="#15195A"
            d="M138.966 113.531h-14.014l8.766-50.811h14.013zM189.769 63.962c-2.764-1.028-7.148-2.163-12.569-2.163-13.84 0-23.585 6.919-23.645 16.81-.115 7.298 6.977 11.352 12.282 13.785 5.422 2.487 7.265 4.11 7.265 6.326-.055 3.404-4.381 4.973-8.416 4.973-5.595 0-8.593-.809-13.149-2.702l-1.845-.812-1.962 11.406c3.287 1.403 9.343 2.649 15.63 2.704 14.705 0 24.278-6.812 24.391-17.353.056-5.784-3.689-10.216-11.763-13.838-4.902-2.325-7.903-3.893-7.903-6.271.057-2.163 2.539-4.378 8.072-4.378 4.556-.108 7.903.918 10.439 1.946l1.267.54z"
        />
        <path
            fill="#15195A"
            fillRule="evenodd"
            d="M214.854 62.72h10.84L237 113.53h-12.976s-1.27-5.838-1.672-7.622h-17.993c-.52 1.35-2.942 7.622-2.942 7.622h-14.704l20.816-46.596c1.442-3.297 3.982-4.215 7.325-4.215m-.864 18.594s-4.441 11.298-5.595 14.217h11.649c-.577-2.54-3.231-14.704-3.231-14.704l-.979-4.377c-.412 1.127-1.009 2.677-1.411 3.722a37 37 0 0 0-.433 1.142M64.23 62.72h22.548c3.057.107 5.536 1.026 6.343 4.271l4.9 23.346.002.004 1.5 7.027 13.724-34.648h14.819l-22.028 50.758h-14.82l-12.49-44.151c-4.31-2.362-9.229-4.262-14.728-5.58z"
            clipRule="evenodd"
        />
    </svg>
);

export default VisaIcon;
