/**
 * ProductsSuggessFooter - Footer Section
 *
 * Chứa:
 * - Hidden SEO metadata (Schema.org)
 * - "Xem tất cả sản phẩm" button/link
 */

import React, { memo } from "react";
import Link from "next/link";

function ProductsSuggessFooter({ productCount }) {
    return (
        <>
            {/* Hidden SEO Metadata */}
            <div className="hidden">
                <meta itemProp="numberOfItems" content={productCount} />
                <meta
                    itemProp="description"
                    content="Danh sách sản phẩm nổi bật của Vicophar - Dược mỹ phẩm thiên nhiên"
                />
            </div>

            {/* View All Button */}
            <div className="mt-6 flex justify-center">
                <Link
                    href="/san-pham"
                    className="vico-btn-secondary text-body font-semibold px-6 md:px-8 desktop:px-8 py-2.5 md:py-3 desktop:py-3"
                    aria-label="Xem tất cả sản phẩm"
                >
                    <span className="leading-normal!">Xem tất cả sản phẩm</span>
                </Link>
            </div>
        </>
    );
}

export default memo(ProductsSuggessFooter);
