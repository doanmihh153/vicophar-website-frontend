/**
 * FooterCopyright - Copyright text and payment methods
 *
 * SEO improvements:
 * - Using <small> for copyright (semantic)
 * - Payment icons have aria-hidden (decorative)
 */

import { footerPayment, getFooterCopyright } from "../data/footer.data";

export default function FooterCopyright() {
    const currentYear = new Date().getFullYear();
    const copyright = getFooterCopyright(currentYear);

    return (
        <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                {/* Copyright */}
                <div>
                    <small className="text-base font-normal text-gray-600 text-center md:text-left block">
                        {copyright.text}
                    </small>
                </div>

                {/* Payment Methods */}
                <div
                    className="flex items-center justify-center gap-3"
                    role="img"
                    aria-label="Phương thức thanh toán: Discover, Mastercard, Apple Pay, Visa, PayPal"
                >
                    {footerPayment.methods.map((method) => {
                        const IconComponent = method.icon;
                        return (
                            <IconComponent
                                key={method.name}
                                aria-hidden="true"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
