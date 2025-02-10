---
sidebar_position: 6
---

# FileReader

:::info

- `FileReader` là một API trong JavaScript giúp đọc dữ liệu từ tệp (`File`) hoặc dữ liệu nhị phân (`Blob`). Nó thường được sử dụng khi làm việc với tệp do người dùng tải lên thông qua `<input type="file">`.

:::

## 📌 1️⃣ Các phương thức của `FileReader`

| Phương thức                   | Mô tả                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------- |
| `readAsText(blob, encoding?)` | Đọc `Blob/File`dưới dạng **chuỗi văn bản** (UTF-8 mặc định).                                  |
| `readAsDataURL(blob)`         | Đọc `Blob/File`dưới dạng **Base64 Data URL** (thường dùng hiển thị ảnh).                      |
| `readAsArrayBuffer(blob)`     | Đọc `Blob/File`dưới dạng **ArrayBuffer** (dữ liệu nhị phân thô).                              |
| `readAsBinaryString(blob)`    | Đọc `Blob/File`dưới dạng **chuỗi nhị phân** (ít dùng, không hỗ trợ trong một số trình duyệt). |
| `abort()`                     | Dừng quá trình đọc tệp.                                                                       |

## 📌 2️⃣ Các thuộc tính của `FileReader`

| Thuộc tính   | Mô tả                                                                                 |
| ------------ | ------------------------------------------------------------------------------------- |
| `result`     | Chứa dữ liệu đã đọc từ tệp (hoặc `null` nếu chưa đọc xong).                           |
| `readyState` | Trạng thái hiện tại của `FileReader`: `0` (chưa đọc), `1` (đang đọc), `2` (đọc xong). |
| `error`      | Chứa lỗi nếu có khi đọc tệp.                                                          |

## 📌 3️⃣ Các sự kiện của `FileReader`

| Sự kiện       | Khi nào xảy ra?                                |
| ------------- | ---------------------------------------------- |
| `onloadstart` | Khi bắt đầu đọc tệp.                           |
| `onprogress`  | Khi đang đọc (giúp tạo thanh tiến trình).      |
| `onload`      | Khi đọc hoàn tất thành công.                   |
| `onerror`     | Khi có lỗi xảy ra.                             |
| `onabort`     | Khi đọc bị hủy (`abort()`).                    |
| `onloadend`   | Khi đọc hoàn tất (dù thành công hay thất bại). |

## 🔹 4️⃣ Ví dụ thực tế

#### 📄 Ví dụ 1: Đọc file văn bản (`readAsText`):

```js
<input type="file" id="fileInput">
<script>
  document.getElementById("fileInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        console.log("Nội dung file:", reader.result);
      };

      reader.onerror = () => {
        console.error("Lỗi khi đọc file:", reader.error);
      };

      reader.readAsText(file);
    }
  });
</script>
```

#### 🖼️ Ví dụ 2: Hiển thị ảnh (`readAsDataURL`):

```js
<input type="file" id="fileInput">
<img id="preview" style="max-width: 200px; margin-top: 10px;">
<script>
  document.getElementById("fileInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        document.getElementById("preview").src = reader.result;
      };

      reader.readAsDataURL(file);
    }
  });
</script>
```

#### 📦 Ví dụ 3: Đọc file nhị phân (`readAsArrayBuffer`):

```js
<input type="file" id="fileInput">
<script>
  document.getElementById("fileInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const arrayBuffer = reader.result;
        console.log("Dữ liệu nhị phân:", new Uint8Array(arrayBuffer));
      };

      reader.readAsArrayBuffer(file);
    }
  });
</script>
```
