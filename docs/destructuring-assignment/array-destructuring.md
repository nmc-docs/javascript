---
sidebar_position: 2
---

# Array destructuring

- Đối với **array destructuring** , ta sử dụng `[]` để bao bọc các biến được destruct
- Ví dụ:

```js
const myArr = [1, 2, 3, 4, 5];
const [a, b, c] = myArr;
console.log(a, b, c); //1 2 3
```

```js
const myArr = [1, 2, 3, 4, 5];
const [a, , c] = myArr;
console.log(a, c); //1 3
```

## Kết hợp với toán tử rest

- Toán tử `rest` cũng có thể kết hợp với **array destructuring** , nó sẽ gom các phần tử còn lại vào một mảng:

```js
const myArr = [1, 2, 3, 4, 5];
const [a, , ...c] = myArr; // Biến c đi kèm với toán tử rest
console.log(a, c); //1 [3, 4, 5]
```

- Nếu số biến trong `destructuring` nhiều hơn số lượng phần tử trong `array` thì các biến sau đó sẽ nhận giá trị `undefined`, lúc này ta nên sử dụng `default value`:

```js
const myArr = [1, 2, 3, 4, 5];
const [a, b, c = 200, d, e, f = 100] = myArr;
console.log(c, f); //3 100
```
