import PostCard from "./PostCard";

const BlogList = ({ posts, imgWidth, imgHeight }) => {
  return posts.map((post, index) => {
    return (
      <PostCard
        key={post.slug + "-" + index}
        post={post}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
      />
    );
  });
};

export default BlogList;
