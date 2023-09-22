---
sidebar_position: 5
---

# Promise.all()

- Khi có các `Promise` chạy độc lập với khoảng thời gian chạy khác nhau, ta có thể cho nó chạy đồng thời với nhau để tiết kiệm thời gian bằng `Promise.all()`

## Cú pháp

```js
Promise.all(iterable); //Iterable là một mảng chứa các phần tử là một Promise;
```

:::note

Cách hoạt động của `Promise.all(iterable)`:

- `Promise.all()` nhận vào một mảng là chứa các phần tử là một Promise (ví dụ: Promise1, Promise2, và nhiều hơn nữa).
- Khi `Promise.all()` được gọi, nó sẽ chờ cho đến khi tất cả các `Promise` trong mảng đều đã giải quyết thành công hoặc có một `Promise` bị từ chối (rejected).
- Khi tất cả các `Promise` đã giải quyết, `Promise.all()` trả về một `Promise` mới.
- Kết quả **resolve** của `Promise.all()` là một mảng các kết quả được **resolve** tương ứng với các `Promise` trong mảng ban đầu. Nếu có bất kỳ `Promise` nào bị từ chối, `Promise.all()` sẽ ngay lập tức trả về một `Promise` bị từ chối (rejected).
- Kết quả này được truyền vào hàm `then()` của `Promise.all()`, cho phép chúng ta thực hiện xử lý dữ liệu tiếp theo, hoặc `catch()` nếu có lỗi xảy ra.

:::

## Ví dụ

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("JavaScript");
  }, 10000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Java");
  }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Python");
  }, 5000);
});

Promise.all([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
//It will return ['JavaScript', 'Java', 'Python'] after 10s
```

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("JavaScript");
  }, 10000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 1000);
});

Promise.all([promise1, promise2])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
//It will return "Error" after 1s
```
