---
sidebar_position: 7
---

# Toán tử spread

- **Spread** là một toán tử rải tất cả từng phần tử của Array hoặc tất cả các thuộc tính Object.
- Ví dụ: sử dụng toán tử spread `...`:

```js
//Nối hai mảng với nhau:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArr = [...arr1, ...arr2];
console.log(mergeArr); //[1,2,3,4,5,6]

//Nối thuộc tính của 2 object với nhau:
const obj1 = { name: "Chi" };
const obj2 = { age: 20 };
const mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj); // {name:"Chi", age:20}
```

:::tip
Toán tử **spread** được sử dụng phổ biến trong việc copy mảng hay object.
:::
