# 📁 THƯ MỤC UTILS - UTILITY FUNCTIONS

## 📋 TỔNG QUAN

Thư mục `utils/` chứa các helper functions và utility functions được sử dụng trong toàn bộ ứng dụng.

---

## 🗂️ CẤU TRÚC ĐỀ XUẤT

```
utils/
├── format.js           # Format số, tiền, ngày tháng
├── validation.js       # Validate form, email, phone
├── constants.js        # Hằng số ứng dụng
├── helpers.js          # Helper functions chung
└── storage.js          # LocalStorage helpers
```

---

## 📝 EXAMPLES

### **format.js**

```javascript
/**
 * Format số tiền theo định dạng Việt Nam
 * @param {number} amount - Số tiền
 * @returns {string} Số tiền đã format
 */
export function formatTien(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

/**
 * Format ngày tháng
 * @param {Date|string} date - Ngày
 * @returns {string} Ngày đã format
 */
export function formatNgay(date) {
    return new Intl.DateTimeFormat('vi-VN').format(new Date(date));
}
```

### **validation.js**

```javascript
/**
 * Validate email
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Validate số điện thoại Việt Nam
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
    const regex = /^(0|\+84)[0-9]{9}$/;
    return regex.test(phone);
}
```

### **constants.js**

```javascript
export const ROUTES = {
    HOME: '/',
    SAN_PHAM: '/san-pham',
    GIO_HANG: '/gio-hang',
    THANH_TOAN: '/thanh-toan',
};

export const STATUS_DON_HANG = {
    CHO_XAC_NHAN: 'cho_xac_nhan',
    DANG_GIAO: 'dang_giao',
    HOAN_THANH: 'hoan_thanh',
    HUY: 'huy',
};
```

---

## 📚 QUY TẮC

### ✅ NÊN:
- Functions phải pure (không side effects)
- Document rõ ràng input/output
- Export named functions
- Viết unit tests

### ❌ KHÔNG NÊN:
- Side effects trong utils
- Phụ thuộc vào external state
- Hard-code values
