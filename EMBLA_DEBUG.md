# 🐛 EMBLA CAROUSEL - DEBUG GUIDE

## ❌ VẤN ĐỀ: "CSS bung hết"

Carousel hiển thị không đúng style, các element bị lệch, không có animation.

---

## 🔍 NGUYÊN NHÂN

### **1. Tailwind chưa compile CSS**
- File `embla-carousel.css` chưa được process
- `@layer components` chưa được nhận diện
- Browser cache CSS cũ

### **2. Import path sai**
- File CSS không được import đúng thứ tự
- Missing dependencies

### **3. Next.js cache**
- `.next` folder còn cache cũ
- Hot reload không nhận file mới

---

## ✅ GIẢI PHÁP

### **BƯỚC 1: Clear cache và rebuild**

```bash
# 1. Stop dev server (Ctrl + C)

# 2. Xóa .next folder
rm -rf .next

# 3. Xóa cache (nếu có)
rm -rf node_modules/.cache

# 4. Chạy lại dev server
pnpm dev
```

### **BƯỚC 2: Hard refresh browser**

```
Chrome/Edge: Ctrl + Shift + R (Windows) hoặc Cmd + Shift + R (Mac)
Firefox: Ctrl + F5 (Windows) hoặc Cmd + Shift + R (Mac)
Safari: Cmd + Option + R
```

### **BƯỚC 3: Kiểm tra import**

Mở `src/styles/globals.css` và đảm bảo:

```css
@import "tailwindcss";

/* Import custom styles */
@import "./base.css";
@import "./components.css";
@import "./embla-carousel.css";  ← Phải có dòng này
```

### **BƯỚC 4: Kiểm tra file tồn tại**

```bash
# Kiểm tra file CSS
ls -la src/styles/embla-carousel.css

# Nếu không có → Tạo lại file
```

### **BƯỚC 5: Kiểm tra dependencies**

```bash
# Kiểm tra embla-carousel đã cài chưa
pnpm list embla-carousel-react
pnpm list embla-carousel-autoplay

# Nếu chưa có → Cài lại
pnpm install embla-carousel-react embla-carousel-autoplay
```

---

## 🧪 KIỂM TRA

### **1. Kiểm tra trong browser DevTools**

Mở DevTools (F12) → Elements tab → Chọn element `.embla`

**Nếu CSS đúng, bạn sẽ thấy:**
```css
.embla {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    max-width: 100vw;
    overflow: hidden;
}
```

**Nếu CSS sai, bạn sẽ thấy:**
```css
.embla {
    /* Không có styles hoặc chỉ có inline styles */
}
```

### **2. Kiểm tra Network tab**

DevTools → Network tab → Filter: CSS

**Tìm file:**
- `globals.css` ← Phải có
- Kiểm tra xem có load `embla-carousel.css` không

### **3. Kiểm tra Console**

DevTools → Console tab

**Tìm lỗi:**
- `Module not found: Can't resolve '@/components/common/EmblaCarousel'`
- `Failed to compile`
- CSS parsing errors

---

## 🔧 TROUBLESHOOTING

### **Vấn đề 1: CSS không load**

**Triệu chứng:**
- Carousel hiển thị nhưng không có style
- Elements xếp chồng lên nhau
- Buttons và dots không đúng vị trí

**Giải pháp:**
```bash
# 1. Xóa .next
rm -rf .next

# 2. Restart dev server
pnpm dev

# 3. Hard refresh browser (Cmd + Shift + R)
```

### **Vấn đề 2: @apply không hoạt động**

**Triệu chứng:**
- Warning: `Unknown at rule @apply`
- CSS classes không được generate

**Giải pháp:**

Tailwind v4 đã support `@apply` trong `@layer components`. Nếu vẫn lỗi:

1. Kiểm tra `postcss.config.mjs`:
```javascript
const config = {
    plugins: {
        "@tailwindcss/postcss": {},
    },
};
export default config;
```

2. Kiểm tra `package.json`:
```json
{
    "dependencies": {
        "@tailwindcss/postcss": "^4.1.16",
        "tailwindcss": "^4.1.16"
    }
}
```

### **Vấn đề 3: Module not found**

**Triệu chứng:**
```
Module not found: Can't resolve '@/components/common/EmblaCarousel'
```

**Giải pháp:**

1. Kiểm tra file tồn tại:
```bash
ls -la src/components/common/EmblaCarousel/
```

2. Kiểm tra `index.js`:
```bash
cat src/components/common/EmblaCarousel/index.js
```

3. Nếu thiếu file, tạo lại:
```javascript
// src/components/common/EmblaCarousel/index.js
export { default } from "./EmblaCarousel";
export { DotButton, useDotButton } from "./EmblaCarouselDotButton";
export { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
```

### **Vấn đề 4: Images không hiển thị**

**Triệu chứng:**
- Carousel hiển thị nhưng không có ảnh
- Console error: `Failed to load resource`

**Giải pháp:**

1. Kiểm tra ảnh tồn tại:
```bash
ls -la public/imgs/banner-slider/
```

2. Kiểm tra path trong `mockHomePage.js`:
```javascript
image: '/imgs/banner-slider/banner1.jpg'  // ✅ Đúng
image: 'imgs/banner-slider/banner1.jpg'   // ❌ Thiếu /
image: '/public/imgs/...'                 // ❌ Không cần /public
```

### **Vấn đề 5: Autoplay không hoạt động**

**Triệu chứng:**
- Carousel hiển thị nhưng không tự động chuyển slide

**Giải pháp:**

1. Kiểm tra import:
```javascript
import Autoplay from "embla-carousel-autoplay";
```

2. Kiểm tra plugin được truyền đúng:
```javascript
const autoplayPlugin = Autoplay({ delay: 2500 });

<EmblaCarousel
    options={{
        loop: true,
        plugins: [autoplayPlugin],  // ← Phải có
    }}
/>
```

3. Kiểm tra có >= 2 slides:
```javascript
// Autoplay chỉ hoạt động khi có >= 2 slides
heroBanners.length >= 2
```

---

## 📋 CHECKLIST DEBUG

Khi gặp lỗi CSS, check theo thứ tự:

- [ ] **Stop dev server** (Ctrl + C)
- [ ] **Xóa .next folder** (`rm -rf .next`)
- [ ] **Restart dev server** (`pnpm dev`)
- [ ] **Hard refresh browser** (Cmd + Shift + R)
- [ ] **Kiểm tra Console** (F12 → Console)
- [ ] **Kiểm tra Network** (F12 → Network → CSS files)
- [ ] **Kiểm tra Elements** (F12 → Elements → .embla styles)
- [ ] **Kiểm tra file CSS tồn tại** (`ls src/styles/embla-carousel.css`)
- [ ] **Kiểm tra import trong globals.css**
- [ ] **Kiểm tra dependencies** (`pnpm list embla-carousel-react`)

---

## 🎯 QUICK FIX

**Nếu vẫn không được, làm theo:**

```bash
# 1. Backup code hiện tại
git stash

# 2. Pull code mới nhất
git pull origin feature/homepage-herosection

# 3. Xóa dependencies
rm -rf node_modules
rm -rf .next

# 4. Cài lại
pnpm install

# 5. Chạy dev
pnpm dev

# 6. Restore code của bạn (nếu cần)
git stash pop
```

---

## 💡 TIPS

### **Tip 1: Sử dụng incognito mode**

Mở browser ở chế độ ẩn danh để tránh cache:
```
Chrome: Cmd + Shift + N (Mac) hoặc Ctrl + Shift + N (Windows)
```

### **Tip 2: Disable CSS cache trong DevTools**

DevTools → Network tab → Disable cache (checkbox)

### **Tip 3: Watch mode**

Nếu CSS không hot reload, restart dev server:
```bash
# Stop (Ctrl + C)
# Start lại
pnpm dev
```

### **Tip 4: Kiểm tra build production**

Nếu dev OK nhưng build lỗi:
```bash
pnpm build
```

Xem lỗi trong output để debug.

---

## 📞 HỖ TRỢ

Nếu vẫn không fix được, cung cấp thông tin sau:

1. **Screenshot lỗi** trong Console (F12)
2. **Screenshot carousel** hiển thị sai
3. **Output của:**
   ```bash
   pnpm list embla-carousel-react
   ls -la src/styles/
   cat src/styles/globals.css
   ```

---

**Good luck! 🍀**
