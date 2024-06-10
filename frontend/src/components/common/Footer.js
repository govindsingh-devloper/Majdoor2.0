import React from 'react';
import "../../css/style.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          {
            token === null ?
            (
            <>
            <Link className="link" to='/'><i className="fas fa-angle-right"></i>Home</Link>
            <Link className="link" to='/about'><i className="fas fa-angle-right"></i>About</Link>
            <Link className="link" to='/services'><i className="fas fa-angle-right"></i>Services</Link>
            <Link className="link" to='/reviews'><i className="fas fa-angle-right"></i>Reviews</Link>
            </> ):(
              <>
              <Link className="link" to='/'><i className="fas fa-angle-right"></i>Home</Link>
              <Link className="link" to='/about'><i className="fas fa-angle-right"></i>About</Link>
              <Link className="link" to='/services'><i className="fas fa-angle-right"></i>Services</Link>
              <Link className="link" to='/reviews'><i className="fas fa-angle-right"></i>Reviews</Link>
              
              <Link className="link" to='/'>
                <i className="fas fa-angle-right"></i>
              My Page
              </Link>
              </>
              
            )
          }
        </div>
        <div className="box">
          <h3>newsletter</h3>
          <p>Subscribe for latest updates</p>
          <form action="">
            <input type="email" name="" placeholder="enter your email" id="" className="email" />
            <input type="submit" value="subscribe" className="btn" />
          </form>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>
      </div>
      <div className="credit">Created by <span>TEAM 5 STARS</span> | all rights reserved!</div>
    </section>
  );
};

export default Footer;
