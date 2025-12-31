# ArticleCard Component

## Overview

Reusable article card component with two variants: default (for main grid) and compact (for sidebar).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `article` | `object` | - | Article data object (required) |
| `variant` | `"default" \| "compact"` | `"default"` | Card style variant |
| `className` | `string` | `""` | Additional CSS classes |

### Article Object Structure

```typescript
{
  id: string;
  title: string;
  description: string;
  image: string;        // Image URL
  category?: string;    // Optional category badge
  date?: string;        // Optional date (e.g., "04.06")
  link: string;         // Article link
}
```

## Usage

### Default Variant (Main Grid)

```jsx
import ArticleCard from "@/components/common/Article/ArticleCard";

<ArticleCard
  article={{
    id: "1",
    title: "18 tuần là mấy tháng? Thai 18 tuần tuổi phát triển ra sao...",
    description: "Mô tả ngắn gọn về bài viết...",
    image: "/imgs/news/article-1.jpg",
    category: "Tin mới nhất",
    date: "04.06",
    link: "/tin-tuc/bai-viet-1"
  }}
/>
```

### Compact Variant (Sidebar)

```jsx
<ArticleCard
  variant="compact"
  article={{
    id: "2",
    title: "Giải pháp cho trẻ có sức đề kháng kém...",
    image: "/imgs/news/article-2.jpg",
    date: "04.06",
    link: "/tin-tuc/bai-viet-2"
  }}
/>
```

### In a Grid Layout

```jsx
<div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
  {articles.map(article => (
    <ArticleCard key={article.id} article={article} />
  ))}
</div>
```

## Variants

### Default
- Full card with image (16:10 aspect ratio)
- Category badge overlay
- Title, description, and date
- Hover effects: shadow and image scale

### Compact
- Horizontal layout
- Small square image (80x80px)
- Title and date only
- Suitable for sidebar lists

## Styling

- **Hover effects**: Image scales, title changes to green, shadow appears
- **Responsive**: Adapts to container width
- **Image optimization**: Uses Next.js Image with appropriate sizes
- **Line clamping**: Title (2 lines), description (3 lines)

## Accessibility

- Semantic HTML with `<article>` tag
- Proper heading hierarchy
- Alt text for images
- Keyboard navigable links
