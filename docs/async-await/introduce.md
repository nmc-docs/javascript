---
sidebar_position: 1
---

# Giới thiệu

- Nếu một các function bình thường mà chứa đoạn code đồng bộ ( **synchronous code** ) lẫn đoạn code bất đồng bộ ( **asynchronous code** ) thì khi ta thực thi hàm, tất cả đoạn code đồng bộ sẽ luôn luôn được thực hiện trước, sau đó mới đến các đoạn code bất đồng bộ
- Ví dụ:

```js
const myPromise = Promise.resolve("Promise!");
function funcOne() {
  myPromise.then((res) => console.log(res));
  setTimeout(() => console.log("Timeout1"), 1000);
  console.log("Last line 1!");
}
function funcTwo() {
  setTimeout(() => console.log("Timeout2"), 500);
  console.log("Last line 2!");
}
funcOne();
funcTwo();
/*
Last line 1!
Last line 2!
Promise!
Timeout2
Timeout1
 */
```

:::note

Ở đoạn code trên, khi ta gọi lời thực thi của 2 hàm, tất cả các đoạn code đồng bộ của cả 2 hàm sẽ được thực hiện trước, sau đó mới đến các đoạn code bất đồng bộ

:::

🔑Do đó, **Async / await** được sinh ra nhằm đảm bảo thứ tự thực hiện của các đoạn code đồng bộ lẫn bất đồng bộ

- Sau đây ta sẽ tìm hiểu về:
  - [Async](./async)
  - [Await](./await)
  - [Một số ví dụ về async/await](./example)
