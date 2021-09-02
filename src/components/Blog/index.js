import PostCard from "./PostCard";
import Pagination from "./Pagination";

const BlogList = ({posts, totalPage, pageIndex, folder, author}) => {
    
    return (
        <section id="content" className="content">
            {posts.map((post, index) => {
                    return (
                        <PostCard post={post} key={index} />
                    )
                }
            )}
            <Pagination totalPage={totalPage} pageIndex={pageIndex} folder={folder} author={author} />
        </section>
    )
}

export default BlogList;
