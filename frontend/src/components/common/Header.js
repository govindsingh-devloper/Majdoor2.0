import React from 'react';
import "../../css/style.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/index.html" className="logo">
          <i className="fas fa-user-hard-hat"></i> Majdoor
        </a>
        <div className="links">
          {/* <a href="/">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>

          <a href="#reviews">reviews</a>
          <a href="/Login" className="btn">Log in</a>
          <a href="#reviews">reviews</a> */}
          {/* <a href="/login" className="btn">Log in</a> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/login">Login</Link>
        </div>
        <div id="menu-btn" className="fa fa-bars"></div>
      </nav>
    </header>
  );
};

export default Header;
