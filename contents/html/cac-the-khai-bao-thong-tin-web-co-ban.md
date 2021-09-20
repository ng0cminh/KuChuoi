---

title: Các thẻ khai báo thông tin web cơ bản
author:
    name: Kủ Chuối
    description: Học không liên quan đến IT, nhưng thích lập trình. Học lập trình vì có thời gian và thấy vui chứ không vì gì hết. Thích chia sẻ với những người cùng sở thích
date: '2021-09-20T15:10:03.284Z'
isDraft: false
isHomePage: true
isFeatured: false
image: the-html-thong-tin.jpeg
tags: ["html", "thẻ khai báo thông tin"]
keywords: html, thẻ html khai báo thông tin
description: Giới thiệu về HTML để hiểu về ngôn ngữ đánh dấu siêu văn bản HTML.

---

Như ở phần trước thì bạn đã hiểu một tài liệu web bằng HTML hoàn chỉnh sẽ bao gồm 4 phần chính là thẻ khai báo loại tập tin <!DOCTYPE>, thẻ <html>, thẻ khai báo thông tin website `<head>` và thẻ `<body>`.

Và bên trong cặp thẻ `<html>` trong tài liệu thì đầu tiên sẽ là cặp thẻ `<head>`, cặp thẻ này sẽ có nhiệm vụ để bạn khai báo thông tin tài liệu website mà bạn đang tạo ra như tên tài liệu, tên tác giả, mô tả, khai báo CSS, khai báo Javascript,…rất nhiều. Nhưng tạm thời ở đây, các bạn chỉ cần biết qua một số thẻ khai báo thông tin web cơ bản được đặt bên trong thẻ cặp `<head>` mà hầu như dự án nào bạn cũng sẽ dùng tới.

### Khai báo tên tài liệu với cặp thẻ `<title>`

Thẻ `<title> </title>` có tác dụng khai báo tên tài liệu web của bạn đang soạn. Ứng dụng thực tiễn của thẻ này là giúp trình duyệt hiển thị tên tài liệu khi mở lên và các cỗ máy tìm kiếm như Google cũng hiển thị nội dung trong cặp thẻ này để lấy tên tài liệu.

Ví dụ như với đoạn HTML trên, mình sẽ thiết lập tên tài liệu này là *Kủ Chuối Blog – [KuChuoi.Com]()*, bạn hãy thử lưu lại và mở nó lên bằng trình duyệt sẽ thấy kết quả như sau.

![](/images/contents/html/the-title-trong-html.png)

### Khai báo dữ liệu vĩ mô với thẻ `<meta>`

Thẻ `<meta>` là một thẻ đặc biệt vì nó không có thẻ đóng như các thẻ khác mà sẽ có dấu gạch chéo như `/` ở đằng trước ký tự `>` cuối cùng. Thẻ này có mục đích khai báo các dữ liệu vĩ mô trong tài liệu web HTML của bạn như mô tả, từ khóa, tên tác giả, bảng mã ký tự sử dụng,…

Thẻ meta luôn được khai báo kèm theo ít nhất là một thuộc tính và mỗi thuộc tính phải luôn có giá trị. Ví dụ:

`<meta charset="utf-8" />`

Trong đó, `charset` là tên thuộc tính và `utf-8` là giá trị của thuộc tính `charset`.

#### Thuộc tính charset

Thuộc tính `charset` trong thẻ `<meta>` có nhiệm vụ khai báo cho trình duyệt biết bảng mã ký tự siêu văn bản bên trong tài liệu là gì. Và hiện nay hầu hết chúng ta đều sử dụng bảng mã UTF-8 cho tất cả ngôn ngữ bao gồm các ngôn ngữ tiếng latin, chữ Hán – Nôm và các ngôn ngữ đọc từ phải sang trái (Right to Left – RTL) như tiếng Ả-Rập chẳng hạn.

#### Thuộc tính name

Đối với thuộc tính name thì thẻ meta của bạn phải có hai thuộc tính, đó là thuộc tính name và content, trong đó thuộc tính content được xem là thiết lập nội dung cho thuộc tính name. Ví dụ:

`<meta name="author" content="Kủ Chuối" />`

Trong đó, giá trị của thuộc tính name là một giá trị có sẵn vì hiện tại thuộc tính name hỗ trợ một số giá trị như:

- `author`: Khai báo tên tác giả của tài liệu.
- `description`: Khai báo mô tả của tài liệu.
- `keyword`: Khai báo từ khóa của tài liệu, các từ khóa này sẽ đóng vai trò hỗ trợ các trình tìm kiếm văn bản hoặc máy tìm kiếm website dò tìm.

Đó là các giá trị quan trọng thường dùng, ngoài ra còn một số giá trị khác như:

- `application-name`: Tên ứng dụng đại diện của tài liệu web.
- `generator`: Khai báo tên ứng dụng tạo ra tài liệu.

### Lời kết

Như mình đã nói ở đầu bài là các thẻ khai báo thông tin quan trọng cho tài liệu HTML còn khá là nhiều nhưng dù sao các thẻ đó bạn cũng sẽ không sử dụng bây giờ nên mình sẽ đề cập tới ở các serie khác. Nhưng trước mắt bạn nên nắm rõ ý nghĩa các thẻ kia để khi nhìn vào một mã nguồn HTML thì bạn còn hiểu được ý nghĩa của chúng.
