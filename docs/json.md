---
sidebar_position: 16
---

# JSON

## JSON là gì?

- JSON (JavaScript Object Notation) là một định dạng dữ liệu biểu thị dưới dạng chuỗi
- Trong JSON, kiểu dữ liệu sau đây được cho phép: a string, a number, an object, an array, a boolean, null, và được bao bởi `‘ ‘` (nháy đơn)

:::note

- Kiểu `string` biểu thị ở JSON bắt buộc phải bao bởi dấu `“ ”` (nháy kép)
- `Key` trong `Object` biểu thị ở JSON phải được bao bởi dấu `“ “` (nháy kép)

:::

- Ví dụ:

```js
const myJSON = '"JavaScript"'; //String
const myJSON = "18"; //Number
const myJSON = "true"; //Boolean
const myJSON = "[1,2,3,4,5]"; //Array
const myJSON = "null"; //Null
const myJSON = '{"name":"Chi", "age":20}'; //Object
```

## Từ JSON qua JavaScript

| Syntax               | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `JSON.parse(myJson)` | Trả về giá trị tương ứng trong Javascript từ `myJson` |

```js
const myJSON = '{"name":"Chi", "age":20}';
console.log(JSON.parse(myJSON)); // {name: 'Chi', age: 20}
```

## Từ JavaScript sang JSON

| Syntax                    | Description                                 |
| ------------------------- | ------------------------------------------- |
| `JSON.stringify(jsValue)` | Trả về giá trị JSON tương ứng của `jsValue` |

```js
const myObj = {
  name: "Chi",
  age: 20,
};
console.log(JSON.stringify(myObj)); //'{"name":"Chi","age":20}'
```
