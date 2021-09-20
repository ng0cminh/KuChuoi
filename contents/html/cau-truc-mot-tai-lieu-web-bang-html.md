---

title: Cấu trúc một tài liệu Web bằng HTML
author:
    name: Kủ Chuối
    description: Học không liên quan đến IT, nhưng thích lập trình. Học lập trình vì có thời gian và thấy vui chứ không vì gì hết. Thích chia sẻ với những người cùng sở thích
date: '2021-09-20T13:50:03.284Z'
isDraft: false
isHomePage: true
isFeatured: false
image: cau-truc-html.jpg
tags: ["html", "cấu trúc html"]
keywords: html, html là gì?, vì sao phải học html
description: Giới thiệu về HTML để hiểu về ngôn ngữ đánh dấu siêu văn bản HTML.

---

Một tài liệu hay tập tin HTML để được gọi là một tài liệu web thì sẽ được bao gồm bốn yếu tố chính đó là:

- Có thẻ khai báo loại tập tin/tài liệu.
- Có thẻ đóng và mở tài liệu HTML.
- Có thẻ đóng và mở phần thông tin website.
- Có thẻ đóng và mở phần nội dung website.

Và trong bài này, chúng ta sẽ đi tìm hiểu qua 4 phần đó để tạo ra một tài liệu website bằng HTML đúng chuẩn.

Trước khi mình giải thích rõ các thành phần đó thì bạn hãy tạo ra một tập tin HTML với nội dung sau và lưu lại.

#### Thẻ khai báo loại tập tin

Ngay tại đoạn đầu tiên của tài liệu, chúng ta phải có một thẻ khai báo loại tập tin cho nó như thế này, cụ thể là ta sẽ khai báo rằng đây là tập tin HTML.

``<!DOCTYPE html>``

Với thẻ `<!DOCTYPE>` ở trên, ta có thêm một tham số đó là `html`. Tham số html này nghĩa là chúng ta khai báo với trình duyệt rằng đây là tài liệu HTML5 (HTML phiên bản 5), dù rằng chúng ta có thể không sử dụng HTML5 nhưng hiện tại khi khai báo tập tin HTML thì bạn cứ sử dụng tham số này vừa ngắn gọn lại vừa dễ dàng sử dụng thêm HTML5 nếu thích.

Ngoài ra, nó còn có một vài tham số khác mà bạn có thể tham khảo thêm [tại đây](https://www.w3schools.com/tags/tag_DOCTYPE.asp).

Có một điều thú vị là thẻ `<!DOCTYPE>` không phải là một thẻ của HTML, mà nó chỉ là một thẻ khai báo thông tin trên tài liệu để trình duyệt hiểu phiên bản HTML mà bạn sử dụng trên website mà thôi.

####  Thẻ đóng mở tài liệu HTML

Kế tiếp, ở tầng tiếp theo sẽ là thẻ `<html> </html>` có nhiệm vụ khai báo cho trình duyệt biết rằng những nội dung bên trong cặp thẻ này là HTML. Tuy nhiên, bên trong thẻ này mình có thêm một **thuộc tính** tên là **lang** với giá trị là **vi** (`<html lang="vi">`). Thuộc tính này nghĩa là chúng ta khai báo cho trình duyệt biết mã ngôn ngữ mà ta sử dụng trên website, mã vi nghĩa là Vietnamese – tiếng Việt, bạn có thể tham khảo các mã ngôn ngữ khác [**tại đây**](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

Bạn nên nhớ một điều là thẻ `<html> </html>` phải bao bọc toàn bộ nội dung website, không bao gồm thẻ `<!DOCTYPE>`.

#### Thẻ đóng và mở phần thông tin website

Phần khai báo thông tin của website sẽ được đặt vào bên trong cặp thẻ gọi là `<head> </head>`. Nội dung bên trong thẻ này là các thẻ chuyên cho khai báo thông tin website (meta), tên website (title), khai báo CSS (style), khai báo các đoạn Javascript (script) và một số thông tin khác. Thường là các thông tin được khai báo trong đây sẽ không hiển thị trực tiếp thành siêu văn bản trên web nhưng nó sẽ có nhiệm vụ chứa các thông tin quan trọng về website.

#### Có thẻ đóng và mở phần nội dung website

Đây là cặp thẻ mà bạn sẽ tiến hành viết nội dung vào, đó là cặp thẻ `<body> </body>`. Cặp thẻ này là để trình duyệt xác định đây là phần thân của website, nó sẽ chứa toàn bộ các nội dung siêu văn bản hoặc media mà bạn muốn nó hiển thị lên trang web của bạn. Phần này chúng ta sẽ làm việc nhiều hơn ở các bài sau.

Bây giờ nếu bạn mở tài liệu HTML ở trên lên bằng trình duyệt thì chỉ sẽ thấy nó có mỗi đoạn nội dung nằm bên trong thẻ `<body> </body>` mà thôi.

### Lời kết

Vậy là bây giờ bạn đã có thể tự tạo ra một tài liệu website đơn giản bằng HTML rồi đó, chỉ cần áp dụng cấu trúc tài liệu theo thứ tự mà mình đã giải thích và có ví dụ ở trên. Ở bài tiếp theo, chúng ta sẽ tìm hiểu qua một số thẻ quan trọng cần biết mà bạn nên khai báo trong cặp thẻ `<head> </head>` để khai báo thông tin một website.