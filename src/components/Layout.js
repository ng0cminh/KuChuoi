import Header from "./Header";
import Footer from "./Footer";
import Navbars from './Navbars';
import Head from 'next/head';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Trang Chủ</title>
            </Head>
            <Header>

            </Header>  
            <Navbars>

            </Navbars>
                <main id="main" className="main">
                    <div className="container">
                        {children}
                    </div>
                </main>
            <Footer>

            </Footer>
        </>
    )
}

export default Layout;