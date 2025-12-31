/**
 * ============================================================================
 * SHARED CONTACT INFO COMPONENT
 * ============================================================================
 *
 * Reusable company contact info used by both ContactPage and HomePage
 *
 * VARIANTS:
 * - "default": Light theme (ContactPage - text dark, icons green)
 * - "dark": Dark theme (HomePage - text white on green bg)
 *
 * ============================================================================
 */

"use client";

import React from "react";
import {
    CheckCircleIcon,
    MailIcon,
    PhoneIcon,
    MapPinIcon,
} from "@/assets/icons";

export default function ContactInfo({ variant = "default" }) {
    const isDark = variant === "dark";

    // Variant-based styling
    const wrapperClass = isDark
        ? "text-white h-full flex flex-col justify-start space-y-6 tablet:space-y-8 p-0 tablet:p-0"
        : "text-gray-900 h-full flex flex-col justify-start space-y-6 tablet:space-y-8";

    const titleClass = isDark
        ? "text-h2 font-bold mb-4 tablet:mb-6"
        : "text-2xl md:text-3xl font-bold mb-4 tablet:mb-6 text-vico-green";

    const subtitleClass = isDark
        ? "text-h3 font-bold mb-3 tablet:mb-4"
        : "text-xl md:text-2xl font-bold mb-3 tablet:mb-4 text-vico-green";

    const iconClass = isDark
        ? "w-4 h-4 tablet:w-5 tablet:h-5 shrink-0"
        : "w-5 h-5 shrink-0 text-vico-green";

    const iconContactClass = isDark
        ? "w-4 h-4 tablet:w-6 tablet:h-6 shrink-0 mt-0.5 tablet:mt-1"
        : "w-5 h-5 shrink-0 mt-0.5 tablet:mt-1 text-vico-green";

    const featureTextClass = isDark
        ? "text-body font-normal"
        : "text-base md:text-xl font-normal";

    const contactTextClass = isDark
        ? "text-[1rem] tablet:text-[1.25rem] desktop:text-[1.25rem] leading-relaxed hover:underline break-all"
        : "text-base md:text-xl leading-relaxed hover:underline hover:text-vico-green transition-colors break-all";

    const phoneTextClass = isDark
        ? "text-[1rem] tablet:text-[1.25rem] desktop:text-[1.25rem] leading-tight hover:underline"
        : "text-base md:text-xl leading-tight hover:underline hover:text-vico-green transition-colors";

    const addressTextClass = isDark
        ? "text-[1rem] tablet:text-[1.25rem] desktop:text-[1.25rem] leading-relaxed not-italic"
        : "text-base md:text-xl leading-relaxed not-italic";

    // Address content based on variant (có thể customize sau)
    const addressContent = isDark ? (
        <>
            <span itemProp="streetAddress">
                133/38/21 Trần Thị Trọng, khu phố 8
            </span>
            , <span itemProp="addressLocality">P. Tân Sơn</span>,{" "}
            <span itemProp="addressRegion">TP HCM</span>,{" "}
            <span itemProp="addressCountry">
                <br className="hidden desktop:block" />
                Việt Nam
            </span>
        </>
    ) : (
        <>
            <span itemProp="streetAddress">
                133/38 Trần Thị Trọng, P15, Q.Tân Bình
            </span>
            , <span itemProp="addressRegion">TP HCM</span>,{" "}
            <span itemProp="addressCountry">Việt Nam</span>
        </>
    );

    return (
        <div
            className={wrapperClass}
            itemScope
            itemType="https://schema.org/Organization"
        >
            {/* Company Name */}
            <header>
                <h2 className={titleClass} itemProp="name">
                    VICOPHAR VIỆT NAM
                </h2>

                {/* Features List */}
                <ul
                    className="space-y-2 tablet:space-y-3 mb-6 tablet:mb-8"
                    aria-label="Đặc điểm nổi bật của Vicophar"
                >
                    <li className="flex items-center gap-2 tablet:gap-3">
                        <CheckCircleIcon className={iconClass} />
                        <span className={featureTextClass}>
                            Thương hiệu uy tín
                        </span>
                    </li>
                    <li className="flex items-center gap-2 tablet:gap-3">
                        <CheckCircleIcon className={iconClass} />
                        <span className={featureTextClass}>
                            Sản phẩm chất lượng
                        </span>
                    </li>
                    <li className="flex items-center gap-2 tablet:gap-3">
                        <CheckCircleIcon className={iconClass} />
                        <span className={featureTextClass}>Tư vấn tận tâm</span>
                    </li>
                </ul>
            </header>

            {/* Contact Information */}
            <div
                itemProp="contactPoint"
                itemScope
                itemType="https://schema.org/ContactPoint"
            >
                <h3 className={subtitleClass} itemProp="name">
                    Liên hệ với chúng tôi
                </h3>

                <div className="space-y-3 tablet:space-y-4">
                    {/* Email */}
                    <div className="flex items-start gap-2 tablet:gap-3">
                        <MailIcon className={iconContactClass} />
                        <a
                            href="mailto:vicophar.hotline@gmail.com"
                            className={contactTextClass}
                            itemProp="email"
                            aria-label="Email liên hệ Vicophar"
                        >
                            vicophar.hotline@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-2 tablet:gap-3">
                        <PhoneIcon className={iconContactClass} />
                        <a
                            href="tel:0333152545"
                            className={phoneTextClass}
                            itemProp="telephone"
                            aria-label="Số điện thoại liên hệ Vicophar"
                        >
                            0333 152 545
                        </a>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-2 tablet:gap-3">
                        <MapPinIcon className={iconContactClass} />
                        <address
                            className={addressTextClass}
                            itemProp="address"
                            itemScope
                            itemType="https://schema.org/PostalAddress"
                        >
                            {addressContent}
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
}
