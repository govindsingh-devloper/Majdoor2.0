import React from 'react';
import Template from '../components/core/auth/Template'; 

const Login = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="/Home.jsx" className="logo">
            <i className="fas fa-user-hard-hat"></i> Majdoor
          </a>
          <div className="links">
            <a href="/signup.jsx" className="btn">Sign in </a>
          </div>
          <div id="menu-btn" className="fa fa-bars"></div>
        </nav>
      </header>

      <section className="services" id="services">
        <h3 className="heading">
          Please select<span> your account type!</span>
        </h3>
        <br />
        <br />
        <div className="box-container">
          <div className="box">
            <img src="./images/19340.jpg" alt="" />
            <h3>Login as a Majdoor</h3>
            <a href="/majdoor/" className="btn">Click here!</a>
          </div>
          <div className="box">
            <img src="./images/cus1.jpg" alt="" />
            <h3>Login as a Customer</h3>
            <a href="/" className="btn">Click here!</a>
          </div>
          <div className="box">
            <img src="./images/admin1.jpg" alt="" />
            <h3>Login as an Admin</h3>
            <a href="/" className="btn">Click here!</a>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a className="link" href="#home">
              <i className="fas fa-angle-right"></i> home
            </a>
            <a className="link" href="#about">
              <i className="fas fa-angle-right"></i> about
            </a>
            <a className="link" href="#services">
              <i className="fas fa-angle-right"></i> services
            </a>
            <a className="link" href="#reviews">
              <i className="fas fa-angle-right"></i> reviews
            </a>
            <a className="link" href="#contact">
              <i className="fas fa-angle-right"></i> contact
            </a>
          </div>
          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
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
        <div className="credit">
          created by <span>TEAM 5 STARS </span> | all rights reserved!
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js"></script>
      <script src="js/script.js"></script>
      <script>
        lightGallery(document.querySelector('.gallery .gallery-container'));
      </script>
    </>
  );
};

export default Login;
