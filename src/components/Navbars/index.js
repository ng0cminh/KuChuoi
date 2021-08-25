import Link from "next/link";

const Navbars = () => {
    return(
        <div className="main-menu">
            <div className="container">
                <div className="nav-search">
                    <span className="nav-mobile-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </span>
                    <div className="nav-overlay"></div>
                    <nav className="navbars">
                        <div className="brand">
                            <div className="mobile-logo">
                                
                            </div>
                            <span className="nav-mobile-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                        </div>
                        
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <Link href="/">
                                    <a className="navbar-link">Home</a>
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link href="/blog">
                                    <a className="navbar-link">Blog</a>
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link href="/list.html">
                                    <a className="navbar-link">Danh mục List</a>
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link href="/single.html">
                                    <a className="navbar-link">Single Page</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <form className="search-form" action="#" method="post">
                        <input className="search-input" type="text" name="search" placeholder="Nhập từ khóa và lấy búa đập phím Enter" />
                    </form>
                    <span className="nav-search-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                    <span className="nav-search-btn show">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbars;
