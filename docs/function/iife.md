---
sidebar_position: 4
---

# IIFE

- IIFE là viết tắt của "Immediately Invoked Function Expression" trong JavaScript. Đây là một cú pháp phổ biến được sử dụng để tạo và gọi một hàm ngay lập tức mà không cần phải lưu trữ nó trong một biến riêng.
- Một IIFE được tạo ra bằng cách bọc một hàm trong dấu ngoặc tròn (), sau đó kết thúc bằng một cặp dấu ngoặc nhọn {}. Sau khi đóng ngoặc nhọn, một cặp dấu ngoặc tròn () được thêm vào để gọi hàm ngay sau khi nó được định nghĩa. Dưới đây là một ví dụ cụ thể về cú pháp của IIFE:

```js
(() => {
  console.log("IIFE Arrow Function");
})();
```

```js
(async () => {
  console.log("IIFE Async Function");
})();
```

- Trong ví dụ này, hàm được định nghĩa bên trong dấu ngoặc tròn là một biểu thức hàm vô danh (anonymous function). Sau đó, dấu ngoặc nhọn {} đóng kết thúc hàm, và một cặp dấu ngoặc tròn () được thêm vào ngay sau để gọi hàm ngay lập tức.
- IIFE thường được sử dụng để tạo một phạm vi cục bộ cho các biến và hàm, từ đó tránh xung đột với các biến và hàm khác ở mức độ toàn cục, và giữ cho mã JavaScript được tổ chức một cách sạch sẽ và an toàn.
