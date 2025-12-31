/**
 * ============================================================================
 * TRANG CHI TIẾT SẢN PHẨM
 * ============================================================================
 *
 * Route: /san-pham/[category]/[slug]
 * Ví dụ: /san-pham/ho-tro-tieu-hoa/san-pham-a
 *
 * Nhiệm vụ:
 * - Hiển thị thông tin chi tiết của một sản phẩm
 * - Sử dụng layout Grid mới từ ProductSlugView
 *
 * ============================================================================
 */

import React from "react";
import SanPhamService from "@/services/san-pham.service";
import { ProductSlugView } from "@/components/pages/ProductsPage/ProductSlug";

// Metadata dynamic cho trang chi tiết
export async function generateMetadata({ params }) {
    const { slug } = await params;
    // Service now handles finding by slug properly
    const product = SanPhamService.getProductBySlug(slug);

    if (!product) {
        return {
            title: "Sản phẩm không tồn tại",
        };
    }

    return {
        title: `${product.title} | Vicophar Việt Nam`,
        description: product.description,
        openGraph: {
            images: [product.image],
        },
    };
}

// Generate Static Params (SSG)
export async function generateStaticParams() {
    const products = SanPhamService.getAllProducts();
    // Return params array: [{ category: '...', slug: '...' }]
    return products.map((product) => ({
        category: product.categorySlug,
        slug: product.slug,
    }));
}

export default async function ProductDetailPage({ params }) {
    const { slug } = await params;

    // Tìm nạp dữ liệu sản phẩm
    const product = SanPhamService.getProductBySlug(slug);

    if (!product) {
        return (
            <div className="vico-container py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-800">
                    Sản phẩm không tồn tại
                </h1>
            </div>
        );
    }

    // Render View mới đã xây dựng
    return <ProductSlugView product={product} />;
}
