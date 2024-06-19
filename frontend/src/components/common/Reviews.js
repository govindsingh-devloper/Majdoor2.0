import React from 'react';
import "../../css/style.css";

import Review1 from '../../images/pic-1.png';
import Review2 from '../../images/pic-2.png';
import Review3 from '../../images/pic-3.png';
import {useTranslation} from 'react-i18next';
const Reviews = () => {
  const { t }=useTranslation();
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading"> {t('r1')}<span>{t('R')}</span> </h1>
      <div className="box-container">
        <div className="box">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="text">
            <i className="fas fa-quote-right"></i>
            <p>{t('r2')}</p>
          </div>
          <div className="user">
            <img src={Review1} alt="Anil Malhotra" />
            <h3>{t('r3')}</h3>
          </div>
        </div>
        <div className="box">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="text">
            <i className="fas fa-quote-right"></i>
            <p>{t('r4')}</p>
          </div>
          <div className="user">
            <img src={Review2} alt="Sneha Gupta" />
            <h3>{t('r5')}</h3>
          </div>
        </div>
        <div className="box">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="text">
            <i className="fas fa-quote-right"></i>
            <p>{t('r6')}</p>
          </div>
          <div className="user">
            <img src={Review3} alt="Sajan Rajput" />
            <h3>{t('r7')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
