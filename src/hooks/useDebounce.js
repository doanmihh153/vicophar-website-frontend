import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value.
 *
 * @param {any} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds (default: 500ms).
 * @returns {any} - The debounced value.
 */
export default function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set timeout to update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup timeout if value changes or component unmounts
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
