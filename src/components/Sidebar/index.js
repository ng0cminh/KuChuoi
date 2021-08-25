import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="sidebar" id="sidebar">
            <div className="widget">
                <h3 className="widget-title">About</h3>
                <div className="widget-content">
                    <figure className="article-figure img-fluid">
                        <img src={`/images/article-5.jpg`} alt="Images1" />
                    </figure>
                    <p>Nội dung giới thiệu tóm tắt về website hoặc bản thân mình để cho mọi người biết về website hoặc bản thân sơ qua</p>
                </div>
            </div>

            <div className="widget">
                <h3 className="widget-title">Most views</h3>
                <div className="widget-content">
                    <ul className="widget-post">
                        <li className="item-post">
                            <a href="#">
                                <img src="/images/image-11.jpg" alt="anh 1" />
                            </a>
                            <h4>
                                <Link href="/single.html">
                                    <a>Tiêu đề viết cho phần sidebar dài khoảng hai dòng hoặc hơn</a>
                                </Link>
                            </h4>
                        </li>
                        <li className="item-post">
                            <a href="#"><img src="/images/image-12.jpg" alt="anh 1" /></a>
                            <h4>
                                <Link href="/single.html">
                                    <a>Tiêu đề viết cho phần sidebar dài khoảng hai dòng hoặc hơn</a>
                                </Link>
                            </h4>
                        </li>
                        <li className="item-post">
                            <a href="#"><img src="/images/image-19.jpg" alt="anh 1" /></a>
                            <h4>
                                <Link href="/single.html">
                                    <a>Tiêu đề viết cho phần sidebar dài khoảng hai dòng hoặc hơn</a>
                                </Link>
                            </h4>
                        </li>
                        <li className="item-post">
                            <a href="#"><img src="/images/image-20.jpg" alt="anh 1" /></a>
                            <h4>
                                <Link href="/single.html">
                                    <a>Tiêu đề viết cho phần sidebar dài khoảng hai dòng hoặc hơn</a>
                                </Link>
                            </h4>
                        </li>
                        <li className="item-post">
                            <a href="#"><img src="/images/image-15.jpg" alt="anh 1" /></a>
                            <h4>
                                <Link href="/single.html">
                                    <a>Tiêu đề viết cho phần sidebar dài khoảng hai dòng hoặc hơn</a>
                                </Link>
                            </h4>
                        </li>

                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;