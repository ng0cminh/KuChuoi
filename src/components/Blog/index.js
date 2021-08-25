import PostCard from "./PostCard";

const BlogList = ({posts}) => {
    return (
        <section id="content" className="content">
            {posts.map((post, index) => {
                    return (
                        <PostCard post={post} key={index} />
                    )
                }
            )}
        </section>
    )
}

export default BlogList;
