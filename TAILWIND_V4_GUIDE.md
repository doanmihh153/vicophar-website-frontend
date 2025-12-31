# 🎨 HƯỚNG DẪN SỬ DỤNG TAILWIND CSS V4 - VICOPHAR VIETNAM

> **Tailwind CSS v4.1.16** - Hệ thống design mới với CSS Variables và responsive typography

---

## 📋 MỤC LỤC

1. [Giới thiệu](#giới-thiệu)
2. [Cài đặt](#cài-đặt)
3. [Cấu trúc Files](#cấu-trúc-files)
4. [Hệ thống màu sắc](#hệ-thống-màu-sắc)
5. [Typography - Font sizes](#typography---font-sizes)
6. [Spacing & Layout](#spacing--layout)
7. [Shadows & Effects](#shadows--effects)
8. [Responsive Design](#responsive-design)
9. [Best Practices](#best-practices)
10. [Examples](#examples)

---

## 🎯 GIỚI THIỆU

### **Điểm mới trong Tailwind v4:**

- ✅ **CSS-first configuration** - Không cần `tailwind.config.js` phức tạp
- ✅ **Lightning CSS** - Build nhanh hơn 10x so với PostCSS
- ✅ **Native CSS Variables** - Dễ customize và debug
- ✅ **Automatic content detection** - Không cần config `content`
- ✅ **Smaller bundle size** - Tối ưu hơn v3

### **Vicophar Design System:**

- 🎨 Tên classes dễ nhớ: `vico-green`, `vico-h1`, `vico-btn`
- 📱 Responsive typography tự động với `clamp()`
- 🎭 Breakpoints: `mobile` → `tablet` → `desktop` → `wide`
- 🚀 Performance-first approach

---

## 📦 CÀI ĐẶT

### **1. Dependencies:**

```json
{
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.16",
    "next": "16.0.1",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.1.16",
    "postcss": "^8.5.6"
  }
}
```

### **2. Cài đặt packages:**

```bash
pnpm install
# hoặc
npm install
# hoặc
yarn install
```

### **3. Chạy dev server:**

```bash
pnpm dev
```

---

## 📁 CẤU TRÚC FILES

```
src/styles/
├── globals.css          # Import Tailwind + custom CSS
├── base.css            # Base styles, reset
├── components.css      # Component classes (đã xóa - dùng Tailwind utility)
└── utilities.css       # Custom utilities (đã xóa - dùng Tailwind utility)

tailwind.config.js      # Tailwind v4 config
```

### **globals.css:**

```css
@import "tailwindcss";
@import "./base.css";
```

### **base.css:**

```css
/* Base styles cho body, headings, images */
html,
body {
    font-family: var(--font-svn-gilroy), var(--font-be-vietnam), sans-serif;
    scroll-behavior: smooth;
}
```

---

## 🎨 HỆ THỐNG MÀU SẮC

### **1. Màu xanh lá - Brand Color:**

```jsx
// Màu xanh chính
<div className="bg-vico-green text-white">
  Vicophar Green
</div>

// Màu xanh đậm (header)
<header className="bg-vico-green-dark">
  Header
</header>

// Màu xanh nhạt (hover background)
<div className="hover:bg-vico-green-light">
  Hover me
</div>

// Màu hover (buttons)
<button className="bg-vico-green hover:bg-vico-green-hover">
  Click me
</button>
```

**Giá trị:**
- `vico-green` (DEFAULT): `#0db061`
- `vico-green-dark`: `#006838`
- `vico-green-light`: `#e7ffea`
- `vico-green-hover`: `#00954d`

---

### **2. Màu đỏ - Accent Color:**

```jsx
// Sale badge
<span className="bg-vico-red text-white px-2 py-1 rounded">
  -50%
</span>

// Alert background
<div className="bg-vico-red-light border border-vico-red">
  Cảnh báo!
</div>
```

**Giá trị:**
- `vico-red` (DEFAULT): `#BE1E2D`
- `vico-red-light`: `#fee2e2`

---

### **3. Màu xanh dương - Secondary Color:**

```jsx
// Info button
<button className="bg-vico-blue text-white">
  Thông tin
</button>

// Info box
<div className="bg-vico-blue-light p-4">
  Thông tin quan trọng
</div>
```

**Giá trị:**
- `vico-blue` (DEFAULT): `#02509E`
- `vico-blue-light`: `#dbeafe`

---

### **4. Màu xám - Neutral Colors:**

```jsx
// Background sections
<section className="bg-vico-gray-50">
  Content
</section>

// Hover states
<div className="hover:bg-vico-gray-100">
  Hover me
</div>

// Borders
<div className="border border-vico-gray-200">
  Card
</div>

// Disabled text
<p className="text-vico-gray-400">
  Disabled
</p>

// Secondary text
<p className="text-vico-gray-600">
  Secondary text
</p>

// Footer, dark sections
<footer className="bg-vico-gray-900 text-white">
  Footer
</footer>
```

**Giá trị:**
- `vico-gray-50`: `#f9fafb`
- `vico-gray-100`: `#f3f4f6`
- `vico-gray-200`: `#e5e7eb`
- `vico-gray-400`: `#9ca3af`
- `vico-gray-600`: `#54595f`
- `vico-gray-900`: `#111827`

---

### **5. Màu chữ - Text Colors:**

```jsx
// Màu chữ chính (headings, body)
<h1 className="text-vico-text">
  Tiêu đề chính
</h1>

// Màu chữ phụ (descriptions)
<p className="text-vico-text-secondary">
  Mô tả sản phẩm
</p>

// Màu chữ nhạt (captions, labels)
<span className="text-vico-text-light">
  Label
</span>

// Màu chữ trắng (on dark backgrounds)
<div className="bg-vico-green text-vico-text-white">
  White text
</div>
```

**Giá trị:**
- `vico-text` (DEFAULT): `#111`
- `vico-text-secondary`: `#374151`
- `vico-text-light`: `#6b7280`
- `vico-text-white`: `#ffffff`

---

### **6. Màu hover & focus:**

```jsx
// Hover background
<div className="hover:bg-vico-hover">
  Hover me
</div>

// Focus ring
<input className="focus:ring-2 focus:ring-vico-focus" />
```

**Giá trị:**
- `vico-hover`: `#f7f7f7`
- `vico-focus`: `#3b82f6`

---

## 📝 TYPOGRAPHY - FONT SIZES

### **✨ Tự động responsive với clamp():**

Tất cả font sizes đều tự động scale theo viewport width!

### **1. Headings - Tiêu đề:**

```jsx
// H1 - Hero, Page Title
// Desktop: 48px, Tablet: 40px, Mobile: 32px
<h1 className="text-vico-h1">
  Vicophar - Dược Mỹ Phẩm Thiên Nhiên
</h1>

// H2 - Section Title
// Desktop: 40px, Tablet: 32px, Mobile: 28px
<h2 className="text-vico-h2">
  Sản phẩm nổi bật
</h2>

// H3 - Card Title, Product Name
// Desktop: 32px, Tablet: 28px, Mobile: 24px
<h3 className="text-vico-h3">
  Tên sản phẩm
</h3>

// H4 - Tiêu đề rất nhỏ
// Desktop: 24px, Tablet: 22px, Mobile: 20px
<h4 className="text-vico-h4">
  Tiêu đề nhỏ
</h4>
```

**Giá trị:**
- `text-vico-h1`: `clamp(2rem, 5vw, 3rem)` (32px → 48px)
- `text-vico-h2`: `clamp(1.75rem, 4vw, 2.5rem)` (28px → 40px)
- `text-vico-h3`: `clamp(1.5rem, 3vw, 2rem)` (24px → 32px)
- `text-vico-h4`: `clamp(1.25rem, 2vw, 1.5rem)` (20px → 24px)

---

### **2. Body Text - Văn bản:**

```jsx
// Body Large - Intro, Lead
// Desktop: 20px, Tablet: 18px, Mobile: 16px
<p className="text-vico-lg">
  Đoạn văn giới thiệu lớn
</p>

// Body Base - Default (KHUYÊN DÙNG)
// Desktop: 16px, Tablet: 16px, Mobile: 14px
<p className="text-vico-base">
  Nội dung chính của trang
</p>

// Body Small - Captions, Labels
// Desktop: 14px, Tablet: 14px, Mobile: 12px
<span className="text-vico-sm">
  Chú thích nhỏ
</span>

// Body Extra Small - Fine print
// Desktop: 12px, Mobile: 11px
<small className="text-vico-xs">
  Điều khoản sử dụng
</small>
```

**Giá trị:**
- `text-vico-lg`: `clamp(1rem, 1.5vw, 1.25rem)` (16px → 20px)
- `text-vico-base`: `clamp(0.875rem, 1vw, 1rem)` (14px → 16px)
- `text-vico-sm`: `clamp(0.75rem, 0.8vw, 0.875rem)` (12px → 14px)
- `text-vico-xs`: `clamp(0.6875rem, 0.7vw, 0.75rem)` (11px → 12px)

---

### **3. Special - Đặc biệt:**

```jsx
// Display - Hero banner
// Desktop: 64px, Tablet: 48px, Mobile: 36px
<h1 className="text-vico-display font-bold">
  VICOPHAR
</h1>

// Button text
// Desktop: 16px, Mobile: 14px
<button className="text-vico-btn font-semibold">
  Mua ngay
</button>
```

**Giá trị:**
- `text-vico-display`: `clamp(2.25rem, 6vw, 4rem)` (36px → 64px)
- `text-vico-btn`: `clamp(0.875rem, 1vw, 1rem)` (14px → 16px)

---

## 📏 SPACING & LAYOUT

### **1. Spacing - Khoảng cách:**

```jsx
// Padding/Margin rất nhỏ - 4px
<div className="p-vico-xs">Content</div>

// Padding/Margin nhỏ - 8px
<div className="p-vico-sm">Content</div>

// Padding/Margin trung bình - 16px (DEFAULT)
<div className="p-vico-md">Content</div>

// Padding/Margin lớn - 24px
<div className="p-vico-lg">Content</div>

// Padding/Margin rất lớn - 32px
<div className="p-vico-xl">Content</div>

// Padding/Margin cực lớn - 48px
<div className="p-vico-2xl">Content</div>

// Spacing cho sections - 64px
<section className="py-vico-section">
  Section content
</section>
```

**Giá trị:**
- `vico-xs`: `0.25rem` (4px)
- `vico-sm`: `0.5rem` (8px)
- `vico-md`: `1rem` (16px)
- `vico-lg`: `1.5rem` (24px)
- `vico-xl`: `2rem` (32px)
- `vico-2xl`: `3rem` (48px)
- `vico-section`: `4rem` (64px)

---

### **2. Border Radius - Bo tròn:**

```jsx
// Bo tròn nhỏ - 4px (Buttons, inputs)
<button className="rounded-vico-sm">Button</button>

// Bo tròn trung bình - 8px (Cards)
<div className="rounded-vico-md">Card</div>

// Bo tròn lớn - 12px (Large cards)
<div className="rounded-vico-lg">Large card</div>

// Bo tròn rất lớn - 16px (Modals)
<div className="rounded-vico-xl">Modal</div>

// Bo tròn hoàn toàn - Pills, avatars
<span className="rounded-vico-full">Badge</span>
```

**Giá trị:**
- `rounded-vico-sm`: `0.25rem` (4px)
- `rounded-vico-md`: `0.5rem` (8px)
- `rounded-vico-lg`: `0.75rem` (12px)
- `rounded-vico-xl`: `1rem` (16px)
- `rounded-vico-full`: `9999px`

---

### **3. Widths & Heights:**

```jsx
// Container chính - 1280px
<div className="w-vico-container mx-auto">
  Container
</div>

// Search bar - 600px
<input className="w-vico-search" />

// Sidebar - 280px
<aside className="w-vico-sidebar">Sidebar</aside>

// Header height - 120px
<header className="h-vico-header">Header</header>

// Input height - 40px
<input className="h-vico-input" />

// Button height - 44px
<button className="h-vico-btn">Button</button>
```

**Giá trị:**
- `w-vico-container`: `1280px`
- `w-vico-search`: `600px`
- `w-vico-sidebar`: `280px`
- `h-vico-header`: `120px`
- `h-vico-input`: `40px`
- `h-vico-btn`: `44px`

---

## 🎭 SHADOWS & EFFECTS

### **1. Box Shadows:**

```jsx
// Bóng nhỏ - Buttons, small cards
<div className="shadow-vico-sm">Small shadow</div>

// Bóng trung bình - Cards, hover states
<div className="shadow-vico-md hover:shadow-vico-lg">
  Card
</div>

// Bóng lớn - Modals, popovers
<div className="shadow-vico-lg">Modal</div>

// Bóng rất lớn - Floating elements
<div className="shadow-vico-xl">Floating</div>

// Bóng header - Sticky header
<header className="shadow-vico-header">Header</header>

// Bóng dropdown - Menu dropdowns
<div className="shadow-vico-dropdown">Dropdown</div>
```

---

### **2. Transitions:**

```jsx
// Nhanh - 150ms (Hover effects)
<button className="transition-all duration-vico-fast hover:bg-vico-green">
  Quick
</button>

// Bình thường - 300ms (Default)
<div className="transition-all duration-vico-normal">
  Normal
</div>

// Chậm - 500ms (Complex animations)
<div className="transition-all duration-vico-slow">
  Slow
</div>
```

**Giá trị:**
- `duration-vico-fast`: `150ms`
- `duration-vico-normal`: `300ms`
- `duration-vico-slow`: `500ms`

---

### **3. Z-Index:**

```jsx
// Dropdown menus
<div className="z-vico-dropdown">Dropdown</div>

// Sticky header/footer
<header className="sticky top-0 z-vico-sticky">Header</header>

// Fixed elements
<div className="fixed z-vico-fixed">Fixed</div>

// Modal overlays
<div className="fixed inset-0 z-vico-modal">Modal</div>

// Tooltips
<div className="z-vico-tooltip">Tooltip</div>
```

**Giá trị:**
- `z-vico-dropdown`: `1000`
- `z-vico-sticky`: `1020`
- `z-vico-fixed`: `1030`
- `z-vico-modal`: `1050`
- `z-vico-tooltip`: `1070`

---

## 📱 RESPONSIVE DESIGN

### **Breakpoints:**

```
mobile:   320px   (Điện thoại)
tablet:   768px   (iPad, tablet)
desktop:  1040px  (Laptop, PC)
wide:     1280px  (Desktop lớn, TV)
```

### **Cách sử dụng:**

```jsx
// Mobile-first approach (mặc định)
<div className="text-vico-base tablet:text-vico-lg desktop:text-vico-xl">
  Responsive text
</div>

// Padding responsive
<div className="p-vico-sm tablet:p-vico-md desktop:p-vico-lg">
  Responsive padding
</div>

// Grid responsive
<div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

// Hide/Show responsive
<div className="block tablet:hidden">
  Chỉ hiện trên mobile
</div>

<div className="hidden desktop:block">
  Chỉ hiện trên desktop
</div>
```

---

## ✅ BEST PRACTICES

### **1. Sử dụng font sizes responsive:**

```jsx
// ✅ ĐÚNG - Tự động responsive
<h1 className="text-vico-h1">Tiêu đề</h1>

// ❌ SAI - Phải viết nhiều breakpoints
<h1 className="text-2xl tablet:text-4xl desktop:text-6xl">Tiêu đề</h1>
```

---

### **2. Sử dụng màu Vicophar:**

```jsx
// ✅ ĐÚNG - Dùng màu brand
<button className="bg-vico-green hover:bg-vico-green-hover">
  Button
</button>

// ❌ SAI - Dùng màu Tailwind mặc định
<button className="bg-green-500 hover:bg-green-600">
  Button
</button>
```

---

### **3. Sử dụng spacing nhất quán:**

```jsx
// ✅ ĐÚNG - Dùng spacing system
<div className="p-vico-md gap-vico-sm">
  Content
</div>

// ❌ SAI - Dùng giá trị tùy ý
<div className="p-4 gap-2">
  Content
</div>
```

---

### **4. Kết hợp Tailwind utilities:**

```jsx
// ✅ ĐÚNG - Kết hợp nhiều utilities
<button className="
  bg-vico-green 
  hover:bg-vico-green-hover 
  text-white 
  text-vico-btn 
  px-vico-lg 
  py-vico-sm 
  rounded-vico-md 
  shadow-vico-sm 
  hover:shadow-vico-md 
  transition-all 
  duration-vico-normal
">
  Mua ngay
</button>
```

---

## 💡 EXAMPLES

### **1. Button Component:**

```jsx
// Primary Button
<button className="
  bg-vico-green 
  hover:bg-vico-green-hover 
  text-white 
  text-vico-btn 
  font-semibold
  px-vico-lg 
  py-vico-sm 
  rounded-vico-md 
  shadow-vico-sm 
  hover:shadow-vico-md 
  transition-all 
  duration-vico-normal
  h-vico-btn
  inline-flex 
  items-center 
  justify-center
">
  Mua ngay
</button>

// Secondary Button
<button className="
  bg-vico-gray-200 
  hover:bg-vico-gray-400 
  text-vico-text
  text-vico-btn 
  font-semibold
  px-vico-lg 
  py-vico-sm 
  rounded-vico-md 
  transition-all 
  duration-vico-normal
">
  Hủy
</button>

// Outline Button
<button className="
  border-2 
  border-vico-green 
  text-vico-green 
  hover:bg-vico-green 
  hover:text-white
  text-vico-btn 
  font-semibold
  px-vico-lg 
  py-vico-sm 
  rounded-vico-md 
  transition-all 
  duration-vico-normal
">
  Xem thêm
</button>
```

---

### **2. Card Component:**

```jsx
<div className="
  bg-white 
  rounded-vico-lg 
  shadow-vico-sm 
  hover:shadow-vico-lg 
  p-vico-lg 
  transition-all 
  duration-vico-normal
  hover:-translate-y-1
">
  <img 
    src="/product.jpg" 
    alt="Product" 
    className="w-full rounded-vico-md mb-vico-md"
  />
  
  <h3 className="text-vico-h3 text-vico-text mb-vico-sm">
    Tên sản phẩm
  </h3>
  
  <p className="text-vico-base text-vico-text-secondary mb-vico-md">
    Mô tả ngắn về sản phẩm
  </p>
  
  <div className="flex items-center justify-between">
    <span className="text-vico-h4 text-vico-green font-bold">
      299.000đ
    </span>
    
    <button className="
      bg-vico-green 
      hover:bg-vico-green-hover 
      text-white 
      px-vico-md 
      py-vico-sm 
      rounded-vico-sm
      transition-all 
      duration-vico-fast
    ">
      Mua
    </button>
  </div>
</div>
```

---

### **3. Input Component:**

```jsx
<div className="w-full">
  <label className="
    block 
    text-vico-sm 
    text-vico-text-secondary 
    mb-vico-xs
  ">
    Email
  </label>
  
  <input 
    type="email"
    placeholder="email@example.com"
    className="
      w-full 
      h-vico-input
      px-vico-md 
      border 
      border-vico-gray-200 
      rounded-vico-md 
      text-vico-base
      focus:outline-none 
      focus:ring-2 
      focus:ring-vico-focus
      focus:border-transparent
      transition-all 
      duration-vico-fast
    "
  />
</div>
```

---

### **4. Header Component:**

```jsx
<header className="
  h-vico-header 
  sticky 
  top-0 
  z-vico-sticky 
  bg-white 
  shadow-vico-header
">
  {/* Header Top */}
  <div className="
    h-vico-header-top 
    bg-vico-green-dark 
    text-white
  ">
    <div className="
      w-vico-container 
      mx-auto 
      px-vico-md 
      flex 
      items-center 
      justify-between 
      h-full
    ">
      <p className="text-vico-sm">
        Hotline: 0333 152 545
      </p>
      
      <div className="flex gap-vico-sm">
        <a href="#" className="hover:text-vico-green-light">
          Facebook
        </a>
        <a href="#" className="hover:text-vico-green-light">
          Shopee
        </a>
      </div>
    </div>
  </div>
  
  {/* Header Main */}
  <div className="h-vico-header-main bg-white">
    <div className="
      w-vico-container 
      mx-auto 
      px-vico-md 
      flex 
      items-center 
      justify-between 
      h-full
    ">
      <img src="/logo.svg" alt="Vicophar" className="h-12" />
      
      <nav className="hidden desktop:flex gap-vico-lg">
        <a href="#" className="
          text-vico-base 
          text-vico-text 
          hover:text-vico-green
          transition-colors 
          duration-vico-fast
        ">
          Trang chủ
        </a>
        <a href="#" className="
          text-vico-base 
          text-vico-text 
          hover:text-vico-green
          transition-colors 
          duration-vico-fast
        ">
          Sản phẩm
        </a>
      </nav>
      
      <button className="
        bg-vico-green 
        hover:bg-vico-green-hover 
        text-white 
        px-vico-lg 
        py-vico-sm 
        rounded-vico-md
      ">
        Liên hệ
      </button>
    </div>
  </div>
</header>
```

---

## 🚀 TIPS & TRICKS

### **1. Combine với arbitrary values:**

```jsx
// Kết hợp với giá trị tùy chỉnh
<div className="bg-vico-green/50">
  50% opacity
</div>

<div className="w-[calc(100%-2rem)]">
  Custom width
</div>
```

---

### **2. Group hover:**

```jsx
<div className="group">
  <img className="group-hover:scale-110 transition-transform" />
  <h3 className="group-hover:text-vico-green">Title</h3>
</div>
```

---

### **3. Dark mode (nếu cần):**

```jsx
<div className="bg-white dark:bg-vico-gray-900">
  Content
</div>
```

---

## 📚 TÀI LIỆU THAM KHẢO

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Vicophar AI_RULES.md](./AI_RULES.md)

---

## 🙏 LƯU Ý

> **Luôn ưu tiên sử dụng classes `vico-*` thay vì Tailwind default classes để đảm bảo tính nhất quán trong design system!**

**Happy coding! 🎉**
