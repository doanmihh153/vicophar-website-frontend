/**
 * ============================================================================
 * NEWS PAGE - MOCK DATA
 * ============================================================================
 *
 * Mock data cho trang Tin tức công ty
 *
 * ============================================================================
 */

import mega3Content from "./articles/mega3-tre-em.json";

// Hero Banner
export const newsHeroBanner = {
    imageUrl: "/imgs/storyour/mockup-truck-vicophar-AI.png",
    altText: "Vicophar - Tin tức công ty",
};

// Categories - layout bên
export const newsCategories = [
    { id: "tat-ca", name: "Tất cả", count: 120 },
    { id: "khuyen-mai", name: "Khuyến mãi", count: 45 },
    { id: "san-pham-moi", name: "Sản phẩm mới", count: 30 },
    { id: "tri-lieu", name: "Trị liệu", count: 25 },
    { id: "tuyen-dung", name: "Tuyển dụng", count: 20 },
];

// Filter Tabs
export const newsFilterTabs = [
    { id: "tat-ca", label: "Tất cả" },
    { id: "khuyen-mai", label: "Khuyến mãi" },
    { id: "san-pham-moi", label: "Sản phẩm mới" },
];

// Main Articles
export const newsArticles = [
    {
        id: "NEWS001",
        title: "18 tuần là mấy tháng? Thai 18 tuần tuổi phát triển ra sao và mẹ bầu cần lưu ý gì?",
        description:
            "Thai 18 tuần tuổi đang trong giai đoạn phát triển quan trọng. Mẹ bầu cần chú ý dinh dưỡng và chăm sóc sức khỏe đúng cách...",
        content: mega3Content,
        image: "/imgs/home-page/blogs/baivietnewnhat.png",
        category: "Trị liệu",
        categorySlug: "tri-lieu",
        date: "04/06/2025",
        author: "Vicophar",
        slug: "18-tuan-la-may-thang",
        link: "/tin-tuc-cong-ty/tri-lieu/18-tuan-la-may-thang",
        isFeatured: true,
        // Product Sticky Card - Controlled by Dashboard
        // Chỉ lưu productId, data sẽ lookup từ mockProducts.js
        linkedProduct: {
            enabled: true,
            productId: 1, // ID từ featuredProducts (GIẢI ĐỘC GAN ACTIVELIVER)
        },
    },
    {
        id: "NEWS002",
        title: "Liệu bạn có thực mắc: Cú ớn xong là buồn nôn có phải có thai không?",
        description:
            "Đây là câu hỏi mà nhiều chị em thắc mắc. Hãy cùng tìm hiểu về các dấu hiệu mang thai sớm...",
        content: mega3Content,
        image: "/imgs/home-page/blogs/baivietso1.png",
        category: "Sản phẩm mới",
        categorySlug: "san-pham-moi",
        date: "03/06/2025",
        author: "Vicophar",
        slug: "cu-on-xong-buon-non",
        link: "/tin-tuc-cong-ty/san-pham-moi/cu-on-xong-buon-non",
    },
    {
        id: "NEWS003",
        title: "Có thai bao lâu thì đau bụng dưới? Cách giảm đau an toàn cho mẹ",
        description:
            "Đau bụng dưới là triệu chứng phổ biến khi mang thai. Tìm hiểu nguyên nhân và cách giảm đau hiệu quả...",
        content: mega3Content,
        image: "/imgs/home-page/blogs/baivietso2.png",
        category: "Khuyến mãi",
        categorySlug: "khuyen-mai",
        date: "02/06/2025",
        author: "Vicophar",
        slug: "co-thai-bao-lau-dau-bung",
        link: "/tin-tuc-cong-ty/khuyen-mai/co-thai-bao-lau-dau-bung",
    },
    {
        id: "NEWS004",
        title: "Siêu Sale Ngày Đôi - Giảm Giá Lên Đến 50% Toàn Bộ Sản Phẩm",
        description:
            "Chương trình khuyến mãi lớn nhất trong năm. Voucher 25.000đ, mua 2 tặng 1 và nhiều ưu đãi hấp dẫn...",
        content: mega3Content,
        image: "/imgs/home-page/blogs/baivietso3.png",
        category: "Khuyến mãi",
        categorySlug: "khuyen-mai",
        date: "01/06/2025",
        author: "Vicophar",
        slug: "sieu-sale-ngay-doi",
        link: "/tin-tuc-cong-ty/khuyen-mai/sieu-sale-ngay-doi",
    },
    {
        id: "NEWS005",
        title: "Đón Mẹ siêu rực rỡ với hàng ngàn deal giảm giá hấp dẫn từ Vicophar",
        description:
            "Nhân dịp lễ, Vicophar tri ân các mẹ bằng chương trình ưu đãi đặc biệt với hàng ngàn sản phẩm...",
        content: mega3Content,
        image: "/imgs/home-page/blogs/baivietso4.png",
        category: "Khuyến mãi",
        categorySlug: "khuyen-mai",
        date: "31/05/2025",
        author: "Vicophar",
        slug: "don-me-sieu-ruc-ro",
        link: "/tin-tuc-cong-ty/khuyen-mai/don-me-sieu-ruc-ro",
    },
    {
        id: "NEWS006",
        title: "Giải pháp cho trẻ có sức đề kháng kém: Cú ớn xong là buồn nôn",
        description:
            "Sức đề kháng kém là vấn đề phổ biến ở trẻ nhỏ. Tìm hiểu nguyên nhân và giải pháp cải thiện...",
        content: mega3Content,
        image: "/imgs/home-page/blogs/baivietnewnhat.png",
        category: "Trị liệu",
        categorySlug: "tri-lieu",
        date: "30/05/2025",
        author: "Vicophar",
        slug: "giai-phap-tre-de-khang-kem",
        link: "/tin-tuc-cong-ty/tri-lieu/giai-phap-tre-de-khang-kem",
    },
    {
        id: "NEWS007",
        title: "Tuyển dụng Dược sĩ - Mức lương hấp dẫn",
        description:
            "Vicophar tuyển dụng Dược sĩ với mức lương cạnh tranh và nhiều chế độ đãi ngộ hấp dẫn...",
        content: mega3Content,
        image: "/imgs/home-page/blogs/baivietso1.png",
        category: "Tuyển dụng",
        categorySlug: "tuyen-dung",
        date: "29/05/2025",
        author: "Vicophar",
        slug: "tuyen-duoc-si-luong-hap-dan",
        link: "/tin-tuc-cong-ty/tuyen-dung/tuyen-duoc-si-luong-hap-dan",
    },
];

// Featured Articles by Category
export const featuredArticlesByCategory = {
    "khuyen-mai": {
        title: "TIN KHUYẾN MÃI",
        articles: [
            {
                id: "f1",
                title: "Siêu Sale Ngày Đôi - Giảm Giá Lên Đến 50% Toàn Bộ Sản Phẩm",
                image: "/imgs/news/promo-1.jpg",
                date: "04.06",
                link: "/tin-tuc/sieu-sale-ngay-doi",
            },
            {
                id: "f2",
                title: "Đón Mẹ siêu rực rỡ với hàng ngàn deal giảm giá",
                image: "/imgs/news/promo-2.jpg",
                date: "03.06",
                link: "/tin-tuc/don-me-sieu-ruc-ro",
            },
            {
                id: "f3",
                title: "Mua 1 tặng 1 - Ưu đãi đặc biệt tháng 6",
                image: "/imgs/news/promo-3.jpg",
                date: "02.06",
                link: "/tin-tuc/mua-1-tang-1",
            },
        ],
    },
    "tri-lieu": {
        title: "TIN TRị LIỆU VICOPHAR",
        articles: [
            {
                id: "t1",
                title: "Mẹo chăm sóc trẻ bị ho khan hiệu quả tại nhà",
                image: "/imgs/news/treatment-1.jpg",
                date: "04.06",
                link: "/tin-tuc/cham-soc-tre-ho-khan",
            },
            {
                id: "t2",
                title: "Cách tăng cường sức đề kháng cho trẻ",
                image: "/imgs/news/treatment-2.jpg",
                date: "03.06",
                link: "/tin-tuc/tang-cuong-de-khang",
            },
            {
                id: "t3",
                title: "Dinh dưỡng cho bà bầu trong 3 tháng đầu",
                image: "/imgs/news/treatment-3.jpg",
                date: "02.06",
                link: "/tin-tuc/dinh-duong-ba-bau",
            },
        ],
    },
    "tuyen-dung": {
        title: "TIN TUYỂN DỤNG",
        articles: [
            {
                id: "r1",
                title: "Tuyển dụng Dược sĩ - Mức lương hấp dẫn",
                image: "/imgs/news/recruitment-1.jpg",
                date: "04.06",
                link: "/tin-tuc/tuyen-duoc-si",
            },
            {
                id: "r2",
                title: "Cơ hội việc làm tại Vicophar - Môi trường chuyên nghiệp",
                image: "/imgs/news/recruitment-2.jpg",
                date: "03.06",
                link: "/tin-tuc/co-hoi-viec-lam",
            },
        ],
    },
};
