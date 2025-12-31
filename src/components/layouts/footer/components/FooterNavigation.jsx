"use client";

/**
 * FooterNavigation - Navigation columns with accordion on mobile
 *
 * SEO improvements:
 * - Wrapped in <nav> with aria-label
 * - Using link.path as key instead of index
 * - aria-expanded and aria-controls on buttons
 */

import { useState } from "react";
import Link from "next/link";
import { footerNavigation } from "../data/footer.data";
import ChevronIcon from "./ChevronIcon";

// Single navigation column component
function NavColumn({ section, isOpen, onToggle }) {
    const { id, title, links } = section;
    const contentId = `footer-nav-${id}`;

    return (
        <div className="col-span-1">
            {/* Mobile: Accordion */}
            <div className="lg:hidden">
                <button
                    onClick={onToggle}
                    className="w-full flex items-center justify-between py-3 border-b border-gray-200"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                >
                    <h3 className="text-body font-semibold text-gray-900">
                        {title}
                    </h3>
                    <ChevronIcon isOpen={isOpen} />
                </button>
                <div
                    id={contentId}
                    className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <ul className="space-y-2 py-3">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className="text-body text-gray-600 hover:text-vico-green transition-colors"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Desktop: Always Visible */}
            <div className="hidden lg:block">
                <h3 className="text-h4 desktop:text-h3 font-semibold text-gray-900 mb-5">
                    {title}
                </h3>
                <ul className="space-y-3">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className="text-body desktop:text-h4 text-gray-600 hover:text-vico-green transition-colors"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function FooterNavigation() {
    const [openSections, setOpenSections] = useState({
        aboutUs: false,
        services: false,
        information: false,
    });

    const toggleSection = (sectionId) => {
        setOpenSections((prev) => ({
            ...prev,
            [sectionId]: !prev[sectionId],
        }));
    };

    const sections = [
        footerNavigation.aboutUs,
        footerNavigation.services,
        footerNavigation.information,
    ];

    return (
        <nav
            aria-label="Footer navigation"
            className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4"
        >
            {sections.map((section) => (
                <NavColumn
                    key={section.id}
                    section={section}
                    isOpen={openSections[section.id]}
                    onToggle={() => toggleSection(section.id)}
                />
            ))}
        </nav>
    );
}
