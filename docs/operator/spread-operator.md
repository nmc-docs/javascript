---
sidebar_position: 7
---

# Toán tử spread

- **Spread** là một toán tử rải tất cả từng phần tử của Array hoặc tất cả các thuộc tính Object.
- Ví dụ: sử dụng toán tử spread `...`:

```js
//Nối hai mảng với nhau:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArr = [...arr1, ...arr2];
console.log(mergeArr); //[1,2,3,4,5,6]

//Nối thuộc tính của 2 object với nhau:
const obj1 = { name: "Chi" };
const obj2 = { age: 20 };
const mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj); // {name:"Chi", age:20}
```

:::tip
Toán tử **spread** được sử dụng phổ biến trong việc copy mảng hay object (1 cấp độ)
:::

## Lưu ý

:::caution

- Toán tử **spread (`...`) không thực hiện deep copy** cho các **object lồng nhau nhiều cấp** (nested object). Nó chỉ thực hiện **shallow copy** – tức là chỉ sao chép các **thuộc tính ở cấp đầu tiên** . Xem ví dụ bên dưới.

:::

- Giả sử ta có:

```js
const obj1 = {
  name: "Chi",
  address: {
    city: "Hanoi",
    location: {
      lat: 21,
      lng: 105,
    },
  },
};

const obj2 = { ...obj1 };
```

- `obj2` là một **bản sao nông** (shallow copy) của `obj1`.
- `obj2.address` **không phải là một bản sao mới** , mà là một **tham chiếu** đến `obj1.address`.
- Tương tự, `obj2.address.location` cũng trỏ đến cùng vùng nhớ với `obj1.address.location`.

⚠️ **Điều gì sẽ xảy ra nếu ta sửa nested object?**

```js
obj2.address.city = "Saigon";
console.log(obj1.address.city); // 👉 "Saigon" (bị ảnh hưởng!)
```

→ Điều này xảy ra vì `address` là một object lồng bên trong, và nó được sao chép bằng tham chiếu chứ không phải tạo bản sao mới.

✅ Nếu ta muốn **deep copy** , ta sẽ sử dụng phương thức sẵn có mà JS cung cấp đó là `structuredClone()`:

```js
const obj1 = {
  name: "Chi",
  address: {
    city: "Hanoi",
    location: {
      lat: 21,
      lng: 105,
    },
  },
};

const obj2 = structuredClone(obj1);

obj2.address.city = "QuangNinh";

console.log("Obj1 city: ", obj1.address.city); // 👉 "Hanoi"
console.log("Obj2 city: ", obj2.address.city); // 👉 "QuangNinh"
```
