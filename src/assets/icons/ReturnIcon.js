import * as React from "react";

const ReturnIcon = ({
    width = 300,
    height = 300,
    className = "",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 300 300"
        className={className}
        {...props}
    >
        <path
            fill="#02509E"
            d="M192.287 84.683H80.157V58l-61.07 61.069 206.346 23.161v57.265l-66.34 28.052 26.962 34.386 6.232.001c48.868 0 88.626-39.759 88.626-88.625s-39.758-88.626-88.626-88.626"
        ></path>
        <path
            fill="#00376F"
            d="m192.287 119.069-173.2-.001 61.07 61.07 6.51-20.172 100.69-6.511h4.93c10.946 0 19.853 8.908 19.853 19.853s-8.907 19.853-19.853 19.853h-31.892v34.386h33.195c29.958 0 52.937-24.28 52.937-54.239s-24.281-54.239-54.24-54.239"
        ></path>
        <path
            fill="#0DB061"
            d="M187.357 153.454v108.478h-61.861l8.257-103.113 10.734-5.365z"
        ></path>
        <path
            fill="#fff"
            d="M133.753 158.819v103.113H80.157V153.454h42.87z"
        ></path>
        <path fill="#006838" d="M144.488 153.454h-21.461v32.191h21.461z"></path>
    </svg>
);

export default ReturnIcon;
