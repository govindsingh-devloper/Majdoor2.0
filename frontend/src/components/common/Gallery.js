
import React from 'react';
import "../../css/style.css";

// Import your image files
import gImg1 from '../../images/g-img-1.jpg';
import gImg2 from '../../images/g-img-2.jpg';
import gImg3 from '../../images/g-img-3.jpg';
import gImg4 from '../../images/g-img-4.jpg';
import gImg5 from '../../images/g-img-5.jpg';
import gImg6 from '../../images/g-img-6.jpg';
import {useTranslation} from 'react-i18next';
const Gallery = () => {
  const { t }=useTranslation();
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading"> {t('G1')}<span>{t('G2')}</span> </h1>
      <div className="gallery-container">
        <a className="box" href={gImg1}><img src={gImg1} alt="Gallery 1" /></a>
        <a className="box" href={gImg2}><img src={gImg2} alt="Gallery 2" /></a>
        <a className="box" href={gImg3}><img src={gImg3} alt="Gallery 3" /></a>
        <a className="box" href={gImg4}><img src={gImg4} alt="Gallery 4" /></a>
        <a className="box" href={gImg5}><img src={gImg5} alt="Gallery 5" /></a>
        <a className="box" href={gImg6}><img src={gImg6} alt="Gallery 6" /></a>
      </div>
    </section>
  );
};

export default Gallery;

