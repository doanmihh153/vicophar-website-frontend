# BlogCard Component

## Tổng Quan

Component horizontal card cho bài viết blog với layout: **Hình ảnh bên trái** và **Nội dung bên phải**.

![BlogCard Reference](file:///Users/doanmihh/.gemini/antigravity/brain/76c7a59a-f7b0-4358-a4c7-0a9774789228/uploaded_image_1764739648794.png)

---

## Props

```typescript
{
  article: {
    id: string,
    title: string,        // Tiêu đề (line-clamp-2)
    description: string,  // Mô tả (line-clamp-2)
    image: string,        // URL hình ảnh
    category: string,     // Tag category
    date: string,         // Ngày đăng (VD: "01/07/2025")
    author: string,       // Tác giả (VD: "Vicophar")
    link: string          // URL link
  },
  className?: string      // Custom class
}
```

---

## Layout Structure

```
┌────────────────────────────────────────────────┐
│  ┌─────────┐  Tag                              │
│  │         │  Tiêu đề bài viết tối đa 2 dòng   │
│  │  Image  │  Mô tả ngắn gọn tối đa 2 dòng...  │
│  │         │  Vicophar • 01/07/2025             │
│  └─────────┘                                    │
└────────────────────────────────────────────────┘
```

---

## Kích Thước Hình Ảnh (Responsive)

| Breakpoint | Width | Height | Aspect Ratio |
|------------|-------|--------|--------------|
| **Mobile** | 140px | 100px | 7:5 |
| **Tablet** | 280px | 200px | 7:5 |
| **Desktop** | 340px | 240px | ~3:2 |

> ✅ Không fix width/height cứng - Component sẽ tự động fit với grid container

---

## Usage Examples

### Trong Grid 9 Cột

```jsx
import BlogCard from "@/components/common/Blog/BlogCard";

export default function NewsPage() {
  return (
    <div className="grid grid-cols-1 desktop:grid-cols-12 gap-8">
      {/* 9 COLS - Blog List */}
      <div className="desktop:col-span-9">
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      {/* 3 COLS - Sidebar */}
      <div className="desktop:col-span-3">
        <CategorySidebar />
      </div>
    </div>
  );
}
```

### Data Structure

```javascript
const article = {
  id: "1",
  title: "Liệu bạn có thắc mắc: Cú ớn xong là buồn nôn có phải có thai không?",
  description: "Bầu 23 tuần là mấy tháng? Bầu 23 tuần cần lưu ý những gì? Đây là những thắc mắc phổ biến của nhiều mẹ bầu...",
  image: "/imgs/home-page/blogs/baivietso1.png",
  category: "Tin mới nhất",
  date: "01/07/2025",
  author: "Vicophar",
  link: "/tin-tuc/bai-viet-1"
};
```

---

## Features

### 1. **Responsive** 📱
- Kích thước hình tự động scale theo breakpoint
- Font size responsive (text-h4 → text-h3)
- Gap spacing adaptive

### 2. **Hover Effects** ✨
- Image scale on hover (105%)
- Title color change (green)
- Card slide right (translate-x-1)
- Smooth transitions (300-500ms)

### 3. **Content Truncation** ✂️
- Title: `line-clamp-2` (tối đa 2 dòng)
- Description: `line-clamp-2` (tối đa 2 dòng)
- Auto ellipsis (...)

### 4. **Flexible Layout** 🔧
- Không fix width/height container
- Tự động fit với grid parent
- Flex-1 cho content area

---

## Styling Details

### Colors
- **Tag**: `bg-vico-green-light` + `text-vico-green`
- **Title**: `text-vico-gray-900` → hover `text-vico-green`
- **Description**: `text-vico-gray-600`
- **Meta**: `text-vico-gray-500`

### Typography
- **Title**: `text-h4` (mobile) → `text-h3` (tablet+)
- **Description**: `text-sm` (mobile) → `text-base` (tablet+)
- **Meta**: `text-xs` (mobile) → `text-sm` (tablet+)

### Spacing
- **Gap**: `gap-4` (mobile) → `gap-6` (tablet+)
- **Rounded**: `rounded-2xl` (hình ảnh)
- **Padding**: Tag `px-3 py-1`

---

## Khi Nào Dùng?

### ✅ Dùng BlogCard Khi:
- Danh sách bài viết chính (9 cột)
- Cần layout horizontal (hình trái, nội dung phải)
- Muốn hiển thị đầy đủ: Tag + Title + Description + Date
- Grid stacking (1 card/row hoặc responsive)

### ❌ Không Dùng Khi:
- Cần card vertical (dùng `ArticleCard` default variant)
- Sidebar compact list (dùng `ArticleCard` compact variant)
- Grid nhiều cột (3-4 cards/row) - dùng `ArticleCard`

---

## Component Comparison

| Feature | BlogCard | ArticleCard (default) | ArticleCard (compact) |
|---------|----------|----------------------|----------------------|
| **Layout** | Horizontal | Vertical | Horizontal |
| **Image Position** | Left | Top | Left |
| **Best For** | Main blog list | Article grid | Sidebar |
| **Description** | ✅ 2 lines | ✅ 3 lines | ❌ No |
| **Author/Date** | ✅ Yes | ✅ Date only | ❌ No |
| **Responsive** | ✅ 3 sizes | ✅ Auto aspect | ✅ Fixed small |
| **Grid Usage** | 9 cols (full width) | 3-4 cols (grid) | Sidebar list |

---

## File Location

```
src/components/common/Blog/
├── BlogCard.jsx         ← Component chính
└── BlogCard.README.md   ← Docs này
```

---

## Example in NewsArticleList

```jsx
import BlogCard from "@/components/common/Blog/BlogCard";

export default function NewsArticleList({ articles }) {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
}
```

---

## Accessibility

- ✅ Semantic HTML (`<article>`, `<time>`)
- ✅ Image alt text required
- ✅ Valid datetime attribute
- ✅ Link wraps entire card
- ✅ Keyboard navigable

---

## Performance

- ✅ Next.js Image optimization
- ✅ Responsive `sizes` prop
- ✅ CSS transitions (GPU accelerated)
- ✅ Lazy loading images
