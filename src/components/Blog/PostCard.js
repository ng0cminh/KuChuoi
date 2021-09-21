/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import HeaderCard from "../Widgets/HeaderCard";


const PostCard = ({post}) => {
    return(
        <div className="card">
            <article className="article">
                <HeaderCard author={post.author} date={post.date} size={16} href={post.slug} />
                <div className="article-main">
                    <figure className="article-figure img-fluid">
                        { post.isFeatured ? (
                            <div className="badge featured">
                                <span><a href="/featured-posts">Nổi bật</a></span>
                            </div>
                        ) : null}
                        <Image 
                            src={post.image ? `/images/contents/${post.folder}/${post.image}` : `/images/default/article.jpg`}
                            width={1000}
                            height={500}
                            alt={post.title ? post.title : `Banner Default`}
                        />
                    </figure>
                    <div className="article-content">
                        <h2 title={post.title} className="article-title">
                            <Link href={`/${post.slug}`}>
                                <a>{post.title && post.title}</a>
                            </Link>
                        </h2>
                        <p className="article-description">
                            {post.description && post.description}
                        </p>
                    </div>
                </div>
                <footer className="article-footer">
                    <a href={`/${post.slug}#comments`}>
                        <span>Bình luận</span>
                    </a>
                    <a href={`/${post.slug}`}>
                        <span>{post.readTime} phút đọc</span>
                    </a>
                </footer>
            </article>
        </div>
    )
}

export default PostCard;
