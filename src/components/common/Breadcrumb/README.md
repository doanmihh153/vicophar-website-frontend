# Breadcrumb Component

## Overview

Reusable breadcrumb navigation component for displaying page hierarchy.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{label: string, href?: string}>` | `[]` | Array of breadcrumb items |
| `separator` | `string` | `">"` | Character to separate items |
| `className` | `string` | `""` | Additional CSS classes |

## Usage

### Basic Example

```jsx
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";

<Breadcrumb
  items={[
    { label: "Trang Chủ", href: "/" },
    { label: "Tin Tức" }
  ]}
/>
```

### With Custom Separator

```jsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Detail" }
  ]}
  separator="/"
/>
```

### Multiple Levels

```jsx
<Breadcrumb
  items={[
    { label: "Trang Chủ", href: "/" },
    { label: "Sản Phẩm", href: "/san-pham" },
    { label: "Thực Phẩm Chức Năng", href: "/san-pham/thuc-pham-chuc-nang" },
    { label: "Chi Tiết" }
  ]}
/>
```

## Styling

- **Default item**: Gray text with hover effect
- **Active item** (last): Green text, bold font
- **Separator**: Light gray color

## Accessibility

- Uses semantic `<nav>` with `aria-label="Breadcrumb"`
- Last item is not a link (current page)
- Keyboard navigable
