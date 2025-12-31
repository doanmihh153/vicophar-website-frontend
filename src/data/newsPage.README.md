# News Page Data - README

## 📋 Overview

Mock data cho trang **Tin Tức Công Ty** (`/tin-tuc-cong-ty`).

Data này được sử dụng bởi `NewsCompanyPage` component thông qua `ArticleListingLayout`.

## 📊 Data Structure

### 1. Hero Banner

```javascript
export const newsHeroBanner = {
    imageUrl: "/imgs/storyour/mockup-truck-vicophar-AI.png",
    altText: "Vicophar - Tin tức công ty"
};
```

**Usage:** Hiển thị hero banner ở đầu trang.

### 2. Categories (Danh Mục)

```javascript
export const newsCategories = [
    { id: "tat-ca", name: "Tất cả", count: 120 },
    { id: "promotion", name: "Khuyến mãi", count: 45 },
    { id: "product", name: "Sản phẩm mới", count: 30 },
    { id: "treatment", name: "Trị liệu", count: 25 },
    { id: "recruitment", name: "Tuyển dụng", count: 20 }
];
```

**Fields:**
- `id` (string): Unique identifier - **tiếng Anh** (for FE-BE communication)
- `name` (string): Display name - **tiếng Việt** (user-facing)
- `count` (number): Article count in category

**Important:** 
- ✅ `id` = English slug for API/routing
- ✅ `name` = Vietnamese for display
- ✅ First category MUST have `id: "tat-ca"` (Tất cả)

### 3. Articles (Bài Viết)

```javascript
export const newsArticles = [
    {
        id: "1",
        title: "Article title",
        description: "Article description",
        image: "/path/to/image.png",
        category: "Khuyến mãi",  // ← Vietnamese name (matches categories[].name)
        date: "04/06/2025",
        author: "Vicophar",
        link: "/tin-tuc/article-slug",
        isFeatured: true  // Optional: show in featured grid
    },
    ...
];
```

**Fields:**
- `id` (string): Unique article ID
- `title` (string): Article title
- `description` (string): Short description/excerpt
- `image` (string): Path to thumbnail image
- `category` (string): **Vietnamese category name** (matches `newsCategories[].name`)
- `date` (string): Publish date (format: DD/MM/YYYY)
- `author` (string): Author name
- `link` (string): Article URL path
- `isFeatured` (boolean, optional): Show in featured articles grid

**Critical:** 
- ✅ `article.category` MUST match `category.name` (Vietnamese)
- ✅ NOT `category.id` (English)

### 4. Filter Tabs

```javascript
export const newsFilterTabs = [
    { id: "tat-ca", label: "Tất cả" },
    { id: "promotion", label: "Khuyến mãi" },
    { id: "product", label: "Sản phẩm mới" }
];
```

**Usage:** Alternative filter tabs (currently not used in layout).

## 🔄 Data Flow

### Frontend Flow

```
User clicks category "Khuyến mãi"
  ↓
ArticleListingLayout receives categoryId = "promotion" (English)
  ↓
Find category: { id: "promotion", name: "Khuyến mãi" }
  ↓
Filter articles WHERE article.category === "Khuyến mãi" (Vietnamese)
  ↓
Display filtered articles
```

### Backend Integration (Future)

When integrating with backend:

```javascript
// Backend Response
{
  "articles": [
    {
      "id": 1,
      "title": "...",
      "categoryId": "promotion",  // ← English ID for API
      "category": "Khuyến mãi",    // ← Vietnamese name for display
      ...
    }
  ]
}
```

**Recommendation:**
- Backend returns BOTH `categoryId` (English) and `category` (Vietnamese)
- Frontend uses `category` (Vietnamese) for display & filtering
- Frontend uses `categoryId` (English) for API calls

## 💡 Best Practices

### ✅ DO:
```javascript
// Articles use Vietnamese names
{
  category: "Khuyến mãi"  // ✅ Correct
}

// Categories have both
{
  id: "promotion",        // ✅ For API
  name: "Khuyến mãi"     // ✅ For display
}
```

### ❌ DON'T:
```javascript
// Articles use English IDs
{
  category: "promotion"  // ❌ Wrong - won't match filter
}

// Missing Vietnamese name
{
  id: "promotion"        // ❌ Incomplete
}
```

## 🧪 Testing Data

To test category filtering:
1. Add diverse articles across categories
2. Ensure each article.category matches a category.name
3. Test "Tất cả" shows all articles
4. Test each specific category filters correctly

## 🔮 Future Enhancements

### Featured Articles by Category

```javascript
export const featuredArticlesByCategory = {
    promotion: {
        title: "TIN KHUYẾN MÃI",
        articles: [...]
    },
    treatment: {
        title: "TIN TRỊ LIỆU",
        articles: [...]
    }
};
```

**Usage:** Display category-specific featured articles (currently in data but not used).

## 📝 Notes

- All dates use DD/MM/YYYY format (Vietnamese standard)
- Image paths are relative to `/public` directory
- Article links should be valid routes
- Category counts are manual - update when adding/removing articles

## 🚀 Quick Start

### Adding New Article

```javascript
newsArticles.push({
    id: "7",
    title: "Your article title",
    description: "Your description",
    image: "/path/to/image.png",
    category: "Khuyến mãi",  // Must match category.name!
    date: "05/06/2025",
    author: "Vicophar",
    link: "/tin-tuc/your-slug"
});
```

### Adding New Category

```javascript
// 1. Add to categories
newsCategories.push({
    id: "events",           // English slug
    name: "Sự kiện",       // Vietnamese name
    count: 0
});

// 2. Add articles with matching category
newsArticles.push({
    ...
    category: "Sự kiện"    // Match the name!
});
```

Done! 🎉
