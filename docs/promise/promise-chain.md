---
sidebar_position: 2
---

# Promise chain

- Promise chain là một chuỗi các Promise nối đuôi nhau thực hiện.
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
