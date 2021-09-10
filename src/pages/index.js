import Layout from "../components/Layout"
import Blog from "../components/Blog";
import {getFolderMenu} from "../lib/posts";
import {getPostHomePage} from "../lib/posts/Home";
import React from "react";

class HomePage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data: this.props,
    }
  }

  render() {
    const {posts, totalPage, pageIndex, categories} = this.state.data;
    return (
      <Layout title="Home Pages" categories={categories}>
        <section className="main-content grid">
          <Blog posts={posts} totalPage={totalPage} pageIndex={pageIndex} />
        </section>
      </Layout>
    )
  }
}

export default HomePage;

export async function getStaticProps() {

  // Get external data from the file system, API, DB, etc.
  const data = getPostHomePage();
  const {
    posts,
    totalPage,
    pageIndex
  } = data;

  const categories = getFolderMenu();
   // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      categories,
      posts,
      totalPage,
      pageIndex
    }
  }
}