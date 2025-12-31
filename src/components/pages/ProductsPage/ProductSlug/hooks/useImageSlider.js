import { useState, useCallback, useEffect } from "react";
import useSliderDrag from "@/hooks/useSliderDrag";

/**
 * ============================================================================
 * useImageSlider Hook
 * ============================================================================
 *
 * Quản lý navigation và trạng thái của Image Slider.
 * Tích hợp sẵn useSliderDrag cho swipe.
 *
 * @param {Object} options
 * @param {number} options.totalSlides - Tổng số slides
 * @param {number} options.initialIndex - Index bắt đầu
 * @param {boolean} options.isOpen - Trạng thái mở (để sync index)
 * @param {function} options.onNavigate - Callback khi navigate (optional, for keyboard)
 * @returns {Object}
 */
export default function useImageSlider({
    totalSlides,
    initialIndex = 0,
    isOpen = true,
    enableKeyboard = true,
}) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Sync index when opening
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    // Navigation handlers
    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    }, []);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? prev : prev + 1));
    }, [totalSlides]);

    // Keyboard navigation (Arrow keys)
    useEffect(() => {
        if (!enableKeyboard || !isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                goToPrev();
            } else if (e.key === "ArrowRight") {
                goToNext();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, enableKeyboard, goToPrev, goToNext]);

    // Drag integration
    const { isDragging, dragOffset, dragHandlers } = useSliderDrag({
        currentIndex,
        totalSlides,
        onSlideChange: goToSlide,
        threshold: 50,
    });

    return {
        currentIndex,
        goToSlide,
        goToPrev,
        goToNext,
        isDragging,
        dragOffset,
        dragHandlers,
    };
}
