---
sidebar_position: 5
---

# Toán tử nullish

- Kí hiệu của toán tử: `??`
- Toán tử nullish trả về giá trị phía bên phải dấu `??` nếu giá trị phía trái dấu `??` là `null` hoặc `undefined`
- Ví dụ:

```js
const nullvalue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullvalue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (vì chuỗi rỗng không phải là undefined/null)
console.log(valC); // 42
```
