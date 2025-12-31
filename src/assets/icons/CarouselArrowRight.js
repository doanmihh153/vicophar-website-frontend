/**
 * ============================================================================
 * CAROUSEL ARROW RIGHT IOON
 * ============================================================================
 *
 * Icon mũi tên trái Custom cho Carousel
 *
 * SỬ DỤNG:
 * --------
 * import { CarouselArrowRight } from '@/assets/icons'
 *
 * <CarouselArrowRight />
 *
 * ============================================================================
 */

const CarouselArrowRight = ({
    width = 24,
    height = 24,
    className = "",
    color = "currentColor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="-4.5 0 20 20"
        className={className}
        {...props}
    >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill={color} transform="translate(-305 -6679)">
                <g transform="translate(56 160)">
                    <path d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413"></path>
                </g>
            </g>
        </g>
    </svg>
);

export default CarouselArrowRight;
