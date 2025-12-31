/**
 * ============================================================================
 * MOCK BLOGS DATA - VICOPHAR
 * ============================================================================
 *
 * Fake API cho danh sách bài viết/tin tức
 * Dùng để test và demo gợi ý tìm kiếm
 *
 * STRUCTURE:
 * ----------
 * - id: Mã bài viết
 * - title: Tiêu đề bài viết
 * - excerpt: Mô tả ngắn
 * - image: Đường dẫn ảnh thumbnail
 * - category: Danh mục (Tin tức, Sức khỏe, Làm đẹp...)
 * - author: Tác giả
 * - publishDate: Ngày đăng
 * - readTime: Thời gian đọc (phút)
 *
 * ============================================================================
 */

// Base path cho ảnh bài viết (tạm dùng ảnh products)
const basePath = "/imgs/products/";

/**
 * DANH SÁCH BÀI VIẾT MOCK
 * Lặp lại 2 ảnh có sẵn với nội dung khác nhau
 */
export const mockBlogs = [
    {
        id: "BLOG001",
        title: "Bổ sung khoáng chất đúng cách cho cơ thể khỏe mạnh",
        excerpt: "Hướng dẫn chi tiết cách bổ sung khoáng chất thiết yếu...",
        image: `${basePath}aquatop.png`,
        category: "Sức khỏe",
        author: "BS. Nguyễn Văn A",
        publishDate: "2024-11-01",
        readTime: 5,
    },
    {
        id: "BLOG002",
        title: "Top 5 sản phẩm chăm sóc da được yêu thích nhất 2024",
        excerpt: "Khám phá những sản phẩm làm đẹp hot nhất năm...",
        image: `${basePath}thuymau.png`,
        category: "Làm đẹp",
        author: "Phạm Thị B",
        publishDate: "2024-10-28",
        readTime: 7,
    },
    {
        id: "BLOG003",
        title: "Vitamin tổng hợp: Lợi ích và cách sử dụng hiệu quả",
        excerpt: "Tìm hiểu về vai trò của vitamin trong cơ thể...",
        image: `${basePath}aquatop.png`,
        category: "Dinh dưỡng",
        author: "TS. Trần Văn C",
        publishDate: "2024-10-25",
        readTime: 6,
    },
    {
        id: "BLOG004",
        title: "Bí quyết làm đẹp da từ bên trong với Collagen",
        excerpt: "Collagen là gì và tại sao nó quan trọng cho làn da...",
        image: `${basePath}thuymau.png`,
        category: "Làm đẹp",
        author: "Lê Thị D",
        publishDate: "2024-10-20",
        readTime: 8,
    },
    {
        id: "BLOG005",
        title: "Chăm sóc sức khỏe trẻ em: Những điều cha mẹ cần biết",
        excerpt: "Hướng dẫn toàn diện về dinh dưỡng và sức khỏe trẻ nhỏ...",
        image: `${basePath}aquatop.png`,
        category: "Trẻ em",
        author: "BS. Hoàng Văn E",
        publishDate: "2024-10-15",
        readTime: 10,
    },
    {
        id: "BLOG006",
        title: "Làm trắng da an toàn: Phương pháp và sản phẩm hiệu quả",
        excerpt: "Cách làm trắng da đúng cách, không gây hại...",
        image: `${basePath}thuymau.png`,
        category: "Làm đẹp",
        author: "Nguyễn Thị F",
        publishDate: "2024-10-10",
        readTime: 6,
    },
    {
        id: "BLOG007",
        title: "Tăng cường sức đề kháng mùa dịch với thực phẩm chức năng",
        excerpt: "Những sản phẩm giúp tăng cường hệ miễn dịch...",
        image: `${basePath}aquatop.png`,
        category: "Sức khỏe",
        author: "BS. Vũ Văn G",
        publishDate: "2024-10-05",
        readTime: 7,
    },
    {
        id: "BLOG008",
        title: "Serum dưỡng da: Cách chọn và sử dụng đúng cách",
        excerpt: "Hướng dẫn chi tiết về serum và quy trình skincare...",
        image: `${basePath}thuymau.png`,
        category: "Làm đẹp",
        author: "Trần Thị H",
        publishDate: "2024-09-30",
        readTime: 9,
    },
];

/**
 * SEARCH BLOGS - Smart Search với Tiered Matching
 * Luôn trả về kết quả, không bao giờ rỗng.
 *
 * Ưu tiên matching:
 * 1. Exact match (title = keyword)
 * 2. Prefix match (title bắt đầu bằng keyword)
 * 3. Partial match (title/excerpt/category chứa keyword)
 * 4. First char match
 * 5. Featured fallback
 *
 * @param {string} query - Từ khóa tìm kiếm
 * @param {number} limit - Số lượng kết quả tối đa (default: 5)
 * @returns {Array} Danh sách bài viết phù hợp
 */
export function searchBlogs(query = "", limit = 5) {
    // Nếu không có query, trả về featured blogs
    if (!query || query.trim() === "") {
        return mockBlogs.slice(0, limit);
    }

    const searchTerm = query.toLowerCase().trim();
    const firstChar = searchTerm.charAt(0);

    // 1. Exact match
    const exactMatches = mockBlogs.filter(
        (b) => b.title.toLowerCase() === searchTerm
    );

    // 2. Prefix match
    const prefixMatches = mockBlogs.filter(
        (b) =>
            b.title.toLowerCase().startsWith(searchTerm) &&
            !exactMatches.includes(b)
    );

    // 3. Partial match
    const partialMatches = mockBlogs.filter(
        (b) =>
            (b.title.toLowerCase().includes(searchTerm) ||
                b.excerpt.toLowerCase().includes(searchTerm) ||
                b.category.toLowerCase().includes(searchTerm) ||
                b.author.toLowerCase().includes(searchTerm)) &&
            !exactMatches.includes(b) &&
            !prefixMatches.includes(b)
    );

    // Gộp kết quả theo thứ tự ưu tiên
    let results = [...exactMatches, ...prefixMatches, ...partialMatches];

    // 4. Fallback: First char match
    if (results.length === 0 && firstChar) {
        results = mockBlogs.filter((b) =>
            b.title.toLowerCase().startsWith(firstChar)
        );
    }

    // 5. Final fallback: Featured blogs
    if (results.length === 0) {
        results = mockBlogs.slice(0, limit);
    }

    // Map results to add link and description fields for UI components
    return results.slice(0, limit).map((blog) => ({
        ...blog,
        link: `/goc-suc-khoe/${blog.id}`,
        description: blog.excerpt,
    }));
}

/**
 * GET BLOG BY ID - Lấy bài viết theo ID
 * @param {string} id - Mã bài viết
 * @returns {Object|null} Bài viết hoặc null nếu không tìm thấy
 */
export function getBlogById(id) {
    return mockBlogs.find((blog) => blog.id === id) || null;
}

/**
 * GET BLOGS BY CATEGORY - Lấy bài viết theo danh mục
 * @param {string} category - Tên danh mục
 * @returns {Array} Danh sách bài viết trong danh mục
 */
export function getBlogsByCategory(category) {
    return mockBlogs.filter(
        (blog) => blog.category.toLowerCase() === category.toLowerCase()
    );
}

/**
 * GET ALL BLOG CATEGORIES - Lấy tất cả danh mục bài viết
 * @returns {Array} Danh sách danh mục duy nhất
 */
export function getAllBlogCategories() {
    const categories = mockBlogs.map((blog) => blog.category);
    return [...new Set(categories)];
}

/**
 * FORMAT DATE - Format ngày đăng
 * @param {string} dateString - Ngày dạng string (YYYY-MM-DD)
 * @returns {string} Ngày đã format (VD: "01/11/2024")
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("vi-VN").format(date);
}
