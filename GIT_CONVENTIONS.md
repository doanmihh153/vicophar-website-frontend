# 📝 QUY CHUẨN GIT - VICOPHAR VIETNAM FRONTEND

## 📋 MỤC LỤC

1. [Branch Naming](#-branch-naming)
2. [Commit Message](#-commit-message)
3. [Pull Request](#-pull-request)
4. [Git Workflow](#-git-workflow)
5. [Best Practices](#-best-practices)
6. [Examples](#-examples)

---

## 🌿 BRANCH NAMING

### **Quy tắc đặt tên branch:**

```
<type>/<mô-tả-ngắn-gọn>
```

### **Types (Loại branch):**

| Type | Mô tả | Ví dụ |
|------|-------|-------|
| `feature/` | Tính năng mới | `feature/trang-chu` |
| `fix/` | Sửa bug | `fix/loi-hien-thi-gio-hang` |
| `hotfix/` | Sửa bug khẩn cấp trên production | `hotfix/loi-thanh-toan` |
| `refactor/` | Tái cấu trúc code | `refactor/toi-uu-header` |
| `style/` | Thay đổi giao diện | `style/cap-nhat-mau-sac-button` |
| `docs/` | Cập nhật documentation | `docs/huong-dan-api` |
| `test/` | Thêm hoặc sửa tests | `test/kiem-tra-gio-hang` |
| `chore/` | Công việc bảo trì | `chore/cap-nhat-dependencies` |
| `perf/` | Cải thiện performance | `perf/toi-uu-hinh-anh` |

### **Quy tắc mô tả:**

✅ **NÊN:**
- Viết bằng tiếng Việt không dấu
- Sử dụng dấu gạch ngang `-` để ngăn cách từ
- Ngắn gọn, rõ ràng (2-5 từ)
- Chữ thường toàn bộ
- Mô tả chức năng, không mô tả hành động

❌ **KHÔNG NÊN:**
- Viết có dấu: `feature/trang-chủ` ❌
- Sử dụng underscore: `feature/trang_chu` ❌
- Quá dài: `feature/tao-trang-chu-voi-nhieu-section-va-slider` ❌
- Chữ hoa: `feature/TRANG-CHU` ❌
- Mô tả hành động: `feature/them-trang-chu` ❌

### **Ví dụ branch names:**

```bash
# ✅ ĐÚNG
feature/trang-chu
feature/danh-sach-san-pham
feature/gio-hang
feature/thanh-toan
fix/loi-tim-kiem
fix/hien-thi-gia
hotfix/loi-dang-nhap
refactor/header-component
style/button-hover-effect
docs/api-documentation
test/search-functionality
chore/update-tailwind
perf/optimize-images

# ❌ SAI
feature/thêm-trang-chủ          # Có dấu
feature/trang_chu               # Underscore
feature/TRANG-CHU               # Chữ hoa
feature/them-trang-chu          # Mô tả hành động
feature/tao-trang-chu-dep       # Quá dài, không rõ ràng
```

---

## 💬 COMMIT MESSAGE

### **Format chuẩn:**

```
[TYPE] Mô tả ngắn gọn bằng tiếng Việt

Mô tả chi tiết (optional)
- Điểm thay đổi 1
- Điểm thay đổi 2

Fixes #123 (nếu có issue liên quan)
```

### **Commit Types:**

| Type | Emoji | Mô tả | Ví dụ |
|------|-------|-------|-------|
| `[FEAT]` | ✨ | Tính năng mới | `[FEAT] Thêm trang chủ với hero section` |
| `[FIX]` | 🐛 | Sửa bug | `[FIX] Sửa lỗi hiển thị giỏ hàng` |
| `[HOTFIX]` | 🚑 | Sửa bug khẩn cấp | `[HOTFIX] Sửa lỗi thanh toán` |
| `[STYLE]` | 💄 | Thay đổi UI/CSS | `[STYLE] Cập nhật màu sắc button` |
| `[REFACTOR]` | ♻️ | Tái cấu trúc code | `[REFACTOR] Tối ưu Header component` |
| `[PERF]` | ⚡ | Cải thiện performance | `[PERF] Lazy load images` |
| `[TEST]` | ✅ | Thêm/sửa tests | `[TEST] Thêm test cho SearchForm` |
| `[DOCS]` | 📝 | Cập nhật docs | `[DOCS] Cập nhật README` |
| `[CHORE]` | 🔧 | Bảo trì, config | `[CHORE] Cập nhật dependencies` |
| `[BUILD]` | 📦 | Build system | `[BUILD] Cấu hình Webpack` |
| `[CI]` | 👷 | CI/CD changes | `[CI] Thêm GitHub Actions` |
| `[REVERT]` | ⏪ | Revert commit | `[REVERT] Hoàn tác commit abc123` |

### **Quy tắc viết commit message:**

#### **1. Dòng đầu tiên (Subject):**

✅ **NÊN:**
- Bắt đầu bằng `[TYPE]` viết hoa
- Viết bằng tiếng Việt có dấu
- Ngắn gọn (< 72 ký tự)
- Mô tả **KẾT QUẢ**, không mô tả hành động
- Không kết thúc bằng dấu chấm
- Viết hoa chữ cái đầu sau `[TYPE]`

❌ **KHÔNG NÊN:**
- Viết thường: `[feat]` ❌
- Quá dài (> 72 ký tự)
- Mô tả hành động: "Thêm...", "Tạo...", "Sửa..." ❌
- Kết thúc bằng dấu chấm
- Không rõ ràng: "Update code" ❌

#### **2. Dòng mô tả chi tiết (Body - Optional):**

- Để trống 1 dòng sau subject
- Giải thích **TẠI SAO** thay đổi, không phải **LÀM GÌ**
- Sử dụng bullet points với `-`
- Mỗi dòng < 72 ký tự

#### **3. Footer (Optional):**

- Tham chiếu issue: `Fixes #123`, `Closes #456`
- Breaking changes: `BREAKING CHANGE: ...`
- Co-authors: `Co-authored-by: Name <email>`

### **Ví dụ commit messages:**

```bash
# ✅ ĐÚNG - Commit đơn giản
[FEAT] Trang chủ với hero section và danh sách sản phẩm nổi bật

# ✅ ĐÚNG - Commit với mô tả chi tiết
[FEAT] Trang chủ với hero section và danh sách sản phẩm nổi bật

Trang chủ bao gồm:
- Hero section với slider 3 ảnh
- Danh sách 8 sản phẩm nổi bật
- Section giới thiệu công ty
- Responsive design cho mobile/tablet

# ✅ ĐÚNG - Fix bug
[FIX] Lỗi hiển thị giá sản phẩm khi giảm giá

Giá gốc không bị gạch ngang khi có giảm giá.
Đã thêm class line-through cho giá gốc.

Fixes #234

# ✅ ĐÚNG - Refactor
[REFACTOR] Tối ưu Header component

- Tách SearchForm thành component riêng
- Sử dụng CSS variables thay vì hard-code
- Giảm số lượng re-renders

# ✅ ĐÚNG - Style
[STYLE] Cập nhật màu sắc button theo brand guidelines

Thay đổi màu xanh từ #00A551 sang #0db061

# ❌ SAI - Viết thường type
[feat] thêm trang chủ

# ❌ SAI - Mô tả hành động
[FEAT] Thêm trang chủ với hero section

# ❌ SAI - Không rõ ràng
[FEAT] Update homepage

# ❌ SAI - Quá ngắn, không có context
[FIX] Fix bug

# ❌ SAI - Tiếng Anh
[FEAT] Add homepage with hero section
```

---

## 🔀 PULL REQUEST

### **Tiêu đề PR:**

```
[TYPE] Mô tả ngắn gọn tính năng/fix
```

**Ví dụ:**
```
[FEAT] Trang chủ với hero section và sản phẩm nổi bật
[FIX] Lỗi hiển thị giỏ hàng trên mobile
[REFACTOR] Tối ưu Header component
```

### **Mô tả PR (Template):**

```markdown
## 📝 Mô tả

Tóm tắt ngắn gọn về thay đổi này.

## 🎯 Mục đích

Giải thích tại sao cần thay đổi này.

## 🔧 Thay đổi chính

- [ ] Thay đổi 1
- [ ] Thay đổi 2
- [ ] Thay đổi 3

## 📸 Screenshots (nếu có)

Before:
![Before](link)

After:
![After](link)

## ✅ Checklist

- [ ] Code đã được test kỹ lưỡng
- [ ] Không có lỗi ESLint
- [ ] Responsive trên mobile/tablet/desktop
- [ ] Đã thêm comments tiếng Việt
- [ ] Đã cập nhật README (nếu cần)
- [ ] Performance tốt (không làm chậm app)

## 🔗 Liên quan

Fixes #123
Relates to #456

## 📝 Ghi chú

Thêm bất kỳ ghi chú nào cần thiết.
```

### **Labels cho PR:**

| Label | Mô tả | Màu |
|-------|-------|-----|
| `feature` | Tính năng mới | 🟢 Green |
| `bug` | Sửa bug | 🔴 Red |
| `hotfix` | Sửa khẩn cấp | 🟠 Orange |
| `refactor` | Tái cấu trúc | 🔵 Blue |
| `style` | Thay đổi UI | 🟣 Purple |
| `docs` | Documentation | 📘 Light Blue |
| `performance` | Performance | ⚡ Yellow |
| `needs-review` | Cần review | 👀 Gray |
| `work-in-progress` | Đang làm | 🚧 Yellow |
| `ready-to-merge` | Sẵn sàng merge | ✅ Green |

---

## 🔄 GIT WORKFLOW

### **1. Bắt đầu feature mới:**

```bash
# 1. Checkout main và pull code mới nhất
git checkout main
git pull origin main

# 2. Tạo branch mới từ main
git checkout -b feature/trang-chu

# 3. Code và commit thường xuyên
git add .
git commit -m "[FEAT] Hero section với slider"

# 4. Push lên remote
git push origin feature/trang-chu

# 5. Tạo Pull Request trên GitHub/GitLab
```

### **2. Cập nhật branch với main:**

```bash
# Cách 1: Merge (khuyến nghị cho team)
git checkout feature/trang-chu
git merge main

# Cách 2: Rebase (cho developer có kinh nghiệm)
git checkout feature/trang-chu
git rebase main
```

### **3. Sửa bug khẩn cấp:**

```bash
# 1. Tạo hotfix branch từ main
git checkout main
git pull origin main
git checkout -b hotfix/loi-thanh-toan

# 2. Sửa bug và commit
git add .
git commit -m "[HOTFIX] Lỗi thanh toán khi giỏ hàng trống"

# 3. Push và tạo PR
git push origin hotfix/loi-thanh-toan

# 4. Sau khi merge, xóa branch
git branch -d hotfix/loi-thanh-toan
```

### **4. Revert commit:**

```bash
# Revert commit cuối cùng
git revert HEAD

# Revert commit cụ thể
git revert abc123

# Commit message
git commit -m "[REVERT] Hoàn tác commit abc123 - Lỗi hiển thị header"
```

---

## ✨ BEST PRACTICES

### **1. Commit thường xuyên:**

✅ **NÊN:**
- Commit sau mỗi tính năng nhỏ hoàn thành
- Mỗi commit làm 1 việc cụ thể
- Commit trước khi nghỉ hoặc chuyển task

❌ **KHÔNG NÊN:**
- Commit 1 lần cho cả ngày code
- 1 commit làm nhiều việc không liên quan
- Commit code chưa hoàn thành

### **2. Pull trước khi push:**

```bash
# Luôn pull trước khi push
git pull origin main
git push origin feature/trang-chu
```

### **3. Review code trước khi commit:**

```bash
# Xem thay đổi trước khi commit
git diff

# Xem files đã thay đổi
git status

# Add từng file thay vì add all
git add src/components/Header.js
git add src/styles/header.css
```

### **4. Viết commit message có ý nghĩa:**

```bash
# ✅ ĐÚNG - Rõ ràng, có context
[FEAT] Trang chủ với hero section và danh sách sản phẩm nổi bật

# ❌ SAI - Không rõ ràng
[FEAT] Update homepage
[FIX] Fix bug
[STYLE] Change color
```

### **5. Không commit files không cần thiết:**

```bash
# .gitignore nên có:
node_modules/
.next/
.env
.env.local
.DS_Store
*.log
```

### **6. Xóa branch sau khi merge:**

```bash
# Xóa branch local
git branch -d feature/trang-chu

# Xóa branch remote
git push origin --delete feature/trang-chu
```

---

## 📚 EXAMPLES

### **Example 1: Thêm trang chủ**

```bash
# 1. Tạo branch
git checkout -b feature/trang-chu

# 2. Commit từng phần
git add src/app/page.js
git commit -m "[FEAT] Hero section với slider 3 ảnh"

git add src/components/ProductList.js
git commit -m "[FEAT] Danh sách 8 sản phẩm nổi bật"

git add src/components/AboutSection.js
git commit -m "[FEAT] Section giới thiệu công ty"

git add src/styles/homepage.css
git commit -m "[STYLE] Styling cho trang chủ responsive"

# 3. Push
git push origin feature/trang-chu

# 4. Tạo PR với title:
# [FEAT] Trang chủ với hero section và sản phẩm nổi bật
```

### **Example 2: Sửa bug**

```bash
# 1. Tạo branch
git checkout -b fix/loi-hien-thi-gia

# 2. Sửa bug và commit
git add src/components/ProductCard.js
git commit -m "[FIX] Lỗi hiển thị giá khi có giảm giá

Giá gốc không bị gạch ngang khi sản phẩm giảm giá.
Đã thêm class line-through và text-gray-400.

Fixes #234"

# 3. Push và tạo PR
git push origin fix/loi-hien-thi-gia
```

### **Example 3: Refactor code**

```bash
# 1. Tạo branch
git checkout -b refactor/header-component

# 2. Refactor và commit
git add src/components/Header.js
git commit -m "[REFACTOR] Tối ưu Header component

- Tách SearchForm thành component riêng
- Sử dụng CSS variables thay vì hard-code màu
- Giảm số lượng re-renders với React.memo
- Cải thiện performance 20%"

# 3. Push và tạo PR
git push origin refactor/header-component
```

---

## 🚫 NHỮNG ĐIỀU TUYỆT ĐỐI KHÔNG LÀM

❌ **KHÔNG BAO GIỜ:**

1. **Commit trực tiếp lên `main`**
   ```bash
   # ❌ SAI
   git checkout main
   git commit -m "Update code"
   git push origin main
   ```

2. **Force push lên branch chung**
   ```bash
   # ❌ SAI
   git push -f origin main
   ```

3. **Commit files nhạy cảm**
   ```bash
   # ❌ SAI - Không commit
   .env
   .env.local
   config/secrets.js
   ```

4. **Commit code chưa test**
   ```bash
   # ❌ SAI
   git add .
   git commit -m "[FEAT] New feature"  # Chưa test
   ```

5. **Viết commit message không rõ ràng**
   ```bash
   # ❌ SAI
   git commit -m "fix"
   git commit -m "update"
   git commit -m "wip"
   ```

6. **Merge branch mà không review**
   ```bash
   # ❌ SAI - Merge ngay không review
   git merge feature/trang-chu
   ```

---

## 📞 HỖ TRỢ

### **Khi gặp vấn đề:**

1. **Conflict khi merge:**
   ```bash
   # Xem files conflict
   git status
   
   # Sửa conflict trong file
   # Sau đó:
   git add .
   git commit -m "[MERGE] Giải quyết conflict với main"
   ```

2. **Commit nhầm:**
   ```bash
   # Undo commit cuối (giữ changes)
   git reset --soft HEAD~1
   
   # Undo commit cuối (xóa changes)
   git reset --hard HEAD~1
   ```

3. **Push nhầm branch:**
   ```bash
   # Xóa commit trên remote
   git push origin +HEAD^:feature/trang-chu
   ```

---

## 📖 TÀI LIỆU THAM KHẢO

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Best Practices](https://git-scm.com/book/en/v2)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## 📝 GHI CHÚ

> **Lưu ý quan trọng:**
> - Luôn pull trước khi push
> - Review code trước khi commit
> - Viết commit message rõ ràng
> - Không commit code chưa test
> - Xóa branch sau khi merge

**Tuân thủ quy chuẩn này để code base luôn sạch sẽ và dễ maintain! 🚀**
