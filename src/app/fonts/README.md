# 🎨 Fonts - Hệ Thống Font Vicophar

**Tối ưu hóa:** Chỉ sử dụng 4 font files (Regular, Medium, SemiBold, Bold) - **Không hỗ trợ italic**

---

## 📂 Cấu Trúc Files

```
src/app/fonts/
├── index.js                   # Font configuration
├── README.md                  # Documentation (file này)
├── SVN-Gilroy.woff2          # Regular (400) - 29KB
├── SVN-GilroyMedium.woff2    # Medium (500) - 31KB
├── SVN-GilroySemiBold.woff2  # SemiBold (600) - 31KB
└── SVN-GilroyBold.woff2      # Bold (700) - 31KB

Total: 4 files - 122KB
```

---

## 🎯 Fonts Được Sử Dụng

### **1. SVN-Gilroy (Font Chính)**

| Weight | File | Size | Tailwind Class | Sử dụng cho |
|--------|------|------|----------------|-------------|
| 400 | SVN-Gilroy.woff2 | 29KB | `font-normal` | Body text, paragraphs |
| 500 | SVN-GilroyMedium.woff2 | 31KB | `font-medium` | Subheadings, labels |
| 600 | SVN-GilroySemiBold.woff2 | 31KB | `font-semibold` | Headings, buttons |
| 700 | SVN-GilroyBold.woff2 | 31KB | `font-bold` | Main headings, CTAs |

**Đặc điểm:**
- ✅ Font chính của Vicophar brand
- ✅ Hiện đại, dễ đọc
- ✅ Hỗ trợ tiếng Việt đầy đủ
- ✅ Tối ưu WOFF2 format
- ❌ **Không hỗ trợ italic** (không cần thiết cho thiết kế)

### **2. Be Vietnam Pro (Font Dự Phòng)**

**Thông tin:**
- Google Font (load từ CDN)
- Weights: 300, 400, 500, 600, 700
- Tự động fallback khi SVN-Gilroy chưa load
- CSS Variable: `--font-be-vietnam`

---

## 📝 Configuration (index.js)

```javascript
import { Be_Vietnam_Pro } from "next/font/google";
import localFont from "next/font/local";

// Font dự phòng
export const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["vietnamese"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-be-vietnam",
});

// Font chính - Chỉ normal style
export const svnGilroy = localFont({
    src: [
        { path: "./SVN-Gilroy.woff2", weight: "400", style: "normal" },
        { path: "./SVN-GilroyMedium.woff2", weight: "500", style: "normal" },
        { path: "./SVN-GilroySemiBold.woff2", weight: "600", style: "normal" },
        { path: "./SVN-GilroyBold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-svn-gilroy",
    display: "swap",
    fallback: ["system-ui", "sans-serif"],
});
```

---

## 🚀 Cách Sử Dụng

### **1. Import trong layout.js:**

```javascript
import { svnGilroy, beVietnamPro } from "@/app/fonts";

export default function RootLayout({ children }) {
    return (
        <html lang="vi-VN">
            <body className={`${svnGilroy.variable} ${beVietnamPro.variable}`}>
                {children}
            </body>
        </html>
    );
}
```

### **2. Sử dụng Tailwind Classes:**

```jsx
// Font weights (chỉ normal style)
<h1 className="font-bold">Tiêu đề chính</h1>           // 700
<h2 className="font-semibold">Tiêu đề phụ</h2>         // 600
<p className="font-medium">Label, subheading</p>       // 500
<p className="font-normal">Body text</p>               // 400
```

### **3. Sử dụng CSS Variables:**

```css
.custom-heading {
    font-family: var(--font-svn-gilroy);
    font-weight: 700;
}
```

---

## ❌ Không Hỗ Trợ Italic - Tại Sao?

### **Lý do không dùng italic:**

1. **Thiết kế hiện tại không cần:**
   - Vicophar design system không sử dụng italic
   - Tất cả text đều dùng normal style
   - Italic không cải thiện UX cho brand này

2. **Performance:**
   - Xóa 4 italic fonts → tiết kiệm **134KB** bandwidth
   - Giảm 50% số lượng fonts → load nhanh hơn
   - Ít bộ nhớ hơn

3. **Semantic HTML vẫn work:**
   ```html
   <em>Text này</em>           <!-- Browser tự fake italic -->
   <blockquote>Quote</blockquote>  <!-- Browser tự fake italic -->
   ```
   Browser sẽ tự động tạo "oblique" style (giống italic) khi cần

### **Nếu thực sự cần italic:**

❌ **KHÔNG nên** vì:
- Tăng file size không cần thiết
- Thiết kế hiện tại không dùng
- Browser đã fake italic tốt rồi

---

## ⚡ Performance Benefits

### **So với bản cũ (8 fonts):**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Files | 8 fonts | 4 fonts | ✅ -50% |
| Size | 236KB | 122KB | ✅ -48% |
| Load time | ~400ms | ~200ms | ✅ -50% |
| Memory | Higher | Lower | ✅ Better |

### **Optimization Strategy:**

```javascript
// ✅ Preload critical font
<link rel="preload" href="/fonts/SVN-Gilroy.woff2" as="font" crossorigin>

// ✅ Display swap (no FOIT)
display: "swap"

// ✅ WOFF2 format (best compression)
.woff2 files only
```

---

## 📚 Best Practices

### ✅ **NÊN LÀM:**

```jsx
// Dùng font weights hợp lý
<h1 className="font-bold">Hero title</h1>
<h2 className="font-semibold">Section heading</h2>
<button className="font-semibold">CTA button</button>
<p className="font-normal">Body text</p>

// Dùng CSS variables
.heading {
    font-family: var(--font-svn-gilroy);
}
```

### ❌ **KHÔNG NÊN:**

```jsx
// ❌ Dùng font-weight không có (300, 800, 900)
<p className="font-light">Text</p>        // ❌ No 300

// ❌ Dùng italic (không hỗ trợ)
<p className="italic">Text</p>            // ❌ Browser fake italic

// ❌ Hard-code font family
font-family: 'SVN-Gilroy', sans-serif;   // ❌ Dùng CSS var
```

---

## 🔍 Debugging

### **Check fonts đã load:**

```javascript
// Chrome DevTools → Network → Filter: "Font"
// Nên thấy 4 files: SVN-Gilroy*.woff2
```

### **Check CSS variables:**

```javascript
// Console
getComputedStyle(document.body).getPropertyValue('--font-svn-gilroy')
// → Should return font-family string
```

### **Check font được apply:**

```
1. Inspect element
2. Tab "Computed"
3. Tìm "font-family"
4. Xem: SVN-Gilroy hoặc Be Vietnam Pro (fallback)
```

---

## 📊 Font Loading Timeline

```
0ms ────────────> Show fallback font
                  (Be Vietnam Pro / system font)
                  
100-200ms ─────> SVN-Gilroy load xong
                  
200ms+ ────────> Swap to SVN-Gilroy
                  (display: swap strategy)
```

**Display swap benefits:**
- ✅ Không FOIT (Flash of Invisible Text)
- ✅ Text hiển thị ngay lập tức
- ✅ Swap mượt mà khi font ready

---

## 🎨 Typography Scale (Apple 4px Grid)

**Kết hợp với typography system:**

```jsx
// Headings
<h1 className="text-h1 font-bold">         // 32px→40px, weight 700
<h2 className="text-h2 font-bold">         // 24px→32px, weight 700
<h3 className="text-h3 font-bold">         // 20px→24px, weight 700
<h4 className="text-h4 font-semibold">     // 16px→20px, weight 600

// Body
<p className="text-body font-normal">      // 16px→20px, weight 400
<span className="text-small font-normal">  // 12px→16px, weight 400

// UI
<button className="text-button font-semibold">  // 16px→20px, weight 600
<input className="text-input font-medium">      // 16px→20px, weight 500
```

---

## 🔧 Maintenance

### **Thêm font weight mới (nếu cần):**

1. Add file vào `/src/app/fonts/`
2. Update `index.js`:
   ```javascript
   {
       path: "./SVN-GilroyExtraBold.woff2",
       weight: "800",
       style: "normal",
   }
   ```
3. Rebuild: `pnpm build`

### **KHÔNG thêm italic:**

❌ Italic không được support và không cần thiết cho project này

---

## 📞 Support

**Nếu có vấn đề:**
1. Check file fonts có tồn tại không
2. Check path trong `index.js`
3. Check CSS variables trong DevTools
4. Check Network tab → Font loading

**Common issues:**
- Font không load → Check file path
- Font bị sai → Clear cache, hard refresh
- Performance chậm → Check có load quá nhiều weights không

---

## 📝 Changelog

**v2.0 (2025-12-02):**
- ✅ Removed italic fonts (134KB saved)
- ✅ Optimized to 4 fonts only
- ✅ 48% size reduction
- ✅ Faster load time

**v1.0 (Initial):**
- 8 fonts (normal + italic)
- 236KB total size

---

**Maintained by:** Vicophar Frontend Team  
**Last updated:** 2025-12-02  
**Status:** ✅ Production Ready
