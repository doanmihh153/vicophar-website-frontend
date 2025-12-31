/**
 * MEDICAL ICON - Icon Hỗ trợ điều trị và phòng ngừa bệnh
 * Medical cross with shield icon
 */

import * as React from "react";

export default function MedicalIcon({ className = "w-5 h-5" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172M15.25 8c0-.414.336-.75.75-.75s.75.336.75.75v3.25H20a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-1.5 0v-3.25H12a.75.75 0 0 1 0-1.5h3.25z"
                clipRule="evenodd"
            ></path>
            <path
                fill="currentColor"
                d="M11.5 8.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5H10v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5z"
            ></path>
        </svg>
    );
}
