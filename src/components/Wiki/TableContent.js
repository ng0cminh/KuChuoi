import { Fragment } from "react";

const TableContent = () => {
  const [showTableContent, setShowTableContent] = useState(false)

  return (
    <Fragment>
      <aside className={showTableContent ? "sidebar show": "sidebar"} id="sidebar">
        <nav className="sidebar-nav">
          <ul className="sidebar-list show">
          <li className="list-item">
            <a href="#">Đây là thẻ heading 2</a>
            <ul>
              <li className="list-item"><a href="#">Đây là thẻ heading 3</a></li>
              <li className="list-item"><a href="#">Đây là thẻ heading 3 dài hơn hai dòng hoặc dài hơn</a></li>
              <li className="list-item"><a href="#">Đây là thẻ heading 3</a></li>
            </ul>
          </li>
          <li className="list-item">
            <a href="#">Đây là thẻ heading 2 dài hơn hai dòng hoặc dài hơn</a>
          </li>
          <li className="list-item">
            <a href="#">Đây là thẻ heading 2</a>
          </li>
          </ul>
        </nav>
      </aside>
      <div className={{showTableContent ? "table-content show": "table-content"}} onClick={()=> setShowTableContent(!showTableContent)}>
        <div className="table-width">
          <div className="table-height">
            <div className="table-content-button">
              <svg
                className="table-top-svg"
                viewBox="0 0 926.23699 573.74994"
                version="1.1"
                x="0px"
                y="0px"
                width="15"
                height="15"
              >
                <g transform="translate(904.92214,-879.1482)">
                  <path
                    fill="currentColor"
                    d="m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,-55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,-174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,-174.68583 0.6895,0 26.281,25.03215 56.8701,55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864-231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,-104.0616 -231.873,-231.248 z"
                  ></path>
                </g>
              </svg>
              <svg
                className="table-bottom-svg"
                viewBox="0 0 926.23699 573.74994"
                version="1.1"
                x="0px"
                y="0px"
                width="15"
                height="15"
              >
                <g transform="translate(904.92214,-879.1482)">
                  <path
                    fill="currentColor"
                    d="m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,-55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,-174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,-174.68583 0.6895,0 26.281,25.03215 56.8701,55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864-231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,-104.0616 -231.873,-231.248 z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TableContent;
