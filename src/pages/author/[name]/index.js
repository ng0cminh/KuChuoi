import Layout from "../../../components/Layout"
import Blog from "../../../components/Blog";
import Sidebar from "../../../components/Sidebar";

import {getAllAuthorSlug, getPostByAuthor} from "../../../lib/posts/Author";
import {getFolderMenu, getPostFeatured} from "../../../lib/posts";

export default function Category({categories, posts, totalPage, pageIndex, author, featuredPosts}) {
  return (
    <Layout title={author} categories={categories}>
      <section className="main-content list">
      <Blog posts={posts} totalPage={totalPage} pageIndex={pageIndex} author={author} />

        <Sidebar featuredPosts ={featuredPosts} />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
    // Return a list of possible value for slug
    const paths = getAllAuthorSlug()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {

  // Get external data from the file system, API, DB, etc.
  const data = getPostByAuthor(params.name);
  const {
    posts,
    totalPage,
    pageIndex
  } = data;
  const featuredPosts = await getPostFeatured();
  const categories = getFolderMenu();
  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      categories,
      posts,
      totalPage,
      pageIndex,
      author: params.name,
      featuredPosts
    }
  }
}