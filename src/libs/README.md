# 📁 THƯ MỤC LIBS - THIRD-PARTY LIBRARIES CONFIG

## 📋 TỔNG QUAN

Thư mục `libs/` chứa cấu hình cho các thư viện bên thứ 3 được sử dụng trong ứng dụng.

---

## 🗂️ CẤU TRÚC ĐỀ XUẤT

```
libs/
├── axios.js            # Axios configuration
├── firebase.js         # Firebase config (nếu dùng)
├── analytics.js        # Google Analytics
└── sentry.js           # Error tracking
```

---

## 📝 EXAMPLES

### **axios.js**

```javascript
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
});

export default axiosInstance;
```

### **analytics.js**

```javascript
export const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
```

---

## 📚 QUY TẮC

### ✅ NÊN:
- Tập trung config ở một nơi
- Sử dụng environment variables
- Document rõ ràng

### ❌ KHÔNG NÊN:
- Commit API keys lên Git
- Hard-code credentials
