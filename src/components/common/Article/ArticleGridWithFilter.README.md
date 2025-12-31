# ArticleGridWithFilter Component

## Tổng Quan

Component hiển thị danh sách bài viết với **FilterTabs** và layout **7-5** - phiên bản nâng cấp của `ArticleGrid`.

## So Sánh Với ArticleGrid

| Feature | ArticleGrid | ArticleGridWithFilter |
|---------|-------------|----------------------|
| **Layout** | 6 cột - 6 cột | **7 cột - 5 cột** |
| **Filter Tabs** | ❌ Không có | ✅ Có (có thể ẩn) |
| **Category Badge** | ❌ Không | ✅ Có |
| **Props** | 5 props | **9 props** |

## Props

| Prop | Type | Default | Bắt Buộc | Mô Tả |
|------|------|---------|----------|-------|
| `title` | `string` | `"Bài viết nổi bật"` | ❌ | Tiêu đề section |
| `viewAllLink` | `string` | `"/blog"` | ❌ | Link "Xem tất cả" |
| `articles` | `array` | `[]` | ✅ | Mảng bài viết |
| `className` | `string` | `""` | ❌ | Custom className |
| `showBorder` | `boolean` | `true` | ❌ | Hiển thị border container |
| `showFilter` | `boolean` | `true` | ❌ | **Hiển thị FilterTabs** |
| `filterTabs` | `array` | `[]` | ❌ | **Mảng tabs cho filter** |
| `activeFilter` | `string` | `"all"` | ❌ | **ID filter đang active** |
| `onFilterChange` | `function` | `() => {}` | ❌ | **Callback khi đổi filter** |

### Article Object Structure

```typescript
{
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  isFeatured: boolean;  // true = bài lớn bên trái
  category?: string;    // NEW: Hiển thị category badge
}
```

### FilterTabs Array Structure

```typescript
[
  { id: "all", label: "Tất cả" },
  { id: "promotion", label: "Khuyến mãi" },
  { id: "new", label: "Sản phẩm mới" }
]
```

## Cách Sử Dụng

### 1. Có Filter (Default)

```jsx
"use client";

import { useState } from "react";
import ArticleGridWithFilter from "@/components/common/Article/ArticleGridWithFilter";

export default function NewsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "Tất cả" },
    { id: "promotion", label: "Khuyến mãi" },
    { id: "new", label: "Sản phẩm mới" }
  ];

  const articles = [
    {
      id: "1",
      title: "Siêu sale ngày đôi",
      description: "Giảm giá lên đến 50%...",
      image: "/imgs/promo.jpg",
      category: "Khuyến mãi",
      link: "/tin-tuc/sieu-sale",
      isFeatured: true  // Bài này sẽ hiển thị bên trái (7 cột)
    },
    {
      id: "2",
      title: "Sản phẩm mới",
      description: "...",
      image: "/imgs/product.jpg",
      category: "Tin mới nhất",
      link: "/tin-tuc/san-pham-moi",
      isFeatured: false  // Bài này hiển thị bên phải (5 cột)
    },
    // ... thêm 3 bài nữa cho danh sách bên phải
  ];

  // Filter logic
  const filteredArticles = activeFilter === "all" 
    ? articles 
    : articles.filter(a => a.category?.toLowerCase() === activeFilter);

  return (
    <ArticleGridWithFilter
      title="TIN TỨC CÔNG TY"
      viewAllLink="/tin-tuc"
      articles={filteredArticles}
      showFilter={true}
      filterTabs={filterTabs}
      activeFilter={activeFilter}
      onFilterChange={setActiveFilter}
    />
  );
}
```

### 2. Không Có Filter (Giống ArticleGrid)

```jsx
<ArticleGridWithFilter
  title="BÀI VIẾT NỔI BẬT"
  articles={articles}
  showFilter={false}  // Ẩn filter
/>
```

### 3. Không Border (Flat Design)

```jsx
<ArticleGridWithFilter
  title="TIN TỨC MỚI NHẤT"
  articles={articles}
  showBorder={false}
  showFilter={true}
  filterTabs={filterTabs}
  activeFilter={activeFilter}
  onFilterChange={setActiveFilter}
/>
```

## Layout Chi Tiết

### Desktop (≥ 1024px)
```
┌─────────────────────────────────────────────────┐
│ TIÊU ĐỀ                          Xem tất cả → │
├─────────────────────────────────────────────────┤
│ [Tất cả] [Khuyến mãi] [Sản phẩm mới]         │  ← FilterTabs
├─────────────────────────────────────────────────┤
│                     │                           │
│                     │  ┌─────────────────────┐ │
│     Featured        │  │ List Article 1      │ │
│     Article         │  └─────────────────────┘ │
│     (7 cột)         │  ┌─────────────────────┐ │
│                     │  │ List Article 2      │ │
│                     │  └─────────────────────┘ │
│                     │  ┌─────────────────────┐ │
│                     │  │ List Article 3      │ │
│                     │  └─────────────────────┘ │
│                     │  ┌─────────────────────┐ │
│                     │  │ List Article 4      │ │
│                     │  └─────────────────────┘ │
│                     │       (5 cột)           │
└─────────────────────────────────────────────────┘
```

### Mobile/Tablet
- Stack vertical (1 cột)
- Featured article ở trên
- List articles ở dưới

## Tính Năng

### ✅ Có Trong Component Này
- FilterTabs dưới tiêu đề
- Layout 7-5 (asymmetric)
- Category badge trên mỗi bài viết
- Responsive design
- Hover effects (scale image, color change)
- Line clamping (title 2 lines, description 3 lines)

### ❌ Không Có (Cần Implement Bên Ngoài)
- Filter logic (phải làm ở component cha)
- Pagination
- Load more
- Search

## Khi Nào Dùng Component Này?

### ✅ Nên Dùng Khi:
- Cần filter tabs
- Muốn featured article chiếm nhiều không gian hơn (7 cột)
- Có category cho từng bài viết
- Trang tin tức, blog với nhiều category

### ❌ Không Nên Dùng Khi:
- Không cần filter → Dùng `ArticleGrid` (đơn giản hơn)
- Muốn layout đối xứng 6-6 → Dùng `ArticleGrid`
- Cần grid nhiều cột (3x3, 4x4) → Dùng `ArticleCard` trực tiếp

## Migration Từ ArticleGrid

Nếu đang dùng `ArticleGrid` và muốn thêm filter:

```diff
- import ArticleGrid from "@/components/common/Article/ArticleGrid";
+ import ArticleGridWithFilter from "@/components/common/Article/ArticleGridWithFilter";

+ const [activeFilter, setActiveFilter] = useState("all");
+ const filterTabs = [...];

- <ArticleGrid
+ <ArticleGridWithFilter
    title="TIN TỨC"
    articles={articles}
+   showFilter={true}
+   filterTabs={filterTabs}
+   activeFilter={activeFilter}
+   onFilterChange={setActiveFilter}
  />
```

## Accessibility

- Semantic HTML (`<article>`, `<section>`)
- Focus states cho buttons
- Alt text cho images
- ARIA labels trong FilterTabs

## Performance

- Next.js Image optimization
- Lazy loading images
- CSS transitions (không dùng JS animations)
- Responsive images với `sizes` prop
