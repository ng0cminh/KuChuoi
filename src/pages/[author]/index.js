import Layout from "../../components/Layout"
import Blog from "../../components/Blog";
import Sidebar from "../../components/Sidebar";

import {getFileByAuthor, getAllPostSlug} from "../../lib/posts";

export default function Author({posts}) {
  return (
    <Layout>
      <section className="main-content list">
        <Blog posts={posts} />

        <Sidebar />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
    // Return a list of possible value for slug
    const paths = getAllPostSlug()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const posts = getFileByAuthor(params.author)

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      posts
    }
  }
}