---
sidebar_position: 1
---

# Giới thiệu

## Object là gì?

- Object là một đối tượng trong Javascript, mỗi Object có thể chứa phương thức và thuộc tính trong nó dưới dạng `key: value`
- Mỗi thuộc tính, phương thức ngăn cách nhau bởi dấu `,`
- Để truy cập thuộc tính hay phương thức, ta sử dụng `.` Hoặc thông qua toán tử `[]`
- Các thuộc tính hay phương thức mà không có trong Object sẽ nhận giá trị `undefined`
- Trong phương thức của đối tượng, để truy cập đến thuộc tính ta phải luôn dùng từ khóa `this.property`
- Ví dụ:

```js
const People = {
  firstName: "Chi",
  lastName: "Nguyen",
  id: "B20DCCN111",
  age: 20,
  introduction: function () {
    console.log(
      `Hello, I am ${this.firstName} ${this.lastName}. I am ${this.age} years old`
    );
  },
};

console.log(People["lastName"]); //Nguyen
People.introduction(); //Hello, I am Chi Nguyen. I am 20 years old
```

## Một số cách xử lý object:

- Thêm thuộc tính cho Object:

```js
const People = {
  firstName: "Chi",
  lastName: "Nguyen",
  id: "B20DCCN111",
  age: 20,
  introduction: function () {
    console.log(
      `Hello, I am ${this.firstName} ${this.lastName}. I am ${this.age} years old`
    );
  },
};

People.height = 170;
console.log(People);
```

- Truy cập `value` của một thuộc tính trong đối tượng qua một biến:

```js
const People = {
  firstName: "Chi",
  lastName: "Nguyen",
  id: "B20DCCN111",
  age: 20,
};

let x = "id";
console.log(People[x]);
//Output: B20DCCN111
```

- Tạo thuộc tính mới cho Object thông qua một biến:

```js
let abc_xyz = "email";

const People = {
  firstName: "Chi",
  lastName: "Nguyen",
  id: "B20DCCN111",
  age: 20,
  [abc_xyz]: "minhchico300kc@gmail.com",
};

console.log(People); // {firstName: 'Chi', lastName: 'Nguyen', id: 'B20DCCN111', age: 20, email: 'minhchico300kc@gmail.com'}
```

- Duyệt qua các **key** và **value** của Object:

```js
const People = {
  firstName: "Chi",
  lastName: "Nguyen",
  id: "B20DCCN111",
  age: 20,
};

//Duyệt tất cả các "key" của Object:
for (let x of Object.keys(People)) //Trả về mảng chứa tất cả các "key" của Object
  console.log(x);

//Duyệt tất cả các "value" của Object:
for (let x of Object.values(People)) //Trả về mảng chứa tất cả các "value" của Object
  console.log(x);
```

- Kiểm tra xem một thuộc tính có nằm trong object hay không bằng toán tử `in`:

```js
const obj = {
  name: "Chi",
  age: 21,
};

console.log("name" in obj); // true
```
