import Layout from "../components/Layout"
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";
import {getPostFeatured} from "../lib/posts";

export default function Featured({posts}) {
  return (
    <Layout title="Featured Pages">
      <section className="main-content loop">
        <Blog posts={posts} />

        <Sidebar />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const posts = getPostFeatured()

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      posts
    }
  }
}