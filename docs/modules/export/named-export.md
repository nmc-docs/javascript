---
sidebar_position: 2
---

# Named export

**Named exports** có hai cách viết:

- **Inline** (viết trực tiếp khi khai báo tại mỗi chức năng)
- **All at once at the bottom** (viết tất cả xuống cuối file)

:::note

Lưu ý: Các chức năng được viết theo **All at once at the bottom** phải được bao bọc bởi `{}`

:::

- Ví dụ về cách viết **Inline:**

```js
export const name = "Jesse";
export const age = 40;

export const greeting = () => {
  console.log("Hello ");
};

export function add(a, b) {
  return a + b;
}

//Destructuring export
const Course = {
  title: "JavaScript for beginners",
  price: 500,
  hours: 120,
};
export const { title, price, hours } = Course;
```

- Ví dụ về cách viết **All at once at the bottom** :

```js
const name = "Jesse";
const age = 40;

const greeting = () => {
  console.log("Hello ");
};

function add(a, b) {
  return a + b;
}

export { name, age, greeting, add };
```

```js
const name = "Jesse";
const age = 40;

//Export với tên thay thế.
export { name as NAME, age as AGE };
```
