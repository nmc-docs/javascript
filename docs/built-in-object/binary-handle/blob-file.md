---
sidebar_position: 5
---

# Blob và File

:::note

- Blob, File hoạt động ở môi trường trình duyệt là chủ yếu.

:::

## Blob là gì?

- `Blob` (Binary Large Object) trong JavaScript là một đối tượng đại diện cho dữ liệu nhị phân dạng thô. Nó thường được sử dụng để chứa dữ liệu như hình ảnh, video, âm thanh hoặc bất kỳ loại dữ liệu nào có thể được đọc dưới dạng nhị phân.
- Đặc điểm của Blob:
  - Có thể chứa dữ liệu dưới nhiều định dạng khác nhau (text, hình ảnh, video, âm thanh, JSON, v.v.).
  - Có thuộc tính `.size` để lấy kích thước của dữ liệu.
  - Có thuộc tính `.type` để xác định kiểu MIME của dữ liệu.
  - Có thể được tạo từ `ArrayBuffer`, `TypedArray`, hoặc `string`.
  - Có thể sử dụng `URL.createObjectURL(blob)` để tạo một URL tạm thời cho Blob.

## Ứng dụng của Blob

**Lưu trữ và xử lý dữ liệu nhị phân**

- Lưu trữ dữ liệu ảnh, âm thanh, video tạm thời trên trình duyệt.
- Xử lý dữ liệu trước khi tải lên server.
- Tạo file và tải về từ trình duyệt mà không cần gửi request đến server.

**Hiển thị ảnh hoặc video động từ dữ liệu nhị phân**

- Hiển thị ảnh từ dữ liệu tải về dưới dạng `Blob`.
- Phát video/âm thanh từ dữ liệu nhận được.

**Chuyển đổi dữ liệu sang file để tải xuống**

- Cho phép người dùng tải file xuống mà không cần kết nối server.

**Gửi dữ liệu nhị phân qua mạng**

- Dùng `Blob` kết hợp với `FormData` để gửi file qua API.

## Các thuộc tính và phương thức của Blob

| Thuộc tính | Kiểu dữ liệu trả về | Mô tả                                                        |
| ---------- | ------------------- | ------------------------------------------------------------ |
| `type`     | string              | Loại MIME của `Blob` (ví dụ: `"image/png"`, `"text/plain"`). |
| `size`     | number              | Trả về kích thước `Blob` (đơn vị bytes).                     |

```js
const blob = new Blob(["Hello, world!"], { type: "text/plain" });

const main = async () => {
  const blobSize = blob.size;
  const blobType = blob.type;
  console.log("Blob type:", blobType); // "Blob type: text/plain;charset=utf-8"
  console.log("Blob size:", blobSize); // "Blob size: 13"
};

main();
```

| Phương thức | Kiểu dữ liệu trả về                             | Mô tả                                      |
| ----------- | ----------------------------------------------- | ------------------------------------------ |
| `text()`    | Promise\<string\>                               | Đọc nội dung dưới dạng văn bản (`String`). |
| `bytes()`   | Promise\<Uint8Array\<ArrayBufferLike\>\>        | Đọc dữ liệu dưới dạng mảng các bytes.      |
| `stream()`  | ReadableStream\<Uint8Array\<ArrayBufferLike\>\> | Chuyển `Blob` thành `ReadableStream`.      |

- Ví dụ về phương thức `text()` với `arrayBuffer()`

```js
const main = async () => {
  const blob = new Blob(["Hello JavaScript"], { type: "text/plain" });
  const text = await blob.text();
  const buffer = await blob.arrayBuffer();
  console.log(text); // "Hello JavaScript"
  console.log(buffer); // ArrayBuffer(16) [ 72, 101, 108, 108, 111, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116 ]
};

main();
```

## Lớp File

:::info

- `File` là một lớp trong JavaScript dùng để đại diện cho tệp tin (file) được chọn từ hệ thống của người dùng, thường qua thẻ `<input type="file">` hoặc API như `Drag and Drop`.
- **`File` kế thừa (`extends`) từ `Blob`** , tức là **nó có tất cả các phương thức của `Blob`** và bổ sung thêm một số thuộc tính liên quan đến tệp tin.

:::

```js
const file = new File(["Hello, world!"], "example.txt", { type: "text/plain" });

console.log(file instanceof File); // true
console.log(file instanceof Blob); // true
```
