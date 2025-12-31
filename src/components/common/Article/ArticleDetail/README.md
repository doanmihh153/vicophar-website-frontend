# Article Detail Components

## Tổng Quan

Thư mục này chứa các component tái sử dụng cho **trang chi tiết bài viết** (Article Detail Page).
Các component đã được tách ra từ `SlugUI` để có thể tái sử dụng cho nhiều trang khác nhau.

---

## Danh Sách Components

### 📝 Content Components (Nội dung bài viết)

| Component | Mô tả | Props |
|-----------|-------|-------|
| `ArticleHeader` | Header bài viết với H1, meta (ngày, tác giả), summary | `article`, `onReadMore` |
| `ArticleSummary` | Khối tóm tắt nội dung chính với CTA | `description`, `onReadMore` |
| `ArticleBanner` | Ảnh banner chính (aspect 16:9) | `image`, `alt`, `title`, `caption` |
| `TableOfContents` | Mục lục tự động từ H2/H3 (collapsible) | `content` (Tiptap JSON) |
| `ArticleRenderer` | Render Tiptap JSON → HTML | `content` (Tiptap JSON) |
| `ArticleRating` | Đánh giá bài viết (Hữu ích/Chưa hữu ích) | `articleId` |
| `ArticleDisclaimer` | Lưu ý pháp lý về thông tin y tế | (không có) |

### 💬 Engagement Components (Tương tác)

| Component | Mô tả | Props |
|-----------|-------|-------|
| `CommentForm` | Form để lại bình luận | `articleId` |
| `FeaturedComments` | Danh sách bình luận nổi bật (max 3, có "Xem thêm") | `articleId` |
| `FeaturedCommentItem` | Item bình luận đơn lẻ với avatar | `comment` |

---

## Cách Sử Dụng

### Import từ barrel export:

```jsx
import {
    ArticleHeader,
    ArticleBanner,
    TableOfContents,
    ArticleRenderer,
    ArticleRating,
    ArticleDisclaimer,
    CommentForm,
    FeaturedComments,
} from "@/components/common/Article/ArticleDetail";
```

### Ví dụ sử dụng trong page:

```jsx
export default function ArticlePage({ article }) {
    const { title, content } = article;

    return (
        <main>
            {/* Content Section */}
            <section>
                <ArticleHeader article={article} />
                <ArticleBanner image={article.image} alt={title} title={title} />
                <TableOfContents content={content} />
                
                <div id="article-content">
                    <ArticleRenderer content={content} />
                </div>
                
                <ArticleRating articleId={article.id} />
                <ArticleDisclaimer />
            </section>

            {/* Engagement Section */}
            <section>
                <CommentForm articleId={article.id} />
                <FeaturedComments articleId={article.id} />
            </section>
        </main>
    );
}
```

---

## Lưu Ý Quan Trọng

### SEO:
- `ArticleHeader` chứa **DUY NHẤT 1 H1** trong toàn trang
- `ArticleRenderer` **KHÔNG render H1** (chỉ H2-H6)
- `TableOfContents` tạo navigation từ H2/H3 với smooth scroll

### Dependencies:
- `@/assets/icons` - Icons (CalendarIcon, AuthorIcon, TocIcon, etc.)
- `@/data/commentsMockdata` - Mock data cho comments (thay bằng API sau)
- `next/image` - Optimized images

### Styling:
- Sử dụng Tailwind CSS với custom classes (`vico-*`)
- Responsive: mobile → tablet → desktop
- Không cần thêm CSS riêng

---

## Cấu Trúc Thư Mục

```
ArticleDetail/
├── index.js              # Barrel exports
├── README.md             # Tài liệu này
│
├── ArticleHeader.jsx     # H1 + Meta + Summary
├── ArticleSummary.jsx    # Tóm tắt nội dung
├── ArticleBanner.jsx     # Ảnh banner
├── TableOfContents.jsx   # Mục lục
├── ArticleRenderer.jsx   # Render Tiptap JSON
├── ArticleRating.jsx     # Đánh giá
├── ArticleDisclaimer.jsx # Lưu ý pháp lý
│
├── CommentForm.jsx       # Form bình luận
├── FeaturedComments.jsx  # Danh sách bình luận
└── FeaturedCommentItem.jsx # Item bình luận
```

---

## Changelog

- **2024-12-09**: Tách từ `SlugUI` thành components tái sử dụng
