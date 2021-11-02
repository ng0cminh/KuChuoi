import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Category from "../../components/Blog/Category";

import {
  getPostByFolder,
  getAllFolderSlug,
  getListNameFolder,
} from "../../lib/posts";
import { POST_PER_PAGE } from "../../../next.config";

export default function Folder({ allPosts, folder, category, menu }) {
  const [posts, setList] = useState([...allPosts.slice(0, POST_PER_PAGE)]);

  // Trạng thái để kích hoạt thêm
  const [loadMore, setLoadMore] = useState(false);

  // Trạng thái xem có nhiều thứ khác để tải hay không
  const [hasMore, setHasMore] = useState(allPosts.length > POST_PER_PAGE);

  // Tải thêm lần nhấp vào nút
  const handleLoadMore = () => {
    setLoadMore(true);
  };

  //Load post theo thư mục
  useEffect(() => {
    setList([...allPosts.slice(0, POST_PER_PAGE)]);
  }, [allPosts]);

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
    title: category,
    slug: `category/${folder}`,
  };

  return (
    <Layout metadata={metadata} menu={menu}>
      <Category
        posts={posts}
        hasMore={hasMore}
        handleLoadMore={handleLoadMore}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for slug
  const paths = getAllFolderSlug();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.

  const data = await getPostByFolder(params.folder);
  const { posts, category } = data;
  const menu = getListNameFolder();

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      category,
      allPosts: posts,
      folder: params.folder,
      menu,
    },
  };
}
