/* eslint-disable @next/next/no-img-element */
import slug from "slug";

const AuthorBox = ({author}) => {
    return (
        <div className="author-box">
            <div className="author-avatar">
                <a href="#">
                    <img
                        src="/images/avatar.jpg"
                        alt="avatar"
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
