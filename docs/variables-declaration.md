---
sidebar_position: 2
---

# Khai báo biến

- Từ JavaScript ES6 trở đi, ta có hai từ khóa hay được dùng để khai báo biến: `let` và `const`

## 1. `let`:

- Không thể khai báo lại nhiều lần trong cùng một cấp khối `{}`

```js
function test() {
  let x = 5;
  if (true) {
    let x = 10; // Không bị lỗi vì đây là cấp khối khác nên có thể khai báo lại
  }
  let x = 7; // Lỗi vì đang khai báo lại trong cùng một cấp khối
}
```

- Từ khóa `let` có tính chất [block scope](./block-scope)

## 2. `const`:

- Không thể khai báo lại nhiều lần trong cùng một cấp khối `{}`
- Từ khóa `const` có tính chất [block scope](./block-scope)
- Biến được khai báo bằng `const` phải được gán ngay giá trị khi khai báo

:::note
Lưu ý: ta không thể gán lại giá trị cho biến được khai báo bằng `const` nhưng ta có thể:

- Thay đổi giá trị của phần tử của `const array`
- Thay đổi **properties** của `const object`

:::

- Ví dụ về `const array`:

```js
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

```js
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"]; // ERROR
```

- Ví dụ về `const object`:

```js
// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```

```js
const car = { type: "Fiat", model: "500", color: "white" };

car = { type: "Volvo", model: "EX60", color: "red" }; // ERROR
```
