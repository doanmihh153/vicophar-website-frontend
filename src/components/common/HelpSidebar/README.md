# Help Sidebar Component

## 📋 Mô Tả

Component sidebar hiển thị thông tin hỗ trợ khách hàng với:
- Hình minh họa bác sĩ/nhân viên y tế
- Hotline liên hệ
- CTA button "Gọi ngay"

## 🎨 Design

![Design mẫu](/Users/doanmihh/.gemini/antigravity/brain/956ca223-31c3-485c-96e1-09b84dddc531/uploaded_image_1764825446363.png)

## 📱 Responsive

### Mobile (< 768px)
- Padding: 16px
- Hình: max-width 200px
- Text size: nhỏ hơn
- Button: padding 12px

### Tablet (768px - 1279px)
- Padding: 24px
- Hình: max-width 250px
- Text size: trung bình

### Desktop (>= 1280px)
- Padding: 32px
- Hình: max-width 300px
- Text size: lớn (giống design)
- Button: padding 16px

## 🚀 Usage

### Basic Usage

```javascript
import HelpSidebar from "@/components/common/HelpSidebar";

export default function Page() {
    return (
        <div className="grid grid-cols-12 gap-8">
            {/* Main content */}
            <div className="col-span-9">
                {/* Content here */}
            </div>
            
            {/* Sidebar */}
            <div className="col-span-3">
                <HelpSidebar />
            </div>
        </div>
    );
}
```

### With CategorySidebar

```javascript
import CategorySidebar from "@/components/common/CategorySidebar";
import HelpSidebar from "@/components/common/HelpSidebar";

export default function Page() {
    return (
        <div className="col-span-3 space-y-8">
            {/* Category filter */}
            <CategorySidebar
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleChange}
            />
            
            {/* Help CTA */}
            <HelpSidebar />
        </div>
    );
}
```

### Custom Styling

```javascript
<HelpSidebar className="mb-8 custom-class" />
```

## 🎯 Features

- ✅ Fully responsive (mobile/tablet/desktop)
- ✅ Click-to-call hotline
- ✅ Smooth hover effects
- ✅ Image optimization with Next.js Image
- ✅ Accessibility-friendly
- ✅ Clean, semantic HTML

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | `""` | Custom CSS classes |

## 🎨 Customization

### Change Hotline

Edit number in 2 places:

```javascript
// Display number
<span>0333 152 545</span>

// Phone link
<Link href="tel:0333152545">
```

### Change Text

Edit text directly in component:

```javascript
<h3>Chúng Tôi Luôn Sẵn Sàng Giúp Đỡ Bạn</h3>
<p>Để được hỗ trợ tốt nhất...</p>
```

### Change Image

Replace `/public/imgs/sidebar/doctor-support.svg` with your image.

## 📝 Notes

- SVG image loads instantly
- Phone link works on mobile devices
- Button has hover state for better UX
- All text centered for balance
- Green color matches brand

## 🐛 Troubleshooting

### Image not showing?
- Check file exists: `/public/imgs/sidebar/doctor-support.svg`
- Verify path is correct
- Clear Next.js cache: `pnpm dev` restart

### Hotline not clickable?
- Verify `href="tel:0333152545"` format
- Test on mobile device

## 🔮 Future Enhancements

- [ ] Add WhatsApp link
- [ ] Add Zalo link
- [ ] Make content configurable via props
- [ ] Add animation on scroll
- [ ] Track click analytics
