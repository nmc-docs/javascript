---
sidebar_position: 4
---

# URL

- URL là một instance trong JavaScript liên quan đến đường dẫn.

## Khởi tạo

```js
const myURL = new URL(url: string | URL);
```

## Thuộc tính

| Property           | Return type                            |
| ------------------ | -------------------------------------- |
| `url.protocol`     | string                                 |
| `url.hostname`     | string                                 |
| `url.pathname`     | string                                 |
| `url.search`       | string                                 |
| `url.searchParams` | [URLSearchParams](./url-search-params) |
| `url.hash`         | string                                 |

```js
const url = new URL(
  "https://www.facebook.com/page/profile/minhchi1509/?name=Chi&age=20#myprofile"
);

console.log(url.protocol); // In ra "https:"
console.log(url.hostname); // In ra "www.facebook.com"
console.log(url.pathname); // In ra "/page/profile/minhchi1509/"
console.log(url.search); // In ra "?name=Chi&age=20"
console.log(url.searchParams.get("name")); // In ra "Chi"
console.log(url.hash); // In ra "#myprofile"
```

:::note

Những thuộc tính trên ngoài trả về giá trị thì ta còn có thể gán cho nó một giá trị mới.

:::

## Phương thức

| Method           | Description              |
| ---------------- | ------------------------ |
| `url.toString()` | Trả về một string là URL |

```js
const url = new URL("https://www.facebook.com/minhchi1509");

url.hostname = "www.instagram.com";

console.log(url.toString()); // In ra "https://www.instagram.com/minhchi1509"
```
