# Common Components Structure

Cấu trúc tổ chức components dùng chung trong dự án Vicophar Vietnam.

## 📁 Cấu trúc thư mục

```
src/components/common/
├── Button/                    # Button components
│   ├── Button.jsx            # Main button component
│   ├── Button.stories.js     # Storybook stories
│   └── index.js              # Barrel export
│
├── ButtonHoverUnderline/      # Button với hiệu ứng underline
│   ├── ButtonHoverUnderline.jsx
│   ├── ButtonHoverUnderline.stories.js
│   └── index.js
│
├── Card/                      # Card components
│   ├── HealthCornerCard.jsx  # Card cho bài viết blog/góc sức khỏe
│   └── index.js
│
├── EmblaCarousel/             # Embla carousel components
│   ├── EmblaCarousel.jsx     # Main carousel wrapper
│   ├── EmblaCarouselArrowButtons.jsx  # Arrow navigation
│   ├── EmblaCarouselDotButton.jsx     # Dot pagination
│   └── index.js
│
├── Product/                   # Product-related components
│   ├── ProductCard.jsx       # Card hiển thị sản phẩm
│   ├── ProductSuggestionsCarousel.jsx  # Carousel gợi ý sản phẩm
│   └── index.js
│
└── index.js                   # Root barrel export (optional)
```

## 📦 Components

### 1. Button Components
**Location:** `src/components/common/Button/`

#### Button
- **File:** `Button.jsx`
- **Purpose:** Component button tổng quát, tái sử dụng
- **Features:**
  - ✅ Nhiều variants: primary, secondary, outline, ghost
  - ✅ Nhiều sizes: sm, md, lg
  - ✅ Icon support (left/right)
  - ✅ Badge support
  - ✅ Custom colors, dimensions, effects
  - ✅ Accessibility support

**Usage:**
```jsx
import { Button } from '@/components/common/Button';

<Button variant="primary" size="md">Click me</Button>
```

#### ButtonHoverUnderline
- **File:** `ButtonHoverUnderline.jsx`
- **Purpose:** Button với hiệu ứng gạch chân khi hover
- **Use cases:** Navigation links, text buttons

**Usage:**
```jsx
import { ButtonHoverUnderline } from '@/components/common/ButtonHoverUnderline';

<ButtonHoverUnderline href="/about">Về chúng tôi</ButtonHoverUnderline>
```

---

### 2. Card Components
**Location:** `src/components/common/Card/`

#### HealthCornerCard
- **File:** `HealthCornerCard.jsx`
- **Purpose:** Card hiển thị bài viết blog/góc sức khỏe
- **Features:**
  - ✅ 2 variants: vertical, horizontal
  - ✅ Image optimization với Next.js Image
  - ✅ Category badge
  - ✅ Author & publish date
  - ✅ Hover effects
  - ✅ SEO optimized

**Usage:**
```jsx
import { HealthCornerCard } from '@/components/common/Card';

<HealthCornerCard 
  article={articleData} 
  variant="vertical" 
/>
```

---

### 3. Carousel Components
**Location:** `src/components/common/EmblaCarousel/`

#### EmblaCarousel
- **File:** `EmblaCarousel.jsx`
- **Purpose:** Wrapper component cho Embla Carousel
- **Features:**
  - ✅ Responsive
  - ✅ Touch/drag support
  - ✅ Autoplay support
  - ✅ Customizable options

#### EmblaCarouselArrowButtons
- **File:** `EmblaCarouselArrowButtons.jsx`
- **Purpose:** Arrow navigation buttons cho carousel
- **Features:**
  - ✅ Prev/Next buttons
  - ✅ Disabled states
  - ✅ Custom styling

#### EmblaCarouselDotButton
- **File:** `EmblaCarouselDotButton.jsx`
- **Purpose:** Dot pagination cho carousel
- **Features:**
  - ✅ Active state tracking
  - ✅ Click to jump to slide
  - ✅ Custom styling

**Usage:**
```jsx
import EmblaCarousel from '@/components/common/EmblaCarousel';
import { DotButton, useDotButton } from '@/components/common/EmblaCarousel/EmblaCarouselDotButton';

<EmblaCarousel options={{ loop: true }}>
  {slides.map((slide, index) => (
    <div key={index}>{slide}</div>
  ))}
</EmblaCarousel>
```

---

### 4. Product Components
**Location:** `src/components/common/Product/`

#### ProductCard
- **File:** `ProductCard.jsx`
- **Purpose:** Card hiển thị thông tin sản phẩm
- **Features:**
  - ✅ Image optimization với Next.js Image
  - ✅ LCP optimization (priority prop)
  - ✅ "Bán chạy" badge
  - ✅ Hover effects
  - ✅ SEO optimized (Schema.org Product)
  - ✅ Accessibility (ARIA labels)

**Usage:**
```jsx
import { ProductCard } from '@/components/common/Product';

// Card thường
<ProductCard product={productData} />

// Card đầu tiên (LCP optimization)
<ProductCard product={productData} priority={true} />
```

#### ProductSuggestionsCarousel
- **File:** `ProductSuggestionsCarousel.jsx`
- **Purpose:** Carousel hiển thị sản phẩm gợi ý
- **Features:**
  - ✅ Dùng Embla Carousel
  - ✅ Autoplay support
  - ✅ Responsive
  - ✅ Arrow navigation

**Usage:**
```jsx
import { ProductSuggestionsCarousel } from '@/components/common/Product';

<ProductSuggestionsCarousel products={suggestedProducts} />
```

---

## 🎯 Import Guidelines

### Named Imports (Recommended)
```jsx
// Import từ barrel file
import { Button } from '@/components/common/Button';
import { ProductCard } from '@/components/common/Product';
import { HealthCornerCard } from '@/components/common/Card';
```

### Default Imports
```jsx
// Import trực tiếp từ file
import Button from '@/components/common/Button/Button';
import ProductCard from '@/components/common/Product/ProductCard';
```

### Multiple Imports
```jsx
// Import nhiều components cùng lúc
import { ProductCard, ProductSuggestionsCarousel } from '@/components/common/Product';
```

---

## 📝 Naming Conventions

### Folders
- **PascalCase** cho component folders: `Button/`, `Product/`, `Card/`
- Tên folder = tên component chính

### Files
- **PascalCase.jsx** cho component files: `Button.jsx`, `ProductCard.jsx`
- **camelCase.js** cho utility files: `index.js`, `utils.js`
- **PascalCase.stories.js** cho Storybook: `Button.stories.js`

### Components
- **PascalCase** cho component names: `Button`, `ProductCard`
- **Descriptive names**: `ProductSuggestionsCarousel` thay vì `PSC`

---

## 🔄 Adding New Components

### 1. Xác định category
Quyết định component thuộc nhóm nào:
- **Button** - Các loại buttons
- **Card** - Các loại cards (product, blog, etc.)
- **Product** - Components liên quan đến sản phẩm
- **EmblaCarousel** - Carousel components
- **New Category** - Tạo folder mới nếu cần

### 2. Tạo component file
```bash
# Ví dụ: Tạo ProductGrid component
touch src/components/common/Product/ProductGrid.jsx
```

### 3. Update barrel export
```javascript
// src/components/common/Product/index.js
export { default as ProductCard } from "./ProductCard";
export { default as ProductSuggestionsCarousel } from "./ProductSuggestionsCarousel";
export { default as ProductGrid } from "./ProductGrid"; // ← Thêm dòng này
```

### 4. Document component
Thêm JSDoc comments và usage examples vào component file.

---

## 🎨 Component Template

```jsx
/**
 * ============================================================================
 * [COMPONENT NAME] - [DESCRIPTION]
 * ============================================================================
 *
 * [Detailed description]
 *
 * FEATURES:
 * ---------
 * ✅ Feature 1
 * ✅ Feature 2
 *
 * PROPS:
 * ------
 * @param {type} propName - Description
 *
 * USAGE:
 * ------
 * import { ComponentName } from '@/components/common/Category';
 *
 * <ComponentName prop={value} />
 *
 * ============================================================================
 */

"use client";

import React from "react";

export default function ComponentName({ prop1, prop2 }) {
    return (
        <div>
            {/* Component content */}
        </div>
    );
}
```

---

## 📚 References

- [Next.js Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [React Best Practices](https://react.dev/learn)
- [Embla Carousel Docs](https://www.embla-carousel.com/)
