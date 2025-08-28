---
sidebar_position: 2
---

# String methods

## Lấy độ dài chuỗi:

| Syntax       | Return                     |
| ------------ | -------------------------- |
| `str.length` | ➡️ Trả về độ dài của chuỗi |

## Lấy kí tự trong chuỗi:

| Syntax                | Return                                         |
| --------------------- | ---------------------------------------------- |
| `str.at(pos: number)` | ➡️ Trả về kí tự tại vị trí `pos` của chuỗi str |

## Tách chuỗi con:

| Syntax                                    | Return                                                                                                     |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `str.slice(start?: number, end?: number)` | ➡️ Trả về một chuỗi con từ [`start`; `end`) trong chuỗi str. Nếu `end` bị bỏ qua, thì sẽ lấy đến hết chuỗi |

## Thay thế chuỗi:

| Syntax                                      | Return                                                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `str.replace(oldStr, newStr)`               | ➡️ Trả về một chuỗi sau khi thay thế chuỗi con `oldStr` đầu tiên được tìm thấy bởi `newStr` từ xâu str ban đầu.<br />⚠️ `oldStr` có thể là một regex |
| `str.replaceAll(searchValue, replaceValue)` | ➡️ Trả về 1 chuỗi mới sau khi thay thế tất cả các chuỗi con khớp với một giá trị tìm kiếm bằng một chuỗi thay thế khác.                              |

- Ví dụ với `.replace()`:

```js
const str = "Nguyen Minh ChiChi";

const replacedStr1 = str.replace(/Chi/g, "Anh");
const replacedStr2 = str.replace(/(Chi)+/g, "Anh");

console.log(replacedStr1); // "Nguyen Minh AnhAnh"
console.log(replacedStr2); // "Nguyen Minh Anh"
```

- Ví dụ với `.replaceAll()`:

```js
let str = "Hello world, world is beautiful";

// Thay tất cả "world" thành "Earth"
let result = str.replaceAll("world", "Earth");

console.log(result);
// "Hello Earth, Earth is beautiful"
```

## Chuyển đổi chuỗi in hoa, in thường:

| Syntax              | Return                                                    |
| ------------------- | --------------------------------------------------------- |
| `str.toUpperCase()` | ➡️ Trả về một chuỗi mới được in hoa bởi chuỗi ban đầu.    |
| `str.toLowerCase()` | ➡️ Trả về một chuỗi mới được in thường bởi chuỗi ban đầu. |

## Nối chuỗi mới vào sau chuỗi ban đầu:

| Syntax                             | Return                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------- |
| `str.concat(...strings: string[])` | ➡️ Trả về một chuỗi sau khi nối một hay nhiều string vào cuỗi chuỗi `str` |

## Xóa bỏ khoảng trắng ở đầu và cuối xâu:

| Syntax            | Return                                                                   |
| ----------------- | ------------------------------------------------------------------------ |
| `str.trimStart()` | ➡️ Trả về chuỗi mới sau khi xóa khoảng trắng ở đầu                       |
| `str.trimEnd()`   | ➡️ Trả về chuỗi mới sau khi xóa khoảng trắng ở cuối chuỗi                |
| `str.trim()`      | ➡️ Trả về chuỗi mới sau khi xóa khoảng trắng ở đầu và cuối chuỗi ban đầu |

## padStart(), padEnd():

| Syntax                                                 | Return                                                                                                                |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `str.padStart(maxLength: number, fillString?: string)` | ➡️ Trả về một chuỗi sau khi chèn xâu `fillString` vào trước xâu `str` sao cho xâu mới có độ dài đúng bằng `maxLength` |
| `str.padEnd(maxLength: number, fillString?: string)`   | ➡️ Trả về một chuỗi sau khi chèn xâu `fillString` vào sau xâu `str` sao cho xâu mới có độ dài đúng bằng `maxLength`   |

## Phân tách chuỗi:

| Syntax                 | Return                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `str.split(separator)` | ➡️ Trả về một mảng các xâu được phân tách bằng `separator`.<br />⚠️ Nếu `separator` là `""` thì trả về mảng chứa các kí tự trong xâu.<br /> ⚠️ `seperator` có thể là regex. |

```js
const str = "Xin - chao - cac - ban";

const splitResults1 = str.split("-");
const splitResults2 = str.split(" - ");

console.log(splitResults1); // Output: ["Xin ", " chao ", " cac ", " ban"]
console.log(splitResults2); // Output: ["Xin", "chao", "cac", "ban"]
```

```js
const str = "Nguyen Minh    Chi";

const splitResults1 = str.split(/\s+/g);

console.log(splitResults1); // Output: ["Nguyen", "Minh", "Chi"]
```

## Tìm kiếm:

| Syntax                                                     | Return                                                                                                                                                                                                                      |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `str.endsWith(searchString: string, endPosition?: number)` | ➡️ Trả về `true` nếu `endPosition` kí tự đầu của chuỗi kết thúc bởi `searchString`, ngược lại trả về false. <br />✅ Nếu `endPosition` không được chỉ định, mặc định là độ dài của chuỗi                                    |
| `str.startsWith(searchString: string, position?: number)`  | ➡️ Trả về `true` nếu chuỗi `str` được bắt đầu bởi chuỗi `searchString` bắt đầu từ kí tự thứ `position`, ngược lại trả về `false`. <br />✅ Nếu `start` không được chỉ định, mặc định là `0`.                                |
| `str.indexOf(searchString: string, position?: number)`     | ➡️ Trả về vị trí xuất hiện đầu tiên của chuỗi `searchString` từ kí tự có chỉ số là `position` trong chuỗi `str` ban đầu (tìm kiếm xuôi). Nếu không tìm thấy, trả về `-1`.<br />✅ Nếu `position` không có, mặc định là `0`. |
| `str.lastIndexOf(searchString: string, position?: number)` | ➡️ Trả về vị trí xuất hiện cuối cùng của chuỗi `searchString` trong chuỗi cha. Nếu không có, trả về `-1`<br />✅ `position` (tùy chọn): vị trí bắt đầu tìm ngược (mặc định là `str.length - 1`).                            |
| `str.search(searchStringOrRegEx)`                          | ➡️ Trả về vị trí xuất hiện đầu tiên của chuỗi `searchStringOrRegEx`. `searchStringOrRegEx`có thể là chuỗi thông thường hoặc biểu thức chính quy (RegEx). Nếu không tìm thấy, trả về `-1`                                    |
| `str.match(RegEx)`                                         | ➡️ Trả về một mảng các chuỗi khớp với `RegEx`. Ví dụ: `fdpoPjdfijfAuirtfuJ.match(/[A-Z]/g)` => `['P', 'A', 'J']`                                                                                                            |
| `str.includes(searchString: string, position?: number)`    | ➡️ Trả về `true` nếu chuỗi `searchString` được tìm thấy từ kí tự thứ `position` ở chuỗi ban đầu. Ngược lại trả về `false`.<br />✅ Nếu `start` không được chỉ định, mặc định là `0`                                         |

- Ví dụ về `.lastIndexOf()`:

  ```js
  let text = "Hello world, welcome to the world!";

  console.log(text.lastIndexOf("world"));
  // 25 (vị trí chữ "world" cuối cùng)

  console.log(text.lastIndexOf("Hello"));
  // 0 (vị trí đầu tiên, cũng là cuối vì chỉ có 1 lần)
  ```

  ```js
  let text = "abc abc abc";

  console.log(text.lastIndexOf("abc"));
  // 8 (xuất hiện cuối cùng)

  console.log(text.lastIndexOf("abc", 7));
  // 4 (tìm ngược từ index 7)

  console.log(text.lastIndexOf("abc", 2));
  // 0 (tìm ngược từ index 2)
  ```

## Lặp lại chuỗi:

| Syntax            | Return                                                        |
| ----------------- | ------------------------------------------------------------- |
| `s.repeat(count)` | ➡️ Trả về chuỗi mới sau khi lặp lại chuỗi ban đầu `count` lần |

## Lọc chuỗi theo regex:

| Syntax              | Return                                                                                                                                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `s.match(regex)`    | ➡️ Trả về một mảng các chuỗi khớp với regex. Nếu không có chuỗi nào khớp, trả về `null`                                                                                          |
| `s.matchAll(regex)` | ⚠️`regexp` : một biểu thức chính quy (RegExp) **phải có cờ `g`** (global).<br />➡️ Trả về: một **iterator** (có thể duyệt bằng `for...of`, `Array.from()`, hoặc spread `[...]`). |

### Ví dụ với `.match()`:

```js
//Lọc các chuỗi chỉ chứa ký tự chữ số
const str =
  "Hello 123 World! This string contains numbers like 456 and special characters @#$.";

const numberPattern = /\d+/g;
const numbers = str.match(numberPattern);
console.log(numbers); // Output: ["123", "456"]
```

```js
//Lọc ra các chuỗi mà bắt đầu, kết thúc đều bằng ký tự in hoa
const str =
  "This is an ExamplE String with Words StartinG and Ending with Capital Letters.";

const wordPattern = /\b[A-Z][a-zA-Z]*[A-Z]\b/g;
const words = str.match(wordPattern);
console.log(words); // Output: ["ExamplE", "StartinG"]
```

```js
const text = "test1 test2 test3";

// Lấy tất cả các số trong chuỗi
const regex = /test(\d)/;
const globalRegex = /test(\d)/g;

console.log(text.match(regex)); // ["test1", "1"]
console.log(text.match(globalRegex)); // ["test1", "test2", "test3"]
```

:::note[Chú ý]

- Khi không có flag `g`, `.match()` hoạt động giống `RegExp.exec()` và trả về thông tin đầy đủ của match đầu tiên.
- Còn khi có flag `g`, `.match()` trả về mảng tất cả các chuỗi khớp, **không kèm theo groups và index**.

:::

### Ví dụ với `.matchAll()`:

```js
let text = "test1 test2 test3";

let regex = /test(\d)/g;

for (let match of text.matchAll(regex)) {
  console.log(match);
}

/* Output:
    ["test1", "1"]
    ["test2", "2"]
    ["test3", "3"]
*/
```

```js
let text = "foo bar baz";
let regex = /\w+/g;

let matches = Array.from(text.matchAll(regex), (m) => m[0]);
console.log(matches); // ["foo", "bar", "baz"]
```

### Ví dụ so sánh giữa `.match()` và `.matchAll()`:

```js
let text = "a1 b2 c3";
let regex = /(\w)(\d)/g;

console.log(text.match(regex)); // ["a1", "b2", "c3"]

console.log(Array.from(text.matchAll(regex))); // [["a1", "a", "1"], ["b2", "b", "2"], ["c3", "c", "3"]]
```
