/**
 * ============================================================================
 * CART ICON COMPONENT (Giỏ Hàng)
 * ============================================================================
 * 
 * Icon giỏ hàng (shopping cart) - Dùng cho nút giỏ hàng trong header
 * 
 * SỬ DỤNG:
 * --------
 * import { CartIcon } from '@/assets/icons'
 * 
 * <CartIcon />
 * <CartIcon className="w-5 h-5" />
 * 
 * PROPS:
 * ------
 * @param {string} className - CSS classes tùy chỉnh (default: "")
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 * 
 * THIẾT KẾ:
 * ----------
 * - Icon giỏ hàng với 2 bánh xe ở dưới
 * - StrokeWidth: 2 (vừa phải)
 * - Stroke color: #fff (trắng) - được hardcode cho nút xanh
 * 
 * LƯU Ý:
 * -------
 * ⚠️ Stroke color đang hardcode #fff
 * 💡 Nên sử dụng "currentColor" để linh hoạt hơn
 * 
 * NƠI SỬ DỤNG:
 * --------------
 * - Nút "Giỏ hàng" trong Header (ActionButtons)
 * - Trang giỏ hàng
 * - Mini cart dropdown
 * 
 * ============================================================================
 */

function CartIcon({ className = "", ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
            {...props}
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h.268c.474 0 .711 0 .905.085.17.076.316.197.42.351.12.174.163.407.248.871L7 16h10.422c.453 0 .68 0 .868-.08a1 1 0 0 0 .415-.331c.12-.165.171-.385.273-.826v-.003l1.57-6.8v-.001c.154-.669.232-1.004.147-1.267a1 1 0 0 0-.44-.55C20.019 6 19.676 6 18.99 6H5.5M18 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2M8 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
            ></path>
        </svg>
    );
}

export default CartIcon;
