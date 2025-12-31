/**
 * ============================================================================
 * TRANG DANH MỤC SẢN PHẨM
 * ============================================================================
 *
 * Route: /san-pham/[category]
 * Ví dụ: /san-pham/ho-tro-tieu-hoa
 *
 * Nhiệm vụ:
 * - Nhận params (category slug)
 * - Gọi Service để lấy thông tin danh mục và danh sách sản phẩm
 * - Truyền dữ liệu xuống ProductPageContainer (Client Component)
 *
 * ============================================================================
 */

import React from "react";
import { notFound } from "next/navigation";
import { ProductPageContainer } from "@/components/pages/ProductsPage";
import SanPhamService from "@/services/san-pham.service";

/**
 * 1. Generate Static Params (SSG)
 * Giúp Next.js build sẵn các trang danh mục tĩnh
 */
export async function generateStaticParams() {
    const categories = SanPhamService.getAllCategories();
    return categories.map((cat) => ({
        category: cat.slug,
    }));
}

/**
 * 2. Generate Metadata (SEO)
 * Tạo title và description động dựa vào danh mục
 */
export async function generateMetadata({ params }) {
    const category = SanPhamService.getCategoryBySlug(params.category);

    if (!category) {
        return {
            title: "Không tìm thấy danh mục - Vicophar Việt Nam",
        };
    }

    return {
        title: `${category.name} | Vicophar Việt Nam`,
        description: `Danh sách các sản phẩm thuộc danh mục ${category.name}. Sản phẩm chính hãng, chất lượng cao từ Vicophar.`,
        alternates: {
            canonical: `/san-pham/${category.slug}`,
        },
    };
}

/**
 * 3. Page Component (Server Component)
 */
export default function ProductCategoryPage({ params }) {
    // Lấy thông tin danh mục từ Service
    const category = SanPhamService.getCategoryBySlug(params.category);

    // Nếu không tồn tại danh mục -> 404
    if (!category) {
        notFound();
    }

    // Không cần fetch products ở đây nếu ProductPageContainer tự handle client-side filtering,
    // TUY NHIÊN: Để chuẩn SEO và SSR, ta nên truyền initialCategoryId vào Container.
    // Container sẽ tự filter dựa trên ID này.

    return (
        <ProductPageContainer
            title={category.name}
            // Breadcrumb động
            breadcrumbItems={[
                { label: "Trang Chủ", href: "/" },
                { label: "Sản Phẩm", href: "/san-pham" },
                { label: category.name },
            ]}
            // ID danh mục hiện tại (để Sidebar và Grid active đúng)
            initialCategoryId={category.id}
        />
    );
}
