/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import TopNavbars from "../Navbars/TopNavbar";

const Footer = ({ isWiki }) => {
  const [showBackTop, setShowBackTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.pageYOffset > 300);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="bottom-footer">
          <div className="info">
            <p>
              Copyright © 2021 by <a href="/about">Kủ Chuối Blog</a>
            </p>
          </div>
          <nav className="navbars">
            <TopNavbars />
          </nav>
        </div>
      </div>

      <div className={isWiki ? "back-to-top is-wiki" : "back-to-top"}>
        {showBackTop && (
          <button className="back-top" onClick={scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
