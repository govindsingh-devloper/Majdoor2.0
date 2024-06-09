import React from 'react';
import "../../css/style.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDropDown from '../core/auth/ProfileDropDown';

const Header = () => {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/index.html" className="logo">
          <i className="fas fa-user-hard-hat"></i> Majdoor
        </a>
        <div className="links">
          <a href="/">home</a>
          <a href="#about">about</a>
          <a href ="#services">services</a>
          <a href="#reviews">reviews</a>
          <Link to='/contact'>Contact US</Link>
          {
            token ===null &&(
              <Link to='/login'>Login</Link>
            )

          }
          {
            token===null &&(
              <Link to='/signup'>
            Sign In
          </Link>
            )
          }
        
          {token !== null && <ProfileDropDown />}

        </div>
        <div id="menu-btn" className="fa fa-bars"></div>
      </nav>
    </header>
  );
};

export default Header;
