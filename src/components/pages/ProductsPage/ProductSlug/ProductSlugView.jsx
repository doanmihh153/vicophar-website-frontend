"use client";

import React, { useRef } from "react";
import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductGallery from "./ProductGallery";
import ProductInfoTable from "./ProductInfoTable";
import ProductActionSidebar from "./ProductActionSidebar";
import ProductDescription from "./ProductDescription";
import ProductWarningBox from "./ProductWarningBox";
import ProductContentSidebar from "./ProductContentSidebar";
import ProductFAQ from "./ProductFAQ";
import ProductReviews from "./ProductReviews";
import ProductQA from "./ProductQA";
import RelatedProducts from "./RelatedProducts";
import ProductSection from "./components/ProductSection";
import ProductDisclaimer from "./ProductDisclaimer";

/**
 * ProductSlugView
 * Layout chính của trang chi tiết sản phẩm
 *
 * STRUCTURE:
 * 1. Breadcrumb
 * 2. Top Section (Main Info & Action)
 *    - Left Col (9/12):
 *      - Inner Grid (Image 50% - Info 50%)
 *    - Right Col (3/12): Action Sidebar
 * 3. Detail Section (Description & TOC)
 *    - Left Col (9/12): Content
 *    - Right Col (3/12): Sticky TOC
 * 4. FAQ, Reviews, Related
 */
export default function ProductSlugView({ product }) {
    const contentRef = useRef(null);

    if (!product) return null;

    return (
        <section className="product-page pb-16 bg-vico-hover min-h-screen">
            {/* 1. Breadcrumb */}
            <section className="py-2 md:py-4 bg-white">
                <div className="vico-container">
                    <ProductBreadcrumb categoryName={product.category} />
                </div>
            </section>

            {/* 2. Top Section: Gallery - Info - Action Sidebar */}

            <div className="vico-container pt-4">
                <div
                    className="grid grid-cols-1 desktop:grid-cols-12 gap-2 desktop:gap-4 mb-2 md:mb-6 relative"
                    id="product-main-content"
                >
                    {/* Main Content Area (Gallery + Info) */}
                    <div className="col-span-1 desktop:col-span-9 bg-vico-white p-4 -mx-4 tablet:-mx-5 desktop:mx-0 rounded-none desktop:rounded-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 desktop:gap-4">
                            {/* Gallery (Left - 6 cols) */}
                            <div className="md:col-span-6 desktop:col-span-6">
                                <ProductGallery
                                    images={
                                        product.images || [
                                            {
                                                src: product.image,
                                                alt: product.title,
                                            },
                                        ]
                                    }
                                    productTitle={product.title}
                                    isBestSeller={product.isBestSeller}
                                />
                            </div>

                            {/* Info Table (Right - 6 cols) */}
                            <div className="md:col-span-6 desktop:col-span-6">
                                <ProductInfoTable product={product} />
                            </div>
                        </div>
                    </div>

                    {/* Action Sidebar (Right - 3 cols) */}
                    <div className="col-span-1 desktop:col-span-3">
                        <ProductActionSidebar />
                    </div>
                </div>
            </div>

            {/* 3. Detail Section: Description - TOC */}
            <ProductSection className="" innerClassName="p-4 desktop:p-2">
                <div
                    className="grid grid-cols-1 desktop:grid-cols-12 gap-2 desktop:gap-4 relative"
                    id="product-description-section"
                >
                    {/* TOC Sidebar */}
                    <div className="hidden desktop:block col-span-1 desktop:col-span-3">
                        <ProductContentSidebar
                            content={product.content}
                            product={product}
                        />
                    </div>

                    {/* Content Column */}
                    <div
                        ref={contentRef}
                        className="col-span-1 desktop:col-span-9 space-y-8 p-0 desktop:p-4"
                        id="product-detail-content"
                    >
                        {/* Tiptap Content */}
                        <div id="product-description">
                            <h2 className="text-xl desktop:text-2xl font-bold text-vico-primary mb-2 md:mb-4 mt-2 md:mt-0">
                                Thông tin chi tiết sản phẩm
                            </h2>
                            <ProductDescription content={product.content} />
                        </div>

                        {/* Warnings (warn variant) */}
                        <ProductWarningBox />
                    </div>
                </div>
                {/* Disclaimer - Nằm dưới section description */}
                <ProductDisclaimer />
            </ProductSection>

            {/* 4. FAQ & Reviews - Tách ra vico-container riêng */}
            {/* 4. FAQ */}
            <ProductSection>
                <ProductFAQ />
            </ProductSection>

            {/* 5. Reviews */}
            <ProductSection>
                <ProductReviews />
            </ProductSection>

            {/* 6. QA */}
            <ProductSection>
                <ProductQA />
            </ProductSection>

            {/* 7. Related Products */}
            <div className="vico-container mt-8">
                <RelatedProducts
                    currentId={product.id}
                    categorySlug={product.categorySlug}
                />
            </div>
        </section>
    );
}
