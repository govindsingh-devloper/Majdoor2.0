import React from 'react';
import "../../css/style.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDropDown from '../core/auth/ProfileDropDown';

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);


  return (
    <header className="header">
      <nav className="navbar">
        <a href="/index.html" className="logo">
          <i className="fas fa-user-hard-hat"></i> Majdoor
        </a>
        <div className="links" >
          {token === null ? (
            <>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/services'>Services</Link>
              <Link to='/reviews'>Reviews</Link>
              <Link to='/contact'>Contact Us</Link>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
            </>
          ) : (
            <>
              <Link to='/CustomerHome' style={{ marginRight: '20px' }}>
              {user?.firstName && `${user.firstName}'s`} Page
              </Link>
              <ProfileDropDown />
        
            </>
            
          )}
        </div>
        <div id="menu-btn" className="fa fa-bars"></div>
      </nav>
    </header>
  );
};

export default Header;
