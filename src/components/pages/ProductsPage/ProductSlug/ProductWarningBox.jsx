/**
 * ============================================================================
 * PRODUCT WARNING BOX - CẢNH BÁO SẢN PHẨM
 * ============================================================================
 *
 * Sử dụng ArticleDisclaimer reusable với nội dung dành riêng cho sản phẩm
 *
 * ============================================================================
 */

import React from "react";
import ArticleDisclaimer from "@/components/common/Article/ArticleDetail/ArticleDisclaimer";

// Nội dung cảnh báo cho sản phẩm
const PRODUCT_WARNING_CONTENT = `Không sử dụng cho người mẫn cảm với bất cứ thành phần nào của sản phẩm.
Không dùng quá liều khuyến cáo.
Người đang sử dụng thuốc, hỏi ý kiến bác sĩ trước khi dùng.
Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.
Đọc kỹ hướng dẫn sử dụng trước khi dùng.`;

export default function ProductWarningBox() {
    return (
        <ArticleDisclaimer
            title="Lưu ý"
            content={PRODUCT_WARNING_CONTENT}
            className="mt-8"
            iconClassName="hidden! md:block!"
        />
    );
}
