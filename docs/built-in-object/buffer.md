---
sidebar_position: 6
---

# Buffer

## Giới thiệu về Buffer

- **Buffer** trong Node.js là một đối tượng dùng để biểu diễn một dãy các byte nhị phân. Buffer đặc biệt hữu ích khi làm việc với dữ liệu nhị phân hoặc dữ liệu đến từ nguồn như file, stream, hoặc mạng.

* Trong JavaScript thông thường, chuỗi là loại dữ liệu chính để xử lý dữ liệu văn bản, nhưng chúng không thích hợp để xử lý dữ liệu nhị phân vì chúng chỉ hỗ trợ ký tự Unicode. Buffer cung cấp một cách để xử lý dữ liệu nhị phân trong Node.js mà không phải chuyển đổi qua lại giữa chuỗi và các định dạng nhị phân.
* Các đặc điểm chính của Buffer:
  - **Lưu trữ dữ liệu nhị phân:** Buffer có thể chứa bất kỳ dữ liệu nhị phân nào, ví dụ như dữ liệu từ file, dữ liệu mạng, hoặc dữ liệu từ stream.
  - **Cố định kích thước:** Khi bạn tạo một Buffer, bạn cần chỉ định kích thước của nó. Một khi kích thước đã được xác định, bạn không thể thay đổi kích thước này.
  - **Không phụ thuộc vào bộ mã hóa:** Buffer có thể chứa dữ liệu mà không cần mã hóa, nên rất hiệu quả khi xử lý các loại dữ liệu không phải là văn bản.

## Buffer static methods

### `Buffer.from()`

- Khởi tạo một Buffer từ một chuỗi ban đầu, với kiểu mã hóa xác định trước:

```js
const buff: Buffer = Buffer.from(str: string, encoding?: BufferEncoding);
```

### `Buffer.alloc()`

- Tạo một Buffer mới với kích thước xác định và khởi tạo nó bằng các giá trị 0 hoặc một giá trị tùy chọn:

```js
const buff: Buffer = Buffer.alloc(size: number, fill?: string, encoding?: BufferEncoding);
```

### `Buffer.concat()`

- `Buffer.concat()` là một phương thức của lớp `Buffer` trong Node.js được sử dụng để kết hợp nhiều `Buffer` thành một `Buffer` duy nhất. Điều này rất hữu ích khi ta cần xử lý dữ liệu lớn từ nhiều phần khác nhau và muốn hợp nhất chúng thành một khối dữ liệu liên tục.

```js
const buff: Buffer = Buffer.concat(list: readonly Uint8Array[], totalLength?: number)
```

Trong đó:

- `list`: Một mảng các Buffer cần kết hợp.
- `totalLength` (tùy chọn): Tổng chiều dài (số byte) của Buffer kết quả. Nếu không được cung cấp, `Buffer.concat()` sẽ tự động tính tổng chiều dài của tất cả các Buffer trong list.

### `Buffer.compare()`

- `Buffer.compare()` là một phương thức trong Node.js được sử dụng để so sánh hai `Buffer` với nhau. Phương thức này trả về một giá trị số nguyên để chỉ ra thứ tự sắp xếp giữa hai `Buffer`. Đây là một cách hiệu quả để xác định xem một `Buffer` nhỏ hơn, lớn hơn, hay bằng một `Buffer` khác.
- Cú pháp:

```js
const buffCompare: boolean = Buffer.compare(buf1: Uint8Array, buf2: Uint8Array);
```

- Trả về: Một giá trị số nguyên:
  - 0 nếu **buf1** bằng **buf2**.
  - -1 nếu **buf1** nhỏ hơn **buf2**.
  - 1 nếu **buf1** lớn hơn **buf2**.
- Chi tiết hoạt động:
  - `Buffer.compare()` so sánh từng byte của hai `Buffer` theo thứ tự. So sánh dừng lại ngay khi tìm thấy byte không bằng nhau, và giá trị của byte đó sẽ quyết định kết quả so sánh.
  - Nếu tất cả các byte đều bằng nhau và độ dài của hai `Buffer` cũng bằng nhau, phương thức trả về `0`.
  - Nếu các byte bằng nhau nhưng một `Buffer` có độ dài nhỏ hơn, `Buffer` đó được coi là nhỏ hơn.
- Ví dụ 1:

```js
const buf1 = Buffer.from("abc");
const buf2 = Buffer.from("abc");

const result = Buffer.compare(buf1, buf2);
console.log(result); // In ra `0`, vì buf1 bằng buf2
```

- Ví dụ 2:

```js
const buf1 = Buffer.from("abc");
const buf2 = Buffer.from("def");

const result = Buffer.compare(buf1, buf2);
console.log(result);
// Giải thích: buf1 chứa "abc" và buf2 chứa "def". Khi so sánh, byte đầu tiên 'a' (97) trong buf1 nhỏ hơn byte đầu tiên 'd' (100) trong buf2, vì vậy kết quả là -1.
```

- Ví dụ 3:

```js
const buf1 = Buffer.from("def");
const buf2 = Buffer.from("abc");

const result = Buffer.compare(buf1, buf2);
console.log(result);
// Giải thích: Ở đây, buf1 chứa "abc" và buf2 chứa "abcd". Tất cả các byte trong buf1 đều bằng với buf2, nhưng buf1 ngắn hơn, vì vậy nó được coi là nhỏ hơn và kết quả là -1.
```

## Buffer object method

| Method                                | Description                                                  |
| ------------------------------------- | ------------------------------------------------------------ |
| `toString(encoding?: BufferEncoding)` | Chuyển Buffer về dạng string với kiểu encoding được chỉ định |

## Các giá trị có thể nhận của BufferEncoding

| BufferEncoding | Giải thích                                                                                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"ascii"`      | **Mô tả** : Mã hóa ASCII là một chuẩn mã hóa ký tự cũ, chỉ hỗ trợ các ký tự từ 0 đến 127 trong bảng mã ASCII.<br />**Ứng dụng** : Được sử dụng trong các trường hợp chỉ cần xử lý các ký tự tiếng Anh cơ bản.                                                                                            |
| `"utf-8"`      | **Mô tả** : UTF-8 là một chuẩn mã hóa ký tự phổ biến, hỗ trợ hầu hết các ký tự từ mọi ngôn ngữ trên thế giới. Mỗi ký tự có thể được mã hóa bằng 1-4 byte.<br />**Ứng dụng** : Đây là mã hóa mặc định và được sử dụng rộng rãi vì tính toàn diện và khả năng xử lý các ký tự từ nhiều ngôn ngữ khác nhau. |
| `"utf-16le"`   | **Mô tả** : UTF-16 Little Endian là một chuẩn mã hóa ký tự sử dụng 2 hoặc 4 byte cho mỗi ký tự, phổ biến trong các hệ thống Windows.<br />**Ứng dụng** : Được sử dụng khi cần xử lý các chuỗi ký tự với độ dài cố định hoặc làm việc với các hệ thống cần hỗ trợ UTF-16.                                 |
| `"ucs-2"`      | **Mô tả** : UCS-2 là một dạng mã hóa gần giống với UTF-16 nhưng chỉ sử dụng 2 byte cho mỗi ký tự (tức là không hỗ trợ ký tự ngoài phạm vi BMP).<br />**Ứng dụng** : Chủ yếu được dùng trong các ứng dụng cũ và khi cần hỗ trợ các ký tự trong phạm vi Basic Multilingual Plane (BMP).                    |
| `"base64"`     | **Mô tả** : Base64 là một phương thức mã hóa nhị phân thành chuỗi ký tự ASCII, thường được sử dụng để truyền dữ liệu nhị phân qua các kênh không hỗ trợ nhị phân.<br />**Ứng dụng** : Thường dùng để mã hóa hình ảnh, video hoặc các file nhị phân khác để nhúng vào HTML, CSS, hoặc JSON.               |
| `"hex"`        | **Mô tả** : Mã hóa hexadecimal (hex) biểu diễn dữ liệu nhị phân dưới dạng chuỗi các ký tự số hexa (0-9 và a-f).<br />**Ứng dụng** : Được sử dụng khi cần đọc hoặc ghi dữ liệu nhị phân dưới dạng chuỗi dễ đọc hơn.                                                                                       |
