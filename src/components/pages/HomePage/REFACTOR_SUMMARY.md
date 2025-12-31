# 📋 TÓM TẮT REFACTOR HOMEPAGE - VICOPHAR VIETNAM

## 🎯 MỤC TIÊU ĐÃ HOÀN THÀNH

✅ **Refactor HomePage** theo cấu trúc mới, dễ bảo trì  
✅ **Tạo components tái sử dụng** cho toàn bộ website  
✅ **Tối ưu SEO** với semantic HTML và structured data ready  
✅ **Chuẩn bị sẵn** cho TipTap editor (dashboard)  
✅ **Container center** với max-width 1280px  
✅ **Responsive** trên mọi thiết bị  

---

## 📁 CẤU TRÚC FILE MỚI

```
src/
├── components/
│   ├── common/                          # Components tái sử dụng
│   │   ├── ProductCard.jsx              # ✅ Thẻ sản phẩm
│   │   ├── HealthCornerCard.jsx         # ✅ Thẻ bài viết góc sức khỏe
│   │   └── EmblaCarousel.jsx            # ✅ Carousel (đã có sẵn)
│   │
│   └── pages/
│       └── HomePage/
│           ├── HeroSection.jsx          # ✅ Banner chính (giữ nguyên)
│           ├── AboutUsSection.jsx       # ✅ Về chúng tôi (MỚI)
│           ├── FeaturedProductsCarousel.jsx  # ✅ Sản phẩm nổi bật (MỚI)
│           ├── HealthCornerSection.jsx  # Góc sức khỏe (cần refactor)
│           └── ...
│
├── data/
│   └── mockHomePage.js                  # ✅ Data mới với aboutUsData
│
└── styles/
    └── components.css                   # ✅ Tailwind classes mới
```

---

## 🆕 COMPONENTS MỚI

### 1. **AboutUsSection.jsx** - Về chúng tôi

**Đặc điểm:**
- Tiêu đề H1: "Về chúng tôi"
- Nội dung HTML từ TipTap (3 đoạn văn)
- Nút CTA: "Tìm hiểu thêm" → `/cau-chuyen-vicophar`
- Ảnh minh họa (optional)
- 3 Features nổi bật với ảnh nền

**Data source:** `@/data/mockHomePage` → `aboutUsData`, `aboutUsFeatures`

**Sử dụng:**
```jsx
import AboutUsSection from '@/components/pages/HomePage/AboutUsSection';

<AboutUsSection />
```

---

### 2. **ProductCard.jsx** - Thẻ sản phẩm (Tái sử dụng)

**Đặc điểm:**
- Hiển thị ảnh, tên, mô tả, giá sản phẩm
- Badge: "Bán chạy", "Mới", "Giảm giá"
- Hover effect (scale + shadow)
- Link đến trang chi tiết: `/san-pham/{slug}`
- Format giá VNĐ tự động

**Props:**
```typescript
{
  product: {
    id: string,
    name: string,
    slug: string,
    image: string,
    price: number,
    salePrice?: number,
    description: string,
    badge?: "hot" | "new" | "sale"
  },
  className?: string
}
```

**Sử dụng:**
```jsx
import ProductCard from '@/components/common/ProductCard';

<ProductCard product={productData} />
```

---

### 3. **FeaturedProductsCarousel.jsx** - Carousel sản phẩm nổi bật

**Đặc điểm:**
- Hiển thị tối đa 8 sản phẩm
- Loop vô hạn (quay vòng)
- Nút Previous/Next
- Responsive: 1 (mobile), 2 (tablet), 4 (desktop)
- Sử dụng Embla Carousel

**Props:**
```typescript
{
  products: Array<Product>,  // Tối đa 8 sản phẩm
  title?: string,            // Mặc định: "Sản phẩm nổi bật"
  subtitle?: string,
  viewAllLink?: string       // Mặc định: "/san-pham"
}
```

**Sử dụng:**
```jsx
import FeaturedProductsCarousel from '@/components/pages/HomePage/FeaturedProductsCarousel';

<FeaturedProductsCarousel 
  products={featuredProducts}
  title="Sản phẩm nổi bật"
  viewAllLink="/san-pham"
/>
```

---

### 4. **HealthCornerCard.jsx** - Thẻ bài viết (Tái sử dụng)

**Đặc điểm:**
- 2 variants: "vertical" (dọc) và "horizontal" (ngang)
- Hiển thị ảnh, tiêu đề, mô tả, ngày đăng, tác giả
- Category badge
- Hover effect
- Link đến: `/goc-suc-khoe/{slug}`

**Props:**
```typescript
{
  article: {
    id: string,
    title: string,
    slug: string,
    image: string,
    excerpt: string,
    category?: string,
    author?: string,
    publishedAt?: string
  },
  variant?: "vertical" | "horizontal",  // Mặc định: "vertical"
  className?: string
}
```

**Sử dụng:**
```jsx
import HealthCornerCard from '@/components/common/HealthCornerCard';

// Vertical (dọc)
<HealthCornerCard article={articleData} variant="vertical" />

// Horizontal (ngang)
<HealthCornerCard article={articleData} variant="horizontal" />
```

---

## 🎨 TAILWIND CSS CLASSES MỚI (components.css)

### Container Classes
```css
.vico-container              /* Container chính, max-width 1280px, center */
.vico-container-no-padding   /* Container không padding */
```

### Section Classes
```css
.vico-section                /* Padding top/bottom: 64px */
.vico-section-bg             /* Section với background xám nhạt */
```

### Typography Classes
```css
.vico-heading-1              /* H1 - 48px, bold */
.vico-heading-2              /* H2 - 40px, bold */
.vico-heading-3              /* H3 - 32px, bold */
.vico-heading-4              /* H4 - 24px, semibold */
.vico-body                   /* Body text - 16px */
.vico-text-sm                /* Small text - 14px */
```

### Button Classes
```css
.vico-btn-primary            /* Nút xanh lá chính */
.vico-btn-secondary          /* Nút đỏ */
.vico-btn-outline            /* Nút viền xanh */
```

### Card Classes
```css
.vico-card                   /* Card cơ bản */
.vico-product-card           /* Card sản phẩm (có hover effect) */
```

### TipTap Content
```css
.vico-tiptap-content         /* Wrapper cho HTML từ TipTap editor */
```

---

## 📊 DATA STRUCTURE MỚI (mockHomePage.js)

### aboutUsData
```javascript
{
  id: 'about-us-home',
  title: 'Về chúng tôi',
  content: `<p>...</p>`,  // HTML từ TipTap
  ctaText: 'Tìm hiểu thêm',
  ctaLink: '/cau-chuyen-vicophar',
  image: '/imgs/about-us/vicophar-story.jpg'
}
```

### aboutUsFeatures
```javascript
[
  {
    id: 'feature-1',
    title: 'Chiết xuất dược liệu sạch Đạt Chuẩn TCCS',
    image: '/imgs/about-us/feature-1.jpg',
    alt: '...'
  },
  // ... 2 features khác
]
```

---

## 🔄 CÁCH SỬ DỤNG TRONG HOMEPAGE

### Ví dụ HomePage mới:

```jsx
"use client";

import HeroSection from '@/components/pages/HomePage/HeroSection';
import AboutUsSection from '@/components/pages/HomePage/AboutUsSection';
import FeaturedProductsCarousel from '@/components/pages/HomePage/FeaturedProductsCarousel';
import { featuredProducts } from '@/data/mockHomePage';

export default function HomePage() {
  return (
    <main>
      {/* Hero Banner */}
      <HeroSection />

      {/* Về chúng tôi */}
      <AboutUsSection />

      {/* Sản phẩm nổi bật */}
      <FeaturedProductsCarousel 
        products={featuredProducts}
        title="Sản phẩm nổi bật"
        subtitle="Hành trình sức khỏe – Đồng hành cùng triệu gia đình"
        viewAllLink="/san-pham"
      />

      {/* Các sections khác... */}
    </main>
  );
}
```

---

## 🎯 TÍNH NĂNG SEO

### 1. Semantic HTML
- Sử dụng `<section>`, `<article>`, `<h1>`, `<h2>`, etc.
- Proper heading hierarchy
- ARIA labels cho accessibility

### 2. Image Optimization
- Next.js Image component
- Lazy loading
- Responsive sizes
- Alt text đầy đủ

### 3. Structured Data Ready
- Schema.org markup (cần thêm)
- Open Graph tags (cần thêm trong layout)
- JSON-LD (cần thêm)

---

## 📱 RESPONSIVE BREAKPOINTS

```javascript
// Từ base.css
--breakpoint-mobile: 320px    // < 768px (default)
--breakpoint-tablet: 768px    // >= 768px
--breakpoint-desktop: 1040px  // >= 1040px
--breakpoint-wide: 1280px     // >= 1280px
```

**Sử dụng trong Tailwind:**
```jsx
<div className="w-full tablet:w-1/2 desktop:w-1/4">
  {/* Mobile: 100%, Tablet: 50%, Desktop: 25% */}
</div>
```

---

## 🔮 TƯƠNG LAI - TÍCH HỢP DASHBOARD

### TipTap Editor Integration

**Trong Dashboard (Admin):**
```jsx
import { useEditor, EditorContent } from '@tiptap/react';

// Admin có thể chỉnh sửa nội dung "Về chúng tôi"
const editor = useEditor({
  content: aboutUsData.content,
  // ... TipTap config
});

// Lưu vào database
const handleSave = () => {
  const htmlContent = editor.getHTML();
  // API call để lưu htmlContent
};
```

**Trong Frontend:**
```jsx
// Render HTML từ database
<div 
  className="vico-tiptap-content"
  dangerouslySetInnerHTML={{ __html: aboutUsData.content }}
/>
```

---

## ✅ CHECKLIST HOÀN THÀNH

- [x] Cập nhật `components.css` với Tailwind classes
- [x] Tạo `aboutUsData` và `aboutUsFeatures` trong `mockHomePage.js`
- [x] Refactor `AboutUsSection.jsx` với TipTap HTML support
- [x] Tạo `ProductCard.jsx` component tái sử dụng
- [x] Tạo `FeaturedProductsCarousel.jsx` với Embla
- [x] Tạo `HealthCornerCard.jsx` component tái sử dụng
- [x] Semantic HTML và SEO optimization
- [x] Responsive design
- [x] Container center với max-width 1280px

---

## 📝 GHI CHÚ QUAN TRỌNG

### ⚠️ Lưu ý khi sử dụng:

1. **Images:** Đảm bảo tất cả images tồn tại trong `/public/imgs/`
2. **Data:** Cập nhật `mockHomePage.js` với data thực tế
3. **Links:** Kiểm tra tất cả links (`/san-pham/{slug}`, `/goc-suc-khoe/{slug}`)
4. **TipTap:** Nội dung HTML phải được sanitize trước khi render
5. **Performance:** Sử dụng Next.js Image component cho tất cả ảnh

### 🔧 Cần làm tiếp:

- [ ] Refactor các sections còn lại (HealthCornerSection, HealthTipsSection, etc.)
- [ ] Thêm mock data cho products và articles
- [ ] Tích hợp API thật thay cho mock data
- [ ] Thêm JSON-LD structured data
- [ ] Thêm Open Graph meta tags
- [ ] Tạo sitemap.xml
- [ ] Tối ưu performance (lazy loading, code splitting)

---

## 🤝 HỖ TRỢ

Nếu có thắc mắc, tham khảo:
- **AI_RULES.md** - Quy tắc coding
- **README.md** - Hướng dẫn project
- **Components README** - Hướng dẫn từng component

---

**Cập nhật lần cuối:** 15/11/2025  
**Người thực hiện:** D.Minh  
**Version:** 1.0.0
