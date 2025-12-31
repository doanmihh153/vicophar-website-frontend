/**
 * NAVIGATION COMPONENT
 *
 * Component menu điều hướng chính của website
 * Hiển thị các mục menu theo chiều ngang với hover effects
 *
 * Features:
 * - Active state detection với usePathname
 * - Hover underline effect
 * - Uppercase text style
 * - Semantic HTML với nav, ul, li
 * - SEO optimized với structured data
 *
 * Menu Items:
 * - CÂU CHUYỆN VICOPHAR
 * - TIN TỨC
 * - DƯỢC SĨ KHỎE
 * - SẢN PHẨM
 * - LIÊN HỆ
 *
 * Props: Không có props
 */

"use client";

import { usePathname } from "next/navigation";
import { navLinks, homeLink } from "@/data/navigation";
import ButtonHoverUnderline from "@/components/common/ButtonHoverUnderline";

function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="w-full" role="navigation" aria-label="Điều hướng chính">
            <ul className="flex items-center justify-center gap-x-vico-section list-none m-0 p-0">
                {navLinks.map((link) => {
                    const isActive =
                        pathname === link.href ||
                        pathname.startsWith(link.href + "/");

                    return (
                        <li key={link.id}>
                            <ButtonHoverUnderline
                                href={link.href}
                                className={`
                                    text-body font-semibold! uppercase tracking-wide
                                    transition-colors duration-200 leading-8!
                                    ${
                                        isActive
                                            ? "text-vico-green after:scale-x-100!"
                                            : "text-vico-gray-600 hover:text-vico-green"
                                    }
                                `}
                                underlineColor="bg-vico-green"
                                underlineHeight="h-[2px]"
                                duration="duration-300"
                                aria-label={link.description}
                                title={link.description}
                            >
                                {link.title}
                            </ButtonHoverUnderline>
                        </li>
                    );
                })}
            </ul>

            {/* Structured Data cho SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SiteNavigationElement",
                        name: "Vicophar Navigation",
                        url: navLinks.map((link) => ({
                            "@type": "WebPage",
                            name: link.title,
                            url: `https://vicophar.com${link.href}`,
                            description: link.description,
                        })),
                    }),
                }}
            />
        </nav>
    );
}

export default Navigation;
