---
sidebar_position: 2
---

# Array methods

## `push()`, `pop()`

| Syntax            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `arr.push(value)` | Thêm phần tử `value` vào cuối arr                  |
| `arr.pop()`       | Xóa phần tử cuối cùng của arr và trả về phần tử đó |

```js
const arr = [1, 2, 3, 4, 5];
arr.push(6); // [1,2,3,4,5,6]
arr.pop(); // [1,2,3,4,5]
```

## `length`

| Syntax       | Description                           |
| ------------ | ------------------------------------- |
| `arr.length` | Trả về số lượng phần tử có trong mảng |

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
```

## `reverse()`

| Syntax          | Description    |
| --------------- | -------------- |
| `arr.reverse()` | Đảo ngược mảng |

```js
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
```

## `sort()`

| Syntax                      | Description                                     |
| --------------------------- | ----------------------------------------------- |
| `arr.sort(compareFunction)` | Sắp xếp mảng theo hàm so sánh `compareFunction` |

| compareFunction(a, b) return value | Sort order                         |
| ---------------------------------- | ---------------------------------- |
| `> 0`                              | sort `a` after `b`                 |
| `< 0`                              | sort `a` before `b`                |
| `=== 0`                            | keep original order of `a` and `b` |

```js
const arr = [1, 2, 3, 4, 5, 10, 12, 6, 7, 8, 9];
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
```

## `concat()`

| Syntax                                   | Description                                                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `arr.concat(array1, array2,..., arrayX)` | Trả về một mảng mới sau khi nối mảng `array1`,…`arrayX` vào sau mảng `arr`. Mảng ban đầu không bị thay đổi |

```js
const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 8, 9, 10];
const arr2 = [11, 12, 13, 14, 15];
const merge_array = arr.concat(arr1, arr2);
console.log(merge_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

## `slice()`

| Syntax                  | Description                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.slice(start, end)` | Trả về một mảng con từ vị trí**[start** ;**end)** từ mảng `arr` ban đầu. Nếu **end** không được chỉ định, sẽ cắt đến cuối mảng. Mảng ban đầu không bị thay đổi |

```js
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(0, 3)); // [1, 2, 3]
```

## `splice()`

- Đây là phương thức dùng để thêm kết hợp xóa phần tử tại một vị trí ta chỉ định

| Syntax                                       | Description                                                                                                                                                                                                         |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.splice(index, howmany, item1,...itemX)` | **index**: Chỉ số thêm/xóa phần tử<br />**howmany**: Số lượng phần tử sẽ bị xóa<br />**item1,…itemX**: Các phần tử sẽ được thêm vào từ vị trí index<br />- Phương thức này trả về một mảng chứa các phần tử bị xóa. |

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//Tại vị trí có chỉ số 2, thêm 2 phần tử "Lemon" và "Kiwi"
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
```

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//Xóa 2 phần tử từ vị trí số 2
fruits.splice(2, 2);
console.log(fruits); // ['Banana', 'Orange', 'Kiwi']
```

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//Từ phần tử có chỉ số 1 ("Orange"), xóa đi 2 phần tử ("Orange", "Apple"), đồng thời thêm 2 phần tử mới "Lemon" và "Kiwi"
const removedItems = fruits.splice(1, 2, "Lemon", "Kiwi");

console.log(removedItems); // ["Orange", "Apple"]
console.log(fruits); // ["Banana", "Lemon", "Kiwi", "Mango"]
```

## `join()`

| Syntax                | Description                                                                             |
| --------------------- | --------------------------------------------------------------------------------------- |
| `arr.join(separator)` | Trả về một chuỗi sau khi nối tất cả các phần tử của mảng bởi dấu phân tách**separator** |

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let x = fruits.join(" - ");
console.log(x); // "Banana - Orange - Apple - Mango - Kiwi"
```

## `find(), findIndex()`

| Syntax                    | Description                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `arr.find(function)`      | Trả về**GIÁ TRỊ** đầu tiên trong mảng thỏa mãn hàm điều kiện `function`. Nếu không tìm thấy sẽ trả về giá trị `undefined` |
| `arr.findIndex(function)` | Trả về**CHỈ SỐ** đầu tiên trong mảng có giá trị thỏa mãn hàm điều kiện `function`. Nếu không tìm thấy sẽ trả về `-1`      |

```js
const arr = [1, 6, 96, 12, 36, 78, 41, 53, 159];

function isPrime(x) {
  for (let i = 2; i <= parseInt(Math.sqrt(x)); i++) {
    if (x % i == 0) return false;
  }
  return x > 1;
}
//Tìm số nguyên tố đầu tiên trong mảng
let x = arr.find(isPrime);
let y = arr.findIndex(isPrime);
console.log(x, y); // 41 6
```

## `includes(), indexOf(), lastIndexOf()`

| Syntax                         | Description                                                                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.includes(element, start)` | Trả về `true` nếu phần tử được tìm thấy bắt đầu từ vị trí **start** (nếu không được chỉ định, mặc định là `0`)                                                                                          |
| `arr.indexOf(item, start)`     | Trả về chỉ số đầu tiên của phần tử có giá trị bằng**item** bắt đầu từ vị trí **start** (nếu không được chỉ định, mặc định là `0`). Nếu không tìm thấy, trả về `-1`                                      |
| `arr.lastIndexOf(item, start)` | Trả về vị trí cuối cùng của phần tử có giá trị bằng**item** bắt đầu từ vị trí **start** (nếu không được chỉ định, mặc định là chỉ số của phần tử cuối cùng trong mảng). Nếu không tìm thấy, trả về `-1` |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 10];
console.log(arr.includes(4, 4)); // false
console.log(arr.indexOf(3)); // 2
console.log(arr.lastIndexOf(8)); //9
```

## `every()`

| Syntax                | Description                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------- |
| `arr.every(function)` | Trả về `true` nếu tất cả các phần tử của mảng `arr` thỏa mãn điều kiện của hàm `function` |

```js
const arr = [1, 3, 5, 7, 9];

function isOdd(x) {
  return x & 1;
}
console.log(arr.every(isOdd)); // true
```

## `some()`

| Syntax               | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| `arr.some(function)` | Trả về `true` nếu có ít nhất một phần tử trong mảng thỏa mãn hàm `function` |

```js
const arr = [1, 3, 5, 6, 7, 9];

function isEven(x) {
  return x % 2 == 0;
}
console.log(arr.some(isEven)); // true
```

## `fill()`

| Syntax                        | Description                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| `arr.fill(value, start, end)` | Thay thế tất cả các phần tử từ**[start** ;**end)** bằng giá trị **value** |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.fill(100, 0, 4);
console.log(arr); // [100, 100, 100, 100, 5, 6, 7, 8, 9, 10]
```

## `filter()`

| Syntax                 | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| `arr.filter(function)` | Trả về một mảng mới chứa tất cả các phần tử thỏa mãn hàm điều kiện `function` |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(x) {
  return x % 2 == 0;
}
let x = arr.filter(isEven);
console.log(x); // [2, 4, 6, 8, 10]
```

## `map()`

| Syntax                                                        | Description                                                                               |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `arr.map(function(element, index) { /* return newValue */ })` | Trả về một mảng sau khi áp dụng tất cả các phần tử từ mảng ban đầu đối với hàm `function` |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function modify(x) {
  return x * 10;
}
const newArr = arr.map(modify);
console.log(newArr); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```

## `reduce()`

- Phương thức `reduce()` thực thi một hàm gọi lại "Reducer" do người dùng cung cấp trên mỗi phần tử của mảng, theo thứ tự, chuyển giá trị trả về từ phép tính trên phần tử trước đó. Kết quả cuối cùng của việc chạy trình rút gọn trên tất cả các phần tử của mảng là một giá trị duy nhất.
- Lần đầu tiên gọi lại được chạy, không có "giá trị trả về của phép tính trước đó". Nếu được cung cấp, một giá trị ban đầu có thể được sử dụng ở vị trí của nó. Nếu không, phần tử mảng ở chỉ số 0 được sử dụng làm giá trị ban đầu và quá trình lặp bắt đầu từ phần tử tiếp theo (chỉ số 1 thay vì chỉ số 0).
- Syntax:

```js
arr.reduce(function (previousValue, currentValue) {
  /* ... */
}, initialValue);
```

| Parameter       | Description                          | Value                                                                                                                               |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `previousValue` | Giá trị trước lời gọi hàm            | Trong lần gọi đầu tiên:<br />`initialValue`: nếu `initialValue` được chỉ định<br />`arr[0]`: nếu `initialValue` không được chỉ định |
| `currentValue`  | Phần tử hiện tại đang xét trong mảng | Trong lần gọi đầu tiên:<br />`arr[0]`: nếu `initialValue` được chỉ định<br />`arr[1]`: nếu `initialValue` không được chỉ định       |

- Một vài ví dụ về `reduce()`:

```js
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((prev, cur) => {
  return prev.concat(cur);
}, []);
//flattened is [0, 1, 2, 3, 4, 5]
```

```js
const nameList = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = nameList.reduce((prev, cur) => {
  if (cur in prev) prev[cur]++;
  else prev[cur] = 1;
  return prev;
}, {});
//countedNames is {Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
```

```js
const arr = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d"];
const arrWithNoDuplicates = arr.reduce((newArr, cur) => {
  if (!newArr.includes(cur)) newArr.push(cur);
  return newArr;
}, []);
//arrWithNoDuplicates = ['a', 'b', 'c', 'e', 'd']
```

## `shift()`

| Syntax        | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `arr.shift()` | Trả về phần tử đầu tiên của mảng và xóa nó khỏi mảng ban đầu |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.shift());
console.log(arr);
/*Output:
1
[2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
```

## `unshift()`

| Syntax                        | Description                                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `arr.unshift(item1,...itemX)` | Trả về độ dài mới của mảng sau khi thêm phần tử `item1`,…`itemX` vào đầu mảng. Mảng ban đầu sẽ bị thay đổi |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.unshift(100, 200, 300));
console.log(arr);
/*Output:
13
[100, 200, 300, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
```
