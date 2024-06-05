import React from 'react';
import gImg6 from '../images/19340.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
    <div className="image">
      <img src={gImg6} alt="Home" />
    </div>
    <div className="content">
      <h3>Why fix it yourself? Leave it to the majdoors.</h3>
      <p>Majdoor is more than just a platform for connecting workers and clients.</p>
      <a href="#about" className="btn">get started</a>
    </div>
  </section>
  )
}

export default Home