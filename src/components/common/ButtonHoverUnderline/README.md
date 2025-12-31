# ButtonHoverUnderline Component - Vicophar

Component button với hiệu ứng underline animation mượt mà khi hover.

## 📁 Cấu Trúc

```
ButtonHoverUnderline/
├── ButtonHoverUnderline.js       # Component chính
├── ButtonHoverUnderline.stories.js # Examples & documentation
├── index.js                      # Export file
└── README.md                     # Documentation này
```

## 🎯 Tính Năng

- ✅ **Smooth Animation**: Underline xuất hiện từ phải sang trái với cubic-bezier easing
- ✅ **Dual Mode**: Hỗ trợ cả `<button>` và `<a>` (link)
- ✅ **Customizable**: Tùy chỉnh màu, chiều cao, tốc độ animation
- ✅ **Forward Ref**: Hỗ trợ ref forwarding
- ✅ **Disabled State**: Trạng thái disabled với opacity 50%
- ✅ **Flexible**: Custom className, children
- ✅ **Accessible**: Proper button/link semantics với ARIA

## 🎨 Hiệu Ứng Animation

### **Cách Hoạt Động:**

```
BEFORE HOVER:
Contact me
          ← (underline ẩn, scale-x-0, origin: right)

DURING HOVER:
Contact me
══════════ (underline xuất hiện từ phải sang trái)

AFTER HOVER:
Contact me
══════════ (underline full width)
```

### **Technical Details:**

- **Transform**: `scale-x-0` → `scale-x-100`
- **Origin**: `origin-bottom-right` → `origin-bottom-left`
- **Easing**: `cubic-bezier(0.65, 0.05, 0.36, 1)` - Smooth, natural
- **Duration**: `300ms` (default, customizable)
- **Height**: `2px` (default, customizable)

## 📦 Installation

```javascript
import ButtonHoverUnderline from '@/components/common/ButtonHoverUnderline';
// hoặc
import { ButtonHoverUnderline } from '@/components/common';
```

## 🚀 Usage

### **1. Basic Button**

```javascript
<ButtonHoverUnderline>
    Contact me
</ButtonHoverUnderline>
```

### **2. As Link**

```javascript
<ButtonHoverUnderline href="/contact">
    Contact page
</ButtonHoverUnderline>
```

### **3. Custom Color**

```javascript
<ButtonHoverUnderline underlineColor="bg-red-500">
    Red underline
</ButtonHoverUnderline>
```

### **4. Custom Height**

```javascript
<ButtonHoverUnderline underlineHeight="h-[3px]">
    Thick underline
</ButtonHoverUnderline>
```

### **5. Custom Duration**

```javascript
<ButtonHoverUnderline duration="duration-500">
    Slow animation
</ButtonHoverUnderline>
```

### **6. With Custom Styles**

```javascript
<ButtonHoverUnderline className="text-lg font-bold text-green-primary">
    Large bold text
</ButtonHoverUnderline>
```

### **7. Disabled State**

```javascript
<ButtonHoverUnderline disabled>
    Disabled button
</ButtonHoverUnderline>
```

## 📋 Props

### **Core Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Nội dung button (required) |
| `href` | string | - | URL cho link button (optional) |
| `onClick` | function | - | Click handler (optional) |
| `className` | string | `""` | Custom CSS classes |
| `disabled` | boolean | `false` | Disable button |
| `type` | string | `"button"` | Button type: "button", "submit", "reset" |

### **Style Props**

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `underlineColor` | string | `"bg-green-primary"` | Any Tailwind bg color class |
| `underlineHeight` | string | `"h-[2px]"` | Any Tailwind height class |
| `duration` | string | `"duration-300"` | `duration-150`, `duration-300`, `duration-500`, etc. |

### **Other Props**

All standard HTML button/anchor attributes are supported via `...props`.

## 💡 Examples

### **Navigation Menu**

```javascript
import ButtonHoverUnderline from '@/components/common/ButtonHoverUnderline';

function Navigation() {
    return (
        <nav>
            <ul className="flex gap-8">
                <li>
                    <ButtonHoverUnderline href="/">
                        Trang chủ
                    </ButtonHoverUnderline>
                </li>
                <li>
                    <ButtonHoverUnderline href="/san-pham">
                        Sản phẩm
                    </ButtonHoverUnderline>
                </li>
                <li>
                    <ButtonHoverUnderline href="/tin-tuc">
                        Tin tức
                    </ButtonHoverUnderline>
                </li>
            </ul>
        </nav>
    );
}
```

### **Footer Links**

```javascript
<footer className="bg-gray-900 text-white">
    <ButtonHoverUnderline 
        href="/about" 
        className="text-white"
        underlineColor="bg-white"
    >
        Về chúng tôi
    </ButtonHoverUnderline>
    
    <ButtonHoverUnderline 
        href="/privacy" 
        className="text-white"
        underlineColor="bg-white"
    >
        Chính sách bảo mật
    </ButtonHoverUnderline>
</footer>
```

### **Product Card**

```javascript
<div className="product-card">
    <h3>Aquatop - Viên uống bổ sung</h3>
    <p className="price">125.000đ</p>
    
    <ButtonHoverUnderline 
        href="/san-pham/SP001"
        className="text-green-primary font-semibold"
    >
        Xem chi tiết →
    </ButtonHoverUnderline>
</div>
```

### **CTA Button**

```javascript
<div className="hero-section">
    <h1>Welcome to Vicophar</h1>
    <p>Chăm sóc sức khỏe toàn diện</p>
    
    <ButtonHoverUnderline 
        href="/products"
        className="text-lg font-semibold text-green-primary"
        underlineHeight="h-[3px]"
    >
        Khám phá sản phẩm →
    </ButtonHoverUnderline>
</div>
```

## 🎨 Customization

### **Color Variants**

```javascript
// Green (default)
<ButtonHoverUnderline underlineColor="bg-green-primary">Green</ButtonHoverUnderline>

// Red
<ButtonHoverUnderline underlineColor="bg-red-500">Red</ButtonHoverUnderline>

// Blue
<ButtonHoverUnderline underlineColor="bg-blue-500">Blue</ButtonHoverUnderline>

// Custom color
<ButtonHoverUnderline underlineColor="bg-[#FF6B6B]">Custom</ButtonHoverUnderline>
```

### **Height Variants**

```javascript
// Thin (1px)
<ButtonHoverUnderline underlineHeight="h-[1px]">Thin</ButtonHoverUnderline>

// Default (2px)
<ButtonHoverUnderline underlineHeight="h-[2px]">Default</ButtonHoverUnderline>

// Thick (3px)
<ButtonHoverUnderline underlineHeight="h-[3px]">Thick</ButtonHoverUnderline>

// Very thick (4px)
<ButtonHoverUnderline underlineHeight="h-1">Very thick</ButtonHoverUnderline>
```

### **Duration Variants**

```javascript
// Fast (150ms)
<ButtonHoverUnderline duration="duration-150">Fast</ButtonHoverUnderline>

// Normal (300ms)
<ButtonHoverUnderline duration="duration-300">Normal</ButtonHoverUnderline>

// Slow (500ms)
<ButtonHoverUnderline duration="duration-500">Slow</ButtonHoverUnderline>

// Very slow (700ms)
<ButtonHoverUnderline duration="duration-700">Very slow</ButtonHoverUnderline>
```

## ✅ Best Practices

1. **Sử dụng cho navigation links** - Tạo hiệu ứng mượt mà cho menu
2. **Footer links** - Làm nổi bật các liên kết quan trọng
3. **CTA buttons** - Thu hút sự chú ý của người dùng
4. **Product links** - "Xem chi tiết", "Tìm hiểu thêm"
5. **Consistent styling** - Dùng cùng màu với brand color
6. **Appropriate duration** - 300ms là tốt nhất cho UX
7. **Accessibility** - Luôn thêm aria-label cho links quan trọng

## 🐛 Troubleshooting

### **Underline không hiển thị?**
- Kiểm tra `underlineColor` có đúng Tailwind class không
- Đảm bảo color class tồn tại trong Tailwind config
- Check z-index nếu bị che khuất

### **Animation không mượt?**
- Thử tăng `duration` lên `duration-500`
- Kiểm tra browser có hỗ trợ CSS transforms không
- Disable browser extensions có thể ảnh hưởng CSS

### **Link không hoạt động?**
- Kiểm tra `href` prop có đúng format không
- Đảm bảo Next.js Link được import đúng
- Check routing configuration

### **Disabled state không hoạt động?**
- Đảm bảo `disabled={true}` được set
- Check CSS có bị override không
- Verify onClick handler không chạy khi disabled

## 📝 Notes

- Component sử dụng `forwardRef` để hỗ trợ ref forwarding
- Tất cả props đều optional trừ `children`
- Underline animation chỉ hoạt động khi không disabled
- Hỗ trợ dark mode với custom underline color
- Compatible với Next.js 13+ App Router

## 🔄 Migration from Regular Links

### **Before:**

```javascript
<Link href="/contact" className="nav-link">
    Contact
</Link>
```

### **After:**

```javascript
<ButtonHoverUnderline href="/contact">
    Contact
</ButtonHoverUnderline>
```

## 🎯 Use Cases

- ✅ Navigation menus (horizontal/vertical)
- ✅ Footer links
- ✅ Breadcrumbs
- ✅ Product detail links
- ✅ Blog post links
- ✅ CTA buttons
- ✅ Social media links
- ✅ "Learn more" buttons
- ✅ "View details" links
- ✅ Contact buttons

## 🚀 Performance

- **Lightweight**: Chỉ sử dụng CSS transforms (GPU accelerated)
- **No JavaScript animation**: Pure CSS, không ảnh hưởng performance
- **Optimized**: Sử dụng `will-change` implicitly qua transforms
- **Smooth**: 60fps animation với cubic-bezier easing

## 📚 Related Components

- **Button**: Component button tổng quát với nhiều variants
- **Link**: Next.js Link component cơ bản
- **Navigation**: Component navigation menu chính

## 🔗 Resources

- [Cubic Bezier Easing](https://cubic-bezier.com/#.65,.05,.36,1)
- [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Next.js Link](https://nextjs.org/docs/app/api-reference/components/link)
