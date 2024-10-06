import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <span className="bold">Portfolio</span> 
      </div>
      <nav>
        <a href="Home">Home</a>
        <a href="case-study">Case Study</a>
        <a href="about">About</a>
        <a href="achievements">Achievements</a>
        <a href="blog">Blog</a>  {/*hobbies, events, certificate, about parenting */}

      </nav>
    </header>
  );
}

export default Header;