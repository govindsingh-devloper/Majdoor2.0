import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbarLinks'
import { useSelector } from 'react-redux'
import ProfileDropDown from '../core/auth/ProfileDropDown'

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);

  const renderNavLinks = () => {
    return NavbarLinks.map((link, index) => (
      <li key={index}>
        {link.title === "Categories" ? null : (
          <Link to={link.path}>{link.title}</Link>
        )}
      </li>
    ));
  };

  const renderLoginSignupButtons = () => {
    if (token) {
      return <ProfileDropDown />;
    }

    return (
      <>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </>
    );
  };

  return (
    <nav>
      <ul>{renderNavLinks()}</ul>
      <div>{renderLoginSignupButtons()}</div>
    </nav>
  );
};


export default Navbar