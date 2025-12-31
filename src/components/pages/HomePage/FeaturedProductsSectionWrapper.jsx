/**
 * ============================================================================
 * FEATURED PRODUCTS SECTION WRAPPER - WRAPPER CHO CÁC SECTION SẢN PHẨM
 * ============================================================================
 *
 * Component wrapper bao bọc các sections liên quan đến sản phẩm
 * với gradient background
 *
 * FEATURES:
 * ---------
 * ✅ Gradient background: #E7FFEA (top) → #FFF (bottom)
 * ✅ Bao bọc đúng 3 sections: UserTestimonialsSection, FeaturedProductsSection, HealthTipsSection
 *
 * USAGE:
 * ------
 * import FeaturedProductsSectionWrapper from '@/components/pages/HomePage/FeaturedProductsSectionWrapper';
 *
 * <FeaturedProductsSectionWrapper>
 *   <UserTestimonialsSection />
 *   <FeaturedProductsSection />
 *   <HealthTipsSection />
 * </FeaturedProductsSectionWrapper>
 *
 * ============================================================================
 */

import React from "react";

export default function FeaturedProductsSectionWrapper({ children }) {
    return (
        <div
            className="z-layer-section relative"
            style={{
                background:
                    "linear-gradient(to bottom, #E7FFEA 0%, #FFFFFF 100%)",
            }}
        >
            {children}
        </div>
    );
}
