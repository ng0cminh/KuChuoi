import Link from "next/link";

const TopNavbars = () => {
  return (
    <ul className="navbar-list">
      <li className="navbar-item">
        <Link href="/">
          <a className="navbar-link">Home</a>
        </Link>
      </li>
      <li className="navbar-item">
        <Link href="/about">
          <a className="navbar-link">Giới Thiệu</a>
        </Link>
      </li>
      <li className="navbar-item">
        <Link href="/contact">
          <a className="navbar-link">Liên Hệ</a>
<<<<<<< HEAD
        </Link>
      </li>
      <li className="navbar-item">
        <Link href="/rules">
          <a className="navbar-link">Điều Khoản</a>
=======
>>>>>>> aae8d8ec4cc4c24c2e4f1df4306ffaf16ba8d3c1
        </Link>
      </li>
      <li className="navbar-item">
        <Link href="/rules">
          <a className="navbar-link">Điều Khoản</a>
        </Link>
      </li>{" "}
    </ul>
  );
};

export default TopNavbars;
