---
sidebar_position: 2
---

# Array methods

:::info[Thông tin]

- Kí hiệu `<T>` ở dưới đây biểu thị kiểu dữ liệu của mảng (generic type).

:::

## `push()`, `pop()`

| Syntax                    | Return type | Description                                                                                                               |
| ------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| `arr.push(...items: T[])` | `number`    | ✏️ Thêm phần tử `value` vào cuối arr<br />➡️ Trả về độ dài mảng sau khi được thêm các phần tử                             |
| `arr.pop()`               | `T`         | Xóa phần tử cuối cùng khỏi mảng và trả về phần tử đó. Nếu mảng rỗng, hàm sẽ trả về `undefined` và mảng không bị thay đổi. |

```js
const arr = [1, 2, 3, 4, 5];
arr.push(6); // [1,2,3,4,5,6]
arr.pop(); // [1,2,3,4,5]
```

## `length`

| Syntax       | Return type | Description                           |
| ------------ | ----------- | ------------------------------------- |
| `arr.length` | `number`    | Trả về số lượng phần tử có trong mảng |

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
```

## `reverse()`

| Syntax          | Return type | Description                                                                                                                  |
| --------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `arr.reverse()` | `T[]`       | ✏️ Đảo ngược các phần tử trong một mảng.<br />➡️ Phương thức này sẽ biến đổi mảng và trả về một tham chiếu đến cùng mảng đó. |

```js
const arr = [1, 2, 3, 4, 5];
const copyArray = arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
console.log(copyArray); // [5, 4, 3, 2, 1]
```

## `toReversed()`

| Syntax             | Return type | Description                                                                                              |
| ------------------ | ----------- | -------------------------------------------------------------------------------------------------------- |
| `arr.toReversed()` | `T[]`       | ➡️ Trả về bản sao của một mảng với các phần tử bị đảo ngược.<br />⚠️ Mảng ban đầu **KHÔNG** bị thay đổi. |

```js
const arr = [1, 2, 3, 4, 5];
const copyArray = arr.toReversed();
console.log(arr); // [1, 2, 3, 4, 5]
console.log(copyArray); // [5, 4, 3, 2, 1]
```

## `sort()`

| Syntax                      | Return type | Description                                                                                                                            |
| --------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.sort(compareFunction)` | `T[]`       | ✏️ Sắp xếp mảng theo hàm so sánh `compareFunction`<br />➡️ Phương thức này sẽ biến đổi mảng và trả về một tham chiếu đến cùng mảng đó. |

| compareFunction(a, b) return value | Sort order                         |
| ---------------------------------- | ---------------------------------- |
| `> 0`                              | sort `a` after `b`                 |
| `< 0`                              | sort `a` before `b`                |
| `=== 0`                            | keep original order of `a` and `b` |

```js
const arr = [1, 2, 3, 6, 5, 4, 58, 9];

const sortedArr = arr.sort((a, b) => a - b);

console.log("arr:", arr); // [1, 2, 3, 4, 5, 6, 9, 58]
console.log("sortedArr:", sortedArr); // [1, 2, 3, 4, 5, 6, 9, 58]
```

## `toSorted()`

| Syntax                          | Return type | Description                                                                                                                         |
| ------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `arr.toSorted(compareFunction)` | `T[]`       | ➡️ Trả về bản sao của một mảng với các phần tử được sắp xếp theo hàm `compareFunction`.<br />⚠️ Mảng ban đầu **KHÔNG** bị thay đổi. |

| compareFunction(a, b) return value | Sort order                         |
| ---------------------------------- | ---------------------------------- |
| `> 0`                              | sort `a` after `b`                 |
| `< 0`                              | sort `a` before `b`                |
| `=== 0`                            | keep original order of `a` and `b` |

```js
const arr = [1, 2, 3, 6, 5, 4, 58, 9];

const sortedArr = arr.toSorted((a, b) => a - b);

console.log("arr:", arr); // [1, 2, 3, 6, 5, 4, 58, 9]
console.log("sortedArr:", sortedArr); // [1, 2, 3, 4, 5, 6, 9, 58]
```

## `concat()`

| Syntax                                   | Return type | Description                                                                                                   |
| ---------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `arr.concat(...items: ConcatArray<T>[])` | `T[]`       | ✏️ Kết hợp hai hoặc nhiều mảng.<br />➡️ Phương thức này trả về một mảng mới và mảng cũ **KHÔNG** bị thay đổi. |

```js
const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 8, 9, 10];
const arr2 = [11, 12, 13, 14, 15];
const merge_array = arr.concat(arr1, arr2, 16, 17, 18);
console.log(merge_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
```

## `slice()`

| Syntax                                    | Return type | Description                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.slice(start?: number, end?: number)` | `T[]`       | ✏️ Phương thức này thực hiện cắt mảng từ vị trí `start` đến `end - 1`<br />👉 Giá trị mặc định của `start = 0`, `end = arr.length`<br />➡️ Trả về 1 mảng mới được cắt, mảng ban đầu không bị thay đổi.<br />✅ Đối với cả `start` và `end`, có thể sử dụng chỉ số âm để chỉ ra khoảng cách từ cuối mảng. Ví dụ: `-2` sẽ chỉ phần tử thứ hai tính từ cuối mảng. |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(arr.slice(2, 6)); // [3, 4, 5, 6]
console.log(arr.slice(4)); // [5, 6, 7, 8, 9, 10, 11, 12]
console.log(arr.slice(-5, -2)); // [8, 9, 10]
console.log(arr.slice(-3)); // [10, 11, 12]
```

## `splice()`

- Đây là phương thức dùng để thêm kết hợp xóa phần tử tại một vị trí ta chỉ định

| Syntax                                                               | Return type | Description                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.splice(start: number, deleteCount: number, ...items: number[])` | `T[]`       | `start`: Chỉ số thêm/xóa phần tử<br />`deleteCount`: Số lượng phần tử sẽ bị xóa<br />`…items`: Các phần tử sẽ được thêm vào từ vị trí `start`<br />✏️ Phương thức này trả về một mảng chứa các phần tử bị xóa.<br />⚠️ Mảng ban đầu sẽ bị thay đổi. |

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

## `toSpliced()`

- Phương thức này cũng giống như `splice()` nhưng chỉ khác là nó trả về 1 mảng mới sau khi được biến đổi và mảng ban đầu **KHÔNG** bị thay đổi.
- Ví dụ:

  ```js
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  //Từ phần tử có chỉ số 1 ("Orange"), xóa đi 2 phần tử ("Orange", "Apple"), đồng thời thêm 2 phần tử mới "Lemon" và "Kiwi"
  const modifiedFruits = fruits.toSpliced(1, 2, "Lemon", "Kiwi");

  console.log(modifiedFruits); // ["Banana", "Lemon", "Kiwi", "Mango"]
  console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]
  ```

## `join()`

| Syntax                         | Return type | Description                                                                                                                                                                              |
| ------------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.join(separator?: string)` | `string`    | ➡️ Trả về một chuỗi sau khi nối tất cả các phần tử của mảng bởi dấu phân tách `separator`.<br />❔Nếu `separator` không được chỉ định, các phần tử mảng sẽ được phân tách bằng dấu phẩy. |

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

console.log(fruits.join(" - ")); // "Banana - Orange - Apple - Mango - Kiwi"
console.log(fruits.join()); // "Banana,Orange,Apple,Mango,Kiwi"
```

## `find(), findIndex(), findLast(), findLastIndex()`

| Syntax                        | Return type | Description                                                                                                                                    |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.find(function)`          | `T`         | ➡️ Trả về**giá trị đầu tiên** thỏa mãn hàm điều kiện `function`. Nếu không tìm thấy sẽ trả về giá trị `undefined`.                             |
| `arr.findIndex(function)`     | `number`    | ➡️ Trả về**CHỈ SỐ** đầu tiên trong mảng có giá trị thỏa mãn hàm điều kiện `function`. Nếu không tìm thấy sẽ trả về `-1`.                       |
| `arr.findLast(function)`      | `T`         | ➡️ Trả về**giá trị đầu tiên tính từ cuối lên trong mảng** thỏa mãn hàm điều kiện `function`. Nếu không tìm thấy sẽ trả về giá trị `undefined`. |
| `arr.findLastIndex(function)` | `number`    | ➡️ Trả về**CHỈ SỐ** đầu tiên tính từ cuối lên trong mảng có giá trị thỏa mãn hàm điều kiện `function`. Nếu không tìm thấy sẽ trả về `-1`.      |

```js
const arr = [1, 6, 96, 12, 36, 78, 41, 53, 159];

function isPrime(x: number) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i == 0) return false;
  }
  return x > 1;
}

//Tìm số nguyên tố đầu tiên trong mảng
console.log(arr.find(isPrime)); // 41
console.log(arr.findIndex(isPrime)); // 6

console.log(arr.findLast(isPrime)); // 53
console.log(arr.findLastIndex(isPrime)); // 7
```

## `includes(), indexOf(), lastIndexOf()`

| Syntax                                                  | Return type | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `arr.includes(searchElement: T, fromIndex?: number)`    | `boolean`   | Trả về `true` nếu phần tử `searchElement` được tìm thấy bắt đầu từ vị trí `fromIndex` (nếu không được chỉ định, mặc định là `0`)                                                                                                     |
| `arr.indexOf(searchElement: T, fromIndex?: number)`     | `number`    | Trả về chỉ số**ĐẦU TIÊN** của phần tử có giá trị bằng `searchElement` bắt đầu từ vị trí `fromIndex` (nếu không được chỉ định, mặc định là `0`). Nếu không tìm thấy, trả về `-1`                                                      |
| `arr.lastIndexOf(searchElement: T, fromIndex?: number)` | `number`    | Trả về vị trí**đầu tiên tính từ cuối lên** của phần tử có giá trị bằng `searchElement` bắt đầu từ vị trí `fromIndex` (nếu không được chỉ định, mặc định là chỉ số của phần tử cuối cùng trong mảng). Nếu không tìm thấy, trả về `-1` |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 10];

console.log(arr.includes(4, 4)); // false

console.log(arr.indexOf(8)); // 7
console.log(arr.indexOf(3, 3)); // -1

console.log(arr.lastIndexOf(8)); // 9
console.log(arr.lastIndexOf(8, -4)); // 7
console.log(arr.lastIndexOf(8, -5)); // -1
```

## `every()`

| Syntax                | Return type | Description                                                                               |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `arr.every(function)` | `boolean`   | Trả về `true` nếu tất cả các phần tử của mảng `arr` thỏa mãn điều kiện của hàm `function` |

```js
const arr = [1, 3, 5, 7, 9];

function isOdd(x) {
  return x & 1;
}
console.log(arr.every(isOdd)); // true
```

## `some()`

| Syntax               | Return type | Description                                                                 |
| -------------------- | ----------- | --------------------------------------------------------------------------- |
| `arr.some(function)` | `boolean`   | Trả về `true` nếu có ít nhất một phần tử trong mảng thỏa mãn hàm `function` |

```js
const arr = [1, 3, 5, 6, 7, 9];

function isEven(x) {
  return x % 2 == 0;
}
console.log(arr.some(isEven)); // true
```

## `fill()`

| Syntax                                             | Return type | Description                                                                                                                                                               |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.fill(value: T, start?: number, end?: number)` | `T[]`       | ✏️ Thay thế tất cả các phần tử từ `start` đến `end - 1` bằng giá trị `value`.<br />➡️ Phương thức này sẽ biến đổi mảng ban đầu và trả về một tham chiếu đến cùng mảng đó. |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.fill(100, 0, 4);
console.log(arr); // [100, 100, 100, 100, 5, 6, 7, 8, 9, 10]
```

## `filter()`

| Syntax                 | Return type | Description                                                                   |
| ---------------------- | ----------- | ----------------------------------------------------------------------------- |
| `arr.filter(function)` | `T[]`       | Trả về một mảng mới chứa tất cả các phần tử thỏa mãn hàm điều kiện `function` |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(x) {
  return x % 2 == 0;
}
let x = arr.filter(isEven);
console.log(x); // [2, 4, 6, 8, 10]
```

## `map()`

| Syntax                                                        | Return type | Description                                                                               |
| ------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `arr.map(function(element, index) { /* return newValue */ })` | `T[]`       | Trả về một mảng sau khi áp dụng tất cả các phần tử từ mảng ban đầu đối với hàm `function` |

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

| Syntax        | Return type | Description                                                  |
| ------------- | ----------- | ------------------------------------------------------------ |
| `arr.shift()` | `T`         | Trả về phần tử đầu tiên của mảng và xóa nó khỏi mảng ban đầu |

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

| Syntax                       | Return type | Description                                                                                       |
| ---------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `arr.unshift(...items: T[])` | `number`    | Trả về độ dài mới của mảng sau khi thêm phần tử `items` vào đầu mảng. Mảng ban đầu sẽ bị thay đổi |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.unshift(100, 200, 300));
console.log(arr);
/*Output:
13
[100, 200, 300, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
```

## `with()`

| Syntax                                   | Return type | Description                                                                                                                              |
| ---------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `arr.with(index: number, value: number)` | `T[]`       | ➡️ Trả về một mảng mới sau khi thay thế giá trị của phần tử có chỉ số `index` thành `value`.<br />⚠️ Mảng ban đầu **KHÔNG** bị thay đổi. |

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.with(6, 100)); // [1, 2, 3, 4, 5, 6, 100, 8, 9, 10]
console.log(arr.with(-3, 5555)); // [1, 2, 3, 4, 5, 6, 7, 5555, 9, 10]
```

## `flat()`

| Syntax                     | Description                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| `arr.flat(depth?: number)` | ➡️ Trả về một mảng mới sau khi đã được làm phẳng<br />⚠️ Mảng ban đầu **KHÔNG** bị thay đổi. |

```js
const arr = [1, [2, [3, [4]]]];

console.log(arr.flat()); // [1, 2, [3, [4]]]
console.log(arr.flat(2)); // [1, 2, 3, [4]]
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]
```

## `flatMap()`

| Syntax                                                              | Description                                                                                                                 |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `arr.flatMap(callback(currentValue: T, index: number, array: T[]))` | 👉 Kết hợp giữa `map()` và `flat(1)` .<br />👉 Nó vừa biến đổi phần tử (giống `map()`), vừa làm phẳng kết quả ở độ sâu `1`. |

```js
const pages = [
  {
    data: [1, 2, 3],
    hasNextPage: true,
    totalPage: 5,
  },
  {
    data: [4, 5, 6],
    hasNextPage: true,
    totalPage: 5,
  },
  {
    data: [7, 8, 9],
    hasNextPage: true,
    totalPage: 5,
  },
  {
    data: [10, 11, 12],
    hasNextPage: true,
    totalPage: 5,
  },
  {
    data: [13, 14, 15],
    hasNextPage: true,
    totalPage: 5,
  },
];

const result = pages.flatMap((page) => page.data); // Tương tự: pages.map(page => page.data).flat()

console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

```js
const arr = [1, 2, 3];

// Dùng flatMap: tự động làm phẳng 1 cấp
console.log(arr.flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 3, 6]
```
