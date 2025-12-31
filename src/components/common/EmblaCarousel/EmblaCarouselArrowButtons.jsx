/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useCallback, useEffect, useState, memo } from "react";

import { CarouselArrowLeft, CarouselArrowRight } from "@/assets/icons";

export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        if (emblaApi.plugins().autoplay) emblaApi.plugins().autoplay.reset();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        if (emblaApi.plugins().autoplay) emblaApi.plugins().autoplay.reset();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect).on("select", onSelect);

        return () => {
            emblaApi.off("reInit", onSelect).off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

export const PrevButton = memo(function PrevButton({ children, ...restProps }) {
    return (
        <button
            className="embla__button embla__button--prev"
            type="button"
            aria-label="Slide trước"
            {...restProps}
        >
            <CarouselArrowLeft className="embla__button__svg" />
            {children}
        </button>
    );
});

export const NextButton = memo(function NextButton({ children, ...restProps }) {
    return (
        <button
            className="embla__button embla__button--next"
            type="button"
            aria-label="Slide tiếp theo"
            {...restProps}
        >
            <CarouselArrowRight className="embla__button__svg" />
            {children}
        </button>
    );
});
