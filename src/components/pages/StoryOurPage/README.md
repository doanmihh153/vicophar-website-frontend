# 📖 Story Our Page Components

Thư mục này chứa các components phục vụ cho trang **Câu Chuyện Vicophar** (`/cau-chuyen-vicophar`).

## 📂 Cấu trúc

| Component | Mô tả |
| :--- | :--- |
| `StoryHero.jsx` | Banner đầu trang với tiêu đề gradient. |
| `StoryIntro.jsx` | Phần giới thiệu "Về Chúng Tôi" với layout ảnh grid. |
| `StoryVisionMission.jsx` | Hiển thị Tầm Nhìn, Sứ Mệnh và Giá Trị Cốt Lõi. |
| `StoryCommitment.jsx` | Các cam kết của Vicophar với khách hàng/đối tác. |
| `StoryTechnology.jsx` | Giới thiệu về công nghệ và nhà máy chuẩn GMP. |
| `StoryCompanyNews.jsx` | Danh sách tin tức công ty (Grid layout). |

## 🎨 Design Notes

*   **Responsive:** Tất cả components đều hỗ trợ Mobile, Tablet và Desktop.
*   **Colors:** Sử dụng màu brand `vico-green` và `vico-red`.
*   **Images:** Sử dụng `next/image` để tối ưu hóa. Hiện tại đang dùng placeholder từ HomePage, cần cập nhật ảnh thật khi có assets.

## 🔗 Usage

Các components này được import và sử dụng trong `src/app/cau-chuyen-vicophar/page.js`.

```jsx
import StoryHero from "@/components/pages/StoryOurPage/StoryHero";
// ...
export default function StoryPage() {
    return (
        <main>
            <StoryHero />
            {/* ... other sections */}
        </main>
    )
}
```
