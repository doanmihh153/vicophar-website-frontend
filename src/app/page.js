import dynamic from "next/dynamic";
import {
    HeroSectionWrapper,
    AboutUsSectionWrapper,
    HealthCornerSection,
} from "@/components/pages/HomePage";
import FeaturedProductsSectionWrapper from "@/components/pages/HomePage/FeaturedProductsSectionWrapper";

// Lazy load heavy/interactive components below the fold
const UserTestimonialsSection = dynamic(() =>
    import("@/components/pages/HomePage/ProductsSuggess")
);
const NewsletterSection = dynamic(() =>
    import("@/components/pages/HomePage/NewsletterSection")
);
const ContactUsSection = dynamic(() =>
    import("@/components/pages/HomePage/ContactUs")
);

/**
 * ============================================================================
 * TRANG CHỦ - VICOPHAR VIETNAM
 * ============================================================================
 *
 * Trang chủ website Vicophar với các sections:
 * - Hero Section (Banner + Khuyến mãi + Giới thiệu đôi điều)
 * - About Us Section (Slider + Services + Features)
 * - Featured Products Wrapper (Testimonials + Health Corner + Newsletter)
 * - Contact Section
 *
 * OPTIMIZATIONS:
 * - Server Component (No "use client")
 * - Lazy loading cho các section dưới fold
 * - Static import cho LCP elements
 *
 * ============================================================================
 */
export default function Home() {
    return (
        <main className="homepage">
            {/* ===========================================
                 HERO SECTION - BANNER + KHUYẾN MÃI + GIỚI THIỆU
                 =========================================== */}
            <HeroSectionWrapper />

            {/* ===========================================
                 ABOUT US SECTION - GIỚI THIỆU CÔNG TY
                 ===========================================
                 Bao gồm:
                 - AboutUsGallery: Slider ảnh hoạt động
                 - AboutUsServices: Cam kết dịch vụ
                 - AboutUsFeatures: Vùng nguyên liệu sạch
                 =========================================== */}
            <AboutUsSectionWrapper />

            {/* ===========================================
                 FEATURED PRODUCTS WRAPPER - GRADIENT BACKGROUND
                 ===========================================
                 - Gradient: #E7FFEA → #FFF
                 - RibbonBanner decoration
                 - Bao gồm 3 sections:
                   1. UserTestimonialsSection (Sản phẩm nổi bật)
                   2. FeaturedProductsSection (Góc sức khỏe)
                   3. NewsletterSection (Đăng ký nhận tin)
             =========================================== */}
            <FeaturedProductsSectionWrapper>
                {/* USER TESTIMONIALS - SẢN PHẨM NỔI BẬT */}
                <UserTestimonialsSection />

                {/* FEATURED PRODUCTS - GÓC SỨC KHỎE */}
                <HealthCornerSection />

                {/* NEWSLETTER - ĐĂNG KÝ NHẬN TIN */}
                <NewsletterSection />
            </FeaturedProductsSectionWrapper>

            {/* ===========================================
                 CONTACT SECTION - LIÊN HỆ VỚI VICOPHAR
                 =========================================== */}
            <ContactUsSection />
        </main>
    );
}
