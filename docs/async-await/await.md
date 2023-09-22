---
sidebar_position: 3
---

# Await

- Từ khóa `await` để chờ đợi kết quả trả về của một `Promise`.
- Từ khóa `await` chỉ có thể sử dụng bên trong `async function`
- Sau `await` phải là một `promise` hoặc một `function return Promise`
- Cú pháp:

```js
const asyncFunction = async () => {
  const value = await Promise;
};
```

- `await Promise` luôn trả về `fulfillment value of the promise` (dữ liệu được truyền vào `resolve`), nên nếu `Promise` mà `reject` thì sẽ phát sinh ra lỗi, khi đó ta phải dùng `try…catch` để xử lý.

![1695396394386](image/await/1695396394386.png "So sánh hai cách viết async/await với .then().catch()")

:::note

Kết luận: cú pháp `async/await` giúp code ta dễ đọc hơn thay vì viết theo cách `.then()` như ở `Promise`. Với `async/await`, ta có thể viết code theo trình tự tuyến tính và sử dụng các từ khóa `try/catch` để xử lý lỗi.

:::
