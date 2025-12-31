/**
 * ============================================================================
 * MOCK PRODUCTS DATA - VICOPHAR
 * ============================================================================
 *
 * Centralized Product Data Source
 * Chứa toàn bộ dữ liệu sản phẩm, danh mục cho cả App.
 *
 * NOTE:
 * Dữ liệu được tổ chức dạng raw (thô) và được xử lý tự động để tạo link.
 * Giúp dễ dàng quản lý và tránh sai sót khi nhập liệu thủ công.
 *
 * ============================================================================
 */

// Base constants
const BASE_PRODUCT_PATH = "/san-pham";
const BASE_IMG_PATH = "/imgs/products/";

/**
 * UTILS: Auto-generate Product Link
 */
const generateProductLink = (categorySlug, productSlug) => {
    return `${BASE_PRODUCT_PATH}/${categorySlug}/${productSlug}`;
};

/**
 * MOCK TIPTAP CONTENT (RICH TEXT)
 * Mô phỏng cấu trúc JSON từ Tiptap Editor
 * Bao gồm các heading, paragraph và hình ảnh minh họa
 */
const mockTiptapContent = {
    type: "doc",
    content: [
        {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Mô tả sản phẩm" }],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Sản phẩm được chiết xuất từ 100% thảo dược thiên nhiên, an toàn và lành tính. Được sản xuất trên dây chuyền công nghệ hiện đại đạt chuẩn GMP của WHO. Giúp hỗ trợ tăng cường sức khỏe, nâng cao sức đề kháng và phòng ngừa bệnh tật hiệu quả.",
                },
            ],
        },
        {
            type: "image",
            attrs: {
                src: "/imgs/banner-slider/banner1.jpg",
                alt: "Mô tả sản phẩm chi tiết",
                title: "Ảnh minh họa sản phẩm",
            },
        },
        {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Thành phần" }],
        },
        {
            type: "heading",
            attrs: { level: 3 },
            content: [
                { type: "text", text: "Thành phần chiết xuất từ tự nhiên" },
            ],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Trong mỗi viên nang mềm có chứa:",
                },
            ],
        },
        {
            type: "bulletList",
            content: [
                {
                    type: "listItem",
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Cao Diệp Hạ Châu: 100mg",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "listItem",
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                { type: "text", text: "Cao Cà Gai Leo: 120mg" },
                            ],
                        },
                    ],
                },
                {
                    type: "listItem",
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                { type: "text", text: "Silymarin 40%: 70mg" },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Công dụng" }],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Hỗ trợ thanh nhiệt, giải độc gan, bảo vệ gan. Hỗ trợ tăng cường chức năng gan trong các trường hợp: viêm gan, xơ gan, gan nhiễm mỡ, uống nhiều bia rượu, thuốc có hại cho gan. Hỗ trợ giảm triệu chứng vàng da, mẩn ngứa, nổi mề đay, men gan cao do chức năng gan kém.",
                },
            ],
        },
        {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Hướng dẫn sử dụng" }],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Người lớn và trẻ em trên 12 tuổi: Uống 1-2 viên/lần x 2 lần/ngày. Nên uống sau bữa ăn để đạt hiệu quả tốt nhất.",
                },
            ],
        },
        {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Lưu ý" }],
        },
        {
            type: "blockquote",
            attrs: {
                variant: "warn",
                id: "blockquote-warn-001",
                class: "blockquote-warn",
                label: "Cảnh báo",
            },
            content: [
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không sử dụng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm.",
                        },
                    ],
                },
            ],
        },
        {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Cam kết" }],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Cam kết sản phẩm chính hãng 100%. Hoàn tiền gấp 10 lần nếu phát hiện hàng giả, hàng kém chất lượng. Đổi trả miễn phí trong vòng 7 ngày.",
                },
            ],
        },
    ],
};

/**
 * ========================================
 * MASTER DATA: RAW PRODUCTS
 * ========================================
 * Đây là nơi nhập liệu chính. Không cần nhập trường 'link'.
 */
const rawFeaturedProducts = [
    {
        id: 1,
        title: "GIẢI ĐỘC GAN ACTIVELIVER",
        slug: "giai-doc-gan-activeliver",
        category: "Hỗ trợ gan và thận",
        categorySlug: "ho-tro-gan-va-than",
        // Main Thumbnail
        thumbnail: "actiliver.png",
        // Image Gallery (Array of Objects)
        images: [
            {
                src: "actiliver.png",
                alt: "Giải độc gan Activeliver - Mặt trước",
            },
            {
                src: "actiliver.png",
                alt: "Giải độc gan Activeliver - Thành phần",
            }, // Placeholder, use distinct if avail
            {
                src: "actiliver.png",
                alt: "Giải độc gan Activeliver - Công dụng",
            },
            { src: "actiliver.png", alt: "Giải độc gan Activeliver - Mặt sau" },
            {
                src: "actiliver.png",
                alt: "Giải độc gan Activeliver - Hộp Mặt sau",
            },
            { src: "actiliver.png", alt: "Giải độc gan Activeliver - Rìa" },
            { src: "actiliver.png", alt: "Giải độc gan Activeliver - Hộp Rìa" },
        ],
        // Product Details
        brand: "Vicophar",
        brandName: "Vicophar Việt Nam", // Tên chính hãng
        categoryName: "Thực phẩm bảo vệ sức khỏe",
        regNo: "1234/2024/ĐKSP", // Số đăng ký
        licenseFile: "/docs/giay-phep-activeliver.pdf", // Link PDF
        form: "Viên nang mềm", // Dạng bào chế
        packaging: "Hộp 60 viên (5 vỉ x 12 viên)", // Quy cách
        manufacturer: "Nhà máy Dược phẩm Vicophar", // Nơi sản xuất
        origin: "Việt Nam",
        ingredients: "Cao Diệp Hạ Châu, Cao Cà Gai Leo, Silymarin...", // Thành phần tóm tắt
        expiry: "36 tháng kể từ ngày sản xuất", // Hạn sử dụng
        description:
            "Thải độc gan Active Liver hỗ trợ thải độc gan, hỗ trợ giảm các triệu chứng buồn nôn, mệt mỏi do dùng bia rượu Hộp 30 viên 🌱 Sản phẩm thảo dược hỗ trợ giải độc gan, bảo vệ gan và tăng cường chức năng gan hiệu quả lâu dài 🌱 Cam kết sản phẩm chính hãng 100%. Hoàn tiền gấp 10 lần nếu phát hiện hàng giả, hàng kém chất lượng. Đổi trả miễn phí trong vòng 7 ngày.", // Short description
        isBestSeller: true,
        // Rich Content (Tiptap)
        content: mockTiptapContent,
    },
    // --- GENERIC DATA FOR OTHERS (Simplified for Mock) ---
    {
        id: 2,
        title: "THỰC PHẨM BVSK BỔ SUNG D3 VÀ K2 AQUATOP",
        slug: "bo-sung-d3-k2-aquatop",
        category: "Bổ sung vitamin và khoáng chất",
        categorySlug: "bo-sung-vitamin-va-khoang-chat",
        thumbnail: "aquatop.png",
        images: [
            { src: "aquatop.png", alt: "Aquatop D3 K2" },
            { src: "aquatop.png", alt: "Aquatop D3 K2 - Hộp" },
        ],
        brand: "Aquatop",
        brandName: "Vicophar Việt Nam",
        categoryName: "Vitamin & Khoáng chất",
        regNo: "5678/2024/ĐKSP",
        licenseFile: "#",
        form: "Dung dịch uống",
        packaging: "Hộp 20 ống x 10ml",
        manufacturer: "Nhà máy Dược phẩm Vicophar",
        origin: "Việt Nam",
        ingredients: "Vitamin D3, Vitamin K2 (MK7), Calci Glucoheptonate...",
        expiry: "36 tháng",
        description:
            "Aquatop là TPBVSK bổ sung vitamin D3 và K2 giúp tăng hấp thu canxi...",
        isBestSeller: true,
        content: mockTiptapContent, // Reusing mock content
    },
    {
        id: 3,
        title: "THIÊN MÔN BỔ PHỔI THUỶ MẪU",
        slug: "thien-mon-bo-phoi",
        category: "Hỗ trợ hô hấp",
        categorySlug: "ho-tro-ho-hap",
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "Thiên Môn Bổ Phổi" }],
        brand: "Thủy Mẫu",
        brandName: "Vicophar Việt Nam",
        categoryName: "Thực phẩm bảo vệ sức khỏe",
        regNo: "9012/2024/ĐKSP",
        licenseFile: "#",
        form: "Siro",
        packaging: "Chai 280ml",
        manufacturer: "Nhà máy Dược phẩm Vicophar",
        origin: "Việt Nam",
        ingredients: "Thiên môn đông, Bách bộ, Trần bì...",
        expiry: "36 tháng",
        description: "Hỗ trợ bổ gan, bổ phổi, tăng cường sức đề kháng...",
        isBestSeller: true,
        content: mockTiptapContent,
    },
    {
        id: 4,
        title: "SẮT HỮU CƠ FEIRONTOP",
        slug: "sat-huu-co-feirontop",
        category: "Bổ sung vitamin và khoáng chất",
        categorySlug: "bo-sung-vitamin-va-khoang-chat",
        thumbnail: "fe.png",
        images: [{ src: "fe.png", alt: "Sắt hữu cơ Feirontop" }],
        brand: "Feirontop",
        brandName: "Vicophar Việt Nam",
        categoryName: "Vitamin & Khoáng chất",
        regNo: "3456/2024/ĐKSP",
        licenseFile: "#",
        form: "Dung dịch uống",
        packaging: "Hộp 20 ống",
        manufacturer: "Nhà máy Dược phẩm Vicophar",
        origin: "Việt Nam",
        ingredients: "Sắt (III) Hydroxide Polymaltose, Acid Folic...",
        expiry: "36 tháng",
        description:
            "Sắt (III) Hydroxide Polymaltose giúp bổ sung sắt cho cơ thể",
        isBestSeller: false,
        content: mockTiptapContent,
    },

    // KIDS
    {
        id: 5,
        title: "AQUATOP VITAMIN TỔNG HỢP",
        slug: "aquatop-vitamin-tong-hop",
        category: "Bổ sung vitamin và khoáng chất",
        categorySlug: "bo-sung-vitamin-va-khoang-chat",
        thumbnail: "aquatop.png",
        images: [{ src: "aquatop.png", alt: "Aquatop Vitamin" }],
        brand: "Aquatop",
        brandName: "Vicophar Việt Nam",
        categoryName: "Dành cho bé",
        regNo: "1111/2024/ĐKSP",
        licenseFile: "#",
        form: "Dung dịch",
        packaging: "Hộp 20 ống x 10ml",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Vitamin A, D3, E, B1, B2, B6...",
        expiry: "36 tháng",
        description: "Bổ sung vitamin và khoáng chất thiết yếu cho cơ thể...",
        isBestSeller: false,
        content: mockTiptapContent,
    },
    {
        id: 6,
        title: "SẮT HỮU CƠ FEIRONTOP CHO TRẺ",
        slug: "sat-huu-co-tre-em",
        category: "Bổ sung vitamin và khoáng chất",
        categorySlug: "bo-sung-vitamin-va-khoang-chat",
        thumbnail: "fe.png",
        images: [{ src: "fe.png", alt: "Sắt hữu cơ trẻ em" }],
        brand: "Feirontop",
        brandName: "Vicophar Việt Nam",
        categoryName: "Dành cho bé",
        regNo: "2222/2024/ĐKSP",
        licenseFile: "#",
        form: "Dung dịch",
        packaging: "Hộp 20 ống",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Sắt III, Folic Acid...",
        expiry: "36 tháng",
        description: "Bổ sung sắt, hỗ trợ phát triển trí não và chiều cao...",
        isBestSeller: true,
        content: mockTiptapContent,
    },
    {
        id: 7,
        title: "VITAMIN D3 K2 AQUATOP KIDS",
        slug: "d3-k2-tre-em",
        category: "Bổ sung vitamin và khoáng chất",
        categorySlug: "bo-sung-vitamin-va-khoang-chat",
        thumbnail: "aquatop.png",
        images: [{ src: "aquatop.png", alt: "D3K2 Kids" }],
        brand: "Aquatop",
        brandName: "Vicophar Việt Nam",
        categoryName: "Dành cho bé",
        regNo: "3333/2024/ĐKSP",
        licenseFile: "#",
        form: "Dung dịch nhỏ giọt",
        packaging: "Lọ 15ml",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Vitamin D3, K2-MK7...",
        expiry: "24 tháng",
        description: "Hỗ trợ xương chắc khỏe, tăng chiều cao cho trẻ...",
        isBestSeller: false,
        content: mockTiptapContent,
    },
    {
        id: 8,
        title: "BỔ NÃO PHÁT TRIỂN TRÍ TUỆ",
        slug: "bo-nao-tre-em",
        category: "Hỗ trợ giấc ngủ và thần kinh",
        categorySlug: "ho-tro-giac-ngu-va-than-kinh",
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "Bổ não trẻ em" }],
        brand: "Vicophar",
        brandName: "Vicophar Việt Nam",
        categoryName: "Dành cho bé",
        regNo: "4444/2024/ĐKSP",
        licenseFile: "#",
        form: "Viên nang mềm",
        packaging: "Hộp 30 viên",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "DHA, Omega 3, Vitamin B...",
        expiry: "36 tháng",
        description: "DHA, Omega-3 hỗ trợ phát triển não bộ toàn diện...",
        isBestSeller: false,
        content: mockTiptapContent,
    },

    // LIVER-HEART
    {
        id: 9,
        title: "GIẢI ĐỘC GAN ACTIVELIVER PLUS",
        slug: "giai-doc-gan-activeliver-plus",
        category: "Hỗ trợ gan và thận",
        categorySlug: "ho-tro-gan-va-than",
        thumbnail: "actiliver.png",
        images: [{ src: "actiliver.png", alt: "Activeliver Plus" }],
        brand: "Activeliver",
        brandName: "Vicophar Việt Nam",
        categoryName: "Gan mật",
        regNo: "5555/2024/ĐKSP",
        licenseFile: "#",
        form: "Viên nang mềm",
        packaging: "Hộp 60 viên",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Diệp hạ châu, Actiso...",
        expiry: "36 tháng",
        description: "Công thức nâng cao, hỗ trợ giải độc gan hiệu quả hơn...",
        isBestSeller: false,
        content: mockTiptapContent,
    },
    {
        id: 10,
        title: "BỔ GAN THIÊN MÔN",
        slug: "bo-gan-thien-mon",
        category: "Hỗ trợ gan và thận",
        categorySlug: "ho-tro-gan-va-than",
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "Bổ gan Thiên Môn" }],
        brand: "Thiên Môn",
        brandName: "Vicophar Việt Nam",
        categoryName: "Gan mật",
        regNo: "6666/2024/ĐKSP",
        licenseFile: "#",
        form: "Siro",
        packaging: "Chai 280ml",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Thiên môn, Actiso...",
        expiry: "36 tháng",
        description: "Hỗ trợ bảo vệ gan, tăng cường chức năng gan...",
        isBestSeller: true,
        content: mockTiptapContent,
    },
    {
        id: 11,
        title: "TIM MẠCH KHỎE CARDIOTOP",
        slug: "tim-mach-khoe-cardiotop",
        category: "Hỗ trợ tim mạch",
        categorySlug: "ho-tro-tim-mach",
        thumbnail: "actiliver.png",
        images: [{ src: "actiliver.png", alt: "Cardiotop" }],
        brand: "Cardiotop",
        brandName: "Vicophar Việt Nam",
        categoryName: "Tim mạch",
        regNo: "7777/2024/ĐKSP",
        licenseFile: "#",
        form: "Viên nang",
        packaging: "Hộp 30 viên",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Coenzyme Q10, Omega 3...",
        expiry: "36 tháng",
        description: "Hỗ trợ tuần hoàn máu, bảo vệ tim mạch...",
        isBestSeller: false,
        content: mockTiptapContent,
    },
    {
        id: 12,
        title: "OMEGA-3 BẢO VỆ TIM",
        slug: "omega-3-tim-mach",
        category: "Hỗ trợ tim mạch",
        categorySlug: "ho-tro-tim-mach",
        thumbnail: "fe.png",
        images: [{ src: "fe.png", alt: "Omega 3" }],
        brand: "Vicophar",
        brandName: "Vicophar Việt Nam",
        categoryName: "Tim mạch",
        regNo: "8888/2024/ĐKSP",
        licenseFile: "#",
        form: "Viên nang mềm",
        packaging: "Lọ 100 viên",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Dầu cá, Omega 3...",
        expiry: "36 tháng",
        description: "Giảm cholesterol, hỗ trợ tim mạch khỏe mạnh...",
        isBestSeller: false,
        content: mockTiptapContent,
    },

    // RESPIRATORY
    {
        id: 13,
        title: "THIÊN MÔN BỔ PHỔI THUỶ MẪU PLUS",
        slug: "bo-phoi-plus",
        category: "Hỗ trợ hô hấp",
        categorySlug: "ho-tro-ho-hap",
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "Bổ phổi Plus" }],
        brand: "Thiên Môn",
        brandName: "Vicophar Việt Nam",
        categoryName: "Hô hấp",
        regNo: "9001/2024/ĐKSP",
        licenseFile: "#",
        form: "Siro",
        packaging: "Chai 300ml",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Thiên môn, Bách bộ, Cam thảo...",
        expiry: "36 tháng",
        description: "Công thức nâng cao bổ phổi, tăng cường hô hấp...",
        isBestSeller: true,
        content: mockTiptapContent,
    },
    {
        id: 14,
        title: "HÔ HẤP KHỎE RESPIROTOP",
        slug: "ho-hap-khoe-respirotop",
        category: "Hỗ trợ hô hấp",
        categorySlug: "ho-tro-ho-hap",
        thumbnail: "aquatop.png",
        images: [{ src: "aquatop.png", alt: "Respirotop" }],
        brand: "Respirotop",
        brandName: "Vicophar Việt Nam",
        categoryName: "Hô hấp",
        regNo: "9002/2024/ĐKSP",
        licenseFile: "#",
        form: "Dung dịch",
        packaging: "Hộp 20 ống",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Quất, Húng chanh, Đường phèn...",
        expiry: "24 tháng",
        description: "Hỗ trợ giảm ho, long đờm, thông thoáng phổi...",
        isBestSeller: false,
        content: mockTiptapContent,
    },
    {
        id: 15,
        title: "TĂNG CƯỜNG SỨC ĐỀ KHÁNG",
        slug: "tang-cuong-de-khang",
        category: "Hỗ trợ tăng cường miễn dịch",
        categorySlug: "ho-tro-tang-cuong-mien-dich",
        thumbnail: "fe.png",
        images: [{ src: "fe.png", alt: "Tăng đề kháng" }],
        brand: "Vicophar",
        brandName: "Vicophar Việt Nam",
        categoryName: "Tăng cường miễn dịch",
        regNo: "9003/2024/ĐKSP",
        licenseFile: "#",
        form: "Viên nén",
        packaging: "Hộp 30 viên",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Vitamin C, Kẽm, Thymomodulin...",
        expiry: "36 tháng",
        description: "Vitamin C, Kẽm hỗ trợ miễn dịch, phòng bệnh...",
        isBestSeller: false,
        content: mockTiptapContent,
    },
    {
        id: 16,
        title: "VIÊN NGẬM HO THẢO DƯỢC",
        slug: "vien-ngam-ho",
        category: "Hỗ trợ hô hấp",
        categorySlug: "ho-tro-ho-hap",
        thumbnail: "actiliver.png",
        images: [{ src: "actiliver.png", alt: "Viên ngậm ho" }],
        brand: "Vicophar",
        brandName: "Vicophar Việt Nam",
        categoryName: "Hô hấp",
        regNo: "9004/2024/ĐKSP",
        licenseFile: "#",
        form: "Viên ngậm",
        packaging: "Hộp 2 vỉ x 10 viên",
        manufacturer: "CP Vicophar VN",
        origin: "Việt Nam",
        ingredients: "Menthol, Tinh dầu bạc hà...",
        expiry: "24 tháng",
        description: "Giảm ho, đau rát họng, kháng khuẩn tự nhiên...",
        isBestSeller: false,
        content: mockTiptapContent,
    },
];

const rawSimpleProducts = [
    // Aquatop
    {
        id: "SP001",
        name: "Aquatop - Viên uống bổ sung khoáng chất",
        slug: "aquatop-vien-uong-bo-sung-khoang-chat",
        price: 125000,
        thumbnail: "aquatop.png",
        images: [{ src: "aquatop.png", alt: "Aquatop" }],
        category: "Bổ sung vitamin và khoáng chất",
        categorySlug: "bo-sung-vitamin-va-khoang-chat",
        description: "Bổ sung khoáng chất thiết yếu cho cơ thể",
        brand: "Aquatop",
        content: mockTiptapContent,
    },
    {
        id: "SP002",
        name: "Aquatop Plus - Tăng cường sức khỏe",
        slug: "aquatop-plus-tang-cuong-suc-khoe",
        price: 150000,
        thumbnail: "aquatop.png",
        images: [{ src: "aquatop.png", alt: "Aquatop Plus" }],
        category: "Bổ sung vitamin và khoáng chất",
        categorySlug: "bo-sung-vitamin-va-khoang-chat",
        description: "Công thức nâng cao, tăng cường sức đề kháng",
        brand: "Aquatop",
        content: mockTiptapContent,
    },
    {
        id: "SP003",
        name: "Aquatop Gold - Cao cấp",
        slug: "aquatop-gold-cao-cap",
        price: 200000,
        thumbnail: "aquatop.png",
        images: [{ src: "aquatop.png", alt: "Aquatop Gold" }],
        category: "Hỗ trợ tăng cường miễn dịch",
        categorySlug: "ho-tro-tang-cuong-mien-dich",
        description: "Dòng sản phẩm cao cấp, hiệu quả vượt trội",
        brand: "Aquatop",
        content: mockTiptapContent,
    },

    // Thủy Mẫu
    {
        id: "SP004",
        name: "Thủy Mẫu - Viên uống đẹp da",
        slug: "thuy-mau-vien-uong-dep-da",
        price: 180000,
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "Thủy Mẫu" }],
        category: "Hỗ trợ làm đẹp",
        categorySlug: "ho-tro-lam-dep",
        description: "Giúp da sáng mịn, chống lão hóa",
        brand: "Thủy Mẫu",
        content: mockTiptapContent,
    },
    {
        id: "SP005",
        name: "Thủy Mẫu Plus - Collagen cao cấp",
        slug: "thuy-mau-plus-collagen-cao-cap",
        price: 250000,
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "Thủy Mẫu Plus" }],
        category: "Hỗ trợ làm đẹp",
        categorySlug: "ho-tro-lam-dep",
        description: "Bổ sung collagen, làm đẹp từ bên trong",
        brand: "Thủy Mẫu",
        content: mockTiptapContent,
    },
    {
        id: "SP006",
        name: "Thủy Mẫu Gold - Dưỡng da chuyên sâu",
        slug: "thuy-mau-gold-duong-da-chuyen-sau",
        price: 320000,
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "Thủy Mẫu Gold" }],
        category: "Hỗ trợ làm đẹp",
        categorySlug: "ho-tro-lam-dep",
        description: "Công thức đặc biệt cho làn da hoàn hảo",
        brand: "Thủy Mẫu",
        content: mockTiptapContent,
    },

    // Gan & Tiêu hóa
    {
        id: "SP007",
        name: "Activeliver - Giải độc gan",
        slug: "activeliver-giai-doc-gan",
        price: 95000,
        thumbnail: "actiliver.png",
        images: [{ src: "actiliver.png", alt: "Activeliver" }],
        category: "Hỗ trợ gan và thận",
        categorySlug: "ho-tro-gan-va-than",
        description: "Hỗ trợ giải độc gan, bảo vệ tế bào gan",
        brand: "Activeliver",
        content: mockTiptapContent,
    },
    {
        id: "SP008",
        name: "Men vi sinh LiveSpo - Hỗ trợ tiêu hóa",
        slug: "men-vi-sinh-livespo",
        price: 280000,
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "LiveSpo" }],
        category: "Hỗ trợ tiêu hoá",
        categorySlug: "ho-tro-tieu-hoa",
        description: "Cân bằng hệ vi sinh đường ruột",
        brand: "Vicophar",
        content: mockTiptapContent,
    },
    {
        id: "SP009",
        name: "Aquatop Kids - Dành cho trẻ em",
        slug: "aquatop-kids-danh-cho-tre-em",
        price: 110000,
        thumbnail: "aquatop.png",
        images: [{ src: "aquatop.png", alt: "Aquatop Kids" }],
        category: "Bổ sung vitamin và khoáng chất",
        categorySlug: "bo-sung-vitamin-va-khoang-chat",
        description: "An toàn và hiệu quả cho trẻ nhỏ",
        brand: "Aquatop",
        content: mockTiptapContent,
    },
    {
        id: "SP010",
        name: "Thủy Mẫu Whitening - Làm trắng da",
        slug: "thuy-mau-whitening-lam-trang-da",
        price: 299000,
        thumbnail: "thuymau.png",
        images: [{ src: "thuymau.png", alt: "Thủy Mẫu White" }],
        category: "Hỗ trợ làm đẹp",
        categorySlug: "ho-tro-lam-dep",
        description: "Làm trắng da an toàn, hiệu quả nhanh",
        brand: "Thủy Mẫu",
        content: mockTiptapContent,
    },
];

/**
 * ========================================
 * PROCESSED EXPORTS
 * ========================================
 */

// Helper to process images array properly
const processProducts = (products) => {
    return products.map((product) => {
        // Handle images array specially to prepend Base Path
        const processedImages = product.images
            ? product.images.map((img) => ({
                  ...img,
                  src: `${BASE_IMG_PATH}${img.src}`,
              }))
            : [];

        return {
            ...product,
            image: `${BASE_IMG_PATH}${product.thumbnail}`, // Main Display Image
            images: processedImages,
            link: generateProductLink(product.categorySlug, product.slug),
        };
    });
};

export const featuredProducts = processProducts(rawFeaturedProducts);
export const mockProducts = processProducts(rawSimpleProducts);

/**
 * ========================================
 * CATEGORIES
 * ========================================
 */
export const featuredCategories = [
    {
        id: "cat-4",
        name: "Hỗ trợ gan và thận",
        description: "Sản phẩm bổ gan từ thiên nhiên",
        slug: "ho-tro-gan-va-than",
        image: "/imgs/categories/bo-gan.jpg",
        link: "/san-pham/ho-tro-gan-va-than",
        productCount: 12,
    },
    {
        id: "cat-2",
        name: "Bổ sung vitamin và khoáng chất",
        description: "Bổ sung vitamin thiết yếu",
        slug: "bo-sung-vitamin-va-khoang-chat",
        image: "/imgs/categories/vitamin.jpg",
        link: "/san-pham/bo-sung-vitamin-va-khoang-chat",
        productCount: 18,
    },
    {
        id: "cat-9",
        name: "Hỗ trợ làm đẹp",
        description: "Làm đẹp an toàn",
        slug: "ho-tro-lam-dep",
        image: "/imgs/categories/my-pham.jpg",
        link: "/san-pham/ho-tro-lam-dep",
        productCount: 24,
    },
    {
        id: "cat-1",
        name: "Hỗ trợ tiêu hoá",
        description: "Hỗ trợ sức khỏe toàn diện",
        slug: "ho-tro-tieu-hoa",
        image: "/imgs/categories/tpcn.jpg",
        link: "/san-pham/ho-tro-tieu-hoa",
        productCount: 30,
    },
];

/**
 * SEARCH PRODUCTS - Smart Search với Tiered Matching
 * Luôn trả về kết quả, không bao giờ rỗng.
 *
 * Ưu tiên matching:
 * 1. Exact match (tên = keyword)
 * 2. Prefix match (tên bắt đầu bằng keyword)
 * 3. Partial match (tên/mô tả chứa keyword)
 * 4. First char match (tên bắt đầu bằng chữ cái đầu của keyword)
 * 5. Featured fallback (sản phẩm nổi bật)
 */
export function searchProducts(query = "", limit = 5) {
    // Nếu không có query, trả về featured products
    if (!query || query.trim() === "") {
        return mockProducts.slice(0, limit);
    }

    const searchTerm = query.toLowerCase().trim();
    const firstChar = searchTerm.charAt(0);

    // 1. Exact match (ưu tiên cao nhất)
    const exactMatches = mockProducts.filter(
        (p) => p.name.toLowerCase() === searchTerm
    );

    // 2. Prefix match (bắt đầu bằng keyword)
    const prefixMatches = mockProducts.filter(
        (p) =>
            p.name.toLowerCase().startsWith(searchTerm) &&
            !exactMatches.includes(p)
    );

    // 3. Partial match (chứa keyword trong name/category/description)
    const partialMatches = mockProducts.filter(
        (p) =>
            (p.name.toLowerCase().includes(searchTerm) ||
                p.category.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm)) &&
            !exactMatches.includes(p) &&
            !prefixMatches.includes(p)
    );

    // Gộp kết quả theo thứ tự ưu tiên
    let results = [...exactMatches, ...prefixMatches, ...partialMatches];

    // 4. Fallback: First char match (nếu results rỗng)
    if (results.length === 0 && firstChar) {
        results = mockProducts.filter((p) =>
            p.name.toLowerCase().startsWith(firstChar)
        );
    }

    // 5. Final fallback: Featured products (nếu vẫn rỗng)
    if (results.length === 0) {
        results = mockProducts.slice(0, limit);
    }

    return results.slice(0, limit);
}

/**
 * GET PRODUCT BY ID
 */
export function getProductById(id) {
    return mockProducts.find((product) => product.id === id) || null;
}

/**
 * FORMAT PRICE
 */
export function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(price);
}

/**
 * GET PRODUCTS BY CATEGORY
 */
export function getProductsByCategory(category) {
    return mockProducts.filter(
        (product) =>
            product.category.toLowerCase() === category.toLowerCase() ||
            product.categorySlug === category
    );
}

/**
 * GET ALL CATEGORIES
 */
export function getAllCategories() {
    const categories = mockProducts.map((product) => product.category);
    return [...new Set(categories)];
}
