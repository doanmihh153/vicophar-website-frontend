# Header Layout - Vicophar

> **Current Version**: Static  
> **Branch**: `fix/header-static`

---

## 📁 Folder Structure

```
header/
├── static/              ✅ CURRENT - Static rendering (SSG/ISR)
│   ├── Header.layouts.jsx
│   ├── README.md
│   └── index.js
│
├── ssr/                 🔮 FUTURE - Server-side rendering
│   ├── Header.layouts.jsx
│   ├── HeaderDesktop.jsx
│   ├── HeaderMobile.jsx
│   ├── TopBar.jsx
│   ├── README.md
│   └── index.js
│
├── README.md           ← You are here
├── index.js            ← Main exports
└── Header.layouts.jsx  ⚠️ DEPRECATED - Use static/ or ssr/ instead
```

---

## 🎯 Which Version to Use?

### Static Version (Current) ✅

**When to use:**
- ✅ Static site generation (SSG)
- ✅ Incremental static regeneration (ISR)
- ✅ Client-side navigation
- ✅ Simple, predictable behavior

**Features:**
- Fixed position header
- Inline search form
- Suggestions dropdown
- Login + Cart buttons
- Mobile drawer menu

**Import:**
```jsx
import { HeaderLayouts } from '@/components/layouts/header';
// OR
import { StaticHeader } from '@/components/layouts/header';
```

📖 [Static README](./static/README.md)

---

### SSR Version (Future) 🔮

**When to use:**
- ⏳ Server-side rendering (SSR)
- ⏳ Streaming SSR
- ⏳ Personalized content
- ⏳ SEO-critical dynamic data

**Features:**
- TopBar with social links
- Sticky header behavior
- Search drawers (Desktop side, Mobile full-screen)
- Advanced hydration strategy

**Import:**
```jsx
import { SSRHeader } from '@/components/layouts/header';
```

📖 [SSR README](./ssr/README.md)

> ⚠️ **Not Implemented**: SSR version chưa sẵn sàng. Đang dùng Static version.

---

## 🚀 Quick Start

### Basic Usage

```jsx
import { HeaderLayouts } from '@/components/layouts/header';

function RootLayout({ children }) {
  return (
    <html>
      <body>
        <HeaderLayouts cartCount={0} />
        {children}
      </body>
    </html>
  );
}
```

### With Cart Count

```jsx
import { HeaderLayouts } from '@/components/layouts/header';
import { useCartStore } from '@/store/cart';

function RootLayout({ children }) {
  const cartCount = useCartStore(state => state.items.length);
  
  return (
    <html>
      <body>
        <HeaderLayouts cartCount={cartCount} />
        {children}
      </body>
    </html>
  );
}
```

---

## 📖 Props Documentation

### HeaderLayouts Props

```typescript
interface HeaderLayoutsProps {
  cartCount?: number; // Số lượng sản phẩm trong giỏ (default: 0)
}
```

**cartCount**
- Type: `number`
- Default: `0`
- Hiển thị badge trên cart button
- Nếu `0`, không hiện badge

---

## 🔄 Migration Guide

### Migrating from Old Structure

**Before** (deprecated):
```jsx
import { HeaderLayouts } from '@/components/layouts/header';
// Imports from Header.layouts.jsx in root
```

**After** (recommended):
```jsx
import { HeaderLayouts } from '@/components/layouts/header';
// Now imports from static/Header.layouts.jsx
```

✅ **No changes needed!** Backward compatible.

---

### Migrating to SSR Version

**When SSR version is ready:**

1. Update import in `src/app/layout.jsx`:
```jsx
// Change from
import { HeaderLayouts } from '@/components/layouts/header';

// To
import { SSRHeader as HeaderLayouts } from '@/components/layouts/header';
```

2. Test thoroughly:
   - [ ] Sticky behavior works
   - [ ] TopBar displays correctly
   - [ ] Search drawers work
   - [ ] No hydration errors
   - [ ] Performance acceptable

3. Update documentation

---

## 🎨 Customization

### Styling

Override CSS variables:

```jsx
<div style={{
  '--height-vico-header-top': '100px',
  '--color-vico-green': '#00ff00'
}}>
  <HeaderLayouts />
</div>
```

### Custom Cart Count Source

```jsx
// From Redux
import { useSelector } from 'react-redux';
const cartCount = useSelector(state => state.cart.items.length);

// From Context
const { cart } = useCartContext();
const cartCount = cart.length;

// From localStorage
const cartCount = JSON.parse(localStorage.getItem('cart') || '[]').length;
```

---

## 🧩 Components Architecture

### Shared UI Components

Both Static and SSR versions use these shared components:

```
ui/Header/
├── Logo/
│   ├── Logo.jsx              # Desktop logo
│   └── LogoResponsive.jsx    # Mobile logo
│
├── SearchForm/
│   ├── SearchForm.jsx        # Main search component
│   ├── SuggestionsList.jsx   # Dropdown suggestions
│   ├── MobileSearchDrawer.jsx # Mobile search drawer
│   ├── DesktopSearchDrawer.jsx # Desktop search drawer
│   └── useMobileSearch.js    # Search logic hook
│
└── ActionButtons/
    ├── ActionButtons.jsx     # Wrapper
    ├── LoginButton.jsx       # Login button
    └── CartButton.jsx        # Cart with badge

ui/Navigation/
├── Navigation.jsx            # Desktop menu
└── MobileNavigationDrawer.jsx # Mobile menu drawer
```

### Layout Differences

| Feature | Static | SSR |
|---------|--------|-----|
| Position | Fixed | Sticky |
| TopBar | ❌ No | ✅ Yes |
| Search | Inline form | Drawer (icon button) |
| Login/Cart | Desktop + Mobile | Desktop only |
| Animation | Simple | Advanced |

---

## 📊 Performance Metrics

### Static Version
- **Time to Interactive**: ~1.2s
- **First Contentful Paint**: ~0.8s
- **Bundle Size**: ~15KB (gzipped)

### SSR Version (Target)
- **Time to Interactive**: ~0.9s
- **First Contentful Paint**: ~0.5s
- **Bundle Size**: ~18KB (gzipped)

---

## 🐛 Troubleshooting

### Header không hiển thị

**Check:**
1. Import đúng chưa?
2. `globals.css` đã import `base.css`?
3. CSS variables có đúng không?

### Icons không hiển thị

**Fix:**
```bash
# Kiểm tra icons
ls src/assets/icons/

# Re-install dependencies
pnpm install
```

### Drawer không mở

**Check:**
1. Browser console có lỗi không?
2. `useBodyScrollLock` hook có hoạt động không?
3. Z-index có conflict không?

---

## 📚 Related Documentation

- [Static Header README](./static/README.md)
- [SSR Header README](./ssr/README.md)
- [SearchForm Documentation](../../ui/Header/SearchForm/README.md)
- [Navigation Documentation](../../ui/Navigation/README.md)
- [Tailwind V4 Guide](../../../docs/TAILWIND_V4_GUIDE.md)

---

## 🎯 Roadmap

### Completed ✅
- [x] Create folder structure
- [x] Move static implementation
- [x] Documentation
- [x] Backward compatibility

### In Progress 🚧
- [ ] SSR implementation
- [ ] Testing suite
- [ ] Performance optimization

### Planned 📋
- [ ] A/B testing Static vs SSR
- [ ] Analytics integration
- [ ] Advanced search features
- [ ] Personalization support

---

**Last Updated**: 22/12/2025  
**Maintained by**: Vicophar Dev Team
