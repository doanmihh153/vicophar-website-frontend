/**
 * ============================================================================
 * ARTICLE LISTING LAYOUT - SHARED LAYOUT FOR NEWS & BLOGS
 * ============================================================================
 *
 * Shared layout component cho News Company Page và Blogs Page
 * Đảm bảo UI consistency và giảm code duplication
 *
 * LAYOUT STRUCTURE:
 * - Hero Banner (2.3:1 aspect ratio)
 * - Breadcrumb Section (white bg with border)
 * - Featured Articles Grid (ArticleGridWithFilter)
 * - Main Content (9/3 responsive grid)
 *   - Article List (9 cols, order-2 mobile)
 *   - Category Sidebar (3 cols, order-1 mobile)
 * - Newsletter Subscription
 *
 * PROPS:
 * @param {string} heroImage - Hero banner image URL
 * @param {string} heroAlt - Hero image alt text
 * @param {string} heroAriaLabel - ARIA label cho hero section
 * @param {Array} breadcrumbItems - Breadcrumb navigation items
 * @param {string} featuredTitle - Title cho featured articles section
 * @param {Array} featuredArticles - Articles for featured grid
 * @param {Array} articles - Main article list
 * @param {Array} categories - Category filter options
 * @param {string} activeCategory - Currently active category
 * @param {function} onCategoryChange - Category change handler
 * @param {string} className - Additional CSS classes
 *
 * SEO:
 * - Semantic HTML (main, section, article)
 * - ARIA labels for accessibility
 * - Proper heading hierarchy
 * - Schema.org structured data (via child components)
 *
 * PERFORMANCE:
 * - Server Components by default (no "use client" needed here)
 * - Priority loading cho hero image (LCP)
 * - Lazy loading cho below-fold components
 * - Responsive grid để optimize mobile rendering
 *
 * ============================================================================
 */

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ArticleHero from "./ArticleHero";
import ArticleList from "./ArticleList";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";
import CategorySidebar from "@/components/common/CategorySidebar/CategorySidebar";
import NewsletterSubscription from "@/components/common/Newsletter/NewsletterSubscription";
import ArticleGridWithFilter from "@/components/common/Article/ArticleGridWithFilter";

export default function ArticleListingLayout({
    // Hero props
    heroImage,
    heroAlt,
    heroAriaLabel,

    // Breadcrumb props
    breadcrumbItems,

    // Featured section props
    featuredTitle,
    featuredArticles,

    // Main content props
    articles = [],
    categories = [],
    initialCategory = "tat-ca",

    // Sidebar props
    sidebarContent = null, // Optional: Custom sidebar content. Default: CategorySidebar

    // Custom Main Content (Replaces ArticleList)
    mainContent = null,

    // Toggles
    showCategoryFilter = true,
    showNewsletter = true,

    // Optional
    className = "",
}) {
    const router = useRouter();
    // Use initialCategory prop to set initial state
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    // Update activeCategory when prop changes (needed for navigation between routes)
    useEffect(() => {
        setActiveCategory(initialCategory);
    }, [initialCategory]);

    const isFirstRender = useRef(true);
    const userHasInteracted = useRef(false); // Track if user has clicked a category

    /**
     * FILTER LOGIC - LỌC BÀI VIẾT THEO CATEGORY
     * ... (comments preserved)
     */
    const filteredArticles = (() => {
        // Nếu "Tất cả" → hiển thị tất cả
        if (activeCategory === "tat-ca") {
            return articles;
        }

        // Tìm category object theo id (slug)
        const selectedCategory = categories.find(
            (cat) => cat.id === activeCategory
        );

        // Nếu không tìm thấy → hiển thị tất cả (fallback)
        if (!selectedCategory) {
            return articles;
        }

        // Try filter by category NAME first (for Blogs format)
        const byName = articles.filter(
            (article) => article.category === selectedCategory.name
        );

        // If found matches by name, return them
        if (byName.length > 0) {
            return byName;
        }

        // Otherwise, try filter by category ID (for News format)
        return articles.filter(
            (article) =>
                article.category.toLowerCase() === activeCategory.toLowerCase()
        );
    })();

    /**
     * AUTO-SCROLL LOGIC
     * Removed for Dynamic Routing:
     * Since we navigate to new pages (URLs) for categories, we rely on default browser behavior (scroll to top).
     * The previous auto-scroll was for SPA filtering and caused unwanted scrolling on page load.
     */

    // Handle Category Change -> Navigation
    const handleCategoryChange = (categoryId) => {
        userHasInteracted.current = true;

        let targetUrl = "/tin-tuc-cong-ty";
        if (categoryId !== "tat-ca") {
            targetUrl = `/tin-tuc-cong-ty/${categoryId}`;
        }

        // Logic:
        // 1. Change URL (clean, no hash)
        // 2. Prevent default Next.js scroll-to-top ({ scroll: false })
        // 3. Manually scroll to section
        router.push(targetUrl, { scroll: false });

        // Smooth scroll to list after a microtask to allow navigation trigger
        requestAnimationFrame(() => {
            const articleSection = document.getElementById(
                "article-listing-section"
            );
            if (articleSection) {
                const yOffset = -150; // Offset for header
                const y =
                    articleSection.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        });
    };

    return (
        <main className={`article-listing-page ${className}`}>
            {/* HERO BANNER */}
            <ArticleHero
                imageUrl={heroImage}
                altText={heroAlt}
                ariaLabel={heroAriaLabel}
            />

            {/* BREADCRUMB */}
            <section className="relative z-10 py-4 bg-white border-b border-vico-white">
                <div className="vico-container">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </section>

            {/* FEATURED ARTICLES */}
            <div className="relative z-10">
                <ArticleGridWithFilter
                    title={featuredTitle}
                    articles={featuredArticles}
                />
            </div>

            {/* MAIN CONTENT - 9/3 GRID */}
            <section
                id="article-listing-section"
                className="relative z-10 py-6 tablet:py-8 desktop:py-10 bg-vico-hover scroll-mt-40"
            >
                <div className="vico-container">
                    {/* 12-COL GRID: 9 cols (Articles) + 3 cols (Sidebar) 
                        items-stretch is CRITICAL for sticky to work - ensures columns match height
                    */}
                    <div className="article-listing-grid grid desktop:grid-cols-12 gap-4 items-stretch">
                        {/* LEFT: Article List - 9 cols */}
                        <div
                            id="main-content-col"
                            className="desktop:col-span-9 order-2 desktop:order-1"
                        >
                            {mainContent || (
                                <ArticleList
                                    key={activeCategory}
                                    articles={filteredArticles}
                                />
                            )}
                        </div>

                        {/* RIGHT: Category Sidebar - 3 cols */}
                        <div className="desktop:col-span-3 order-1 desktop:order-2">
                            {/* Custom sidebar hoặc default CategorySidebar */}
                            {sidebarContent || (
                                <CategorySidebar
                                    categories={categories}
                                    activeCategory={activeCategory}
                                    onCategoryChange={handleCategoryChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {showNewsletter && (
                    <NewsletterSubscription className="mt-16 mb-6" />
                )}
            </section>
        </main>
    );
}
