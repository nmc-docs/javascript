---
sidebar_position: 2
---

# Promise chain

- Promise chain là một kỹ thuật trong JavaScript để liên kết các xử lý bất đồng bộ tuần tự với nhau thông qua các phương thức `.then()` hoặc `.catch()`. Kỹ thuật này cho phép thực hiện các tác vụ bất đồng bộ theo trình tự một cách dễ đọc và linh hoạt.
- Ví dụ: Promise Chain để in các số 1,2,3,4,5, mỗi lần in cách nhau 1s

```js
const sleep = (ms, nextValue) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(nextValue);
    }, ms);
  });
};

sleep(1000, 1)
  .then((data) => {
    console.log(data);
    return sleep(1000, data + 1);
  })
  .then((data) => {
    console.log(data);
    return sleep(1000, data + 1);
  })
  .then((data) => {
    console.log(data);
    return sleep(1000, data + 1);
  })
  .then((data) => {
    console.log(data);
    return sleep(1000, data + 1);
  })
  .then((data) => {
    console.log(data);
    return sleep(1000, data + 1);
  })
  .finally(() => {
    console.log("Done");
  });
```
