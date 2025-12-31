/**
 * ============================================================================
 * ACCOUNT: SAN PHAM SERVICE
 * ============================================================================
 *
 * Nhiệm vụ: Xử lý toàn bộ logic liên quan đến dữ liệu sản phẩm.
 * - Lấy danh sách danh mục
 * - Lấy danh sách sản phẩm theo danh mục
 * - Lấy chi tiết sản phẩm theo slug
 *
 * Lưu ý:
 * - File này CHỈ chứa logic xử lý dữ liệu (không chứa UI).
 * - Dữ liệu hiện tại đang là Mock Data (import từ src/data/productPage.js).
 * - Sau này có thể thay thế bằng API call thực tế mà không ảnh hưởng UI.
 *
 * ============================================================================
 */

import {
    allProducts,
    productCategories,
    getCategoryBySlug as fetchCategoryBySlug,
    getProductsByCategory as fetchProductsByCategory,
} from "@/data/productPage";

const SanPhamService = {
    /**
     * Lấy tất cả danh mục sản phẩm
     * @returns {Array} Danh sách danh mục
     */
    getAllCategories: () => {
        // Lọc bỏ danh mục "all" nếu cần thiết, hoặc trả về tất cả
        return productCategories.filter((cat) => cat.slug !== "all");
    },

    /**
     * Lấy thông tin chi tiết một danh mục dựa vào slug
     * @param {string} slug - Slug của danh mục (ví dụ: 'ho-tro-tieu-hoa')
     * @returns {Object|null} Object danh mục hoặc null nếu không tìm thấy
     */
    getCategoryBySlug: (slug) => {
        if (!slug) return null;
        return fetchCategoryBySlug(slug);
    },

    /**
     * Lấy danh sách sản phẩm thuộc một danh mục
     * @param {string} categorySlug - Slug của danh mục
     * @returns {Array} Danh sách sản phẩm
     */
    getProductsByCategory: (categorySlug) => {
        return fetchProductsByCategory(categorySlug);
    },

    /**
     * Lấy chi tiết một sản phẩm dựa vào Slug
     * @param {string} slugOrCategory - Slug sản phẩm (hoặc Category slug nếu gọi form 2 tham số)
     * @param {string} [productSlug] - Slug sản phẩm (nếu tham số đầu là category)
     * @returns {Object|undefined} Object sản phẩm hoặc undefined
     */
    getProductBySlug: (slugOrCategory, productSlug) => {
        // Support both: getProductBySlug(slug) AND getProductBySlug(category, slug)
        const slug = productSlug || slugOrCategory;

        return allProducts.find((p) => p.slug === slug);
    },

    /**
     * Lấy tất cả sản phẩm (cho trang master /san-pham)
     * @returns {Array} Tất cả sản phẩm
     */
    getAllProducts: () => {
        return allProducts;
    },
};

export default SanPhamService;
