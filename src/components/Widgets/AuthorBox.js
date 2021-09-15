const AuthorBox = () => {
    return (
        <div className="author-box">
            <div className="author-avatar">
                <a href="#">
                    <img
                        src="/images/author/admin.jpg"
                        width={120}
                        height={120}
                    />
                </a>
            </div>
            <div className="author-decription">
                <a href="#">Tác giả</a>
                <p>Đây là phần giới thiệu chi tiết về tác giả và những sở thích cũng như đam mê liên quan hoặc có thể là quảng cáo bản thân :D</p>
            </div>
        </div>
    )
}

export default AuthorBox;
