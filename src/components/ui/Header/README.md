# Header Components - Vicophar

Thư mục này chứa tất cả các components liên quan đến Header của website Vicophar.

## 📁 Cấu Trúc Thư Mục

```
Header/
├── ActionButtons/          # Các nút hành động (Đăng nhập, Giỏ hàng)
│   ├── ActionButtons.js    # Component chính - wrapper cho các buttons
│   ├── LoginButton.js      # Nút đăng nhập
│   ├── CartButton.js       # Nút giỏ hàng với badge
│   └── index.js           # Export file
│
├── Logo/                   # Logo Vicophar
│   ├── Logo.js            # Component logo
│   └── index.js           # Export file
│
├── SearchForm/            # Form tìm kiếm
│   ├── SearchForm.js      # Component chính - logic tìm kiếm
│   ├── SuggestionsList.js # Component hiển thị gợi ý
│   └── index.js           # Export file
│
└── Container/             # Container wrapper
    ├── Container.js       # Component container
    └── index.js           # Export file
```

## 🎯 Components Chi Tiết

### 1. ActionButtons

**Mục đích:** Chứa các nút hành động ở phía bên phải header

**Sub-components:**
- `LoginButton.js` - Nút đăng nhập
- `CartButton.js` - Nút giỏ hàng với badge số lượng

**Props:**
```javascript
<ActionButtons cartCount={5} />
```

**Lý do tách riêng:**
- ✅ Dễ bảo trì từng button riêng biệt
- ✅ Có thể tái sử dụng LoginButton/CartButton ở nơi khác
- ✅ Logic rõ ràng, không bị phức tạp

---

### 2. SearchForm

**Mục đích:** Form tìm kiếm với auto-suggestions

**Sub-components:**
- `SuggestionsList.js` - Hiển thị danh sách gợi ý tìm kiếm

**Props:**
```javascript
<SearchForm className="custom-class" />
```

**Features:**
- Auto-suggestions khi nhập
- Keyboard navigation (ArrowUp/Down, Enter, Escape)
- Input validation
- Clear button
- Click outside detection

**Lý do tách SuggestionsList:**
- ✅ Logic hiển thị gợi ý tách biệt khỏi logic tìm kiếm
- ✅ Dễ update UI của suggestions
- ✅ Có thể tái sử dụng cho các dropdown khác
- ✅ Code SearchForm.js gọn gàng hơn

---

### 3. Logo

**Mục đích:** Hiển thị logo Vicophar, link về trang chủ

**Props:**
```javascript
<Logo className="custom-class" />
```

---

### 4. Container

**Mục đích:** Wrapper container cho header với max-width và padding

**Props:**
```javascript
<Container>
  {children}
</Container>
```

---

## 🔧 Cách Sử Dụng

### Import Components

```javascript
// Import từ folder chính
import ActionButtons from '@/components/ui/Header/ActionButtons';
import SearchForm from '@/components/ui/Header/SearchForm';
import Logo from '@/components/ui/Header/Logo';

// Import sub-components (nếu cần dùng riêng)
import LoginButton from '@/components/ui/Header/ActionButtons/LoginButton';
import CartButton from '@/components/ui/Header/ActionButtons/CartButton';
import SuggestionsList from '@/components/ui/Header/SearchForm/SuggestionsList';
```

### Sử Dụng Trong Layout

```javascript
function HeaderLayout({ cartCount = 0 }) {
    return (
        <header>
            <Container>
                <Logo />
                <SearchForm />
                <ActionButtons cartCount={cartCount} />
            </Container>
        </header>
    );
}
```

---

## 📝 Nguyên Tắc Tổ Chức

1. **Mỗi component có folder riêng** với file `index.js` để export
2. **Sub-components** nằm cùng folder với component cha
3. **Logic phức tạp** được tách thành components nhỏ hơn
4. **Comments đầy đủ** bằng tiếng Việt trong mỗi file
5. **Props rõ ràng** với JSDoc comments

---

## 🎨 Styling

Tất cả components sử dụng:
- **Tailwind CSS** classes
- **CSS variables** từ `base.css`
- **Responsive design** với breakpoints: mobile → tablet → desktop

---

## ✅ Lợi Ích Của Cấu Trúc Này

1. **Dễ bảo trì** - Mỗi component nhỏ, tập trung vào 1 nhiệm vụ
2. **Tái sử dụng** - Có thể dùng LoginButton, CartButton ở nơi khác
3. **Testing** - Dễ test từng component riêng
4. **Collaboration** - Team có thể làm việc song song trên các components khác nhau
5. **Scalability** - Dễ mở rộng thêm features mới

---

## 🔄 Update Log

- **2025-01-07**: Tách ActionButtons thành LoginButton + CartButton
- **2025-01-07**: Tách SearchForm thành SearchForm + SuggestionsList
- **2025-01-07**: Thêm README.md để document cấu trúc
