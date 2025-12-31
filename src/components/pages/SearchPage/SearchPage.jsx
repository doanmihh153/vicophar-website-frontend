"use client";

import React, { useState, useEffect, useMemo } from "react";
import { searchService } from "@/services/searchService";
import CategorySidebar from "@/components/common/CategorySidebar/CategorySidebar";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";
import TypewriterLoader from "@/components/common/PageLoader/TypewriterLoader";
import SearchEmptyState from "./SearchEmptyState";
import SearchResults from "./SearchResults";

export default function SearchPage({ initialQuery = "" }) {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeType, setActiveType] = useState("all");

    // Fetch Data
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await searchService.search({
                    query: initialQuery,
                    type: "all",
                    limit: 100, // Fetch more to filter client side
                });
                setResults(data);
            } catch (error) {
                console.error("Search error:", error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        if (initialQuery) {
            fetchData();
        } else {
            setIsLoading(false);
        }
    }, [initialQuery]);

    // Derived Data
    const products = useMemo(
        () => results.filter((i) => i.type === "product"),
        [results]
    );
    const blogs = useMemo(
        () => results.filter((i) => i.type === "blog"),
        [results]
    );

    // Categories for Sidebar
    const sidebarCategories = [
        { id: "all", name: "Tất cả", count: results.length },
        { id: "product", name: "Sản phẩm", count: products.length },
        { id: "blog", name: "Tin tức", count: blogs.length },
    ];

    const hasResults = results.length > 0;

    return (
        <div className="bg-vico-hover min-h-screen">
            <div className="py-2 bg-vico-green-light">
                <Breadcrumb
                    items={[
                        { label: "Trang chủ", href: "/" },
                        { label: "Tìm kiếm" },
                    ]}
                    className="mb-2 vico-container"
                />
            </div>
            <div className="vico-container pb-section">
                <div className="py-4">
                    <h1 className="text-h3 md:text-h2 font-normal! text-vico-gray-900 ">
                        Kết quả tìm kiếm:{" "}
                        <span className="text-vico-green text-h1">
                            &quot;{initialQuery}&quot;
                        </span>
                    </h1>
                </div>
                <div className="grid desktop:grid-cols-12 gap-4">
                    {/* LEFT SIDEBAR (3 Cols) */}
                    <aside className="desktop:col-span-3 relative">
                        <CategorySidebar
                            categories={sidebarCategories}
                            activeCategory={activeType}
                            onCategoryChange={setActiveType}
                            className="sticky top-[120px] z-40"
                            initialVisibleCount={5}
                        />
                    </aside>

                    {/* MAIN CONTENT (9 Cols) */}
                    <div className="desktop:col-span-9">
                        {isLoading ? (
                            <div className="py-20 flex flex-col items-center justify-center">
                                <TypewriterLoader />
                                <p className="mt-8 text-vico-green font-bold text-lg animate-pulse tracking-widest uppercase">
                                    Đang tìm kiếm...
                                </p>
                            </div>
                        ) : !hasResults ? (
                            <SearchEmptyState initialQuery={initialQuery} />
                        ) : (
                            <SearchResults
                                products={products}
                                blogs={blogs}
                                activeType={activeType}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
