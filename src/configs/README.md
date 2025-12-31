# 📁 THƯ MỤC CONFIGS - APPLICATION CONFIGURATIONS

## 📋 TỔNG QUAN

Thư mục `configs/` chứa các file cấu hình cho ứng dụng như routes, menu, SEO defaults.

---

## 🗂️ CẤU TRÚC ĐỀ XUẤT

```
configs/
├── routes.js           # Định nghĩa routes
├── menu.js             # Menu navigation
├── seo.js              # SEO defaults
└── app.config.js       # App settings
```

---

## 📝 EXAMPLES

### **routes.js**

```javascript
export const ROUTES = {
    HOME: '/',
    SAN_PHAM: '/san-pham',
    CHI_TIET_SAN_PHAM: (id) => `/san-pham/${id}`,
    GIO_HANG: '/gio-hang',
    THANH_TOAN: '/thanh-toan',
    TAI_KHOAN: '/tai-khoan',
    GIOI_THIEU: '/gioi-thieu',
    LIEN_HE: '/lien-he',
};
```

### **menu.js**

```javascript
export const MAIN_MENU = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/san-pham' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: 'Liên hệ', href: '/lien-he' },
];
```

### **seo.js**

```javascript
export const SEO_DEFAULTS = {
    title: 'Vicophar - Dược Mỹ Phẩm Thiên Nhiên',
    description: 'Thương hiệu dược mỹ phẩm hàng đầu Việt Nam',
    keywords: ['dược mỹ phẩm', 'vicophar', 'chăm sóc sức khỏe'],
    ogImage: '/images/og-image.jpg',
};
```

---

## 📚 QUY TẮC

### ✅ NÊN:
- Tách biệt config khỏi logic
- Export constants
- Document rõ ràng

### ❌ KHÔNG NÊN:
- Hard-code trong components
- Mix config với logic
