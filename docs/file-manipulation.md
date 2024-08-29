---
sidebar_position: 21
---

# Thao tác với thư mục, file

## Giới thiệu về `fs`

:::info

- Trong Node.js, `fs` là viết tắt của "File System" (Hệ thống Tập tin). Đây là một module tích hợp sẵn cung cấp các API để làm việc với hệ thống tập tin. Ta có thể sử dụng `fs` để thực hiện các thao tác như đọc và ghi tập tin, tạo và xóa thư mục, và nhiều thao tác khác liên quan đến hệ thống tập tin.

:::

## Đọc file

:::info

- Cú pháp:

```js
const fileBuffer: Buffer = fs.readFileSync(path: string, encoding?: BufferEncoding);
```

- Trong đó:
  - **path**: đường dẫn của file
  - **encoding** (tùy chọn): Kiểu mã hóa của file. Xem các giá trị có thể nhận của BufferEncoding [tại đây](./built-in-object/buffer#các-giá-trị-có-thể-nhận-của-bufferencoding).

:::

:::note

- Khi tham số **encoding** được chỉ định thì `fs.readFileSync()` sẽ trả về một string thay vì trả về một Buffer

:::

- Ví dụ khi không chỉ định tham số **encoding**:

```js
import fs from "fs";

const file = fs.readFileSync("files/example.txt");
console.log(file); // Buffer(35) [ 88, 105, 110, 13, 10, 99, 104, 195, 160, 111, 13, 10, 116, 225, 186, 165, 116, 32, 99, 225, 186, 163, 13, 10, 99, 195, 161, 99, 13, 10, 98, 225, 186, 161, 110 ]
```

- Ví dụ khi chỉ định tham số **encoding**:

```js
import fs from "fs";

const fileUtf8 = fs.readFileSync("files/example.txt", "utf-8");
const fileBase64 = fs.readFileSync("files/example.txt", "base64");
console.log(fileUtf8); // "Xin chào tất cả các bạn"
console.log(fileBase64); // "WGluIGNow6BvIHThuqV0IGPhuqMgY8OhYyBi4bqhbg=="
```

- Ví dụ về đọc file hình ảnh, mp3, mp4, pdf,...:

```js
import fs from "fs";

const imageFileBase64 = fs.readFileSync("files/example.jpg", "base64"); // Đọc file ảnh và trả về chuỗi base64
```

:::tip

- 2 cách viết sau tương đương nhau:

```js
import fs from "fs";

const fileBuffer = fs.readFileSync("files/example.txt");
const fileUtf8 = fileBuffer.toString("utf-8");
```

```js
import fs from "fs";

const fileUtf8 = fs.readFileSync("files/example.txt", "utf8");
```

:::

## Ghi file

:::info

- Cú pháp:

```js
import fs from "fs";

fs.writeFileSync(filePath: string, data: string | Buffer, encoding?: BufferEncoding): void;
```

:::

- Ví dụ về ghi file text (txt):

```js
import fs from "fs";

const fileContent = Buffer.from("Xin chào tất cả các bạn");

fs.writeFileSync("files/example.txt", "Hello world"); // Ghi file với nội dung là một string
fs.writeFileSync("files/example.txt", fileContent); // Ghi file với nội dung là một Buffer
```

- Ví dụ về đọc 1 ảnh sau đó ghi lại ảnh đó (clone ảnh):

```js
import fs from "fs";

const imageFileBuffer = fs.readFileSync("files/example.jpg");

fs.writeFileSync("files/example-clone.jpg", imageFileBuffer); // Ghi lại file ảnh
```

```js
import fs from "fs";

const imageFileBase64 = fs.readFileSync("files/example.jpg", "base64");
fs.writeFileSync("files/example-clone.jpg", imageFileBase64, "base64"); // Ghi lại file ảnh
```

:::caution

- Khi đọc file mà chỉ định **encoding** thì lúc ghi file bắt buộc phải chỉ định lại **encoding** đó.

:::
