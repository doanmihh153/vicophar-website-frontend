# 📁 THƯ MỤC HOOKS - CUSTOM REACT HOOKS

## 📋 TỔNG QUAN

Thư mục `hooks/` chứa các custom React hooks để tái sử dụng logic trong toàn bộ ứng dụng.

---

## 🗂️ CẤU TRÚC ĐỀ XUẤT

```
hooks/
├── useFetch.js           # Hook fetch data từ API
├── useLocalStorage.js    # Hook quản lý localStorage
├── useDebounce.js        # Hook debounce input
├── useAuth.js            # Hook authentication
├── useGioHang.js         # Hook quản lý giỏ hàng
├── useForm.js            # Hook quản lý form
└── useMediaQuery.js      # Hook responsive
```

---

## 📝 TEMPLATE CUSTOM HOOK

```javascript
// hooks/useFetch.js
import { useState, useEffect } from 'react';

/**
 * Hook fetch dữ liệu từ API
 * @param {string} url - API endpoint
 * @returns {Object} { data, loading, error, refetch }
 */
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, refetch: fetchData };
}
```

---

## 🎯 EXAMPLES

### **useLocalStorage**

```javascript
export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
```

### **useDebounce**

```javascript
export function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}
```

---

## 📚 QUY TẮC

### ✅ NÊN:
- Tên hook bắt đầu bằng `use`
- Document rõ ràng params và return
- Cleanup trong useEffect
- Return object hoặc array

### ❌ KHÔNG NÊN:
- Gọi hooks trong conditions
- Quá nhiều logic trong một hook
- Side effects không cleanup
