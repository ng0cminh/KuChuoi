import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbars from './Navbars';
import Head from 'next/head';

const Layout = ({children, title}) => {
    return (
        <Fragment>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
                <title>{title}</title>
            </Head>

            <Header />
            <Navbars />
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