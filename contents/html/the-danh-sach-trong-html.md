---

title: Các thẻ danh sách trong html
author:
    name: Kủ Chuối
    description: Học không liên quan đến IT, nhưng thích lập trình. Học lập trình vì có thời gian và thấy vui chứ không vì gì hết. Thích chia sẻ với những người cùng sở thích
date: '2021-09-20T16:30:03.284Z'
isDraft: false
isHomePage: true
isFeatured: true
image: the-ol-va-ul-tao-danh-sach-htm.jpg
tags: ["html", "thẻ danh sách"]
keywords: html, thẻ danh sách trong html
description: Giới thiệu về HTML để hiểu về ngôn ngữ đánh dấu siêu văn bản HTML.

---

Phần tử danh sách (list) được sử dụng rất thường xuyên trong một tài liệu web bằng HTML. Trong một trang web thường người ta sử dụng các phần tử danh sách rất nhiều, chẳng hạn như menu, danh sách những thông tin nào đó,…v…v…đều được tạo ra bởi các thẻ tạo danh sách trong HTML.

Trong HTML có ba kiểu danh sách (list type) đó là kiểu sắp xếp (ordered list), kiểu không sắp xếp (unordered list) và kiểu danh sách mô tả (description list). Cụ thể:

- Kiểu sắp xếp (**Ordered List**): Là kiểu hiển thị một danh sách mà các mục con của nó được sắp xếp theo thứ tự bằng số hoặc chữ cái.
- Kiểu không sắp xếp (**Unordered List**): Là kiểu hiển thị danh sách mà các mục con của nó sẽ không được sắp xếp theo thứ tự mà chỉ được đánh dấu bằng một ký tự đặc trưng.
- Kiểu mô tả (**Description List**): Là kiểu hiển thị danh sách mà các mục con của nó sẽ không được đánh dấu thứ tự, nhưng sẽ có kèm theo một đoạn miêu tả.

Dưới đây là hình ảnh sự khác nhau giữa ba kiểu danh sách do W3School mô tả:

![Thẻ danh sach](/images/contents/html/html-list-type.png)

### Ordered List

Để khai báo một danh sách với kiểu được sắp xếp, bạn phải bắt đầu bằng cặp thẻ `<ol> </ol>`. Bên trong cặp thẻ này sẽ là danh sách các mục con, mỗi mục sẽ đặt trong cặp thẻ `<li> </li>`, xem ví dụ bên dưới.

[Xem ví dụ](http://codepen.io/thachpham92/pen/QwPewe/)

Thẻ `<ol>` cũng hỗ trợ thêm một thuộc tính nữa tên là`type`, thuộc tính này là để bạn thiết lập kiểu sắp xếp các mục con bên trong danh sách. Giá trị của thuộc tính type là `1`, `i`, `I`, `a`, `A`.

### Unordered List

Giống như Ordered List, kiểu danh sách Unordered List sẽ bắt đầu bằng cặp thẻ `<ul> </ul>` và bên trong nó các mục con sẽ được khai báo bằng cặp thẻ `<li> </li>`.

[Xem ví dụ](http://codepen.io/thachpham92/pen/wBZVvO/)

Bạn cũng có thể thay đổi kiểu hiển thị của thẻ `<ol>` bằng cách thêm thuộc tính style với thuộc tính CSS là `list-style-type` và giá trị là`disc`,`square`, `circle` và`none`.

### Description List

Với kiểu danh sách này thì cách viết thẻ hơi khác một tí, đó là nó sẽ bắt đầu danh sách bằng cặp thẻ `<dl> </dl>`, trong đó tên mỗi mục con sẽ được khai báo bằng cặp thẻ `<dt> </dt>` và mô tả cho mục con sẽ được khai báo bằng cặp thẻ `<dd> </dd>.`

[Xem ví dụ:](http://codepen.io/thachpham92/pen/zxXgxo/)

### Xếp chồng danh sách

Trong HTML, bạn có thể tiến hành xếp chồng một danh sách vào nhiều tầng bằng cách lồng thêm một danh sách nữa vào cặp thẻ `<li> </li>` của mục con mà bạn muốn thêm tầng cho nó, như ví dụ dưới đây.

Xem ví dụ

### Lời kết

Quá dễ dàng để khai báo phần tử danh sách trong HTML phải không nào? Vốn dĩ HTML luôn dễ dàng như vậy mà. Cố gắng lên nào, chỉ còn vài phần tử quan trọng nữa thôi là bạn đã thành chuyên gia HTML rồi.
