/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */


function FeaturedBox ({posts}) {
        return (
            <div className="widget">
                <h3 className="widget-title">Most views</h3>
                <div className="widget-content">
                    <ul className="widget-post">
                        {
                            posts.map((post, index) => {
                                return (
                                    <li className="item-post" key={index}>
                                    <a href="#">
                                        <img src={`/images/contents/${post.folder}/${post.image}`} alt={post.title} />
                                    </a>
                                    <h4>
                                        <a href={`/${post.slug}`}>{post.title}</a>
                                    </h4>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
}

export default FeaturedBox;
