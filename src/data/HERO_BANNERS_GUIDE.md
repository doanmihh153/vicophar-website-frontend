# 🎨 HƯỚNG DẪN QUẢN LÝ HERO BANNERS

## 📋 TỔNG QUAN

Hướng dẫn chi tiết cách thêm, sửa, xóa hero banners cho trang chủ. Hero Section sử dụng Embla Carousel và hoàn toàn linh hoạt về số lượng slides.

---

## 🔢 SỐ LƯỢNG SLIDES

### **Linh hoạt hoàn toàn:**

- ✅ **Tối thiểu:** 1 slide
- ✅ **Tối đa:** Không giới hạn
- ✅ **Hiện tại:** 5 slides
- ✅ **Loop:** Tự động bật nếu có >= 2 slides

### **Ví dụ:**

| Số slides | Loop | Autoplay | Dots | Buttons |
|-----------|------|----------|------|---------|
| 1 | ❌ Tắt | ❌ Tắt | ✅ Hiện | ✅ Hiện (disabled) |
| 2 | ✅ Bật | ✅ Bật | ✅ Hiện | ✅ Hiện |
| 3 | ✅ Bật | ✅ Bật | ✅ Hiện | ✅ Hiện |
| 5 | ✅ Bật | ✅ Bật | ✅ Hiện | ✅ Hiện |
| 10+ | ✅ Bật | ✅ Bật | ✅ Hiện | ✅ Hiện |

---

## 📂 VỊ TRÍ FILE

```
src/
├── data/
│   └── mockHomePage.js          ← Chỉnh ở đây
├── components/
│   └── pages/
│       └── HomePage/
│           └── HeroSection.jsx  ← Component sử dụng data
└── public/
    └── imgs/
        └── banner-slider/       ← Lưu ảnh ở đây
            ├── banner1.jpg
            ├── banner2.jpg
            ├── banner3.jpg
            ├── banner4.jpg
            └── banner5.jpg
```

---

## ➕ THÊM BANNER MỚI

### **Bước 1: Chuẩn bị ảnh**

**Yêu cầu:**
- **Kích thước:** 1370 x 420 pixels (tỉ lệ 3.26:1)
- **Format:** JPG, PNG, hoặc WebP
- **Dung lượng:** < 500KB (nên tối ưu)
- **Tên file:** `banner6.jpg`, `banner7.jpg`, v.v.

**Tối ưu ảnh:**
```bash
# Resize về đúng kích thước
convert banner-new.jpg -resize 1370x420^ -gravity center -extent 1370x420 banner6.jpg

# Compress
jpegoptim --max=85 banner6.jpg

# Hoặc convert sang WebP
cwebp -q 85 banner6.jpg -o banner6.webp
```

### **Bước 2: Upload ảnh**

Copy ảnh vào thư mục:
```bash
cp banner6.jpg public/imgs/banner-slider/
```

### **Bước 3: Thêm vào mockHomePage.js**

Mở file `src/data/mockHomePage.js`:

```javascript
export const heroBanners = [
    // ... các banner cũ ...
    
    // ✅ THÊM BANNER MỚI
    {
        id: 'banner-6',
        image: '/imgs/banner-slider/banner6.jpg',
        alt: 'Vicophar - Mô tả banner 6',
        title: 'Tiêu đề Banner 6',
        description: 'Mô tả ngắn gọn về banner 6',
        link: '/duong-dan-lien-ket'
    },
];
```

### **Bước 4: Test**

```bash
pnpm dev
```

Mở `http://localhost:3000` và kiểm tra:
- ✅ Banner mới hiển thị đúng
- ✅ Autoplay hoạt động
- ✅ Click vào banner → chuyển đến link
- ✅ Dots tăng thêm 1

---

## ✏️ SỬA BANNER

### **Sửa nội dung:**

```javascript
{
    id: 'banner-1',
    image: '/imgs/banner-slider/banner1.jpg',
    alt: 'Mô tả mới',              // ← Sửa alt text
    title: 'Tiêu đề mới',          // ← Sửa title (không hiển thị)
    description: 'Mô tả mới',      // ← Sửa description (không hiển thị)
    link: '/duong-dan-moi'         // ← Sửa link
},
```

**Lưu ý:** Hiện tại `title` và `description` không hiển thị trên carousel (chỉ có ảnh), nhưng vẫn nên điền đầy đủ cho SEO.

### **Thay ảnh:**

1. Upload ảnh mới với cùng tên (VD: `banner1.jpg`)
2. Hoặc đổi tên ảnh và update `image` path:

```javascript
{
    id: 'banner-1',
    image: '/imgs/banner-slider/banner1-new.jpg', // ← Đổi path
    // ...
},
```

---

## ❌ XÓA BANNER

### **Cách 1: Xóa hoàn toàn**

Xóa object banner khỏi array:

```javascript
export const heroBanners = [
    {
        id: 'banner-1',
        // ...
    },
    // ❌ XÓA banner-2
    // {
    //     id: 'banner-2',
    //     // ...
    // },
    {
        id: 'banner-3',
        // ...
    },
];
```

### **Cách 2: Tạm ẩn (comment)**

Comment lại để có thể khôi phục sau:

```javascript
export const heroBanners = [
    {
        id: 'banner-1',
        // ...
    },
    // ⏸️ TẠM ẨN - Có thể uncomment để hiện lại
    // {
    //     id: 'banner-2',
    //     image: '/imgs/banner-slider/banner2.jpg',
    //     alt: '...',
    //     title: '...',
    //     description: '...',
    //     link: '/...'
    // },
    {
        id: 'banner-3',
        // ...
    },
];
```

### **Cách 3: Filter động**

Sử dụng filter để ẩn banner theo điều kiện:

```javascript
// Trong HeroSection.jsx
const activeBanners = heroBanners.filter(banner => {
    // Ví dụ: Chỉ hiện banner có id không phải 'banner-2'
    return banner.id !== 'banner-2';
});

<EmblaCarousel slides={activeBanners} ... />
```

---

## 🔄 SẮP XẾP LẠI THỨ TỰ

Chỉ cần đổi thứ tự trong array:

```javascript
export const heroBanners = [
    // Trước:
    // banner-1, banner-2, banner-3, banner-4, banner-5
    
    // Sau:
    {
        id: 'banner-3',  // ← Đưa banner-3 lên đầu
        // ...
    },
    {
        id: 'banner-1',
        // ...
    },
    {
        id: 'banner-5',
        // ...
    },
    {
        id: 'banner-2',
        // ...
    },
    {
        id: 'banner-4',
        // ...
    },
];
```

---

## 📊 EXAMPLES

### **Example 1: Chỉ 1 banner (Static)**

```javascript
export const heroBanners = [
    {
        id: 'banner-1',
        image: '/imgs/banner-slider/banner1.jpg',
        alt: 'Vicophar - Banner chính',
        title: 'Chăm Sóc Sức Khỏe',
        description: 'Sản phẩm từ thiên nhiên',
        link: '/san-pham'
    },
];
```

**Kết quả:**
- ❌ Không loop
- ❌ Không autoplay
- ✅ Vẫn có dots (1 dot)
- ✅ Vẫn có buttons (nhưng disabled)

### **Example 2: 2 banners (Minimal)**

```javascript
export const heroBanners = [
    {
        id: 'banner-1',
        image: '/imgs/banner-slider/banner1.jpg',
        alt: 'Banner 1',
        title: 'Tiêu đề 1',
        description: 'Mô tả 1',
        link: '/link-1'
    },
    {
        id: 'banner-2',
        image: '/imgs/banner-slider/banner2.jpg',
        alt: 'Banner 2',
        title: 'Tiêu đề 2',
        description: 'Mô tả 2',
        link: '/link-2'
    },
];
```

**Kết quả:**
- ✅ Loop infinite
- ✅ Autoplay 2.5s
- ✅ 2 dots
- ✅ Buttons hoạt động

### **Example 3: 10 banners (Many)**

```javascript
export const heroBanners = [
    {
        id: 'banner-1',
        image: '/imgs/banner-slider/banner1.jpg',
        alt: 'Banner 1',
        title: 'Tiêu đề 1',
        description: 'Mô tả 1',
        link: '/link-1'
    },
    // ... banner-2 đến banner-9 ...
    {
        id: 'banner-10',
        image: '/imgs/banner-slider/banner10.jpg',
        alt: 'Banner 10',
        title: 'Tiêu đề 10',
        description: 'Mô tả 10',
        link: '/link-10'
    },
];
```

**Kết quả:**
- ✅ Loop infinite
- ✅ Autoplay 2.5s
- ✅ 10 dots
- ✅ Buttons hoạt động
- ⚠️ Lưu ý: Nhiều dots có thể gây rối, nên giới hạn 5-7 banners

---

## 🎯 BEST PRACTICES

### **✅ NÊN:**

1. **Giữ số lượng hợp lý:**
   ```
   Tối ưu: 3-5 banners
   Tối đa: 7 banners
   ```

2. **Đặt tên file có quy tắc:**
   ```
   banner1.jpg, banner2.jpg, banner3.jpg
   hoặc
   hero-home-1.jpg, hero-home-2.jpg
   ```

3. **Tối ưu ảnh trước khi upload:**
   ```bash
   # Resize + compress
   convert banner.jpg -resize 1370x420^ -quality 85 banner-optimized.jpg
   ```

4. **Điền đầy đủ thông tin:**
   ```javascript
   {
       id: 'banner-1',        // ✅ Unique ID
       image: '/imgs/...',    // ✅ Path đúng
       alt: 'Mô tả rõ ràng', // ✅ SEO
       title: 'Tiêu đề',     // ✅ Metadata
       description: '...',    // ✅ Metadata
       link: '/link'          // ✅ CTA
   }
   ```

5. **Test trên nhiều màn hình:**
   ```
   - Desktop (1920px)
   - Tablet (768px)
   - Mobile (375px)
   ```

### **❌ KHÔNG NÊN:**

1. **Upload ảnh quá lớn:**
   ```
   ❌ 5MB → Chậm load
   ✅ < 500KB → Nhanh
   ```

2. **Dùng ảnh sai tỉ lệ:**
   ```
   ❌ 1920x1080 (16:9) → Bị xén
   ✅ 1370x420 (3.26:1) → Đúng
   ```

3. **Quá nhiều banners:**
   ```
   ❌ 15 banners → User bối rối
   ✅ 3-5 banners → Vừa đủ
   ```

4. **Thiếu alt text:**
   ```javascript
   ❌ alt: ''
   ✅ alt: 'Vicophar - Sản phẩm chăm sóc sức khỏe'
   ```

---

## 🔧 TROUBLESHOOTING

### **Vấn đề 1: Banner không hiển thị**

**Nguyên nhân:**
- Path ảnh sai
- Ảnh không tồn tại

**Giải pháp:**
```javascript
// Kiểm tra path
image: '/imgs/banner-slider/banner1.jpg'  // ✅ Đúng
image: 'imgs/banner-slider/banner1.jpg'   // ❌ Thiếu /
image: '/public/imgs/...'                 // ❌ Không cần /public

// Kiểm tra file tồn tại
ls public/imgs/banner-slider/
```

### **Vấn đề 2: Ảnh bị méo**

**Nguyên nhân:**
- Ảnh không đúng tỉ lệ 1370:420

**Giải pháp:**
```bash
# Resize về đúng tỉ lệ
convert banner.jpg -resize 1370x420^ -gravity center -extent 1370x420 banner-fixed.jpg
```

### **Vấn đề 3: Autoplay không hoạt động**

**Nguyên nhân:**
- Chỉ có 1 banner

**Giải pháp:**
```javascript
// Thêm ít nhất 1 banner nữa
export const heroBanners = [
    { /* banner-1 */ },
    { /* banner-2 */ },  // ← Thêm banner thứ 2
];
```

### **Vấn đề 4: Loop không hoạt động**

**Nguyên nhân:**
- Chỉ có 1 banner

**Giải pháp:**
```javascript
// Loop tự động bật khi có >= 2 banners
const shouldLoop = heroBanners.length >= 2;
```

---

## 📝 CHECKLIST

Khi thêm/sửa banner, check các mục sau:

- [ ] Ảnh đúng kích thước 1370x420
- [ ] Ảnh đã tối ưu (< 500KB)
- [ ] File ảnh đã upload vào `/public/imgs/banner-slider/`
- [ ] ID unique (không trùng với banner khác)
- [ ] Path ảnh đúng (bắt đầu bằng `/`)
- [ ] Alt text rõ ràng (SEO)
- [ ] Link đúng (nếu có)
- [ ] Test trên dev server
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Test autoplay và loop

---

## 💡 TIPS & TRICKS

### **Tip 1: Tạo banner template**

```javascript
// Template cho banner mới
const newBanner = {
    id: 'banner-X',
    image: '/imgs/banner-slider/bannerX.jpg',
    alt: 'Vicophar - [Mô tả ngắn gọn]',
    title: '[Tiêu đề chính]',
    description: '[Mô tả chi tiết]',
    link: '/[duong-dan]'
};
```

### **Tip 2: Batch resize ảnh**

```bash
# Resize tất cả ảnh trong folder
for img in *.jpg; do
    convert "$img" -resize 1370x420^ -gravity center -extent 1370x420 "banner-${img}"
done
```

### **Tip 3: Lazy load ảnh không ưu tiên**

```javascript
// Trong EmblaCarousel.jsx
<Image
    src={slide.image}
    fill
    priority={index === 0}  // Chỉ priority slide đầu
    loading={index === 0 ? 'eager' : 'lazy'}
/>
```

### **Tip 4: Preload ảnh quan trọng**

```jsx
// Trong HeroSection.jsx
<link rel="preload" as="image" href="/imgs/banner-slider/banner1.jpg" />
```

---

## 📚 TÀI LIỆU LIÊN QUAN

- **Aspect Ratio Guide:** `src/components/common/EmblaCarousel/ASPECT_RATIO_GUIDE.md`
- **Embla Carousel README:** `src/components/common/EmblaCarousel/README.md`
- **Quick Start:** `src/components/common/EmblaCarousel/QUICK_START.md`

---

**Happy Editing! 🎨**
