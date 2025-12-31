"use client";

import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";
import ContactSection from "./ContactSection";
import ContactHero from "./ContactHero";
import { HomeIcon } from "@/assets/icons";

/**
 * ContactPage
 * Trang Liên hệ
 *
 * Structure:
 * 1. Hero Banner (NEW)
 * 2. Breadcrumb
 * 3. Contact Form & Info (Reused from HomePage)
 * 4. Google Map (Optimized)
 */
export default function ContactPage() {
    return (
        <main className="contact-page bg-vico-hover min-h-screen">
            {/* 1. Hero Banner */}
            <ContactHero
                imageUrl="/imgs/banner-slider/banner2.jpg"
                altText="Liên hệ với Vicophar Việt Nam - Tư vấn sức khỏe chuyên nghiệp"
            />

            {/* Content Container - Relative z-10 to scroll over sticky banner */}
            <div className="relative z-10 bg-vico-hover w-full flex flex-col">
                {/* 2. Breadcrumb */}
                <section className="bg-white py-2 md:py-4">
                    <div className="vico-container">
                        <Breadcrumb
                            items={[
                                {
                                    label: "Trang Chủ",
                                    href: "/",
                                    icon: <HomeIcon className="w-5 h-5" />,
                                },
                                { label: "Liên Hệ" },
                            ]}
                        />
                    </div>
                </section>

                {/* 3. Contact Section - Dedicated component */}
                <ContactSection />

                {/* 4. Google Map - Optimized */}
                <section className="pb-16 pt-8">
                    <div className="vico-container">
                        <div className="bg-white p-2 rounded-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8946886844577!2d106.63581567501687!3d10.828016558453994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297ea2c2e97b%3A0x723210f2d973997!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gVmljb3BoYXIgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1734345280000!5m2!1svi!2s"
                                className="w-full h-[80vh] min-h-[600px] max-h-[800px] rounded-xl"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bản đồ Công Ty Cổ Phần Vicophar Việt Nam"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
