import Layout from "../components/Layout"
import Blog from "../components/Blog";
import {getAllFile} from "../lib/posts"

export default function Home({posts}) {
  return (
    <Layout>
      <section className="main-content grid">
        <Blog posts={posts} />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const posts = getAllFile()

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      posts
    }
  }
}