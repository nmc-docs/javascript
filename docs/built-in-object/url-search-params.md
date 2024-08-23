---
sidebar_position: 5
---
# URLSearchParams

:::info

- `URLSearchParams` trong JavaScript là một đối tượng được sử dụng để thao tác với chuỗi truy vấn (query string) của URL. Nó cho phép ta dễ dàng truy xuất, thêm, sửa đổi, hoặc xóa các tham số trong một URL.

:::

## Khởi tạo

- Ta có thể tạo một đối tượng `URLSearchParams` từ một chuỗi truy vấn hoặc từ một đối tượng URL.

```js
const params = new URLSearchParams('name=John&age=30');
```

Hoặc từ URL:

```js
const url = new URL('https://example.com?name=John&age=30');
const params = new URLSearchParams(url.search);
```

## Các phương thức trả về

| Method                                 | Description                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `get(key: string)`                   | Lấy giá trị đầu tiên xuất hiện trong query của tham số. Trả về một string                                    |
| `getAll(key: string)`                | Lấy tất cả giá trị của tham số trong query. Trả về một mảng các string                                        |
| `set(key: string, value: string)`    | Cập nhật giá trị của một tham số đã tồn tại trong query                                                        |
| `append(key: string, value: string)` | Chèn thêm một tham số vào query                                                                                      |
| `delete(key: string)`                | Xóa một tham số khỏi chuỗi truy vấn.                                                                                |
| `has(key: string)`                   | Kiểm tra xem một tham số có tồn tại trong chuỗi truy vấn hay không. Trả về `true` hoặc `false`            |
| `forEach(callback)`                  | Lặp qua tất cả các cặp giá trị của tham số                                                                       |
| `toString()`                         | Chuyển đổi đối tượng `URLSearchParams` thành một chuỗi truy vấn. Trả về một string                        |
| `keys()`                             | Trả về một iterator chứa tất cả các key trong chuỗi query. Sử dụng Array.from() để chuyển đổi sang mảng   |
| `values()`                           | Trả về một iterator chứa tất cả các value trong chuỗi query. Sử dụng Array.from() để chuyển đổi sang mảng |

## Một số ví dụ

- Ví dụ 1: lấy các tham số:

```js
const query = new URLSearchParams("name=John&age=26&address=NewYork&address=California")
console.log(query.get("address")); // NewYork
console.log(query.getAll("address")); // ["NewYork", "California"]
console.log(query.has("age")); // true
console.log(query.has("phone")); // false
console.log(Array.from(query.keys())); // ["name", "age", "address"]
console.log(Array.from(query.values())); // ["John", "26", "NewYork", "California"]
```

- Ví dụ 2: thay đổi giá trị tham số:

```js
const params = new URLSearchParams();
params.append('name', 'John');
params.append('age', '30');

console.log(params.toString()); // "name=John&age=30"

params.set('name', 'Jane');
console.log(params.toString()); // "name=Jane&age=30"

params.delete('age');
console.log(params.toString()); // "name=Jane"

```

:::note

- Khi ta `append()` hay `set()` một giá trị mới cho một tham số, nếu giá trị chứa các ký tự đặc biệt hoặc là tiếng việt thì ta hãy sử dụng hàm `encodeURI(value: string)`

```js
const encodedFullName = encodeURI("Nguyễn Minh Chí");
const encodedAddress = encodeURI("Quảng Ninh");
const encodedFacebookProfile = encodeURI(
  "https://www.facebook.com/minhchi1509"
);

const query = new URLSearchParams(
  `fullName=${encodedFullName}&address=${encodedAddress}&facebookProfile=${encodedFacebookProfile}`
);

console.log(query.toString()); // "fullName=Nguy%E1%BB%85n+Minh+Ch%C3%AD&address=Qu%E1%BA%A3ng+Ninh&facebookProfile=https%3A%2F%2Fwww.facebook.com%2Fminhchi1509"

console.log(query.get("fullName")); // "Nguyễn Minh Chí"
console.log(query.get("address")); // "Quảng Ninh"
console.log(query.get("facebookProfile")); // "https://www.facebook.com/minhchi1509"
```

:::
