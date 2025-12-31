"use client";

import { useEffect, useRef } from "react";

/**
 * LottiePlayer Component
 *
 * Renders a Lottie animation without using any external library.
 * Uses the native lottie-web approach via dynamic import.
 *
 * @param {Object} animationData - The Lottie JSON animation data
 * @param {boolean} loop - Whether to loop the animation (default: true)
 * @param {boolean} autoplay - Whether to autoplay (default: true)
 * @param {string} className - Additional CSS classes
 */
export default function LottiePlayer({
    animationData,
    loop = true,
    autoplay = true,
    className = "",
}) {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        let lottie;
        let isMounted = true;

        const loadAnimation = async () => {
            try {
                // Use lottie_light.min.js - ~40% smaller than full lottie-web
                // Only supports SVG renderer (no canvas/html), which is what we need
                lottie = (
                    await import("lottie-web/build/player/lottie_light.min.js")
                ).default;

                if (isMounted && containerRef.current && animationData) {
                    animationRef.current = lottie.loadAnimation({
                        container: containerRef.current,
                        renderer: "svg",
                        loop,
                        autoplay,
                        animationData,
                    });
                }
            } catch (error) {
                console.warn("Lottie player not available:", error);
            }
        };

        loadAnimation();

        return () => {
            isMounted = false;
            if (animationRef.current) {
                animationRef.current.destroy();
            }
        };
    }, [animationData, loop, autoplay]);

    return (
        <div
            ref={containerRef}
            className={`lottie-player ${className}`}
            aria-hidden="true"
        />
    );
}
