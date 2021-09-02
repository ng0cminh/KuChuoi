import Layout from "../../../components/Layout"
import Blog from "../../../components/Blog";
import Sidebar from "../../../components/Sidebar";

import {getPostByFolder, getAllFolderPageSlug} from "../../../lib/posts/Category";
import {getFolderMenu, getPostFeatured} from "../../../lib/posts";

export default function Category({categories, category, posts, totalPage, pageIndex, folder, featuredPosts}) {
  return (
    <Layout title={category} categories={categories}>
      <section className="main-content loop">
        <Blog posts={posts} totalPage={totalPage} pageIndex={pageIndex} folder={folder} />

        <Sidebar featuredPosts={featuredPosts} />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
    // Return a list of possible value for slug
    const paths = getAllFolderPageSlug()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const page = params.page ? params.page * 1 : 0;
  const data = await getPostByFolder(params.folder, page)
  const {
    posts,
    category,
    totalPage,
    pageIndex
  } = data;
  const featuredPosts = getPostFeatured ();
  const categories = getFolderMenu();
  // The value of the `props` key will be
  // passed to the `Blog` component
  return {
    props: {
      categories,
      category,
      posts,
      totalPage,
      pageIndex,
      folder: params.folder,
      featuredPosts
    }
  }
}