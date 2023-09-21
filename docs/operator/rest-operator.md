---
sidebar_position: 8
---

# Toán tử rest

- Toán tử `rest` có cú pháp giống toán tử spread, cũng là `...`
- Toán tử `rest` thay vì rải các phần tử của `array` hay `object` thì nó lại tập hợp/thu thập/cô đặc các tham số còn lại thành một giá trị duy nhất (có thể là `array`, hoặc một `object`).
- Toán tử `rest` trả về một `array`, hoặc một `object`.
- Toán tử `rest` thường đi kèm với: **parameter** của một **function** ( **rest parameter** )
- Một **variable** (dùng trong cú pháp [destructuring](./arithmetic-operators))

## Rest parameter

- **Rest parameter** sẽ gom tất cả các parameter còn lại của function và thành một mảng.

:::caution
**Rest parameter** phải được đặt làm parameter cuối cùng của function. Và mỗi function chỉ có duy nhất **MỘT** rest parameter
:::

- Ví dụ:

```js
function restParameterTest(a, b, ...c) {
  // c là một mảng tập hợp tất cả các parameter còn lại được truyền vào function (từ parameter thứ 3 trở đi)
  console.log(c);
}
restParameterTest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //[3, 4, 5, 6, 7, 8, 9, 10]
```

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```
