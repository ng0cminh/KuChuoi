/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import slug from "slug";

const AuthorBox = ({author}) => {
    return (
        <div className="author-box">
            <div className="author-avatar">
                <a href={`/author/${slug(author)}`}>
                    <img
                        src="/images/author/admin.jpg"
                        width={120}
                        height={120}
                    />
                </a>
            </div>
            <div className="author-decription">
                <a href={`/author/${slug(author)}`}>{author}</a>
                <p>Đây là phần giới thiệu chi tiết về tác giả và những sở thích cũng như đam mê liên quan hoặc có thể là quảng cáo bản thân :D</p>
            </div>
        </div>
    )
}

export default AuthorBox;
