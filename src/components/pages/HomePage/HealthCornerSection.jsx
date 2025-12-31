/**
 * ============================================================================
 * HEALTH CORNER SECTION - GÓC SỨC KHOẺ
 * ============================================================================
 *
 * Component hiển thị bài viết sức khỏe nổi bật
 * Sử dụng NewsSection reusable component
 *
 * ============================================================================
 */

import React from "react";
import NewsSection from "@/components/common/NewsSection";
import { healthArticles } from "@/data/mockHomePage";

export default function HealthCornerSection() {
    return (
        <NewsSection
            title="Bài viết nổi bật"
            viewAllLink="/goc-suc-khoe"
            articles={healthArticles}
        />
    );
}
