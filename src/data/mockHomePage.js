/**
 * ============================================================================
 * MOCK DATA - TRANG CHỦ VICOPHAR
 * ============================================================================
 *
 * File chứa tất cả mock data cho trang chủ
 * Bao gồm: Hero banners, sản phẩm nổi bật, testimonials, etc.
 *
 * SỬ DỤNG:
 * --------
 * import { heroBanners, featuredProducts } from '@/data/mockHomePage';
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * HERO BANNERS - SLIDER TRANG CHỦ
 * ============================================================================
 *
 * Danh sách 5 banner cho hero section slider
 * Ảnh nằm trong: /public/imgs/banner-slider/
 *
 * CẤU TRÚC:
 * ---------
 * {
 *   id: string - ID duy nhất
 *   image: string - Đường dẫn ảnh (relative to /public)
 *   alt: string - Alt text cho SEO
 *   title: string - Tiêu đề banner (optional)
 *   description: string - Mô tả ngắn (optional)
 *   link: string - Link khi click vào banner (optional)
 * }
 *
 * ============================================================================
 */

export const heroTopBanner = {
    id: "top-banner-1",
    image: "/imgs/banner-slider/banner1.jpg",
    alt: "Banner quảng cáo Full Width",
    link: "#",
};

export const heroBanners = [
    {
        id: "banner-1",
        image: "/imgs/banner-slider/banner1.jpg",
        alt: "Vicophar - Sản phẩm chăm sóc sức khỏe từ thiên nhiên",
        title: "Chăm Sóc Sức Khỏe Toàn Diện",
        description:
            "Sản phẩm dược mỹ phẩm từ thiên nhiên, an toàn và hiệu quả",
        link: "/san-pham",
        priority: true,
    },
    {
        id: "banner-2",
        image: "/imgs/banner-slider/banner2.jpg",
        alt: "Vicophar - Thực phẩm chức năng cao cấp",
        title: "Thực Phẩm Chức Năng Cao Cấp",
        description: "Bổ sung dinh dưỡng thiết yếu cho cơ thể khỏe mạnh",
        link: "/san-pham/thuc-pham-chuc-nang",
    },
    {
        id: "banner-3",
        image: "/imgs/banner-slider/banner.webp",
        alt: "Vicophar - Mỹ phẩm thiên nhiên",
        title: "Mỹ Phẩm Thiên Nhiên",
        description: "Làm đẹp an toàn với chiết xuất từ thiên nhiên",
        link: "/san-pham/my-pham-thien-nhien",
    },
    {
        id: "banner-4",
        image: "/imgs/banner-slider/banner.webp",
        alt: "Vicophar - Sản phẩm bổ gan",
        title: "Bảo Vệ Gan Khỏe Mạnh",
        description: "Giải pháp bổ gan hiệu quả từ thiên nhiên",
        link: "/san-pham/bo-gan",
    },
    {
        id: "banner-5",
        image: "/imgs/banner-slider/tesz-01.webp",
        alt: "Vicophar - Vitamin và khoáng chất",
        title: "Vitamin & Khoáng Chất",
        description: "Bổ sung vitamin và khoáng chất thiết yếu hàng ngày",
        link: "/san-pham/vitamin-khoang-chat",
    },
];

/**
 * ============================================================================
 * HERO SIDE BANNERS - BANNER PHỤ BÊN PHẢI
 * ============================================================================
 *
 * 2 Banner tĩnh hiển thị bên phải Hero Slider trên Desktop
 * Tỉ lệ: ~389x143 (x2 banner)
 *
 * ============================================================================
 */
export const heroSideBanners = [
    {
        id: "side-banner-1",
        image: "/imgs/banner-slider/test-tiep-01.webp",
        alt: "Khuyến mãi đặc biệt 1",
        link: "/khuyen-mai-1",
    },
    {
        id: "side-banner-2",
        image: "/imgs/banner-slider/test-size-mini-01.webp",
        alt: "Khuyến mãi đặc biệt 2",
        link: "/khuyen-mai-2",
    },
];

/**
 * ============================================================================
 * SẢN PHẨM NỔI BẬT - FEATURED PRODUCTS
 * ============================================================================
 *
 * Danh sách sản phẩm nổi bật hiển thị trong UserTestimonialsSection
 * Carousel horizontal với navigation buttons và category filter
 *
 * CẤU TRÚC:
 * ---------
 * {
 *   id: number - ID duy nhất
 *   title: string - Tên sản phẩm (UPPERCASE)
 *   description: string - Mô tả ngắn gọn
 *   image: string - Đường dẫn ảnh sản phẩm (relative to /public)
 *   link: string - URL đến trang chi tiết sản phẩm
 *   isBestSeller: boolean - Hiển thị badge "Bán chạy"
 *   category: string - Danh mục sản phẩm
 * }
 *
 * CATEGORIES:
 * -----------
 * - "featured": Sản phẩm nổi bật
 * - "kids": Phát triển toàn diện cho trẻ nhỏ
 * - "liver-heart": Gan sạch, tim khỏe
 * - "respiratory": Hô hấp khỏe mạnh
 *
 * API MAPPING (Khi có API):
 * -------------------------
 * - Endpoint: GET /api/products/featured?category={category}
 * - Response: Array of products
 * - Filter: products.filter(p => p.isFeatured === true && p.category === category)
 *
 * ============================================================================
 */

import { featuredProducts, featuredCategories } from "./mockProducts";

/**
 * ============================================================================
 * SẢN PHẨM NỔI BẬT - FEATURED PRODUCTS
 * ============================================================================
 *
 * Danh sách sản phẩm nổi bật hiển thị trong UserTestimonialsSection
 *
 * IMPORTED FROM: src/data/mockProducts.js
 */
export { featuredProducts };

/**
 * ============================================================================
 * DANH MỤC NỔI BẬT - FEATURED CATEGORIES
 * ============================================================================
 *
 * IMPORTED FROM: src/data/mockProducts.js
 */
export { featuredCategories };

/**
 * ============================================================================
 * TESTIMONIALS - ĐÁNH GIÁ KHÁCH HÀNG
 * ============================================================================
 *
 * Đánh giá từ khách hàng sử dụng sản phẩm Vicophar
 *
 * ============================================================================
 */

export const testimonials = [
    {
        id: "testimonial-1",
        name: "Nguyễn Thị Lan",
        avatar: "/imgs/avatars/user1.jpg",
        rating: 5,
        comment:
            "Sản phẩm rất tốt, tôi đã sử dụng được 3 tháng và cảm thấy sức khỏe cải thiện rõ rệt.",
        product: "Aquatop Plus",
        date: "2024-10-15",
    },
    {
        id: "testimonial-2",
        name: "Trần Văn Minh",
        avatar: "/imgs/avatars/user2.jpg",
        rating: 5,
        comment:
            "Giao hàng nhanh, sản phẩm chất lượng. Tôi rất hài lòng với dịch vụ của Vicophar.",
        product: "Thủy Mẫu Gold",
        date: "2024-10-20",
    },
    {
        id: "testimonial-3",
        name: "Lê Thị Hương",
        avatar: "/imgs/avatars/user3.jpg",
        rating: 4,
        comment:
            "Sản phẩm tốt, giá cả hợp lý. Tôi sẽ tiếp tục sử dụng và giới thiệu cho bạn bè.",
        product: "Aquatop Vitamin",
        date: "2024-10-25",
    },
];

/**
 * ============================================================================
 * ABOUT US - VỀ CHÚNG TÔI
 * ============================================================================
 *
 * Nội dung về Vicophar - sẽ được render từ HTML của TipTap editor
 * Trong dashboard, admin có thể chỉnh sửa nội dung này
 *
 * CẤU TRÚC:
 * ---------
 * {
 *   id: string - ID duy nhất
 *   title: string - Tiêu đề H1
 *   content: string - Nội dung HTML từ TipTap (có thể chứa <p>, <strong>, <br>, etc.)
 *   ctaText: string - Text của nút CTA
 *   ctaLink: string - Link của nút CTA
 *   image: string - Ảnh minh họa (optional)
 * }
 *
 * ============================================================================
 */

export const aboutUsData = {
    id: "about-us-home",
    title: "Về chúng tôi",
    // Nội dung HTML từ TipTap - Admin có thể chỉnh sửa trong dashboard
    content: `
        <p>Vicophar là thương hiệu Dược mỹ phẩm ra đời từ năm 2018. Được thành lập bởi tập hợp những con người yêu cây thuốc Việt và trân trọng giá trị y học cổ truyền.</p>
        
        <p>Chúng tôi không ngừng nghiên cứu, cải tiến sản phẩm ngày một tốt hơn, kết hợp giữa cổ truyền với công nghệ hiện đại. Nhằm mang đến các sản phẩm chất lượng, an toàn và hiệu quả trong hỗ trợ điều trị và nâng cao sức khỏe người Việt.</p>
        
        <p>Vicophar hướng đến trở thành thương hiệu Dược mỹ phẩm Việt Nam tiên phong trong việc ứng dụng dược liệu truyền thống kết hợp công nghệ hiện đại, góp phần nâng tầm giá trị cây thuốc Việt Nam và chăm sóc sức khỏe cộng đồng một cách bền vững.</p>
    `,
    ctaText: "Tìm hiểu thêm",
    ctaLink: "/cau-chuyen-vicophar", // Link đến trang "Câu chuyện của chúng tôi"
    image: "/imgs/home-page/hero-slide.png", // Ảnh minh họa (optional)
};

/**
 * ============================================================================
 * ABOUT US FEATURES - ĐẶC ĐIỂM NỔI BẬT
 * ============================================================================
 *
 * 3 đặc điểm nổi bật của Vicophar (hiển thị dưới phần About Us)
 * Mỗi feature có ảnh nền và tiêu đề
 *
 * ============================================================================
 */

export const aboutUsFeatures = [
    {
        id: "feature-1",
        title: "Chiết xuất dược liệu sạch Đạt Chuẩn TCCS",
        image: "/imgs/about-us/feature-1.jpg",
        alt: "Chiết xuất dược liệu sạch đạt chuẩn TCCS",
    },
    {
        id: "feature-2",
        title: "Phù hợp với mọi đối tượng",
        image: "/imgs/about-us/feature-2.jpg",
        alt: "Sản phẩm phù hợp với mọi đối tượng",
    },
    {
        id: "feature-3",
        title: "Sản xuất trên dây chuyền đạt chuẩn GMP",
        image: "/imgs/about-us/feature-3.jpg",
        alt: "Sản xuất đạt chuẩn GMP",
    },
];

/**
 * ============================================================================
 * ABOUT US CAROUSEL - SLIDER ẢNH VỀ CHÚNG TÔI
 * ============================================================================
 *
 * Carousel hiển thị 5 hình ảnh về Vicophar
 * Tỉ lệ gốc: 1180:446
 * Auto scroll + manual navigation
 * Lazy loading
 *
 * ============================================================================
 */

export const aboutUsCarousel = [
    {
        id: "about-slide-1",
        image: "/imgs/home-page/hero-slide.png",
        alt: "Vicophar - Nhà máy sản xuất hiện đại",
        title: "Nhà máy sản xuất hiện đại",
        description: "Dây chuyền sản xuất đạt chuẩn GMP quốc tế",
        priority: true,
    },
    {
        id: "about-slide-2",
        image: "/imgs/home-page/hero-slide.png",
        alt: "Vicophar - Nghiên cứu và phát triển",
        title: "Nghiên cứu và phát triển",
        description: "Đội ngũ R&D chuyên nghiệp với nhiều năm kinh nghiệm",
    },
    {
        id: "about-slide-3",
        image: "/imgs/home-page/hero-slide.png",
        alt: "Vicophar - Kiểm soát chất lượng",
        title: "Kiểm soát chất lượng",
        description: "Hệ thống kiểm soát chất lượng nghiêm ngặt",
    },
    {
        id: "about-slide-4",
        image: "/imgs/home-page/hero-slide.png",
        alt: "Vicophar - Đội ngũ chuyên gia",
        title: "Đội ngũ chuyên gia",
        description: "Các chuyên gia hàng đầu trong lĩnh vực dược phẩm",
    },
    {
        id: "about-slide-5",
        image: "/imgs/home-page/hero-slide.png",
        alt: "Vicophar - Cam kết chất lượng",
        title: "Cam kết chất lượng",
        description: "Luôn đặt chất lượng sản phẩm lên hàng đầu",
    },
];

/**
 * ============================================================================
 * ABOUT US FADE SLIDER - SLIDER ẢNH VỚI HIỆU ỨNG FADE (NEW)
 * ============================================================================
 *
 * Slider với hiệu ứng Fade cho section About Us
 * Bao gồm cả Background và Banner (Dual Layer)
 * Tối đa 3 slides để tối ưu performance
 *
 * CẤU TRÚC:
 * ---------
 * {
 *   id: string - ID duy nhất
 *   banner: {
 *     desktop: string - Ảnh banner desktop (1216x280)
 *     mobile: string - Ảnh banner mobile (375x156)
 *     alt: string - Alt text cho SEO
 *   }
 *   background: {
 *     desktop: string - Ảnh background desktop (1440x704)
 *     mobile: string - Ảnh background mobile (375x316)
 *   }
 * }
 *
 * ============================================================================
 */

export const aboutUsSliderData = [
    {
        id: "about-fade-1",
        banner: {
            desktop: "/imgs/banner-slider/banner.webp",
            mobile: "/imgs/banner-slider/test-size-mini-01.webp",
            alt: "Vicophar - Khuyến mãi đặc biệt 1",
        },
    },
    {
        id: "about-fade-2",
        banner: {
            desktop: "/imgs/banner-slider/banner1.jpg",
            mobile: "/imgs/banner-slider/test-tiep-01.webp",
            alt: "Vicophar - Khuyến mãi đặc biệt 2",
        },
    },
    {
        id: "about-fade-3",
        banner: {
            desktop: "/imgs/banner-slider/tesz-01.webp",
            mobile: "/imgs/banner-slider/test-tiep-ne-01.webp",
            alt: "Vicophar - Khuyến mãi đặc biệt 3",
        },
    },
];

/**
 * ============================================================================
 * STATS - THỐNG KÊ VICOPHAR
 * ============================================================================
 *
 * Các con số thống kê về Vicophar
 * Hiển thị trong section "Về chúng tôi"
 *
 * ============================================================================
 */

export const stats = [
    {
        id: "stat-1",
        number: "7+",
        label: "Năm Kinh Nghiệm",
        icon: "calendar",
        description: "Từ năm 2018 đến nay",
    },
    {
        id: "stat-2",
        number: "50+",
        label: "Sản Phẩm",
        icon: "product",
        description: "Đa dạng sản phẩm chăm sóc sức khỏe",
    },
    {
        id: "stat-3",
        number: "10K+",
        label: "Khách Hàng Tin Dùng",
        icon: "users",
        description: "Khách hàng hài lòng",
    },
    {
        id: "stat-4",
        number: "100+",
        label: "Nhà Thuốc Đối Tác",
        icon: "store",
        description: "Trên toàn quốc",
    },
];

/**
 * ============================================================================
 * UTILITY FUNCTIONS
 * ============================================================================
 */

/**
 * Lấy banner theo ID
 * @param {string} id - ID của banner
 * @returns {object|undefined} Banner object hoặc undefined
 */
export const getBannerById = (id) => {
    return heroBanners.find((banner) => banner.id === id);
};

/**
 * Lấy tất cả banner images (chỉ đường dẫn)
 * @returns {array} Mảng đường dẫn ảnh
 */
export const getBannerImages = () => {
    return heroBanners.map((banner) => banner.image);
};

/**
 * Lấy danh mục theo ID
 * @param {string} id - ID của danh mục
 * @returns {object|undefined} Category object hoặc undefined
 */
export const getCategoryById = (id) => {
    return featuredCategories.find((cat) => cat.id === id);
};

/**
 * ============================================================================
 * GÓC SỨC KHỎE - HEALTH CORNER
 * ============================================================================
 *
 * Danh sách bài viết sức khỏe hiển thị ở trang chủ
 *
 * CẤU TRÚC:
 * ---------
 * {
 *   id: number
 *   title: string
 *   description: string
 *   image: string
 *   link: string
 *   isFeatured: boolean - Bài viết nổi bật (hiển thị to bên trái)
 * }
 */
export const healthArticles = [
    // BÀI VIẾT NỔI BẬT (FEATURED)
    {
        id: 1,
        title: "18 tuần là mấy tháng? Thai 18 tuần tuổi phát triển ra sao và mẹ bầu cần lưu ý gì?",
        description:
            "Bước vào tuần thứ 18, nhiều mẹ bầu băn khoăn không biết 18 tuần là mấy tháng và em bé đã phát triển đến đâu, cơ thể mình sẽ thay đổi thế nào. Bài viết này giúp bạn hiểu rõ hơn về sự phát triển của thai nhi 18 tuần, những thay đổi của mẹ, các dấu hiệu thai khỏe mạnh và cách chăm sóc tốt nhất trong giai đoạn này.",
        image: "/imgs/home-page/blogs/baivietnewnhat.png",
        link: "/blog/18-tuan-la-may-thang",
        isFeatured: true,
        category: "Tin truyền thông",
    },
    // DANH SÁCH BÀI VIẾT (LIST)
    {
        id: 2,
        title: "Liệu bạn có thắc mắc: Cứ ăn xong là buồn nôn có phải có thai không?",
        description:
            "Có những lúc cảm giác sau bữa ăn khiến ta bối rối và phải thầm hỏi cứ ăn xong là buồn nôn có phải có thai không. Trong một số trường hợp...",
        image: "/imgs/home-page/blogs/baivietso1.png",
        link: "/blog/cu-an-xong-la-buon-non",
        isFeatured: false,
        category: "Tin truyền thông",
    },
    {
        id: 3,
        title: "Cắt polyp đại tràng có phải kiêng quan hệ không? Những điều cần biết",
        description:
            "Cắt polyp đại tràng là một thủ thuật y khoa hiện đại và tương đối an toàn, nhưng quá trình hồi phục đòi hỏi sự cẩn trọng để tránh biến chứng...",
        image: "/imgs/home-page/blogs/baivietso2.png",
        link: "/blog/cat-polyp-dai-trang",
        isFeatured: false,
        category: "Tin truyền thông",
    },
    {
        id: 4,
        title: "Nắn chỉnh xương khớp giá bao nhiêu? Quy trình nắn chỉnh xương khớp ra sao?",
        description:
            "Nắn chỉnh xương khớp đang dần trở thành một trong những liệu pháp hỗ trợ điều trị và cải thiện sức khỏe cơ-xương-khớp được nhiều người quan tâm...",
        image: "/imgs/home-page/blogs/baivietso3.png",
        link: "/blog/nan-chinh-xuong-khop",
        isFeatured: false,
        category: "Tin truyền thông",
    },
    {
        id: 5,
        title: "Có thai bao lâu thì đau bụng dưới? Cách giảm đau an toàn cho mẹ.",
        description:
            "Có thai bao lâu thì đau bụng dưới còn tùy thuộc vào cơ địa mỗi người, nhưng thường xuất hiện từ tuần thứ 4 đến tuần 6 của thai kỳ...",
        image: "/imgs/home-page/blogs/baivietso4.png",
        link: "/blog/co-thai-bao-lau-thi-dau-bung",
        isFeatured: false,
        category: "Sống khỏe",
    },
    // BÀI VIẾT MỚI THÊM CHO LAYOUT 4-4-4
    {
        id: 6,
        title: "Mất ngủ, ngủ không sâu giấc đang trở thành tình trạng phổ biến ở...",
        description:
            "Mất ngủ là vấn đề sức khỏe phổ biến của người hiện đại. Tìm hiểu nguyên nhân và cách khắc phục hiệu quả để có giấc ngủ ngon...",
        image: "/imgs/home-page/blogs/baivietso1.png",
        link: "/blog/mat-ngu-ngu-khong-sau-giac",
        isFeatured: false,
        category: "Sống khỏe",
    },
    {
        id: 7,
        title: "Hướng dẫn tra cứu thông tin thực phẩm chức năng với website...",
        description:
            "Thời gian gần đây, không ít người dân cảm thấy hoang mang khi tìm hiểu về thực phẩm chức năng. Bài viết hướng dẫn cách tra cứu chính xác...",
        image: "/imgs/home-page/blogs/baivietso2.png",
        link: "/blog/huong-dan-tra-cuu-thuc-pham-chuc-nang",
        isFeatured: false,
        category: "Sống khỏe",
    },
];
