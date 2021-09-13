import PostCard from "./PostCard";
import Pagination from "./Pagination";

const BlogList = ({posts, totalPage, pageIndex, folder, author}) => {
    return (
        <section id="content" className="content">
            <section className="list-posts">
                <div className="row">
                    {posts.map((post, index) => {
                            return (
                                <PostCard post={post} key={index} />
                            )
                        }
                    )}
                </div>
            </section>
            <Pagination totalPage={totalPage} pageIndex={pageIndex} folder={folder} author={author} />
        </section>
    )
}

export default BlogList;
