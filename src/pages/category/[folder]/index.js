import Layout from "../../../components/Layout"
import Blog from "../../../components/Blog";
import Sidebar from "../../../components/Sidebar";

import {getPostByFolder, getAllFolderSlug} from "../../../lib/posts/Category";
import {getPostFeatured} from "../../../lib/posts";

export default function Category({posts, folder, featuredPosts}) {
  return (
    <Layout title={folder}>
      <section className="main-content list">
        <Blog posts={posts} />

        <Sidebar featuredPosts={featuredPosts} />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
    // Return a list of possible value for slug
    const paths = getAllFolderSlug ()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const posts = await getPostByFolder(params.folder)
  const featuredPosts = getPostFeatured ();
  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      posts,
      folder: params.folder.toUpperCase(),
      featuredPosts
    }
  }
}