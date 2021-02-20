import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> William Ahn's Website
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/about'>인사 및 소개</Link>
        </li>
        <li>
          <Link to='/column'>칼럼</Link>
        </li>
        <li>
          <Link to='/register'>회원가입</Link>
        </li>
        <li>
          <Link to='/login'>로그인</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
