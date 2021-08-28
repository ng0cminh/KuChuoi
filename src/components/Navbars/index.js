/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

class Navbars extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            show: false,
            isSearch: false,
        }
    }
    render() {
        return(
            <div className="main-menu">
                <div className="container">
                    <div className="nav-search">
                        <span className="nav-mobile-btn"
                            onClick={() => {this.setState({
                                show: !this.state.show
                            })}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </span>
                        <div className={this.state.show ? "nav-overlay show" : "nav-overlay"}
                            onClick={() => {this.setState({
                                show: !this.state.show
                            })}}
                        ></div>
                        <nav className={this.state.show ? "navbars show" : "navbars"}>
                            <div className="brand">
                                <div className="mobile-logo">
                                    
                                </div>
                                <span className="nav-mobile-close"
                                    onClick={() => {this.setState({
                                        show: !this.state.show
                                    })}}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </span>
                            </div>
                            
                            <ul className="navbar-list">
                                <li className="navbar-item">
                                    <a className="navbar-link" href="/">Home</a>
                                </li>
                                <li className="navbar-item">
                                    <a className="navbar-link" href="/blog">Blog</a>
                                </li>
                                <li className="navbar-item">
                                    <a className="navbar-link" href="/pages">Pages</a>
                                </li>
                                <li className="navbar-item">
                                    <a className="navbar-link" href="/featured">Featured</a>
                                </li>
                            </ul>
                        </nav>
                        <form className="search-form" action="#" method="post">
                            <input className={this.state.isSearch ? "search-input show" : "search-input"} type="text" name="search" placeholder="Nhập từ khóa và lấy búa đập phím Enter" />
                        </form>
                        <span className={this.state.isSearch ? "nav-search-close show" : "nav-search-close"}
                            onClick={() => {this.setState({
                                isSearch: !this.state.isSearch
                            })}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                        <span className={this.state.isSearch ? "nav-search-btn" : "nav-search-btn show"}
                            onClick={() => {this.setState({
                                isSearch: !this.state.isSearch
                            })}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbars;
