---
sidebar_position: 3
---

# Block scope

- ❓Như đã giới thiệu ở bài trước, hai từ khóa `let` và `const` đều có tính chất **block scope**. Vậy **block scope** là gì?
- 🔑 **Block scope** trong JavaScript đề cập đến phạm vi của một biến hoặc hàm được khai báo trong cùng một khối mã (block), thường được định nghĩa bởi cặp dấu ngoặc nhọn `{}`. Những biến hoặc hàm được khai báo trong khối này sẽ chỉ có thể truy cập được trong khối đó và các khối lồng nhau bên trong khối đó, và sẽ bị xoá khỏi bộ nhớ khi khối mã đó thực thi xong.
- Ví dụ:

```js
function example() {
  let x = 10; // Biến x được khai báo trong block scope của hàm example

  if (true) {
    let y = 20; // Biến y được khai báo trong block scope của if statement
    console.log(x); // 10
    console.log(y); // 20
  }

  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
}

example();
```

:::note
Trong ví dụ trên, biến `x` được khai báo trong **block scope** của hàm example, nên nó có thể được truy cập trong toàn bộ hàm. Trong khi đó, biến `y` được khai báo trong **block scope** của câu lệnh `if`, nên nó chỉ có thể được truy cập trong phạm vi của câu lệnh đó và không thể được truy cập từ bên ngoài.
:::
