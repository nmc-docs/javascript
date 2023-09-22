---
sidebar_position: 2
---

# Async

- Từ khóa `async` cho biết một hàm là hàm bất đồng bộ
- Cú pháp:

```js
const executeAsync = async () => {
  /* Statements */
};
```

:::note

Async funtion trả về một `Promise`, phần dữ liệu được return từ `async function` cũng giống như dữ liệu được truyền vào hàm `resolve(data)`, do đó phải dùng từ khóa `await` hoặc `.then(data => …)` mới lấy được dữ liệu này

:::
