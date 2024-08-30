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

## Copy file

:::info

- Cú pháp:

```js
fs.copyFileSync(src: string, dest: string): void
```

:::

- Ví dụ:

```js
import fs from "fs";

fs.copyFileSync("files/example.jpg", "files/example-clone.jpg"); // Copy file ảnh
```

## Chèn nội dung vào file

:::info

- Cú pháp:

```js
fs.appendFileSync(path: string, data: string | Buffer, encoding?: BufferEncoding): void
```

- Phương thức `fs.appendFileSync()` trong Node.js được sử dụng để thêm dữ liệu vào cuối một file. Nếu file không tồn tại, phương thức này sẽ tạo file mới.

:::

- Ví dụ:

```js
import fs from "fs";

fs.appendFileSync("files/example.txt", "Xin chào các bạn"); // Ghi thêm vào file text
```

## Tạo thư mục

:::info

- Cú pháp:

```js
fs.mkdirSync(path: string, { recursive?: boolean }): string | undefined;
```

- Phương thức `fs.mkdirSync()` trong Node.js được sử dụng để tạo một thư mục mới. **`recursive`** (boolean): Nếu được đặt là `true`, tất cả các thư mục con trong đường dẫn sẽ được tạo nếu chúng chưa tồn tại.

:::

- Ví dụ:

```js
import fs from "fs";

fs.mkdirSync("assets/images", { recursive: true });
```

## Xóa file, thư mục

:::info

- Cú pháp:

```js
fs.rmSync(path: string, { recursive?: boolean, force?: boolean });
```

- Trong đó:
  - **`recursive`** (boolean): Nếu được đặt là `true`, sẽ xóa cả thư mục và tất cả nội dung bên trong nó. Nếu bạn không chỉ định `recursive: true`, thư mục sẽ không bị xóa nếu nó không rỗng.
  - **`force`** (boolean): Nếu được đặt là `true`, sẽ bỏ qua các lỗi không cho phép và cố gắng xóa đối tượng được chỉ định. Tùy chọn này bỏ qua mọi lỗi liên quan đến quyền truy cập hoặc tệp tin không tồn tại, giúp đảm bảo rằng thư mục hoặc tệp tin sẽ bị xóa mà không bị ngăn cản bởi các lỗi thông thường.

:::

- Ví dụ:

```js
import fs from "fs";

fs.rmSync("assets/images", { recursive: true }); // Xóa thư mục "images" và tất cả các file/folder bên trong
fs.rmSync("assets", { recursive: true }); // Xóa thư mục "assets" và tất cả các file/folder bên trong
fs.rmSync("assets/images/example.jpg"); // Xóa file example.jpg
```

## Đổi tên file, thư mục

:::info

- Cú pháp:

```js
fs.renameSync(oldPath: string, newPath: string): void
```

:::

- Ví dụ:

```js
import fs from "fs";

fs.renameSync("assets/images", "assets/img"); // Đổi tên thư mục
fs.renameSync("assets/example.pdf", "assets/my-cv.pdf"); // Đổi tên file
```

## Đọc file, folder bên trong thư mục

:::info

- Cú pháp:

```js
fs.readdirSync(path: stringify, {recursive?: boolean, withFileTypes?: boolean}): string[] | fs.Dirent[]
```

- Trong đó:
  - **`recursive`** (boolean): Nếu được đặt là `true`, sẽ đệ quy qua các thư mục con.
  - **`withFileTypes`** (boolean): Nếu được đặt là `true`, mỗi phần tử trong mảng trả về sẽ là một đối tượng `fs.Dirent` thay vì một chuỗi tên tệp tin/thư mục. Điều này cho phép ta phân biệt giữa các tệp tin và thư mục dễ dàng hơn.

:::

- Ví dụ 1: Đọc nội dung thư mục và trả về danh sách tên tệp tin:

```js
import fs from "fs";

const files = fs.readdirSync("files");
console.log(files); // [ "example.jpg", "example.mp3", "example.pdf", "example.txt" ]
```

- Ví dụ 2: Đọc nội dung thư mục với `withFileTypes`

```js
import fs from "fs";

const dirents = fs.readdirSync("assets", { withFileTypes: true });

dirents.forEach((dirent) => {
  if (dirent.isDirectory()) {
    console.log(`${dirent.name} là thư mục.`);
  } else if (dirent.isFile()) {
    console.log(`${dirent.name} là tệp tin.`);
  }
});
```
