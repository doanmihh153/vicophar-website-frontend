"use client";

import React, { useState, useEffect } from "react";
import PageLoader from "@/components/common/PageLoader/PageLoader";
import { HomeIcon } from "@/assets/icons";
import Link from "next/link";

export default function TestLoaderPage() {
    const [isLoading, setIsLoading] = useState(true);

    // Auto hide after 3 seconds for demo
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isLoading]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-8">
            <PageLoader isLoading={isLoading} />

            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-vico-primary">
                    Test Page Loader
                </h1>
                <p className="text-gray-600">
                    Loader sẽ tự động ẩn sau 3 giây.
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => setIsLoading(true)}
                        className="bg-vico-green text-white px-6 py-2 rounded-lg font-bold shadow-lg active:scale-95 transition-transform"
                    >
                        Hiển thị lại Loader
                    </button>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-500 hover:text-vico-primary"
                    >
                        <HomeIcon className="w-5 h-5" />
                        <span>Về trang chủ</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
