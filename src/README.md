# 📁 THƯ MỤC SRC - VICOPHAR VIETNAM FRONTEND

## 📋 TỔNG QUAN

Thư mục `src/` chứa toàn bộ source code của ứng dụng Vicophar Vietnam Frontend. Đây là nơi tập trung tất cả logic, components, styles và assets của dự án.

---

## 🗂️ CẤU TRÚC THƯ MỤC

```
src/
├── app/              # Next.js App Router - Pages, Layouts, Routes
├── components/       # React Components tái sử dụng
├── assets/          # Tài nguyên tĩnh (icons, images, fonts)
├── styles/          # CSS Modules & Global Styles
├── apis/            # API calls & HTTP services
├── hooks/           # Custom React Hooks
├── utils/           # Utility functions & helpers
├── libs/            # Third-party libraries configuration
└── configs/         # Application configurations
```

---

## 📂 MÔ TẢ CHI TIẾT TỪNG THƯ MỤC

### 1️⃣ **app/** - Next.js App Router
**Mục đích:** Quản lý routing, layouts và pages của ứng dụng

**Nội dung:**
- `layout.js` - Root layout cho toàn bộ app
- `page.js` - Trang chủ (Home page)
- `fonts/` - Quản lý fonts (SVN-Gilroy, Be Vietnam Pro)
- Các route pages khác sẽ được thêm vào đây

**Quy tắc:**
- Mỗi folder là một route
- File `page.js` là component hiển thị của route đó
- File `layout.js` wrap các pages con
- Metadata SEO được định nghĩa trong mỗi page

**Xem thêm:** [app/README.md](./app/README.md)

---

### 2️⃣ **components/** - React Components
**Mục đích:** Chứa các React components tái sử dụng

**Cấu trúc đề xuất:**
```
components/
├── Layout/           # Header, Footer, Sidebar
├── Common/          # Button, Input, Card, Modal
├── Features/        # Components theo tính năng cụ thể
│   ├── SanPham/    # Components liên quan sản phẩm
│   ├── GioHang/    # Components giỏ hàng
│   └── NguoiDung/  # Components người dùng
└── Forms/          # Form components
```

**Quy tắc:**
- Mỗi component nên có file README.md riêng
- Tên component viết PascalCase (VD: `DanhSachSanPham.js`)
- Props phải được document rõ ràng
- Sử dụng PropTypes hoặc TypeScript

**Xem thêm:** [components/README.md](./components/README.md)

---

### 3️⃣ **assets/** - Tài nguyên tĩnh
**Mục đích:** Lưu trữ icons, images, fonts và các tài nguyên tĩnh

**Cấu trúc:**
```
assets/
├── icons/          # SVG icons components
├── images/         # Hình ảnh (sẽ thêm sau)
└── fonts/          # Custom fonts (nếu cần)
```

**Quy tắc:**
- Icons được export dưới dạng React components
- Images nên optimize trước khi thêm vào
- Sử dụng Next.js Image component để load images
- File `index.js` để export tập trung

**Xem thêm:** [assets/README.md](./assets/README.md)

---

### 4️⃣ **styles/** - CSS & Styling
**Mục đích:** Quản lý global styles, CSS variables và utilities

**Files:**
- `globals.css` - Import TailwindCSS và các CSS modules
- `base.css` - Base styles, reset CSS
- `components.css` - Component-specific styles
- `utilities.css` - Utility classes tùy chỉnh

**Quy tắc:**
- Ưu tiên sử dụng TailwindCSS classes
- CSS variables được định nghĩa trong `tailwind.config.js`
- Tránh inline styles
- Sử dụng CSS Modules cho component-specific styles

**Xem thêm:** [styles/README.md](./styles/README.md)

---

### 5️⃣ **apis/** - API Services
**Mục đích:** Quản lý các API calls và HTTP requests

**Cấu trúc đề xuất:**
```
apis/
├── sanpham.api.js      # API sản phẩm
├── nguoidung.api.js    # API người dùng
├── giohang.api.js      # API giỏ hàng
├── donhang.api.js      # API đơn hàng
└── client.js           # Axios/Fetch client config
```

**Quy tắc:**
- Mỗi file API tương ứng với một resource
- Sử dụng async/await
- Xử lý errors đầy đủ
- Document rõ ràng params và return types

**Ví dụ:**
```javascript
/**
 * Lấy danh sách sản phẩm
 * @param {Object} filters - Bộ lọc
 * @returns {Promise<Array>} Danh sách sản phẩm
 */
export async function layDanhSachSanPham(filters = {}) {
    try {
        const response = await fetch('/api/san-pham', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json();
    } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
        throw error;
    }
}
```

**Xem thêm:** [apis/README.md](./apis/README.md)

---

### 6️⃣ **hooks/** - Custom React Hooks
**Mục đích:** Tạo các custom hooks để tái sử dụng logic

**Ví dụ hooks:**
```
hooks/
├── useFetch.js         # Hook fetch data
├── useLocalStorage.js  # Hook lưu localStorage
├── useDebounce.js      # Hook debounce input
├── useAuth.js          # Hook authentication
└── useGioHang.js       # Hook quản lý giỏ hàng
```

**Quy tắc:**
- Tên hook bắt đầu bằng `use`
- Mỗi hook nên có một trách nhiệm duy nhất
- Document rõ ràng parameters và return values
- Viết unit tests cho hooks

**Ví dụ:**
```javascript
/**
 * Hook fetch dữ liệu từ API
 * @param {string} url - API endpoint
 * @returns {Object} { data, loading, error }
 */
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Logic fetch data
    }, [url]);

    return { data, loading, error };
}
```

**Xem thêm:** [hooks/README.md](./hooks/README.md)

---

### 7️⃣ **utils/** - Utility Functions
**Mục đích:** Chứa các helper functions và utilities

**Ví dụ utilities:**
```
utils/
├── format.js           # Format số, tiền, ngày tháng
├── validation.js       # Validate form, email, phone
├── constants.js        # Hằng số ứng dụng
├── helpers.js          # Helper functions chung
└── storage.js          # LocalStorage/SessionStorage helpers
```

**Quy tắc:**
- Functions phải pure (không side effects)
- Mỗi function làm một việc cụ thể
- Document rõ ràng input/output
- Viết unit tests

**Ví dụ:**
```javascript
/**
 * Format số tiền theo định dạng Việt Nam
 * @param {number} amount - Số tiền
 * @returns {string} Số tiền đã format (VD: "1.000.000 ₫")
 */
export function formatTien(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}
```

**Xem thêm:** [utils/README.md](./utils/README.md)

---

### 8️⃣ **libs/** - Third-party Libraries Config
**Mục đích:** Cấu hình các thư viện bên thứ 3

**Ví dụ:**
```
libs/
├── axios.js            # Axios configuration
├── firebase.js         # Firebase config
├── analytics.js        # Google Analytics
└── sentry.js           # Error tracking
```

**Quy tắc:**
- Tập trung config ở một nơi
- Sử dụng environment variables
- Không commit API keys lên Git

**Xem thêm:** [libs/README.md](./libs/README.md)

---

### 9️⃣ **configs/** - Application Configs
**Mục đích:** Cấu hình ứng dụng

**Ví dụ:**
```
configs/
├── routes.js           # Định nghĩa routes
├── menu.js             # Menu navigation
├── seo.js              # SEO defaults
└── app.config.js       # App settings
```

**Quy tắc:**
- Tách biệt config khỏi logic
- Dễ dàng thay đổi mà không ảnh hưởng code
- Document rõ ràng từng config

**Xem thêm:** [configs/README.md](./configs/README.md)

---

## 🚀 WORKFLOW LÀM VIỆC

### **Khi thêm feature mới:**

1. **Xác định feature thuộc phần nào:**
   - UI Component → `components/`
   - API call → `apis/`
   - Logic tái sử dụng → `hooks/`
   - Helper function → `utils/`

2. **Tạo files cần thiết:**
   ```bash
   # Ví dụ: Thêm feature "Danh sách sản phẩm"
   src/
   ├── components/Features/SanPham/
   │   ├── DanhSachSanPham.js
   │   └── README.md
   ├── apis/
   │   └── sanpham.api.js
   └── hooks/
       └── useSanPham.js
   ```

3. **Viết code theo chuẩn:**
   - Tuân thủ naming conventions
   - Thêm comments tiếng Việt
   - Document đầy đủ

4. **Test kỹ lưỡng:**
   - Test trên nhiều devices
   - Test performance
   - Test edge cases

---

## 📝 NAMING CONVENTIONS

### **Files:**
- Components: `PascalCase.js` (VD: `DanhSachSanPham.js`)
- Utilities: `camelCase.js` (VD: `formatTien.js`)
- Hooks: `useCamelCase.js` (VD: `useFetch.js`)
- APIs: `camelCase.api.js` (VD: `sanpham.api.js`)

### **Folders:**
- `PascalCase` cho component folders
- `lowercase` cho utility folders

---

## ⚠️ LƯU Ý QUAN TRỌNG

1. **Không hard-code:**
   - API URLs → Dùng environment variables
   - Màu sắc → Dùng Tailwind variables
   - Text → Dùng i18n (nếu có)

2. **Performance:**
   - Lazy load components lớn
   - Optimize images
   - Code splitting

3. **Security:**
   - Không commit `.env` files
   - Validate user inputs
   - Sanitize data trước khi render

4. **Accessibility:**
   - Sử dụng semantic HTML
   - Thêm alt text cho images
   - Keyboard navigation

---

## 🔗 LIÊN KẾT THAM KHẢO

- [AI Rules](../AI_RULES.md) - Quy tắc cho AI
- [Root README](../README.md) - Hướng dẫn setup dự án
- [Tailwind Config](../tailwind.config.js) - Cấu hình Tailwind

---

## 📞 HỖ TRỢ

Nếu có thắc mắc về cấu trúc thư mục, liên hệ team lead hoặc xem thêm tài liệu trong từng thư mục con.
