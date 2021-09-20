import React, { useState , useEffect } from "react";
import Layout from "../../components/Layout";
import Blog from "../../components/Blog";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";


export default function Category({allPosts,  featuredPosts, menu}) {
  
  return (
    <Layout title={authorName} menu={menu}>
      <section className="main-content loop">
        <section id="content" className="content">
            <Blog posts={posts} />
            <Pagination hasMore={hasMore} handleLoadMore={handleLoadMore} />
        </section>
        <Sidebar featuredPosts={featuredPosts} />
      </section>
    </Layout>
  )
}


export async function getStaticProps({ params }) {

  // Get external data from the file system, API, DB, etc.
  const {posts, authorName} = getPostByAuthor(params.name);

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
      featuredPosts
    }
  }
}