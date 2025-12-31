# PAGE PLAN: Product Detail Page ([slug])

**Page Target**: `src/app/san-pham/[category]/[slug]/page.js`
**Component Root**: `src/components/pages/ProductSlug/`

## 1. MỤC TIÊU
- Xây dựng UI chi tiết sản phẩm theo đúng yêu cầu (Prompt ID 870).
- Sử dụng layout Grid 2 cột responsive.
- Sử dụng thư viện có sẵn: `embla-carousel-react` (slider), `react-stickynode` (sticky).
- Tách small components, comment tiếng Việt.

## 2. CẤU TRÚC COMPONENTS

### Layout & Main
- `ProductSlugView.jsx` (Entry point, wrap `vico-container`).

### Header
- `ProductBreadcrumb.jsx` (Breadcrumb: Home > Category).

### Top Section (Grid 2 Cols)
- **Left (Main)**:
    - `ProductGallery.jsx` (Sticky container cho ảnh).
        - `ProductImageSlider.jsx` (Slider ảnh dùng Embla).
    - `ProductInfoTable.jsx` (Thông tin chi tiết dạng bảng).
        - `ProductMetaItem.jsx` (Row thông tin).
- **Right (Sidebar)**:
    - `ProductActionSidebar.jsx` (Sticky sidebar: Mua hàng, Liên hệ, Chính sách).
    - `@HelpSidebar` (Reuse existing sidebar).

### Description Section (Grid 2 Cols - Full Width inside Container)
- **Left (Content)**:
    - `ProductDescription.jsx` (Render Tiptap content via `@ArticleRenderer`).
    - `ProductWarningBox.jsx` (Cảnh báo, lưu ý).
- **Right (TOC)**:
    - `ProductContentSidebar.jsx` (Sticky Table of Content).

### Supplementary Sections
- `ProductFAQ.jsx` (Câu hỏi thường gặp - Accordion).
    - `FAQItem.jsx`.
- `ProductReviews.jsx` (Đánh giá - UI only).
- `RelatedProducts.jsx` (Sản phẩm gợi ý - dùng existing `ProductCard`).

## 3. DANH SÁCH SERVICES (Mock Data Access)
- Sử dụng `src/services/san-pham.service.js` (đã có).
- Cần đảm bảo `mockProducts.js` đủ data (đã check).

## 4. CHECKLIST TRIỂN KHAI

- [x] **Infrastructure**
    - [x] Create folder structure.
    - [x] Create `index.js` exports.

- [x] **Components Implementation**
    - [x] `ProductBreadcrumb`
    - [x] `ProductGallery` & `ProductImageSlider` (Embla)
    - [x] `ProductInfoTable` & `ProductMetaItem`
    - [x] `ProductActionSidebar` (Sticky)
    - [x] `ProductDescription` (@ArticleRenderer) & `ProductWarningBox`
    - [x] `ProductContentSidebar` (Sticky TOC)
    - [x] `ProductFAQ`
    - [x] `ProductReviews` (UI mock)
    - [x] `RelatedProducts`

- [x] **Integration**
    - [x] Assemble `ProductSlugView`.
    - [x] Update `src/app/san-pham/[category]/[slug]/page.js` to usage.

- [x] **Review**
    - [x] Update PAGE_PLAN.md status.

## 5. GHI CHÚ
- **Sticky Issue**: Cần chú ý `react-stickynode` cần parent có `items-start` trong Grid để không bị stretch height.
- **Embla**: Cần cấu hình autoplay và thumbnails sync (nếu kịp, hoặc basic slider trước). User yêu cầu "1 ảnh lớn - Danh sách ảnh nhỏ bên dưới".
- **Data**: Data mock đã có `images`, `content` (tiptap).

-------------------
TRẠNG THÁI: ✅ DONE
