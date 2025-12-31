/**
 * ============================================================================
 * ARTICLE DISCLAIMER - LƯU Ý BÀI VIẾT (REUSABLE)
 * ============================================================================
 *
 * Component hiển thị lưu ý pháp lý về thông tin trong bài viết
 * - Disclaimer với 2 variant: warn (amber) và success (green)
 * - Alert style với background + border-left
 * - Icon để thu hút attention
 * - Reusable với props cho title, content, variant
 *
 * USAGE:
 * ------
 * // Mặc định (warn style cho Article)
 * <ArticleDisclaimer />
 *
 * // Custom warn (cho Product Warning)
 * <ArticleDisclaimer
 *   title="Lưu ý"
 *   content="Thực phẩm này không phải là thuốc..."
 * />
 *
 * // Success variant
 * <ArticleDisclaimer
 *   variant="success"
 *   title="Cam kết"
 *   content="Sản phẩm chính hãng 100%..."
 * />
 *
 * ============================================================================
 */

import { WarningIcon, SuccessIcon } from "@/assets/icons";

// Nội dung mặc định cho Article
const DEFAULT_TITLE = "Lưu ý";
const DEFAULT_CONTENT = `Thông tin và sản phẩm gợi ý trong bài viết chỉ mang tính chất tham khảo. 
Vui lòng liên hệ với Bác sĩ, Dược sĩ hoặc chuyên viên y tế để được tư vấn cụ thể 
phù hợp với tình trạng sức khỏe của bạn.`;

// Cấu hình styles theo variant
const VARIANT_STYLES = {
    warn: {
        container: "bg-amber-50 border-amber-500",
        icon: "text-amber-500",
        text: "text-amber-900",
        Icon: WarningIcon,
    },
    success: {
        container: "bg-vico-green-light border-vico-green",
        icon: "text-vico-green",
        text: "text-green-900",
        Icon: SuccessIcon,
    },
};

export default function ArticleDisclaimer({
    title = DEFAULT_TITLE,
    content = DEFAULT_CONTENT,
    variant = "warn", // warn | success
    className = "",
    iconClassName = "",
}) {
    const styles = VARIANT_STYLES[variant] || VARIANT_STYLES.warn;
    const IconComponent = styles.Icon;

    return (
        <div
            className={`border-l-4 p-6 rounded-lg mb-6 ${styles.container} ${className}`}
        >
            <div className="flex items-start gap-3">
                <IconComponent
                    className={`w-8 h-8 shrink-0 -translate-0.5 ${styles.icon} ${iconClassName}`}
                />
                <div>
                    <p className={`leading-relaxed ${styles.text}`}>
                        <strong className="font-semibold">{title}:</strong>{" "}
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
}
