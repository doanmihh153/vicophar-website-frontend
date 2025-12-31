import React from "react";
import ProductArticleRenderer from "./ProductArticleRenderer";

export default function ProductDescription({ content }) {
    if (!content) return null;

    return (
        <div id="product-description" className="product-description">
            <ProductArticleRenderer content={content} />
        </div>
    );
}
