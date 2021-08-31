import Layout from "../../../components/Layout"
import Blog from "../../../components/Blog";
import Sidebar from "../../../components/Sidebar";

import {getAllAuthorPageSlug, getPostByAuthor} from "../../../lib/posts/Author";
import {getPostFeatured} from "../../../lib/posts";

export default function Category({posts, featuredPosts}) {
  return (
    <Layout title="Author Pages">
      <section className="main-content list">
        <Blog posts={posts} />

        <Sidebar featuredPosts ={featuredPosts} />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
    // Return a list of possible value for slug
    const paths = getAllAuthorPageSlug()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {

  // Get external data from the file system, API, DB, etc.
  const page = params.page ? params.page * 1 : 0;
  const posts = getPostByAuthor(params.name, page);
  const featuredPosts = await getPostFeatured();

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      posts,
      featuredPosts
    }
  }
}