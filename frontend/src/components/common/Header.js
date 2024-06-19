import React from 'react';
import "../../css/style.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDropDown from '../core/auth/ProfileDropDown';
import { LANGUAGES } from '../../constants.js/constants';
import Dropdown from '../Dropdown';
import {useTranslation} from 'react-i18next';
const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { t }=useTranslation();

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/index.html" className="logo">
          <i className="fas fa-user-hard-hat"></i> Majdoor
        </a>
        <div className="links" >
          {token === null ? (
            <>
              <div className='flex items-center justify-center gap-x-4'>
              <Link to='/'>{t('h1')}</Link>
              <Link to='/about'>{t('a1')}</Link>
              <Link to='/services'>{t('S')}</Link>
              <Link to='/reviews'>{t('R')}</Link>
              <Link to='/contact'>{t('C')}</Link>
              <Link to='/login'>{t('L')}</Link>
              <Dropdown/>
              </div>
            </>
          ) : (
            <>
              {/* <Link to='/CustomerHome' style={{ marginRight: '20px' }}>
              {user?.firstName && `${user.firstName}'s`} Page
              </Link> */}

            <div className='flex items-center justify-center gap-x-3'> <ProfileDropDown />
            <Dropdown/></div>
             
        
            </>
            
          )}
        </div>

      {/* <div classname=''> <Dropdown/></div> */}
        
      </nav>
    </header>
  );
};

export default Header;
