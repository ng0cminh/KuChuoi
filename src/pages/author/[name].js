import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Blog from "../../components/Blog";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { POST_PER_PAGE } from "../../../next.config";

import {
  getAllAuthorSlug,
  getPostByAuthor,
  getFeaturedPost,
  getListNameFolder,
} from "../../lib/posts";

export default function Category({
  allPosts,
  author,
  authorName,
  featuredPosts,
  menu,
}) {
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
    title: authorName,
    description: `Trang bài viết của tác giả ${authorName}`,
    slug: `author/${author}`,
    image: `/image/author/${author}.jpg`,
  };

  return (
    <Layout metadata={metadata} menu={menu}>
      <section className="main-content loop">
        <section id="content" className="content">
          <Blog posts={posts} imgWidth={900} imgHeight={450} />
          <Pagination hasMore={hasMore} handleLoadMore={handleLoadMore} />
        </section>
        <Sidebar featuredPosts={featuredPosts} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for slug
  const paths = getAllAuthorSlug();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const { posts, authorName } = getPostByAuthor(params.name);

  const featuredPosts = await getFeaturedPost(5);

  const menu = getListNameFolder();

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      menu,
      allPosts: posts,
      authorName,
      author: params.name,
      featuredPosts,
    },
  };
}
