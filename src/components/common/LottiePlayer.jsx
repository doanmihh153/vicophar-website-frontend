"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottiePlayer({ src, className = "" }) {
    const container = useRef(null);

    useEffect(() => {
        if (!container.current) return;

        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: src,
        });

        return () => {
            anim.destroy();
        };
    }, [src]);

    return <div ref={container} className={className} />;
}
