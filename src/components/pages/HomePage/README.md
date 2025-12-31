# 🏠 HOMEPAGE COMPONENTS

Các component đã được tách từ file tổng thành các file riêng biệt để dễ quản lý và maintain.

---

## 📂 CẤU TRÚC FOLDER

```
src/components/pages/HomePage/
├── HeroSection.jsx                    ← Hero banner carousel (ĐÃ HOÀN THIỆN)
├── AboutUsSection.jsx                 ← 3 tính năng nổi bật
├── FeaturedProductsSection.jsx        ← Góc sức khỏe (blog articles)
├── HealthTipsSection.jsx              ← Form tư vấn sức khỏe
├── HealthCornerSection.jsx            ← Footer navigation links
├── RecommendedProductsSection.jsx     ← Form đăng ký email
├── SubscriptionFormSection.jsx        ← Thông tin công ty
├── UserTestimonialsSection.jsx        ← Carousel sản phẩm nổi bật
├── index.js                           ← Export tất cả components
└── README.md                          ← File này
```

---

## ✅ ĐÃ HOÀN THÀNH

### **HeroSection** ✅
- **Vị trí:** Top page
- **Chức năng:** Hero banner carousel với Embla
- **Trạng thái:** ✅ **HOÀN THIỆN - KHÔNG SỬA**
- **Features:**
  - Autoplay 2.5s
  - Loop infinite
  - Responsive aspect ratio 1370:420
  - Navigation buttons + dots

---

## ⚠️ CẦN XỬ LÝ

### **1. AboutUsSection**
- **File:** `AboutUsSection.jsx`
- **Vấn đề:**
  - ❌ Thiếu images: `/imgs/about/rectangle-45.png`, `rectangle-52.png`, `rectangle-54.png`
  - ❌ Sử dụng `absolute` positioning (cần refactor)
  - ❌ Chưa responsive
- **TODO:**
  - [ ] Thêm images vào `public/imgs/about/`
  - [ ] Refactor từ absolute → flexbox/grid
  - [ ] Thêm hover effects
  - [ ] Responsive design

### **2. FeaturedProductsSection**
- **File:** `FeaturedProductsSection.jsx`
- **Vấn đề:**
  - ❌ Thiếu images: `/imgs/health/rectangle-55.png`, `rectangle-56.png`, `rectangle-58.png`, `rectangle-59.png`, `rectangle-60.png`
  - ❌ Sử dụng `absolute` positioning
  - ❌ Icon components chưa có (ArrowRight, KeyboardArrowUp)
  - ❌ Chưa có routing thực
- **TODO:**
  - [ ] Thêm images vào `public/imgs/health/`
  - [ ] Tạo icon components
  - [ ] Refactor layout
  - [ ] Implement routing

### **3. HealthTipsSection**
- **File:** `HealthTipsSection.jsx`
- **Vấn đề:**
  - ❌ Form chưa có validation
  - ❌ Chưa connect API
  - ❌ Chưa có loading/success/error states
  - ❌ Sử dụng `absolute` positioning
- **TODO:**
  - [ ] Add form validation (react-hook-form hoặc zod)
  - [ ] Connect API endpoint
  - [ ] Add loading spinner
  - [ ] Add success/error messages
  - [ ] Refactor layout

### **4. HealthCornerSection**
- **File:** `HealthCornerSection.jsx`
- **Vấn đề:**
  - ❌ Thiếu logo: `/imgs/logo/group-14.png`
  - ❌ Links chưa có routing thực
  - ❌ Sử dụng `absolute` positioning
- **TODO:**
  - [ ] Thêm logo vào `public/imgs/logo/`
  - [ ] Implement routing cho tất cả links
  - [ ] Refactor layout
  - [ ] Responsive design

### **5. RecommendedProductsSection**
- **File:** `RecommendedProductsSection.jsx`
- **Vấn đề:**
  - ❌ Email subscription chưa có API
  - ❌ Chưa có validation
  - ❌ Chưa có loading/success states
  - ❌ Sử dụng `absolute` positioning
- **TODO:**
  - [ ] Implement email subscription API
  - [ ] Add email validation
  - [ ] Add loading/success/error states
  - [ ] Refactor layout

### **6. SubscriptionFormSection**
- **File:** `SubscriptionFormSection.jsx`
- **Vấn đề:**
  - ❌ Sử dụng `absolute` positioning
  - ❌ Chưa có schema.org markup (SEO)
- **TODO:**
  - [ ] Verify thông tin công ty
  - [ ] Add schema.org structured data
  - [ ] Refactor layout
  - [ ] Responsive design

### **7. UserTestimonialsSection**
- **File:** `UserTestimonialsSection.jsx`
- **Vấn đề:**
  - ❌ Thiếu images: `/imgs/products/rectangle-38.png`, `image.png`, `rectangle-38-2.png`, `rectangle-38-3.png`
  - ❌ Carousel chưa có functionality (prev/next)
  - ❌ Icon buttons chưa có
  - ❌ Chưa connect product data
  - ❌ Sử dụng `absolute` positioning
- **TODO:**
  - [ ] Thêm product images vào `public/imgs/products/`
  - [ ] Implement carousel với Embla hoặc Swiper
  - [ ] Tạo icon components
  - [ ] Connect product data từ API/mock
  - [ ] Refactor layout

---

## 🎯 PRIORITY

### **High Priority:**
1. **Thêm tất cả images** (blocking)
2. **Refactor absolute positioning** → flexbox/grid
3. **Implement carousel** cho UserTestimonialsSection
4. **Form validation** cho HealthTipsSection và RecommendedProductsSection

### **Medium Priority:**
5. **Tạo icon components** (ArrowRight, KeyboardArrowUp, etc.)
6. **Implement routing** cho tất cả links
7. **Connect APIs** cho forms

### **Low Priority:**
8. **Responsive design** cho tất cả components
9. **Hover effects** và animations
10. **SEO optimization** (schema.org, meta tags)

---

## 📦 IMAGES CẦN THÊM

### **About Section:**
```
public/imgs/about/
├── rectangle-45.png  (Chiết xuất dược liệu)
├── rectangle-52.png  (Phù hợp mọi đối tượng)
└── rectangle-54.png  (Dây chuyền GMP)
```

### **Health/Blog Section:**
```
public/imgs/health/
├── rectangle-55.png  (Main article)
├── rectangle-56.png  (Side article 1)
├── rectangle-58.png  (Side article 2)
├── rectangle-59.png  (Side article 3)
└── rectangle-60.png  (Side article 4)
```

### **Products Section:**
```
public/imgs/products/
├── rectangle-38.png    (Giải độc gan)
├── image.png           (D3 K2)
├── rectangle-38-2.png  (Thiên môn)
└── rectangle-38-3.png  (Sắt hữu cơ)
```

### **Logo:**
```
public/imgs/logo/
└── group-14.png  (Health Corner logo)
```

---

## 🔧 REFACTOR SUGGESTIONS

### **1. Layout System:**
```jsx
// ❌ HIỆN TẠI: Absolute positioning
<section className="absolute top-[1895px] left-[calc(50.00%_-_590px)] ...">

// ✅ NÊN: Flexbox/Grid
<section className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-3 gap-6">
    ...
  </div>
</section>
```

### **2. Responsive Design:**
```jsx
// ✅ Thêm responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### **3. Custom Fonts:**
```jsx
// ❌ HIỆN TẠI: Inline font-family
className="[font-family:'SVN-Gilroy-Bold',Helvetica]"

// ✅ NÊN: Tailwind config
// tailwind.config.js
fontFamily: {
  'gilroy-bold': ['SVN-Gilroy-Bold', 'Helvetica', 'sans-serif'],
  'gilroy-medium': ['SVN-Gilroy-Medium', 'Helvetica', 'sans-serif'],
}

// Usage
className="font-gilroy-bold"
```

### **4. Colors:**
```jsx
// ❌ HIỆN TẠI: Hardcoded colors
className="text-[#0db061]"

// ✅ NÊN: Tailwind colors (đã có)
className="text-vico-green"
```

---

## 📝 USAGE

### **Import tất cả:**
```jsx
import {
  HeroSection,
  AboutUsSection,
  FeaturedProductsSection,
  HealthTipsSection,
  HealthCornerSection,
  RecommendedProductsSection,
  SubscriptionFormSection,
  UserTestimonialsSection,
} from "@/components/pages/HomePage";
```

### **Import riêng lẻ:**
```jsx
import HeroSection from "@/components/pages/HomePage/HeroSection";
import AboutUsSection from "@/components/pages/HomePage/AboutUsSection";
```

### **Sử dụng trong page:**
```jsx
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <UserTestimonialsSection />
      <FeaturedProductsSection />
      <RecommendedProductsSection />
      <HealthTipsSection />
      <SubscriptionFormSection />
      <HealthCornerSection />
    </main>
  );
}
```

---

## ⚠️ LƯU Ý QUAN TRỌNG

1. **KHÔNG SỬA HeroSection** - Component này đã hoàn thiện và hoạt động tốt
2. **Tất cả components khác CẦN REFACTOR** - Hiện tại chỉ là tách code, chưa optimize
3. **Thiếu rất nhiều images** - Cần thêm vào trước khi test
4. **Absolute positioning** - Cần refactor sang flexbox/grid để responsive
5. **Forms chưa có validation** - Cần implement trước khi production
6. **APIs chưa connect** - Tất cả form submissions chỉ console.log
7. **Icons chưa có** - Cần tạo icon components hoặc dùng library (lucide-react)

---

## 🚀 NEXT STEPS

1. **Thêm images vào public/imgs/**
2. **Tạo icon components**
3. **Refactor layout từ absolute → flexbox/grid**
4. **Implement form validation**
5. **Connect APIs**
6. **Test responsive**
7. **Optimize performance**

---

**Good luck! 🍀**
