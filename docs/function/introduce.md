---
sidebar_position: 1
---

# Giới thiệu về hàm

- Trong JavaScript, một function là một đối tượng đặc biệt có thể thực hiện một tác vụ nào đó khi được gọi.
- Các function có thể nhận các đối số (arguments) để thực hiện một tác vụ hoặc tính toán nào đó và có thể trả về một giá trị nào đó.
- Function trong JavaScript cũng có thể được định nghĩa như một biến, được gán cho một biến, hoặc truyền vào một function khác dưới dạng đối số.
- Các function trong JavaScript có rất nhiều ứng dụng, từ việc xử lý sự kiện (event handling), tạo ra các hiệu ứng động trên trang web (animations), xử lý dữ liệu (data processing), tạo ra các đối tượng và thực hiện các tác vụ phức tạp khác

* Có 3 cách viết function:
  - [Declaration function](./declaration-function)
  - [Arrow function](./arrow-function)
  - [IIFE](./iife)
* Function có thể gán cho một biến nếu nó trả về giá trị:

```js
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
```

:::note
Giả sử ta có một function tên là **myFunction** . Dưới đây là sự khác nhau khi viết `myFunction` và `myFunction()`:

- **myFunction** : Đây chỉ là một tham chiếu đến một hàm. Khi bạn viết `myFunction` mà không gọi nó bằng cách thêm dấu ngoặc tròn sau tên hàm, nghĩa là bạn đang truyền tham chiếu của hàm đó cho một biến khác hoặc sử dụng nó trong một ngữ cảnh khác. Hàm sẽ không được thực thi trong trường hợp này.
- **myFunction()** : Đây là cách gọi hàm và thực thi nó. Khi bạn viết `myFunction()` với dấu ngoặc tròn, hàm sẽ được gọi và thực thi, và kết quả của nó sẽ được trả về.

:::

```js
function greet() {
  console.log("Hello!");
}

const sayHello = greet; // Đây là tham chiếu đến hàm greet, không gọi hàm
sayHello(); // Output: Hello!

const sayHi = greet(); // Đây là gọi hàm greet và lấy kết quả trả về (trong trường hợp này là undefined)
sayHi(); // TypeError: sayHi is not a function
```

Trong ví dụ trên, `sayHello` là một tham chiếu đến hàm `greet`, và khi gọi `sayHello()`, hàm `greet` được thực thi và in ra `Hello!`.

Trong khi đó, `sayHi` là kết quả của việc gọi hàm `greet()` (trong trường hợp này là undefined). Khi gọi `sayHi()`, nó sẽ gây ra lỗi `TypeError` vì `sayHi` không phải là một hàm.
