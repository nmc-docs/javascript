---
sidebar_position: 22
---

# path

## Giới thiệu về path

:::info[Thông tin]

- Trong NodeJS, module **path** chuyên dùng để xử lý đường dẫn file, thư mục trong hệ thống

:::

## `path.basename()`

:::info

- Dùng để lấy tên file cuối cùng trong đường dẫn.
- Cú pháp:

```js
path.basename(path: string): string
```

:::

- Ví dụ:

```js
path.basename("/foo/bar/baz.txt"); // "baz.txt"
```

## `path.dirname()`

:::info

- Dùng để lấy thư mục cha chứa file.
- Cú pháp:

```js
path.dirname(path: string): string
```

:::

- Ví dụ:

```js
path.dirname("/foo/bar/baz.txt"); // "/foo/bar"
```

## `path.extname()`

:::info

- Dùng để lấy phần mở rộng của file.
- Cú pháp:

```js
path.extname(path: string): string
```

:::

- Ví dụ:

```js
path.extname("/foo/bar/baz.txt"); // ".txt"
```

## `path.parse()`

:::info

- Dùng để tách đường dẫn thành các phần: **root**, **dir**, **base**, **ext**, **name**.
- Cú pháp:

```js
path.parse(path: string): ParsedPath
```

:::

- Ví dụ:

```js
import path from "path";

const srcDirPath = path.resolve("src");

console.log(path.parse(path.resolve(srcDirPath, "ffmpeg", "tiktok_video.mp4")));
/*
{
  root: "d:\\",
  dir: "d:\\typescript-with-bun\\src\\ffmpeg",
  base: "tiktok_video.mp4",
  ext: ".mp4",
  name: "tiktok_video",
}
*/
```

## `path.format()`

:::info

- Ngược lại của `parse`, ghép object thành đường dẫn.
- Cú pháp:

```js
path.format(pathObject: FormatInputPathObject): string
```

:::

- Ví dụ:

```js
path.format({
  dir: "/foo/bar",
  name: "baz",
  ext: ".txt",
});
// "/foo/bar/baz.txt"
```

## `path.isAbsolute()`

:::info

- Kiểm tra xem đường dẫn có phải tuyệt đối không.
- Cú pháp:

```js
path.isAbsolute(path: string): boolean
```

:::

- Ví dụ:

```js
path.isAbsolute("/foo/bar"); // true
path.isAbsolute("foo/bar"); // false
```

## `path.join()`

:::info

- Ghép nhiều phần thành một đường dẫn hoàn chỉnh.
- Cú pháp:

```js
path.join(...paths: string[]): string
```

:::

- Ví dụ:

```js
path.join("foo", "bar", "baz.txt"); // "foo/bar/baz.txt"
```

## `path.resolve()`

:::info

- Trả về đường dẫn tuyệt đối (tính từ thư mục hiện tại hoặc từ root).
- Cú pháp:

```js
path.resolve(...paths: string[]): string
```

:::

- Giả sử ta có cấu trúc thư mục như sau:

```plaintext
src
│   aes-gcm.ts
│   download-m3u8.ts
│   hmac-sha256.ts
│   main.ts
│
└───ffmpeg
        ffmpeg.util.ts
        index.ts
```

- Lúc này:

```js title="ffmpeg.util.ts"
import path from "path";

console.log(path.resolve(__dirname, "../ffmpeg/ffmpeg.util.ts"));
// D:\typescript-with-bun\src\ffmpeg\ffmpeg.util.ts
```

## `__dirname`

:::info

- `__dirname` là một **biến toàn cục đặc biệt** đại diện cho **đường dẫn tuyệt đối đến thư mục chứa file hiện tại**.
- Nó luôn trả về một `string`.

:::

- Ví dụ, nếu ta có file sau: `/home/user/project/app.js`
- Trong `app.js`:

  ```js
  console.log(__dirname);
  ```

- 👉 Kết quả:

  ```plaintext
  /home/user/project
  ```

## `__filename`

:::info

- `__filename` cũng là một **biến toàn cục đặc biệt** đại diện cho **đường dẫn tuyệt đối đến file hiện tại.**
- Nó cũng luôn trả về một `string`.

:::

- Vẫn là ví dụ trên, nếu ta dùng:

  ```js
  console.log(__filename);
  ```

- 👉 Kết quả:

  ```plaintext
  /home/user/project/app.js
  ```
