---

title: Soạn thảo đoạn HTML đầu tiên
author:
    name: Kủ Chuối
    description: Học không liên quan đến IT, nhưng thích lập trình. Học lập trình vì có thời gian và thấy vui chứ không vì gì hết. Thích chia sẻ với những người cùng sở thích
date: '2021-09-20T13:30:03.284Z'
isDraft: false
isHomePage: true
isFeatured: false
image: trinh-soan-thao-html.jpg
tags: ["html", "soạn thảo html"]
keywords: html, html là gì?, soạn thảo html như thế nào
description: Hướng dẫn soạn thảo đoạn HTML đầu tiên và xem kết quả của công việc mình làm sẽ như thế nào

---

Giới thiệu HTML như bài trước như thế chắc là đủ thông tin rồi nhỉ? Vậy thì bây giờ chúng ta hãy bắt tay vào việc tập soạn thảo văn bản bằng HTML thôi. Soạn thảo văn bản HTML ở đây nghĩa là chúng ta sẽ tập viết một văn bản được định dạng bằng các thẻ HTML chứ không phải là tạo ra một tập tin HTML hoàn chỉnh (việc đó để phần sau), bằng cách này thì các bạn sẽ dễ dàng tiếp cận với HTML hơn.

## Hãy sử dụng Sublime Text để soạn thảo

Sublime Text là một chương trình soạn thảo văn bản (Text Editor) miễn phí mà thường là phục vụ cho việc soạn thảo các loại văn bản đơn giản cho đến các đoạn code phức tạp. Hiện tại bạn học viết các ngôn ngữ website thì cứ dùng chương trình này, vừa nhẹ, lại đẹp mà chuyên nghiệp nữa. Sau này bạn thành chuyên nghiệp rồi sẽ tự khắc hiểu tại sao bạn quá may mắn vì biết đến Sublime Text ngay từ buổi lúc viết đoạn mã đầu tiên.

Bản miễn phí của Sublime Text sẽ tự động hiển thị bảng hỏi bạn mua bản quyền sau vài lần ấn Save, bạn có thể ấn No để từ chối.

## Soạn thảo văn bản HTML đầu tiên

Bây giờ bạn hãy mở chương trình soạn thảo lên và gõ một đoạn nội dung đơn giản chỉ toàn chữ như thế này.

![soan-text-don-gian](/images/contents/html/soan-text-don-gian.png)

Sau đó hãy lưu lại tập tin này với tập tin text.html và mở lên bằng trình duyệt, kết quả sẽ như thế này:

![soan-text-don-gian-02](/images/contents/html/soan-text-don-gian-02.png)

Bạn có để ý thấy rằng văn bản chúng ta soạn ra có xuống hàng đầy đủ mà khi in ra trình duyệt nó không xuống hàng, tại sao? Bởi vì trình duyệt chỉ đọc hiểu các văn bản được định dạng bằng HTML mà thôi, nên cho dù bạn soạn văn bản thông thường mà không có HTML thì trình duyệt vẫn sẽ hiểu rằng đó là một đoạn văn bản thô như vậy.

Bây giờ bạn thử đặt cặp thẻ `<h1> </h1>` để thiết lập tiêu đề cho văn bản, và đặt các đoạn văn bản nhỏ vào cặp thẻ `<p> </p>` giống thế này.

![soan-text-don-gian-03](/images/contents/html/soan-text-don-gian-03.png)

Lưu lại và tải lại bằng trình duyệt website sẽ thấy một kết quả khác.

![soan-text-don-gian-04](/images/contents/html/soan-text-don-gian-04.png)

Đấy, lúc này trình duyệt đã tự chuyển đổi các thẻ HTML thành loại định dạng siêu văn bản phù hợp để hiển thị rồi đó.

**Giải thích thêm:**

Thẻ `<h1>` (viết tắt của chữ Heading level 1) là cặp thẻ để xác định một tiêu đề trong văn bản. Tiêu đề sẽ được in đậm, có size chữ lớn hơn và được ngăn cách với các đoạn văn bản khác (có margin). Ngoài thẻ `<h1>` thì còn có các thẻ heading với thứ bậc thấp hơn như `<h2>, <h3>, <h4>, <h5>, <h6>`.
Thẻ `<p>` (viết tắt của chữ Paragraph) là cặp thẻ xác định một đoạn văn bản. Mỗi đoạn văn bản đặt trong thẻ `<p>` sẽ được xem như là một dòng, mỗi dòng sẽ có những khoảng cách ngăn với nhau.

## Lời kết

Kết thúc phần này chắc bạn đã biết làm sao để có được một tập tin HTML rồi phải không nào? Nhưng đó chỉ là một tập tin văn bản mà thôi, vậy làm sao để có thể tạo ra một tập tin website bằng HTML đây? Phần kế tiếp chúng ta sẽ tìm hiểu về vấn đề này nhé.