---
sidebar_position: 3
---

# Arrow function

- Từ phiên bản ES6 trở đi, có một cách viết function mới tên là **Arrow function**
- **Arrow function** là cách viết `function` ngắn gọn, và được dùng rất phổ biến hiện nay
- Ví dụ:

```js
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 5)); //10
```

- Nếu một **arrow function** `return` thẳng về một giá trị mà không có đoạn code logic nào phía trước, ta có thể bỏ dấu `{}`:

```js
const add = (a, b) => a + b;
console.log(add(10, 50)); // 60
```

- Nếu một **arrow function** chỉ có một `parameter` duy nhất, ta có thể bỏ dấu `()`:

```js
const greeting = (name) => {
  console.log(`Hello, my name is ${name}`);
};

greeting("Chi"); // Hello, my name is Chi
```
