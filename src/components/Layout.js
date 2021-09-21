import { Fragment } from "react";
import Seo from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import Navbars from './Navbars';

const Layout = ({children, metadata, menu}) => {
    return (
        <Fragment>
            <Seo metadata={metadata} />
            <Header />
            <Navbars menu={menu} />
                <main id="main" className="main">
                    <div className="container">
                        {children}
                    </div>
                </main>
            <Footer />
        </Fragment>
    )
}

export default Layout;