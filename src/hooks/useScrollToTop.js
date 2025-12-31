"use client";

import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * useScrollToTop - Optimized
 *
 * Hook này buộc trình duyệt cuộn lên đầu trang (0,0) ngay khi Route thay đổi.
 * Sử dụng useLayoutEffect để đảm bảo cuộn xảy ra TRƯỚC khi trình duyệt vẽ frame tiếp theo.
 */
export default function useScrollToTop() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useLayoutEffect(() => {
        // 1. Tắt cơ chế tự động restore scroll của trình duyệt để tránh conflict
        if (
            typeof window !== "undefined" &&
            "scrollRestoration" in window.history
        ) {
            window.history.scrollRestoration = "manual";
        }

        // 2. Cuộn lên đầu trang ngay lập tức
        window.scrollTo(0, 0);

        // Fallback nhẹ cho Safari nếu cần, nhưng thường useLayoutEffect là đủ
    }, [pathname, searchParams]);

    return null;
}
