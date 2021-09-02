import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbars from './Navbars';
import Head from 'next/head';

const Layout = ({children, title, categories}) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <Header>

            </Header>  
            <Navbars categories={categories} />
                <main id="main" className="main">
                    <div className="container">
                        {children}
                    </div>
                </main>
            <Footer>

            </Footer>
        </Fragment>
    )
}

export default Layout;