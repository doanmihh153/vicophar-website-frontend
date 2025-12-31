/**
 * ============================================================================
 * FOOTER COMPONENT - CHÂN TRANG WEBSITE
 * ============================================================================
 *
 * Component footer chứa thông tin công ty, navigation, social links
 *
 * LAYOUT:
 * -------
 * 1. Top Section: Logo + Navigation (3 cột)
 * 2. Middle Section: Thông tin công ty + Công ty phân phối
 * 3. Social Section: Kết nối mạng xã hội + Badge chứng nhận
 * 4. Bottom Section: Copyright + Payment methods
 *
 * FEATURES:
 * ---------
 * ✅ Responsive design
 * ✅ Social media links
 * ✅ Company information
 * ✅ Navigation links (accordion on mobile)
 * ✅ Payment methods display
 * ✅ Government certification badge
 * ✅ SEO optimized (semantic HTML, next/image)
 * ✅ Accessible (aria-labels, aria-expanded)
 *
 * ============================================================================
 */

import {
    FooterLogo,
    FooterNavigation,
    FooterCompanyInfo,
    FooterSocial,
    FooterCopyright,
} from "./components";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t-4 border-vico-green">
            <div className="vico-container pt-6 tablet:pt-8 desktop:pt-12 pb-4">
                {/* ========================================
                    TOP SECTION - LOGO & NAVIGATION
                    ======================================== */}
                <div className="mb-6 tablet:mb-8 desktop:mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 tablet:gap-0 lg:gap-4">
                        <FooterLogo />
                        <FooterNavigation />
                    </div>
                </div>

                {/* ========================================
                    MIDDLE SECTION - COMPANY INFO
                    ======================================== */}
                <FooterCompanyInfo />

                {/* ========================================
                    SOCIAL SECTION
                    ======================================== */}
                <FooterSocial />

                {/* ========================================
                    BOTTOM SECTION - COPYRIGHT & PAYMENT
                    ======================================== */}
                <FooterCopyright />
            </div>
        </footer>
    );
}
