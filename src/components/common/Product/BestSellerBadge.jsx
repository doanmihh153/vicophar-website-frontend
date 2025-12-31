import React from "react";

/**
 * Best Seller Badge Component
 * "Ribbon" style badge hanging from top-left
 */
export default function BestSellerBadge({ className = "" }) {
    return (
        <div
            className={`absolute top-2 -left-1.5 z-10 w-[80px] h-8 md:w-[90px] md:h-9 desktop:w-[102px] desktop:h-10 rounded-tl-md ${className}`}
            aria-label="Sản phẩm bán chạy"
        >
            {/* Viền trái màu cam đậm - Tiếp xúc rìa container */}
            <div className="absolute top-0 left-0 w-[4px] md:w-[4.5px] desktop:w-[5px] h-full bg-vico-orange-dark rounded-l-md rounded-tl-lg" />

            {/* Background chính vàng cam */}
            <div className="absolute top-0 left-0 w-[78px] md:w-[88px] desktop:w-[100px] h-[25px] md:h-[28px] desktop:h-[31px] bg-vico-orange rounded-r-md" />

            {/* Text "BÁN CHẠY" */}
            <div className="absolute top-[5px] md:top-[6px] desktop:top-[7px] left-0 w-[80px] md:w-[90px] desktop:w-[100px] h-4 md:h-[18px] desktop:h-5 flex items-center justify-center">
                <span className="font-semibold text-white text-[12px] desktop:text-base tracking-wide uppercase">
                    Bán chạy
                </span>
            </div>
        </div>
    );
}
