/**
 * MapPin Icon
 * Có thể đổi màu qua className hoặc style
 */
const MapPinIcon = ({ className = "", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6h.01M9 20l-6-3V4l2 1m4 15 6-3m-6 3v-6m6 3 6 3V7l-2-1m-4 11v-3m0-7.8c0 1.767-1.5 3.2-3 4.8-1.5-1.6-3-3.033-3-4.8S10.343 3 12 3s3 1.433 3 3.2"
        />
    </svg>
);

export default MapPinIcon;
