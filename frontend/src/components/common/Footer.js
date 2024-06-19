import React from 'react';
import "../../css/style.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useTranslation} from 'react-i18next';
const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  const { t }=useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>{t('f1')}</h3>
          {
            token === null ?
            (
            <>
            <Link className="link" to='/' onClick={scrollToTop}><i className="fas fa-angle-right"></i>{t('f2')}</Link>
            <Link className="link" to='/about' onClick={scrollToTop}><i className="fas fa-angle-right"></i>{t('a1')}</Link>
            <Link className="link" to='/services' onClick={scrollToTop}><i className="fas fa-angle-right"></i>{t('S')}</Link>
            <Link className="link" to='/reviews' onClick={scrollToTop}><i className="fas fa-angle-right"></i>{t('R')}</Link>
            </> ):(
              <>
              <Link className="link" to='/' onClick={scrollToTop}><i className="fas fa-angle-right"></i>{t('f3')}</Link>
              <Link className="link" to='/about' onClick={scrollToTop}><i className="fas fa-angle-right"></i>{t('a1')}</Link>
              <Link className="link" to='/services' onClick={scrollToTop}><i className="fas fa-angle-right"></i>{t('S')}</Link>
              <Link className="link" to='/reviews' onClick={scrollToTop}><i className="fas fa-angle-right"></i>{t('R')}</Link>
              </>
              
            )
          }
        </div>
        <div className="box">
          <h3>{t('f4')}</h3>
          <p>{t('f5')}</p>
          <form action="">
            <input type="email" name="" placeholder={t('f6')} id="" className="email" />
            <input type="submit" value={t('f10')} className="btn" />
          </form>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>
      </div>
      <div className="credit">{t('f7')} <span>{t('f8')} </span>{t('f9')} </div>
    </section>
  );
};

export default Footer;
