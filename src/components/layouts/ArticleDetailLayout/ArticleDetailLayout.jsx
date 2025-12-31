import React from "react";

/**
 * ============================================================================
 * ARTICLE DETAIL LAYOUT
 * ============================================================================
 *
 * Shared layout component for NewsDetailUI and SlugUI.
 * Handles the responsive grid structure (9/3 split), sidebar placement,
 * and wrapper containers while allowing full customization of styles/tags.
 *
 * DESIGN:
 * - Preserves exact DOM structure required by SEO.
 * - Allows "Overlay" style (News) and "Standard" style (Health).
 */

export default function ArticleDetailLayout({
    children, // Main Content (col-span-9)
    sidebar, // Sidebar Content (col-span-3)
    breadcrumbs, // Top Breadcrumb Section
    hero, // Hero Section (e.g. Sticky Banner)
    relatedSection, // Bottom Related Articles Section

    // Customization Props
    mainClassName = "", // Class for the <main> tag
    WrapperTag = "div", // Tag for the wrapper container (div vs section)
    wrapperClassName = "", // Class for the wrapper container
    contentClassName = "", // Class for the content column (col-span-9)
    backgroundLayer, // Optional background layer (for News overlay effect)
    containerId, // Optional ID for the wrapper
}) {
    return (
        <main className={mainClassName}>
            {/* 1. Breadcrumbs */}
            {breadcrumbs}

            {/* 2. Hero / Banner */}
            {hero}

            {/* 3. Main Content Wrapper */}
            <WrapperTag id={containerId} className={wrapperClassName}>
                {/* Optional Background Layer (rendered before content for z-index handling) */}
                {backgroundLayer}

                <div className="vico-container">
                    <div className="grid desktop:grid-cols-12 gap-4">
                        {/* LEFT COLUMN: Main Article Content (9 cols) */}
                        <div
                            id="main-content-col"
                            className={`desktop:col-span-9 ${contentClassName}`}
                        >
                            {children}
                        </div>

                        {/* RIGHT COLUMN: Sidebar (3 cols) */}
                        <aside className="desktop:col-span-3">{sidebar}</aside>
                    </div>
                </div>
            </WrapperTag>

            {/* 4. Related Articles */}
            {relatedSection}
        </main>
    );
}
