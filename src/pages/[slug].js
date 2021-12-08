import { domain } from "../../next.config";
import Layout from "../components/Layout";
import Single from "../components/Single";
import Wiki from "../components/Wiki";

import markdownToHtml from "../lib/markdownToHtml";

import {
  getAllPostSlug,
  getPostDataBySlug,
  getSelectionPost,
  getListNameFolder,
} from "../lib/posts";

const Detail = ({ post, prevPost, nextPost, selectionPosts, menu }) => {
  const social = {
    fb: `https://www.facebook.com/sharer.php?u=${domain + post.slug}`,
    tw: `https://twitter.com/intent/tweet?text=${post.title} - ${
      domain + post.slug
    }`,
    link: domain + post.slug,
  };

  return (
    <Layout metadata={post} menu={menu} isWiki={post.isWiki}>
      {post.isWiki ? (
        <Wiki
          post={post}
          prevPost={prevPost}
          nextPost={nextPost}
          social={social}
        />
      ) : (
        <Single
          post={post}
          prevPost={prevPost}
          nextPost={nextPost}
          selectionPosts={selectionPosts}
          social={social}
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
  const selectionPosts = await getSelectionPost("isFeatured");
  const menu = await getListNameFolder();

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
      selectionPosts,
    },
  };
}
