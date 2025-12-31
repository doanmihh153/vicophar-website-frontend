/**
 * ============================================================================
 * SEARCH ICON COMPONENT
 * ============================================================================
 * 
 * Icon kính lúp (magnifying glass) dùng cho chức năng tìm kiếm
 * 
 * SỬ DỤNG:
 * --------
 * import { SearchIcon } from '@/assets/icons'
 * 
 * <SearchIcon />
 * <SearchIcon width={20} height={20} />
 * <SearchIcon className="text-green-500" />
 * <SearchIcon stroke="#0db061" />
 * 
 * PROPS:
 * ------
 * @param {number} width - Chiều rộng icon (default: 24px)
 * @param {number} height - Chiều cao icon (default: 24px)
 * @param {string} className - CSS classes tùy chỉnh
 * @param {string} fill - Màu fill (default: "none")
 * @param {string} stroke - Màu stroke/viền (default: "currentColor")
 * @param {...any} props - Các props khác sẽ được spread vào SVG
 * 
 * LƯU Ý:
 * -------
 * - Icon sử dụng "currentColor" nên sẽ kế thừa màu text từ parent
 * - Có thể thay đổi màu bằng className hoặc prop stroke
 * - StrokeWidth: 2.5 (dày hơn một chút để rõ ràng)
 * 
 * ============================================================================
 */

const SearchIcon = ({
  width = 24,
  height = 24,
  className = "",
  fill = "none",
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    className={`stroke-green-header hover:cursor-pointer ${className}`}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    />
  </svg>
);

export default SearchIcon;
