/**
 * ============================================================================
 * USER ICON COMPONENT
 * ============================================================================
 *
 * Icon người dùng (user profile) - Dùng cho nút đăng nhập/tài khoản
 *
 * SỬ DỤNG:
 * --------
 * import { UserIcon } from '@/assets/icons'
 *
 * <UserIcon />
 * <UserIcon className="w-5 h-5 text-green-500" />
 *
 * PROPS:
 * ------
 * @param {string} className - CSS classes tùy chỉnh (default: "")
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 *
 * THIẾT KẾ:
 * ----------
 * - Icon gồm 2 phần: đầu (circle) và thân (arc)
 * - StrokeWidth: 2 (vừa phải)
 * - Sử dụng "currentColor" để kế thừa màu từ parent
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Nút "Đăng nhập" trong Header
 * - Trang profile người dùng
 * - Dropdown menu user
 *
 * ============================================================================
 */

function UserIcon({ size = 24, className = "", ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
            {...props}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21a7 7 0 1 0-14 0m7-10a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
            ></path>
        </svg>
    );
}

export default UserIcon;
