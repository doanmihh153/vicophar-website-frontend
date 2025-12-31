"use client";

import React from "react";
import { CartIcon, PhoneIcon } from "@/assets/icons";
import MedicineIcon from "@/assets/icons/MedicineIcon";
import FreeShipIcon from "@/assets/icons/FreeShipIcon";
import ReturnIcon from "@/assets/icons/ReturnIcon";
import HelpSidebar from "@/components/common/HelpSidebar/HelpSidebar";

import useSticky from "@/hooks/useSticky";

// Local PolicyIcons Component to avoid duplication
const PolicyIcons = () => (
    <ul className="grid grid-cols-3 gap-2 w-full list-none m-0 p-0">
        {/* Item 1 */}
        <li className="flex flex-col items-center text-center gap-2">
            <MedicineIcon
                className="text-vico-primary w-7 h-7"
                aria-hidden="true"
            />
            <div>
                <h4 className="font-semibold text-[8px] md:text-xs text-gray-900 leading-tight mb-1">
                    100% thuốc chính hãng
                </h4>
            </div>
        </li>

        {/* Item 2 */}
        <li className="flex flex-col items-center text-center gap-2">
            <FreeShipIcon
                className="text-vico-primary w-7 h-7"
                aria-hidden="true"
            />
            <div>
                <h4 className="font-semibold text-[8px] md:text-xs text-gray-900 leading-tight mb-1">
                    Miễn phí vận chuyển
                </h4>
            </div>
        </li>

        {/* Item 3 */}
        <li className="flex flex-col items-center text-center gap-2">
            <ReturnIcon
                className="text-vico-primary w-7 h-7"
                aria-hidden="true"
            />
            <div>
                <h4 className="font-semibold text-[8px] md:text-xs text-gray-900 leading-tight mb-1">
                    Đổi trả linh hoạt
                </h4>
            </div>
        </li>
    </ul>
);

/**
 * ProductActionSidebar
 */
export default function ProductActionSidebar() {
    // START: Refactor to use useSticky hook
    const { sentinelRef, state } = useSticky({ top: 120 });
    // END: Refactor

    return (
        <aside className="product-action-sidebar space-y-2 relative h-full z-40">
            {/* Sentinel for sticky detection */}
            <div ref={sentinelRef} className="absolute top-0 w-full h-px" />

            <div className="sticky top-[120px] self-start">
                <div>
                    <div className="bg-white hidden tablet:hidden desktop:block rounded-2xl p-4 desktop:p-6 space-y-2">
                        {/* CTA Buttons - DESKTOP ONLY */}
                        <div className="hidden md:block space-y-2">
                            <button
                                aria-label="Thêm sản phẩm vào giỏ hàng"
                                className="w-full bg-vico-green text-white font-medium py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                            >
                                <CartIcon
                                    width={20}
                                    height={20}
                                    className="text-white"
                                    aria-hidden="true"
                                />
                                Mua sản phẩm
                            </button>

                            <button
                                aria-label="Liên hệ tư vấn qua điện thoại"
                                className="w-full bg-white border! border-vico-green text-vico-green font-medium py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                            >
                                <PhoneIcon
                                    width={20}
                                    height={20}
                                    className="text-vico-green"
                                    aria-hidden="true"
                                />
                                Liên hệ tư vấn
                            </button>
                        </div>

                        {/* Divider - Desktop Only */}
                        <hr className="border-gray-100 my-4 hidden desktop:block" />

                        {/* Policy Icons - DESKTOP ONLY */}
                        <div className="hidden desktop:block mt-4">
                            <PolicyIcons />
                        </div>
                    </div>

                    {/* MOBILE STICKY FOOTER CTA - Fixed Bottom */}
                    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col gap-3 desktop:hidden border-t border-gray-100 safe-area-pb">
                        {/* CTA Buttons Row */}
                        <div className="flex gap-2 w-full">
                            <button
                                aria-label="Liên hệ tư vấn qua điện thoại"
                                className="flex-1 w-full bg-white border! border-vico-green text-vico-green font-medium py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                            >
                                <PhoneIcon
                                    width={18}
                                    height={18}
                                    className="text-vico-green"
                                    aria-hidden="true"
                                />
                                Liên hệ tư vấn
                            </button>
                            <button
                                aria-label="Thêm sản phẩm vào giỏ hàng"
                                className="flex-1 bg-vico-green text-white font-medium py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                            >
                                <CartIcon
                                    width={18}
                                    height={18}
                                    className="text-white"
                                    aria-hidden="true"
                                />
                                Mua sản phẩm
                            </button>
                        </div>

                        {/* Policy Icons in Mobile Footer (Below CTA) */}
                        <PolicyIcons />
                    </div>

                    {/* Help Sidebar Reuse (Render below Sticky Action) */}
                    <div className="mt-4 hidden tablet:hidden desktop:block">
                        <HelpSidebar disableSticky={true} />
                    </div>
                </div>
            </div>
        </aside>
    );
}
