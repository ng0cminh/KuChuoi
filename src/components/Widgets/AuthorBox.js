/* eslint-disable @next/next/no-img-element */
import slug from "slug";
import Link from "next/link";

const AuthorBox = ({ author }) => {
  return (
    <div className="author-box">
      <div className="author-avatar">
        <Link href={`/author/${slug(author.name)}`}>
          <a>
            <img
              src={`/images/author/${slug(author.name)}.jpg`}
              width={120}
              height={120}
              alt={author.name ? author.name : "tác giả"}
            />
          </a>
        </Link>
      </div>
      <div className="author-decription">
        <Link href={`/author/${slug(author.name)}`}>
          <a>{author.name}</a>
        </Link>
        <p>{author.description && author.description}</p>
      </div>
    </div>
  );
};

export default AuthorBox;
