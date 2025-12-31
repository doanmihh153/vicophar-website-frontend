/**
 * AUTHOR ICON - Icon người viết bài
 * Customizable color via className
 */

import * as React from "react";

const AuthorIcon = ({ className = "w-5 h-5" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 21a7 7 0 0 1 6-6.93m9.873 1.134a3 3 0 0 1-.206.006c-1.025 0-1.96-.458-2.667-1.21-.708.752-1.642 1.21-2.667 1.21q-.103 0-.206-.006A5.6 5.6 0 0 0 14 16.398c0 2.214 1.275 4.075 3 4.602 1.725-.527 3-2.388 3-4.602 0-.412-.044-.813-.127-1.194M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        />
    </svg>
);

export default AuthorIcon;
