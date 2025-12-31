/**
 * Search Service
 * Abstraction layer for search functionality.
 * Currently uses mock data, but designed to be easily swapped with real API calls.
 */
import { searchAll, searchByType } from "@/data/mockSearch";

// Simulate network delay for realistic feel (optional)
const DELAY_MS = 300;

export const searchService = {
    /**
     * Main search function
     * @param {Object} params
     * @param {string} params.query - Search keyword
     * @param {string} params.type - 'all' | 'product' | 'blog'
     * @param {number} params.limit - Limit results
     * @returns {Promise<Array>}
     */
    async search({ query, type = "all", limit = 20 }) {
        // Simulate async API call
        await new Promise((resolve) => setTimeout(resolve, DELAY_MS));

        console.log(
            `[SearchService] Searching for "${query}" with type "${type}"`
        );

        if (!query) return [];

        try {
            if (type === "all") {
                // For search page, we might want separated lists or mixed depending on UI.
                // The mock `searchAll` returns mixed or grouped.
                // Let's use `searchAll` with mixResults=false to get grouped if needed,
                // OR we just use get everything and filter client side if the API was simple.
                // But here we adhere to the mock's capability.
                return searchAll(query, {
                    productLimit: 10,
                    blogLimit: 10,
                    mixResults: false,
                });
            } else {
                return searchByType(query, type, limit);
            }
        } catch (error) {
            console.error("[SearchService] Error:", error);
            return [];
        }
    },
};
