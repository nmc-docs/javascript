---
sidebar_position: 1
---

# Giới thiệu

## Producing code và Consuming code là gì?

- **Producing code** là code mà nó mất một thời gian để chạy.
- **Consuming code** là code mà nó chờ **Producing code** chạy xong mới thực hiện.

## Promise là gì?

- **Promise** là một `object` mà nó chứa **Producing code** và gọi đến **Consuming code**

## Cú pháp

```js
const myPromise = new Promise((resolve, reject) => {
  // "Producing Code" (May take some time)

  resolve(data); // when successful
  reject(error); // when failed
});

// "Consuming Code" (must wait for a fulfilled Promise)
myPromise
  .then((value) => {
    /* Code if successful */
  })
  .catch((error) => {
    /* Code if some error */
  })
  .finally(() => {
    /* Code if done, always execute */
  });
```

:::note

- **Producing code** là phần code mà nó phải mất một khoảng thời gian để chạy xong.
- Sau đó nếu chạy thành công không có lỗi, hàm `resolve(data)` sẽ được gọi, `data` là parameter được truyền vào là giá trị trả về của **Producing code** vừa chạy để thực hiện phần `.then((value) =>{})` ở bên dưới.
- Nếu có lỗi, hàm `reject(error)` sẽ được gọi, `error` là parameter được truyền vào là giá trị (nếu có) của **Producing code** vừa chạy để thực hiện phần `.catch((error) => {})` ở bên dưới
- Phần `.finally(() => {})` thực hiện khi một trong hai phần `.then` hoặc `.catch` chạy xong

:::

- Ví dụ:

```js
const myPromise = new Promise((resolve, reject) => {
  const x = 0;
  if (x === 0) resolve("Successfully");
  else reject("Failed");
});

myPromise
  .then((value) => {
    console.log(value); // Đoạn code này sẽ được chạy
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done"); // Đoạn code này sẽ luôn được chạy cuối cùng bất kể thành công hay có lỗi xảy ra.
  });
```

:::caution

Lưu ý: hai hàm **resolve()** hoặc **reject()** để báo hiệu rằng Promise được giải quyết thành công hoặc thất bại để thực hiện tiếp ở phía dưới ( **.then()** , **.catch()** ). Nếu trong Promise mà không gọi **resolve()** / **reject()** thì đoạn code ở **.then()** / **.catch()** bên dưới Promise sẽ không bao giờ được thực thi.

:::

## Một số loại Promise

- [Promise.chain](./promise-chain)
- [Promise.resolve()](./promise-resolve)
- [Promise.reject()](./promise-reject)
- [Promise.all()](./promise-all)
