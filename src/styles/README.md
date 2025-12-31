# 📁 THƯ MỤC STYLES - CSS & STYLING

## 📋 TỔNG QUAN

Thư mục `styles/` quản lý toàn bộ CSS của ứng dụng, bao gồm TailwindCSS configuration, global styles, component styles và utility classes.

---

## 🗂️ CẤU TRÚC FILES

```
styles/
├── globals.css        # File CSS chính, import TailwindCSS
├── base.css          # Base styles, CSS reset
├── components.css    # Component-specific styles
└── utilities.css     # Custom utility classes
```

---

## 📄 MÔ TẢ CHI TIẾT

### 1️⃣ **globals.css** - File CSS Chính

**Mục đích:** Import TailwindCSS và các CSS modules khác

**Code hiện tại:**
```css
@import "tailwindcss";
/* -- TailwindCSS v4 */
@import "./base.css";
@import "./components.css";
@import "./utilities.css";
```

**Giải thích:**
- `@import "tailwindcss"` - Import TailwindCSS v4 (syntax mới)
- Import các CSS modules theo thứ tự: base → components → utilities
- File này được import trong `app/layout.js`

**Lưu ý:**
- ✅ TailwindCSS v4 sử dụng `@import "tailwindcss"` thay vì directives cũ
- ✅ Thứ tự import quan trọng (base trước, utilities sau)

---

### 2️⃣ **base.css** - Base Styles

**Mục đích:** CSS reset, base styles, CSS variables

**Trạng thái:** 🚧 Đang trống, cần thêm

**Nội dung đề xuất:**

```css
/* ========================================
   BASE STYLES - VICOPHAR VIETNAM
   ======================================== */

/* CSS Variables - Design Tokens */
:root {
    /* ===== COLORS ===== */
    
    /* Brand Colors - Green */
    --bg-green-primary: #00A551;
    --bg-green-header: #006838;
    --bg-green-hover: #008A44;
    --color-hover-gr: #005A2D;
    
    /* Background Colors */
    --bg-white-primary: #FFFFFF;
    --bg-gray-50: #F9FAFB;
    --bg-gray-100: #F3F4F6;
    --bg-gray-200: #E5E7EB;
    --bg-gray-900: #111827;
    
    /* Accent Colors */
    --bg-red-primary: #E92629;
    --bg-blue-primary: #02509E;
    
    /* Text Colors */
    --color-text-primary: #1F2937;
    --color-text-secondary: #4B5563;
    --color-text-gray: #6B7280;
    --color-text-light: #9CA3AF;
    --color-text-white: #FFFFFF;
    
    /* Hover & States */
    --color-hover: #00A551;
    --color-hover-light: #E8F5E9;
    --color-focus: #00A551;
    
    /* ===== TYPOGRAPHY ===== */
    --fs-primary: 16px;
    --fs-small: 14px;
    --fs-large: 18px;
    --fs-xl: 24px;
    
    --lh-tight: 1.25;
    --lh-normal: 1.5;
    --lh-relaxed: 1.75;
    
    /* ===== SPACING ===== */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 48px;
    
    /* ===== BORDER RADIUS ===== */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;
    
    /* ===== SHADOWS ===== */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-header: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-dropdown: 0 4px 12px rgba(0, 0, 0, 0.15);
    --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
    
    /* ===== DIMENSIONS ===== */
    --w-width-main: 1280px;
    --w-search: 600px;
    
    --h-header: 120px;
    --h-header-first: 40px;
    --h-header-second: 80px;
    --h-header-search: 48px;
    --h-div-input-search: 40px;
}

/* ===== CSS RESET ===== */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

body {
    font-family: var(--font-svn-gilroy), var(--font-be-vietnam), sans-serif;
    font-size: var(--fs-primary);
    line-height: var(--lh-normal);
    color: var(--color-text-primary);
    background-color: var(--bg-white-primary);
}

/* ===== HEADINGS ===== */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: var(--lh-tight);
    color: var(--color-text-primary);
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

/* ===== LINKS ===== */
a {
    color: var(--bg-green-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--bg-green-hover);
}

/* ===== BUTTONS ===== */
button {
    font-family: inherit;
    cursor: pointer;
}

/* ===== IMAGES ===== */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ===== LISTS ===== */
ul, ol {
    list-style: none;
}

/* ===== FOCUS STYLES ===== */
:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
}

/* ===== SELECTION ===== */
::selection {
    background-color: var(--bg-green-primary);
    color: white;
}
```

---

### 3️⃣ **components.css** - Component Styles

**Mục đích:** Styles cho các components cụ thể

**Trạng thái:** 🚧 Đang trống, cần thêm

**Nội dung đề xuất:**

```css
/* ========================================
   COMPONENT STYLES - VICOPHAR VIETNAM
   ======================================== */

/* ===== BUTTONS ===== */
.btn {
    @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300;
}

.btn-primary {
    @apply bg-green-primary text-white hover:bg-green-hover;
}

.btn-secondary {
    @apply bg-gray-200 text-text-primary hover:bg-gray-300;
}

.btn-outline {
    @apply border-2 border-green-primary text-green-primary hover:bg-green-primary hover:text-white;
}

/* ===== CARDS ===== */
.card {
    @apply bg-white rounded-lg shadow-card p-6 transition-shadow duration-300;
}

.card:hover {
    @apply shadow-lg;
}

.card-product {
    @apply card cursor-pointer;
}

/* ===== INPUTS ===== */
.input {
    @apply w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-green-primary transition-colors;
}

.input-search {
    @apply input pl-10 h-[var(--h-div-input-search)];
}

/* ===== BADGES ===== */
.badge {
    @apply inline-flex items-center justify-center px-2 py-1 text-xs font-semibold rounded-full;
}

.badge-success {
    @apply badge bg-green-primary text-white;
}

.badge-danger {
    @apply badge bg-red-primary text-white;
}

.badge-info {
    @apply badge bg-blue-primary text-white;
}

/* ===== CONTAINER ===== */
.container {
    @apply max-w-[var(--w-width-main)] mx-auto px-4;
}

/* ===== HEADER ===== */
.header {
    @apply h-[var(--h-header)] shadow-header sticky top-0 z-sticky bg-white;
}

.header-first {
    @apply h-[var(--h-header-first)] bg-green-header;
}

.header-second {
    @apply h-[var(--h-header-second)] bg-white;
}

/* ===== DROPDOWN ===== */
.dropdown {
    @apply absolute top-full left-0 mt-2 bg-white rounded-lg shadow-dropdown py-2 min-w-[200px];
}

.dropdown-item {
    @apply px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors;
}

/* ===== MODAL ===== */
.modal-overlay {
    @apply fixed inset-0 bg-black bg-opacity-50 z-modal flex items-center justify-center;
}

.modal-content {
    @apply bg-white rounded-lg p-6 max-w-lg w-full mx-4;
}

/* ===== LOADING ===== */
.spinner {
    @apply animate-spin rounded-full border-4 border-gray-200 border-t-green-primary;
}

/* ===== SKELETON ===== */
.skeleton {
    @apply animate-pulse bg-gray-200 rounded;
}
```

---

### 4️⃣ **utilities.css** - Custom Utilities

**Mục đích:** Custom utility classes bổ sung cho Tailwind

**Trạng thái:** 🚧 Đang trống, cần thêm

**Nội dung đề xuất:**

```css
/* ========================================
   UTILITY CLASSES - VICOPHAR VIETNAM
   ======================================== */

/* ===== TEXT UTILITIES ===== */
.text-gradient {
    background: linear-gradient(135deg, var(--bg-green-primary), var(--bg-green-hover));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.text-balance {
    text-wrap: balance;
}

/* ===== LAYOUT UTILITIES ===== */
.flex-center {
    @apply flex items-center justify-center;
}

.flex-between {
    @apply flex items-center justify-between;
}

.grid-auto-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

/* ===== ASPECT RATIOS ===== */
.aspect-square {
    aspect-ratio: 1 / 1;
}

.aspect-video {
    aspect-ratio: 16 / 9;
}

.aspect-product {
    aspect-ratio: 3 / 4;
}

/* ===== SCROLLBAR ===== */
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-thin::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
    background: var(--bg-gray-100);
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background: var(--bg-gray-300);
    border-radius: var(--radius-full);
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: var(--bg-gray-400);
}

/* ===== TRUNCATE ===== */
.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* ===== ANIMATIONS ===== */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
}

.animate-slideUp {
    animation: slideUp 0.3s ease-out;
}

.animate-slideDown {
    animation: slideDown 0.3s ease-out;
}

/* ===== HOVER EFFECTS ===== */
.hover-lift {
    transition: transform 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-4px);
}

.hover-scale {
    transition: transform 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.05);
}

/* ===== GLASS EFFECT ===== */
.glass {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/* ===== PRINT UTILITIES ===== */
@media print {
    .no-print {
        display: none !important;
    }
}
```

---

## 🎨 TAILWIND CONFIGURATION

**File:** `tailwind.config.js` (ở root)

**Highlights:**
- Custom breakpoints: tablet (768px), desktop (1040px), wide (1280px)
- Colors từ CSS variables
- Custom spacing, shadows, border-radius
- Font configuration

**Xem chi tiết:** [../tailwind.config.js](../../tailwind.config.js)

---

## 📝 BEST PRACTICES

### ✅ **NÊN LÀM:**

1. **Sử dụng CSS Variables:**
   ```css
   /* ✅ ĐÚNG */
   .element {
       color: var(--color-text-primary);
       background: var(--bg-green-primary);
   }
   
   /* ❌ SAI */
   .element {
       color: #1F2937;
       background: #00A551;
   }
   ```

2. **Sử dụng Tailwind @apply:**
   ```css
   /* ✅ ĐÚNG - Trong component styles */
   .btn-primary {
       @apply bg-green-primary text-white px-6 py-3 rounded-lg;
   }
   ```

3. **Mobile-first approach:**
   ```css
   /* ✅ ĐÚNG */
   .element {
       width: 100%;
   }
   
   @media (min-width: 768px) {
       .element {
           width: 50%;
       }
   }
   ```

### ❌ **KHÔNG NÊN:**

1. ❌ Hard-code colors, spacing
2. ❌ Sử dụng !important (trừ khi thực sự cần)
3. ❌ Tạo quá nhiều custom classes
4. ❌ Inline styles trong JSX

---

## 🎯 STYLING STRATEGY

### **1. Ưu tiên sử dụng Tailwind classes:**
```javascript
<div className="bg-green-primary text-white p-4 rounded-lg">
```

### **2. Component styles cho patterns lặp lại:**
```css
/* components.css */
.card-product {
    @apply bg-white rounded-lg shadow-card p-4 hover:shadow-lg transition;
}
```

### **3. CSS Modules cho component-specific:**
```css
/* Component.module.css */
.header {
    background: var(--bg-green-primary);
}
```

### **4. Global styles cho base elements:**
```css
/* base.css */
body {
    font-family: var(--font-svn-gilroy);
}
```

---

## 🔧 RESPONSIVE DESIGN

### **Breakpoints:**

```javascript
// Tailwind classes
<div className="w-full tablet:w-1/2 desktop:w-1/3 wide:w-1/4">

// CSS
@media (min-width: 768px) { /* tablet */ }
@media (min-width: 1040px) { /* desktop */ }
@media (min-width: 1280px) { /* wide */ }
```

### **Container:**

```javascript
<div className="container mx-auto px-4">
    {/* Max-width: 1280px, centered, với padding */}
</div>
```

---

## 🎨 COLOR SYSTEM

### **Sử dụng trong Tailwind:**

```javascript
// Background
<div className="bg-green-primary">
<div className="bg-white-primary">
<div className="bg-gray-100">

// Text
<p className="text-text-primary">
<p className="text-text-secondary">

// Border
<div className="border-green-primary">

// Hover
<button className="hover:bg-green-hover">
```

---

## 📚 TÀI LIỆU THAM KHẢO

- [TailwindCSS v4 Docs](https://tailwindcss.com/docs)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS @apply](https://tailwindcss.com/docs/functions-and-directives#apply)

---

## 📞 HỖ TRỢ

Nếu cần thêm styles:
1. Kiểm tra xem có thể dùng Tailwind classes không
2. Nếu không, thêm vào file CSS phù hợp
3. Sử dụng CSS variables cho values
4. Document rõ ràng

**Liên hệ team lead để review.**
