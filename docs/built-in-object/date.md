---
sidebar_position: 2
---

# Date

- Date là một instance về thời gian.

## Khởi tạo

```js
const current = new Date(
  year,
  monthIndex,
  day,
  hours,
  minutes,
  seconds,
  milliseconds
);
```

:::note

Lưu ý: `monthIndex` có giá trị từ từ 0-11 (tương đương từ tháng 1-12)

Các parameter là tùy chọn. Nếu không có parameter thì sẽ khởi tạo ra thời gian của hiện tại

:::

## Phương thức

| Syntax                      | Return                                                                                                                                                           |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `current.getFullYear()`     | Trả về giá trị của năm                                                                                                                                           |
| `current.getMonth()`        | Trả về chỉ số của tháng (`0`: tháng Một, `1`: tháng Hai,… `11`: tháng Mười Hai)                                                                                  |
| `current.getDate()`         | Trả về giá trị ngày (từ `1` đến `31` )                                                                                                                           |
| `current.getDay()`          | Trả về thứ trong tuần (`0`: chủ nhật, `1`: thứ Hai,…, `6`: thứ Bảy)                                                                                              |
| `current.getHours()`        | Trả về giá trị của giờ (`0` đến `23`)                                                                                                                            |
| `current.getMinutes()`      | Trả về giá trị của phút (`0` đến `59`)                                                                                                                           |
| `current.getSeconds()`      | Trả về giá trị của giây (`0` đến `59`)                                                                                                                           |
| `current.getMilliseconds()` | Trả về giá trị của mili giây (từ `0` đến `999`)                                                                                                                  |
| `current.set…(number)`      | Có phương thức get thì sẽ có tất cả phương thức set tương ứng như `setFullYear`, `setMonth`, `setDate`,… Phương thức này nhận một parameter duy nhất là `number` |
