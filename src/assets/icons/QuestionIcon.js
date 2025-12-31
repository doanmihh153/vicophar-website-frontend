/**
 * ============================================================================
 * QUESTION ICON COMPONENT (Dấu hỏi trong vòng tròn)
 * ============================================================================
 *
 * Icon dấu chấm hỏi - Dùng cho FAQ, Help center
 *
 * SỬ DỤNG:
 * --------
 * import { QuestionIcon } from '@/assets/icons'
 *
 * <QuestionIcon />
 * <QuestionIcon size={20} color="#10b981" />
 *
 * ============================================================================
 */

const QuestionIcon = ({
    size = 24,
    color = "currentColor",
    className = "",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        className={className}
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1m1.71-4.61c-.71.34-.71.39-.71.61a1 1 0 0 1-2 0 2.6 2.6 0 0 1 1.84-2.42C13.61 11.21 14 11 14 10a1 1 0 0 0-.49-.86A2.8 2.8 0 0 0 12 8.75c-.69 0-2 .26-2 1.25a1 1 0 0 1-2 0c0-1.88 1.68-3.25 4-3.25s4 1.37 4 3.25a3.41 3.41 0 0 1-2.29 3.39" />
    </svg>
);

export default QuestionIcon;
