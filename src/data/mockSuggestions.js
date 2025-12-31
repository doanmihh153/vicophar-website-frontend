/**
 * ============================================================================
 * MOCK SEARCH SUGGESTIONS DATA - DỮ LIỆU GỢI Ý TÌM KIẾM
 * ============================================================================
 * 
 * Dữ liệu gợi ý tìm kiếm GIẢ cho SearchForm component
 * Sử dụng trong giai đoạn development/testing
 * 
 * TRONG PRODUCTION:
 * -----------------
 * Data này sẽ được thay thế bằng:
 * - API call đến backend
 * - Elasticsearch/Algolia search
 * - Database query real-time
 * 
 * CẤU TRÚC:
 * ----------
 * - Array of strings
 * - Mỗi string là 1 từ khóa gợi ý phổ biến
 * - 15 suggestions mẫu
 * 
 * IMPORT:
 * -------
 * import { mockSuggestions, filterSuggestions } from '@/data/mockSuggestions'
 * 
 * SỬ DỤNG:
 * --------
 * const results = filterSuggestions('thuốc', 5)
 * // Trả về: ['Thuốc giảm đau', 'Thuốc cảm cúm', 'Thuốc ho', ...]
 * 
 * ============================================================================
 */

export const mockSuggestions = [
    "Thuốc giảm đau",
    "Vitamin tổng hợp",
    "Thuốc cảm cúm",
    "Sản phẩm chăm sóc da",
    "Thực phẩm chức năng",
    "Thuốc bổ gan",
    "Vitamin C",
    "Thuốc ho",
    "Kem dưỡng da",
    "Sữa rửa mặt",
    "Thuốc đau bụng",
    "Vitamin D3",
    "Thuốc tiêu hóa",
    "Mỹ phẩm thiên nhiên",
    "Omega 3"
];

/**
 * ============================================================================
 * FILTER SUGGESTIONS FUNCTION - HÀM LỌC GỢI Ý
 * ============================================================================
 * 
 * Hàm lọc và trả về danh sách suggestions phù hợp với từ khóa
 * 
 * THAM SỐ:
 * ---------
 * @param {string} searchTerm - Từ khóa tìm kiếm của user
 * @param {number} limit - Số lượng kết quả tối đa (default: 5)
 * 
 * TRẢ VỀ:
 * --------
 * @returns {Array<string>} - Mảng chứa các suggestions phù hợp
 * 
 * LOGIC:
 * ------
 * 1. Kiểm tra searchTerm có rỗng không -> trả về []
 * 2. Lọc suggestions chứa searchTerm (case-insensitive)
 * 3. Giới hạn kết quả theo limit
 * 
 * VÍ DỤ:
 * ------
 * filterSuggestions('vitamin', 3)
 * // => ['Vitamin tổng hợp', 'Vitamin C', 'Vitamin D3']
 * 
 * filterSuggestions('', 5)
 * // => []
 * 
 * filterSuggestions('xyz', 5)
 * // => []
 * 
 * TODO:
 * -----
 * - Thêm fuzzy search (tìm kiếm gần đúng)
 * - Thêm ranking/scoring (sắp xếp theo độ phù hợp)
 * - Thêm highlight matched text
 * - Cache kết quả đã tìm
 * 
 * ============================================================================
 */
export const filterSuggestions = (searchTerm, limit = 5) => {
    if (!searchTerm || searchTerm.trim().length === 0) {
        return [];
    }

    const filtered = mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.slice(0, limit);
};
