import React from 'react';
import "../../css/style.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a className="link" href="#home"><i className="fas fa-angle-right"></i> Home</a>
          <a className="link" href="#about"><i className="fas fa-angle-right"></i> About</a>
          <a className="link" href="#services"><i className="fas fa-angle-right"></i> Services</a>
          <a className="link" href="#reviews"><i className="fas fa-angle-right"></i> Reviews</a>
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
