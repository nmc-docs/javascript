---
sidebar_position: 3
---

# Promise.resolve()

- Khi Promise luôn thực hiện thành công, ta có thể viết `Promise.resolve(data)`
- `Promise.resolve()` trả về một `Promise`.

```js
const myPromise = Promise.resolve("Successfully!");
myPromise.then((data) => {
  console.log(data); // Successfully!
});
```
