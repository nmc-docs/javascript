---
sidebar_position: 2
---

# String methods

## Lấy độ dài chuỗi:

| Syntax       | Return                  |
| ------------ | ----------------------- |
| `str.length` | Trả về độ dài của chuỗi |

## Lấy kí tự trong chuỗi:

| Syntax        | Return                                      |
| ------------- | ------------------------------------------- |
| `str.at(pos)` | Trả về kí tự tại vị trí `pos` của chuỗi str |

## Tách chuỗi con:

| Syntax                  | Return                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `str.slice(start, end)` | Trả về một chuỗi con từ [`start`; `end`) trong chuỗi str. Nếu `end` bị bỏ qua, thì sẽ lấy đến hết chuỗi |

## Thay thế chuỗi:

| Syntax                        | Return                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `str.replace(oldStr, newStr)` | Trả về một chuỗi sau khi thay thế chuỗi con `oldStr` đầu tiên được tìm thấy bởi `newStr` từ xâu str ban đầu. |

## Chuyển đổi chuỗi in hoa, in thường:

| Syntax              | Return                                                 |
| ------------------- | ------------------------------------------------------ |
| `str.toUpperCase()` | Trả về một chuỗi mới được in hoa bởi chuỗi ban đầu.    |
| `str.toLowerCase()` | Trả về một chuỗi mới được in thường bởi chuỗi ban đầu. |

## Nối chuỗi mới vào sau chuỗi ban đầu:

| Syntax                                     | Return                                                                              |
| ------------------------------------------ | ----------------------------------------------------------------------------------- |
| `str.concat(string2, string3,... stringN)` | Trả về một chuỗi sau khi nối `string2`, `string3`,...`stringN` vào cuỗi chuỗi `str` |

## Xóa bỏ khoảng trắng ở đầu và cuối xâu:

| Syntax            | Return                                                                |
| ----------------- | --------------------------------------------------------------------- |
| `str.trimStart()` | Trả về chuỗi mới sau khi xóa khoảng trắng ở đầu                       |
| `str.trimEnd()`   | Trả về chuỗi mới sau khi xóa khoảng trắng ở cuối chuỗi                |
| `str.trim()`      | Trả về chuỗi mới sau khi xóa khoảng trắng ở đầu và cuối chuỗi ban đầu |

## padStart(), padEnd():

| Syntax                               | Return                                                                                                            |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `str.padStart(maxLength, insertStr)` | Trả về một chuỗi sau khi chèn xâu `insertStr` vào trước xâu `str` sao cho xâu mới có độ dài đúng bằng `maxLength` |
| `str.padEnd(maxLength, insertStr)`   | Trả về một chuỗi sau khi chèn xâu `insertStr` vào sau xâu `str` sao cho xâu mới có độ dài đúng bằng `maxLength`   |

## Phân tách chuỗi:

| Syntax                 | Return                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `str.split(separator)` | Trả về một mảng các xâu được phân tách bằng `separator`. Nếu `separator` là `""` thì trả về mảng chứa các kí tự trong xâu |

## Tìm kiếm:

| Syntax                                | Return                                                                                                                                                                                                           |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `str.endsWith(searchValue, length)`   | Trả về `true` nếu `length` kí tự đầu của chuỗi kết thúc bởi `searchValue`, ngược lại trả về false. Nếu `length` không được chỉ định, mặc định là độ dài của chuỗi                                                |
| `str.startsWith(searchValue, start)`  | Trả về `true` nếu chuỗi `str` được bắt đầu bởi chuỗi `searchValue` bắt đầu từ kí tự thứ `start`, ngược lại trả về `false`. Nếu `start` không được chỉ định, mặc định là `0`                                      |
| `str.indexOf(searchString, position)` | Trả về vị trí xuất hiện đầu tiên của chuỗi `searchString` từ kí tự có chỉ số là `position` trong chuỗi `str` ban đầu (tìm kiếm xuôi). Nếu không tìm thấy, trả về `-1`. Nếu `position` không có, mặc định là `0`. |
| `str.lastIndexOf(searchString)`       | Trả về vị trí xuất hiện lần cuối của chuỗi `searchString` trong chuỗi ban đầu. Nếu không có, trả về `-1`                                                                                                         |
| `str.search(searchStringOrRegEx)`     | Trả về vị trí xuất hiện đầu tiên của chuỗi `searchStringOrRegEx`. `searchStringOrRegEx`có thể là chuỗi thông thường hoặc biểu thức chính quy (RegEx). Nếu không tìm thấy, trả về `-1`                            |
| `str.match(RegEx)`                    | Trả về một mảng các chuỗi khớp với `RegEx`. Ví dụ: `fdpoPjdfijfAuirtfuJ.match(/[A-Z]/g)` => `['P', 'A', 'J']`                                                                                                    |
| `str.includes(searchValue, start)`    | Trả về `true` nếu chuỗi `searchValue` được tìm thấy từ kí tự thứ `start` ở chuỗi ban đầu. Ngược lại trả về `false`. Nếu `start` không được chỉ định, mặc định là `0`                                             |

## Lặp lại chuỗi:

| Syntax            | Return                                                     |
| ----------------- | ---------------------------------------------------------- |
| `s.repeat(count)` | Trả về chuỗi mới sau khi lặp lại chuỗi ban đầu `count` lần |
