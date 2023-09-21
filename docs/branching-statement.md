---
sidebar_position: 5
---

# Câu lệnh rẽ nhánh

## if else

- Cú pháp:

```js
if (condition1) {
  //block of code to be executed if condition1 is true
} else if (condition2) {
  //block of code to be executed if condition1 is false and condition2 is true
} else {
  //block of code to be executed if condition1 is false and condition2 is false
}
```

- Ví dụ:

```js
const number = 10;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

## switch / case

- Cú pháp:

```js
switch (key) {
  case value1:
    //code will run if key === value1
    break;
  case value2:
  //code will run if key === value2
  default:
    //code will run if key is different all case
    break;
}
```

- Ví dụ:

```js
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```
