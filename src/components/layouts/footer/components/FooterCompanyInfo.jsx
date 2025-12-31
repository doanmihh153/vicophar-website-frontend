/**
 * FooterCompanyInfo - Company information section
 *
 * SEO improvements:
 * - Using <address> semantic tag
 * - Replaced inline style with Tailwind class
 * - Phone links have aria-label
 */

import { footerCompanyInfo } from "../data/footer.data";

// Helper to format phone for tel: link
const formatPhoneLink = (phone) => phone.replace(/\s/g, "");

// Helper to render address array with line breaks
const renderAddress = (addressArray) =>
    addressArray.map((line, i) => (
        <span key={i}>
            {line}
            {i < addressArray.length - 1 && <br />}
        </span>
    ));

export default function FooterCompanyInfo() {
    const { main, distributor } = footerCompanyInfo;

    return (
        <div className="border-t border-gray-200 pt-6 tablet:pt-8 desktop:pt-10 pb-6 tablet:pb-8 desktop:pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4">
                {/* CÔNG TY CHÍNH */}
                <address className="not-italic">
                    <h3 className="text-h4 font-bold mb-3 tablet:mb-4 desktop:mb-5 tracking-wide text-[#02509E]">
                        {main.name}
                    </h3>
                    <div className="space-y-2 text-body desktop:text-h4 text-gray-700">
                        <p>
                            <span className="font-semibold text-gray-900">
                                Địa chỉ:
                            </span>{" "}
                            {renderAddress(main.address)}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-900">
                                Điện thoại:
                            </span>{" "}
                            <a
                                href={`tel:${formatPhoneLink(main.phone)}`}
                                className="hover:text-vico-green transition-colors"
                                aria-label={`Gọi điện: ${main.phone}`}
                            >
                                {main.phone}
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-gray-900">
                                Email:
                            </span>{" "}
                            <a
                                href={`mailto:${main.email}`}
                                className="hover:text-vico-green transition-colors"
                            >
                                {main.email}
                            </a>
                        </p>
                        <div>
                            <p>
                                <span className="font-semibold text-gray-900">
                                    Giấy phép ĐKKD:
                                </span>{" "}
                                {main.licenseNumber}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-900">
                                    Nơi cấp:
                                </span>{" "}
                                {main.licenseIssuedBy}
                            </p>
                        </div>
                    </div>
                </address>

                {/* CÔNG TY PHÂN PHỐI */}
                <address className="not-italic">
                    <h3 className="text-h4 font-bold text-vico-text mb-3 tablet:mb-4 desktop:mb-5 tracking-wide">
                        {distributor.name}{" "}
                        <span className="font-normal text-gray-500">
                            (Công ty phân phối)
                        </span>
                    </h3>
                    <div className="space-y-2 text-body desktop:text-h4 text-gray-700">
                        <p>
                            <span className="font-semibold text-gray-900">
                                Địa chỉ:
                            </span>{" "}
                            {renderAddress(distributor.address)}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-900">
                                Điện thoại:
                            </span>{" "}
                            <a
                                href={`tel:${formatPhoneLink(
                                    distributor.phone
                                )}`}
                                className="hover:text-vico-green transition-colors"
                                aria-label={`Gọi điện: ${distributor.phone}`}
                            >
                                {distributor.phone}
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-gray-900">
                                Người đại diện:
                            </span>{" "}
                            {distributor.representative}
                        </p>
                    </div>
                </address>
            </div>
        </div>
    );
}
