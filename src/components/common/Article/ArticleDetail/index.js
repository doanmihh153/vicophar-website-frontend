/**
 * ============================================================================
 * ARTICLE DETAIL - BARREL EXPORTS
 * ============================================================================
 *
 * Central export for all article detail page components.
 * Import từ đây để sử dụng các components cho trang chi tiết bài viết.
 *
 * USAGE:
 * ------
 * import {
 *   ArticleHeader,
 *   ArticleBanner,
 *   TableOfContents,
 *   ArticleRenderer,
 *   ArticleRating,
 *   ArticleDisclaimer,
 *   CommentForm,
 *   FeaturedComments,
 * } from "@/components/common/Article/ArticleDetail";
 *
 * ============================================================================
 */

// === CONTENT COMPONENTS ===
export { default as ArticleHeader } from "./ArticleHeader";
export { default as ArticleSummary } from "./ArticleSummary";
export { default as ArticleBanner } from "./ArticleBanner";
export { default as TableOfContents } from "./TableOfContents";
export { default as ArticleRenderer } from "./ArticleRenderer";
export { default as ArticleRating } from "./ArticleRating";
export { default as ArticleDisclaimer } from "./ArticleDisclaimer";

// === ENGAGEMENT COMPONENTS ===
export { default as CommentForm } from "./CommentForm";
export { default as FeaturedComments } from "./FeaturedComments";
export { default as FeaturedCommentItem } from "./FeaturedCommentItem";
