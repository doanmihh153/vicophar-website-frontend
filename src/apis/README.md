# 📁 THƯ MỤC APIS - API SERVICES

## 📋 TỔNG QUAN

Thư mục `apis/` quản lý tất cả API calls và HTTP requests của ứng dụng Vicophar Vietnam Frontend.

---

## 🗂️ CẤU TRÚC ĐỀ XUẤT

```
apis/
├── client.js              # HTTP client configuration
├── sanpham.api.js        # API sản phẩm
├── nguoidung.api.js      # API người dùng
├── giohang.api.js        # API giỏ hàng
├── donhang.api.js        # API đơn hàng
├── danhmuc.api.js        # API danh mục
└── auth.api.js           # API authentication
```

---

## 📄 TEMPLATE API FILE

```javascript
// apis/sanpham.api.js
import apiClient from './client';

/**
 * Lấy danh sách sản phẩm
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>}
 */
export async function layDanhSachSanPham(params = {}) {
    try {
        const response = await apiClient.get('/san-pham', { params });
        return response;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        throw error;
    }
}
```

---

## 📝 QUY TẮC

### ✅ NÊN:
- Sử dụng async/await
- Try-catch cho mọi API call
- Document rõ ràng params và return
- Tên hàm bằng tiếng Việt
- Export named functions

### ❌ KHÔNG NÊN:
- Hard-code API URLs
- Bỏ qua error handling
- Dùng .then().catch()
- Export default

---

## 🔧 HTTP CLIENT

```javascript
// apis/client.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
});

export default apiClient;
```

---

## 📚 TÀI LIỆU THAM KHẢO

- [Axios Documentation](https://axios-http.com/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
