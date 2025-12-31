"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

/**
 * NAVIGATION COMPONENT (STATIC)
 *
 * Component menu điều hướng chính của website.
 * Phiên bản static được tối ưu hóa, loại bỏ ButtonHoverUnderline dư thừa.
 */
function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="w-full" role="navigation" aria-label="Điều hướng chính">
            <ul className="flex items-center justify-center gap-4 desktop:gap-6 m-0 p-0">
                {navLinks.map((link) => {
                    const isActive =
                        pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href));

                    return (
                        <li key={link.id}>
                            <Link
                                href={link.href}
                                className={`
                                    text-body font-semibold! uppercase tracking-wide
                                    transition-colors duration-200
                                    ${
                                        isActive
                                            ? "text-vico-green"
                                            : "text-vico-gray-600 hover:text-vico-green"
                                    }
                                `}
                                aria-label={link.description}
                                title={link.description}
                            >
                                {link.title}
                            </Link>
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
