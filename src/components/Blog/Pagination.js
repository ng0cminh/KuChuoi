const Pagination = ({totalPage, pageIndex, folder}) => {
    return (
        <nav id="pagination" className="navbars pagination">
            <ul className="navbar-list">
                <li className="navbar-item">
                    {
                        pageIndex > 0 ? 
                        <a className='navbar-link' href={`${folder}/${pageIndex - 1}`}>&lt;</a>
                        : null
                    }
                </li>

                <li className="navbar-item">
                    <a className="navbar-link disabled">{pageIndex}/{totalPage}</a>
                </li>

                <li className="navbar-item">
                    {
                        pageIndex < totalPage ?
                        <a className='navbar-link' href={`${folder}/${pageIndex + 1}`}>&gt;</a>
                        : null
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;