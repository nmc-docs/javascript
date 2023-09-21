---
sidebar_position: 6
---

# Câu lệnh lặp

## Sử dụng vòng lặp với for:

- Cú pháp:

```js
for (<Khai báo>; <Điều kiện vòng lặp chạy>; <Lệnh thực hiện sau mỗi vòng lặp>)
{
    Statement
}
```

- Ví dụ:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//Ouput: 0 1 2 3 4
```

- Ta có thể sử dụng `for` kết hợp với từ khóa
  - `in`: để lặp qua các **key** của đối tượng
  - `of`: để lặp qua các **value** của đối tượng

```js
const myObj = {
  name: "Chi",
  age: 20,
  address: "Hanoi",
};

for (let key in myObj) {
  console.log(key);
}
// "name" "age" "address"

const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
//1 2 3 4 5
```

## Sử dụng vòng lặp với `While`, `do/while`:

```js
while (condition) {
  //code block to be executed
}

do {
  //code block to be executed
} while (condition);
```

## Từ khóa `continue`, `break` trong vòng lặp:

- `continue`: chạy với câu lệnh lặp mới
- `break`: thoát khỏi vòng lặp
