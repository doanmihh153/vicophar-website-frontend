# 🚀 QUICK START - EMBLA CAROUSEL

## ⚡ Sử dụng nhanh trong 3 bước

### **Bước 1: Import component**

```javascript
import EmblaCarousel from '@/components/common/EmblaCarousel';
import { heroBanners } from '@/data/mockHomePage';
```

### **Bước 2: Sử dụng trong JSX**

```javascript
export default function MyPage() {
    return (
        <EmblaCarousel
            slides={heroBanners}
            options={{ loop: true }}
            width="100%"
            height="600px"
        />
    );
}
```

### **Bước 3: Chạy dev server**

```bash
pnpm dev
```

**Xong! 🎉** Carousel đã hoạt động với loop infinite.

---

## 📝 Cấu trúc Slides Data

```javascript
const mySlides = [
    {
        id: 'slide-1',                      // Bắt buộc
        image: '/imgs/my-image.jpg',        // Bắt buộc
        alt: 'Mô tả ảnh',                   // Bắt buộc
        title: 'Tiêu đề',                   // Optional
        description: 'Mô tả',               // Optional
        link: '/link-url'                   // Optional
    }
];
```

---

## 🎨 Tùy chỉnh phổ biến

### **1. Thay đổi kích thước**

```javascript
<EmblaCarousel
    slides={slides}
    width="100%"
    height="400px"  // Thay đổi chiều cao
/>
```

### **2. Ẩn controls**

```javascript
<EmblaCarousel
    slides={slides}
    showControls={false}  // Ẩn prev/next
    showDots={false}      // Ẩn dots
/>
```

### **3. Thêm autoplay**

```bash
# Cài plugin
pnpm add embla-carousel-autoplay
```

```javascript
import Autoplay from 'embla-carousel-autoplay';

<EmblaCarousel
    slides={slides}
    options={{
        loop: true,
        plugins: [Autoplay({ delay: 3000 })]
    }}
/>
```

### **4. Multiple slides per view**

```javascript
<EmblaCarousel
    slides={products}
    options={{
        loop: true,
        align: 'start',
        slidesToScroll: 1
    }}
/>
```

---

## 🔧 Props chính

| Prop | Type | Default | Mô tả |
|------|------|---------|-------|
| `slides` | Array | `[]` | Mảng slides (bắt buộc) |
| `options` | Object | `{}` | Embla options |
| `width` | String | `"100%"` | Chiều rộng |
| `height` | String | `"600px"` | Chiều cao |
| `showControls` | Boolean | `true` | Hiện buttons |
| `showDots` | Boolean | `true` | Hiện dots |

---

## 📚 Xem thêm

- **Full Documentation:** [README.md](./README.md)
- **Embla Docs:** https://www.embla-carousel.com/

---

**Happy Coding! 🚀**
