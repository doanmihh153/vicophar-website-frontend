"use client";

import React, { useEffect, useState } from "react";
import TypewriterLoader from "./TypewriterLoader";

/**
 * PAGE LOADER COMPONENT
 *
 * Full-screen loader overlay.
 * Can be controlled globally via Context or locally via props/state.
 * For now, simple implementation that can be imported and shown conditionally.
 */
export default function PageLoader({
    isLoading = true,
    message = "Đang tải trang...",
    description = "Vui lòng đợi chút",
}) {
    const [visible, setVisible] = useState(isLoading);

    useEffect(() => {
        if (!isLoading) {
            // Add slight delay for smooth exit?
            const timer = setTimeout(() => setVisible(false), 500);
            return () => clearTimeout(timer);
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setVisible(true);
        }
    }, [isLoading]);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-9999 bg-white flex items-center justify-center transition-opacity duration-300 ${
                isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="flex flex-col items-center gap-6">
                <div className="scale-150 transform transition-transform duration-500">
                    <TypewriterLoader />
                </div>
                {/* Optional Text */}
                <div className="text-center mt-8 space-y-2">
                    <p className="text-vico-green font-bold text-lg animate-pulse tracking-widest uppercase">
                        {message}
                    </p>
                    <p className="text-gray-400 text-sm font-medium">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
