import React from 'react';
import gImg6 from '../images/19340.jpg';
import About from '../components/common/About';
import Services from "../components/common/Services";
import Gallery from '../components/common/Gallery';
import Facilities from '../components/common/Facilities';
import Reviews from '../components/common/Reviews';
import Footer from '../components/common/Footer';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const { t }=useTranslation();
  return (
    <div className="home" id="home">
    <div className="image">
      <img src={gImg6} alt="Home" />
     
    </div>
    <div className="content">
      <h3>{t('t')}</h3>
      <p>{t('l')}</p>
      <a href="#about" className="btn">{t('h2')}</a>
    </div>

    <div>
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Footer /> 
    </div>
      
    
      </div>
  )
}

export default Home