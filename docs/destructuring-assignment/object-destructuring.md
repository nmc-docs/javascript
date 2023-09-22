---
sidebar_position: 3
---

# Object destructuring

- Đối với **object destructuring** , ta sử dụng `{}` để bao bọc các biến được destruct

:::caution

Chú ý: tên các biến khi được destruct phải trùng với tên `property` có mặt trong `object`, nếu không, sẽ trả về `undefined`

:::

- Ví dụ:

```js
const aboutMe = {
  fullName: "Nguyen Minh Chi",
  age: 20,
  id: "022202000324",
};

const { fullName, age, id } = aboutMe;
console.log(fullName, age, id); //Nguyen Minh Chi 20 022202000324
```

## Kết hợp với toán tử rest

- Toán tử `rest` cũng có thể kết hợp với **object destructuring** , nó sẽ gom tất cả các thuộc tính còn lại vào một object:

```js
const person = {
  fullName: "John",
  age: 30,
  address: "New York",
  company: "Google",
  salaryPerMonth: 4500,
};

const { fullName, age, ...rest } = person;
console.log(fullName, age, rest);
/*
John 
30 
{address: 'New York', company: 'Google', salaryPerMonth: 4500}
*/
```

- Nếu ta muốn sử dụng tên biến mới thay vì phải dùng tên trùng với tên `key` trong object khi destructuring:

```js
const aboutMe = {
  fullName: "Nguyen Minh Chi",
  age: 20,
  id: "022202000324",
};

const { fullName: a, age: b, id: c } = aboutMe;
console.log(a, b, c); //Nguyen Minh Chi 20 022202000324
```
