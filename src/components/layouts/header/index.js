/**
 * ============================================================================
 * HEADER LAYOUT EXPORTS
 * ============================================================================
 *
 * Cấu trúc mới với 2 versions:
 * - STATIC: Current implementation (fixed header, inline search)
 * - SSR: Future implementation (sticky header, search drawers)
 *
 * BACKWARD COMPATIBILITY:
 * - Default export vẫn trỏ đến Static version
 * - Existing imports vẫn hoạt động bình thường
 *
 * USAGE:
 * ------
 * // Default import (Static version)
 * import { HeaderLayouts } from '@/components/layouts/header';
 *
 * // Explicit imports
 * import { StaticHeader } from '@/components/layouts/header';
 * import { SSRHeader } from '@/components/layouts/header';
 *
 * // Namespace imports
 * import { Static, SSR } from '@/components/layouts/header';
 *
 * ============================================================================
 */

// ============================================================================
// DEFAULT EXPORTS - Static Version (Current Implementation)
// ============================================================================
export { default } from "./static/Header.layouts";
export { default as HeaderLayouts } from "./static/Header.layouts";

// ============================================================================
// NAMED EXPORTS - Explicit Version Selection
// ============================================================================

// Static version (current)
export { HeaderLayouts as StaticHeader } from "./static";

// SSR version (future)
export { HeaderLayouts as SSRHeader } from "./ssr";

// ============================================================================
// NAMESPACE RE-EXPORTS - For Convenience
// ============================================================================

// Use as: import { Static } from '@/components/layouts/header';
export * as Static from "./static";

// Use as: import { SSR } from '@/components/layouts/header';
export * as SSR from "./ssr";
