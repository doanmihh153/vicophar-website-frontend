"use client";

import React from "react";
import { ContactInfo, ContactForm } from "@/components/common/Contact";

/**
 * ============================================================================
 * CONTACT SECTION (CONTACT PAGE)
 * ============================================================================
 *
 * Main contact section for Contact Page
 * Split layout: Company info (left) + Contact form (right)
 * Uses shared components from common/Contact
 *
 * ============================================================================
 */
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
            <div className="absolute inset-x-0 top-0 h-2/3 tablet:h-3/4 bg-vico-green">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center bg-[url('/imgs/home-page/contact-us.webp')]" />
            </div>

            {/* Content */}
            <div className="vico-container relative z-10">
                <div className="grid grid-cols-12 gap-4 tablet:gap-6 desktop:gap-8 bg-vico-white rounded-none md:rounded-2xl -mx-4 md:mx-0 p-5 tablet:p-6 desktop:p-8 shadow-sm">
                    {/* LEFT COLUMN - COMPANY INFO */}
                    <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                        <ContactInfo variant="default" />
                    </div>

                    {/* RIGHT COLUMN - CONTACT FORM */}
                    <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
                        <ContactForm variant="default" idPrefix="contact" />
                    </div>
                </div>
            </div>
        </section>
    );
}
