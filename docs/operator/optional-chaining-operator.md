---
sidebar_position: 6
---

# Toán tử optional chaining

## 1. Khái niệm:

- **Optional chaining** trong JavaScript kí hiệu là `?.` , dùng để dừng lại quá trình xử lí nếu giá trị trước `?.` có kiểu dữ liệu là `undefined` hoặc `null`, giúp tránh gây lỗi ngoài ý muốn.
- Nếu giá trị trước `?.` nhận giá trị `undefined` hoặc `null`, toán tử này sẽ trả về `undefined`

## 2. Ví dụ:

```js
const str = "Earth";
const newStr = str?.replace("Earth", "Moon");
console.log(newStr);
/* Vì xâu str khác undefined và null nên sẽ thực hiện phương thức replace, do đó newStr = "Moon" */
```

```js
const myInfo = {
  name: "Nguyen Minh Chi",
  age: 20,
  school: {
    // name: {
    //     fullName: "Posts and Telecommunications Institute of Technology",
    //     acronymyName: "PTIT",
    // },
    address: "Ha Dong, Ha Noi",
  },
};
const schoolName = myInfo.school?.name?.fullName;
console.log(schoolName);
/* myInfo.school có giá trị khác undefined/null => thực hiện tiếp  
   myInfo.school.name có giá trị undefined vì không có thuộc tính "name" trong object "myInfo.school" => dừng việc thực hiện và trả về giá trị undefined cho schoolName.
*/
```

```js
const userAdmin = {
  admin() {
    console.log("I am admin");
  },
};
const userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); //Không được gọi

/* Giải thích:
+ Object userAdmin có phương thức admin nên phương thức đó sẽ được gọi
+ Object userGuest không có phương thức admin (hay nói cách khác là nó có giá trị undefined) nên sẽ không được gọi
 */
```

```js
delete user?.name; //Xóa thuộc tính "name" của "user" nếu user tồn tại
```

:::caution
Chú ý: ta có thể dùng `?.` để đọc và xóa thuộc tính trong Object, nhưng không thể thay đổi giá trị của thuộc tính
:::

## 3. Optional chaining kết hợp với toán tử Nullish:

- Ví dụ khi Optional Chaining (`?.`) kết hợp với toán tử nullish (`??`):

```js
const foo = {
  someFooProp: "hello",
};

console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // HELLO
console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // not available
```
