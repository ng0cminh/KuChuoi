/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import HeaderCard from "../Widgets/HeaderCard";


const PostCard = ({post}) => {
    return(
        <div className="card">
            <article className="article">
                <HeaderCard author={post.author} date={post.date} size={16} />
                <div className="article-main">
                    <figure className="article-figure img-fluid">
                        <div className="badge featured">
                            <span>Xem nhiều</span>
                        </div>
                        <Image 
                            src={post.image ? `/images/contents/${post.folder}/${post.image}` : `/images/default/article.jpg`}
                            width={1000}
                            height={500}
                            alt={post.title ? post.title : `Banner Default`}
                        />
                    </figure>
                    <div className="article-content">
                        <h2 className="article-title">
                            <Link href={`/${post.slug}`}>
                                <a >{post.title ? post.title : null}</a>
                            </Link>
                        </h2>
                        <p className="article-description">
                            {post.description ? post.description : null}
                        </p>
                    </div>
                </div>
                <footer className="article-footer">
                    <span><a href={`/category/${post.folder ? post.folder : null}`}>{post.category ? post.category : null}</a></span>
                    <span><a href={`/${post.slug}`}>Xem</a></span>
                </footer>
            </article>
        </div>
    )
}

export default PostCard;
