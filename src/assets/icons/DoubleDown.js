import * as React from "react";

const DoubleDownIcon = ({
    size = 20,
    stroke = "currentColor",
    strokeWidth = 1.5,
    className = "",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 21 21"
        className={className}
        {...props}
    >
        <g
            fill="none"
            fillRule="evenodd"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 6.5l-4 4-4-4" />
            <path d="M14.5 10.5l-4 4-4-4" />
        </g>
    </svg>
);

export default DoubleDownIcon;
