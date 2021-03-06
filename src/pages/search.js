import React from "react";
import Layout from "../components/Layout";
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";
import { postData } from "../../cache/data";
import { getSelectionPost, getListNameFolder } from "../lib/posts";
import { SELECTION } from "../../next.config";
export default function Category({ menu, posts, selectionPosts }) {
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
        <Sidebar selectionPosts={selectionPosts} />
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
  const selectionPosts = await getSelectionPost(SELECTION);

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      menu,
      posts,
      selectionPosts,
    },
  };
}
