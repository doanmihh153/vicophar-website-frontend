/**
 * ============================================================================
 * CONTACT SECTION - LIÊN HỆ VỚI VICOPHAR (HOMEPAGE)
 * ============================================================================
 *
 * Component section liên hệ - sử dụng shared components từ common/Contact
 *
 * LAYOUT:
 * - 6 cột trái: Form tư vấn sức khỏe
 * - 6 cột phải: Thông tin công ty (nền xanh)
 *
 * ============================================================================
 */

import React from "react";
import { ContactForm, ContactInfo } from "@/components/common/Contact";

export default function ContactSection() {
    return (
        <section
            className="relative py-6 tablet:py-10 desktop:py-16"
            id="contact-section"
            aria-labelledby="contact-heading"
            itemScope
            itemType="https://schema.org/ContactPage"
        >
            {/* Green Background - Responsive Height */}
            <div className="absolute inset-x-0 top-0 h-2/3 tablet:h-3/4 bg-[#0DB061]">
                <div className="absolute inset-0 opacity-15 bg-cover bg-center bg-[url('/imgs/home-page/contact-us.webp')]" />
            </div>

            {/* Content */}
            <div className="vico-container relative z-10">
                <div className="grid grid-cols-12 gap-4 tablet:gap-6 desktop:gap-10">
                    {/* LEFT COLUMN - CONTACT FORM */}
                    <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                        <ContactForm
                            variant="homepage"
                            idPrefix="home-contact"
                        />
                    </div>

                    {/* RIGHT COLUMN - COMPANY INFO */}
                    <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                        <ContactInfo variant="dark" />
                    </div>
                </div>
            </div>
        </section>
    );
}
