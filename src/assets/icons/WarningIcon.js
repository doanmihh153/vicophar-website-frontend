import * as React from "react";

const WarningIcon = ({ className = "w-6 h-6", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        {...props}
    >
        <path d="M22.25 17.55 14.63 3.71a3 3 0 0 0-5.26 0L1.75 17.55A3 3 0 0 0 4.38 22h15.24a3 3 0 0 0 2.63-4.45M12 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1m1-5a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z"></path>
    </svg>
);

export default WarningIcon;
