---
sidebar_position: 1
---

# Uint8Array / Uint16Array

:::note

- Các lớp được giới thiệu sau đây chủ yếu được sử dụng ở môi trường trình duyệt Web.

:::

## `Uint8Array`

- `Uint8Array` là một mảng của các số nguyên không dấu 8-bit (0 - 255). Nó thường được dùng để làm việc với dữ liệu nhị phân như hình ảnh, âm thanh hoặc buffer từ API Web.

```js
// Tạo Uint8Array với kích thước 5
let uint8 = new Uint8Array(5);
console.log(uint8); // Output: Uint8Array(5) [ 0, 0, 0, 0, 0 ]

// Gán giá trị vào mảng
uint8[0] = 255; // Giá trị tối đa của Uint8
uint8[1] = 128;
uint8[2] = 64;
uint8[3] = 32;
uint8[4] = 16;

console.log(uint8); // Output: Uint8Array(5) [ 255, 128, 64, 32, 16 ]

// Khởi tạo Uint8Array từ một mảng thông thường
let uint8FromArray = new Uint8Array([10, 20, 30, 40]);
console.log(uint8FromArray); // Output: Uint8Array(4) [ 10, 20, 30, 40 ]
```

## `Uint16Array`

- `Uint16Array` là một mảng của các số nguyên không dấu 16-bit (0 - 65535). Nó thường được dùng để lưu trữ dữ liệu lớn hơn, chẳng hạn như khi làm việc với hình ảnh 16-bit.

```js
// Tạo Uint16Array với kích thước 4
let uint16 = new Uint16Array(4);
console.log(uint16); // Output: Uint16Array(4) [ 0, 0, 0, 0 ]

// Gán giá trị vào mảng
uint16[0] = 65535; // Giá trị tối đa của Uint16
uint16[1] = 32768;
uint16[2] = 16384;
uint16[3] = 8192;

console.log(uint16); // Output: Uint16Array(4) [ 65535, 32768, 16384, 8192 ]

// Khởi tạo Uint16Array từ một mảng số
let uint16FromArray = new Uint16Array([1000, 2000, 3000, 4000]);
console.log(uint16FromArray); // Output: Uint16Array(4) [ 1000, 2000, 3000, 4000 ]
```

## Các thuộc tính, phương thức của lớp Uint8Array / Uint16Array

- Vì các lớp này là một mảng các số nguyên nên nó có các thuộc tính, phương thức của mảng để hỗ trợ ta thao tác với các byte của dữ liệu nhị phân.

## Kết hợp với `ArrayBuffer` để thao tác trên bộ nhớ nhị phân

### `ArrayBuffer` là gì?

- `ArrayBuffer` là một kiểu dữ liệu trong JavaScript dùng để biểu diễn một vùng nhớ nhị phân **CỐ ĐỊNH**. Nó không thể thay đổi kích thước sau khi tạo. Để thao tác trên dữ liệu, cần sử dụng `TypedArray` (`Uint8Array`, `Int16Array`, `DataView`, v.v.).

```js
// Tạo một buffer 8 byte
let buffer = new ArrayBuffer(8);

// Tạo một Uint8Array từ buffer
let uint8View = new Uint8Array(buffer);
uint8View[0] = 255;
uint8View[1] = 128;

console.log(uint8View); // Output: Uint8Array(8) [ 255, 128, 0, 0, 0, 0, 0, 0 ]

// Tạo một Uint16Array từ buffer (lưu ý: Uint16 sử dụng 2 byte cho mỗi phần tử)
let uint16View = new Uint16Array(buffer);
uint16View[0] = 60000;
uint16View[1] = 50000;

console.log(uint16View); // Output: Uint16Array(4) [ 60000, 50000, 0, 0 ]
```
