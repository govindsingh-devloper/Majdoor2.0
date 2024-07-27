import React, { useState } from 'react';
import "../../css/style.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDropDown from '../core/auth/ProfileDropDown';
import Dropdown from '../Dropdown';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { token, user } = useSelector((state) => ({
    token: state.auth.token,
    user: state.profile.user
  }));
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderLinks = () => (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mx-10 my-10 md:my-0 md:gap-x-10">
      <Link to="/">{t('h1')}</Link>
      <Link to="/about">{t('a1')}</Link>
      <Link to="/services">{t('sS')}</Link>
      <Link to="/reviews">{t('R')}</Link>
      <Link to="/contact">{t('C')}</Link>
      <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-3xl ">{t('L')}</Link>
      {/* <Link to="/login">{t('L')}</Link> */}
      <Dropdown />
    </div>
  );

  const renderLoggedInLinks = () => (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-x-4">
      <ProfileDropDown />
      <Dropdown />
    </div>
  );

  return (
    <header className="header bg-gray-800 text-black pt-1">
      <nav className="navbar flex flex-col md:flex-row items-center justify-between">
      {/* <nav className="navbar  flex items-center justify-between"> */}
        <a href="/" className="logo text-lg font-bold">
          <i className="fas fa-user-hard-hat mr-2"></i> Mazdoor
        </a>
       
        <div className={`flex-col md:flex md:flex-row items-center justify-center gap-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`} style={{fontSize: isMenuOpen ? '1.3rem' : '1.8rem'}}>
        {/* <div className={`flex-col md:flex md:flex-row items-center justify-center gap-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}> */}
          {token ? renderLoggedInLinks() : renderLinks()}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-black  focus:outline-none p-2 md:p-2 hover:scale-120"
            // className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            {/* {isMenuOpen ? <FaTimes /> : <FaBars />} */}
          </button>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
