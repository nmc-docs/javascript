---
sidebar_position: 1
slug: /
---

# Kiểu dữ liệu

## 1. Các kiểu dữ liệu

| Data types  | Description                                      |
| ----------- | ------------------------------------------------ |
| `string`    | Biểu thị dưới dạng chuỗi                         |
| `number`    | Số nguyên, số thực                               |
| `boolean`   | Một trong hai giá trị: true/false                |
| `undefined` | Kiểu dữ liệu mà biến chưa được thiết lập giá trị |
| `object`    | Lưu trữ dưới dạng key – value                    |
| `function`  | Kiểu hàm                                         |

## 2. Cách chuyển đổi qua lại giữa các kiểu dữ liệu (ép kiểu):

- Để chuyển đổi qua lại giữa các kiểu dữ liệu: ta thêm tên kiểu dữ liệu ở phía trước (`String`, `Number`, `Boolean`,…)
- Ví dụ:

```js
const num = 5;
const str = String(num); // "5"
const bool = Boolean(num); //true
```

:::note
Chú ý: 6 giá trị sau sau khi ép kiểu sang Boolean sẽ nhận giá trị `false`: `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN`
:::
