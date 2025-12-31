/**
 * STATIC HEADER - CURRENT IMPLEMENTATION
 *
 * Export header layout cho static rendering (SSG/ISR)
 * Fixed position, inline search, full features
 *
 * Features:
 * - Fixed position header (không sticky)
 * - Inline SearchForm với suggestions dropdown
 * - Desktop: Logo + SearchForm + ActionButtons (Login + Cart) + Navigation
 * - Mobile: Hamburger + Logo + Cart + SearchForm full width
 * - MobileNavigationDrawer cho mobile menu
 *
 * Usage:
 * ```jsx
 * import { HeaderLayouts } from '@/components/layouts/header/static';
 *
 * <HeaderLayouts cartCount={5} />
 * ```
 */

export { default } from "./Header.layouts";
export { default as HeaderLayouts } from "./Header.layouts";
