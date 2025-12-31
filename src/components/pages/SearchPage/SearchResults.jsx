"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/common/Product/ProductCard";

const INITIAL_LIMIT = 3;

export default function SearchResults({
    products = [],
    blogs = [],
    activeType = "all",
}) {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [showAllBlogs, setShowAllBlogs] = useState(false);

    const showProducts =
        (activeType === "all" || activeType === "product") &&
        products.length > 0;
    const showBlogs =
        (activeType === "all" || activeType === "blog") && blogs.length > 0;

    // Số items hiển thị
    const displayedProducts = showAllProducts
        ? products
        : products.slice(0, INITIAL_LIMIT);
    const displayedBlogs = showAllBlogs ? blogs : blogs.slice(0, INITIAL_LIMIT);

    // Có thêm items không?
    const hasMoreProducts = products.length > INITIAL_LIMIT;
    const hasMoreBlogs = blogs.length > INITIAL_LIMIT;

    return (
        <div className="space-y-10">
            {/* Product Results - Sử dụng ProductCard */}
            {showProducts && (
                <section>
                    {activeType === "all" && (
                        <h2 className="text-h4 font-bold text-vico-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                            Sản phẩm ({products.length})
                        </h2>
                    )}
                    <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4 md:gap-6">
                        {displayedProducts.map((product, index) => (
                            <ProductCard
                                key={product.id || index}
                                product={product}
                                priority={index === 0}
                                className="hover:border-vico-green"
                            />
                        ))}
                    </div>

                    {/* Nút Xem thêm */}
                    {hasMoreProducts && (
                        <div className="mt-6 text-center">
                            <button
                                onClick={() =>
                                    setShowAllProducts(!showAllProducts)
                                }
                                className="inline-flex items-center gap-2 px-6 py-3 hover:text-vico-green transition-colors"
                            >
                                {showAllProducts
                                    ? "Thu gọn"
                                    : `Xem thêm ${
                                          products.length - INITIAL_LIMIT
                                      } sản phẩm`}
                            </button>
                        </div>
                    )}
                </section>
            )}

            {/* Blog Results - Sử dụng pattern từ GridVariant */}
            {showBlogs && (
                <section>
                    {activeType === "all" && showProducts && (
                        <div className="w-full h-px bg-gray-100 my-8"></div>
                    )}
                    {activeType === "all" && (
                        <h2 className="text-h4 font-bold text-vico-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                            Tin tức ({blogs.length})
                        </h2>
                    )}
                    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 md:gap-6">
                        {displayedBlogs.map((blog, index) => (
                            <Link
                                key={blog.id || index}
                                href={blog.link || `/goc-suc-khoe/${blog.id}`}
                                className="group flex flex-col h-full bg-white rounded-2xl border border-vico-gray-200 overflow-hidden hover:border-vico-green transition-colors"
                            >
                                {/* Image */}
                                <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    />
                                    {/* Category Tag */}
                                    {blog.category && (
                                        <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold text-vico-gray-700 rounded-md">
                                            {blog.category}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col grow">
                                    <h3 className="font-bold text-vico-gray-900 mb-2 line-clamp-2 group-hover:text-vico-green transition-colors">
                                        {blog.title}
                                    </h3>

                                    <div className="mt-auto pt-2 flex items-center justify-between text-sm text-vico-gray-500">
                                        <span>
                                            {blog.publishDate || blog.date}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Nút Xem thêm */}
                    {hasMoreBlogs && (
                        <div className="mt-10 text-center pb-8">
                            <button
                                onClick={() => setShowAllBlogs(!showAllBlogs)}
                                className="inline-flex items-center gap-2 px-6 py-3 hover:text-vico-green transition-colors"
                            >
                                {showAllBlogs
                                    ? "Thu gọn"
                                    : `Xem thêm ${
                                          blogs.length - INITIAL_LIMIT
                                      } bài viết`}
                            </button>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}
