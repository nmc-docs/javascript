---
sidebar_position: 4
---

# TextEncoder và TextDecoder

:::info

`TextEncoder` và `TextDecoder` là hai API trong JavaScript dùng để chuyển đổi giữa chuỗi văn bản (`string`) và `Uint8Array` (mảng byte), giúp xử lý dữ liệu nhị phân dễ dàng hơn.

- **`TextEncoder`** : Chuyển một chuỗi văn bản thành `Uint8Array` (mã hóa thành dạng nhị phân, thường dùng UTF-8).
- **`TextDecoder`** : Chuyển `Uint8Array` trở lại chuỗi văn bản.

:::

- Ví dụ 1: Chuyển đổi văn bản thành `Uint8Array` và ngược lại:

```js
const encoder = new TextEncoder();
const decoder = new TextDecoder();

const text = "Xin chào!"; // Chuỗi gốc

// Mã hóa (Encode)
const encoded = encoder.encode(text);
console.log(encoded); // Uint8Array chứa các byte của chuỗi

// Giải mã (Decode)
const decoded = decoder.decode(encoded);
console.log(decoded); // "Xin chào!"
```

- Ví dụ 2: Mã hóa và giải mã với UTF-8 (chứa ký tự đặc biệt)

```js
const text = "你好, world!"; // Chuỗi có ký tự Unicode

const encoded = new TextEncoder().encode(text);
console.log(encoded); // Uint8Array chứa mã hóa UTF-8

const decoded = new TextDecoder("utf-8").decode(encoded);
console.log(decoded); // "你好, world!"
```

:::note

- Mặc định `TextEncoder` sử dụng UTF-8.
- `TextDecoder` có thể chỉ định bảng mã (`utf-8`, `utf-16`, v.v.).

:::
