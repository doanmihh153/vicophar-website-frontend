import React from "react";
import ProductMetaItem from "./ProductMetaItem";

/**
 * ProductInfoTable
 * Hiển thị thông tin chi tiết sản phẩm dạng bảng
 *
 * @param {object} props
 * @param {object} props.product - Dữ liệu sản phẩm
 */
export default function ProductInfoTable({ product }) {
    if (!product) return null;

    return (
        <div className="product-info mt-2 md:mt-0 pt-2 pb-6">
            {/* Tên sản phẩm */}
            <h1 className="text-xl md:text-2xl font-bold text-vico-primary mb-4">
                {product.title}
            </h1>

            {/* Bảng thông tin */}
            <div className="bg-white rounded-lg overflow-hidden">
                <table className="w-full border-collapse">
                    <tbody>
                        <ProductMetaItem
                            label="Thương hiệu"
                            value={product.brand}
                        />
                        <ProductMetaItem
                            label="Tên chính hãng"
                            value={product.brandName}
                        />
                        <ProductMetaItem
                            label="Danh mục"
                            value={product.categoryName}
                        />
                        <ProductMetaItem
                            label="Số đăng ký"
                            value={product.regNo}
                        />
                        <ProductMetaItem
                            label="Giấy phép đăng ký"
                            value={product.licenseFile}
                            isLink={true}
                            isFullWidth={true}
                            linkText="Xem giấy phép công bố sản phẩm"
                            hideLabel={true}
                        />
                        <ProductMetaItem
                            label="Dạng bào chế"
                            value={product.form}
                        />
                        <ProductMetaItem
                            label="Quy cách"
                            value={product.packaging}
                        />
                        {/* 
                             For ingredients, render fully as per mock data
                         */}
                        <ProductMetaItem
                            label="Thành phần"
                            value={product.ingredients}
                        />
                        <ProductMetaItem
                            label="Hạn sử dụng"
                            value={product.expiry}
                        />
                    </tbody>
                </table>

                {/* Short Description Section */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <h2 className="font-bold text-gray-900 mb-2 text-base">
                        Mô tả ngắn:
                    </h2>
                    <p className="text-gray-600 leading-normal!">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
