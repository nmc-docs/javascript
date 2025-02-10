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

## Instance method

| Instance method  | Mô tả                    |
| ---------------- | ------------------------ |
| `url.toString()` | Trả về một string là URL |

```js
const url = new URL("https://www.facebook.com/minhchi1509");

url.hostname = "www.instagram.com";

console.log(url.toString()); // In ra "https://www.instagram.com/minhchi1509"
```

## Static method

| Static method                    | Mô tả                                                                         | Ứng dụng                            |
| -------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------- |
| `URL.createObjectURL(blob)`      | Tạo URL tạm cho Blob/File                                                     | Hiển thị ảnh/video trước khi upload |
| `URL.revokeObjectURL(objectURL)` | Giải phóng bộ nhớ bằng cách hủy một URL được tạo bởi `URL.createObjectURL()`. | Tránh rò rỉ bộ nhớ                  |
| `URL.canParse(url, base?)`       | Kiểm tra URL có hợp lệ không                                                  | Tránh lỗi khi tạo `new URL()`       |
| `URL.toJSON()`                   | Chuyển URL thành chuỗi JSON                                                   | Truyền URL dưới dạng JSON           |

💡Ứng dụng `URL.createObjectURL(blob)` để hiển thị ảnh từ `File` input:

```js
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const imgUrl = URL.createObjectURL(file);
  document.querySelector("img").src = imgUrl;
});
```

:::caution

- Khi không cần `imgUrl` nữa thì ta phải giải phóng nó bằng cách: `URL.revokeObjectURL(imgUrl)`

:::

💡Ứng dụng `URL.canParse(url)` để kiểm tra xem một URL có hợp lệ không mà không cần tạo đối tượng `URL`.

```js
console.log(URL.canParse("https://example.com")); // true
console.log(URL.canParse("invalid-url")); // false
console.log(URL.canParse("/relative/path", "https://example.com")); // true
```
