import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";
import { POST_PER_PAGE } from "../../next.config";
import { getFeaturedPost, getListNameFolder } from "../lib/posts";

export default function Category({ allPosts, menu }) {
  const [posts, setList] = useState([...allPosts.slice(0, POST_PER_PAGE)]);

  // Trạng thái để kích hoạt thêm
  const [loadMore, setLoadMore] = useState(false);

  // Trạng thái xem có nhiều thứ khác để tải hay không
  const [hasMore, setHasMore] = useState(allPosts.length > POST_PER_PAGE);

  // Tải thêm lần nhấp vào nút
  const handleLoadMore = () => {
    setLoadMore(true);
  };
  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = posts.length;
      const isMore = currentLength < allPosts.length;
      const nextResults = isMore
        ? allPosts.slice(currentLength, currentLength + POST_PER_PAGE)
        : [];
      setList([...posts, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = posts.length < allPosts.length;
    setHasMore(isMore);
  }, [posts]); //eslint-disable-line

  const metadata = {
    title: "Bài viết nổi bật",
    description: `Trang tập hợp các bài viết nổi bật của website`,
  };
  return (
    <Layout metadata={metadata} menu={menu}>
      <section className="main-content grid">
        <section id="content" className="content">
          <section className="list-posts">
            <div className="row">
              <Blog posts={posts} imgWidth={740} imgHeight={370} />
            </div>
            <Pagination hasMore={hasMore} handleLoadMore={handleLoadMore} />
          </section>
        </section>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const menu = getListNameFolder();

  // Get external data from the file system, API, DB, etc.
  const posts = await getFeaturedPost();

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      allPosts: posts,
      menu,
    },
  };
}
