# 🎠 EMBLA CAROUSEL COMPONENT - VICOPHAR

## 📋 TỔNG QUAN

Component carousel tái sử dụng được xây dựng trên **Embla Carousel** - một thư viện carousel nhẹ, mạnh mẽ và linh hoạt. Component này được tối ưu cho dự án Vicophar với đầy đủ tính năng và dễ dàng tùy chỉnh.

---

## ✨ FEATURES

- ✅ **Loop infinite** - Lặp vô hạn các slides
- ✅ **Autoplay** - Tự động chuyển slide (có thể tùy chỉnh)
- ✅ **Prev/Next buttons** - Nút điều hướng trước/sau
- ✅ **Pagination dots** - Chấm phân trang
- ✅ **Keyboard navigation** - Điều khiển bằng bàn phím
- ✅ **Touch/Swipe support** - Vuốt trên mobile/tablet
- ✅ **Responsive** - Tùy chỉnh width/height linh hoạt
- ✅ **Lazy load images** - Tối ưu performance
- ✅ **SEO optimized** - Alt text, aria labels
- ✅ **Accessibility** - WCAG 2.1 compliant

---

## 📁 CẤU TRÚC FILES

```
EmblaCarousel/
├── EmblaCarousel.jsx              # Component chính
├── EmblaCarouselDotButton.jsx     # Pagination dots
├── EmblaCarouselArrowButtons.jsx  # Prev/Next buttons
├── index.js                       # Exports
└── README.md                      # File này
```

**CSS:**
```
src/styles/embla-carousel.css      # Styles cho carousel
```

**Mock Data:**
```
src/data/mockHomePage.js           # Hero banners data
```

---

## 🚀 INSTALLATION

Component đã được cài đặt sẵn trong dự án. Nếu cần cài đặt lại:

```bash
pnpm add embla-carousel-react
```

---

## 📖 USAGE

### **1. Basic Usage - Sử dụng cơ bản**

```javascript
import EmblaCarousel from '@/components/common/EmblaCarousel';
import { heroBanners } from '@/data/mockHomePage';

export default function HomePage() {
    return (
        <EmblaCarousel
            slides={heroBanners}
            options={{ loop: true }}
        />
    );
}
```

### **2. Custom Width & Height**

```javascript
<EmblaCarousel
    slides={heroBanners}
    options={{ loop: true }}
    width="100%"
    height="600px"
/>
```

### **3. Với Autoplay**

```javascript
import Autoplay from 'embla-carousel-autoplay';

<EmblaCarousel
    slides={heroBanners}
    options={{
        loop: true,
        plugins: [Autoplay({ delay: 3000 })]
    }}
/>
```

### **4. Ẩn Controls hoặc Dots**

```javascript
<EmblaCarousel
    slides={heroBanners}
    options={{ loop: true }}
    showControls={false}  // Ẩn prev/next buttons
    showDots={false}      // Ẩn pagination dots
/>
```

### **5. Custom Slides Per View**

```javascript
<EmblaCarousel
    slides={products}
    options={{
        loop: true,
        slidesToScroll: 1,
        align: 'start',
        containScroll: 'trimSnaps'
    }}
    height="400px"
/>
```

---

## 🎨 PROPS

### **EmblaCarousel Component**

| Prop | Type | Default | Mô tả |
|------|------|---------|-------|
| `slides` | `Array` | `[]` | **Bắt buộc.** Mảng slides data |
| `options` | `Object` | `{}` | Embla carousel options |
| `width` | `String` | `"100%"` | Chiều rộng carousel |
| `height` | `String` | `"600px"` | Chiều cao carousel |
| `showControls` | `Boolean` | `true` | Hiện/ẩn prev/next buttons |
| `showDots` | `Boolean` | `true` | Hiện/ẩn pagination dots |
| `className` | `String` | `""` | CSS classes tùy chỉnh |

### **Slides Data Structure**

Mỗi slide object cần có cấu trúc:

```javascript
{
    id: 'banner-1',                    // ID duy nhất (bắt buộc)
    image: '/imgs/banner-slider/1.jpg', // Đường dẫn ảnh (bắt buộc)
    alt: 'Mô tả ảnh',                  // Alt text cho SEO (bắt buộc)
    title: 'Tiêu đề',                  // Tiêu đề overlay (optional)
    description: 'Mô tả ngắn',         // Mô tả overlay (optional)
    link: '/san-pham'                  // Link khi click (optional)
}
```

### **Embla Options**

Các options phổ biến:

| Option | Type | Default | Mô tả |
|--------|------|---------|-------|
| `loop` | `Boolean` | `false` | Lặp vô hạn slides |
| `align` | `String` | `'center'` | Căn chỉnh: `'start'`, `'center'`, `'end'` |
| `slidesToScroll` | `Number` | `1` | Số slides scroll mỗi lần |
| `containScroll` | `String` | `''` | Chế độ contain: `'trimSnaps'`, `'keepSnaps'` |
| `dragFree` | `Boolean` | `false` | Cho phép drag tự do |
| `draggable` | `Boolean` | `true` | Cho phép drag/swipe |
| `speed` | `Number` | `10` | Tốc độ animation (1-100) |

**Xem thêm:** [Embla Carousel Options](https://www.embla-carousel.com/api/options/)

---

## 🎯 EXAMPLES

### **Example 1: Hero Section - Trang chủ**

```javascript
// src/app/page.js
import EmblaCarousel from '@/components/common/EmblaCarousel';
import { heroBanners } from '@/data/mockHomePage';

export default function HomePage() {
    return (
        <section className="hero-section">
            <EmblaCarousel
                slides={heroBanners}
                options={{
                    loop: true,
                    duration: 30
                }}
                width="100%"
                height="600px"
            />
        </section>
    );
}
```

### **Example 2: Product Carousel**

```javascript
import EmblaCarousel from '@/components/common/EmblaCarousel';

const productSlides = [
    {
        id: 'product-1',
        image: '/imgs/products/product1.jpg',
        alt: 'Sản phẩm 1',
        title: 'Aquatop Plus',
        description: 'Bổ sung khoáng chất',
        link: '/san-pham/aquatop-plus'
    },
    // ... more products
];

export default function ProductCarousel() {
    return (
        <EmblaCarousel
            slides={productSlides}
            options={{
                loop: true,
                align: 'start',
                slidesToScroll: 1
            }}
            height="400px"
        />
    );
}
```

### **Example 3: Testimonials Carousel**

```javascript
const testimonialSlides = [
    {
        id: 'testimonial-1',
        image: '/imgs/testimonials/user1.jpg',
        alt: 'Khách hàng 1',
        title: 'Nguyễn Thị Lan',
        description: 'Sản phẩm rất tốt, tôi rất hài lòng!'
    },
    // ... more testimonials
];

<EmblaCarousel
    slides={testimonialSlides}
    options={{ loop: true }}
    height="300px"
    showControls={false}
/>
```

---

## 🎨 CUSTOMIZATION

### **1. Custom Styles**

Bạn có thể override styles trong file CSS riêng:

```css
/* src/styles/custom-carousel.css */

/* Custom button styles */
.embla__button {
    @apply w-12 h-12 bg-vico-red;
}

/* Custom dot styles */
.embla__dot::after {
    @apply w-4 h-4 bg-vico-blue;
}

/* Custom slide content */
.embla__slide__title {
    @apply text-5xl font-black;
}
```

### **2. Custom Slide Component**

Tạo component slide riêng:

```javascript
// components/CustomSlide.jsx
export default function CustomSlide({ slide }) {
    return (
        <div className="custom-slide">
            <Image src={slide.image} alt={slide.alt} fill />
            <div className="custom-overlay">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button>Xem ngay</button>
            </div>
        </div>
    );
}
```

Sau đó sửa trong `EmblaCarousel.jsx`:

```javascript
// Thay thế phần render slide
{slides.map((slide, index) => (
    <div className="embla__slide" key={slide.id}>
        <CustomSlide slide={slide} />
    </div>
))}
```

### **3. Thêm Plugins**

Cài đặt plugin:

```bash
pnpm add embla-carousel-autoplay
pnpm add embla-carousel-fade
```

Sử dụng:

```javascript
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

<EmblaCarousel
    slides={heroBanners}
    options={{
        loop: true,
        plugins: [
            Autoplay({ delay: 3000, stopOnInteraction: false }),
            Fade()
        ]
    }}
/>
```

---

## 📱 RESPONSIVE

### **Responsive Breakpoints**

```javascript
// Sử dụng Tailwind breakpoints
<div className="hero-section">
    <EmblaCarousel
        slides={heroBanners}
        options={{ loop: true }}
        width="100%"
        height="600px"  // Desktop
        className="h-[400px] tablet:h-[500px] desktop:h-[600px]"
    />
</div>
```

### **Responsive Slides**

```javascript
const responsiveOptions = {
    loop: true,
    breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1040px)': { slidesToScroll: 3 }
    }
};

<EmblaCarousel
    slides={products}
    options={responsiveOptions}
/>
```

---

## ⚡ PERFORMANCE

### **1. Image Optimization**

Component đã sử dụng Next.js Image với:
- `priority={true}` cho slide đầu tiên
- `loading="lazy"` cho các slide còn lại
- `sizes="100vw"` cho responsive

### **2. Lazy Loading**

Embla tự động lazy load slides không hiển thị.

### **3. Hardware Acceleration**

CSS đã sử dụng `transform: translate3d(0, 0, 0)` để kích hoạt GPU acceleration.

---

## ♿ ACCESSIBILITY

Component đã tuân thủ WCAG 2.1:

- ✅ Keyboard navigation (Arrow keys, Tab)
- ✅ ARIA labels (`aria-label`, `aria-current`)
- ✅ Focus management
- ✅ Screen reader support
- ✅ Alt text cho images

### **Keyboard Shortcuts:**

| Key | Action |
|-----|--------|
| `←` | Previous slide |
| `→` | Next slide |
| `Tab` | Focus controls |
| `Enter` | Activate button |

---

## 🐛 TROUBLESHOOTING

### **Vấn đề: Carousel không hiển thị**

**Nguyên nhân:** Chưa import CSS hoặc slides rỗng

**Giải pháp:**
```javascript
// 1. Kiểm tra import CSS trong globals.css
@import "./embla-carousel.css";

// 2. Kiểm tra slides có data
console.log(slides); // Phải có ít nhất 1 slide
```

### **Vấn đề: Images không load**

**Nguyên nhân:** Đường dẫn ảnh sai

**Giải pháp:**
```javascript
// Đảm bảo ảnh nằm trong /public
image: '/imgs/banner-slider/banner1.jpg'  // ✅ ĐÚNG
image: 'imgs/banner-slider/banner1.jpg'   // ❌ SAI (thiếu /)
```

### **Vấn đề: Loop không hoạt động**

**Nguyên nhân:** Chưa set option `loop: true`

**Giải pháp:**
```javascript
<EmblaCarousel
    slides={heroBanners}
    options={{ loop: true }}  // Phải có option này
/>
```

### **Vấn đề: Autoplay không hoạt động**

**Nguyên nhân:** Chưa cài plugin hoặc chưa import

**Giải pháp:**
```bash
# 1. Cài plugin
pnpm add embla-carousel-autoplay

# 2. Import và sử dụng
import Autoplay from 'embla-carousel-autoplay';

<EmblaCarousel
    options={{
        loop: true,
        plugins: [Autoplay({ delay: 3000 })]
    }}
/>
```

---

## 📚 TÀI LIỆU THAM KHẢO

- **Embla Carousel Docs:** https://www.embla-carousel.com/
- **Embla API:** https://www.embla-carousel.com/api/
- **Embla Plugins:** https://www.embla-carousel.com/plugins/
- **Next.js Image:** https://nextjs.org/docs/app/api-reference/components/image

---

## 🔄 CHANGELOG

### **Version 1.0.0** (2024-11-07)
- ✅ Initial release
- ✅ Loop, autoplay support
- ✅ Prev/Next buttons
- ✅ Pagination dots
- ✅ Responsive width/height
- ✅ SEO & Accessibility optimized

---

## 📝 TODO

- [ ] Thêm video support
- [ ] Thêm thumbnail navigation
- [ ] Thêm fullscreen mode
- [ ] Thêm zoom on hover
- [ ] Thêm progress bar

---

## 💡 TIPS & TRICKS

### **Tip 1: Tối ưu số lượng slides**

Nếu có quá nhiều slides (>20), nên sử dụng pagination thay vì load hết:

```javascript
const visibleSlides = heroBanners.slice(0, 10);

<EmblaCarousel slides={visibleSlides} />
```

### **Tip 2: Preload ảnh quan trọng**

```javascript
// Preload ảnh slide đầu tiên
<link rel="preload" as="image" href="/imgs/banner-slider/banner1.jpg" />
```

### **Tip 3: Sử dụng WebP format**

Convert ảnh sang WebP để giảm dung lượng:

```bash
# Sử dụng tool convert
cwebp banner1.jpg -o banner1.webp
```

### **Tip 4: Lazy load slides xa**

```javascript
options={{
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7  // Load khi 70% slide vào viewport
}}
```

---

## 🤝 CONTRIBUTING

Nếu bạn muốn cải thiện component:

1. Tạo branch mới: `git checkout -b feature/carousel-improvement`
2. Commit changes: `git commit -m "[FEAT] Cải thiện carousel"`
3. Push: `git push origin feature/carousel-improvement`
4. Tạo Pull Request

---

## 📞 HỖ TRỢ

Nếu gặp vấn đề, liên hệ:
- **Team Lead:** [Tên người phụ trách]
- **Email:** support@vicophar.com
- **Slack:** #frontend-support

---

**Happy Coding! 🚀**
