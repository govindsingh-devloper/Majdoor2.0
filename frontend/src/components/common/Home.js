import React from 'react';
import "../../css/style.css";

const Home = () => {



  return (
    <section className="home" id="home">
      <div className="image">
        <img src="assets/images/19340.jpg" alt="Home" />
      </div>
      <div className="content">
        <h3>{t('title')}</h3>
        <p>{t('label')}</p>
        <a href="#about" className="btn">get started</a>
      </div>
    </section>
  );
};

export default Home;
