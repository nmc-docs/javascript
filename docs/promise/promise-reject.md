---
sidebar_position: 4
---

# Promise.reject()

- Khi Promise luôn thực hiện thất bại, ta có thể viết `Promise.reject(error)`
- `Promise.reject()` cũng trả về một `Promise`

```js
const myPromise = Promise.reject("Error!");
myPromise.catch((error) => {
  console.log(error); // Error!
});
```
