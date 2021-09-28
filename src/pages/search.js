import React from "react";
import Layout from "../components/Layout";
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";
import { postData } from "../../cache/data";
import { getFeaturedPost, getListNameFolder } from "../lib/posts";

export default function Category({ menu, posts, featuredPosts }) {
  const metadata = {
    title: "Tìm kiếm",
    description: `Trang tập hợp các kết quả tìm kiếm`,
  };
  return (
    <Layout metadata={metadata} menu={menu}>
      <section className="main-content list">
        <section id="content" className="content">
          <Blog posts={posts} imgWidth={740} imgHeight={370} />
        </section>
        <Sidebar featuredPosts={featuredPosts} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const menu = getListNameFolder();

  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

  const keywords = query.q && removeAccents(query.q);

  const posts = postData.filter((post) => {
    return removeAccents(post.title).toLowerCase().includes(keywords);
  });

  // Get external data from the file system, API, DB, etc.
  const featuredPosts = await getFeaturedPost(5);

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      menu,
      posts,
      featuredPosts,
    },
  };
}
