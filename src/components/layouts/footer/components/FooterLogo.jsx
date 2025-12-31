/**
 * FooterLogo - Responsive logo component for footer
 * - Mobile/Tablet: LogoResponsiveMobile
 * - Desktop: VicopharLogo
 */

import { VicopharLogo } from "@/assets/icons";
import LogoResponsiveMobile from "@/components/ui/Header/Logo/LogoResponsive";

export default function FooterLogo() {
    return (
        <div className="col-span-1">
            {/* Mobile & Tablet Logo */}
            <div className="lg:hidden">
                <LogoResponsiveMobile />
            </div>

            {/* Desktop Logo */}
            <div className="hidden lg:block">
                <VicopharLogo
                    className="w-3/4 h-auto"
                    aria-label="Vicophar Logo"
                />
            </div>
        </div>
    );
}
