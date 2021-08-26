/* eslint-disable @next/next/no-html-link-for-pages */
const TopNavbars = () => {
    return(
        <ul className="navbar-list">
            <li className="navbar-item">
                <a className="navbar-link" href="/">Home</a>
            </li>
            <li className="navbar-item">
                <a className="navbar-link" href="/about">About</a>
            </li>
            <li className="navbar-item">
                <a className="navbar-link" href="/contact">Contact</a>
            </li>
        </ul>
    )
}

export default TopNavbars;
