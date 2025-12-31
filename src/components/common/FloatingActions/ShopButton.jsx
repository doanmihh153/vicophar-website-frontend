"use client";

import { ShopIcon } from "@/assets/icons";
import ExternalLink from "@/components/common/ExternalLink/ExternalLink";

/**
 * SHOP BUTTON
 *
 * Floating action button linking to the Shop page.
 * positioned above the Contact Button.
 */
export default function ShopButton() {
    return (
        <div className="relative flex flex-col items-center justify-end group mb-1">
            {/* Main Button Container */}
            <div className="relative">
                {/* Pulse Animation Ring */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping duration-1000"></span>

                {/* Button Link */}
                <ExternalLink
                    href="/shop"
                    className="relative w-14 h-14 tablet:w-16 tablet:h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-orange-500 overflow-hidden"
                >
                    <ShopIcon
                        width={52}
                        height={52}
                        className="w-8 h-8 tablet:w-10 tablet:h-10 transition-all duration-300 group-hover:scale-110"
                    />
                </ExternalLink>
            </div>

            <span className="text-sm font-medium text-vico-text mt-2 hidden desktop:block">
                Shop
            </span>
        </div>
    );
}
