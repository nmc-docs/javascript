---
sidebar_position: 4
---

# Ví dụ về Async/await

- Ví dụ cơ bản về `async/await:`

```js
const executeAsync = async () => {
  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 3000);
  });
  const result = await data; // "await data" will return the value that we passed to resolve
  console.log(result);
};
executeAsync();
```

- Sử dụng `async/await` để in các số từ 1 -> 10, mỗi lần in cách nhau 1s:

```js
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });

const play = async () => {
  for (let i = 1; i <= 10; i++) {
    await delay(1000);
    console.log(i);
  }
};

play();
```

- Sử dụng `async/await` kết hợp với `Promise.all()` để lấy dữ liệu nhiều người dùng trên github:

```js
const fetchGithubInfo = async (url) => {
  const response = await fetch(url);
  const githubInfo = await response.json();
  return {
    id: githubInfo.id,
    name: githubInfo.name,
    email: githubInfo.email,
  };
};

const fetchUsersInfo = (userNameList) => {
  const requests = userNameList.map((userName) => {
    const url = `https://api.github.com/users/${userName}`;
    return fetchGithubInfo(url);
  });
  return Promise.all(requests);
};

fetchUsersInfo(["minhchi1509", "leephan2k1", "thanhyou00"]).then((data) => {
  console.log(data);
});
```

- Sử dụng `try/catch` để xử lý lỗi trong `async/await`:

```js
const promiseCreator = (ms, value) => {
  return new Promise((resolve, reject) => {
    let ok = false;
    setTimeout(() => {
      if (ok) resolve(value);
      else reject("DATA NOT FOUND");
    }, ms);
  });
};
const executeAsync = async () => {
  let data = [];
  for (let i = 1; i <= 10; i++) {
    try {
      const result = await promiseCreator(1000, i);
      data.push(result);
    } catch (error) {
      return error;
    }
  }
  return data;
};
executeAsync().then((data) => console.log(data));
// Output: DATA NOT FOUND
```
