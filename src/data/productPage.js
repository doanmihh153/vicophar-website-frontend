/**
 * ============================================================================
 * MOCK DATA - PRODUCT MASTER PAGE
 * ============================================================================
 */

import { featuredProducts } from "./mockProducts";

/**
 * HERO BANNER
 */
export const productHeroBanner = {
    title: "Sản Phẩm Vicophar",
    imageUrl: "/imgs/banner-slider/banner1.jpg", // Using existing banner
    altText: "Sản phẩm Vicophar Việt Nam",
};

/**
 * DANH MỤC SẢN PHẨM
 */
export const productCategories = [
    { id: "all", name: "Tất cả sản phẩm", slug: "all", link: "/san-pham" },
    {
        id: "cat-1",
        name: "Hỗ trợ tiêu hoá",
        slug: "ho-tro-tieu-hoa",
        link: "/san-pham/ho-tro-tieu-hoa",
    },
    {
        id: "cat-2",
        name: "Bổ sung vitamin và khoáng chất",
        slug: "bo-sung-vitamin-va-khoang-chat",
        link: "/san-pham/bo-sung-vitamin-va-khoang-chat",
    },
    {
        id: "cat-3",
        name: "Hỗ trợ hô hấp",
        slug: "ho-tro-ho-hap",
        link: "/san-pham/ho-tro-ho-hap",
    },
    {
        id: "cat-4",
        name: "Hỗ trợ gan và thận",
        slug: "ho-tro-gan-va-than",
        link: "/san-pham/ho-tro-gan-va-than",
    },
    {
        id: "cat-5",
        name: "Hỗ trợ tim mạch",
        slug: "ho-tro-tim-mach",
        link: "/san-pham/ho-tro-tim-mach",
    },
    {
        id: "cat-6",
        name: "Hỗ trợ xương khớp",
        slug: "ho-tro-xuong-khop",
        link: "/san-pham/ho-tro-xuong-khop",
    },
    {
        id: "cat-7",
        name: "Hỗ trợ tăng cường miễn dịch",
        slug: "ho-tro-tang-cuong-mien-dich",
        link: "/san-pham/ho-tro-tang-cuong-mien-dich",
    },
    {
        id: "cat-8",
        name: "Hỗ trợ sinh lý",
        slug: "ho-tro-sinh-ly",
        link: "/san-pham/ho-tro-sinh-ly",
    },
    {
        id: "cat-9",
        name: "Hỗ trợ làm đẹp",
        slug: "ho-tro-lam-dep",
        link: "/san-pham/ho-tro-lam-dep",
    },
    {
        id: "cat-10",
        name: "Hỗ trợ giấc ngủ và thần kinh",
        slug: "ho-tro-giac-ngu-va-than-kinh",
        link: "/san-pham/ho-tro-giac-ngu-va-than-kinh",
    },
];

/**
 * DANH SÁCH SẢN PHẨM (Mở rộng từ featuredProducts để có nhiều data hơn)
 */
// Generate products list
export const allProducts = [
    ...featuredProducts,
    // Add some duplicates for filtering demo if needed, but preserve original logic or create new IDs
    ...featuredProducts.map((p) => ({
        ...p,
        id: p.id + 100,
        title: `${p.title} (NEW)`,
        slug: `${p.slug}-new`, // Update slug to be unique
    })),
    ...featuredProducts.map((p) => ({
        ...p,
        id: p.id + 200,
        title: `${p.title} (PRO)`,
        slug: `${p.slug}-pro`, // Update slug to be unique
    })),
];

/**
 * UTILS
 */
export const getCategoryBySlug = (slug) => {
    return productCategories.find((c) => c.slug === slug);
};

export const getProductsByCategory = (slug) => {
    if (!slug || slug === "all") return allProducts;
    return allProducts.filter((p) => p.categorySlug === slug);
};
