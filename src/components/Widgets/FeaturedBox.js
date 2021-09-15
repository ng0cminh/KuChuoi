/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */


function FeaturedBox () {
        return (
            <div className="widget">
                <h3 className="widget-title">Featured Posts</h3>
                <div className="widget-content">
                    <ul className="widget-post">
                        <li className="item-post" >
                            <a href="#">
                                <img src="/images/default/article.jpg" alt="banner" />
                            </a>
                        <h4>
                            <a href="#">Tiêu đề bài viết</a>
                        </h4>
                        </li>
                        <li className="item-post" >
                            <a href="#">
                                <img src="/images/default/article.jpg" alt="banner" />
                            </a>
                        <h4>
                            <a href="#">Tiêu đề bài viết</a>
                        </h4>
                        </li>
                        <li className="item-post" >
                            <a href="#">
                                <img src="/images/default/article.jpg" alt="banner" />
                            </a>
                        <h4>
                            <a href="#">Tiêu đề bài viết</a>
                        </h4>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

export default FeaturedBox;
