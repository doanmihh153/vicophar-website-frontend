# 📁 THƯ MỤC ASSETS - TÀI NGUYÊN TĨNH

## 📋 TỔNG QUAN

Thư mục `assets/` chứa tất cả tài nguyên tĩnh của ứng dụng Vicophar Vietnam Frontend, bao gồm icons, images, fonts và các file media khác.

---

## 🗂️ CẤU TRÚC HIỆN TẠI

```
assets/
├── icons/              # SVG icons dưới dạng React components
│   ├── index.js       # Export tập trung tất cả icons
│   ├── LogoVicophar.js
│   ├── CartIcon.js
│   ├── SearchIcon.js
│   ├── UserIcon.js
│   ├── HamburgerIcon.js
│   ├── ArrowDownIcon.js
│   ├── ArrowRight.js
│   ├── CloseIcon.js
│   ├── FacebookIcons.js
│   ├── LazadaIcons.js
│   ├── TiktokIcon.js
│   └── ShopeeIcon.js
├── images/            # (Sẽ thêm sau) Hình ảnh sản phẩm, banners
└── fonts/             # (Nếu cần) Custom fonts bổ sung
```

---

## 📂 MÔ TẢ CHI TIẾT

### 1️⃣ **icons/** - SVG Icons Components

**Xem chi tiết:** [icons/README.md](./icons/README.md)

**Tổng quan:**
- Tất cả icons được viết dưới dạng **React components**
- Format: **SVG** (scalable, nhẹ, dễ customize)
- Export tập trung qua `index.js`

**Danh sách icons hiện có:**

| Icon | File | Mục đích sử dụng |
|------|------|------------------|
| 🏢 Logo | `LogoVicophar.js` | Logo công ty Vicophar |
| 🛒 Giỏ hàng | `CartIcon.js` | Icon giỏ hàng |
| 🔍 Tìm kiếm | `SearchIcon.js` | Icon tìm kiếm |
| 👤 Người dùng | `UserIcon.js` | Icon tài khoản |
| ☰ Menu | `HamburgerIcon.js` | Icon menu mobile |
| ⬇️ Mũi tên xuống | `ArrowDownIcon.js` | Dropdown, scroll |
| ➡️ Mũi tên phải | `ArrowRight.js` | Navigation, links |
| ✕ Đóng | `CloseIcon.js` | Đóng modal, popup |
| 📘 Facebook | `FacebookIcons.js` | Link Facebook |
| 🛍️ Lazada | `LazadaIcons.js` | Link Lazada |
| 🎵 TikTok | `TiktokIcon.js` | Link TikTok |
| 🛒 Shopee | `ShopeeIcon.js` | Link Shopee |

**Cách sử dụng:**
```javascript
// Import từ index.js
import { CartIcon, SearchIcon, UserIcon } from '@/assets/icons';

// Sử dụng trong component
<CartIcon className="w-6 h-6 text-white" />
<SearchIcon width={24} height={24} />
```

---

### 2️⃣ **images/** - Hình ảnh (Chưa có)

**Kế hoạch:**
```
images/
├── products/          # Hình ảnh sản phẩm
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── ...
├── banners/          # Banner quảng cáo
│   ├── home-banner.jpg
│   └── promo-banner.jpg
├── logos/            # Logos khác nhau
│   ├── logo-white.png
│   └── logo-color.png
└── ui/               # UI elements
    ├── placeholder.svg
    └── no-image.svg
```

**Quy tắc khi thêm images:**
1. ✅ Optimize trước khi thêm (TinyPNG, ImageOptim)
2. ✅ Sử dụng format phù hợp:
   - **WebP** cho photos (nhỏ hơn 25-35%)
   - **PNG** cho images có transparency
   - **SVG** cho icons và illustrations
   - **JPG** cho photos không cần transparency
3. ✅ Naming convention: `lowercase-with-dashes.jpg`
4. ✅ Responsive images: tạo nhiều sizes

**Sử dụng Next.js Image:**
```javascript
import Image from 'next/image';

<Image
    src="/images/products/product-1.jpg"
    alt="Sản phẩm Vicophar"
    width={500}
    height={300}
    loading="lazy"
    placeholder="blur"
    blurDataURL="/images/ui/placeholder.svg"
/>
```

---

### 3️⃣ **fonts/** - Custom Fonts (Nếu cần)

**Lưu ý:** 
- Fonts chính đã được quản lý trong `app/fonts/`
- Folder này chỉ dùng nếu cần thêm fonts bổ sung

---

## 🎨 ICON SYSTEM

### **Đặc điểm của icons:**

1. **React Components:**
   - Dễ dàng customize props
   - Type-safe với TypeScript
   - Tree-shaking tự động

2. **Props chuẩn:**
   ```javascript
   {
       width: number,        // Chiều rộng (default: 24)
       height: number,       // Chiều cao (default: 24)
       className: string,    // Tailwind classes
       fill: string,         // Màu fill
       stroke: string,       // Màu stroke
       ...props             // Các props khác
   }
   ```

3. **Responsive & Accessible:**
   ```javascript
   <SearchIcon 
       width={24} 
       height={24}
       className="text-green-primary hover:text-green-hover"
       aria-label="Tìm kiếm"
   />
   ```

---

## 📝 HƯỚNG DẪN THÊM ICON MỚI

### **Bước 1: Tạo file icon component**

```javascript
// assets/icons/NewIcon.js
const NewIcon = ({
    width = 24,
    height = 24,
    className = "",
    fill = "currentColor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M..." />
    </svg>
);

export default NewIcon;
```

### **Bước 2: Export trong index.js**

```javascript
// assets/icons/index.js
export { default as NewIcon } from "./NewIcon.js";
```

### **Bước 3: Sử dụng**

```javascript
import { NewIcon } from '@/assets/icons';

<NewIcon className="w-6 h-6" />
```

---

## 🎯 BEST PRACTICES

### ✅ **NÊN LÀM:**

1. **Optimize SVG:**
   ```bash
   # Sử dụng SVGO để optimize
   npx svgo input.svg -o output.svg
   ```

2. **Sử dụng currentColor:**
   ```javascript
   // ✅ ĐÚNG - Dễ thay đổi màu
   <svg fill="currentColor">
   
   // Sử dụng
   <Icon className="text-green-primary" />
   ```

3. **Accessible icons:**
   ```javascript
   <SearchIcon 
       aria-label="Tìm kiếm"
       role="img"
   />
   ```

4. **Consistent sizing:**
   ```javascript
   // Sử dụng Tailwind classes
   <Icon className="w-4 h-4" />   // 16px
   <Icon className="w-5 h-5" />   // 20px
   <Icon className="w-6 h-6" />   // 24px
   <Icon className="w-8 h-8" />   // 32px
   ```

### ❌ **KHÔNG NÊN:**

1. ❌ Hard-code màu sắc trong SVG
2. ❌ Sử dụng inline SVG trực tiếp trong components
3. ❌ Bỏ qua viewBox trong SVG
4. ❌ Tạo icons quá phức tạp (nhiều paths)

---

## 🔧 ICON CUSTOMIZATION

### **Thay đổi màu sắc:**

```javascript
// Method 1: Tailwind classes
<CartIcon className="text-green-primary hover:text-green-hover" />

// Method 2: Props
<CartIcon fill="#00A551" />
<SearchIcon stroke="#006838" />

// Method 3: CSS
.custom-icon {
    color: var(--bg-green-primary);
}
<CartIcon className="custom-icon" />
```

### **Thay đổi kích thước:**

```javascript
// Method 1: Props
<CartIcon width={32} height={32} />

// Method 2: Tailwind
<CartIcon className="w-8 h-8" />

// Method 3: CSS
<CartIcon className="scale-150" />
```

### **Animations:**

```javascript
// Rotate
<ArrowDownIcon className="transition-transform rotate-180" />

// Hover effects
<SearchIcon className="hover:scale-110 transition-transform" />

// Spin
<LoadingIcon className="animate-spin" />
```

---

## 📊 ICON USAGE GUIDELINES

### **Kích thước chuẩn:**

| Size | Pixels | Sử dụng cho |
|------|--------|-------------|
| xs | 12px | Badges, tags |
| sm | 16px | Inline text icons |
| md | 20px | Buttons, inputs |
| lg | 24px | Navigation, headers |
| xl | 32px | Feature icons |
| 2xl | 48px | Hero sections |

### **Màu sắc:**

| Context | Màu | Class |
|---------|-----|-------|
| Primary actions | Green | `text-green-primary` |
| Secondary | Gray | `text-gray-600` |
| Danger | Red | `text-red-primary` |
| Success | Green | `text-green-primary` |
| Info | Blue | `text-blue-primary` |

---

## 🔍 DEBUGGING

### **Icon không hiển thị:**

1. **Kiểm tra import:**
   ```javascript
   // ✅ ĐÚNG
   import { CartIcon } from '@/assets/icons';
   
   // ❌ SAI
   import CartIcon from '@/assets/icons/CartIcon';
   ```

2. **Kiểm tra viewBox:**
   ```javascript
   // SVG phải có viewBox
   <svg viewBox="0 0 24 24">
   ```

3. **Kiểm tra fill/stroke:**
   ```javascript
   // Nếu không hiển thị, thử thay đổi fill
   <Icon fill="currentColor" />
   <Icon stroke="currentColor" />
   ```

---

## 📚 TÀI LIỆU THAM KHẢO

- [SVG Optimization](https://jakearchibald.github.io/svgomg/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Heroicons](https://heroicons.com/) - Icon inspiration
- [Lucide Icons](https://lucide.dev/) - Icon library

---

## 🚀 KẾ HOẠCH PHÁT TRIỂN

### **Icons cần thêm:**
- [ ] Icon đánh giá (star)
- [ ] Icon chia sẻ (share)
- [ ] Icon yêu thích (heart)
- [ ] Icon thông báo (bell)
- [ ] Icon lọc (filter)
- [ ] Icon sắp xếp (sort)
- [ ] Icon thanh toán (payment methods)
- [ ] Icon vận chuyển (shipping)

### **Images cần thêm:**
- [ ] Product images
- [ ] Category banners
- [ ] Promotional banners
- [ ] About us images
- [ ] Team photos
- [ ] Certificates

---

## 📞 HỖ TRỢ

Nếu cần thêm icons hoặc images mới:
1. Chuẩn bị file (SVG cho icons, optimized images)
2. Follow naming conventions
3. Thêm vào đúng folder
4. Export trong index.js (cho icons)
5. Document trong README

**Liên hệ team lead để review trước khi commit.**
