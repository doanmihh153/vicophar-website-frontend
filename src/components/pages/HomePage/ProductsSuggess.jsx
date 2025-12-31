/**
 * ============================================================================
 * PRODUCTS SUGGESS SECTION - SẢN PHẨM NỔI BẬT (TRANG CHỦ)
 * ============================================================================
 *
 * Main component điều phối các sub-components
 *
 * SUB-COMPONENTS:
 * ---------------
 * - ProductsSuggessHeader: Ribbon + Heading + Category Tabs
 * - ProductsSuggessCarousel: Embla Carousel + Products Grid
 * - ProductsSuggessFooter: SEO Metadata + View All Button
 *
 * ============================================================================
 */

"use client";

import React, { useState, useCallback } from "react";
import { featuredProducts } from "@/data/mockHomePage";

import ProductsSuggessHeader from "./ProductsSuggess/ProductsSuggessHeader";
import ProductsSuggessCarousel from "./ProductsSuggess/ProductsSuggessCarousel";
import ProductsSuggessFooter from "./ProductsSuggess/ProductsSuggessFooter";

export default function ProductsSuggessSection() {
    const [selectedCategory, setSelectedCategory] = useState("featured");

    const handleCategoryChange = useCallback((categoryId) => {
        setSelectedCategory(categoryId);
    }, []);

    const filteredProducts = featuredProducts
        .filter((product) => {
            if (selectedCategory === "featured") return product.isBestSeller;
            if (selectedCategory === "kids")
                return product.categoryName === "Dành cho bé";
            if (selectedCategory === "liver-heart")
                return ["Hỗ trợ gan và thận", "Hỗ trợ tim mạch"].includes(
                    product.category
                );
            if (selectedCategory === "respiratory")
                return product.category === "Hỗ trợ hô hấp";
            return false;
        })
        .slice(0, 8);

    return (
        <section
            className="relative"
            role="region"
            aria-labelledby="featured-products-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <ProductsSuggessHeader
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />

            <ProductsSuggessCarousel
                products={filteredProducts}
                selectedCategory={selectedCategory}
            />

            <ProductsSuggessFooter productCount={filteredProducts.length} />
        </section>
    );
}
