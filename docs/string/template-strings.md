---
sidebar_position: 3
---

# Template strings

- **Template Strings** trong JavaScript là một cú pháp cho phép sử dụng các ký tự đặc biệt, nhúng các biến, biểu thức và chuỗi vào trong một chuỗi `string`.
- **Template Strings** sử dụng dấu back-ticks (``) thay vì dấu (" ") để biểu diễn chuỗi
- Một số ví dụ về sử dụng **Template Strings** :

```js
//Sử dụng template strings để hiển thị các ký tự đặc biệt như ', "
const text = `He's often called "Johnny"`;
```

```js
//Hiển thị nhiều dòng
const text = `The quick
brown fox
jumps over
the lazy dog`;
```

```js
// Nhúng tên biến, biểu thức vào trong string
const name = "John";
console.log(`Hello, ${name}!`); // Hello John
```
