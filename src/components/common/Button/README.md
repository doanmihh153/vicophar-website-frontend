# Button Component - Vicophar

Component button tổng quát, tái sử dụng cho toàn bộ website Vicophar.

## 📁 Cấu Trúc

```
Button/
├── Button.js           # Component chính
├── Button.stories.js   # Examples & documentation
├── index.js           # Export file
└── README.md          # Documentation này
```

## 🎯 Tính Năng

- ✅ **Dual Mode**: Hỗ trợ cả `<button>` và `<a>` (link)
- ✅ **Variants**: primary, secondary, outline, ghost
- ✅ **Sizes**: sm, md, lg
- ✅ **Shapes**: rounded, pill, square
- ✅ **Icons**: Hỗ trợ icon ở left/right position
- ✅ **Badges**: Hiển thị số lượng với nhiều màu
- ✅ **Custom Colors**: Tùy chỉnh màu text, background, border, hover
- ✅ **Custom Dimensions**: Tùy chỉnh width, height, padding, radius
- ✅ **Custom Effects**: Shadow, animation, transform
- ✅ **Accessibility**: ARIA labels, focus states, disabled states
- ✅ **Forward Ref**: Hỗ trợ ref forwarding

## 📦 Installation

```javascript
import Button from '@/components/common/Button';
```

## 🚀 Usage

### Basic Button

```javascript
<Button>Click me</Button>
```

### Variants

```javascript
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Sizes

```javascript
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Shapes

```javascript
<Button shape="rounded">Rounded</Button>
<Button shape="pill">Pill</Button>
<Button shape="square">Square</Button>
```

### Link Button

```javascript
<Button href="/login">Login</Button>
<Button href="https://google.com" target="_blank">External</Button>
```

### With Icon

```javascript
import { UserIcon, CartIcon } from '@/assets/icons';

<Button icon={UserIcon}>Đăng nhập</Button>
<Button icon={CartIcon} iconPosition="right">Giỏ hàng</Button>
```

### With Badge

```javascript
<Button icon={CartIcon} badge={5} badgeColor="red">
    Giỏ hàng
</Button>

<Button icon={CartIcon} badge={99} badgeColor="green">
    Notifications
</Button>
```

### Custom Colors

```javascript
<Button
    bgColor="bg-red-500"
    textColor="text-white"
    hoverBg="hover:bg-red-600"
>
    Red Button
</Button>
```

### Custom Dimensions

```javascript
<Button customWidth="w-full">Full Width</Button>
<Button customWidth="w-32" customHeight="h-16">Custom Size</Button>
<Button customPadding="px-8 py-4">Custom Padding</Button>
<Button customRadius="rounded-xl">Custom Radius</Button>
```

### Disabled State

```javascript
<Button disabled>Disabled Button</Button>
```

### Loading State

```javascript
<Button animation="animate-pulse">Loading...</Button>
```

## 📋 Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Nội dung bên trong button |
| `href` | string | - | URL cho link button |
| `onClick` | function | - | Click handler (chỉ cho button) |
| `type` | string | "button" | Button type: "button", "submit", "reset" |
| `disabled` | boolean | false | Disable button |
| `className` | string | "" | Custom CSS classes |
| `title` | string | - | Tooltip text |
| `ariaLabel` | string | - | ARIA label cho accessibility |

### Style Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `variant` | string | "primary" | "primary", "secondary", "outline", "ghost" |
| `size` | string | "md" | "sm", "md", "lg" |
| `shape` | string | "rounded" | "rounded", "pill", "square" |

### Icon & Badge Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | Component | - | Icon component |
| `iconPosition` | string | "left" | "left", "right" |
| `badge` | number/string | - | Badge content |
| `badgeColor` | string | "red" | "red", "green", "blue", "yellow" |

### Custom Color Props

| Prop | Type | Description |
|------|------|-------------|
| `textColor` | string | Màu chữ: "text-red-500" |
| `bgColor` | string | Màu nền: "bg-red-500" |
| `borderColor` | string | Màu viền: "border-red-500" |
| `hoverBg` | string | Màu nền hover: "hover:bg-red-600" |
| `hoverText` | string | Màu chữ hover: "hover:text-white" |
| `hoverBorder` | string | Màu viền hover: "hover:border-red-600" |

### Custom Dimension Props

| Prop | Type | Description |
|------|------|-------------|
| `customWidth` | string | Chiều rộng: "w-full", "w-32" |
| `customHeight` | string | Chiều cao: "h-12", "h-[50px]" |
| `customPadding` | string | Padding: "px-8 py-4" |
| `customRadius` | string | Border radius: "rounded-xl" |

### Custom Effect Props

| Prop | Type | Description |
|------|------|-------------|
| `shadow` | string | Bóng đổ: "shadow-lg" |
| `animation` | string | Animation: "animate-pulse" |
| `transform` | string | Transform: "scale-105" |

## 🎨 Variants

### Primary (Default)
- Background: `bg-green-primary`
- Text: `text-white`
- Hover: `hover:bg-(--color-hover-gr)`

### Secondary
- Background: `bg-gray-100`
- Text: `text-gray-900`
- Hover: `hover:bg-gray-200`

### Outline
- Border: `border-green-primary`
- Text: `text-green-primary`
- Hover: `hover:bg-green-primary hover:text-white`

### Ghost
- Text: `text-green-primary`
- Hover: `hover:text-(--color-hover-gr) hover:bg-green-50`

## 💡 Examples

### Header Login Button

```javascript
<Button
    href="/dang-nhap"
    variant="ghost"
    shape="pill"
    icon={UserIcon}
    customWidth="w-16 tablet:w-auto"
    customHeight="h-12"
>
    <span className="hidden desktop:inline">Đăng nhập</span>
</Button>
```

### Header Cart Button

```javascript
<Button
    href="/gio-hang"
    shape="pill"
    bgColor="bg-green-primary"
    textColor="text-white"
    icon={CartIcon}
    badge={5}
    badgeColor="red"
    customWidth="w-16 tablet:w-auto"
    customHeight="h-12"
>
    <span className="hidden desktop:inline">Giỏ hàng</span>
</Button>
```

### Search Submit Button

```javascript
<Button
    type="submit"
    shape="pill"
    bgColor="bg-green-primary"
    customPadding="p-2"
    icon={SearchIcon}
/>
```

### Form Submit Button

```javascript
<Button type="submit" size="lg">
    Đăng ký ngay
</Button>
```

## 🔧 Customization

Button component được thiết kế để dễ dàng tùy chỉnh:

1. **Override variants**: Sử dụng custom color props
2. **Override sizes**: Sử dụng custom dimension props
3. **Add effects**: Sử dụng shadow, animation, transform props
4. **Combine props**: Kết hợp nhiều props để tạo style độc đáo

## ✅ Best Practices

1. **Sử dụng variants mặc định** khi có thể để đảm bảo consistency
2. **Chỉ custom khi cần thiết** - không lạm dụng custom props
3. **Luôn thêm `ariaLabel`** cho buttons chỉ có icon
4. **Sử dụng `title`** để cung cấp tooltip hữu ích
5. **Test disabled state** để đảm bảo UX tốt
6. **Sử dụng `badge`** một cách có ý nghĩa (số lượng, notifications)

## 🐛 Troubleshooting

### Button không hiển thị đúng màu?
- Kiểm tra xem bạn có đang override variant bằng custom color props không
- Đảm bảo CSS variables trong `base.css` đã được định nghĩa

### Icon không hiển thị?
- Kiểm tra import icon component đúng chưa
- Đảm bảo icon component nhận `className` prop

### Badge không hiển thị?
- Badge chỉ hiển thị khi `badge` prop có giá trị (không phải `undefined` hoặc `null`)
- Kiểm tra z-index nếu badge bị che khuất

## 📝 Notes

- Component sử dụng `forwardRef` để hỗ trợ ref forwarding
- Tất cả custom props đều optional
- Custom props sẽ override default styles
- Badge tự động hiển thị "99+" nếu số lượng > 99
