/**
 * ChevronIcon - Animated chevron for accordion
 * @param {boolean} isOpen - Whether the accordion is open
 * @param {string} className - Additional classes
 */
export default function ChevronIcon({ isOpen, className = "" }) {
    return (
        <svg
            className={`w-5 h-5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
            } ${className}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
}
