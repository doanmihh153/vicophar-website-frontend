import { useState, useMemo } from "react";
import { searchAll } from "@/data/mockSearch";
import useDebounce from "@/hooks/useDebounce";

/**
 * Custom hook for Mobile Search Logic
 *
 * Features:
 * - Manages search term and suggestions
 * - Separates results into products and blogs
 * - Handles debouncing using useDebounce hook
 * - Uses useMemo for efficient result derivation
 */
export function useMobileSearch() {
    const [searchTerm, setSearchTerm] = useState("");

    // Debounce search term (500ms delay)
    const debouncedTerm = useDebounce(searchTerm, 500);

    // Derive results based on debounced term
    const { suggestions, productResults, blogResults } = useMemo(() => {
        const normalizedTerm = debouncedTerm.trim();

        if (normalizedTerm.length === 0) {
            return {
                suggestions: [],
                productResults: [],
                blogResults: [],
            };
        }

        // Search with a mix of results
        const results = searchAll(normalizedTerm, {
            productLimit: 5,
            blogLimit: 3,
            mixResults: true,
        });

        return {
            suggestions: results,
            productResults: results.filter((item) => item.type === "product"),
            blogResults: results.filter((item) => item.type === "blog"),
        };
    }, [debouncedTerm]);

    // Handle input change (updates UI state immediately)
    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    // Clear search
    const clearSearch = () => {
        setSearchTerm("");
    };

    return {
        searchTerm,
        suggestions,
        productResults,
        blogResults,
        handleSearchChange,
        clearSearch,
    };
}
