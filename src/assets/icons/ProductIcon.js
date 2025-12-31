import React from "react";

const ProductIcon = ({ width = 24, height = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 1024 1024"
        fill="currentColor"
    >
        <path d="M862.906 932.188H162.97c-38.719 0-70.125-31.407-70.125-70.125V432.5c0-38.719 31.406-70.125 70.125-70.125h699.937c38.719 0 70.125 31.406 70.125 70.125v429.563c0 38.718-31.406 70.125-70.125 70.125"></path>
        <path d="M784.063 227.563H239.938c-32.438 0-58.782 26.343-58.782 58.78v45.938h661.688v-45.937c0-32.531-26.344-58.781-58.782-58.781"></path>
        <path d="M721.25 91.344H306.594c-32.438 0-58.781 26.344-58.781 58.781v45.938h532.312v-45.938c-.094-32.437-26.344-58.781-58.875-58.781"></path>
    </svg>
);

export default ProductIcon;
