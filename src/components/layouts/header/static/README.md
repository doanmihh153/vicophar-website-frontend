# Static Header Version

> **Status**: ✅ CURRENT IMPLEMENTATION  
> **Used in**: All pages  
> **Features**: TopBar + Sticky Header + Search Drawers  
> **Branch**: `fix/header-static`

---

## ⚠️ IMPORTANT NOTICE

This is a **reference implementation** for future Server-Side Rendering support.  
**Current production** uses [Static Header](../static/README.md).

**Do not import** from this folder until SSR migration is complete.

---

## 📋 Overview

SSR Header version được thiết kế cho Server-Side Rendering với các tối ưu hóa:
- TopBar với social links và quick links
- Sticky header behavior
- Search drawers thay vì inline form
- Streaming SSR support
- Optimized hydration

---

## ✨ Features (When Implemented)

- ✅ **TopBar Component** - Green gradient với social + quick links
- ✅ **Sticky Behavior** - Header sticks khi scroll (useSticky hook)
- ✅ **Search Drawers** - Desktop side drawer, Mobile full-screen
- ✅ **No Inline Search** - Cleaner header, less DOM
- ✅ **Animated Transitions** - Smooth drawer animations
- ✅ **SSR Optimized** - No hydration mismatches
- ✅ **Performance First** - Lazy loading, code splitting

---

## 🎨 Layout Structure

### TopBar (Green Gradient)

```
┌────────────────────────────────────────────────────────────┐
│ [FB] [Lazada] [TikTok] [Shopee] | [Links] | [VN ▼]        │
└────────────────────────────────────────────────────────────┘
```

### Desktop Header (≥1024px)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [Logo]     [Menu1] [Menu2] [Menu3] [Menu4]      [🔍]    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Mobile Header (<1024px)

```
┌────────────────────────────────────────────────────────────┐
│  [Logo]                                    [🔍]  [☰]      │
└────────────────────────────────────────────────────────────┘
```

---

## 🔧 Components

### Layout Components

| Component | File | Purpose |
|-----------|------|---------|
| `HeaderLayouts` | `Header.layouts.jsx` | Main container |
| `TopBar` | `TopBar.jsx` | Social + Quick links |
| `HeaderDesktop` | `HeaderDesktop.jsx` | Desktop layout |
| `HeaderMobile` | `HeaderMobile.jsx` | Mobile layout |

### Shared UI Components (from `ui/`)

| Component | Path | Used In |
|-----------|------|---------|
| `Logo` | `ui/Header/Logo/Logo.jsx` | Desktop |
| `LogoResponsive` | `ui/Header/Logo/LogoResponsive.jsx` | Mobile |
| `Navigation` | `ui/Navigation/Navigation.jsx` | Desktop |
| `DesktopSearchDrawer` | `ui/Header/SearchForm/DesktopSearchDrawer.jsx` | Desktop |
| `MobileSearchDrawer` | `ui/Header/SearchForm/MobileSearchDrawer.jsx` | Mobile |
| `MobileNavigationDrawer` | `ui/Navigation/MobileNavigationDrawer.jsx` | Mobile |

---

## 📖 Props

```typescript
interface HeaderLayoutsProps {
  cartCount?: number; // NOT USED in SSR version (for future)
}
```

---

## 🚫 Key Differences from Static

| Feature | Static | SSR |
|---------|--------|-----|
| TopBar | ❌ No | ✅ Yes |
| Position | Fixed | Sticky (useSticky) |
| Search | Inline form | Drawers only |
| Login/Cart | Desktop + Mobile | Not shown |
| Complexity | Simple | Advanced |
| Hydration | N/A | Optimized |

---

## 🚀 Usage (Future)

### When Implemented

```jsx
import { SSRHeader } from '@/components/layouts/header';

function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SSRHeader />
        {children}
      </body>
    </html>
  );
}
```

### ⚠️ Current (Do Not Use)

```jsx
// ❌ DO NOT USE YET
import { SSRHeader } from '@/components/layouts/header';

// ✅ USE THIS INSTEAD
import { StaticHeader } from '@/components/layouts/header';
```

---

## 📋 Implementation Checklist

Before using SSR Header, complete these tasks:

### Testing
- [ ] Test sticky behavior across browsers
- [ ] Test TopBar responsive breakpoints
- [ ] Test search drawers on all devices
- [ ] Test hydration (no mismatches)
- [ ] Performance testing (FCP, LCP, TTI)
- [ ] Accessibility audit
- [ ] Cross-browser testing

### Integration
- [ ] Update `src/app/layout.jsx`
- [ ] Test with actual SSR data
- [ ] Verify social links work
- [ ] Verify quick links work
- [ ] Test language selector (if functional)

### Documentation
- [ ] Update this README status
- [ ] Update root README
- [ ] Document any gotchas
- [ ] Create migration guide

### Performance
- [ ] Bundle size acceptable (<20KB gzipped)
- [ ] No layout shift
- [ ] Fast Time to Interactive
- [ ] Lighthouse score >90

---

## 🔄 Migration Plan

### Step 1: Test Locally

```jsx
// In src/app/layout.jsx (temporary)
import { SSRHeader } from '@/components/layouts/header';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SSRHeader />
        {children}
      </body>
    </html>
  );
}
```

### Step 2: Verify Features

1. TopBar displays correctly
2. Social links open correct URLs
3. Sticky behavior works smoothly
4. Search drawers open/close properly
5. Mobile navigation works
6. No console errors
7. No hydration warnings

### Step 3: Performance Check

```bash
# Build
pnpm build

# Lighthouse audit
pnpm lighthouse

# Bundle analysis
pnpm analyze
```

### Step 4: Deploy to Staging

Test on staging environment before production.

### Step 5: Production Deploy

After thorough testing, deploy to production.

---

## ⚙️ Configuration

### Sticky Behavior

Adjust sticky offset in `Header.layouts.jsx`:

```jsx
const { outerRef, innerRef } = useSticky({
  top: 0,  // Change this if needed
});
```

### TopBar Social Links

Update in `TopBar.jsx`:

```jsx
const SOCIAL_LINKS = [
  { icon: FacebookIcon, name: "Facebook", url: "..." },
  // Add or modify links here
];
```

### TopBar Quick Links

Update in `TopBar.jsx`:

```jsx
const TOP_LINKS = [
  { name: "Link Name", url: "/path" },
  // Add or modify links here
];
```

---

## 🐛 Known Issues

### Current Status: Reference Only

This implementation is **not tested** in production. Known potential issues:

- [ ] Sticky hook may need adjustment for SSR
- [ ] Social links may need tracking integration
- [ ] Language selector not functional (UI only)
- [ ] Performance not benchmarked
- [ ] Accessibility not fully audited

---

## 📊 Performance Targets

### Goals (vs Static)

| Metric | Static | SSR Target |
|--------|--------|------------|
| FCP | ~0.8s | <0.5s |
| LCP | ~1.2s | <0.9s |
| TTI | ~1.2s | <0.9s |
| Bundle Size | ~15KB | <20KB |

---

## ♿ Accessibility

### Planned Features

- [ ] Skip links for TopBar
- [ ] Proper focus management in drawers
- [ ] Keyboard shortcuts (Cmd+K for search)
- [ ] Screen reader announcements
- [ ] High contrast mode support

---

## 📚 Related Documentation

- [Static Header](../static/README.md) - Current implementation
- [Header Overview](../README.md) - Architecture overview
- [useSticky Hook](../../../../hooks/useSticky.md) - Sticky behavior
- [Search Drawers](../../../ui/Header/SearchForm/README.md) - Search components

---

## 💡 Future Improvements

- [ ] Personalized TopBar content
- [ ] Dynamic quick links based on user
- [ ] Functional language switcher
- [ ] Analytics integration
- [ ] A/B testing framework
- [ ] Performance monitoring
- [ ] Error boundaries
- [ ] Graceful degradation

---

## 🎯 Success Criteria

Before marking as "Implemented":

✅ All tests pass  
✅ Performance targets met  
✅ Accessibility audit passed  
✅ No hydration errors  
✅ Cross-browser tested  
✅ Documentation complete  
✅ Staging deployment successful  
✅ Analytics tracking works  
✅ SEO verified  
✅ User acceptance testing passed

---

**Last Updated**: 22/12/2025  
**Status**: Reference Implementation  
**Next Review**: When SSR migration starts
