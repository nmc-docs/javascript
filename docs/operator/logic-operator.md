---
sidebar_position: 4
---

# Toán tử logic

| Toán tử | Ý nghĩa                                                                                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| &&      | Trả về ngay lập tức với giá trị của toán hạng đầu tiên có giá trị `falsy` mà nó gặp phải. Nếu tất cả giá trị của toán hạng là `truthy`, sẽ trả về giá trị của toán hạng cuối cùng. |
| \|\|    | Trả về ngay lập tức với giá trị của toán hạng đầu tiên có giá trị `truthy` mà nó gặp phải. Nếu tất cả giá trị của toán hạng là `falsy`, sẽ trả về giá trị của toán hạng cuối cùng. |
| !       | Phủ định một logic, biến `falsy` thành `truthy` và ngược lại                                                                                                                       |

- Ví dụ:

```js
const str = "JavaScript";
const myStr = str && str.replace("a", "o"); //"JovaScript"

const x = "JavaScript" || "React"; //JavaScript
const y = "" || "React"; //"React"
```
