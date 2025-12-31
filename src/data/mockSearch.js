/**
 * ============================================================================
 * COMBINED SEARCH API - VICOPHAR
 * ============================================================================
 *
 * API tìm kiếm tổng hợp cho cả Products và Blogs
 * Trả về kết quả mixed với type để phân biệt
 *
 * ============================================================================
 */

import { searchProducts } from "./mockProducts";
import { searchBlogs } from "./mockBlogs";

/**
 * SEARCH ALL - Tìm kiếm tổng hợp cả products và blogs
 * @param {string} query - Từ khóa tìm kiếm
 * @param {Object} options - Tùy chọn tìm kiếm
 * @param {number} options.productLimit - Số lượng products tối đa (default: 3)
 * @param {number} options.blogLimit - Số lượng blogs tối đa (default: 2)
 * @param {boolean} options.mixResults - Trộn kết quả hay group theo type (default: true)
 * @returns {Array} Danh sách kết quả mixed
 */
export function searchAll(
    query = "",
    { productLimit = 3, blogLimit = 2, mixResults = true } = {}
) {
    // Tìm products
    const products = searchProducts(query, productLimit).map((product) => ({
        ...product,
        type: "product", // Thêm type để phân biệt
    }));

    // Tìm blogs
    const blogs = searchBlogs(query, blogLimit).map((blog) => ({
        ...blog,
        type: "blog", // Thêm type để phân biệt
    }));

    // Trộn kết quả hoặc group theo type
    if (mixResults) {
        // Mix: product, blog, product, blog, product...
        const mixed = [];
        const maxLength = Math.max(products.length, blogs.length);

        for (let i = 0; i < maxLength; i++) {
            if (products[i]) mixed.push(products[i]);
            if (blogs[i]) mixed.push(blogs[i]);
        }

        return mixed;
    } else {
        // Group: all products first, then all blogs
        return [...products, ...blogs];
    }
}

/**
 * SEARCH BY TYPE - Tìm kiếm theo loại cụ thể
 * @param {string} query - Từ khóa tìm kiếm
 * @param {string} type - Loại: "product" hoặc "blog"
 * @param {number} limit - Số lượng kết quả tối đa
 * @returns {Array} Danh sách kết quả
 */
export function searchByType(query = "", type = "product", limit = 5) {
    if (type === "product") {
        return searchProducts(query, limit).map((item) => ({
            ...item,
            type: "product",
        }));
    } else if (type === "blog") {
        return searchBlogs(query, limit).map((item) => ({
            ...item,
            type: "blog",
        }));
    }

    return [];
}
