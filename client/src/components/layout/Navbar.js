import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
          <a href="index.html"><i className="fas fa-code"></i> William Ahn's Website</a>
        </h1>
        <ul>
          <li><a href="profiles.html">인사 및 소개</a></li>
          <li><a href="register.html">칼럼</a></li>
          <li><a href="login.html">로그인</a></li>
        </ul>
      </nav>
    )
}

export default Navbar
