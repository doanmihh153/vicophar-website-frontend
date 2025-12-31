/**
 * ============================================================================
 * STORY PAGE DATA - DỮ LIỆU TRANG CÂU CHUYỆN VICOPHAR
 * ============================================================================
 *
 * File tập trung quản lý toàn bộ nội dung cho trang "Câu Chuyện Vicophar"
 * Dễ dàng chỉnh sửa và cập nhật nội dung mà không cần động vào code component
 *
 * ============================================================================
 */

/**
 * HERO BANNER - Banner đầu trang (ảnh tĩnh)
 * Aspect Ratio: 2.3:1
 * Kích thước đề xuất:
 * - Mobile: 750x325
 * - Tablet: 1536x668
 * - Desktop: 1920x835
 */
export const storyHeroBanner = {
    imageUrl: "/imgs/storyour/mockup-truck-vicophar-AI.png",
    altText: "Vicophar - Doanh nghiệp dược phẩm hàng đầu Việt Nam",
};

/**
 * INTRO SECTION - Phần giới thiệu
 */
export const storyIntro = {
    subtitle: "Về Chúng Tôi",
    title: "VICOPHAR VIỆT NAM - NỬA THẬP KỶ HÌNH THÀNH VÀ PHÁT TRIỂN",
    // Heading chính (H1)
    heading:
        "VICOPHAR VIỆT NAM - TOP DOANH NGHIỆP NGHIÊN CỨU, BÀO CHẾ VÀ PHÂN PHỐI DƯỢC PHẨM HÀNG ĐẦU VIỆT NAM",
    companyName: "Công ty Cổ phần VICOPHAR VIỆT NAM.",
    establishmentDate: "09/01/2008",
    registrationNumber: "0314828683",
    registrationLocation: "Sở Kế Hoạch và Đầu Tư Tp. Hồ Chí Minh",
    paragraphs: [
        "Được thành lập bởi tập hợp những con người yêu cây thuốc Việt và trân trọng giá trị y học cổ truyền. Chúng tôi không ngừng nghiên cứu, cải tiến sản phẩm ngày một tốt hơn, kết hợp giữa cổ truyền với công nghệ hiện đại.",
        "Nhằm mang đến các sản phẩm chất lượng, an toàn và hiệu quả trong hỗ trợ điều trị và nâng cao sức khỏe người Việt. Vicophar hướng đến trở thành thương hiệu Dược mỹ phẩm Việt Nam tiên phong trong việc ứng dụng dược liệu truyền thống kết hợp công nghệ hiện đại, góp phần nâng tầm giá trị cây thuốc Việt Nam và chăm sóc sức khỏe cộng đồng một cách bền vững.",
    ],
    /**
     * INTRO IMAGE - Ảnh sản phẩm tiêu biểu
     * Aspect Ratio: 3/4 (portrait - ảnh dọc)
     * Kích thước đề xuất:
     * - Mobile: 375x500 (300x400 tối thiểu)
     * - Tablet: 600x800
     * - Desktop: 750x1000
     */
    introImage: {
        src: "/imgs/storyour/anh-san-pham-tieu-bieu-cua-vicophar.webp",
        alt: "Vicophar - Sản phẩm tiêu biểu",
        aspectRatio: "3/4", // Tỷ lệ 3:4 (chiều ngang : chiều dọc)
    },
    images: {
        main: "/imgs/home-page/nha-may-thuoc.webp",
        secondary: "/imgs/home-page/vung-nguyen-lieu.webp",
        tertiary: "/imgs/home-page/chat-luong-kiem-duyet.webp",
    },
};

/**
 * VISION & MISSION - Tầm nhìn & Sứ mệnh
 */
export const storyVisionMission = {
    vision: {
        title: "TẦM NHÌN",
        content:
            "Đến năm 2030, Vicophar trở thành biểu tượng niềm tin và sự lựa chọn hàng đầu tại Việt Nam trong lĩnh vực dược phẩm và sản phẩm chăm sóc sức khỏe, đóng góp thiết thực vào việc nâng cao chất lượng cuộc sống và sức khỏe cộng đồng.",
    },
    mission: {
        title: "SỨ MỆNH",
        content:
            "Vicophar tồn tại nhằm phục vụ sức khỏe người Việt một cách toàn diện thông qua sản phẩm chất lượng, sự tư vấn nhiệt tình, bài bản của đội ngũ y tế chuyên nghiệp.",
    },
    coreValues: {
        title: "GIÁ TRỊ CỐT LÕI",
        values: [
            {
                title: "Đối với người tiêu dùng:",
                description:
                    "Cung cấp các sản phẩm an toàn, hiệu quả, chất lượng, góp phần vào công cuộc cải thiện tầm vóc sức khỏe người Việt Nam.",
            },
            {
                title: "Đối với khách hàng, đối tác:",
                description:
                    "Xây dựng hình ảnh thương hiệu Vicophar là địa chỉ đáng tin cậy, với phong cách phục vụ chuyên nghiệp và hài hòa lợi ích trong hợp tác.",
            },
            {
                title: "Đối với đội ngũ nhân sự:",
                description:
                    "Tạo cơ hội đào tạo và phát triển năng lực, gắn liền với chế độ phúc lợi xứng đáng theo hiệu quả công việc.",
            },
            {
                title: "Đối với cổ đông:",
                description:
                    "Tăng trưởng bền vững về khách hàng, doanh thu và lợi nhuận theo đúng định hướng và chiến lược đề ra.",
            },
        ],
    },
};

/**
 * COMMITMENT - Cam kết
 */
export const storyCommitment = {
    title: "VICOPHAR VIỆT NAM - CAM KẾT",
    image: "/imgs/home-page/nha-may-thuoc.webp",
    commitments: [
        {
            title: "Tận tâm - Uy tín",
            description:
                "Hành động với toàn bộ tâm huyết và trách nhiệm trong từng sản phẩm.",
        },
        {
            title: "Chuyên nghiệp - Gắn kết",
            description:
                "Mỗi thành viên Vicophar là một mắt xích trong hệ thống vận hành hiệu quả, gắn bó và phát triển.",
        },
        {
            title: "Hướng đến cộng đồng và phát triển bền vững",
            description:
                "Cam kết vì sức khỏe cộng đồng, đồng thời nâng cao giá trị cho cổ đông, khách hàng và xã hội.",
        },
    ],
};

/**
 * TECHNOLOGY - Công nghệ
 */
export const storyTechnology = {
    title: "CÔNG NGHỆ",
    description:
        "Các sản phẩm của Vicophar hiện nay được gia công tại nhà máy lớn, đạt chuẩn GMP của bộ Y tế",
    image: "/imgs/home-page/nha-may-thuoc.webp",
};

/**
 * COMPANY NEWS - Tin tức công ty
 */
export const storyCompanyNews = {
    title: "TIN TỨC CÔNG TY",
    featuredArticle: {
        image: "/imgs/home-page/news-1.webp",
        title: "18 tuần là mấy tháng? Thai 18 tuần tuổi phát triển ra sao và mẹ bầu cần lưu ý gì?",
        excerpt:
            "Bước vào tuần thứ 18, nhiều mẹ bầu băn khoăn không biết 18 tuần là mấy tháng và em bé đã phát triển đến đâu, cơ thể mình sẽ thay đổi thế nào. Bài viết này giúp bạn hiểu rõ hơn về sự phát triển của thai nhi 18 tuần...",
    },
    articles: [
        {
            id: 1,
            image: "/imgs/home-page/news-1.webp",
            title: "Liệu bạn có thắc mắc: Cứ ăn xong là buồn nôn có phải có thai không?",
            excerpt:
                "Có những lúc cảm giác sau bữa ăn khiến ta bối rối và phải thầm hỏi cứ ăn xong là buồn nôn có phải có thai không...",
        },
        {
            id: 2,
            image: "/imgs/home-page/news-2.webp",
            title: "Cắt polyp đại tràng có phải kiêng quan hệ không? Những điều cần biết",
            excerpt:
                "Cắt polyp đại tràng là một thủ thuật y khoa hiện đại và tương đối an toàn, nhưng quá trình hồi phục đòi hỏi sự cẩn trọng...",
        },
        {
            id: 3,
            image: "/imgs/home-page/news-3.webp",
            title: "Nắn chỉnh xương khớp giá bao nhiêu? Quy trình nắn chỉnh xương khớp ra sao?",
            excerpt:
                "Nắn chỉnh xương khớp đang dần trở thành một trong những liệu pháp hỗ trợ điều trị và cải thiện sức khỏe cơ-xương-khớp...",
        },
        {
            id: 4,
            image: "/imgs/home-page/news-1.webp",
            title: "Có thai bao lâu thì đau bụng dưới? Cách giảm đau an toàn cho mẹ.",
            excerpt:
                "Có thai bao lâu thì đau bụng dưới còn tùy thuộc vào cơ địa mỗi người, nhưng thường xuất hiện từ tuần thứ 4 đến tuần 6...",
        },
    ],
};
