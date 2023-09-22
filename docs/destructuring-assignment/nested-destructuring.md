---
sidebar_position: 5
---

# Nested destructuring

```js
let numbers = [1, [2, 3, 4], 5];
let [a, [b, c, d], e] = numbers;
console.log(a, b, c, d, e); // 1 2 3 4 5
/*Explain:
[b, c, d] = [2, 3, 4] => b = 2, c = 3, d = 4*/
```

```js
let person = {
  name: "Foo",
  age: 15,
  information: { address: "Bar", phone: "0199999999" },
};
let {
  name,
  age,
  information: { address, phone },
} = person;
console.log(name); // Foo
console.log(age); // 15
console.log(address); // Bar
console.log(phone); // 0199999999
```
