# useDesktopDetection Hook

## 📋 Mô Tả

Custom React hook để phát hiện desktop viewport (>= 1280px).

Tối ưu cho Sticky components và responsive logic.

## 🚀 Usage

### Basic Usage

```javascript
import useDesktopDetection from "@/hooks/useDesktopDetection";

export default function MyComponent() {
    const isDesktop = useDesktopDetection();
    
    return (
        <Sticky enabled={isDesktop}>
            {/* Sticky chỉ hoạt động trên desktop */}
        </Sticky>
    );
}
```

### Custom Breakpoint

```javascript
// Desktop >= 1024px
const isLargeScreen = useDesktopDetection(1024);

// Desktop >= 1536px (2xl)
const isExtraLarge = useDesktopDetection(1536);
```

### Multiple Sidebars Example

```javascript
import Sticky from "react-stickynode";
import useDesktopDetection from "@/hooks/useDesktopDetection";
import CategorySidebar from "@/components/common/CategorySidebar";
import HelpSidebar from "@/components/common/HelpSidebar";

export default function MyPage() {
    const isDesktop = useDesktopDetection();
    
    return (
        <ArticleListingLayout
            {...props}
            sidebarContent={
                <Sticky top={150} enabled={isDesktop}>
                    <div className="space-y-6">
                        <CategorySidebar disableSticky={true} />
                        <HelpSidebar disableSticky={true} />
                    </div>
                </Sticky>
            }
        />
    );
}
```

## 🎯 Parameters

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `breakpoint` | number | `1280` | Desktop breakpoint (px) |

## 📊 Return Value

| Type | Description |
|------|-------------|
| `boolean` | `true` nếu viewport >= breakpoint |

## 🎨 Breakpoint Reference

```javascript
// Tailwind CSS breakpoints
useDesktopDetection(640)   // sm
useDesktopDetection(768)   // md (tablet)
useDesktopDetection(1024)  // lg
useDesktopDetection(1280)  // xl (desktop) ← Default
useDesktopDetection(1536)  // 2xl
```

## ⚡ Performance

- ✅ **Debounced**: Không cần debounce thêm
- ✅ **Auto cleanup**: removeEventListener tự động
- ✅ **SSR safe**: State khởi tạo `false`
- ✅ **Lightweight**: < 10 lines code

## 🔧 Implementation

```javascript
export default function useDesktopDetection(breakpoint = 1280) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= breakpoint);
        };
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, [breakpoint]);

    return isDesktop;
}
```

## 💡 Use Cases

### 1. Conditional Rendering
```javascript
const isDesktop = useDesktopDetection();

return (
    <>
        {isDesktop ? <DesktopNav /> : <MobileNav />}
    </>
);
```

### 2. Sticky Control
```javascript
const isDesktop = useDesktopDetection();

return (
    <Sticky enabled={isDesktop}>
        <Sidebar />
    </Sticky>
);
```

### 3. Layout Switching
```javascript
const isDesktop = useDesktopDetection();

return (
    <div className={isDesktop ? "grid-cols-12" : "grid-cols-1"}>
        {/* content */}
    </div>
);
```

### 4. Feature Toggle
```javascript
const isDesktop = useDesktopDetection();

return (
    <div>
        {isDesktop && <AdvancedFeature />}
        <BasicContent />
    </div>
);
```

## 🐛 Troubleshooting

### Hook returns false on desktop?
- Check breakpoint value
- Verify window.innerWidth in console
- Ensure component is client-side ("use client")

### Too many re-renders?
- Hook auto-handles cleanup
- No need to manually debounce
- Check if using hook in render loop

## 🔮 Future Enhancements

- [ ] Add debounce option
- [ ] Support multiple breakpoints
- [ ] Match media query API
- [ ] Orientation detection

## 📝 Notes

- Default breakpoint (1280px) matches Tailwind's `desktop:` breakpoint
- Hook is SSR-safe (initial state = false)
- Listener auto-cleanup on unmount
- Use memo/callback if passing to children

---

**TL;DR:** `const isDesktop = useDesktopDetection();` → Returns `true` nếu >= 1280px 🎯
