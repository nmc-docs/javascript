---
sidebar_position: 3
---

# Default export

- Mỗi module chỉ có MỘT **default export** . Do vậy, nó chỉ đi kèm với các chức năng nổi bật nhất trong module.
- Ví dụ:

```js
const greeting = () => {
  console.log("Hello");
};

export default greeting;
```
