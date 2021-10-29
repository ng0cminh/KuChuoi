import Link from "next/link";
import Image from "next/image";
import HeaderCard from "../Widgets/HeaderCard";

const PostCard = ({ post, imgWidth, imgHeight }) => {
  return (
    <div className="card">
      <article className="article">
        <HeaderCard
          author={post.author ? post.author : {}}
          date={post.date}
          size={16}
          href={post.slug}
        />
        <div className="article-main">
          <div className="article-banner">
            <figure className="article-figure img-fluid">
              {post.isFeatured && (
                <div className="badge featured">
                  <span>
                    <Link href="/featured-posts">
                      <a>Nổi bật</a>
                    </Link>
                  </span>
                </div>
              )}
              {post.isTrending && (
                <div className="badge trending">
                  <span>
                    <Link href="/trending-posts">
                      <a>Xu Hướng</a>
                    </Link>
                  </span>
                </div>
              )}
              {post.isHotnew && (
                <div className="badge hotnew">
                  <span>
                    <Link href="/hotnew-posts">
                      <a>Mới nhất</a>
                    </Link>
                  </span>
                </div>
              )}
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
          <a href={`/${post.slug}#comments`}>
            <span>Bình luận</span>
          </a>
          <a href={`/${post.slug}`}>
            <span>{post.readTime} phút đọc</span>
          </a>
        </footer>
      </article>
    </div>
  );
};

export default PostCard;
