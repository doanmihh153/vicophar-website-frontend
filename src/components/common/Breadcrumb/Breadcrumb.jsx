/**
 * ============================================================================
 * BREADCRUMB - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component điều hướng breadcrumb có thể tái sử dụng
 *
 * PROPS:
 * ------
 * @param {array} items - Mảng breadcrumb items [{ label, href, icon }]
 *   - label: Text hiển thị
 *   - href: Link (optional, nếu không có thì là item cuối)
 *   - icon: React component (optional, hiển thị thay text trên mobile)
 * @param {string} separator - Ký tự phân cách (default: ">")
 * @param {string} className - Custom className
 *
 * USAGE:
 * ------
 * <Breadcrumb
 *   items={[
 *     { label: "Trang Chủ", href: "/", icon: <HomeIcon /> },
 *     { label: "Tin Tức" }
 *   ]}
 * />
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Link from "next/link";

export default function Breadcrumb({
    items = [],
    separator = ">",
    className = "",
}) {
    if (!items || items.length === 0) return null;

    return (
        <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-2 text-body ${className}`}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                const hasIcon = !!item.icon;

                // Content: Icon trên mobile, text trên tablet+
                const content = hasIcon ? (
                    <>
                        <span className="tablet:hidden">{item.icon}</span>
                        <span className="hidden tablet:inline">
                            {item.label}
                        </span>
                    </>
                ) : (
                    item.label
                );

                return (
                    <React.Fragment key={index}>
                        {item.href ? (
                            <Link
                                href={item.href}
                                className={
                                    isLast
                                        ? "text-vico-green font-semibold hover:underline"
                                        : "text-vico-gray-600 hover:text-vico-green transition-colors"
                                }
                            >
                                {content}
                            </Link>
                        ) : (
                            <span
                                className={
                                    isLast
                                        ? "text-vico-green font-semibold"
                                        : "text-vico-gray-600"
                                }
                            >
                                {content}
                            </span>
                        )}

                        {!isLast && (
                            <span className="text-vico-gray-400">
                                {separator}
                            </span>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
}
