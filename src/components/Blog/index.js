import { Fragment } from "react";
import PostCard from "./PostCard";

const BlogList = ({posts, imgWidth, imgHeight}) => {
    return (
        posts.map((post, index) => {
                return (
                    <PostCard post={post} key={post.slug + '-' + index} imgWidth={imgWidth} imgHeight={imgHeight} />
                )
            }
        )
    )
}

export default BlogList;
