"use client";

import { useCallback, useEffect, useState, memo } from "react";

export const useDotButton = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onDotButtonClick = useCallback(
        (index) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
            if (emblaApi.plugins().autoplay)
                emblaApi.plugins().autoplay.reset();
        },
        [emblaApi]
    );

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        onInit(emblaApi);
        onSelect(emblaApi);

        emblaApi
            .on("reInit", onInit)
            .on("reInit", onSelect)
            .on("select", onSelect);

        return () => {
            emblaApi
                .off("reInit", onInit)
                .off("reInit", onSelect)
                .off("select", onSelect);
        };
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};

export const DotButton = memo(function DotButton({
    children,
    className = "",
    ...restProps
}) {
    return (
        <button
            type="button"
            className={`embla__dot ${className}`}
            aria-label="Chuyển đến slide"
            {...restProps}
        >
            {children}
        </button>
    );
});
