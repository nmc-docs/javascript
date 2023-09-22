---
sidebar_position: 4
---

# Re-exporting / Aggregating

- Bài toán đặt ra: vì mỗi một module chỉ cho phép có một **default export**, cho nên nếu ta muốn import thì phải viết từng dòng import từ mỗi module. Điều này khiến code trở nên dài dòng. Do đó cần phải có một module chứa tất cả **default export** đó và biến chúng thành **named exports**
- Một module cũng có thể export các chức năng được export từ các module khác. Module này được gọi là "module tổng" (barrel module). Điều này hữu ích khi tạo một module duy nhất tập hợp nhiều **default export** từ nhiều module khác nhau
- Cú pháp: `export {default as /ReplacedName/} from ‘/OtherModule/’`
- Ví dụ:

```js
//barrel.js
export { default as FormInput } from "./FormInput";
export { default as DatePicker } from "./DatePicker";
export { default as FormSelectRadio } from "./FormSelectRadio";
export { default as FormSelectDropdown } from "./FormSelectDropdown";
```

```js
import {
  FormInput,
  DatePicker,
  FormSelectRadio,
  FormSelectDropdown,
} from "barrel.js"; // Now we can import in 1 line instead of multiple lines
```
