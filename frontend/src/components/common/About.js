import React from 'react';
import "../../css/style.css";

import aboutimg from '../../images/indonov118.jpg';
import {useTranslation} from 'react-i18next';

const About = () => {
  const { t }=useTranslation();
  return (
    <section className="about" id="about">
      <div className="content">
        <h3>{t('about1')}</h3>
        <p>{t('about2')}</p>
      </div>
      <div className="image">
        <img src={aboutimg} alt="About" />
      </div>
    </section>
  );
};

export default About;
