"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/common/Product/ProductCard";
import { featuredProducts } from "@/data/mockProducts";
import { mockBlogs } from "@/data/mockBlogs";

export default function SearchEmptyState({ initialQuery }) {
    return (
        <div>
            <div className="bg-gray-50 rounded-xl p-8 text-center mb-10">
                <p className="text-lg text-vico-gray-600 mb-2 font-medium">
                    Rất tiếc, không tìm thấy kết quả nào cho &quot;
                    {initialQuery}
                    &quot;
                </p>
                <p className="text-vico-gray-500">
                    Vui lòng kiểm tra lại chính tả hoặc thử các từ khóa khác.
                </p>
            </div>

            {/* Product Suggestions */}
            <div className="mb-10">
                <h3 className="text-h3 font-bold text-vico-gray-900 mb-6">
                    Gợi ý sản phẩm
                </h3>
                <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4 md:gap-6">
                    {featuredProducts.slice(0, 3).map((product, idx) => (
                        <ProductCard
                            key={idx}
                            product={product}
                            className="hover:border-vico-green bg-gray-50"
                        />
                    ))}
                </div>
            </div>

            {/* Article Suggestions */}
            <div>
                <h3 className="text-h3 font-bold text-vico-gray-900 mb-6">
                    Gợi ý bài viết
                </h3>
                <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 md:gap-6">
                    {mockBlogs.slice(0, 3).map((blog, idx) => (
                        <Link
                            key={idx}
                            href={`/goc-suc-khoe/${blog.id}`}
                            className="group flex flex-col h-full bg-white rounded-2xl border border-vico-gray-200 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                />
                                {/* Category Tag Overlay */}
                                {blog.category && (
                                    <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold text-vico-gray-700 rounded-md">
                                        {blog.category}
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col grow">
                                <h3 className="font-bold text-vico-gray-900 mb-2 line-clamp-2 transition-colors">
                                    {blog.title}
                                </h3>

                                <div className="mt-auto pt-2 flex items-center justify-between text-base text-vico-gray-500">
                                    <span>{blog.publishDate}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
