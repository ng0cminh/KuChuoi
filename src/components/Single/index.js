import Link from "next/link";
import Image from "next/image";

import Sidebar from "../Sidebar";
import HeaderCard from "../Widgets/HeaderCard";
import AuthorBox from "../Widgets/AuthorBox";

const Single = ({ post, prevPost, nextPost, featuredPosts }) => {
  return (
    <div className="main-content single">
      <section id="content" className="content">
        <article className="article">
          <div className="article-main">
            <figure className="article-figure img-fluid">
              <Image
                src={post.image ? post.image : `/images/default/article.jpg`}
                width={900}
                height={450}
                alt={post.title}
              />
            </figure>
            <div className="article-content">
              <h1 className="article-title">{post.title}</h1>

              <HeaderCard
                author={post.author}
                date={post.date}
                size={32}
                href={post.slug}
              />

              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="article-tags">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                  </svg>
                </span>
                {post.tags.map((tag, index) => (
                  <span className="tag-item" key={tag + index}>
                    {tag}
                  </span>
                ))}
              </div>

              <AuthorBox author={post.author} />

              <div className="post-pagination">
                <div className="prev-post">
                  {prevPost && (
                    <>
                      <span>bài trước</span>
                      <Link href={`/${prevPost.slug}`}>
                        <a>{prevPost.title}</a>
                      </Link>
                    </>
                  )}
                </div>

                <div className="next-post">
                  {nextPost && (
                    <>
                      <span>bài kế tiếp</span>
                      <Link href={`/${nextPost.slug}`}>
                        <a>{nextPost.title}</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div id="comments">
                <h2>List Comment</h2>
              </div>
            </div>
          </div>
          <footer className="article-footer"></footer>
        </article>
      </section>

      <Sidebar featuredPosts={featuredPosts} />
    </div>
  );
};

export default Single;
