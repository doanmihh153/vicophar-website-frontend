# 🧭 App Router Structure (Cấu trúc định tuyến)

Tài liệu này mô tả cấu trúc thư mục trong `src/app` tương ứng với các đường dẫn (URL) trên website Vicophar.

## 🗺️ Routing Map

| URL Path | Directory Path | Mô tả |
| :--- | :--- | :--- |
| `/` | `src/app/page.js` | Trang chủ (Homepage) |
| `/cau-chuyen-vicophar` | `src/app/cau-chuyen-vicophar/page.js` | Giới thiệu về Vicophar |
| `/tin-tuc` | `src/app/tin-tuc/page.js` | Trang danh sách tin tức chung |
| `/tin-tuc/cong-ty` | `src/app/tin-tuc/cong-ty/page.js` | Tin tức hoạt động công ty |
| `/tin-tuc/nganh` | `src/app/tin-tuc/nganh/page.js` | Tin tức ngành dược |
| `/goc-suc-khoe` | `src/app/goc-suc-khoe/page.js` | Trang chủ góc sức khỏe |
| `/goc-suc-khoe/cham-soc-gan` | `src/app/goc-suc-khoe/cham-soc-gan/page.js` | Chuyên mục Gan |
| `/goc-suc-khoe/dinh-duong` | `src/app/goc-suc-khoe/dinh-duong/page.js` | Chuyên mục Dinh dưỡng |
| `/goc-suc-khoe/phu-nu` | `src/app/goc-suc-khoe/phu-nu/page.js` | Chuyên mục Sức khỏe phụ nữ |
| `/san-pham` | `src/app/san-pham/page.js` | Trang danh sách tất cả sản phẩm |
| `/san-pham/bo-gan` | `src/app/san-pham/bo-gan/page.js` | Danh mục Bổ gan |
| `/san-pham/vitamin-khoang-chat` | `src/app/san-pham/vitamin-khoang-chat/page.js` | Danh mục Vitamin |
| `/san-pham/my-pham-thien-nhien` | `src/app/san-pham/my-pham-thien-nhien/page.js` | Danh mục Mỹ phẩm |
| `/san-pham/thuc-pham-chuc-nang` | `src/app/san-pham/thuc-pham-chuc-nang/page.js` | Danh mục TPCN |
| `/lien-he` | `src/app/lien-he/page.js` | Trang liên hệ |

## 📝 Ghi chú phát triển (Dev Notes)

1.  **Server Components:** Tất cả các `page.js` này mặc định là Server Components.
2.  **Metadata:** Mỗi `page.js` nên export object `metadata` để tối ưu SEO cho từng trang.
3.  **Data Fetching:** Nên thực hiện fetch data trực tiếp trong `page.js` (async/await) thay vì dùng `useEffect`.
4.  **Layouts:** Nếu các trang con (ví dụ trong `/tin-tuc`) có chung layout, hãy tạo file `layout.js` trong thư mục cha (`src/app/tin-tuc/layout.js`).

---
*Documented by Antigravity Agent*
