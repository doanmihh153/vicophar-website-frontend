/**
 * Mail Icon
 * Có thể đổi màu qua className hoặc style
 */
const MailIcon = ({ className = "", ...props }) => (
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
            d="M13 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 19 5.08 19 6.2 19h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 17.48 21 16.92 21 15.8V13M3 8l5.45 3.634c1.283.855 1.924 1.282 2.617 1.448a4 4 0 0 0 1.866 0c.693-.166 1.334-.593 2.617-1.448M22 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        />
    </svg>
);

export default MailIcon;
