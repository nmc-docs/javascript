---
sidebar_position: 7
---

# Headers

## Headers là gì?

:::info

- Trong JavaScript, lớp `Headers` là một phần của API Fetch và được sử dụng để đại diện cho các cặp khóa-giá trị của headers HTTP. Các headers này có thể được gửi cùng với một yêu cầu HTTP hoặc nhận từ một phản hồi HTTP. Lớp `Headers` cung cấp các phương thức tiện lợi để thiết lập, sửa đổi và truy vấn các headers HTTP.

:::

## Khởi tạo Headers

- Ta sử dụng từ khóa `new` để khởi tạo một đối tượng Headers:

```js
let headers = new Headers();
```

## Các phương thức của đối tượng Headers

### `append()`

:::info

- Sử dụng phương thức `append` để thêm một header mới.
- Ví dụ:

```js
const headers = new Headers();

headers.append("Content-Type", "application/json");
```

:::

### `set()`

:::info

- Phương thức `set` cho phép ta thiết lập một giá trị cho một header cụ thể. Nếu header đã tồn tại, giá trị sẽ được cập nhật.
- Ví dụ:

```js
headers.set("Content-Type", "application/xml");
```

:::

### `delete()`

:::info

- Phương thức `delete` dùng để xoá một header khỏi đối tượng `Headers`.
- Ví dụ:

```js
headers.delete("Authorization");
```

:::

### `get()`

:::info

- Phương thức `get` trả về giá trị của một header cụ thể.
- Ví dụ:

```js
let contentType = headers.get("Content-Type");
```

:::

### `has()`

:::info

- Phương thức `has` dùng để kiểm tra xem một header có tồn tại hay không.
- Ví dụ:

```js
if (headers.has("Authorization")) {
  // Làm gì đó khi header Authorization tồn tại
}
```

:::

### `keys(), values()`

:::info

- Phương thức `keys()` trả về một iterator chứa tất cả các tên headers (tức là các khóa).
- Phương thức `values()` trả về một iterator chứa tất cả các giá trị của headers.
- Ví dụ:

```js
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer token");

console.log(Array.from(headers.keys())); // ["authorization", "content-type"]
console.log(Array.from(headers.values())); // ["Bearer token", "application/json"]
```

:::

### `forEach()`

:::info

- Phương thức `forEach()` nhận một callback để lặp qua tất cả các headers.
- Ví dụ:

```js
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer token");

headers.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

//Cách khác để lặp qua các cặp key/value
for (let [key, value] of headers) {
  console.log(`${key}: ${value}`);
}
```

:::
