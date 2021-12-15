import slug from "slug";
import Link from "next/link";
import Image from "next/image";
import HeaderCard from "../Widgets/HeaderCard";
import { domain, SELECTION } from "../../../next.config";

const PostCard = ({ post, imgWidth, imgHeight }) => {
  const selection = slug(SELECTION);
  const selectionName =
    SELECTION === "Featured"
      ? "Nổi bật"
      : SELECTION === "Trending"
      ? "Xu hướng"
      : SELECTION === "Hotnew"
      ? "Bài mới"
      : null;
  const social = {
    fb: `https://www.facebook.com/sharer.php?u=${domain + post.slug}`,
    tw: `https://twitter.com/intent/tweet?text=${post.title} - ${
      domain + post.slug
    }`,
    ins: `https://www.facebook.com/sharer.php?u=${domain + post.slug}`,
  };
  return (
    <div className="card">
      <article className="article">
        <HeaderCard
          author={post.author ? post.author : {}}
          date={post.date}
          size={16}
          social={social}
        />
        <div className="article-main">
          <div className="article-banner">
            <figure className="article-figure img-fluid">
              {post[SELECTION] && (
                <div className={`badge ${selection}`}>
                  <span>
                    <Link href={`/posts/${selection}`}>
                      <a>{selectionName}</a>
                    </Link>
                  </span>
                </div>
              )}
              <Link href={`/${post.slug}`}>
                <a>
                  <Image
                    src={
                      post.image
                        ? `/images/contents/${post.folder}/${post.image}`
                        : `/images/default/article.jpg`
                    }
                    width={imgWidth}
                    height={imgHeight}
                    alt={post.title ? post.title : `Banner Default`}
                  />
                </a>
              </Link>
            </figure>
          </div>
          <div className="article-content">
            <h2 title={post.title} className="article-title">
              <Link href={`/${post.slug}`}>
                <a>{post.title && post.title}</a>
              </Link>
            </h2>
            <p className="article-description">
              {post.description && post.description}
            </p>
          </div>
        </div>
        <footer className="article-footer">
          <Link href={`/${post.slug}#comments`}>
            <a>
              <span>Bình luận</span>
            </a>
          </Link>
          <Link href={`/${post.slug}`}>
            <a>
              <span>{post.readTime} phút đọc</span>
            </a>
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default PostCard;
