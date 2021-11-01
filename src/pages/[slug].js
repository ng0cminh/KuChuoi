import Layout from "../components/Layout";
import Single from "../components/Single";
import Wiki from "../components/Wiki";

import markdownToHtml from "../lib/markdownToHtml";

import {
  getAllPostSlug,
  getPostDataBySlug,
  getFeaturedPost,
  getListNameFolder,
} from "../lib/posts";

const Detail = ({ post, prevPost, nextPost, featuredPosts, menu }) => {
  return (
    <Layout metadata={post} menu={menu} isWiki={post.isWiki}>
      {post.isWiki ? (
        <Wiki post={post} prevPost={prevPost} nextPost={nextPost} />
      ) : (
        <Single
          post={post}
          prevPost={prevPost}
          nextPost={nextPost}
          featuredPosts={featuredPosts}
        />
      )}
    </Layout>
  );
};

export default Detail;

export async function getStaticPaths() {
  // Return a list of possible value for slug
  const paths = getAllPostSlug();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.slug
  const { post, prevPost, nextPost } = await getPostDataBySlug(params.slug);
  const featuredPosts = await getFeaturedPost(5);
  const menu = getListNameFolder();

  if (!post) {
    return {
      notFound: true,
    };
  }

  post.content = (await markdownToHtml(post.content)) || "";

  post.image = `/images/contents/${post.folder}/${post.image}`;

  return {
    props: {
      menu,
      post,
      prevPost,
      nextPost,
      featuredPosts,
    },
  };
}
