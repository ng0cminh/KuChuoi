/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import HeaderCard from "../components/Widgets/HeaderCard";
import AuthorBox from "../components/Widgets/AuthorBox";
import getAllPostSlug from "../lib/posts/getAllPostSlug";
import getPostDataBySlug from "../lib/posts/getPostDataBySlug";

const Single = ({postData}) => {
    return (
        <Layout>
            <div className="main-content">
                <section id="content" className="content single">
                    <article className="article">
                        <div className="article-main">
                            <figure className="article-figure img-fluid">
                                <Image
                                    src={postData.image}
                                    width={1080}
                                    height={600}
                                    alt={postData.title}
                                />
                            </figure>
                            <div className="article-content">
                                <h1 className="article-title">
                                    {postData.title}
                                </h1>
                                
                                <HeaderCard author={postData.author} date={postData.date} width={32} height={32} />

                                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="article-body" />

                                <div className="article-tags">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
                                        </svg>
                                    </span>
                                    <span className="tag-item">tag 2</span>
                                    <span className="tag-item">tag 3</span>
                                </div>

                                <AuthorBox author={postData.author} />

                                <div id="comments">
                                    <h2>List Comment</h2>
                                </div>
                            </div>
                        </div>
                        <footer className="article-footer">
                            
                        </footer>
                    </article>
                </section>
                
                <Sidebar />
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
    const postData = await getPostDataBySlug(params.slug)

    if (!postData) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            postData
        }
    }
}