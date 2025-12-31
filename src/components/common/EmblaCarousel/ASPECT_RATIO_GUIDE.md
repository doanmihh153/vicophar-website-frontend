# 📐 HƯỚNG DẪN KÍCH THƯỚC & ASPECT RATIO - EMBLA CAROUSEL

## 📋 TỔNG QUAN

Hướng dẫn chi tiết cách tính toán và sử dụng aspect ratio (tỉ lệ khung hình) cho Embla Carousel để đảm bảo ảnh hiển thị đúng tỉ lệ trên mọi màn hình.

---

## 🎯 TẠI SAO CẦN ASPECT RATIO?

### **Vấn đề:**
- ❌ Fix cứng height (VD: `height="730px"`) → Ảnh bị méo trên các màn hình khác nhau
- ❌ Không có aspect ratio → Ảnh bị xén hoặc có viền đen (letterbox)
- ❌ Zoom in/out → Tỉ lệ ảnh thay đổi

### **Giải pháp:**
- ✅ Sử dụng `aspect-ratio` CSS → Chiều cao tự động tính theo width
- ✅ Ảnh luôn giữ tỉ lệ gốc trên mọi màn hình
- ✅ Zoom in/out → Tỉ lệ vẫn đúng

---

## 📏 CÁCH TÍNH ASPECT RATIO

### **Bước 1: Lấy kích thước ảnh gốc**

Mở ảnh banner và xem kích thước:
```
Ví dụ: banner1.jpg
- Width: 1370px
- Height: 420px
```

### **Bước 2: Tính tỉ lệ**

```javascript
Aspect Ratio = Width / Height
             = 1370 / 420
             = 3.26190476...
             ≈ 3.26:1
```

**Hoặc giữ nguyên số nguyên:**
```
Aspect Ratio = 1370:420
```

### **Bước 3: Áp dụng vào code**

```jsx
<div style={{ aspectRatio: '1370 / 420' }}>
  <EmblaCarousel width="100%" height="100%" />
</div>
```

---

## 🔢 BẢNG TÍNH TỰ ĐỘNG

### **Công thức:**

```
Height = Width × (Original Height / Original Width)
```

### **Ví dụ với ảnh 1370x420:**

| Screen Width | Tính toán | Auto Height | Tỉ lệ |
|--------------|-----------|-------------|-------|
| 1920px | 1920 × (420/1370) | **589px** | 3.26:1 ✅ |
| 1680px | 1680 × (420/1370) | **515px** | 3.26:1 ✅ |
| 1440px | 1440 × (420/1370) | **442px** | 3.26:1 ✅ |
| 1280px | 1280 × (420/1370) | **393px** | 3.26:1 ✅ |
| 1024px | 1024 × (420/1370) | **314px** | 3.26:1 ✅ |
| 768px | 768 × (420/1370) | **236px** | 3.26:1 ✅ |
| 375px | 375 × (420/1370) | **115px** | 3.26:1 ✅ |

---

## 💻 CÁCH SỬ DỤNG

### **1. Cách cơ bản - Sử dụng aspect-ratio CSS**

```jsx
// HeroSection.jsx
export default function HeroSection() {
    return (
        <section className="hero-section w-full">
            {/* Wrapper với aspect ratio */}
            <div className="w-full" style={{ aspectRatio: '1370 / 420' }}>
                <EmblaCarousel
                    slides={heroBanners}
                    width="100%"
                    height="100%"
                />
            </div>
        </section>
    );
}
```

### **2. Cách nâng cao - Tính toán động**

```jsx
// Nếu ảnh có kích thước khác nhau
const BANNER_WIDTH = 1370;
const BANNER_HEIGHT = 420;
const aspectRatio = `${BANNER_WIDTH} / ${BANNER_HEIGHT}`;

<div style={{ aspectRatio }}>
  <EmblaCarousel ... />
</div>
```

### **3. Responsive với breakpoints**

```jsx
// Sử dụng Tailwind classes
<div 
  className="w-full"
  style={{ 
    aspectRatio: '1370 / 420',  // Desktop
    // Mobile có thể dùng tỉ lệ khác nếu cần
  }}
>
  <EmblaCarousel ... />
</div>
```

---

## 🎨 CÁC TỈ LỆ PHỔ BIẾN

### **Banner / Hero Section:**

| Tỉ lệ | Width x Height | Mô tả | Ví dụ |
|-------|----------------|-------|-------|
| **16:9** | 1920 x 1080 | Widescreen chuẩn | YouTube, TV |
| **21:9** | 2560 x 1080 | Ultra-wide | Cinema |
| **3.26:1** | 1370 x 420 | Custom banner | Vicophar |
| **4:1** | 1600 x 400 | Wide banner | Website header |
| **3:1** | 1500 x 500 | Medium banner | E-commerce |

### **Product Images:**

| Tỉ lệ | Width x Height | Mô tả |
|-------|----------------|-------|
| **1:1** | 800 x 800 | Vuông | Instagram, Product |
| **4:3** | 800 x 600 | Chuẩn | Camera |
| **3:2** | 900 x 600 | DSLR | Photography |

---

## 🛠️ CÔNG CỤ HỖ TRỢ

### **1. Kiểm tra kích thước ảnh:**

**MacOS:**
```bash
# Sử dụng sips
sips -g pixelWidth -g pixelHeight banner1.jpg

# Output:
# pixelWidth: 1370
# pixelHeight: 420
```

**Windows:**
```powershell
# Right-click → Properties → Details
```

**Online:**
- https://www.imagesize.org/
- https://www.metadata2go.com/

### **2. Tính aspect ratio:**

**JavaScript:**
```javascript
function calculateAspectRatio(width, height) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
}

// Ví dụ:
calculateAspectRatio(1370, 420);
// Output: "137:42" (simplified)
// Hoặc giữ nguyên: "1370:420"
```

**Online Calculator:**
- https://calculateaspectratio.com/
- https://www.aspectratiocalculator.com/

---

## 📝 BEST PRACTICES

### **✅ NÊN:**

1. **Sử dụng aspect-ratio thay vì fix height:**
   ```jsx
   // ✅ ĐÚNG
   <div style={{ aspectRatio: '1370 / 420' }}>
     <EmblaCarousel width="100%" height="100%" />
   </div>
   
   // ❌ SAI
   <EmblaCarousel width="100%" height="730px" />
   ```

2. **Giữ nguyên tỉ lệ ảnh gốc:**
   ```jsx
   // Nếu ảnh là 1370x420, dùng đúng tỉ lệ đó
   aspectRatio: '1370 / 420'
   ```

3. **Sử dụng object-fit: cover:**
   ```css
   .embla__slide__img {
     object-fit: cover;  /* Fill toàn bộ, giữ tỉ lệ */
     object-position: center;
   }
   ```

### **❌ KHÔNG NÊN:**

1. **Fix cứng height:**
   ```jsx
   // ❌ Sẽ bị méo trên các màn hình khác
   <EmblaCarousel height="730px" />
   ```

2. **Dùng tỉ lệ sai:**
   ```jsx
   // ❌ Ảnh 1370x420 nhưng dùng tỉ lệ 16:9
   aspectRatio: '16 / 9'  // Sai!
   ```

3. **Quên set width="100%":**
   ```jsx
   // ❌ Carousel không responsive
   <EmblaCarousel width="1370px" />
   ```

---

## 🔍 TROUBLESHOOTING

### **Vấn đề 1: Ảnh bị méo**

**Nguyên nhân:** Aspect ratio không đúng với ảnh gốc

**Giải pháp:**
```jsx
// 1. Kiểm tra kích thước ảnh gốc
sips -g pixelWidth -g pixelHeight banner1.jpg

// 2. Tính lại aspect ratio
const aspectRatio = `${width} / ${height}`;

// 3. Áp dụng đúng
<div style={{ aspectRatio }}>...</div>
```

### **Vấn đề 2: Ảnh có viền đen (letterbox)**

**Nguyên nhân:** Dùng `object-fit: contain`

**Giải pháp:**
```css
/* Đổi sang cover */
.embla__slide__img {
  object-fit: cover;  /* Thay vì contain */
}
```

### **Vấn đề 3: Ảnh bị xén quá nhiều**

**Nguyên nhân:** Aspect ratio container khác với ảnh gốc

**Giải pháp:**
```jsx
// Đảm bảo aspect ratio đúng với ảnh
// Ảnh 1370x420 → dùng '1370 / 420'
<div style={{ aspectRatio: '1370 / 420' }}>
```

### **Vấn đề 4: Zoom thì ảnh bị scale**

**Nguyên nhân:** Container không có max-width

**Giải pháp:**
```css
.embla {
  max-width: 100vw;  /* Giữ nguyên width */
  overflow: hidden;
}
```

---

## 📊 EXAMPLES

### **Example 1: Hero Banner 1370x420**

```jsx
// src/components/pages/HomePage/HeroSection.jsx
export default function HeroSection() {
    return (
        <section className="hero-section w-full">
            <div className="w-full" style={{ aspectRatio: '1370 / 420' }}>
                <EmblaCarousel
                    slides={heroBanners}
                    width="100%"
                    height="100%"
                />
            </div>
        </section>
    );
}
```

**Kết quả:**
- Desktop 1920px → Height: 589px
- Tablet 768px → Height: 236px
- Mobile 375px → Height: 115px

### **Example 2: Product Carousel 1:1**

```jsx
// Product images vuông
export default function ProductCarousel() {
    return (
        <div className="w-full max-w-4xl" style={{ aspectRatio: '1 / 1' }}>
            <EmblaCarousel
                slides={productImages}
                width="100%"
                height="100%"
            />
        </div>
    );
}
```

### **Example 3: Wide Banner 4:1**

```jsx
// Banner rộng
export default function WideBanner() {
    return (
        <div className="w-full" style={{ aspectRatio: '4 / 1' }}>
            <EmblaCarousel
                slides={wideBanners}
                width="100%"
                height="100%"
            />
        </div>
    );
}
```

---

## 🎓 TÓM TẮT

### **Quy trình 3 bước:**

1. **Kiểm tra kích thước ảnh:**
   ```bash
   sips -g pixelWidth -g pixelHeight banner.jpg
   # → 1370 x 420
   ```

2. **Tính aspect ratio:**
   ```
   1370 / 420 = 3.26:1
   ```

3. **Áp dụng vào code:**
   ```jsx
   <div style={{ aspectRatio: '1370 / 420' }}>
     <EmblaCarousel width="100%" height="100%" />
   </div>
   ```

### **Checklist:**

- [ ] Kiểm tra kích thước ảnh gốc
- [ ] Tính aspect ratio đúng
- [ ] Sử dụng `aspectRatio` CSS
- [ ] Set `width="100%"` và `height="100%"`
- [ ] Dùng `object-fit: cover`
- [ ] Test trên nhiều màn hình
- [ ] Kiểm tra zoom in/out

---

## 📚 TÀI LIỆU THAM KHẢO

- **CSS aspect-ratio:** https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
- **Object-fit:** https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
- **Responsive Images:** https://web.dev/responsive-images/
- **Aspect Ratio Calculator:** https://calculateaspectratio.com/

---

## 💡 TIPS & TRICKS

### **Tip 1: Tối ưu ảnh trước khi upload**

```bash
# Resize ảnh về đúng kích thước cần dùng
# Ví dụ: 1370x420 cho hero banner
convert banner.jpg -resize 1370x420^ -gravity center -extent 1370x420 banner-optimized.jpg
```

### **Tip 2: Sử dụng WebP format**

```bash
# Convert sang WebP để giảm dung lượng
cwebp -q 85 banner.jpg -o banner.webp
```

### **Tip 3: Lazy load ảnh**

```jsx
// Next.js Image tự động lazy load
<Image
  src="/imgs/banner.jpg"
  fill
  priority={false}  // Lazy load
  sizes="100vw"
/>
```

### **Tip 4: Preload ảnh quan trọng**

```jsx
// Preload ảnh hero banner
<link rel="preload" as="image" href="/imgs/banner1.jpg" />
```

---

**Happy Coding! 🚀**
