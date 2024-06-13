import React from 'react';
import gImg6 from '../images/19340.jpg';
import About from '../components/common/About';
import Services from "../components/common/Services";
import Gallery from '../components/common/Gallery';
import Facilities from '../components/common/Facilities';
import Reviews from '../components/common/Reviews';


const Home = () => {
  return (
    <div className="home" id="home">
    <div className="image">
      <img src={gImg6} alt="Home" />
     
    </div>
    <div className="content">
      <h3>Why fix it yourself? Leave it to the majdoors.</h3>
      <p>Majdoor is more than just a platform for connecting workers and clients.</p>
      <a href="#about" className="btn">get started</a>
    </div>

    <div>
      <About />
      <Services />
      <Gallery />
      <Reviews />
    </div>
      
    
      </div>
  )
}

export default Home