# SSR Header Version (Future)

> **Status**: 🔮 FUTURE IMPLEMENTATION - Reference only  
> **DO NOT USE** - For future SSR/ISR migration  
> **Features**: Fixed Position + Inline Search  
> **Branch**: `fix/header-static`

---

## 📋 Overview

Version header hiện tại đang được sử dụng cho static site generation (SSG) và incremental static regeneration (ISR). Header sử dụng `position: fixed` và render tất cả components inline.

---

## ✨ Features

- ✅ **Fixed Position Header** - Không sticky, luôn ở top
- ✅ **Inline SearchForm** - Search form với suggestions dropdown
- ✅ **Full ActionButtons** - Login + Cart buttons
- ✅ **Responsive Design** - Desktop và Mobile layouts riêng biệt
- ✅ **Mobile Navigation Drawer** - Slide-in menu từ bottom
- ✅ **Keyboard Navigation** - Full keyboard support cho search
- ✅ **Accessibility** - ARIA labels và semantic HTML

---

## 🎨 Layout Structure

### Desktop (≥1024px)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [Logo]  [──────── SearchForm ────────]  [Login] [Cart]  │ 80px
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│        [Menu1]  [Menu2]  [Menu3]  [Menu4]  [Menu5]       │ 40px
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Components:**
- `Logo` - Desktop logo (h-10)
- `SearchForm` - Inline search với `SuggestionsList` dropdown
- `ActionButtons` - Login + Cart (both visible)
- `Navigation` - Horizontal menu với hover underline

### Mobile (<1024px)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [☰]           [Logo Center]              [Cart]         │
│                                                            │
│  [────────────── SearchForm Full Width ──────────────]    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Components:**
- `LogoResponsive` - Mobile logo (h-4 md:h-2, centered)
- Hamburger button - Opens `MobileNavigationDrawer`
- `SearchForm` - Full width, same functionality
- `ActionButtons` - Only Cart (Login hidden via `showLogin={false}`)

---

## 🔧 Components Used

### Layout Components
- `Header.layouts.jsx` - Main container

### UI Components (Shared)
- `ui/Header/Logo/Logo.jsx` - Desktop logo
- `ui/Header/Logo/LogoResponsive.jsx` - Mobile logo
- `ui/Header/SearchForm/SearchForm.jsx` - Search input với validation
- `ui/Header/SearchForm/SuggestionsList.jsx` - Dropdown suggestions
- `ui/Header/SearchForm/MobileSearchDrawer.jsx` - Mobile search drawer
- `ui/Header/ActionButtons/ActionButtons.jsx` - Wrapper
- `ui/Header/ActionButtons/LoginButton.jsx` - Login button
- `ui/Header/ActionButtons/CartButton.jsx` - Cart button với badge
- `ui/Navigation/Navigation.jsx` - Desktop menu
- `ui/Navigation/MobileNavigationDrawer.jsx` - Mobile menu drawer

---

## 📖 Props

```typescript
interface HeaderLayoutsProps {
  cartCount?: number; // Số lượng sản phẩm trong giỏ (default: 0)
}
```

### Example Usage

```jsx
import { HeaderLayouts } from '@/components/layouts/header/static';

// Basic usage
<HeaderLayouts />

// With cart count
<HeaderLayouts cartCount={5} />
```

---

## 🎯 Key Behaviors

### Search Functionality
- **Desktop**: 
  - Click input → Focus
  - Type → Suggestions dropdown appears
  - Arrow keys → Navigate suggestions
  - Enter → Select suggestion or submit
  - Escape → Close dropdown
  - Click outside → Close dropdown

- **Mobile**:
  - Click input → Open `MobileSearchDrawer` (full screen)
  - Drawer has own input with same features
  - Slide from right animation
  - Body scroll locked when open

### Navigation
- **Desktop**: Horizontal menu, hover underline effect
- **Mobile**: Hamburger → Opens `MobileNavigationDrawer`
  - Slide from bottom animation
  - Login/Register section
  - Navigation links
  - Phone consultation button
  - Auto-close on route change

### Scroll Behavior
- Header is `position: fixed`, always visible
- No sticky behavior, no transform
- Uses `paddingRight: var(--scrollbar-padding)` để tránh jump khi modal mở

---

## 🎨 Styling

### CSS Variables Used
```css
/* Heights */
--height-vico-header-top: 80px;
--height-vico-header-bottom: 40px;
--height-vico-search: 48px;

/* Colors */
--color-vico-green: #0db061;
--color-vico-green-hover: #00954d;
--color-vico-gray-200: #e5e7eb;
--color-vico-gray-600: #54595f;

/* Spacing */
--spacing-vico-xl: 2rem;

/* Z-Index */
--z-index-vico-fixed: 1030;
```

### Tailwind Classes
- `fixed top-0 left-0 right-0` - Fixed positioning
- `bg-white shadow-vico-sm` - Background and shadow
- `z-vico-fixed` - Z-index from CSS variable
- `lg:block` / `lg:hidden` - Responsive visibility
- `vico-container` - Custom container class

---

## 🔄 State Management

```jsx
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

Only state: Mobile navigation drawer open/close.

SearchForm manages own state internally:
- `searchTerm`
- `searchSuggestions`
- `selectedSuggestionIndex`
- `isMobileDrawerOpen`

---

## 🚀 Performance

- **No Hydration Issues** - Pure client-side interactions
- **No Layout Shift** - Fixed height header
- **Optimized Rendering** - Components only render when needed
- **Code Splitting** - MobileNavigationDrawer lazy loaded

---

## ♿ Accessibility

- ✅ `role="banner"` on header
- ✅ `role="navigation"` on nav
- ✅ `aria-label` on all interactive elements
- ✅ `aria-expanded` on drawer triggers
- ✅ Keyboard navigation support
- ✅ Focus management in drawers
- ✅ Screen reader announcements

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
< 1024px (lg breakpoint)

/* Desktop */
≥ 1024px
```

---

## 🐛 Known Issues

None currently. Report issues to the team.

---

## 🔄 Migration to SSR

Khi chuyển sang SSR version:

1. Update `src/app/layout.jsx`:
   ```jsx
   // Before
   import { HeaderLayouts } from '@/components/layouts/header';
   
   // After
   import { SSRHeader as HeaderLayouts } from '@/components/layouts/header';
   ```

2. Test sticky behavior
3. Test search drawers
4. Verify performance metrics

---

## 📚 Related Documentation

- [SSR Header](../ssr/README.md) - Future SSR version
- [Header Overview](../README.md) - Architecture overview
- [SearchForm](../../../ui/Header/SearchForm/README.md) - Search component docs
- [Navigation](../../../ui/Navigation/README.md) - Navigation docs

---

## 💡 Tips & Best Practices

### Adding Cart Count
Cart count thường lấy từ global state (Redux/Zustand) hoặc localStorage:

```jsx
import { useCartStore } from '@/store/cart';

function Layout() {
  const cartCount = useCartStore(state => state.items.length);
  
  return <HeaderLayouts cartCount={cartCount} />;
}
```

### Custom Styling
Nếu cần customize, override CSS variables trong component cha:

```jsx
<div style={{ '--height-vico-header-top': '100px' }}>
  <HeaderLayouts />
</div>
```

### Performance Monitoring
Track header performance:

```jsx
useEffect(() => {
  const observer = new PerformanceObserver((list) => {
    // Track render time
  });
  observer.observe({ entryTypes: ['measure'] });
}, []);
```

---

**Last Updated**: 22/12/2025  
**Maintained by**: Vicophar Dev Team
