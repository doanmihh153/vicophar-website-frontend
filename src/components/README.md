# 📁 THƯ MỤC COMPONENTS - REACT COMPONENTS

## 📋 TỔNG QUAN

Thư mục `components/` chứa tất cả React components tái sử dụng của ứng dụng Vicophar Vietnam Frontend. Đây là nơi tập trung các UI components, layout components và feature-specific components.

---

## 🗂️ CẤU TRÚC ĐỀ XUẤT

```
components/
├── Layout/              # Layout components
│   ├── Header/
│   │   ├── Header.js
│   │   ├── HeaderTop.js
│   │   ├── HeaderMain.js
│   │   └── README.md
│   ├── Footer/
│   │   ├── Footer.js
│   │   ├── FooterTop.js
│   │   ├── FooterBottom.js
│   │   └── README.md
│   ├── Sidebar/
│   │   ├── Sidebar.js
│   │   └── README.md
│   └── Navigation/
│       ├── Navigation.js
│       ├── NavItem.js
│       └── README.md
│
├── Common/             # Common reusable components
│   ├── Button/
│   │   ├── Button.js
│   │   └── README.md
│   ├── Input/
│   │   ├── Input.js
│   │   ├── InputSearch.js
│   │   └── README.md
│   ├── Card/
│   │   ├── Card.js
│   │   └── README.md
│   ├── Modal/
│   │   ├── Modal.js
│   │   └── README.md
│   ├── Dropdown/
│   │   ├── Dropdown.js
│   │   └── README.md
│   ├── Badge/
│   │   ├── Badge.js
│   │   └── README.md
│   └── Loading/
│       ├── Spinner.js
│       ├── Skeleton.js
│       └── README.md
│
├── Features/           # Feature-specific components
│   ├── SanPham/       # Product features
│   │   ├── DanhSachSanPham.js
│   │   ├── ChiTietSanPham.js
│   │   ├── TheSanPham.js
│   │   ├── BoLocSanPham.js
│   │   └── README.md
│   ├── GioHang/       # Cart features
│   │   ├── GioHang.js
│   │   ├── ItemGioHang.js
│   │   ├── TongGioHang.js
│   │   └── README.md
│   ├── NguoiDung/     # User features
│   │   ├── ThongTinNguoiDung.js
│   │   ├── DonHangCuaToi.js
│   │   ├── DiaChiGiaoHang.js
│   │   └── README.md
│   └── ThanhToan/     # Checkout features
│       ├── FormThanhToan.js
│       ├── PhuongThucThanhToan.js
│       └── README.md
│
└── Forms/             # Form components
    ├── DangNhap/
    │   ├── FormDangNhap.js
    │   └── README.md
    ├── DangKy/
    │   ├── FormDangKy.js
    │   └── README.md
    └── LienHe/
        ├── FormLienHe.js
        └── README.md
```

---

## 📂 MÔ TẢ CHI TIẾT

### 1️⃣ **Layout/** - Layout Components

**Mục đích:** Components cấu trúc chính của trang

#### **Header/**
```javascript
// Header.js - Component header chính
export default function Header() {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderMain />
        </header>
    );
}
```

**Chức năng:**
- Logo Vicophar
- Search bar
- Navigation menu
- User account
- Shopping cart
- Mobile menu

#### **Footer/**
```javascript
// Footer.js - Component footer
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <FooterTop />
            <FooterBottom />
        </footer>
    );
}
```

**Chức năng:**
- Company info
- Quick links
- Social media
- Contact info
- Copyright

---

### 2️⃣ **Common/** - Common Components

**Mục đích:** Components tái sử dụng trong toàn bộ app

#### **Button/**
```javascript
/**
 * Component Button tái sử dụng
 * @param {string} variant - primary | secondary | outline
 * @param {string} size - sm | md | lg
 * @param {boolean} loading - Hiển thị loading state
 * @param {function} onClick - Click handler
 */
export default function Button({ 
    children, 
    variant = 'primary', 
    size = 'md',
    loading = false,
    onClick,
    ...props 
}) {
    const baseClasses = 'btn transition-all duration-300';
    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
    };
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };
    
    return (
        <button 
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
            onClick={onClick}
            disabled={loading}
            {...props}
        >
            {loading ? <Spinner /> : children}
        </button>
    );
}
```

**Sử dụng:**
```javascript
<Button variant="primary" size="md" onClick={handleClick}>
    Thêm vào giỏ hàng
</Button>
```

#### **Input/**
```javascript
/**
 * Component Input
 * @param {string} type - text | email | password | number
 * @param {string} placeholder
 * @param {string} error - Error message
 */
export default function Input({ 
    type = 'text',
    placeholder,
    error,
    ...props 
}) {
    return (
        <div className="input-wrapper">
            <input 
                type={type}
                placeholder={placeholder}
                className={`input ${error ? 'border-red-primary' : ''}`}
                {...props}
            />
            {error && <span className="text-red-primary text-sm">{error}</span>}
        </div>
    );
}
```

#### **Card/**
```javascript
/**
 * Component Card
 * @param {boolean} hoverable - Có hover effect không
 */
export default function Card({ children, hoverable = false, ...props }) {
    return (
        <div className={`card ${hoverable ? 'hover-lift' : ''}`} {...props}>
            {children}
        </div>
    );
}
```

---

### 3️⃣ **Features/** - Feature Components

**Mục đích:** Components cho các tính năng cụ thể

#### **SanPham/TheSanPham.js**
```javascript
/**
 * Component hiển thị thẻ sản phẩm
 * @param {Object} sanPham - Thông tin sản phẩm
 */
export default function TheSanPham({ sanPham }) {
    const { id, ten, gia, hinhAnh, giamGia } = sanPham;
    
    return (
        <Card hoverable className="card-product">
            <div className="aspect-product relative">
                <Image 
                    src={hinhAnh} 
                    alt={ten}
                    fill
                    className="object-cover"
                />
                {giamGia && (
                    <Badge variant="danger" className="absolute top-2 right-2">
                        -{giamGia}%
                    </Badge>
                )}
            </div>
            
            <div className="p-4">
                <h3 className="font-semibold line-clamp-2">{ten}</h3>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-green-primary font-bold">
                        {formatTien(gia)}
                    </span>
                    {giamGia && (
                        <span className="text-gray-400 line-through text-sm">
                            {formatTien(gia * (1 + giamGia / 100))}
                        </span>
                    )}
                </div>
                
                <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full mt-4"
                    onClick={() => themVaoGioHang(id)}
                >
                    Thêm vào giỏ
                </Button>
            </div>
        </Card>
    );
}
```

#### **GioHang/ItemGioHang.js**
```javascript
/**
 * Component item trong giỏ hàng
 * @param {Object} item - Item trong giỏ
 * @param {function} onUpdateSoLuong - Callback cập nhật số lượng
 * @param {function} onXoa - Callback xóa item
 */
export default function ItemGioHang({ item, onUpdateSoLuong, onXoa }) {
    const { id, ten, gia, hinhAnh, soLuong } = item;
    
    return (
        <div className="flex gap-4 p-4 border-b">
            <Image 
                src={hinhAnh} 
                alt={ten}
                width={80}
                height={80}
                className="rounded"
            />
            
            <div className="flex-1">
                <h4 className="font-semibold">{ten}</h4>
                <p className="text-green-primary font-bold mt-1">
                    {formatTien(gia)}
                </p>
                
                <div className="flex items-center gap-2 mt-2">
                    <button 
                        onClick={() => onUpdateSoLuong(id, soLuong - 1)}
                        className="w-8 h-8 border rounded"
                    >
                        -
                    </button>
                    <span className="w-12 text-center">{soLuong}</span>
                    <button 
                        onClick={() => onUpdateSoLuong(id, soLuong + 1)}
                        className="w-8 h-8 border rounded"
                    >
                        +
                    </button>
                </div>
            </div>
            
            <button 
                onClick={() => onXoa(id)}
                className="text-red-primary hover:text-red-600"
            >
                <CloseIcon className="w-5 h-5" />
            </button>
        </div>
    );
}
```

---

### 4️⃣ **Forms/** - Form Components

#### **FormDangNhap.js**
```javascript
'use client';
import { useState } from 'react';

export default function FormDangNhap({ onSubmit }) {
    const [formData, setFormData] = useState({
        email: '',
        matKhau: '',
    });
    const [errors, setErrors] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic
        if (validate()) {
            onSubmit(formData);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                error={errors.email}
            />
            
            <Input 
                type="password"
                placeholder="Mật khẩu"
                value={formData.matKhau}
                onChange={(e) => setFormData({...formData, matKhau: e.target.value})}
                error={errors.matKhau}
            />
            
            <Button type="submit" variant="primary" className="w-full">
                Đăng nhập
            </Button>
        </form>
    );
}
```

---

## 📝 QUY TẮC VIẾT COMPONENTS

### ✅ **NÊN LÀM:**

1. **Component structure chuẩn:**
```javascript
'use client'; // Nếu cần

import { useState } from 'react';

/**
 * Component mô tả
 * @param {Object} props - Props description
 */
export default function TenComponent({ prop1, prop2 }) {
    // Hooks
    const [state, setState] = useState();
    
    // Handlers
    const handleClick = () => {};
    
    // Render
    return (
        <div>
            {/* JSX */}
        </div>
    );
}
```

2. **Props documentation:**
```javascript
/**
 * @param {string} title - Tiêu đề
 * @param {boolean} isActive - Trạng thái active
 * @param {function} onClick - Click handler
 */
```

3. **Default props:**
```javascript
export default function Button({ 
    variant = 'primary',
    size = 'md',
    ...props 
}) {
    // ...
}
```

4. **Conditional rendering:**
```javascript
{isLoading && <Spinner />}
{error && <ErrorMessage message={error} />}
{data && <Content data={data} />}
```

### ❌ **KHÔNG NÊN:**

1. ❌ Components quá lớn (> 300 dòng)
2. ❌ Quá nhiều props (> 10)
3. ❌ Logic phức tạp trong JSX
4. ❌ Inline styles
5. ❌ Hard-code values

---

## 🎯 COMPONENT PATTERNS

### **1. Container/Presentational Pattern:**

```javascript
// Container - Logic
export default function DanhSachSanPhamContainer() {
    const [sanPhams, setSanPhams] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        layDanhSachSanPham().then(setSanPhams);
    }, []);
    
    return <DanhSachSanPham sanPhams={sanPhams} loading={loading} />;
}

// Presentational - UI
export function DanhSachSanPham({ sanPhams, loading }) {
    if (loading) return <Spinner />;
    
    return (
        <div className="grid-auto-fit">
            {sanPhams.map(sp => <TheSanPham key={sp.id} sanPham={sp} />)}
        </div>
    );
}
```

### **2. Compound Components:**

```javascript
// Card.js
export default function Card({ children }) {
    return <div className="card">{children}</div>;
}

Card.Header = function CardHeader({ children }) {
    return <div className="card-header">{children}</div>;
};

Card.Body = function CardBody({ children }) {
    return <div className="card-body">{children}</div>;
};

// Usage
<Card>
    <Card.Header>Tiêu đề</Card.Header>
    <Card.Body>Nội dung</Card.Body>
</Card>
```

### **3. Render Props:**

```javascript
export default function FetchData({ url, render }) {
    const { data, loading, error } = useFetch(url);
    
    return render({ data, loading, error });
}

// Usage
<FetchData 
    url="/api/san-pham"
    render={({ data, loading }) => (
        loading ? <Spinner /> : <DanhSach data={data} />
    )}
/>
```

---

## 🔧 PERFORMANCE OPTIMIZATION

### **1. React.memo:**
```javascript
import { memo } from 'react';

const TheSanPham = memo(function TheSanPham({ sanPham }) {
    // Component không re-render nếu props không thay đổi
    return <div>...</div>;
});
```

### **2. useMemo:**
```javascript
const danhSachDaLoc = useMemo(() => {
    return sanPhams.filter(sp => sp.gia < 1000000);
}, [sanPhams]);
```

### **3. useCallback:**
```javascript
const handleClick = useCallback(() => {
    // Function không bị tạo lại mỗi render
}, [dependencies]);
```

### **4. Dynamic Import:**
```javascript
import dynamic from 'next/dynamic';

const BanDo = dynamic(() => import('./BanDo'), {
    loading: () => <Spinner />,
    ssr: false
});
```

---

## 📚 TÀI LIỆU THAM KHẢO

- [React Docs](https://react.dev)
- [Next.js Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Component Patterns](https://www.patterns.dev/posts/react-component-patterns)

---

## 📞 HỖ TRỢ

Khi tạo component mới:
1. Xác định loại component (Layout/Common/Feature)
2. Tạo folder và file
3. Viết component theo template
4. Thêm README.md
5. Export trong index.js (nếu cần)

**Liên hệ team lead để review.**
