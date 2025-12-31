"use client";

import { useRef, useState, useCallback, useEffect } from "react";

/**
 * Hook để tạo hiệu ứng "Grab & Drag" cho scroll container
 * Hỗ trợ kéo chuột để scroll ngang (như touch trên mobile)
 */
export default function useScrollGrab() {
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isDragging, setIsDragging] = useState(false); // Flag để phân biệt click vs drag

    const onMouseDown = useCallback((e) => {
        const slider = scrollRef.current;
        if (!slider) return;

        setIsDown(true);
        setIsDragging(false);
        setStartX(e.pageX - slider.offsetLeft);
        setScrollLeft(slider.scrollLeft);

        // Prevent default text selection
        // e.preventDefault(); // Optional: might block input focus if used elsewhere
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsDown(false);
        setIsDragging(false);
    }, []);

    const onMouseUp = useCallback(() => {
        setIsDown(false);
        // Delay resetting isDragging to allow click handler to check it
        setTimeout(() => setIsDragging(false), 0);
    }, []);

    const onMouseMove = useCallback(
        (e) => {
            if (!isDown) return;
            const slider = scrollRef.current;
            if (!slider) return;

            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast multiplier

            // If moved significantly, mark as dragging
            if (Math.abs(x - startX) > 5) {
                setIsDragging(true);
            }

            slider.scrollLeft = scrollLeft - walk;
        },
        [isDown, startX, scrollLeft]
    );

    // Touch events usually handled natively by overflow-auto,
    // but we return handlers for Desktop Mouse mainly.

    return {
        scrollRef,
        isDragging,
        events: {
            onMouseDown,
            onMouseLeave,
            onMouseUp,
            onMouseMove,
        },
    };
}
