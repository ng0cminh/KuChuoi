/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import slug from "slug";

const AuthorBox = ({author}) => {
    return (
        <div className="author-box">
            <div className="author-avatar">
                <a href={`/author/${slug(author.name)}`}>
                    <img
                        src="/images/author/admin.jpg"
                        width={120}
                        height={120}
                    />
                </a>
            </div>
            <div className="author-decription">
                <a href={`/author/${slug(author.name)}`}>{author.name}</a>
                <p>{author.description}</p>
            </div>
        </div>
    )
}

export default AuthorBox;
