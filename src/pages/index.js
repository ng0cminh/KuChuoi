import Layout from "../components/Layout"
import Blog from "../components/Blog";
import {getPostHomePage} from "../lib/posts"

export default function Home({posts}) {
  return (
    <Layout title="Home Pages">
      <section className="main-content grid">
        <Blog posts={posts} />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {

  // Get external data from the file system, API, DB, etc.
  const posts = getPostHomePage(0)

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      posts
    }
  }
}