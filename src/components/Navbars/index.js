/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Link from "next/link";
import Search from "../Search";

const Navbars = ({ menu }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  return (
    <div className="main-menu">
      <div className="container">
        <div className="nav-search">
          <span
            className="nav-mobile-btn"
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </span>
          <div
            className={isShowMobileMenu ? "nav-overlay show" : "nav-overlay"}
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
          ></div>
          <nav className={isShowMobileMenu ? "navbars show" : "navbars"}>
            <div className="brand">
              <div className="mobile-logo">
                <img src="/images/favicon.png" alt="logo" />
              </div>
              <span
                className="nav-mobile-close"
                onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </div>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link href="/">
                  <a
                    className="navbar-link"
                    onClick={() => setIsShowMobileMenu(false)}
                  >
                    Home
                  </a>
                </Link>
              </li>
              {menu.map((item) => {
                return (
                  <li className="navbar-item" key={item.folder}>
                    <Link href={`/category/${item.folder}`}>
                      <a
                        className="navbar-link"
                        onClick={() => setIsShowMobileMenu(false)}
                      >
                        {item.category}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbars;
