import Layout from "../components/Layout"
import Blog from "../components/Blog";
import {getPostHomePage, getHomePageSlug} from "../lib/posts/Home"

export default function Home({posts, totalPage, pageIndex}) {
  return (
    <Layout title="Home Pages">
      <section className="main-content grid">
        <Blog posts={posts} totalPage={totalPage} pageIndex={pageIndex} />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for slug
  const paths = getHomePageSlug()

  return {
      paths,
      fallback: false
  }
}

export async function getStaticProps({ params }) {

  // Get external data from the file system, API, DB, etc.
  const page = params.page ? params.page * 1 : 0;

  const data = getPostHomePage(page);
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