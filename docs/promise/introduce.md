---
sidebar_position: 1
---

# Giới thiệu

## Promise là gì?

- Trong JavaScript, Promise là một cơ chế để xử lý các tác vụ bất đồng bộ. Một Promise là một đối tượng biểu diễn một giá trị có thể đã hoặc chưa được tính toán tại một thời điểm trong tương lai. Promise có thể ở một trong ba trạng thái:

  - Pending: Trạng thái khởi tạo khi một Promise được tạo ra.
  - Fulfilled: Trạng thái khi một Promise hoàn thành thành công.
  - Rejected: Trạng thái khi một Promise gặp phải lỗi hoặc bị từ chối.

- Một Promise có thể chứa một giá trị kết quả (hoặc một lỗi) khi nó được giải quyết.
- Cú pháp cơ bản của một Promise trong JavaScript như sau:

```js
let myPromise = new Promise(function(resolve, reject) {
  // Xử lý logic bất đồng bộ ở đây

  if (/*tác vụ thành công*/) {
    resolve('Kết quả thành công'); // Thực hiện khi tác vụ hoàn thành thành công
  } else {
    reject('Lỗi xảy ra'); // Thực hiện khi tác vụ gặp lỗi
  }
});

// Sử dụng Promise
myPromise
.then(function(result) {
  console.log(result); // Kết quả thành công được in ra
})
.catch(function(error) {
  console.log(error); // Lỗi được in ra nếu có
})
.finally(() => {
console.log("Promise finished!") // Luôn được thực thi sau cùng bất kể có lỗi hay thành công
});

```

- Ví dụ:

```js
const myPromise = new Promise((resolve, reject) => {
  const x = 0;
  if (x === 0) resolve("Successfully");
  else reject("Failed");
});

myPromise
  .then((value) => {
    console.log(value); // Đoạn code này sẽ được chạy, value có giá trị "Successfully"
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
