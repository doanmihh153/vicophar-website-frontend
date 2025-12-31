/**
 * ============================================================================
 * FILTER TABS - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component filter tabs dạng pill có thể tái sử dụng
 *
 * PROPS:
 * ------
 * @param {array} tabs - Mảng tabs [{ id, label }]
 * @param {string} activeTab - ID của tab đang active
 * @param {function} onTabChange - Callback khi click tab (tabId)
 * @param {string} className - Custom className
 *
 * USAGE:
 * ------
 * const [activeTab, setActiveTab] = useState("all");
 *
 * <FilterTabs
 *   tabs={[
 *     { id: "all", label: "Tất cả" },
 *     { id: "promotion", label: "Khuyến mãi" },
 *     { id: "new", label: "Sản phẩm mới" }
 *   ]}
 *   activeTab={activeTab}
 *   onTabChange={setActiveTab}
 * />
 *
 * ============================================================================
 */

"use client";

import React from "react";

export default function FilterTabs({
    tabs = [],
    activeTab = "",
    onTabChange = () => {},
    className = "",
}) {
    if (!tabs || tabs.length === 0) return null;

    return (
        <div className={`flex flex-wrap gap-2 tablet:gap-3 ${className}`}>
            {tabs.map((tab) => {
                const isActive = tab.id === activeTab;

                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`
                            px-4 py-2 rounded-full border-2 text-body font-medium
                            transition-all duration-200
                            ${
                                isActive
                                    ? "bg-vico-green text-white border-vico-green"
                                    : "bg-white text-vico-gray-700 border-vico-gray-300 hover:border-vico-green hover:text-vico-green"
                            }
                        `}
                        aria-pressed={isActive}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
