/**
 * ============================================================================
 * NEWS COMPANY PAGE - ROUTE
 * ============================================================================
 *
 * Route: /tin-tuc-cong-ty
 *
 * ============================================================================
 */

import NewsCompanyPage from "@/components/pages/NewsCompanyPage";

export const metadata = {
    title: "Tin Tức Công Ty | Vicophar Việt Nam",
    description:
        "Cập nhật tin tức mới nhất về sản phẩm, khuyến mãi, trị liệu và tuyển dụng từ Vicophar Việt Nam",
};

export default function NewsPage() {
    return <NewsCompanyPage />;
}
