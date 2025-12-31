/**
 * ============================================================================
 * DOUBLE QUOTE ICON (Icon Dấu Ngoặc Kép)
 * ============================================================================
 *
 * Icon dấu ngoặc kép lớn - Dùng cho testimonials, quotes, câu trích dẫn
 *
 * SỬ DỤNG:
 * --------
 * import DoubleQuoteIcon from '@/assets/icons/DoubleNgoac'
 *
 * <DoubleQuoteIcon />
 * <DoubleQuoteIcon width={100} height={80} />
 * <DoubleQuoteIcon fill="var(--color-vico-red)" />
 * <DoubleQuoteIcon fill="currentColor" className="text-red-500" />
 *
 * PROPS:
 * ------
 * @param {number} width - Chiều rộng icon (default: 83px)
 * @param {number} height - Chiều cao icon (default: 66px)
 * @param {string} fill - Màu stroke (default: "#BE1E2D" - màu đỏ Vicophar)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 *
 * THIẾT KẾ:
 * ----------
 * - Dấu ngoặc kép đôi (double quotation marks)
 * - Icon dạng stroke (không fill)
 * - Có thể thay đổi màu stroke qua prop fill
 * - Hỗ trợ currentColor để kế thừa màu text
 *
 * NƠI SỬ DỤNG:
 * --------------
 * - Testimonials section (Phần đánh giá khách hàng)
 * - Quote blocks (Khối trích dẫn)
 * - Customer reviews (Đánh giá sản phẩm)
 * - Decorative elements (Trang trí)
 *
 * ============================================================================
 */

import * as React from "react";

const DoubleQuoteIcon = ({
    width = 83,
    height = 66,
    fill = "#BE1E2D",
    className = "",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 83 66"
        className={className}
        {...props}
    >
        <path
            stroke={fill}
            d="m32.477 1.003 3.948 6.372.293.472-.5.242c-13.265 6.412-20.871 14.49-22.19 26.42H18.5c7.294 0 11.791 1.706 14.791 4.624l.286.286.266.282c2.692 2.94 3.644 6.554 3.644 10.206 0 4.013-1.594 7.464-4.829 10.421-3.142 2.955-6.853 4.438-11.196 4.438-6.722 0-11.99-2.36-15.566-6.734C2.333 53.673.5 47.376.5 39.587c0-7.33 3.116-14.707 9.179-22.036l.002-.003C15.833 10.222 23.252 4.61 31.85.809l.398-.175zm44.243 0 3.949 6.372.292.472-.5.242c-13.264 6.412-20.87 14.49-22.188 26.42h4.47c7.53 0 12.079 1.818 15.077 4.91 2.897 2.99 3.91 6.718 3.91 10.488 0 4.01-1.593 7.46-4.824 10.415-3.143 2.959-6.855 4.444-11.2 4.444-6.724 0-11.991-2.36-15.566-6.734-3.564-4.359-5.397-10.656-5.397-18.445 0-7.33 3.117-14.707 9.18-22.036l.002-.003C60.075 10.22 67.495 4.61 76.093.809l.397-.175z"
        />
    </svg>
);

export default DoubleQuoteIcon;
