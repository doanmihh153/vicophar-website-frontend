# 📁 THƯ MỤC ICONS - SVG ICONS COMPONENTS

## 📋 TỔNG QUAN

Thư mục `icons/` chứa tất cả SVG icons được viết dưới dạng React components, giúp dễ dàng tái sử dụng và customize trong toàn bộ ứng dụng.

---

## 🗂️ DANH SÁCH ICONS

### **1. Logo & Branding**

#### **LogoVicophar.js** 🏢
```javascript
import { VicopharLogo } from '@/assets/icons';

<VicopharLogo width={106} height={60} className="text-green-primary" />
```

**Props:**
- `width` (default: 106)
- `height` (default: 60)
- `className`
- `fill` (default: "currentColor")

**Sử dụng cho:**
- Header logo
- Footer logo
- Loading screen
- Email templates

---

### **2. Navigation Icons**

#### **HamburgerIcon.js** ☰
```javascript
import { HamburgerIcon } from '@/assets/icons';

<HamburgerIcon width={24} height={24} className="text-white" />
```

**Sử dụng cho:**
- Mobile menu toggle
- Sidebar toggle

---

#### **CloseIcon.js** ✕
```javascript
import { CloseIcon } from '@/assets/icons';

<CloseIcon width={24} height={24} className="text-gray-900" />
```

**Sử dụng cho:**
- Đóng modal
- Đóng drawer
- Xóa items
- Dismiss notifications

---

#### **ArrowDownIcon.js** ⬇️
```javascript
import { ArrowDownIcon } from '@/assets/icons';

<ArrowDownIcon width={16} height={16} className="text-gray-600" />
```

**Sử dụng cho:**
- Dropdown menus
- Accordion toggle
- Scroll indicators
- Sort indicators

---

#### **ArrowRight.js** ➡️
```javascript
import { ArrowRight } from '@/assets/icons';

<ArrowRight width={20} height={20} className="text-green-primary" />
```

**Sử dụng cho:**
- Next buttons
- Link indicators
- Breadcrumbs
- Carousel navigation

---

### **3. E-commerce Icons**

#### **CartIcon.js** 🛒
```javascript
import { CartIcon } from '@/assets/icons';

<CartIcon className="w-6 h-6 text-white" />
```

**Đặc điểm:**
- Stroke color: white (hard-coded)
- StrokeWidth: 2

**Sử dụng cho:**
- Header cart button
- Add to cart buttons
- Cart page icon

**Ví dụ với badge:**
```javascript
<div className="relative">
    <CartIcon className="w-6 h-6" />
    <span className="absolute -top-2 -right-2 bg-red-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        3
    </span>
</div>
```

---

#### **SearchIcon.js** 🔍
```javascript
import { SearchIcon } from '@/assets/icons';

<SearchIcon width={24} height={24} className="stroke-green-header hover:cursor-pointer" />
```

**Đặc điểm:**
- Stroke-based icon
- StrokeWidth: 2.5
- Built-in hover cursor

**Sử dụng cho:**
- Search input
- Search button
- Search modal trigger

---

#### **UserIcon.js** 👤
```javascript
import { UserIcon } from '@/assets/icons';

<UserIcon className="w-6 h-6 text-gray-900" />
```

**Đặc điểm:**
- Stroke color: currentColor
- StrokeWidth: 2

**Sử dụng cho:**
- User account menu
- Login/Register buttons
- Profile page
- User avatar placeholder

---

### **4. Social Media Icons**

#### **FacebookIcons.js** 📘
```javascript
import { FacebookIcon } from '@/assets/icons';

<FacebookIcon width={24} height={24} />
```

**Sử dụng cho:**
- Social links footer
- Share buttons
- Login with Facebook

---

#### **TiktokIcon.js** 🎵
```javascript
import { TiktokIcon } from '@/assets/icons';

<TiktokIcon width={24} height={24} />
```

**Sử dụng cho:**
- Social links footer
- Follow us section

---

#### **LazadaIcons.js** 🛍️
```javascript
import { LazadaIcon } from '@/assets/icons';

<LazadaIcon width={24} height={24} />
```

**Sử dụng cho:**
- Marketplace links
- Buy on Lazada buttons

---

#### **ShopeeIcon.js** 🛒
```javascript
import { ShopeeIcon } from '@/assets/icons';

<ShopeeIcon width={24} height={24} />
```

**Sử dụng cho:**
- Marketplace links
- Buy on Shopee buttons

---

## 📄 FILE index.js - EXPORT HUB

### **Code:**

```javascript
// Xuất file icons
// Kiểu import -> import { FacebookIcon } from "@/assets/icons";

// ---------> Social Icons 💻
export { default as FacebookIcon } from "./FacebookIcons.js";
export { default as LazadaIcon } from "./LazadaIcons.js";
export { default as TiktokIcon } from "./TiktokIcon.js";
export { default as ShopeeIcon } from "./ShopeeIcon.js";

export { default as ArrowDownIcon } from "./ArrowDownIcon.js";
export { default as VicopharLogo } from "./LogoVicophar.js";

export { default as SearchIcon } from "./SearchIcon.js";
export { default as CloseIcon } from "./CloseIcon.js";
export { default as ArrowRight } from "./ArrowRight.js";
export { default as UserIcon } from "./UserIcon.js";
export { default as CartIcon } from "./CartIcon.js";
export { default as HamburgerIcon } from "./HamburgerIcon.js";
```

**Lợi ích:**
- ✅ Import tập trung từ một file
- ✅ Tree-shaking tự động
- ✅ Dễ dàng quản lý
- ✅ Autocomplete tốt hơn

---

## 🎨 ICON STRUCTURE TEMPLATE

### **Template chuẩn cho icon mới:**

```javascript
// src/assets/icons/TenIcon.js

const TenIcon = ({
    width = 24,
    height = 24,
    className = "",
    fill = "currentColor",
    stroke = "currentColor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M..."
        />
    </svg>
);

export default TenIcon;
```

---

## 📝 HƯỚNG DẪN SỬ DỤNG

### **1. Import Icons:**

```javascript
// Import một icon
import { CartIcon } from '@/assets/icons';

// Import nhiều icons
import { 
    CartIcon, 
    SearchIcon, 
    UserIcon 
} from '@/assets/icons';
```

### **2. Sử dụng cơ bản:**

```javascript
// Default size (24x24)
<SearchIcon />

// Custom size
<SearchIcon width={32} height={32} />

// With Tailwind classes
<SearchIcon className="w-6 h-6 text-green-primary" />
```

### **3. Thay đổi màu sắc:**

```javascript
// Method 1: Tailwind classes (Khuyến nghị)
<SearchIcon className="text-green-primary hover:text-green-hover" />

// Method 2: Props
<SearchIcon fill="#00A551" />
<SearchIcon stroke="#006838" />

// Method 3: CSS
.custom-icon {
    color: var(--bg-green-primary);
}
<SearchIcon className="custom-icon" />
```

### **4. Responsive sizing:**

```javascript
<SearchIcon className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
```

### **5. Animations:**

```javascript
// Rotate
<ArrowDownIcon className="transition-transform duration-300 rotate-180" />

// Scale on hover
<CartIcon className="hover:scale-110 transition-transform" />

// Spin
<LoadingIcon className="animate-spin" />
```

---

## 🎯 USE CASES

### **Header Component:**

```javascript
import { 
    VicopharLogo, 
    SearchIcon, 
    CartIcon, 
    UserIcon,
    HamburgerIcon 
} from '@/assets/icons';

export default function Header() {
    return (
        <header className="bg-green-header">
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <VicopharLogo width={106} height={60} />
                
                {/* Search */}
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <SearchIcon className="w-6 h-6 text-white" />
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-4">
                    <UserIcon className="w-6 h-6 text-white" />
                    <div className="relative">
                        <CartIcon className="w-6 h-6 text-white" />
                        <span className="badge">3</span>
                    </div>
                    <HamburgerIcon className="w-6 h-6 text-white md:hidden" />
                </div>
            </div>
        </header>
    );
}
```

### **Social Links:**

```javascript
import { 
    FacebookIcon, 
    TiktokIcon, 
    LazadaIcon, 
    ShopeeIcon 
} from '@/assets/icons';

export default function SocialLinks() {
    return (
        <div className="flex gap-4">
            <a href="https://facebook.com/vicophar" target="_blank">
                <FacebookIcon className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://tiktok.com/@vicophar" target="_blank">
                <TiktokIcon className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://lazada.vn/vicophar" target="_blank">
                <LazadaIcon className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://shopee.vn/vicophar" target="_blank">
                <ShopeeIcon className="w-6 h-6 hover:scale-110 transition" />
            </a>
        </div>
    );
}
```

### **Dropdown Menu:**

```javascript
import { ArrowDownIcon } from '@/assets/icons';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <button onClick={() => setIsOpen(!isOpen)}>
            Danh mục
            <ArrowDownIcon 
                className={`w-4 h-4 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                }`}
            />
        </button>
    );
}
```

---

## 🔧 CUSTOMIZATION

### **Thêm gradient cho icon:**

```javascript
<svg>
    <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A551" />
            <stop offset="100%" stopColor="#006838" />
        </linearGradient>
    </defs>
    <path fill="url(#gradient1)" d="..." />
</svg>
```

### **Thêm shadow:**

```javascript
<SearchIcon 
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
/>
```

---

## 📊 ICON SIZES REFERENCE

| Class | Size | Pixels | Sử dụng |
|-------|------|--------|---------|
| `w-3 h-3` | xs | 12px | Inline badges |
| `w-4 h-4` | sm | 16px | Small buttons |
| `w-5 h-5` | md | 20px | Default buttons |
| `w-6 h-6` | lg | 24px | Navigation |
| `w-8 h-8` | xl | 32px | Feature icons |
| `w-12 h-12` | 2xl | 48px | Hero sections |

---

## ⚠️ LƯU Ý QUAN TRỌNG

### ✅ **NÊN:**

1. **Sử dụng currentColor:**
   ```javascript
   fill="currentColor"  // Dễ thay đổi màu qua className
   ```

2. **Thêm viewBox:**
   ```javascript
   viewBox="0 0 24 24"  // Bắt buộc để scale đúng
   ```

3. **Spread props:**
   ```javascript
   {...props}  // Cho phép thêm props khác
   ```

4. **Accessibility:**
   ```javascript
   <SearchIcon aria-label="Tìm kiếm" role="img" />
   ```

### ❌ **KHÔNG NÊN:**

1. ❌ Hard-code màu trong SVG path
2. ❌ Bỏ qua viewBox
3. ❌ Tạo icon quá phức tạp (> 5 paths)
4. ❌ Inline SVG trực tiếp trong components

---

## 🚀 THÊM ICON MỚI

### **Bước 1: Tạo file component**

```javascript
// src/assets/icons/HeartIcon.js
const HeartIcon = ({
    width = 24,
    height = 24,
    className = "",
    fill = "none",
    stroke = "currentColor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
    </svg>
);

export default HeartIcon;
```

### **Bước 2: Export trong index.js**

```javascript
// src/assets/icons/index.js
export { default as HeartIcon } from "./HeartIcon.js";
```

### **Bước 3: Sử dụng**

```javascript
import { HeartIcon } from '@/assets/icons';

<HeartIcon className="w-6 h-6 text-red-primary" />
```

---

## 🔍 DEBUGGING

### **Icon không hiển thị:**

1. Kiểm tra import path
2. Kiểm tra viewBox
3. Kiểm tra fill/stroke
4. Inspect element trong browser

### **Icon bị méo:**

1. Đảm bảo có viewBox
2. Kiểm tra aspect ratio
3. Sử dụng preserveAspectRatio

### **Màu không thay đổi:**

1. Dùng currentColor thay vì hard-code
2. Kiểm tra fill vs stroke
3. Kiểm tra CSS specificity

---

## 📚 TÀI LIỆU THAM KHẢO

- [Heroicons](https://heroicons.com/)
- [Lucide Icons](https://lucide.dev/)
- [SVG Optimization](https://jakearchibald.github.io/svgomg/)
- [MDN SVG Reference](https://developer.mozilla.org/en-US/docs/Web/SVG)

---

## 📞 HỖ TRỢ

Nếu cần thêm icon mới hoặc customize:
1. Tìm SVG từ Heroicons/Lucide
2. Optimize bằng SVGO
3. Convert sang React component
4. Follow template chuẩn
5. Export trong index.js

**Liên hệ team lead để review.**
