import { format } from "date-fns";
import slug from "slug";
import { parse } from "node-html-parser";
import Link from "next/link";
import TableContent from "./TableContent";
import SocialBox from "../Widgets/SocialBox";

const Wiki = ({ post, prevPost, nextPost, social }) => {
  const content = parse(post.content);
  const headings = content.querySelectorAll("h1, h2, h3");
  for (const heading of headings) {
    heading.setAttribute("id", slug(heading.rawText));
  }

  return (
    <div className="main-content wiki">
      <section id="content" className="content show">
        <article className="wiki-article">
          <div className="wiki-main">
            <div className="wiki-content">
              <h1 className="wiki-title">{post.title}</h1>
              <header className="wiki-header">
                <div className="author-date">
                  <span className="wiki-author-time">
                    <span className="wiki-date">
                      <time>{format(new Date(post.date), "dd-MM-yyyy")}</time>
                    </span>
                    <span className="wiki-name-author">
                      <span> bởi </span>
                      <Link href={`/author/${slug(post.author.name)}`}>
                        <a>{post.author.name}</a>
                      </Link>
                    </span>
                  </span>
                </div>
                <SocialBox size={26} href={social} />
              </header>
              <div
                className="wiki-body"
                dangerouslySetInnerHTML={{ __html: content }}
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
              </div><div className="article-tags">
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
          <footer className="wiki-footer"></footer>
        </article>
      </section>

      <TableContent
        key={slug(post.title)}
        content={content}
        headings={headings}
      />
    </div>
  );
};

export default Wiki;
