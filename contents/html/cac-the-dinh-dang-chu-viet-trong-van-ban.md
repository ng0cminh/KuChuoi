---

title: Các thẻ định dạng chữ viết trong văn bản
author:
    name: Kủ Chuối
    description: Học không liên quan đến IT, nhưng thích lập trình. Học lập trình vì có thời gian và thấy vui chứ không vì gì hết. Thích chia sẻ với những người cùng sở thích
date: '2021-09-20T16:10:03.284Z'
isDraft: false
isHomePage: true
isFeatured: true
image: cac-the-dinh-dang-chu-viet.png
tags: ["html", "thẻ định dạng chữ viết"]
keywords: html, thẻ định dạng chữ viết
description: Giới thiệu về HTML để hiểu về ngôn ngữ đánh dấu siêu văn bản HTML.

---

Với một số người mới bắt đầu học web việc xây dựng nội dung của đoạn văn bản chắc chắn sẽ gặp phải những khó khăn và trục trặc. Vì là người mới bắt đầu tìm hiểu chắc chắn bạn sẽ không thể nào biết hết được cách sử dụng của các thẻ trong HLML như: thẻ gì dùng để in đậm, cũng như in nghiêng hay dùng thẻ gì để tạo được màu chữ, căn lề phải, lề trái cũng như thay đổi cỡ chữ,… Vậy trong bài này chúng ta cùng bắt tay vào tìm hiểu các thẻ định dạng văn bản để hiển thị nội dung ra ngoài trang web nhé.

Và để bắt đầu việc định dạng này chúng ta sẽ cùng thực hiện trong cặp thẻ <body> </body>.
Sau đây tôi xin trình bày các thẻ cơ bản dùng để định dạng trong tập tin HTML

- **Tiêu đề và đoạn văn bản**
  Chúng ta cần phân biệt hai thành phần tiêu đề (Headline) và đoạn văn bản (Paragraph) để sau này sử dụng cho đúng. Thẻ tiêu đề thường được dùng để đánh dấu tiêu đề của văn bản, nó được ví như từng chương trong mục lục của một quyển sách vậy. Trong mã HTML, nó được định nghĩa bằng cặp thẻ <hn> </hn>, trong đó n là số tự nhiên từ 1 đến 6 tương ứng với mức độ lớn nhỏ của các thẻ. Thông thường, thì h1 sẽ có kích cỡ lớn nhất và giảm dần tới h6.
  Ví dụ:

![dinh-dang-tieu-de](/images/contents/html/dinh-dang-tieu-de.png)

Định dạng tiêu đề văn bản

- Còn đoạn văn bản được khai báo trong cặp thẻ <p> </p>. Các văn bản nằm trong cặp thẻ này sẽ được hiểu là một đoạn văn bản, mỗi đoạn văn bản khi xuống dòng sẽ được cách nhau với một tỷ lệ nhất định.
  Ví dụ:

![dinh-dang-doan-van-ban](/images/contents/html/dinh-dang-doan-van-ban.png)

Định dạng đoạn văn bản

- **Các thẻ định dạng chữ viết**

Đôi khi trong đoạn văn bản của chúng ta cũng cần định dạng theo kiểu in nghiêng, in đậm, gạch chân,… Sau đây, sẽ là cách sử dụng của các cặp thẻ đó.

![dinh-dang-mot-so-the-trong-van-ban](/images/contents/html/dinh-dang-mot-so-the-trong-van-ban.png)

Một số thẻ định dạng chữ viết cơ bản

Giải thích:

- `<b>` : in đậm
-  `<i>`: in nghiêng
- `<u>`: gạch chân
-  `<em>`: nhấn mạnh câu
-  `<hr>`: thước kẻ ngang
-  `<strike>`: gạch ngang chữ viết.
-  `<code>`: định dạng cho đoạn mã nào đó
-  `<mark>`: Tô sáng chữ viết.
- Ngoài ra, chúng ta có thể lồng các cặp thẻ này lại với nhau với những nội dung như ý muốn.

- **Thẻ trích dẫn**
  Thẻ trích dẫn này sẽ được sử dụng thường xuyên trong việc viết báo hay các phóng sự, mục đích của nó dùng để định dạng một câu nói hay một trích dẫn của ai đó.
  Thẻ trích dẫn sẽ được nằm trong `<quote>` và tên tác giả nằm trong thẻ `<cite>`
  ![dinh-dang-the-trich-dan](/images/contents/html/dinh-dang-the-trich-dan.png)

Thẻ trích dẫn

Khi nhìn qua thì ta thấy thẻ `<quote>` không có gì khác lạ cả. Tuy nhiên, sau này làm tới phần CSS chúng ta thêm vào sẽ thể hiện được rõ hơn. Lưu ý, thẻ `<cite>` thường chúng ta nên đặt trong thẻ `<quote>` thôi chứ không nên dùng tùy tiện.

- **Định dạng chữ viết bằng thuộc tính style**
  Chúng ta có thể thêm màu sắc, màu nền cũng như thay đổi kích thước và font cho chữ viết bằng cách sử dụng thuộc tính style. Thuộc tính style có thể đặt bất kỳ trong cặp thẻ nào và các giá trị này thông thường do CSS đảm nhận. Tuy nhiên, với một số đoạn văn bản thông thường, thay vì phải mất thì giờ cho việc CSS thì chúng ta có thể chỉnh sửa trên HTML.
  Cấu trúc: <tên thẻ style = “tên thuộc tính: giá trị”>
  ***– Căn lề văn bản:*** Để canh lề một văn bản chúng ta dùng thuộc tính: text-align với các giá trị left, center, right hoặc justify.

![can-le](/images/contents/html/can-le.png)

Căn lề văn bản

 ***– Thiết lập màu chữ:*** Cấu trúc: <tên thẻ style = “color: mã màu/tên màu”>
Để thiết lập màu chữ, chúng ta sử dụng thuộc tính color kết hợp với mã màu HEX hoặc   tên màu viết bằng tiếng anh.

![dinh-dang-mau-chu](/images/contents/html/dinh-dang-mau-chu-696x103.png)

Thiết lập màu chữ

***-Thiết lập màu nền:\*** Cũng giống như màu chữ chúng ta sử dụng bảng mã màu hoặc tên màu trong tiếng anh với thuộc tính backgroud-color.

![dinh-dang-mau-nen](/images/contents/html/dinh-dang-mau-nen-696x93.png)

Thiết lập màu nền

***– Thiết thập kích thước cỡ chữ:*** Để thiết lập cỡ chữ chúng ta dùng thuộc tính font-size và đi kèm với các đơn vị như: px, %, pt, em. Thông thường, chúng ta nên sử dụng đơn vị px.

![ding-dang-co-chu](/images/contents/html/ding-dang-co-chu-696x96.png)

Thiết lập cỡ chữ

***– Thiết lập font chữ cho văn bản:*** Thường thì khi viết HTML nó đã thiết lập sẵn font chữ mặc định cho chúng ta. Tuy nhiên, trong một số trường hợp chúng ta muốn thay đổi font chữ thì hãy dùng thuộc tính font-family. Một số font phổ biến nhất là: Time New Roman, Arial, Verdana, Helvetica.

![dinh-dang-font-chu](/images/contents/html/dinh-dang-font-chu-696x97.png)

Thiết lập font chữ

Ngoài ra, chúng ta có thể thêm 2 hoặc 3 font chữ dự phòng trong trường hợp máy không đọc được font chữ này thì sẽ đọc qua font chữ kia. Bằng cách khai báo nhiều tên font khác nhau và giữa mỗi font ngăn cách bởi dấu phẩy.

![dinh-dang-font-chu1](/images/contents/html/dinh-dang-font-chu1-696x103.png)

Thiết lập font chữ dự phòng

Trên đây là một số thẻ định dạng văn bản cơ bản và quan trọng trong HTML. Nó sẽ giúp ích rất nhiều trong việc thiết kế website sau này. Chính vì thế nếu là người mới bắt đầu học bạn nên làm quen và thực hành nhiều để mang lại hiệu quả cao nhé. Hi vọng bài học này sẽ giúp ích nhiều cho các bạn mới bắt đầu học thiết kế web.
