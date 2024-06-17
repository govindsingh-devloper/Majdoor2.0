import React, { useState } from 'react';
import "../../css/style.css";
import carpenter_icon from '../../images/carpenter-svgrepo-com.svg';
import plumber_icon from '../../images/plumber-svgrepo-com.svg';
import electrician_icon from '../../images/electrician-svgrepo-com.svg';
import painter_icon from '../../images/painter-employee-svgrepo-com.svg';
import worker_icon from '../../images/concrete-mixer-truck-svgrepo-com.svg';
import mason_icon from '../../images/wall-brick-svgrepo-com.svg';
import welder_icon from '../../images/welder-worker-svgrepo-com.svg';
import labour_icon from '../../images/engineer-worker-svgrepo-com.svg';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { search } from '../../services/operations/MajdoorAuthAPI';
import {useTranslation} from 'react-i18next';
const Services = () => {
  const dispacth=useDispatch();
  const navigate=useNavigate();
  const { t }=useTranslation();
  const [skills,setSkills]=useState()

  // const handleOnSubmit=(e)=>{
  //   e.preventDefault();
  //   dispacth(search(skills,navigate))
  // }
  return (
  <div>
      <section className="services" id="services">
    
    <h1 className="heading">{t('services3')} <span>{t('services2')}</span> </h1>
    <div className="box-container">
      <div className="box">
        <img src={carpenter_icon} alt="Carpenter" />
        <h3>{t('services1')}</h3>
        <p>{t('services4')}</p>
      </div>
      <div className="box">
        <img src={plumber_icon} alt="Plumber" />
        <h3>{t('s1')}</h3>
        <p>{t('s2')}</p>
      </div>
      <div className="box">
        <img src={painter_icon} alt="Painter" />
        <h3>{t('s3')}</h3>
        <p>{t('s4')}</p>
      </div>
      <div className="box">
        <img src={electrician_icon} alt="Electrician" />
        <h3>{t('s5')}</h3>
        <p>{t('s6')}</p>
      </div>
      <div className="box">
        <img src={worker_icon} alt="Shuttering and Barbending" />
        <h3>{t('s7')}</h3>
        <p>{t('s8')}</p>
      </div>
      <div className="box">
        <img src={welder_icon} alt="Welder" />
        <h3>{t('s9')}</h3>
        <p>{t('s10')}</p>
      </div>
      <div className="box">
        <img src={mason_icon} alt="Mason" />
        <h3>{t('s11')}</h3>
        <p>{t('s12')}</p>
      </div>
      <div className="box">
        <img src={labour_icon} alt="Labour" />
        <h3>{t('s13')}</h3>
        <p>{t('s14')}</p>
      </div>
    </div>
  </section>
  </div>
  );
};

export default Services;
