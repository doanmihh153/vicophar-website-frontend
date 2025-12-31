# FilterTabs Component

## Overview

Reusable filter tabs component with pill-style buttons for filtering content.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `Array<{id: string, label: string}>` | `[]` | Array of tab items |
| `activeTab` | `string` | `""` | ID of currently active tab |
| `onTabChange` | `function` | `() => {}` | Callback when tab is clicked, receives `tabId` |
| `className` | `string` | `""` | Additional CSS classes |

## Usage

### Basic Example

```jsx
"use client";

import { useState } from "react";
import FilterTabs from "@/components/common/FilterTabs/FilterTabs";

export default function MyComponent() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <FilterTabs
      tabs={[
        { id: "all", label: "Tất cả" },
        { id: "promotion", label: "Khuyến mãi" },
        { id: "new", label: "Sản phẩm mới" }
      ]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}
```

### With Content Filtering

```jsx
"use client";

import { useState } from "react";
import FilterTabs from "@/components/common/FilterTabs/FilterTabs";

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("all");
  
  const tabs = [
    { id: "all", label: "Tất cả" },
    { id: "promotion", label: "Khuyến mãi" },
    { id: "product", label: "Sản phẩm mới" }
  ];

  const filteredArticles = articles.filter(article => 
    activeTab === "all" ? true : article.category === activeTab
  );

  return (
    <div>
      <FilterTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <ArticleList articles={filteredArticles} />
    </div>
  );
}
```

## Styling

- **Active tab**: Green background, white text, green border
- **Inactive tab**: White background, gray text, gray border
- **Hover state**: Green border and text
- **Responsive**: Wraps on smaller screens with appropriate gaps

## Accessibility

- Uses semantic `<button>` elements
- `aria-pressed` attribute indicates active state
- Keyboard navigable
- Focus visible states
