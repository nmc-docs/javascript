---
sidebar_position: 4
---

# Parameter destructuring

- Ta có thể destruct phần tử của `array` hay `object` làm `parameter` của `function`.
- **Parameter destructuring** đối với `array`:

```js
const transformArray = ([firstElement, ...otherElements]) => {
  return otherElements.map((e) => e * firstElement);
};

console.log(transformArray([10, 2, 3, 4, 5, 6])); // [20, 30, 40, 50, 60]
```

- **Parameter destructuring** đối với `object`:

```js
const greeting = ({ name, ...otherProperty }) => {
  console.log(`Hello, I am ${name}`);
  console.log(otherProperty);
};

const person = {
  name: "John",
  age: 20,
  address: "New York",
  company: "Google",
};

greeting(person);
/*
Hello, I am John
{age: 20, address: "New York", company: "Google"}
*/
```
