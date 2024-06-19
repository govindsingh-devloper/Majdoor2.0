import React from 'react'
import Template from '../components/core/auth/Template'
import thekedaaricon from '../images/thekedaaricon.jpg';
import majdooricon from '../images/majdooricon.jpg';
import customericon from '../images/customericon.jpg';
import {useTranslation} from 'react-i18next';
const Login = () => {
  const { t }=useTranslation();
  return (
    <>
    <div>
      <section className="services" id="services">
        <h3 class="heading">{t('l2')}<span> {t('l3')}</span> </h3>
        <div class="box-container">
          <div class="box">
            <img src={customericon} alt="Customer icon"/>
            <h3>{t('l4')}</h3>
            <a href="/customer-login" class="btn">{t('l4')}</a>
          </div>
          <div class="box">
            <img src={majdooricon} alt="Majdoor icon"/>
            <h3>{t('l5')}</h3>
            <a href="/majdoor-login" class="btn"> {t('l5')}</a>
          </div>
          <div class="box">
            <img src={thekedaaricon} alt="Thekedar icon"/>
            <h3>{t('l6')}</h3>
            <a href="/thekedar-login" class="btn">{t('l6')}</a>
          </div>
        </div>
      </section>
      {/* <Template
        title="Welcome Back "
        description1="build skills for today, tomorrow and beyond"
        description2="ihkcqold;ljqwidlkwoinqw"
        // image={};
        formType="login"
    /> */}
    </div>
    </>
  )
}

export default Login
