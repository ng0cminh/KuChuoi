import Image from "next/image";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import HeaderCard from "../components/Widgets/HeaderCard";
import AuthorBox from "../components/Widgets/AuthorBox";
import markdownToHtml from "../lib/markdownToHtml";

import {getAllPostSlug, getPostDataBySlug, getFeaturedPost, getListNameFolder} from "../lib/posts";

const Single = ({post, prevPost, nextPost, featuredPosts, menu}) => {
    return (
        <Layout title={post.title} menu={menu}>
            <div className="main-content">
                <section id="content" className="content single">
                    <article className="article">
                        <div className="article-main">
                            <figure className="article-figure img-fluid">
                                <Image
                                    src={post.image ? `/images/contents/${post.folder}/${post.image}` : `/images/default/article.jpg`}
                                    width={1000}
                                    height={500}
                                    alt={post.title}
                                />
                            </figure>
                            <div className="article-content">
                                <h1 className="article-title">
                                    {post.title}
                                </h1>
                                
                                <HeaderCard author={post.author} date={post.date} size={32} />

                                <div dangerouslySetInnerHTML={{ __html: post.content }} className="article-body" />

                                <div className="article-tags">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
                                        </svg>
                                    </span>
                                    {post.tags.map((tag, index)=> (
                                        <span className="tag-item" key={tag + index}>{tag}</span>
                                    ))}
                                </div>

                                <AuthorBox author={post.author} />
                                
                                <div className="post-pagination">
                                    <div className="prev-post">
                                        {prevPost && (
                                            <>
                                                <span>bài trước</span>
                                                <a href={prevPost.slug}>
                                                    {prevPost.title}
                                                </a>
                                            </>
                                        )}
                                    </div>

                                    <div className="next-post">
                                        {nextPost && (
                                            <>
                                                <span>bài kế tiếp</span>
                                                <a href={nextPost.slug}>
                                                    {nextPost.title}
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div id="comments">
                                    <h2>List Comment</h2>
                                    
                                </div>
                            </div>
                        </div>
                        <footer className="article-footer">
                            
                        </footer>
                    </article>
                </section>
                
                <Sidebar featuredPosts={featuredPosts} />
            </div>
        </Layout>
    )
}

export default Single;



export async function getStaticPaths() {
    // Return a list of possible value for slug
    const paths = getAllPostSlug()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.slug
    const {post, prevPost, nextPost} = await getPostDataBySlug(params.slug);
    const featuredPosts = await getFeaturedPost(5);
    const menu = getListNameFolder();
    
        if (!post) {
            return {
                notFound: true,
            }
        }

        post.content = await markdownToHtml(post.content) || '';

    return {
        props: {
            menu,
            post,
            prevPost,
            nextPost,
            featuredPosts
        }
    }
}