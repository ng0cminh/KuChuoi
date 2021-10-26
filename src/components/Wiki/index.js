import { format } from "date-fns";
import slug from "slug";
import { parse } from "node-html-parser";
import TableContent from "./TableContent";

const Wiki = ({ post }) => {
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
                      <a href={`/author/${slug(post.author.name)}`}>
                        {post.author.name}
                      </a>
                    </span>
                  </span>
                </div>
              </header>
              <div
                className="wiki-body"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
          <footer className="wiki-footer"></footer>
        </article>
      </section>

      <TableContent content={content} headings={headings} />
    </div>
  );
};

export default Wiki;
