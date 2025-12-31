"use client";

import useScrollToTop from "@/hooks/useScrollToTop";

/**
 * SCROLL TO TOP COMPONENT
 *
 * Đảm bảo mỗi khi chuyển page, trình duyệt sẽ tự động cuộn lên đầu trang.
 * Giải quyết vấn đề Nextjs App Router thỉnh thoảng giữ vị trí scroll cũ.
 */
export default function ScrollToTop() {
    useScrollToTop();
    return null;
}
