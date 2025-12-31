/**
 * ============================================================================
 * FOOTER DATA - Static data for Footer component
 * ============================================================================
 */

import {
    FacebookIcon,
    LazadaIcon,
    TiktokIcon,
    ShopeeIcon,
    DiscoverIcon,
    MastercardIcon,
    ApplePayIcon,
    VisaIcon,
    PayPalIcon,
} from "@/assets/icons";

// ========================================
// NAVIGATION DATA
// ========================================
export const footerNavigation = {
    aboutUs: {
        id: "aboutUs",
        title: "Về chúng tôi",
        links: [
            { title: "Câu chuyện Vicophar", path: "/cau-chuyen-vicophar" },
            { title: "Tin tức", path: "/tin-tuc-cong-ty" },
            { title: "Blog sức khỏe", path: "/blog-suc-khoe" },
            { title: "Sản phẩm", path: "/san-pham" },
            { title: "Liên hệ", path: "/lien-he" },
        ],
    },
    services: {
        id: "services",
        title: "Dịch vụ",
        links: [
            {
                title: "Tài khoản của tôi",
                path: "/legal-pages/tai-khoan-cua-toi",
            },
            { title: "Hòm thư góp ý", path: "/legal-pages/hom-thu-gop-y" },
            { title: "Yêu cầu hợp tác", path: "/legal-pages/yeu-cau-hop-tac" },
        ],
    },
    information: {
        id: "information",
        title: "Thông tin",
        links: [
            {
                title: "Điều khoản sử dụng",
                path: "/legal-pages/dieu-khoan-su-dung",
            },
            {
                title: "Chính sách bảo mật",
                path: "/legal-pages/chinh-sach-bao-mat",
            },
            {
                title: "Chính sách hoàn trả",
                path: "/legal-pages/chinh-sach-hoan-tra",
            },
            {
                title: "Chính sách vận chuyển",
                path: "/legal-pages/chinh-sach-van-chuyen",
            },
        ],
    },
};

// ========================================
// COMPANY INFO DATA
// ========================================
export const footerCompanyInfo = {
    main: {
        name: "CÔNG TY CỔ PHẦN VICOPHAR VIỆT NAM",
        address: [
            "133/38/21 Trần Thị Trọng, khu phố 8, P. Tân Sơn,",
            "TP HCM, Việt Nam",
        ],
        phone: "0333 152 545",
        email: "vicophar.hotline@gmail.com",
        licenseNumber: "0314828683, ngày cấp: 09/01/2018",
        licenseIssuedBy: "Sở Kế hoạch và Đầu tư thành phố Hồ Chí Minh",
    },
    distributor: {
        name: "CÔNG TY TNHH DƯỢC ĐẠI THỐNG",
        representative: "Võ Trần Trung Nghĩa",
        address: [
            "133/38/21 Trần Thị Trọng, khu phố 8, P. Tân Sơn,",
            "TP HCM, Việt Nam",
        ],
        phone: "0329 433 343",
    },
};

// ========================================
// SOCIAL LINKS DATA
// ========================================
export const footerSocial = {
    title: "KẾT NỐI VỚI CHÚNG TÔI",
    links: [
        {
            icon: FacebookIcon,
            name: "Facebook",
            url: "https://www.facebook.com/vicophar",
        },
        {
            icon: LazadaIcon,
            name: "Lazada",
            url: "https://www.lazada.vn/shop/vicophar-viet-nam",
        },
        {
            icon: TiktokIcon,
            name: "Tiktok",
            url: "https://www.tiktok.com/@vicophar_viet_nam",
        },
        {
            icon: ShopeeIcon,
            name: "Shopee",
            url: "https://shopee.vn/vicophar",
        },
    ],
};

// ========================================
// CERTIFICATION DATA
// ========================================
export const footerCertification = {
    src: "/imgs/footer/boongthuong.webp",
    alt: "Đã thông báo Bộ Công Thương",
    url: "http://online.gov.vn/Home/WebDetails/74555",
    width: 150,
    height: 57,
};

// ========================================
// PAYMENT METHODS DATA
// ========================================
export const footerPayment = {
    methods: [
        { name: "Discover", icon: DiscoverIcon },
        { name: "Mastercard", icon: MastercardIcon },
        { name: "Apple Pay", icon: ApplePayIcon },
        { name: "Visa", icon: VisaIcon },
        { name: "PayPal", icon: PayPalIcon },
    ],
};

// ========================================
// COPYRIGHT DATA
// ========================================
export const getFooterCopyright = (year) => ({
    text: `© 2018 - ${year} VICOPHAR. Designed by D.Mihh15.3`,
});
