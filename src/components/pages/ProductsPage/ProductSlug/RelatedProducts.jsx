import React from "react";
import { ProductCard } from "@/components/common/Product";
import { featuredProducts } from "@/data/mockProducts";

export default function RelatedProducts({ currentId, categorySlug }) {
    // Filter Mock Data: Same category, exclude current
    const related = featuredProducts
        .filter((p) => p.categorySlug === categorySlug && p.id !== currentId)
        .slice(0, 4);

    if (related.length === 0) return null;

    return (
        <section className="related-products mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase">
                Sản phẩm cùng danh mục
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
