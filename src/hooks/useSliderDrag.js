/**
 * ============================================================================
 * USE SLIDER DRAG HOOK
 * ============================================================================
 *
 * Hook xử lý logic Kéo/Thả (Drag/Swipe) cho slider.
 * Hỗ trợ cả Touch (Mobile) và Mouse (Desktop).
 *
 * @param {Object} params
 * @param {number} params.currentIndex - Index hiện tại
 * @param {number} params.totalSlides - Tổng số slide
 * @param {function} params.onSlideChange - Callback khi chuyển slide (index) => void
 * @param {number} params.threshold - Khoảng cách tối thiểu để trigger chuyển slide (px)
 *
 * @returns {Object}
 * - isDragging: boolean - Có đang kéo không
 * - dragOffset: number - Khoảng cách kéo (px)
 * - dragHandlers: Object - Các event handlers cần gắn vào container
 *
 * ============================================================================
 */

import { useState, useRef, useCallback, useEffect } from "react";

export default function useSliderDrag({
    currentIndex,
    totalSlides,
    onSlideChange,
    threshold = 50, // 50px drag to snap
}) {
    // State
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);

    // Refs để lưu giá trị trong lúc event chạy (tránh re-render liên tục nếu không cần thiết)
    const startX = useRef(0);
    const currentX = useRef(0);

    // ========================================
    // START DRAG
    // ========================================
    const handleStart = useCallback((clientX) => {
        setIsDragging(true);
        startX.current = clientX;
        currentX.current = clientX;
        setDragOffset(0);
    }, []);

    // ========================================
    // MOVE DRAG
    // ========================================
    const handleMove = useCallback(
        (clientX) => {
            if (!isDragging) return;

            currentX.current = clientX;
            const diff = currentX.current - startX.current;

            // Logic chặn biên (Resistance): Nếu đang ở đầu/cuối mà kéo tiếp
            // Giảm tốc độ kéo để tạo cảm giác "căng" (resistance)
            const isFirstSlide = currentIndex === 0;
            const isLastSlide = currentIndex === totalSlides - 1;

            if ((isFirstSlide && diff > 0) || (isLastSlide && diff < 0)) {
                // Kéo vượt biên -> Giảm 3 lần tốc độ (resistance factor)
                setDragOffset(diff / 3);
            } else {
                setDragOffset(diff);
            }
        },
        [isDragging, currentIndex, totalSlides]
    );

    // ========================================
    // END DRAG (RELEASE)
    // ========================================
    const handleEnd = useCallback(() => {
        if (!isDragging) return;

        setIsDragging(false);
        const diff = currentX.current - startX.current;

        // Check threshold để chuyển slide
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Kéo sang phải -> Lùi (Prev)
                // Chỉ lùi được nếu không phải slide đầu
                if (currentIndex > 0) {
                    onSlideChange(currentIndex - 1);
                }
            } else {
                // Kéo sang trái -> Tiến (Next)
                // Chỉ tiến được nếu không phải slide cuối
                if (currentIndex < totalSlides - 1) {
                    onSlideChange(currentIndex + 1);
                }
            }
        }

        // Reset offset về 0 (để CSS transition lo việc snap về vị trí đúng)
        setDragOffset(0);
    }, [isDragging, currentIndex, totalSlides, onSlideChange, threshold]);

    // ========================================
    // EVENT HANDLERS
    // ========================================

    // Touch Events (Mobile)
    const onTouchStart = (e) => handleStart(e.touches[0].clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    // Mouse Events (Desktop)
    const onMouseDown = (e) => {
        e.preventDefault(); // Ngăn drag image mặc định của browser
        handleStart(e.clientX);
    };

    // Global Mouse Up/Move handlers để fix trường hợp kéo ra ngoài element rồi thả
    useEffect(() => {
        const onWindowMouseMove = (e) => handleMove(e.clientX);
        const onWindowMouseUp = () => handleEnd();

        if (isDragging) {
            window.addEventListener("mousemove", onWindowMouseMove);
            window.addEventListener("mouseup", onWindowMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", onWindowMouseMove);
            window.removeEventListener("mouseup", onWindowMouseUp);
        };
    }, [isDragging, handleMove, handleEnd]);

    return {
        isDragging,
        dragOffset,
        dragHandlers: {
            onTouchStart,
            onTouchMove,
            onTouchEnd,
            onMouseDown,
            // MouseMove & MouseUp handled by window listeners
        },
    };
}
