import { format } from "date-fns";
import slug from "slug";
import { parse } from "node-html-parser";
import Link from "next/link";
import TableContent from "./TableContent";

const Wiki = ({ post, prevPost, nextPost }) => {
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
              </header>
              <div
                className="wiki-body"
                dangerouslySetInnerHTML={{ __html: content }}
              />

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
