"use client";

import React from "react";

/**
 * ProductDisclaimer
 * Đơn giản chỉ hiển thị nội dung disclaimer cho sản phẩm
 * "Thực phẩm bảo vệ sức khoẻ, không phải là thuốc..."
 */
export default function ProductDisclaimer() {
    return (
        <div className="my-4 border-l-4 p-2 rounded-lg bg-vico-green-light border-vico-green mt-6">
            <div className="flex items-start pl-2">
                <div>
                    <p className="text-sm desktop:text-base leading-relaxed text-vico-green">
                        Thực phẩm bảo vệ sức khoẻ, không phải là thuốc, không có
                        tác dụng thay thế thuốc chữa bệnh.
                    </p>
                </div>
            </div>
        </div>
    );
}
