/**
 * ============================================================================
 * USE SMOOTH SCROLL HOOK (CUSTOM MOMENTUM)
 * ============================================================================
 *
 * Hook tự viết để tạo hiệu ứng cuộn mượt (Momentum Scroll) như Luxury Web.
 *
 * CƠ CHẾ:
 * 1. Lắng nghe sự kiện 'wheel' (lăn chuột).
 * 2. Ngăn chặn hành vi cuộn mặc định (preventDefault).
 * 3. Tính toán vị trí "đích" (Target Scroll) dựa trên deltaY.
 * 4. Sử dụng loop requestAnimationFrame để di chuyển dần dần (Lerp)
 *    từ vị trí hiện tại đến vị trí đích.
 *
 * TỐI ƯU HIỆU NĂNG (WEAK DEVICES):
 * - Tự động TẮT trên thiết bị cảm ứng (Touch Devices).
 *   Lý do: Native scroll trên mobile đã được tối ưu phần cứng (GPU) rất tốt.
 *   Dùng JS can thiệp vào touch scroll sẽ gây lag trên máy yếu.
 *
 * ============================================================================
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Cache để lưu trạng thái scrollable của element, tránh getComputedStyle liên tục gây Re-layout
const scrollableCache = new WeakMap();

export default function useSmoothScroll() {
    // Cấu hình độ mượt
    // Easing: càng nhỏ càng mượt (trượt dài hơn), càng lớn càng khựng
    const EASING = 0.075;
    const pathname = usePathname();

    const scrollRef = useRef({
        current: 0, // Vị trí hiện tại
        target: 0, // Vị trí đích muốn tới
        isScrolling: false, // Cờ đang cuộn
    });

    const frameRef = useRef(null);

    // ========================================
    // RESET ON ROUTE CHANGE
    // ========================================
    useEffect(() => {
        // Stop Loop
        if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
        }
        scrollRef.current.isScrolling = false;

        // Reset State
        scrollRef.current.current = 0;
        scrollRef.current.target = 0;

        // Note: Không gọi window.scrollTo(0, 0) ở đây nữa.
        // Việc cuộn thực tế sẽ do hook useScrollToTop đảm nhiệm để tránh conflict trên Mobile.
    }, [pathname]);

    useEffect(() => {
        // 1. KIỂM TRA THIẾT BỊ
        // Nếu là thiết bị cảm ứng (Mobile/Tablet), không kích hoạt.
        // Trả về sớm để dùng Native Scroll.
        const isTouchDevice =
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0;

        if (isTouchDevice) return;

        // Khởi tạo vị trí ban đầu
        scrollRef.current.current = window.scrollY;
        scrollRef.current.target = window.scrollY;

        // ========================================
        // ANIMATION LOOP (LERP)
        // ========================================
        const tick = () => {
            const { current, target } = scrollRef.current;

            // Tính khoảng cách cần di chuyển (Lerp)
            const diff = target - current;
            const delta = diff * EASING;

            // Nếu khoảng cách cực nhỏ (< 0.5px), coi như đã đến đích (Snap)
            // Giúp dừng loop để tiết kiệm CPU
            if (Math.abs(diff) < 0.5) {
                scrollRef.current.current = target;
                window.scrollTo(0, target);
                scrollRef.current.isScrolling = false;
                return; // Dừng loop
            }

            // Cập nhật vị trí mới
            const newPos = current + delta;
            scrollRef.current.current = newPos;
            window.scrollTo(0, newPos);

            // Tiếp tục loop
            frameRef.current = requestAnimationFrame(tick);
        };

        // Helper: Check if element is scrollable with Caching
        const checkScrollable = (element) => {
            if (scrollableCache.has(element)) {
                return scrollableCache.get(element);
            }

            const style = window.getComputedStyle(element);
            const overflowY = style.overflowY;
            const isScrollable =
                (overflowY === "auto" || overflowY === "scroll") &&
                element.scrollHeight > element.clientHeight;

            scrollableCache.set(element, isScrollable);
            return isScrollable;
        };

        // ========================================
        // EVENT HANDLER: WHEEL
        // ========================================
        const onWheel = (e) => {
            // 0. SYNC SCROLL POSITION
            if (!scrollRef.current.isScrolling) {
                scrollRef.current.current = window.scrollY;
                scrollRef.current.target = window.scrollY;
            }

            // 1. KIỂM TRA BODY LOCK
            const bodyStyle = window.getComputedStyle(document.body);
            const isLocked =
                bodyStyle.overflow === "hidden" ||
                bodyStyle.position === "fixed";

            if (isLocked) {
                scrollRef.current.target = window.scrollY;
                scrollRef.current.current = window.scrollY;
                return;
            }

            // 2. KIỂM TRA SCROLLABLE CONTAINER (Modal, Scrollbox)
            // Tối ưu hóa loop check bằng Cache
            let target = e.target;
            while (target && target !== document.body) {
                if (checkScrollable(target)) {
                    // Đã tìm thấy vùng cuộn riêng -> Return để dùng Native Scroll
                    return;
                }
                target = target.parentElement;
            }

            // ========================================
            // MOMENTUM LOGIC (Desktop Window Scroll)
            // ========================================
            e.preventDefault();

            // Tính toán đích đến mới
            const delta = e.deltaY;
            const maxScroll =
                document.documentElement.scrollHeight - window.innerHeight;

            scrollRef.current.target = Math.min(
                Math.max(scrollRef.current.target + delta, 0),
                maxScroll
            );

            // Bắt đầu loop nếu chưa chạy
            if (!scrollRef.current.isScrolling) {
                scrollRef.current.isScrolling = true;
                cancelAnimationFrame(frameRef.current);
                frameRef.current = requestAnimationFrame(tick);
            }
        };

        // ========================================
        // SETUP LISTENERS
        // ========================================
        // { passive: false } là quan trọng để có thể gọi preventDefault()
        window.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", onWheel);
            cancelAnimationFrame(frameRef.current);
        };
    }, []);
}
