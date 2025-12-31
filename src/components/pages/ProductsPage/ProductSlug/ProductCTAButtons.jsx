"use client";

import React from "react";
import { CartIcon, PhoneIcon } from "@/assets/icons";
import MedicineIcon from "@/assets/icons/MedicineIcon";
import FreeShipIcon from "@/assets/icons/FreeShipIcon";
import ReturnIcon from "@/assets/icons/ReturnIcon";

/**
 * ProductCTAButtons - Reusable CTA buttons for product pages
 * Includes: Buy button, Contact button, and Policy icons
 */
export default function ProductCTAButtons() {
    return (
        <div className="space-y-2">
            {/* CTA Buttons */}
            <button className="w-full bg-vico-green text-white font-medium py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors">
                <CartIcon width={20} height={20} className="text-white" />
                Mua sản phẩm
            </button>

            <button className="w-full bg-white border! border-vico-green text-vico-green font-medium py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors">
                <PhoneIcon width={20} height={20} className="text-vico-green" />
                Liên hệ tư vấn
            </button>

            {/* Divider */}
            <hr className="border-gray-100 my-4" />

            {/* Policy Icons - Horizontal Layout */}
            <div className="grid grid-cols-3 gap-2 mt-4">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center gap-2">
                    <MedicineIcon
                        className="text-vico-primary"
                        width={28}
                        height={28}
                    />
                    <div>
                        <h4 className="font-semibold text-xs text-gray-900 leading-tight mb-1">
                            100% thuốc chính hãng
                        </h4>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center gap-2">
                    <FreeShipIcon
                        className="text-vico-primary"
                        width={28}
                        height={28}
                    />
                    <div>
                        <h4 className="font-semibold text-xs text-gray-900 leading-tight mb-1">
                            Miễn phí vận chuyển
                        </h4>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center gap-2">
                    <ReturnIcon
                        className="text-vico-primary"
                        width={28}
                        height={28}
                    />
                    <div>
                        <h4 className="font-semibold text-xs text-gray-900 leading-tight mb-1">
                            Đổi trả linh hoạt
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
