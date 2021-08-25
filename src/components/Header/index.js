import Link from 'next/link';
import TopNavbars from '../Navbars/TopNavbar';
import SocialBox from '../Widgets/SocialBox';

const Header = () => {
    return(
        <header id="header" className="header">
            <div className="top">
                <div className="container">
                    <nav className="navbars">
                        <TopNavbars />
                        <SocialBox size={16} href="localhost:3000" />
                    </nav>
                </div>
            </div>

            <div className="logo-slogan">
                <div className="container">
                    <h1 className="site-title">
                        <Link href="/">
                            <a>My Blog</a>
                        </Link>
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default Header;
