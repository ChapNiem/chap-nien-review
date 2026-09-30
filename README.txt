# Chấp Niệm Review - Website miễn phí

Đây là website tĩnh (HTML + CSS + JavaScript), không cần máy chủ và không cần cơ sở dữ liệu.

## Cấu trúc
- index.html: giao diện
- style.css: màu sắc, bố cục, responsive
- script.js: danh sách phim, tìm kiếm, lọc, lưu phim, cửa sổ chi tiết
- assets/: đặt ảnh poster/thumbnail của bạn vào đây

## Chạy thử trên máy
1. Giải nén thư mục.
2. Nhấp đúp `index.html`.
3. Website sẽ mở bằng Chrome/Edge.

## Đưa lên mạng miễn phí bằng GitHub Pages
1. Vào https://github.com/ và tạo tài khoản.
2. Nhấn `+` góc trên phải → `New repository`.
3. Đặt tên ví dụ: `chap-niem-review`.
4. Chọn `Public` → `Create repository`.
5. Trong repository nhấn `Add file` → `Upload files`.
6. Kéo 3 file `index.html`, `style.css`, `script.js` và thư mục `assets` vào.
7. Nhấn `Commit changes`.
8. Vào `Settings` → `Pages`.
9. Ở `Build and deployment`, chọn `Deploy from a branch`.
10. Chọn `main` và `/ (root)` → `Save`.
11. Chờ GitHub xuất bản. Địa chỉ thường có dạng:
   https://TEN-TAI-KHOAN.github.io/chap-niem-review/

## Thay ảnh phim
Trong `script.js`, mỗi phim có thuộc tính `color`. Bản mẫu đang dùng nền màu để bạn chạy ngay.
Khi muốn dùng ảnh thật, có thể nâng cấp thành:
cover: "assets/phim-01.jpg"

Sau đó đổi phần CSS/JS để dùng `background-image:url(...)`.

## Thay link YouTube
Trong `script.js`, các nút Facebook/YouTube hiện là nút mẫu.
Bạn có thể thay `href="#"` bằng link video hoặc playlist YouTube thật.

Lưu ý: chỉ đăng nội dung/hình ảnh mà bạn có quyền sử dụng.
