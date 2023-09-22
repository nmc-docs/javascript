---
sidebar_position: 4
---

# Import all

- Sử dụng khi ta muốn `import` tất cả các [named export](../export/named-export) từ một module khác
- Cú pháp: `import * as /ReplaceName/ from '/Module/'`
- Ví dụ:

```js
import * as Functionally from "./main";

console.log(Functionally.name);
console.log(Functionally.age);
console.log(Functionally.add(4, 5));
Functionally.greeting();
```
