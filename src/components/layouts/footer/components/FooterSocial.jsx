/**
 * FooterSocial - Social links and certification badge
 *
 * SEO/Performance improvements:
 * - Using next/image for certification badge
 * - External links have rel="noopener noreferrer"
 * - Social links have aria-label
 */

import Image from "next/image";
import { footerSocial, footerCertification } from "../data/footer.data";

export default function FooterSocial() {
    return (
        <div className="border-t border-vico-green pt-6 tablet:pt-8 desktop:pt-10 pb-6 tablet:pb-8 desktop:pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2">
                {/* Social Links */}
                <div>
                    <h3 className="text-h4 font-bold text-gray-900 mb-3 tablet:mb-4 desktop:mb-5 tracking-wide">
                        {footerSocial.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 tablet:gap-4 desktop:gap-5">
                        {footerSocial.links.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-600 transition-all px-2 tablet:px-3 py-2"
                                    aria-label={`Theo dõi Vicophar trên ${social.name}`}
                                >
                                    <IconComponent
                                        width={28}
                                        height={28}
                                        aria-hidden="true"
                                    />
                                    {/* <span className="text-body desktop:text-h4 font-medium">
                                        {social.name}
                                    </span> */}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Certification Badge */}
                <div className="shrink-0 flex justify-start lg:justify-end">
                    <a
                        href={footerCertification.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={footerCertification.alt}
                    >
                        <Image
                            src={footerCertification.src}
                            alt={footerCertification.alt}
                            width={footerCertification.width}
                            height={footerCertification.height}
                            className="h-vico-header-top w-auto"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
