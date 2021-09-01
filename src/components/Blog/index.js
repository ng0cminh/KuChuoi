import PostCard from "./PostCard";
import Pagination from "./Pagination";

const BlogList = ({posts, totalPage, pageIndex, folder}) => {
    return (
        <section id="content" className="content">
            {posts.map((post, index) => {
                    return (
                        <PostCard post={post} key={index} />
                    )
                }
            )}
            <Pagination totalPage={totalPage} pageIndex={pageIndex} folder={folder} />
        </section>
    )
}

export default BlogList;
