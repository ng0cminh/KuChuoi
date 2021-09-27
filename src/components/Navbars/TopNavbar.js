import Link from "next/link";

const TopNavbars = () => {
  return (
    <ul className='navbar-list'>
      <li className='navbar-item'>
        <Link href='/'>
          <a className='navbar-link'>Home</a>
        </Link>
      </li>
      <li className='navbar-item'>
        <Link href='/about'>
          <a className='navbar-link'>About</a>
        </Link>
      </li>
      <li className='navbar-item'>
        <Link href='/contact'>
          <a className='navbar-link'>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default TopNavbars;
