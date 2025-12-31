/**
 * ============================================================================
 * NEWSLETTER SECTION - ĐĂNG KÝ NHẬN TIN
 * ============================================================================
 *
 * Component form đăng ký nhận tin tức mới nhất qua email
 * Sử dụng NewsletterSubscription reusable component
 *
 * ============================================================================
 */

"use client";

import React from "react";
import { NewsletterSubscription } from "@/components/common/Newsletter";

export default function StorysLetterNews() {
    return <NewsletterSubscription className="mb-16" />;
}
