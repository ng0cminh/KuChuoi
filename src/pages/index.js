import Layout from "../components/Layout"
import Blog from "../components/Blog";

import getAllFolder from "./api/getAllFolder";

export default function Home({allPostsData}) {
  return (
    <Layout>
      <section className="main-content grid">
        <Blog posts={allPostsData} />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getAllFolder()

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      allPostsData
    }
  }
}