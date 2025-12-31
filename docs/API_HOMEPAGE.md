# 📄 API Documentation - Homepage (Trang Chủ)

Tài liệu này mô tả cấu trúc dữ liệu (Data Structure) và các API Endpoints cần thiết để phục vụ cho Trang Chủ (Homepage). Backend Developer có thể dựa vào đây để thiết kế Database và API Response.

---

## 1. Hero Section (Banner Chính)
*   **Mô tả:** Slider banner chạy ngang ở đầu trang.
*   **Method:** `GET`
*   **Endpoint:** `/api/v1/home/banners`

### Response Structure (JSON)
```json
[
  {
    "id": "banner-01",
    "imageUrl": "/uploads/banners/banner-tet-2025.webp", // Tỉ lệ 2.3:1
    "altText": "Chương trình khuyến mãi Tết 2025",
    "linkUrl": "/khuyen-mai/tet-2025",
    "order": 1,
    "isActive": true
  },
  {
    "id": "banner-02",
    "imageUrl": "/uploads/banners/san-pham-moi.webp",
    "altText": "Ra mắt dòng sản phẩm mới",
    "linkUrl": "/san-pham/dong-moi",
    "order": 2,
    "isActive": true
  }
]
```

---

## 2. About Us (Về Chúng Tôi)
*   **Mô tả:** Thông tin giới thiệu ngắn gọn và Slider hình ảnh hoạt động.
*   **Method:** `GET`
*   **Endpoint:** `/api/v1/home/about-us`

### Response Structure (JSON)
```json
{
  "title": "Gia đình Vicophar",
  "subtitle": "Về chúng tôi",
  "description": "<p>Vicophar được thành lập từ năm 2018...</p>", // HTML Content
  "ctaText": "Xem chi tiết",
  "ctaLink": "/ve-chung-toi",
  "images": [ // Carousel ảnh hoạt động
    {
      "id": "img-01",
      "url": "/uploads/about/team-building.webp",
      "alt": "Team building 2024"
    },
    {
      "id": "img-02",
      "url": "/uploads/about/nha-may.webp",
      "alt": "Nhà máy sản xuất"
    }
  ]
}
```

---

## 3. About Us Features (3 Điểm Nổi Bật)
*   **Mô tả:** 3 Card giới thiệu điểm mạnh (Nguyên liệu sạch, Phù hợp mọi đối tượng, Chuẩn GMP).
*   **Method:** `GET`
*   **Endpoint:** `/api/v1/home/features`

### Response Structure (JSON)
```json
[
  {
    "id": "feature-01",
    "title": "Chiết xuất dược liệu sạch",
    "iconUrl": "/uploads/icons/leaf.png",
    "backgroundImage": "/uploads/features/bg-feature-1.webp",
    "description": "Nguyên liệu đạt chuẩn TCCS..."
  },
  {
    "id": "feature-02",
    "title": "Phù hợp mọi đối tượng",
    "iconUrl": "/uploads/icons/family.png",
    "backgroundImage": "/uploads/features/bg-feature-2.webp",
    "description": "An toàn cho cả gia đình..."
  },
  {
    "id": "feature-03",
    "title": "Đạt chuẩn GMP",
    "iconUrl": "/uploads/icons/cert.png",
    "backgroundImage": "/uploads/features/bg-feature-3.webp",
    "description": "Dây chuyền sản xuất hiện đại..."
  }
]
```

---

## 4. Featured Products (Sản Phẩm Nổi Bật)
*   **Mô tả:** Danh sách sản phẩm theo tab (Nổi bật, Trẻ em, Gan tim, Hô hấp).
*   **Method:** `GET`
*   **Endpoint:** `/api/v1/products/featured`
*   **Query Params:** `?category=all` hoặc `?category=kids`

### Response Structure (JSON)
```json
[
  {
    "id": "prod-123",
    "name": "Siro Ho Vicophar",
    "slug": "siro-ho-vicophar",
    "category": "respiratory", // Danh mục
    "thumbnailUrl": "/uploads/products/siro-ho.webp",
    "price": 150000,
    "originalPrice": 180000, // Giá gốc (nếu có giảm giá)
    "isNew": true, // Badge Mới
    "isBestSeller": true, // Badge Bán chạy
    "rating": 4.8,
    "reviewCount": 120
  }
]
```

---

## 5. Health Corner (Góc Sức Khỏe)
*   **Mô tả:** Bài viết nổi bật và danh sách bài viết mới nhất.
*   **Method:** `GET`
*   **Endpoint:** `/api/v1/posts/featured`

### Response Structure (JSON)
```json
{
  "featuredPost": {
    "id": "post-99",
    "title": "Cách phòng ngừa cảm cúm mùa lạnh",
    "slug": "cach-phong-ngua-cam-cum",
    "thumbnailUrl": "/uploads/posts/cam-cum.webp",
    "excerpt": "Những lưu ý quan trọng để bảo vệ sức khỏe...",
    "publishedAt": "2024-12-01T08:00:00Z"
  },
  "latestPosts": [
    {
      "id": "post-98",
      "title": "Thực phẩm tốt cho gan",
      "slug": "thuc-pham-tot-cho-gan",
      "thumbnailUrl": "/uploads/posts/gan.webp",
      "excerpt": "Top 5 loại thực phẩm..."
    }
    // ... thêm 3 bài nữa
  ]
}
```

---

## 6. Newsletter (Đăng Ký Nhận Tin)
*   **Mô tả:** Form đăng ký email ở footer/section.
*   **Method:** `POST`
*   **Endpoint:** `/api/v1/newsletter/subscribe`

### Request Body (JSON)
```json
{
  "email": "user@example.com",
  "source": "homepage"
}
```

### Response (JSON)
```json
{
  "success": true,
  "message": "Đăng ký thành công! Vui lòng kiểm tra email."
}
```

---

## 7. Contact Form (Liên Hệ Tư Vấn)
*   **Mô tả:** Form điền thông tin tư vấn.
*   **Method:** `POST`
*   **Endpoint:** `/api/v1/contact/submit`

### Request Body (JSON)
```json
{
  "fullName": "Nguyễn Văn A",
  "phone": "0901234567",
  "email": "a@example.com", // Optional
  "content": "Tôi cần tư vấn về sản phẩm gan...",
  "type": "consultation" // consultation | collaboration
}
```

### Response (JSON)
```json
{
  "success": true,
  "message": "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất."
}
```
