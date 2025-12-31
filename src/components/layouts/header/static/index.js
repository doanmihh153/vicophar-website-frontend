/**
 * SSR HEADER - FUTURE IMPLEMENTATION
 *
 * > ⚠️ NOT IMPLEMENTED - Do not use in production yet
 *
 * Export header layout cho Server-Side Rendering (SSR)
 * Với TopBar, Sticky behavior, và Search drawers
 *
 * Features:
 * - TopBar với social links
 * - Sticky header behavior (useSticky)
 * - DesktopSearchDrawer (side drawer)
 * - MobileSearchDrawer (full-screen)
 * - Optimized cho SSR/hydration
 *
 * Usage (when ready):
 * ```jsx
 * import { HeaderLayouts } from '@/components/layouts/header/ssr';
 *
 * <HeaderLayouts cartCount={5} />
 * ```
 *
 * Migration: See README.md
 */

export { default } from "./Header.layouts";
export { default as HeaderLayouts } from "./Header.layouts";
