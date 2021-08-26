import Layout from "../components/Layout"
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";

import {getFileByFolder} from "../lib/api";

export default function blog({allPostsData}) {
  return (
    <Layout>
      <section className="main-content list">
        <Blog posts={allPostsData} />

        <Sidebar />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getFileByFolder('blog')

  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      allPostsData
    }
  }
}

