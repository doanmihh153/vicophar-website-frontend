import React from "react";
import { ProductPageContainer } from "@/components/pages/ProductsPage";
import { allProducts } from "@/data/productPage";

export const metadata = {
    title: "Sản Phẩm | Vicophar Việt Nam",
    description:
        "Khám phá các sản phẩm chăm sóc sức khỏe chất lượng cao từ Vicophar Việt Nam.",
};

export default function ProductsPage() {
    return (
        <ProductPageContainer
            title="Tất cả sản phẩm"
            breadcrumbItems={[
                { label: "Trang Chủ", href: "/" },
                { label: "Sản Phẩm" },
            ]}
            products={allProducts}
        />
    );
}
