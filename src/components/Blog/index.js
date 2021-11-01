import PostCard from "./PostCard";

const BlogList = ({ posts, imgWidth, imgHeight }) => {
  return (
    <div className="row">
      {posts.map((post, index) => (
        <PostCard
          key={post.slug + "-" + index}
          post={post}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        />
      ))}
    </div>
  );
};

export default BlogList;
