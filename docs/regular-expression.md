---
sidebar_position: 15
---

# Regular expression

## RegEx là gì?

- Regular Expression (RegEx) hay còn gọi là biểu thức chính quy được dùng để xử lý chuỗi nâng cao thông qua biểu thức riêng của nó, những biểu thức này sẽ có những nguyên tắc riêng và bạn phải tuân theo nguyên tắc đó thì biểu thức của bạn mới hoạt động được.
- Nguyên tắc hoạt động của biểu thức RegEx là so khớp dựa vào khuôn mẫu, khuôn mẫu được xây dựng từ các quy tắc căn bản của biểu thức RegEx

## Khai báo

```js
const regex = /[a-zA-Z]/g;
```

## Modifiers trong RegEx

Modifiers nằm ở cuối biểu thức chính quy, ví dụ: `/[abc]/g`

- `g`: chỉ định tất cả các từ khớp với RegEx
- `i`: chỉ định không phân biệt chữ hoa, chữ thường
- `m`: chỉ định khớp nhiều dòng, chỉ hoạt động khi RegEx bắt đầu bằng `^` , kết thúc bằng `$`

## Các loại biểu thức chính quy

| Định dạng      | Mô tả                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| `[x1x2x3…]`    | Khớp nếu một trong các kí tự `x1`, `x2`, `x3`,… xuất hiện trong chuỗi  |
| `[x1-x2]`      | Khớp nếu một trong các kí tự từ [`x1`, `x2`] xuất hiện trong chuỗi     |
| `[^x1x2x3…]`   | Khớp nếu tất cả kí tự `x1`, `x2`, `x3`,… không xuất hiện trong chuỗi.  |
| `[^x1-x2]`     | Khớp nếu tất cả các kí tự từ `x1` đến `x2` không xuất hiện trong chuỗi |
| `()`           | Dùng để nhóm các pattern lại với nhau                                  |
| `.`            | Khớp với bất kì một kí tự nào                                          |
| `^x`           | Khớp nếu xâu bắt đầu bởi `x`                                           |
| `x$`           | Khớp nếu xâu kết thúc bởi `x`                                          |
| `x*`           | Khớp nếu `x` xuất hiện `0` hoặc nhiều lần                              |
| `x+`           | Khớp nếu `x` xuất hiện ít nhất `1` lần                                 |
| `x?`           | Khớp nếu `x` xuất hiện `0` hoặc `1` lần                                |
| `x{m}`         | Khớp nếu `x` xuất hiện đúng `m` lần                                    |
| `x{m,}`        | Khớp nếu `x` xuất hiện ít nhất `m` lần                                 |
| `x{m,n}`       | Khớp nếu `x` xuất hiện trong khoảng [`m`,`n`] lần                      |
| x1\| x2 \| ... | Khớp nếu hoặc `x1`, `x2`,… xuất hiện trong xâu                         |
| `x(?=M)`       | Khớp nếu sau `x` là `M`                                                |
| `x(?!M)`       | Khớp nếu sau `x` không phải là `M`                                     |
| `\bx`          | Khớp nếu `x` là bắt đầu của một từ                                     |
| `x\b`          | Khớp nếu `x` là kết thúc của một từ                                    |
| `\Bx`          | Khớp nếu `x` không là bắt đầu của một từ                               |
| `x\B`          | Khớp nếu `x` không là kết thúc của một từ                              |
| `\d`           | Khớp nếu là ký tự số, viết tắt của `[0-9]`                             |
| `\D`           | Khớp nếu kí tự không phải là kí tự số, viết tắt của `[^0-9]`           |
| `\s`           | Khớp nếu kí tự là khoảng trắng                                         |
| `\S`           | Khớp nếu kí tự không là khoảng trắng                                   |
| `\w`           | Khớp nếu kí tự chữ cái, chữ số, dấu `_`, viết tắt của `[a-zA-Z0-9_]`   |
| `\W`           | Khớp nếu kí tự không là chữ cái, chữ số, dấu `_`, viết tắt của `[^\w]` |

## Phương thức

| Method               | Return                                               |
| -------------------- | ---------------------------------------------------- |
| `regex.test(string)` | Trả về `true` nếu chuỗi `string` so khớp với `regex` |
