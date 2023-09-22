---
sidebar_position: 2
---

# Import from named exports

- Tất cả các chức năng được `import` phải được bao bọc bởi dấu `{}`

```js
import { name, add, age, greeting } from "./main";
```

```js
// Chúng ta có thể import với tên thay thế
import { name as NAME } from "./main";
```
