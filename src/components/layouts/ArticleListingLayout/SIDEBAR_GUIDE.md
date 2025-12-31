# ArticleListingLayout - Flexible Sidebar Guide

## 🎯 New Feature: Custom Sidebar Content

Giờ bạn có thể **tùy chỉnh sidebar content** cho ArticleListingLayout!

## 📋 Prop: `sidebarContent`

```javascript
sidebarContent?: ReactNode  // Default: CategorySidebar
```

- **Type**: React Node (JSX)
- **Default**: `null` (sẽ dùng CategorySidebar)
- **Purpose**: Override sidebar content

## 🚀 Usage Examples

### 1️⃣ Default - CategorySidebar (Không cần làm gì)

```javascript
// NewsCompanyPage.js - Keep as is!
import ArticleListingLayout from "@/components/layouts/ArticleListingLayout";
import { newsCategories, newsArticles } from "@/data/newsPage";

export default function NewsCompanyPage() {
    return (
        <ArticleListingLayout
            heroImage="/imgs/hero.jpg"
            categories={newsCategories}
            articles={newsArticles}
            // Không truyền sidebarContent → auto dùng CategorySidebar ✅
        />
    );
}
```

### 2️⃣ Custom - HelpSidebar Only

```javascript
// HealthCornerPage.js
import ArticleListingLayout from "@/components/layouts/ArticleListingLayout";
import HelpSidebar from "@/components/common/HelpSidebar";

export default function HealthCornerPage() {
    return (
        <ArticleListingLayout
            {...props}
            sidebarContent={<HelpSidebar />}  // ← 1 line!
        />
    );
}
```

### 3️⃣ Both - CategorySidebar + HelpSidebar

```javascript
// BlogPage.js
import CategorySidebar from "@/components/common/CategorySidebar";
import HelpSidebar from "@/components/common/HelpSidebar";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    
    return (
        <ArticleListingLayout
            {...props}
            sidebarContent={
                <div className="space-y-6">
                    <CategorySidebar
                        categories={blogCategories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                    <HelpSidebar />
                </div>
            }
        />
    );
}
```

### 4️⃣ Custom Component

```javascript
// EventsPage.js
import CustomEventSidebar from "@/components/CustomEventSidebar";

export default function EventsPage() {
    return (
        <ArticleListingLayout
            {...props}
            sidebarContent={<CustomEventSidebar />}
        />
    );
}
```

## ⚠️ Important Notes

### Sticky Behavior

Nếu dùng custom `sidebarContent`, bạn cần handle Sticky logic:

**Option A: Components có sẵn Sticky**
```javascript
// CategorySidebar & HelpSidebar đã có Sticky built-in
<CategorySidebar />  // ✅ Auto sticky
<HelpSidebar />      // ✅ Auto sticky
```

**Option B: Wrap với Sticky**
```javascript
import Sticky from "react-stickynode";

sidebarContent={
    <Sticky top={150} bottomBoundary="#main-content-col">
        <YourCustomSidebar />
    </Sticky>
}
```

### Multiple Sidebars cùng Sticky

```javascript
// ❌ Wrong - Mỗi component có Sticky riêng
<div className="space-y-6">
    <CategorySidebar />  // Has Sticky
    <HelpSidebar />      // Has Sticky → Scroll independent
</div>

// ✅ Correct - Wrap cả 2 trong 1 Sticky
import Sticky from "react-stickynode";

<Sticky top={150} bottomBoundary="#main-content-col">
    <div className="space-y-6">
        <CategorySidebar disableSticky={true} />
        <HelpSidebar disableSticky={true} />
    </div>
</Sticky>
```

## 📝 Best Practices

### ✅ DO:
- Keep sidebar simple và focused
- Use built-in components khi có thể
- Space sidebar items với `space-y-6`

### ❌ DON'T:
- Over-complicate sidebar logic
- Forget Sticky wrapper cho custom components
- Mix sticky behaviors (multiple Sticky wrappers dính nhau)

## 🎨 Styling Tips

```javascript
// Gap between sidebar items
<div className="space-y-6">  // 24px gap
    <Component1 />
    <Component2 />
</div>

// Responsive padding
<div className="p-4 tablet:p-6 desktop:p-8">
```

## 🔮 Future Ideas

- [ ] Add `sidebarPosition` prop (left/right)
- [ ] Add `sidebarWidth` prop (col-span control)
- [ ] Predefined sidebar templates

---

**Summary:** Thêm `sidebarContent` prop → Full customization! 🎉
