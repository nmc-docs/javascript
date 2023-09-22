---
sidebar_position: 14
---

# Map

## Định nghĩa

- Map là một collection theo kiểu ánh xạ, chứa cặp `key – value`.

## Khai báo

```js
//Declare a Map with value:
const arr = [
  ["apple", 500],
  ["banana", 600],
  ["orange", 700],
];
const myMap = new Map(arr);

//Declare a Map without value:
const myMap = new Map();
```

## Phương thức và thuộc tính

| Property/Method                             | Description                                                                                                            |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `myMap.set(key, value)`                     | Thêm ánh xạ `key - value` vào map, nếu `key` đã tồn tại trong Map, `value` mới sẽ được ghi đè lên `value` cũ của `key` |
| `myMap.get(key)`                            | Trả về `value` tương ứng với `key`, nếu `key` không tồn tại trong Map, trả về `undefined`                              |
| `myMap.delete(key)`                         | Xóa cặp `key - value` với `key` tương ứng                                                                              |
| `myMap.has(key)`                            | Trả về `true` nếu `key` có trong Map                                                                                   |
| `myMap.clear()`                             | Xóa toàn bộ phần tử trong Map                                                                                          |
| `myMap.entries()`                           | Trả về một `Iterator Object` chứa tất cả các cặp `[key, value]` của Map                                                |
| `myMap.forEach(function(value,key){/*…*/})` | Duyệt qua từng `[key, value]` của Map và thực hiện hàm `function`                                                      |
| `myMap.size`                                | Trả về `number` là độ dài của Map                                                                                      |
