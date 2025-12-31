/**
 * ============================================================================
 * COMPANY NEWS SECTION - TIN TỨC CÔNG TY
 * ============================================================================
 *
 * Component hiển thị Tin tức công ty
 * Sử dụng NewsSection reusable component
 *
 * ============================================================================
 */

import React from "react";
import NewsSection from "@/components/common/NewsSection";
import { healthArticles } from "@/data/mockHomePage";

export default function StoryCompanyNews() {
    return (
        <NewsSection
            title="Tin tức công ty"
            viewAllLink="/tin-tuc-cong-ty"
            articles={healthArticles}
        />
    );
}
