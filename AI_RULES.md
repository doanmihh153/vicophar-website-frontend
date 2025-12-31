# HƯỚNG DẪN CHO AI - DỰ ÁN VICOPHAR VIETNAM FRONTEND

## 📋 THÔNG TIN DỰ ÁN

**Tên dự án:** Vicophar Vietnam Frontend  
**Framework:** Next.js 16.0.1 (App Router)  
**React Version:** 19.2.0  
**Styling:** TailwindCSS v4.1.16  
**Package Manager:** pnpm  
**Ngôn ngữ:** Tiếng Việt (Vietnamese)

---

## 🎯 MỤC ĐÍCH DỰ ÁN

Website thương mại điện tử cho công ty dược mỹ phẩm Vicophar - chuyên về sản phẩm chăm sóc sức khỏe từ thiên nhiên tại Việt Nam.

---

## 📁 CẤU TRÚC THỨ MỤC

```
vicophar-vietnam-fe/
├── src/
│   ├── app/              # Next.js App Router - Pages & Layouts
│   ├── components/       # React Components tái sử dụng
│   ├── assets/          # Tài nguyên tĩnh (icons, images)
│   ├── styles/          # CSS Modules & Global Styles
│   ├── apis/            # API calls & services
│   ├── hooks/           # Custom React Hooks
│   ├── utils/           # Utility functions
│   ├── libs/            # Third-party libraries config
│   └── configs/         # App configurations
├── public/              # Static files
└── [config files]       # Root config files
```

---

## 🚨 QUY TẮC QUAN TRỌNG KHI LÀM VIỆC

### 1. **NGÔN NGỮ**
- ✅ **BẮT BUỘC:** Tất cả comments, tên biến, tên hàm, README phải bằng **TIẾNG VIỆT**
- ✅ Nội dung hiển thị trên UI phải bằng tiếng Việt
- ✅ Metadata SEO phải bằng tiếng Việt
- ❌ KHÔNG dùng tiếng Anh trong comments hoặc documentation

### 2. **CODING STANDARDS**

#### **Naming Conventions:**
```javascript
// ✅ ĐÚNG - Tiếng Việt có dấu
const danhSachSanPham = [];
const layThongTinNguoiDung = () => {};
const TrangChuComponent = () => {};

// ❌ SAI - Tiếng Anh
const productList = [];
const getUserInfo = () => {};
```

#### **Component Structure:**
```javascript
// ✅ ĐÚNG - Component chuẩn
"use client"; // Nếu cần client-side

import { useState } from "react";

/**
 * Component hiển thị danh sách sản phẩm
 * @param {Array} danhSach - Mảng sản phẩm
 */
export default function DanhSachSanPham({ danhSach }) {
    const [dangTai, setDangTai] = useState(false);
    
    return (
        <div className="container">
            {/* Nội dung component */}
        </div>
    );
}
```

### 3. **TAILWIND CSS RULES**

#### **Sử dụng CSS Variables:**
```javascript
// ✅ ĐÚNG - Dùng variables từ tailwind.config.js
<div className="bg-green-primary text-text-primary">

// ❌ SAI - Hard-code màu
<div className="bg-[#00A551] text-[#333333]">
```

#### **Responsive Design:**
```javascript
// ✅ ĐÚNG - Dùng breakpoints custom
<div className="w-full tablet:w-1/2 desktop:w-1/3">

// Breakpoints:
// - mobile: < 768px (default)
// - tablet: >= 768px
// - desktop: >= 1040px
// - wide: >= 1280px
```

### 4. **FONT SYSTEM**

```javascript
// Font chính: SVN-Gilroy (Local Font)
// Font dự phòng: Be Vietnam Pro (Google Font)

// Sử dụng trong CSS:
font-family: var(--font-svn-gilroy), var(--font-be-vietnam), sans-serif;

// Trong Tailwind:
<h1 className="font-[family-name:var(--font-svn-gilroy)]">
```

### 5. **FILE & FOLDER ORGANIZATION**

#### **Components:**
```
src/components/
├── Layout/
│   ├── Header/
│   │   ├── Header.js
│   │   └── README.md
│   └── Footer/
├── Common/           # Components dùng chung
└── Features/         # Components theo tính năng
```

#### **API Calls:**
```javascript
// src/apis/sanpham.api.js
/**
 * Lấy danh sách sản phẩm từ API
 * @returns {Promise<Array>}
 */
export async function layDanhSachSanPham() {
    const response = await fetch('/api/san-pham');
    return response.json();
}
```

### 6. **STATE MANAGEMENT**

```javascript
// ✅ ĐÚNG - Tên state rõ ràng
const [danhSachSanPham, setDanhSachSanPham] = useState([]);
const [dangTaiDuLieu, setDangTaiDuLieu] = useState(false);
const [loi, setLoi] = useState(null);

// ❌ SAI - Tên state không rõ ràng
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
```

### 7. **ERROR HANDLING**

```javascript
// ✅ ĐÚNG - Xử lý lỗi đầy đủ
try {
    const duLieu = await layDanhSachSanPham();
    setDanhSachSanPham(duLieu);
} catch (loi) {
    console.error('Lỗi khi tải sản phẩm:', loi);
    setLoi('Không thể tải danh sách sản phẩm. Vui lòng thử lại.');
}
```

### 8. **PERFORMANCE OPTIMIZATION**

```javascript
// ✅ Sử dụng dynamic import cho components lớn
const BanDoComponent = dynamic(() => import('@/components/BanDo'), {
    loading: () => <p>Đang tải bản đồ...</p>,
    ssr: false
});

// ✅ Sử dụng Image component của Next.js
import Image from 'next/image';

<Image 
    src="/images/san-pham.jpg"
    alt="Sản phẩm Vicophar"
    width={500}
    height={300}
    loading="lazy"
/>
```

---

## 🔧 COMMANDS QUAN TRỌNG

```bash
# Development
pnpm dev              # Chạy dev server (port 3000)

# Build & Production
pnpm build           # Build production
pnpm start           # Chạy production server

# Code Quality
pnpm lint            # Chạy ESLint
```

---

## 📝 GIT COMMIT CONVENTIONS

```bash
# Format: [TYPE] Mô tả ngắn gọn bằng tiếng Việt

[FEAT] Thêm trang danh sách sản phẩm
[FIX] Sửa lỗi hiển thị giỏ hàng
[STYLE] Cập nhật màu sắc header
[REFACTOR] Tối ưu component DanhSachSanPham
[DOCS] Cập nhật README cho folder components
[TEST] Thêm test cho API sản phẩm
```

---

## 🎨 DESIGN SYSTEM

### **Màu sắc chính:**
- **Green Primary:** `#00A551` - Màu xanh lá chính của brand
- **Green Header:** `#006838` - Màu header
- **Red Primary:** `#E92629` - Màu nhấn mạnh
- **Blue Primary:** `#02509E` - Màu phụ

### **Typography:**
- **Font chính:** SVN-Gilroy (400, 500, 600, 700)
- **Font dự phòng:** Be Vietnam Pro
- **Font sizes:** Sử dụng từ `tailwind.config.js`

### **Spacing:**
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

---

## 🚀 WORKFLOW KHI THÊM FEATURE MỚI

1. **Tạo branch mới:**
   ```bash
   git checkout -b feature/ten-tinh-nang
   ```

2. **Tạo component:**
   - Tạo folder trong `src/components/`
   - Tạo file component chính
   - Tạo file `README.md` giải thích component

3. **Viết code:**
   - Tuân thủ naming conventions
   - Thêm comments tiếng Việt
   - Sử dụng TypeScript nếu có thể

4. **Test:**
   - Test trên nhiều breakpoints
   - Test performance
   - Test accessibility

5. **Commit & Push:**
   ```bash
   git add .
   git commit -m "[FEAT] Mô tả tính năng"
   git push origin feature/ten-tinh-nang
   ```

---

## ⚠️ NHỮNG ĐIỀU TUYỆT ĐỐI KHÔNG LÀM

❌ **KHÔNG** hard-code màu sắc, spacing  
❌ **KHÔNG** dùng inline styles  
❌ **KHÔNG** commit file `.env` lên Git  
❌ **KHÔNG** dùng `any` type trong TypeScript  
❌ **KHÔNG** bỏ qua error handling  
❌ **KHÔNG** viết comments bằng tiếng Anh  
❌ **KHÔNG** tạo component quá lớn (> 300 dòng)  
❌ **KHÔNG** import toàn bộ library (tree-shaking)  

---

## 📚 TÀI LIỆU THAM KHẢO

- **Next.js 16:** https://nextjs.org/docs
- **React 19:** https://react.dev
- **TailwindCSS v4:** https://tailwindcss.com/docs
- **Vicophar Brand Guidelines:** [Link nội bộ]

---

## 🤝 HỖ TRỢ

Nếu có thắc mắc, liên hệ:
- **Team Lead:** [Tên người phụ trách]
- **Hotline:** 0333 152 545
- **Email:** support@vicophar.com

---

## 📌 LƯU Ý CUỐI CÙNG

> **Dự án này ưu tiên:**
> 1. **Trải nghiệm người dùng** (UX)
> 2. **Performance** (Tốc độ tải trang)
> 3. **SEO** (Tối ưu công cụ tìm kiếm)
> 4. **Accessibility** (Khả năng tiếp cận)
> 5. **Code Quality** (Chất lượng code)

**Mọi thay đổi phải đảm bảo 5 tiêu chí trên!**
