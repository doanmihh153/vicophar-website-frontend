/**
 * SuccessIcon - Icon check/success
 * Sử dụng cho thông báo thành công, cam kết
 */

export default function SuccessIcon({
    size = 24,
    width,
    height,
    className = "",
    ...props
}) {
    const iconWidth = width || size;
    const iconHeight = height || size;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}
