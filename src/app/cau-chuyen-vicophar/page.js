import StoryOurPage from "@/components/pages/StoryOurPage";

// ✅ SEO Metadata chuẩn
export const metadata = {
    title: "Câu Chuyện Vicophar - Về Chúng Tôi | Vicophar Việt Nam",
    description:
        "Vicophar Việt Nam - Top doanh nghiệp nghiên cứu, bào chế và phân phối dược phẩm hàng đầu Việt Nam. Nửa thập kỷ hình thành và phát triển vì sức khỏe cộng đồng. Tầm nhìn 2030, sứ mệnh và giá trị cốt lõi.",
    keywords: [
        "Vicophar",
        "Vicophar Việt Nam",
        "dược phẩm Việt Nam",
        "công ty dược phẩm",
        "về chúng tôi Vicophar",
        "lịch sử Vicophar",
        "tầm nhìn sứ mệnh",
        "dược mỹ phẩm thiên nhiên",
        "GMP",
        "cây thuốc Việt",
    ],
    openGraph: {
        title: "Câu Chuyện Vicophar - Về Chúng Tôi | Vicophar Việt Nam",
        description:
            "Top doanh nghiệp nghiên cứu, bào chế và phân phối dược phẩm hàng đầu Việt Nam. Nửa thập kỷ hình thành và phát triển.",
        type: "website",
        locale: "vi_VN",
        siteName: "Vicophar Việt Nam",
        images: [
            {
                url: "/imgs/storyour/mockup-truck-vicophar-AI.png",
                width: 1920,
                height: 835,
                alt: "Vicophar - Doanh nghiệp dược phẩm hàng đầu Việt Nam",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Câu Chuyện Vicophar - Về Chúng Tôi",
        description:
            "Top doanh nghiệp nghiên cứu, bào chế và phân phối dược phẩm hàng đầu Việt Nam.",
        images: ["/imgs/storyour/mockup-truck-vicophar-AI.png"],
    },
    alternates: {
        canonical: "/cau-chuyen-vicophar",
    },
};

export default function StoryPage() {
    return <StoryOurPage />;
}
