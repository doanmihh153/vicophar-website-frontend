# Data & Mock APIs - Vicophar

Thư mục chứa mock data và fake APIs cho development và testing.

## 📁 Cấu Trúc

```
data/
├── mockProducts.js      # Mock products API
├── mockSuggestions.js   # Mock text suggestions (deprecated)
├── navLinks.js         # Navigation links data
└── README.md           # Documentation này
```

## 🎯 Mock Products API

### **File: `mockProducts.js`**

Fake API cho danh sách sản phẩm với đầy đủ thông tin.

#### **Data Structure:**

```javascript
{
    id: "SP001",              // Mã sản phẩm
    name: "Tên sản phẩm",     // Tên đầy đủ
    price: 125000,            // Giá (VNĐ)
    image: "/imgs/...",       // Đường dẫn ảnh
    category: "Danh mục",     // Danh mục sản phẩm
    description: "Mô tả"      // Mô tả ngắn
}
```

#### **Functions:**

##### **1. searchProducts(query, limit)**
Tìm kiếm sản phẩm theo từ khóa.

```javascript
import { searchProducts } from '@/data/mockProducts';

// Tìm kiếm với từ khóa
const results = searchProducts('aquatop', 5);
// Returns: Array of max 5 products matching 'aquatop'

// Lấy tất cả sản phẩm
const allProducts = searchProducts('', 10);
```

**Parameters:**
- `query` (string): Từ khóa tìm kiếm
- `limit` (number): Số lượng kết quả tối đa (default: 5)

**Returns:** Array of product objects

---

##### **2. getProductById(id)**
Lấy sản phẩm theo ID.

```javascript
import { getProductById } from '@/data/mockProducts';

const product = getProductById('SP001');
// Returns: Product object or null
```

**Parameters:**
- `id` (string): Mã sản phẩm

**Returns:** Product object hoặc `null`

---

##### **3. formatPrice(price)**
Format giá tiền theo chuẩn Việt Nam.

```javascript
import { formatPrice } from '@/data/mockProducts';

const formatted = formatPrice(125000);
// Returns: "125.000 ₫"
```

**Parameters:**
- `price` (number): Giá tiền (VNĐ)

**Returns:** String đã format

---

##### **4. getProductsByCategory(category)**
Lấy sản phẩm theo danh mục.

```javascript
import { getProductsByCategory } from '@/data/mockProducts';

const products = getProductsByCategory('Thực phẩm chức năng');
// Returns: Array of products in category
```

---

##### **5. getAllCategories()**
Lấy tất cả danh mục duy nhất.

```javascript
import { getAllCategories } from '@/data/mockProducts';

const categories = getAllCategories();
// Returns: ["Thực phẩm chức năng", "Chăm sóc sắc đẹp", ...]
```

---

## 📦 Products Data

### **Danh Sách Sản Phẩm (10 items):**

| ID | Tên | Giá | Ảnh | Danh mục |
|----|-----|-----|-----|----------|
| SP001 | Aquatop - Viên uống bổ sung khoáng chất | 125.000đ | aquatop.png | Thực phẩm chức năng |
| SP002 | Aquatop Plus - Tăng cường sức khỏe | 150.000đ | aquatop.png | Thực phẩm chức năng |
| SP003 | Aquatop Gold - Cao cấp | 200.000đ | aquatop.png | Thực phẩm chức năng |
| SP004 | Thủy Mẫu - Viên uống đẹp da | 180.000đ | thuymau.png | Chăm sóc sắc đẹp |
| SP005 | Thủy Mẫu Plus - Collagen cao cấp | 250.000đ | thuymau.png | Chăm sóc sắc đẹp |
| SP006 | Thủy Mẫu Gold - Dưỡng da chuyên sâu | 320.000đ | thuymau.png | Chăm sóc sắc đẹp |
| SP007 | Aquatop Vitamin - Bổ sung vitamin | 95.000đ | aquatop.png | Vitamin & Khoáng chất |
| SP008 | Thủy Mẫu Essence - Serum dưỡng da | 280.000đ | thuymau.png | Chăm sóc da |
| SP009 | Aquatop Kids - Dành cho trẻ em | 110.000đ | aquatop.png | Sản phẩm trẻ em |
| SP010 | Thủy Mẫu Whitening - Làm trắng da | 299.000đ | thuymau.png | Làm đẹp |

**Note:** Dữ liệu lặp lại 2 ảnh có sẵn (aquatop.png, thuymau.png) với tên và giá khác nhau.

---

## 🎨 Usage Examples

### **1. Search Suggestions (SearchForm)**

```javascript
import { searchProducts } from '@/data/mockProducts';

function SearchForm() {
    const [suggestions, setSuggestions] = useState([]);
    
    const handleSearch = (query) => {
        const products = searchProducts(query, 5);
        setSuggestions(products);
    };
    
    return (
        <SuggestionsList 
            suggestions={suggestions}
            onSuggestionClick={(product) => {
                window.location.href = `/san-pham/${product.id}`;
            }}
        />
    );
}
```

### **2. Product Display**

```javascript
import { formatPrice } from '@/data/mockProducts';

function ProductCard({ product }) {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{formatPrice(product.price)}</p>
        </div>
    );
}
```

### **3. Category Filter**

```javascript
import { getProductsByCategory, getAllCategories } from '@/data/mockProducts';

function ProductFilter() {
    const categories = getAllCategories();
    const [selectedCategory, setSelectedCategory] = useState('');
    
    const products = selectedCategory 
        ? getProductsByCategory(selectedCategory)
        : mockProducts;
    
    return (
        <div>
            {categories.map(cat => (
                <button onClick={() => setSelectedCategory(cat)}>
                    {cat}
                </button>
            ))}
        </div>
    );
}
```

---

## 🔄 Migration Notes

### **Old → New**

```javascript
// ❌ OLD - Text suggestions
import { mockSuggestions } from '@/data/mockSuggestions';
const suggestions = mockSuggestions.filter(...);

// ✅ NEW - Product suggestions
import { searchProducts } from '@/data/mockProducts';
const suggestions = searchProducts(query, 5);
```

---

## 📝 Notes

1. **Images:** Ảnh nằm trong `/public/imgs/products/`
2. **No Try-Catch:** Không có error handling - dữ liệu luôn valid
3. **Mock Data:** Chỉ dùng cho development, sẽ thay bằng real API sau
4. **Price Format:** Dùng `Intl.NumberFormat` chuẩn Việt Nam
5. **Search Logic:** Case-insensitive, tìm trong name, category, description

---

## 🚀 Future Improvements

- [ ] Thêm nhiều sản phẩm hơn
- [ ] Thêm field: stock, rating, reviews
- [ ] Pagination support
- [ ] Advanced filters (price range, sort)
- [ ] Real API integration
