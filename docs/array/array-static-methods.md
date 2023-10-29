---
sidebar_position: 3
---

# Array static methods

- Dưới đây là hai static methods phổ biến thường dùng của lớp Array:

| Syntax                           | Return                                                               |
| -------------------------------- | -------------------------------------------------------------------- |
| `Array.isArray(variable)`        | Trả về `true` nếu `variable` là một mảng                             |
| `Array.from(iterable, callback)` | Trả về một `array` sau khi được áp dụng hàm `callback` từ `iterable` |

## Ví dụ

```js
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Dòng code dưới đây là cách viết khác của phương thức .map()
const arr = Array.from(myArr, (value, key) => value * 10);
console.log(arr); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```

- Tạo ra 1 mảng chứa 20 phần tử có giá trị là 100:

```js
const arr = Array.from({ length: 20 }, () => 100);
```
