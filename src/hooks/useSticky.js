/**
 * ============================================================================
 * USE STICKY OBSERVER - STATE DETECTION HOOK
 * ============================================================================
 *
 * Hook sử dụng IntersectionObserver để phát hiện trạng thái sticky.
 * KHÔNG can thiệp vào layout/style.
 * CSS chịu trách nhiệm hoàn toàn về `position: sticky`.
 *
 * RULES:
 * 1. Chỉ log khi state thay đổi (Dedupe state).
 * 2. Không dùng scroll listener.
 * 3. Không dùng logic dư thừa (boundingClientRect check).
 * 4. Trả về state và ref.
 *
 * ============================================================================
 */

"use client";

import { useEffect, useRef, useState } from "react";

export default function useSticky({
    top = 0, // Offset active sticky
    onStateChange = () => {},
    enabled = true,
}) {
    const sentinelRef = useRef(null);
    const [state, setState] = useState("normal");
    const stateRef = useRef("normal"); // Ref để dedupe logic
    const onStateChangeRef = useRef(onStateChange); // Stable callback ref

    // Update callback ref khi props thay đổi
    useEffect(() => {
        onStateChangeRef.current = onStateChange;
    }, [onStateChange]);

    useEffect(() => {
        if (!enabled || typeof IntersectionObserver === "undefined") return;

        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        // rootMargin âm sẽ shift viewport xuống 'top' px
        // Khi sentinel (đặt ở top element) scroll lên và chạm vào vùng shift -> trigger
        const rootMargin = `-${top}px 0px 0px 0px`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Logic detect tối giản theo yêu cầu:
                // Nếu không intersecting -> Sticky active (đã chạy qua vạch)
                // Ngược lại -> Normal (đang ở dưới vạch hoặc trong view)
                let nextState = "normal";
                if (!entry.isIntersecting) {
                    nextState = "sticky";
                }

                // DEDUPE STATE: Chỉ xử lý khi state thực sự thay đổi
                if (nextState !== stateRef.current) {
                    stateRef.current = nextState;
                    setState(nextState);

                    // Callback cho consumer (dùng ref để tránh recreate observer)
                    onStateChangeRef.current?.(nextState);
                }
            },
            {
                threshold: 0,
                rootMargin: rootMargin,
            }
        );

        observer.observe(sentinel);

        return () => {
            observer.disconnect();
        };
    }, [top, enabled]);

    return { sentinelRef, state };
}
