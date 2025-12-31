# 📁 THƯ MỤC APP - NEXT.JS APP ROUTER

## 📋 TỔNG QUAN

Thư mục `app/` là trung tâm của Next.js App Router, quản lý toàn bộ routing, layouts và pages của ứng dụng Vicophar Vietnam Frontend.

---

## 🗂️ CẤU TRÚC HIỆN TẠI

```
app/
├── layout.js          # Root layout cho toàn bộ ứng dụng
├── page.js            # Trang chủ (Home page)
├── favicon.ico        # Icon của website
└── fonts/            # Quản lý fonts
    ├── index.js      # Export fonts configuration
    ├── SVN-Gilroy.woff2
    ├── SVN-GilroyBold.woff2
    ├── SVN-GilroyBoldItalic.woff2
    ├── SVN-GilroyItalic.woff2
    ├── SVN-GilroyMedium.woff2
    ├── SVN-GilroyMediumItalic.woff2
    ├── SVN-GilroySemiBold.woff2
    └── SVN-GilroySemiBoldItalic.woff2
```

---

## 📄 MÔ TẢ CHI TIẾT CÁC FILES

### 1️⃣ **layout.js** - Root Layout

**Mục đích:** Layout gốc bao bọc toàn bộ ứng dụng

**Chức năng:**
- Định nghĩa HTML structure cơ bản
- Load fonts (SVN-Gilroy, Be Vietnam Pro)
- Thiết lập metadata SEO mặc định
- Cấu hình ngôn ngữ (vi-VN)

**Code hiện tại:**
```javascript
import "@/styles/globals.css";
import { svnGilroy, beVietnamPro } from "@/app/fonts/index";

export const metadata = {
    title: {
        default: "Vicophar - Dược Mỹ Phẩm Thiên Nhiên Việt Nam | Chăm Sóc Sức Khỏe Toàn Diện",
        template: "%s | Vicophar",
    },
    description: "Vicophar - Thương hiệu dược mỹ phẩm hàng đầu Việt Nam...",
};

export default function RootLayout({ children }) {
    return (
        <html lang="vi-VN">
            <body className={`${svnGilroy.variable} ${beVietnamPro.variable}`}>
                <main role="main" className="min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
```

**Lưu ý:**
- ✅ Metadata được export riêng để Next.js tự động generate meta tags
- ✅ Fonts được load thông qua CSS variables
- ✅ Semantic HTML với `<main role="main">`
- ⚠️ Khi thêm providers (Redux, Context), wrap ở đây

---

### 2️⃣ **page.js** - Trang Chủ

**Mục đích:** Component hiển thị trang chủ

**Code hiện tại:**
```javascript
"use client";

export default function Home() {
    return <>Xin chào</>;
}
```

**Trạng thái:** 🚧 Đang phát triển

**Kế hoạch phát triển:**
- [ ] Thêm Hero section
- [ ] Danh sách sản phẩm nổi bật
- [ ] Banner quảng cáo
- [ ] Testimonials
- [ ] Footer

**Lưu ý:**
- ✅ Đã khai báo `"use client"` để sử dụng client-side features
- ⚠️ Cần thêm SEO metadata riêng cho trang này

---

### 3️⃣ **fonts/** - Quản Lý Fonts

**Xem chi tiết:** [fonts/README.md](./fonts/README.md)

**Tóm tắt:**
- **Font chính:** SVN-Gilroy (Local font) - 4 weights (400, 500, 600, 700)
- **Font dự phòng:** Be Vietnam Pro (Google Font)
- **Format:** WOFF2 (tối ưu cho web)
- **Loading strategy:** `swap` (hiển thị fallback font trước)

---

## 🚀 ROUTING TRONG NEXT.JS APP ROUTER

### **Cách hoạt động:**

```
app/
├── page.js                    → /
├── san-pham/
│   ├── page.js               → /san-pham
│   └── [id]/
│       └── page.js           → /san-pham/[id]
├── gio-hang/
│   └── page.js               → /gio-hang
└── lien-he/
    └── page.js               → /lien-he
```

### **Các loại files đặc biệt:**

| File | Mục đích | Ví dụ |
|------|----------|-------|
| `page.js` | Component hiển thị của route | Trang chủ, Sản phẩm |
| `layout.js` | Layout bao bọc các pages con | Header, Footer |
| `loading.js` | UI hiển thị khi đang load | Skeleton, Spinner |
| `error.js` | UI hiển thị khi có lỗi | Error boundary |
| `not-found.js` | UI cho 404 page | Trang không tìm thấy |

---

## 📝 HƯỚNG DẪN THÊM PAGE MỚI

### **Ví dụ: Thêm trang "Giới thiệu"**

1. **Tạo folder và file:**
   ```bash
   app/
   └── gioi-thieu/
       ├── page.js
       └── layout.js (optional)
   ```

2. **Viết code cho page.js:**
   ```javascript
   // app/gioi-thieu/page.js
   import { Metadata } from 'next';

   export const metadata = {
       title: 'Giới thiệu về Vicophar',
       description: 'Tìm hiểu về lịch sử và sứ mệnh của Vicophar',
   };

   export default function GioiThieuPage() {
       return (
           <div className="container mx-auto py-8">
               <h1 className="text-3xl font-bold">Giới thiệu Vicophar</h1>
               {/* Nội dung trang */}
           </div>
       );
   }
   ```

3. **Truy cập:** `http://localhost:3000/gioi-thieu`

---

## 🎨 METADATA & SEO

### **Metadata mặc định (layout.js):**
```javascript
export const metadata = {
    title: {
        default: "Vicophar - Dược Mỹ Phẩm Thiên Nhiên Việt Nam",
        template: "%s | Vicophar", // Tự động thêm " | Vicophar"
    },
    description: "Mô tả mặc định...",
};
```

### **Metadata cho từng page:**
```javascript
// app/san-pham/page.js
export const metadata = {
    title: 'Sản phẩm', // Sẽ thành "Sản phẩm | Vicophar"
    description: 'Danh sách sản phẩm Vicophar',
    keywords: ['dược mỹ phẩm', 'vicophar', 'sản phẩm'],
    openGraph: {
        title: 'Sản phẩm Vicophar',
        description: 'Khám phá các sản phẩm chất lượng',
        images: ['/images/og-san-pham.jpg'],
    },
};
```

### **Dynamic metadata:**
```javascript
// app/san-pham/[id]/page.js
export async function generateMetadata({ params }) {
    const sanPham = await laySanPham(params.id);
    
    return {
        title: sanPham.ten,
        description: sanPham.moTa,
    };
}
```

---

## 🔄 LOADING & ERROR STATES

### **Loading UI:**
```javascript
// app/san-pham/loading.js
export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-primary"></div>
        </div>
    );
}
```

### **Error UI:**
```javascript
// app/san-pham/error.js
'use client';

export default function Error({ error, reset }) {
    return (
        <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-red-primary">Có lỗi xảy ra!</h2>
            <p className="mt-4">{error.message}</p>
            <button 
                onClick={reset}
                className="mt-4 px-6 py-2 bg-green-primary text-white rounded"
            >
                Thử lại
            </button>
        </div>
    );
}
```

---

## 🎯 BEST PRACTICES

### ✅ **NÊN LÀM:**

1. **Sử dụng Server Components mặc định:**
   ```javascript
   // Không cần "use client" nếu không dùng hooks/events
   export default function SanPhamPage() {
       return <div>Danh sách sản phẩm</div>;
   }
   ```

2. **Client Components khi cần:**
   ```javascript
   // Chỉ dùng "use client" khi cần useState, useEffect, onClick...
   "use client";
   import { useState } from 'react';
   
   export default function GioHang() {
       const [soLuong, setSoLuong] = useState(1);
       // ...
   }
   ```

3. **Tách metadata ra:**
   ```javascript
   // ✅ ĐÚNG
   export const metadata = { title: 'Trang chủ' };
   export default function Home() { /* ... */ }
   
   // ❌ SAI - Không set metadata trong component
   ```

4. **Sử dụng layout cho shared UI:**
   ```javascript
   // app/san-pham/layout.js
   export default function SanPhamLayout({ children }) {
       return (
           <div>
               <SanPhamSidebar />
               <div className="content">{children}</div>
           </div>
       );
   }
   ```

### ❌ **KHÔNG NÊN:**

1. ❌ Dùng `"use client"` cho tất cả components
2. ❌ Fetch data trong component (dùng Server Components)
3. ❌ Hard-code URLs (dùng Link component)
4. ❌ Bỏ qua metadata SEO

---

## 🔗 NAVIGATION

### **Sử dụng Link component:**
```javascript
import Link from 'next/link';

<Link href="/san-pham" className="text-green-primary hover:underline">
    Sản phẩm
</Link>
```

### **Programmatic navigation:**
```javascript
'use client';
import { useRouter } from 'next/navigation';

export default function Component() {
    const router = useRouter();
    
    const handleClick = () => {
        router.push('/san-pham');
    };
    
    return <button onClick={handleClick}>Xem sản phẩm</button>;
}
```

---

## 📊 KẾ HOẠCH PHÁT TRIỂN

### **Routes cần thêm:**

```
app/
├── ✅ page.js (Trang chủ)
├── 🚧 san-pham/
│   ├── page.js (Danh sách sản phẩm)
│   ├── [id]/page.js (Chi tiết sản phẩm)
│   └── [slug]/page.js (SEO-friendly URL)
├── 🚧 gio-hang/
│   └── page.js (Giỏ hàng)
├── 🚧 thanh-toan/
│   └── page.js (Thanh toán)
├── 🚧 tai-khoan/
│   ├── page.js (Thông tin tài khoản)
│   ├── don-hang/page.js (Đơn hàng)
│   └── dia-chi/page.js (Địa chỉ)
├── 🚧 gioi-thieu/
│   └── page.js (Giới thiệu)
├── 🚧 lien-he/
│   └── page.js (Liên hệ)
└── 🚧 tin-tuc/
    ├── page.js (Danh sách tin tức)
    └── [slug]/page.js (Chi tiết bài viết)
```

**Chú thích:**
- ✅ Đã hoàn thành
- 🚧 Đang phát triển
- ⏳ Chưa bắt đầu

---

## 🔍 DEBUGGING

### **Kiểm tra routing:**
```bash
# Xem tất cả routes
pnpm dev

# Mở browser console → Network tab
# Kiểm tra các requests và responses
```

### **Common issues:**

1. **404 Not Found:**
   - Kiểm tra tên folder/file có đúng không
   - Đảm bảo có file `page.js` trong folder

2. **Metadata không hiển thị:**
   - Chỉ export metadata ở Server Components
   - Không export metadata trong Client Components

3. **Fonts không load:**
   - Kiểm tra path trong `fonts/index.js`
   - Đảm bảo fonts được import trong `layout.js`

---

## 📚 TÀI LIỆU THAM KHẢO

- [Next.js App Router](https://nextjs.org/docs/app)
- [Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Loading UI](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)

---

## 📞 HỖ TRỢ

Nếu có thắc mắc về App Router, xem thêm:
- [Root README](../../README.md)
- [AI Rules](../../AI_RULES.md)
- [Fonts README](./fonts/README.md)
