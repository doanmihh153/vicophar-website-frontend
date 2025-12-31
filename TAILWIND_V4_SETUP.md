# 🎨 TAILWIND CSS V4 - SETUP GUIDE

> **Tailwind v4 CSS-first Configuration** - Không cần `tailwind.config.js`

---

## 📋 CẤU TRÚC MỚI

### **Tailwind v4 thay đổi gì?**

❌ **TRƯỚC (v3):**
```
tailwind.config.js  ← Config ở đây
postcss.config.js
src/styles/globals.css
```

✅ **SAU (v4):**
```
postcss.config.mjs  ← Chỉ cần PostCSS plugin
src/styles/
  ├── globals.css   ← Import Tailwind
  └── base.css      ← @theme config ở đây
```

---

## 🚀 SETUP HOÀN CHỈNH

### **1. Dependencies:**

```json
{
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.16"
  },
  "devDependencies": {
    "tailwindcss": "^4.1.16",
    "postcss": "^8.5.6"
  }
}
```

### **2. PostCSS Config (`postcss.config.mjs`):**

```javascript
const config = {
    plugins: {
        "@tailwindcss/postcss": {},
    },
};
export default config;
```

### **3. Global CSS (`src/styles/globals.css`):**

```css
/* Import Tailwind */
@import "tailwindcss";

/* Import custom styles */
@import "./base.css";
```

### **4. Theme Config (`src/styles/base.css`):**

```css
@theme {
    /* ========================================
       COLORS
       ======================================== */
    --color-vico-green: #0db061;
    --color-vico-green-dark: #006838;
    --color-vico-green-light: #e7ffea;
    --color-vico-green-hover: #00954d;

    /* ========================================
       FONT SIZES - RESPONSIVE
       ======================================== */
    --font-size-vico-h1: clamp(2rem, 5vw, 3rem);
    --font-size-vico-base: clamp(0.875rem, 1vw, 1rem);

    /* ========================================
       SPACING
       ======================================== */
    --spacing-vico-md: 1rem;
    --spacing-vico-lg: 1.5rem;

    /* ... và tất cả config khác */
}

/* Base styles sử dụng CSS variables */
html,
body {
    font-family: var(--font-svn-gilroy), sans-serif;
    color: var(--color-vico-text);
    font-size: var(--font-size-vico-base);
}
```

---

## 🎯 CÁCH SỬ DỤNG

### **1. Sử dụng trong HTML/JSX:**

```jsx
// ✅ Dùng Tailwind utilities như bình thường
<div className="bg-vico-green text-white p-4 rounded-lg">
  Content
</div>

// ✅ Responsive
<h1 className="text-2xl tablet:text-4xl desktop:text-6xl">
  Tiêu đề
</h1>

// ✅ Hover states
<button className="bg-vico-green hover:bg-vico-green-hover">
  Click me
</button>
```

### **2. Sử dụng CSS Variables trong CSS:**

```css
.custom-component {
    color: var(--color-vico-green);
    padding: var(--spacing-vico-md);
    border-radius: var(--radius-vico-lg);
    font-size: var(--font-size-vico-h1);
}
```

### **3. Không dùng @apply nữa (v4 khuyến nghị):**

❌ **TRÁNH:**
```css
.button {
    @apply bg-vico-green text-white px-4 py-2;
}
```

✅ **NÊN:**
```jsx
// Dùng trực tiếp trong className
<button className="bg-vico-green text-white px-4 py-2">
  Button
</button>
```

Hoặc dùng CSS variables:
```css
.button {
    background-color: var(--color-vico-green);
    color: var(--color-vico-text-white);
    padding: var(--spacing-vico-sm) var(--spacing-vico-md);
}
```

---

## 📝 NAMING CONVENTION

### **CSS Variables trong @theme:**

```css
@theme {
    /* Colors */
    --color-{name}: #hex;
    --color-{name}-{variant}: #hex;

    /* Font sizes */
    --font-size-{name}: value;

    /* Spacing */
    --spacing-{name}: value;

    /* Border radius */
    --radius-{name}: value;

    /* Shadows */
    --shadow-{name}: value;

    /* Transitions */
    --transition-{name}: value;

    /* Z-index */
    --z-index-{name}: value;

    /* Dimensions */
    --width-{name}: value;
    --height-{name}: value;
}
```

### **Tailwind Classes:**

Tailwind v4 tự động generate classes từ CSS variables:

```css
/* CSS Variable */
--color-vico-green: #0db061;

/* Tự động tạo classes: */
.bg-vico-green
.text-vico-green
.border-vico-green
```

---

## ⚠️ LƯU Ý QUAN TRỌNG

### **1. Không cần `tailwind.config.js`:**

Tailwind v4 dùng **CSS-first configuration**. Tất cả config nằm trong `@theme` directive.

### **2. Import order quan trọng:**

```css
/* ✅ ĐÚNG */
@import "tailwindcss";  /* Phải import đầu tiên */
@import "./base.css";   /* Sau đó mới import custom */

/* ❌ SAI */
@import "./base.css";
@import "tailwindcss";
```

### **3. CSS Variables phải có prefix:**

```css
/* ✅ ĐÚNG */
--color-vico-green: #0db061;
--font-size-vico-h1: 3rem;

/* ❌ SAI - Tailwind không nhận */
--vico-green: #0db061;
--h1: 3rem;
```

### **4. Breakpoints:**

Tailwind v4 vẫn dùng breakpoints như v3:

```css
@theme {
    --breakpoint-tablet: 768px;
    --breakpoint-desktop: 1040px;
}
```

Sử dụng:
```jsx
<div className="text-base tablet:text-lg desktop:text-xl">
  Responsive text
</div>
```

---

## 🐛 TROUBLESHOOTING

### **Lỗi: "Unknown at rule @theme"**

✅ **Giải pháp:** Đây là lint warning của IDE, code vẫn chạy bình thường. Bạn có thể ignore hoặc config IDE.

### **Lỗi: "Cannot find module 'tailwindcss'"**

✅ **Giải pháp:**
```bash
pnpm install tailwindcss @tailwindcss/postcss
```

### **Lỗi: Classes không apply**

✅ **Giải pháp:** Kiểm tra:
1. CSS variables có đúng naming convention không?
2. `@import "tailwindcss"` có ở đầu file không?
3. PostCSS config có đúng không?

### **Lỗi: Import trace Client Component**

✅ **Giải pháp:** Đảm bảo:
```javascript
// layout.js
import "@/styles/globals.css"; // Import ở Server Component
```

---

## 📚 TÀI LIỆU THAM KHẢO

- [Tailwind CSS v4 Beta Docs](https://tailwindcss.com/docs/v4-beta)
- [CSS Theme Configuration](https://tailwindcss.com/docs/v4-beta#css-theme-configuration)
- [Migration Guide v3 → v4](https://tailwindcss.com/docs/upgrade-guide)

---

## ✅ CHECKLIST

- [ ] Xóa `tailwind.config.js` (không cần nữa)
- [ ] Cài `@tailwindcss/postcss` v4
- [ ] Config `postcss.config.mjs`
- [ ] Import `@import "tailwindcss"` trong `globals.css`
- [ ] Định nghĩa `@theme` trong `base.css`
- [ ] Sử dụng CSS variables với đúng naming convention
- [ ] Test responsive breakpoints
- [ ] Test custom colors và font sizes

---

**Happy coding with Tailwind v4! 🎉**
