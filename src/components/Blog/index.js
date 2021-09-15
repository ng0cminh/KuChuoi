import PostCard from "./PostCard";

const BlogList = ({posts}) => {
    return (
        posts.map((post, index) => {
                return (
                    <PostCard post={post} key={index} />
                )
            }
        )
    )
}

export default BlogList;
