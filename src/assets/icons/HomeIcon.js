/**
 * HOME ICON - Icon trang chủ
 */

import * as React from "react";

export default function HomeIcon({ className = "w-5 h-5" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 24 24"
            className={className}
            fill="currentColor"
        >
            <path d="M5.4 7.3C4.5 8.1 4 9.2 4 10.4V18c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-7.6c0-1.2-.5-2.3-1.4-3l-4-3.4c-1.5-1.3-3.7-1.3-5.2 0zM10 20v-4.9c0-.6.5-1.1 1.1-1.1h1.8c.6 0 1.1.5 1.1 1.1V20zm2-15.1c.5 0 .9.2 1.3.5l4 3.4c.4.4.7.9.7 1.5V18c0 1.1-.9 2-2 2v-4.9c0-1.7-1.4-3.1-3.1-3.1h-1.8C9.4 12 8 13.4 8 15.1V20c-1.1 0-2-.9-2-2v-7.6c0-.6.3-1.1.7-1.5l4-3.4c.4-.4.8-.6 1.3-.6"></path>
        </svg>
    );
}
