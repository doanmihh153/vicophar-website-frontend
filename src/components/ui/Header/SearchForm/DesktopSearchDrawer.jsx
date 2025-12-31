"use client";

import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { SearchIcon, CloseIcon } from "@/assets/icons";
import { formatPrice } from "@/data/mockProducts";
import { useMobileSearch } from "./useMobileSearch"; // Reuse logic
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

/**
 * DesktopSearchDrawer Component
 *
 * Side drawer for search on Desktop.
 * - Width: ~30% (w-[400px] or w-[30vw])
 * - Height: 100%
 * - Position: Fixed Right
 */
export default function DesktopSearchDrawer({ isOpen, onClose }) {
    const {
        searchTerm,
        productResults,
        blogResults,
        handleSearchChange,
        clearSearch,
    } = useMobileSearch();

    const inputRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Handle drawer open/close with animation
    useEffect(() => {
        if (isOpen) {
            // Avoid synchronous state update warning
            const timer = setTimeout(() => {
                setIsVisible(true);
                // Trigger animation in next frame
                requestAnimationFrame(() => setIsAnimating(true));
            }, 0);
            return () => clearTimeout(timer);
        } else {
            // Avoid synchronous state update warning
            requestAnimationFrame(() => setIsAnimating(false));
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Auto-focus input when open
    useEffect(() => {
        if (isAnimating && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isAnimating]);

    // Lock body scroll
    useBodyScrollLock(isVisible);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            window.location.href = `/tim-kiem?q=${encodeURIComponent(
                searchTerm.trim()
            )}`;
        }
    };

    if (!isVisible) return null;
    if (typeof document === "undefined") return null;

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-9998 transition-opacity duration-300 ${
                    isAnimating ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer Container */}
            <div
                className={`fixed top-3 bottom-3 right-3 z-9999 bg-white shadow-2xl transition-transform duration-300 ease-out transform flex flex-col w-[90vw] md:w-[50vw] desktop:w-[35vw] min-w-[320px] max-w-[650px] rounded-2xl border border-gray-100 ${
                    isAnimating
                        ? "translate-x-0"
                        : "translate-x-[calc(100%+1.5rem)]"
                }`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="desktop-search-title"
            >
                {/* HEADER */}
                <div className="flex items-center justify-between p-5 border-b border-gray-50">
                    <h2
                        id="desktop-search-title"
                        className="text-h5 font-bold text-vico-primary uppercase tracking-wide"
                    >
                        Tìm kiếm thuốc, sản phẩm y tế...
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Đóng tìm kiếm"
                    >
                        <CloseIcon className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                {/* SEARCH INPUT AREA */}
                <div className="p-2 px-4 pb-2">
                    <form
                        onSubmit={handleSubmit}
                        className="relative"
                        role="search"
                    >
                        <input
                            ref={inputRef}
                            id="desktop-search-input"
                            name="q"
                            type="search"
                            placeholder="Tìm trong Vicophar"
                            aria-label="Nhập từ khóa tìm kiếm"
                            value={searchTerm}
                            // onChange={(e) => setKeyword(e.target.value)}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="w-full h-14 border border-gray-200 rounded-full px-6 pr-14 outline-none focus:border-vico-green transition-all bg-gray-50 text-base md:text-xl font-medium placeholder:text-gray-400"
                        />

                        {/* Clear Button */}
                        {searchTerm && (
                            <button
                                type="button"
                                onClick={clearSearch}
                                className="absolute right-14 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <CloseIcon className="w-5 h-5 text-gray-400" />
                            </button>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-vico-green rounded-full text-white w-11 h-11"
                        >
                            <SearchIcon className="w-5 h-5 stroke-current translate-x-1" />
                        </button>
                    </form>
                </div>

                {/* RESULTS AREA */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
                    {/* Empty / Intro State */}
                    {!searchTerm && (
                        <div className="text-center text-gray-400 mt-20">
                            <SearchIcon className="w-16 h-16 mx-auto mb-4 opacity-10" />
                            <p className="text-lg">
                                Nhập từ khóa để tìm sản phẩm, bài viết
                            </p>
                        </div>
                    )}

                    {searchTerm && (
                        <div className="space-y-8">
                            {/* PRODUCTS */}
                            {productResults.length > 0 && (
                                <section>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-h6 text-gray-500 uppercase tracking-wider font-semibold">
                                            Sản phẩm
                                        </h3>
                                        <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-full text-gray-600 font-medium">
                                            {productResults.length} kết quả
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        {productResults.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() =>
                                                    (window.location.href = `/san-pham/${item.id}`)
                                                }
                                                className="group flex gap-5 p-4 rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors"
                                            >
                                                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        sizes="80px"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <h4 className="font-semibold text-vico-primary line-clamp-2 text-base md:text-lg group-hover:text-vico-green transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-gray-500 text-sm mt-1.5 line-clamp-1">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* BLOGS */}
                            {blogResults.length > 0 && (
                                <section>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-h6 text-gray-500 uppercase tracking-wider font-semibold">
                                            Bài viết
                                        </h3>
                                        <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-full text-gray-600 font-medium">
                                            {blogResults.length} kết quả
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        {blogResults.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() =>
                                                    (window.location.href = `/tin-tuc/${item.id}`)
                                                }
                                                className="group flex gap-5 p-4 rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors"
                                            >
                                                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        sizes="80px"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <span className="text-sm text-vico-green font-normal tracking-wider">
                                                        {item.category}
                                                    </span>
                                                    <h4 className="font-semibold text-vico-primary line-clamp-1 text-base md:text-lg group-hover:text-vico-green transition-colors">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* NO RESULTS */}
                            {productResults.length === 0 &&
                                blogResults.length === 0 && (
                                    <div className="text-center py-10">
                                        <p className="text-gray-500">
                                            Không tìm thấy kết quả cho &quot;
                                            <span className="font-bold">
                                                {searchTerm}
                                            </span>
                                            &quot;
                                        </p>
                                    </div>
                                )}
                        </div>
                    )}
                </div>
            </div>
        </>,
        document.body
    );
}
