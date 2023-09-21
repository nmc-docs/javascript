---
sidebar_position: 9
---

# Number

## Các phương thức của number:

| Syntax                    | Return                                                           |
| ------------------------- | ---------------------------------------------------------------- |
| `myNumber.toString()`     | Trả về một chuỗi là số đó                                        |
| `myNumber.toFixed(digit)` | Trả về một chuỗi sau khi làm tròn số sau dấu phẩy `digit` chữ số |

## Các static method của lớp Number:

| Syntax                      | Return                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `Number.isNaN(number)`      | `true` nếu giá trị của `number` là `NaN`                                                                      |
| `Number.isFinite(number)`   | `true` nếu giá trị của `number` là `Infinity`                                                                 |
| `Number.isInteger(number)`  | `true` nếu giá trị của `number` là số nguyên                                                                  |
| `Number.parseInt(string)`   | Chuyển từ `String` sang `Number` ở dạng số nguyên và trả về giá trị của nó, nếu không hợp lệ, sẽ trả về `NaN` |
| `Number.parseFloat(string)` | Chuyển từ `String` sang `Number` ở dạng số thực và trả về giá trị của nó, nếu không hợp lệ, sẽ trả về `NaN`   |

## Một số lưu ý khi sử dụng toán tử `+`, `-`, `*`, `/` giữa `string` với `number`:

| Kiểu dữ liệu biến a | Kiểu dữ liệu biến b | Kiểu dữ liệu a + b           | Kiểu dữ liệu a - b, a \* b, a / b |
| ------------------- | ------------------- | ---------------------------- | --------------------------------- |
| `Number`            | `Number`            | `Number`                     | `Number`                          |
| `String`            | `String`            | `String` (nối chuỗi a với b) | `Number`                          |
| `Number`            | `String`            | `String` (nối chuỗi a với b) | `Number`                          |
| `String`            | `Number`            | `String` (nối chuỗi a với b) | `Number`                          |
