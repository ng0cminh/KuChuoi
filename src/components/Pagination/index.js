const Pagination = ({hasMore, handleLoadMore}) => {
    return (
        <nav id="pagination" className="navbars pagination">
            <ul className="navbar-list">
                {hasMore ? (<button className="btn-primary" onClick={handleLoadMore}>Xem thêm</button>) : null}
            </ul>
        </nav>
    )
}

export default Pagination;
