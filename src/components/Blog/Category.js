import BlogList from ".";
import Pagination from "../Pagination";

const Category = ({ posts, hasMore, handleLoadMore }) => {
  return (
    <section className="main-content grid">
      <section id="content" className="content">
        {posts.length > 0 && (
          <section className="list-posts">
            <BlogList posts={posts} imgWidth={740} imgHeight={370} />
            <Pagination hasMore={hasMore} handleLoadMore={handleLoadMore} />
          </section>
        )}
      </section>
    </section>
  );
};

export default Category;
