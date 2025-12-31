# CategorySidebar Component

## Overview

Sidebar component displaying category list and featured article sections.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `categories` | `Array<{id, name, count}>` | `[]` | List of categories |
| `featuredSections` | `object` | `{}` | Featured article sections |
| `activeCategory` | `string` | `""` | Currently active category ID |
| `onCategoryChange` | `function` | `() => {}` | Callback when category is clicked |
| `className` | `string` | `""` | Additional CSS classes |

### Data Structures

#### Categories Array
```typescript
[
  {
    id: string;
    name: string;
    count?: number;  // Optional article count
  }
]
```

#### Featured Sections Object
```typescript
{
  [key: string]: {
    title: string;
    articles: Array<{
      id: string;
      title: string;
      image: string;
      date: string;
      link: string;
    }>;
  }
}
```

## Usage

### Basic Example

```jsx
"use client";

import { useState } from "react";
import CategorySidebar from "@/components/common/CategorySidebar/CategorySidebar";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả", count: 120 },
    { id: "promotion", name: "Khuyến mãi", count: 45 },
    { id: "product", name: "Sản phẩm mới", count: 30 }
  ];

  const featuredSections = {
    promotion: {
      title: "TIN KHUYẾN MÃI",
      articles: [
        {
          id: "1",
          title: "Siêu Sale Ngày Đôi - Giảm đến 50%",
          image: "/imgs/promo-1.jpg",
          date: "04.06",
          link: "/tin-tuc/promo-1"
        }
      ]
    },
    treatment: {
      title: "TIN TRỊ LIỆU VICOPHAR",
      articles: [...]
    }
  };

  return (
    <CategorySidebar
      categories={categories}
      featuredSections={featuredSections}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    />
  );
}
```

### With Multiple Featured Sections

```jsx
const featuredSections = {
  promotion: {
    title: "TIN KHUYẾN MÃI",
    articles: [/* 3-4 articles */]
  },
  treatment: {
    title: "TIN TRỊ LIỆU VICOPHAR",
    articles: [/* 3-4 articles */]
  },
  recruitment: {
    title: "TIN TUYỂN DỤNG",
    articles: [/* 3-4 articles */]
  }
};
```

## Features

### Category List
- Displays all categories with optional count
- Active state highlighting (green background)
- Click to filter content
- Hover effects

### Featured Sections
- Multiple sections support
- Uses compact `ArticleCard` variant
- Bordered containers with green accent
- Stacked layout

## Styling

- **Active category**: Green background, white text
- **Inactive category**: Hover effect with light green background
- **Sections**: White background with green border
- **Spacing**: Consistent gaps between elements

## Accessibility

- Semantic `<aside>` element
- Proper heading hierarchy
- Keyboard navigable buttons
- Clear visual feedback for active states
