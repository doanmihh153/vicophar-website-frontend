/**
 * ============================================================================
 * SCROLL MANAGER - SHARED SCROLL LISTENER
 * ============================================================================
 *
 * Giải quyết vấn đề xung đột khi nhiều hooks cùng dùng scroll listener.
 * Chỉ có 1 scroll listener duy nhất, các hooks subscribe vào manager này.
 *
 * CÁCH SỬ DỤNG:
 * -------------
 * import { subscribeScroll, unsubscribeScroll, getScrollTop } from '@/utils/scrollManager';
 *
 * useEffect(() => {
 *     const callback = (scrollTop) => { ... };
 *     subscribeScroll(callback);
 *     return () => unsubscribeScroll(callback);
 * }, []);
 *
 * ============================================================================
 */

// Danh sách subscribers
const subscribers = new Set();

// Cached scroll position
let cachedScrollTop = 0;
let ticking = false;

/**
 * Scroll handler - RAF optimized
 */
const handleScroll = () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            cachedScrollTop = window.scrollY || window.pageYOffset;

            // Notify all subscribers với CÙNG scroll value
            subscribers.forEach((callback) => {
                try {
                    callback(cachedScrollTop);
                } catch (e) {
                    console.error("ScrollManager subscriber error:", e);
                }
            });

            ticking = false;
        });
        ticking = true;
    }
};

/**
 * Subscribe to scroll events
 */
export const subscribeScroll = (callback) => {
    // Thêm listener nếu chưa có
    if (subscribers.size === 0) {
        window.addEventListener("scroll", handleScroll, { passive: true });
    }
    subscribers.add(callback);

    // Gọi ngay lập tức với giá trị hiện tại
    callback(window.scrollY || window.pageYOffset);
};

/**
 * Unsubscribe from scroll events
 */
export const unsubscribeScroll = (callback) => {
    subscribers.delete(callback);

    // Xóa listener nếu không còn subscriber
    if (subscribers.size === 0) {
        window.removeEventListener("scroll", handleScroll);
    }
};

/**
 * Get current scroll position (cached)
 */
export const getScrollTop = () => cachedScrollTop;

/**
 * Force update scroll position
 */
export const updateScrollTop = () => {
    cachedScrollTop = window.scrollY || window.pageYOffset;
    return cachedScrollTop;
};
