---
sidebar_position: 3
---

# So sánh giữa Buffer với Uint8Array/Uint16Array

:::info

- Cả `Buffer` và `Uint8Array`/`Uint16Array` đều là các lớp giúp xử lý dữ liệu nhị phân trong JavaScript.

:::

| Đặc điểm               | `Buffer`(Node.js)                                                 | `Uint8Array/Uint16Array`(Web API)                                                         |
| ---------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Môi trường sử dụng** | Chỉ có trong Node.js                                              | Có trong cả trình duyệt và Node.js nhưng thường được sử dụng ở môi trường trình duyệt Web |
| **Kế thừa từ**         | `Uint8Array` (trong Node.js)                                      | `TypedArray`                                                                              |
| **Cách tạo**           | `Buffer.alloc(size)`, `Buffer.from(array)`, `Buffer.from(string)` | `new Uint8Array(size)`, `new Uint16Array(size)`                                           |
| **Hiệu suất**          | Được tối ưu hóa cho xử lý nhị phân trong Node.js                  | Tối ưu hóa chung cho Web và Node.js                                                       |
| **Hỗ trợ ArrayBuffer** | Có thể thao tác với `ArrayBuffer` nhưng không cần                 | Luôn dựa trên `ArrayBuffer`                                                               |

## **Khi nào dùng `Buffer`, khi nào dùng `Uint8Array`?**

| Trường hợp                                                                | Nên dùng                   |
| ------------------------------------------------------------------------- | -------------------------- |
| Làm việc với dữ liệu nhị phân trong trình duyệt                           | `Uint8Array`               |
| Xử lý tệp tin (file), mạng (TCP, HTTP), và dữ liệu nhị phân trong Node.js | `Buffer`                   |
| Làm việc với WebAssembly hoặc WebGL                                       | `Uint8Array`,`Uint16Array` |
| Đọc/Ghi dữ liệu vào bộ nhớ trong Node.js                                  | `Buffer`                   |
