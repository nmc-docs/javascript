---
sidebar_position: 2
---

# Object static methods

- Dưới đây là một số static methods của lớp Object.

| Syntax                           | Return                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Object.assign(target, sources)` | Trả về một `Object` mới sau khi gộp các cặp `key - value` của các object `sources` vào object `target`. Lưu ý object `target` cũng bị biến đổi sau khi gộp. Nếu có nhiều object `sources`, ta ngăn cách bởi dấu phẩy. Các thuộc tính trong đối tượng đích sẽ bị ghi đè bởi các thuộc tính trong đối tượng nguồn nếu chúng có cùng `key` |
| `Object.entries(object)`         | Trả về một mảng các phần tử. Các phần tử của mảng này lại là một mảng gồm 2 phần tử chính là cặp `key-value` của object. Kiểu dữ liệu của `key` luôn là `string`, còn `value` phụ thuộc vào object.                                                                                                                                     |
| `Object.fromEntries(iterable)`   | Trả về một Object sau khi được biến đổi từ `iterable`. `Iterable` có thể là một `array`, `map` và nó phải chứa các cặp `key-value` tương ứng. Lưu ý: kiểu dữ liệu của `key` luôn phải là `string`                                                                                                                                       |
| `Object.keys(object)`            | Trả về một mảng có kiểu dữ liệu của phần tử là `string` chứa toàn bộ `key` của object                                                                                                                                                                                                                                                   |
| `Object.values(object)`          | Trả về một mảng có kiểu dữ liệu của phần tử là `string` chứa toàn bộ `value` của object                                                                                                                                                                                                                                                 |
| `Object.freeze(object)`          | Trả về một object mới clone lại object cũ nhưng sẽ không thể thay đổi được giá trị của thuộc tính                                                                                                                                                                                                                                       |
| `Object.seal(object)`            | Trả về một object mới clone lại object cũ nhưng sẽ không thêm được bất kỳ thuộc tính nào                                                                                                                                                                                                                                                |

- Ví dụ về `Object.assign()`:

```js
const target = {
  name: "Chi",
  age: 19,
  address: "Hanoi",
};
const src = {
  address: "QuangNinh",
};
const merge = Object.assign(target, src); // {name: 'Chi', age: 19, address: 'QuangNinh'}
```

- Ví dụ về `Object.entries()`:

```js
const obj = {
  name: "Chi",
  age: 19,
  address: "Hanoi",
};

console.log(Object.entries(obj)); // [['name', 'Chi'], ['age', 19], ['address', 'Hanoi']]

for (const [key, value] of Object.entries(obj)) console.log(key, value);
/* 'name' 'Chi'
    'age' 19
    'address' 'Hanoi'
*/
```

- Ví dụ về `Object.fromEntries()`:

```js
const arr = [
  ["name", "Chi"],
  ["age", 20],
  ["address", "Hanoi"],
];
console.log(Object.fromEntries(arr)); // {name: 'Chi', age: 20, address: 'Hanoi'}
```

- Ví dụ về `Object.keys()`, `Object.values()`:

```js
const obj = {
  name: "Chi",
  age: 20,
  address: "Hanoi",
};
console.log(Object.keys(obj)); // ["name", "age", "address"]
console.log(Object.values(obj)); // ["Chi", 20, "Hanoi"]
```
