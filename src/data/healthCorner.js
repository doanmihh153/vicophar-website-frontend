/**
 * ============================================================================
 * HEALTH CORNER DATA - GÓC SỨC KHỎE VICOPHAR
 * ============================================================================
 *
 * Data cho trang Góc sức khỏe
 * Chứa bài viết về chăm sóc sức khỏe, dinh dưỡng, làm đẹp
 *
 * ============================================================================
 */

const basePath = "/imgs/home-page/blogs/";

/**
 * HEALTH CORNER HERO BANNER
 */
export const healthHeroBanner = {
    imageUrl: "/imgs/storyour/mockup-truck-vicophar-AI.png",
    altText: "Banner trang Góc sức khỏe - Vicophar",
};

/**
 * HEALTH CORNER CATEGORIES
 * Khớp với healthCategorySections
 */
export const healthCategories = [
    { id: "all", name: "Tất cả", count: 11 },
    { id: "suc-khoe-me-va-be", name: "Sức khoẻ mẹ và bé", count: 5 },
    {
        id: "ho-tro-dieu-tri",
        name: "Hỗ trợ điều trị và phòng ngừa bệnh",
        count: 5,
    },
    { id: "dinh-duong-loi-song", name: "Dinh dưỡng và lối sống", count: 5 },
];

/**
 * HEALTH CORNER ARTICLES
 */
export const healthArticles = [
    {
        id: "HEALTH001",
        title: "18 tuần là mấy tháng? Thai 18 tuần tuổi phát triển ra sao?",
        description:
            "Thai 18 tuần tuổi đang trong giai đoạn phát triển quan trọng. Mẹ bầu cần chú ý dinh dưỡng và chăm sóc sức khỏe đúng cách...",
        image: `${basePath}baivietnewnhat.png`,
        category: "Sức khoẻ mẹ và bé",
        date: "04/06/2025",
        author: "Vicophar",
        link: "/goc-suc-khoe/suc-khoe-me-va-be/18-tuan-la-may-thang",
        slug: "18-tuan-la-may-thang",
        isFeatured: true,
    },
    {
        id: "HEALTH002",
        title: "Liệu bạn có thực mắc: Cú ớn xong là buồn nôn có phải có thai không?",
        description:
            "Đây là câu hỏi mà nhiều chị em thắc mắc. Hãy cùng tìm hiểu về các dấu hiệu mang thai sớm...",
        image: `${basePath}baivietso1.png`,
        category: "Sức khoẻ mẹ và bé",
        date: "03/06/2025",
        author: "Vicophar",
        link: "/goc-suc-khoe/suc-khoe-me-va-be/cu-on-xong-buon-non",
        slug: "cu-on-xong-buon-non",
    },
    {
        id: "HEALTH003",
        title: "Chăm sóc gan: 7 thói quen tốt cho gan khỏe mạnh",
        description:
            "Gan là cơ quan quan trọng trong cơ thể. Hãy cùng tìm hiểu cách chăm sóc gan hiệu quả...",
        image: `${basePath}baivietso2.png`,
        category: "Hỗ trợ điều trị và phòng ngừa bệnh",
        date: "02/06/2025",
        author: "BS. Nguyễn Văn A",
        link: "/goc-suc-khoe/ho-tro-dieu-tri/thoi-quen-tot-cho-gan",
        slug: "thoi-quen-tot-cho-gan",
    },
    {
        id: "HEALTH004",
        title: "Dinh dưỡng hợp lý cho bà bầu 3 tháng đầu",
        description:
            "3 tháng đầu thai kỳ rất quan trọng. Chế độ ăn uống ảnh hưởng lớn đến sự phát triển của thai nhi...",
        image: `${basePath}baivietso3.png`,
        category: "Dinh dưỡng và lối sống",
        date: "01/06/2025",
        author: "Dinh dưỡng viên Lê Thị B",
        link: "/goc-suc-khoe/dinh-duong-loi-song/dinh-duong-ba-bau",
        slug: "dinh-duong-ba-bau",
    },
    {
        id: "HEALTH005",
        title: "Bổ sung Vitamin tổng hợp cho trẻ em đúng cách",
        description:
            "Vitamin đóng vai trò quan trọng trong sự phát triển của trẻ. Làm thế nào để bổ sung đúng cách?",
        image: `${basePath}baivietso4.png`,
        category: "Sức khoẻ mẹ và bé",
        date: "31/05/2025",
        author: "BS. Trần Văn C",
        link: "/goc-suc-khoe/suc-khoe-me-va-be/vitamin-tong-hop",
        slug: "vitamin-tong-hop",
        isFeatured: true,
    },
    {
        id: "HEALTH006",
        title: "Gan nhiễm mỡ: Nguyên nhân, triệu chứng và cách điều trị",
        description:
            "Gan nhiễm mỡ là tình trạng phổ biến ở người trưởng thành. Tìm hiểu cách phòng ngừa và điều trị...",
        image: `${basePath}baivietnewnhat.png`,
        category: "Hỗ trợ điều trị và phòng ngừa bệnh",
        date: "30/05/2025",
        author: "BS. Hoàng Văn D",
        link: "/goc-suc-khoe/ho-tro-dieu-tri/gan-nhiem-mo",
        slug: "gan-nhiem-mo",
        isFeatured: true,
    },
    {
        id: "HEALTH007",
        title: "Thực đơn giảm cân khoa học cho phụ nữ sau sinh",
        description:
            "Sau sinh, nhiều mẹ muốn lấy lại vóc dáng. Đây là thực đơn giảm cân an toàn và hiệu quả...",
        image: `${basePath}baivietso1.png`,
        category: "Dinh dưỡng và lối sống",
        date: "29/05/2025",
        author: "Huấn luyện viên Phạm Thị E",
        link: "/goc-suc-khoe/dinh-duong-loi-song/giam-can-sau-sinh",
        slug: "giam-can-sau-sinh",
    },
    {
        id: "HEALTH008",
        title: "Cách tăng cường hệ tiêu hóa cho trẻ nhỏ",
        description:
            "Hệ tiêu hóa khỏe mạnh giúp trẻ hấp thụ dinh dưỡng tốt hơn. Cùng tìm hiểu cách chăm sóc...",
        image: `${basePath}baivietso2.png`,
        category: "Sức khoẻ mẹ và bé",
        date: "28/05/2025",
        author: "BS. Vũ Văn F",
        link: "/goc-suc-khoe/suc-khoe-me-va-be/he-tieu-hoa",
        slug: "he-tieu-hoa",
    },
    {
        id: "HEALTH009",
        title: "Detox gan tự nhiên: Thực phẩm nên và không nên ăn",
        description:
            "Gan cần được detox định kỳ. Đây là danh sách thực phẩm giúp thanh lọc gan hiệu quả...",
        image: `${basePath}baivietso3.png`,
        category: "Hỗ trợ điều trị và phòng ngừa bệnh",
        date: "27/05/2025",
        author: "Dinh dưỡng viên Đỗ Thị G",
        link: "/goc-suc-khoe/ho-tro-dieu-tri/detox-gan",
        slug: "detox-gan",
    },
    {
        id: "HEALTH010",
        title: "Protein trong thai kỳ: Lợi ích và nguồn cung cấp",
        description:
            "Protein là dưỡng chất thiết yếu cho bà bầu và thai nhi. Nên bổ sung từ nguồn nào?",
        image: `${basePath}baivietso4.png`,
        category: "Dinh dưỡng và lối sống",
        date: "26/05/2025",
        author: "Dinh dưỡng viên Lê Thị H",
        link: "/goc-suc-khoe/dinh-duong-loi-song/protein-thai-ky",
        slug: "protein-thai-ky",
    },
    {
        id: "HEALTH011",
        title: "Omega-3 cho trẻ em: Tầm quan trọng và cách bổ sung",
        description:
            "Omega-3 giúp phát triển não bộ và thị lực của trẻ. Làm thế nào để bổ sung đủ? Omega-3 giúp phát triển não bộ và thị lực của trẻ. Làm thế nào để bổ sung đủ? Omega-3 giúp phát triển não bộ và thị lực của trẻ. Làm thế nào để bổ sung đủ? Omega-3 giúp phát triển não bộ và thị lực của trẻ. Làm thế nào để bổ sung đủ?",
        image: `${basePath}baivietnewnhat.png`,
        category: "Dinh dưỡng và lối sống",
        date: "25/05/2025",
        author: "BS. Nguyễn Thị I",
        link: "/goc-suc-khoe/dinh-duong-loi-song/omega3-tre-em",
        slug: "omega3-tre-em",
        contentFile: "mega3-tre-em.json", // Tiptap JSON content file
    },
    {
        id: "HEALTH0012",
        title: "Dinh dưỡng hợp lý cho bà bầu 3 tháng đầu",
        description:
            "3 tháng đầu thai kỳ rất quan trọng. Chế độ ăn uống ảnh hưởng lớn đến sự phát triển của thai nhi...",
        image: `${basePath}baivietso3.png`,
        category: "Dinh dưỡng và lối sống",
        date: "01/06/2025",
        author: "Dinh dưỡng viên Lê Thị B",
        link: "/goc-suc-khoe/dinh-duong-loi-song/dinh-duong-ba-bau",
        slug: "dinh-duong-ba-bau",
    },
    {
        id: "HEALTH0013",
        title: "Dinh dưỡng hợp lý cho bà bầu 3 tháng đầu",
        description:
            "3 tháng đầu thai kỳ rất quan trọng. Chế độ ăn uống ảnh hưởng lớn đến sự phát triển của thai nhi...",
        image: `${basePath}baivietso3.png`,
        category: "Dinh dưỡng và lối sống",
        date: "01/06/2025",
        author: "Dinh dưỡng viên Lê Thị B",
        link: "/goc-suc-khoe/dinh-duong-loi-song/dinh-duong-ba-bau",
        slug: "dinh-duong-ba-bau",
    },
];

/**
 * HEALTH CATEGORY SECTIONS
 * Mỗi section có 5 bài viết:
 * - articles[0]: Featured (có image)
 * - articles[1]: Text only (title + desc)
 * - articles[2-4]: Title links only
 */
export const healthCategorySections = [
    {
        id: "suc-khoe-me-va-be",
        title: "Sức khoẻ mẹ và bé",
        slug: "suc-khoe-me-va-be",
        articles: [
            healthArticles[0],
            healthArticles[1],
            healthArticles[4],
            healthArticles[7],
            healthArticles[10],
        ],
    },
    {
        id: "ho-tro-dieu-tri",
        title: "Hỗ trợ điều trị và phòng ngừa bệnh",
        slug: "ho-tro-dieu-tri",
        articles: [
            healthArticles[2],
            healthArticles[5],
            healthArticles[8],
            healthArticles[3],
            healthArticles[6],
        ],
    },
    {
        id: "dinh-duong-loi-song",
        title: "Dinh dưỡng và lối sống",
        slug: "dinh-duong-loi-song",
        articles: [
            healthArticles[3],
            healthArticles[9],
            healthArticles[10],
            healthArticles[1],
            healthArticles[4],
        ],
    },
];
