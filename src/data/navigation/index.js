/**
 * NAVIGATION LINKS DATA
 *
 * Dữ liệu điều hướng chính cho website Vicophar
 * Bao gồm các menu chính và submenu với SEO-friendly URLs
 *
 * Cấu trúc:
 * - id: Unique identifier
 * - title: Tiêu đề hiển thị
 * - href: Đường dẫn URL
 * - description: Mô tả cho SEO
 * - keywords: Từ khóa liên quan
 * - priority: Thứ tự ưu tiên
 * - subLinks: Menu con (nếu có)
 */

/**
 * ============================================================================
 * DANH SÁCH MENU ĐIỀU HƯỚNG CHÍNH
 * ============================================================================
 *
 * Array chứa tất cả các menu items cho navigation bar
 * Mỗi item có thể có submenu (subLinks)
 *
 * CẤU TRÚC MỖI ITEM:
 * -----------------
 * {
 *   id: string - ID duy nhất cho menu item
 *   title: string - Tên hiển thị trên menu
 *   href: string - Đường dẫn URL (SEO-friendly)
 *   description: string - Mô tả cho SEO và accessibility
 *   keywords: array - Từ khóa liên quan cho SEO
 *   priority: number - Thứ tự ưu tiên (1-5)
 *   subLinks: array - Menu con (optional)
 * }
 *
 * MENU CHÍNH (5 ITEMS):
 * ---------------------
 * 1. Câu Chuyện Vicophar - Giới thiệu công ty
 * 2. Tin Tức - Tin tức công ty và ngành
 * 3. Góc Sức Khỏe - Kiến thức chăm sóc sức khỏe
 * 4. Sản Phẩm - Danh mục sản phẩm
 * 5. Liên Hệ - Thông tin liên hệ
 *
 * ============================================================================
 */

export const navLinks = [
    {
        id: "cau-chuyen-vicophar",
        title: "Câu Chuyện Vicophar",
        href: "/cau-chuyen-vicophar",
        description: "Tìm hiểu về lịch sử, sứ mệnh và tầm nhìn của Vicophar",
        keywords: ["về chúng tôi", "lịch sử vicophar", "sứ mệnh", "tầm nhìn"],
        priority: 1,
    },
    {
        id: "tin-tuc-cong-ty",
        title: "Tin Tức",
        href: "/tin-tuc-cong-ty",
        description: "Cập nhật tin tức mới nhất về dược phẩm và sức khỏe",
        keywords: ["tin tức", "bản tin", "cập nhật", "thông tin mới"],
        priority: 2,
        subLinks: [
            {
                id: "tin-tuc-cong-ty",
                title: "Tin Tức Công Ty",
                href: "/tin-tuc/cong-ty",
                description: "Tin tức về hoạt động và phát triển của Vicophar",
            },
            {
                id: "tin-tuc-nganh",
                title: "Tin Tức Ngành",
                href: "/tin-tuc/nganh",
                description: "Cập nhật tin tức ngành dược phẩm Việt Nam",
            },
        ],
    },
    {
        id: "goc-suc-khoe",
        title: "Góc Sức Khỏe",
        href: "/goc-suc-khoe",
        description: "Kiến thức và lời khuyên chăm sóc sức khỏe từ chuyên gia",
        keywords: ["sức khỏe", "chăm sóc", "lời khuyên", "kiến thức y tế"],
        priority: 3,
        subLinks: [
            {
                id: "cham-soc-gan",
                title: "Chăm Sóc Gan",
                href: "/goc-suc-khoe/cham-soc-gan",
                description: "Hướng dẫn chăm sóc và bảo vệ gan hiệu quả",
            },
            {
                id: "dinh-duong",
                title: "Dinh Dưỡng",
                href: "/goc-suc-khoe/dinh-duong",
                description: "Kiến thức về dinh dưỡng và thực phẩm chức năng",
            },
            {
                id: "suc-khoe-phu-nu",
                title: "Sức Khỏe Phụ Nữ",
                href: "/goc-suc-khoe/phu-nu",
                description: "Chăm sóc sức khỏe đặc biệt dành cho phụ nữ",
            },
        ],
    },
    {
        id: "san-pham",
        title: "Sản Phẩm",
        href: "/san-pham",
        description:
            "Khám phá các sản phẩm dược mỹ phẩm thiên nhiên của Vicophar",
        keywords: [
            "sản phẩm",
            "dược phẩm",
            "mỹ phẩm",
            "thiên nhiên",
            "thực phẩm chức năng",
        ],
        priority: 4,
        subLinks: [
            {
                id: "bo-gan",
                title: "Bổ Gan",
                href: "/san-pham/bo-gan",
                description: "Sản phẩm bổ gan từ thiên nhiên",
            },
            {
                id: "vitamin-khoang-chat",
                title: "Vitamin & Khoáng Chất",
                href: "/san-pham/vitamin-khoang-chat",
                description: "Vitamin và khoáng chất thiết yếu cho cơ thể",
            },
            {
                id: "my-pham-thien-nhien",
                title: "Mỹ Phẩm Thiên Nhiên",
                href: "/san-pham/my-pham-thien-nhien",
                description: "Mỹ phẩm từ thiên nhiên an toàn cho da",
            },
            {
                id: "thuc-pham-chuc-nang",
                title: "Thực Phẩm Chức Năng",
                href: "/san-pham/thuc-pham-chuc-nang",
                description: "Thực phẩm chức năng hỗ trợ sức khỏe",
            },
        ],
    },
    {
        id: "lien-he",
        title: "Liên Hệ",
        href: "/lien-he",
        description: "Thông tin liên hệ và hỗ trợ khách hàng Vicophar",
        keywords: ["liên hệ", "hỗ trợ", "tư vấn", "hotline", "địa chỉ"],
        priority: 5,
    },
];

/**
 * ============================================================================
 * HOME LINK - LINK TRANG CHỦ
 * ============================================================================
 *
 * Link riêng cho logo, trỏ về trang chủ
 * Sử dụng trong Logo component
 *
 * SỬ DỤNG:
 * --------
 * import { homeLink } from '@/data/navLinks'
 * <Link href={homeLink.href}>{homeLink.title}</Link>
 *
 * ============================================================================
 */

export const homeLink = {
    id: "home",
    title: "Trang Chủ Vicophar",
    href: "/",
    description: "Trang chủ Vicophar - Dược mỹ phẩm thiên nhiên Việt Nam",
    keywords: ["trang chủ", "vicophar", "dược mỹ phẩm", "thiên nhiên việt nam"],
};

/**
 * ============================================================================
 * UTILITY FUNCTIONS - HÀM TIỆN ÍCH
 * ============================================================================
 *
 * Các hàm helper để làm việc với navigation data
 *
 * ============================================================================
 */

/**
 * Tìm nav link theo ID
 * @param {string} id - ID của nav link cần tìm
 * @returns {object|undefined} - Nav link object hoặc undefined
 *
 * VÍ DỤ:
 * const link = getNavLinkById('san-pham')
 * console.log(link.title) // "Sản Phẩm"
 */
export const getNavLinkById = (id) => {
    return navLinks.find((link) => link.id === id);
};

/**
 * Tìm nav link theo href (URL path)
 * @param {string} href - Đường dẫn URL cần tìm
 * @returns {object|undefined} - Nav link object hoặc undefined
 *
 * VÍ DỤ:
 * const link = getNavLinkByHref('/san-pham')
 * console.log(link.title) // "Sản Phẩm"
 */
export const getNavLinkByHref = (href) => {
    return navLinks.find((link) => link.href === href);
};

/**
 * Lấy tất cả sublinks từ các menu chính
 * @returns {array} - Mảng chứa tất cả sublinks
 *
 * VÍ DỤ:
 * const subLinks = getAllSubLinks()
 * // Trả về: [Tin Tức Công Ty, Tin Tức Ngành, Chăm Sóc Gan, ...]
 *
 * SỬ DỤNG:
 * - Tạo sitemap
 * - Breadcrumb navigation
 * - Footer links
 */
export const getAllSubLinks = () => {
    return navLinks
        .filter((link) => link.subLinks)
        .flatMap((link) => link.subLinks);
};
