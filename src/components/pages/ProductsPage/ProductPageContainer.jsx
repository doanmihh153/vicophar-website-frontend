"use client";

import React, { useState, useMemo } from "react";
import ProductHero from "./ProductHero";
import ProductSidebar from "./ProductSidebar";
import ProductGrid from "./ProductGrid";
import {
    productHeroBanner,
    allProducts,
    productCategories,
} from "@/data/productPage";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";

/**
 * PRODUCT PAGE CONTAINER
 * Main layout for Products Page
 */
export default function ProductPageContainer({
    title,
    breadcrumbItems,
    initialCategoryId = "all",
}) {
    // STATE: Active Category ID (default: "all" or prop)
    const [activeCategoryId, setActiveCategoryId] = useState(initialCategoryId);

    // FILTER LOGIC
    const filteredProducts = useMemo(() => {
        if (activeCategoryId === "all") {
            return allProducts;
        }

        // Find category by ID to get the slug (since products link via slug)
        const selectedCat = productCategories.find(
            (c) => c.id === activeCategoryId
        );
        if (!selectedCat) return []; // Should not happen

        return allProducts.filter((p) => p.categorySlug === selectedCat.slug);
    }, [activeCategoryId]);

    // HANDLER: Category Change
    const handleCategoryChange = (id) => {
        setActiveCategoryId(id);
    };

    return (
        <section className="min-h-screen bg-gray-50 pb-20">
            {/* HERO SECTION */}
            <ProductHero
                image={productHeroBanner.imageUrl}
                alt={productHeroBanner.altText}
            />

            {/* BREADCRUMB */}
            <section className="relative z-10 py-4 bg-vico-green-light">
                <div className="vico-container">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section
                id="product-page-container"
                className="relative z-10 py-6 tablet:py-8 desktop:py-10 bg-gray-50"
            >
                <div className="vico-container">
                    <div className="grid grid-cols-1 desktop:grid-cols-12 gap-6 items-stretch">
                        {/* LEFT SIDEBAR (Desktop only) */}
                        <ProductSidebar
                            activeCategory={activeCategoryId}
                            onCategoryChange={handleCategoryChange}
                        />

                        {/* RIGHT CONTENT */}
                        <div
                            id="main-content-col"
                            className="col-span-1 desktop:col-span-9"
                        >
                            {/* Title for Content Section */}
                            <div className="mb-6 pb-4 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl desktop:text-3xl font-bold text-gray-800">
                                        {activeCategoryId === "all"
                                            ? "Tất cả sản phẩm"
                                            : productCategories.find(
                                                  (c) =>
                                                      c.id === activeCategoryId
                                              )?.name}
                                        <span className="ml-3 text-base desktop:text-lg font-normal text-gray-500">
                                            -{" "}
                                            <span className="font-semibold text-vico-green">
                                                {filteredProducts.length}
                                            </span>{" "}
                                            sản phẩm
                                        </span>
                                    </h2>
                                </div>
                                <p className="text-base text-gray-500 italic flex items-center gap-1">
                                    <span className="font-bold">Lưu ý:</span>
                                    Một số sản phẩm sẽ cần tư vấn từ dược sĩ
                                </p>
                            </div>

                            {/* Product Grid */}
                            <ProductGrid products={filteredProducts} />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
