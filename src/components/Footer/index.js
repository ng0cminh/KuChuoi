import Link from "next/link";
import TopNavbars from "../Navbars/TopNavbar";

const Footer = () => {
    return(
        <footer id="footer" className="footer">
            <div className="container">
                <div className="bottom-footer">
                    <div className="info">
                        <p>
                            Copyright © 2021 by <a href="#">Ng0cMinh</a>
                        </p>
                    </div>
                    <nav className="navbars">
                        <TopNavbars />
                    </nav>
                </div>
            </div>
            <div className="back-to-top">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
