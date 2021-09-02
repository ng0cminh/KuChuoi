const Pagination = ({totalPage, pageIndex, folder, author}) => {
    let prevLink = null;
    let nextLink = null;
    if(folder) {
        prevLink = `/category/${folder}/${pageIndex - 1 == 0 ? "" : pageIndex - 1}`;
        nextLink = `/category/${folder}/${pageIndex +1}`;
    } else if(author) {
        prevLink = `/author/${author}/${pageIndex - 1 == 0 ? "" : pageIndex - 1}`;
        nextLink = `/author/${author}/${pageIndex +1}`;
    } else {
        prevLink = pageIndex - 1 == 0 ? "" : pageIndex - 1;
        nextLink = pageIndex +1;
    }

    return (
        <nav id="pagination" className="navbars pagination">
            <ul className="navbar-list">
                <li className="navbar-item">
                    {
                        pageIndex > 0 ? 
                        <a className='navbar-link' href={prevLink}>&lt;</a>
                        : null
                    }
                </li>

                <li className="navbar-item">
                    <a className="navbar-link disabled">{pageIndex + 1}/{totalPage + 1}</a>
                </li>

                <li className="navbar-item">
                    {
                        pageIndex < totalPage ?
                        <a className='navbar-link' href={nextLink}>&gt;</a>
                        : null
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;