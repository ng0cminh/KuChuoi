---

title: HTML là gì? Và vì sao phải học nó khi học lập trình Web
author:
    name: Kủ Chuối
    description: Học không liên quan đến IT, nhưng thích lập trình. Học lập trình vì có thời gian và thấy vui chứ không vì gì hết. Thích chia sẻ với những người cùng sở thích
date: '2021-09-20T13:10:03.284Z'
isDraft: false
isHomePage: true
isFeatured: false
image: html-co-ban.png
tags: ["html", "lập trình web"]
keywords: html, html là gì?, vì sao phải học html
description: Giới thiệu về HTML để hiểu về ngôn ngữ đánh dấu siêu văn bản HTML.

---

Chào mừng bạn đến với thế giới HTML, và đây cũng là phần mở đầu để bạn biết rõ HTML là gì và nó được ứng dụng ra sao, hiểu được vì sao nó lại quan trọng dù bạn là người làm website chuyên nghiệp hay nghiệp dư đều phải biết qua nó. Thậm chí những người làm công việc không mấy liên quan như Biên tập viên cũng cần nên biết HTML, tại sao ư? Hồi sau sẽ rõ.

## HTML là gì?

HTML là chữ viết tắt của cụm từ HyperText Markup Language((Xem thêm tại [http://vi.wikipedia.org/wiki/HTML](http://vi.wikipedia.org/wiki/HTML))) (dịch là Ngôn ngữ đánh dấu siêu văn bản) được sử dụng để tạo một trang web, trên một website có thể sẽ chứa nhiều trang và mỗi trang được quy ra là một tài liệu HTML (thi thoảng mình sẽ ghi là một tập tin HTML). Cha đẻ của HTML là Tim Berners-Lee, cũng là người khai sinh ra World Wide Web và chủ tịch của World Wide Web Consortium (W3C – tổ chức thiết lập ra các chuẩn trên môi trường Internet).


Một tài liệu HTML được hình thành bởi các phần tử HTML (HTML Elements) được quy định bằng các cặp thẻ (tag), các cặp thẻ này được bao bọc bởi một dấu ngoặc ngọn (ví dụ `<html>`) và thường là sẽ được khai báo thành một cặp, bao gồm thẻ mở và thẻ đóng (`ví <strong> dụ </strong> và` ). Các văn bản muốn được đánh dấu bằng HTML sẽ được khai báo bên trong cặp thẻ (`ví dụ <strong>Đây là chữ in đậm</strong>`). Nhưng một số thẻ đặc biệt lại không có thẻ đóng và dữ liệu được khai báo sẽ nằm trong các thuộc tính (ví dụ như thẻ `<img>`).

Một tập tin HTML sẽ bao gồm các phần tử HTML và được lưu lại dưới đuôi mở rộng là .html hoặc .htm.

## HTML được xử lý ra sao?

Khi một tập tin HTML được hình thành, việc xử lý nó sẽ do trình duyệt web đảm nhận. Trình duyệt sẽ đóng vai trò đọc hiểu nội dung HTML từ các thẻ bên trong và sẽ chuyển sang dạng văn bản đã được đánh dấu để đọc, nghe hoặc hiểu (do các bot máy tính hiểu).

## Cấu trúc một đoạn HTML

Như mình đã nói ở trên, HTML sẽ được khai báo bằng các phần tử bởi các từ khóa. Nội dung nằm bên trong cặp từ khóa sẽ là nội dung bạn cần định dạng với HTML. Ví dụ dưới đây là một đoạn HTML khai báo một đoạn văn bản.

`<p>Đây là một đoạn văn bản trong HTML.</p>`

Ngoài ra, trong các thẻ còn có các thuộc tính, thuộc tính sẽ đặt bên trong thẻ mở đầu, mỗi thuộc tính sẽ có giá trị được đặt trong dấu ngoặc kép và cách nhau bởi dấu bằng (=) với tên thuộc tính. Ví dụ dưới đây là một thẻ có sử dụng thuộc tính-

`<form action="https://kuchuoi.com"> </form>`

Một thẻ có thể sử dụng nhiều thuộc tính chứ không phải chỉ một thuộc tính nhé.

## Dùng chương trình gì để tạo tập tin HTML?

HTML là một tập tin siêu văn bản nên bạn có thể dùng các chương trình soạn thảo văn bản không có chức năng định dạng văn bản để tạo ra một tập tin HTML. Trong Windows, bạn có thể dùng Notepad để tạo ra một tập tin HTML, còn trên Mac thì có thể dùng TextEdit và Vim trên các hệ điều hành Linux khác. Miễn là sau đó bạn phải lưu tập tin thành đuôi .html và sử dụng trình duyệt website để đọc nó.


![HTML có thể được soạn thảo bởi bất kỳ một trình soạn thảo văn bản đơn giản.](/images/contents/html/html-notepad.png)
HTML có thể được soạn thảo bởi bất kỳ một trình soạn thảo văn bản đơn giản.


Tuy nhiên Notepad lại quá đơn giản để sử dụng cho mục đích soạn thảo, nên từ các bài sau chúng ta sẽ dùng một chương trình khác tương tự để soạn thảo HTML. Và mình cũng không bao giờ khuyến khích bạn sửa một tập tin HTML bất kỳ bằng chương trinh Notepad để tránh gặp các lỗi hiển thị ký tự tiếng Việt.

## HTML đóng vai trò gì trong website?

Như mình đã nói, HTML là một ngôn ngữ đánh dấu siêu văn bản nên nó sẽ có vai trò xây dựng cấu trúc siêu văn bản trên một website, hoặc khai báo các tập tin kỹ thuật số (media) như hình ảnh, video, nhạc.

![Vai trò của từng ngôn ngữ trong website](/images/contents/html/html-la-gi.png)
Vai trò của từng ngôn ngữ trong website

Điều đó không có nghĩa là chỉ sử dụng HTML để tạo ra một website mà HTML chỉ đóng một vai trò hình thành trên website. Ví dụ một website như Thachpham.com sẽ được hình thành bởi:

**HTML** – Xây dựng cấu trúc và định dạng các siêu văn bản.
**CSS** – Định dạng các siêu văn bản dạng thô tạo ra từ HTML thành một bố cục website, có màu sắc, ảnh nền,….
**Javascript** – Tạo ra các sự kiện tương tác với hành vi của người dùng (ví dụ nhấp vào ảnh trên nó sẽ có hiệu ứng phóng to).
**PHP** – Ngôn ngữ lập trình để xử lý và trao đổi dữ liệu giữa máy chủ đến trình duyệt (ví dụ như các bài viết sẽ được lưu trong máy chủ).
**MySQL** – Hệ quản trị cơ sở dữ liệu truy vấn có cấu trúc (SQL – ví dụ như các bài viết sẽ được lưu lại với dạng dữ liệu SQL).
Nhưng ở đây, tạm thời bạn chỉ cần quan tâm đến HTML mà thôi. Dễ hiểu hơn, bạn hãy nghĩ rằng nếu website là một cơ thể hoàn chỉnh thì HTML chính là bộ xương của cơ thể đó, nó như là một cái khung sườn vậy.

Như vậy, dù website thuộc thể loại nào, giao tiếp với ngôn ngữ lập trình nào để xử lý dữ liệu thì vẫn phải cần HTML để hiển thị nội dung ra cho người truy cập xem.

Nhân tiện đây mình cũng nói luôn, website có hai loại chính:

**Website tĩnh (static web)** – Là một website không giao tiếp với máy chủ web để gửi nhận dữ liệu mà chỉ có các dữ liệu được khai báo sẵn bằng HTML và trình duyệt đọc.
**Website động (dynamic web)** – Là một website sẽ giao tiếp với một máy chủ để gửi nhận dữ liệu, các dữ liệu đó sẽ gửi ra ngoài cho người dùng bằng văn bản HTML và trình duyệt sẽ hiển thị nó. Để một website có thể giao tiếp với máy chủ web thì sẽ dùng một số ngôn ngữ lập trình dạng server-side như PHP, ASP.NET, Ruby,..để thực hiện. Ví dụ như một website làm bằng WordPress là website động.
Tài nguyên tham khảo HTML
Trong serie này mình không có nói hết về các thẻ trong HTML mà chỉ nói qua các thẻ quan trọng nhất vì bạn sẽ sử dụng nó thường xuyên. Vì vậy, bạn hãy vào trang HTML Reference để tham khảo ý nghĩa và cách sử dụng của tất cả các thẻ HTML.

## Lời kết

Ở trên mình đã giải thích khá chi tiết và cặn kẽ về HTML và vai trò của nó trên website là như thế nào. Thoạt nhìn có thể bạn sẽ tưởng các thông tin này chỉ mang tính tham khảo nhưng đó lại là các thông tin cực kỳ quan trọng, vì bạn đã làm web thì phải hiểu rõ về nó.

Ở các bài sau, chúng ta sẽ đi vào việc chuẩn bị để soạn thảo một tập tin HTML đầu tiên và chạy thử nó nhé.