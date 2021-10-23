import TableContent from "./TableContent";

const Wiki = ({ post }) => {
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
                      <time>{post.date}</time>
                    </span>
                    <span className="wiki-name-author">
                      <span> bởi </span>
                      <a href="#">{post.author.name}</a>
                    </span>
                  </span>
                </div>
              </header>
              <div
                className="wiki-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
          <footer className="wiki-footer"></footer>
        </article>
      </section>

      <TableContent />
    </div>
  );
};

export default Wiki;
