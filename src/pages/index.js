import Layout from "../components/Layout"
import Blog from "../components/Blog";
import {getPostHomePage} from "../lib/posts/Home"

export default function Home({posts, totalPage, pageIndex}) {
  return (
    <Layout title="Home Pages">
      <section className="main-content grid">
        <Blog posts={posts} totalPage={totalPage} pageIndex={pageIndex} />
      </section>
    </Layout>
  )
}


export async function getStaticProps() {

  // Get external data from the file system, API, DB, etc.
  const data = getPostHomePage();
  const {
    posts,
    totalPage,
    pageIndex
  } = data;

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      posts,
      totalPage,
      pageIndex
    }
  }
}