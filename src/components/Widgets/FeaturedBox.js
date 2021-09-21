/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

function FeaturedBox ({featuredPosts}) {
        return (
            <div className="widget">
                <h3 className="widget-title"><a href="/featured-posts">Bài viết nổi bật</a></h3>
                <div className="widget-content">
                    <ul className="widget-post">
                        {featuredPosts.map((post, index) => {
                            return(
                                <li className="item-post" key={post.slug + index} >
                                    <a href={`/${post.slug}`}>
                                        <Image
                                            src={post.image ? `/images/contents/${post.folder}/${post.image}` : `/images/default/article.jpg`}
                                            width={90}
                                            height={60}
                                            alt={post.title ? post.title : `Banner Default`}
                                        />
                                    </a>
                                <h4>
                                    <a href={`/${post.slug}`}>{post.title}</a>
                                </h4>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
}

export default FeaturedBox;
