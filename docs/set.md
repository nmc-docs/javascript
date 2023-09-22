---
sidebar_position: 13
---

# Set

## Định nghĩa

- Set trong JavaScript là một collection chứa các giá trị duy nhất và giá trị của nó không thể thay đổi

## Khai báo

```js
//Declare object Set with value:
const arr = [1, 2, 3, 4, 5];
const s = new Set(arr); // s: 1 2 3 4 5

//Declare object Set without value:
const ss = new Set();
```

## Phương thức và thuộc tính

| Property/Method                         | Description                                                                                                |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `mySet.add(value)`                      | Thêm giá trị vào set                                                                                       |
| `mySet.delete(value)`                   | Xóa giá trị khỏi set                                                                                       |
| `mySet.has(value)`                      | Trả về `true` nếu giá trị có trong Set                                                                     |
| `mySet.keys()`                          | Trả về một `iterable` chứa các phần tử trong Set                                                           |
| `mySet.clear()`                         | Xóa tất cả các phần tử trong Set                                                                           |
| `mySet.size`                            | Trả về `number` là số lượng phần tử có trong Set                                                           |
| `mySet.forEach(function(value){/*…*/})` | Duyệt qua từng phần tử của Set, mỗi phần tử thực hiện hàm `function`, `value` là phần tử hiện tại đang xét |

## Ví dụ

```js
const mySet = new Set();
mySet.add(1); // mySet: 1
mySet.add(2); // mySet: 1 2
mySet.delete(2); // mySet: 1
console.log(mySet.has(2)); // False
console.log(mySet.size); //1
mySet.forEach((value) => {
  console.log(value);
}); // 1
```
