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
const Services = () => {
  const dispacth=useDispatch();
  const navigate=useNavigate();
  const [skills,setSkills]=useState()

  // const handleOnSubmit=(e)=>{
  //   e.preventDefault();
  //   dispacth(search(skills,navigate))
  // }
  return (
  <div>
     
   
     
      <section className="services" id="services">
    
    <h1 className="heading"> our <span>services</span> </h1>
    <div className="box-container">
      <div className="box">
        <img src={carpenter_icon} alt="Carpenter" />
        <h3>Carpenter</h3>
        <p>We bring traditional charm to modern spaces with our exceptional Carpenter Services.</p>
      </div>
      <div className="box">
        <img src={plumber_icon} alt="Plumber" />
        <h3>Plumber</h3>
        <p>We deal with everything from small repairs to new installations. Highly trained technicians quickly tackle all your plumbing issues.</p>
      </div>
      <div className="box">
        <img src={painter_icon} alt="Painter" />
        <h3>Painter</h3>
        <p>Transform your spaces with beauty and finesse, get the painting job done by our experts and reshape your dream home.</p>
      </div>
      <div className="box">
        <img src={electrician_icon} alt="Electrician" />
        <h3>Electrician</h3>
        <p>Count on us for all your professional and dependable electrical jobs that keep your property running smoothly and safely.</p>
      </div>
      <div className="box">
        <img src={worker_icon} alt="Shuttering and Barbending" />
        <h3>Shuttering and Barbending</h3>
        <p>Labour for binding bars for house construction or for industrial construction.</p>
      </div>
      <div className="box">
        <img src={welder_icon} alt="Welder" />
        <h3>Welder</h3>
        <p>Close attention to detail, ensuring each weld is executed with accuracy and meets specific project requirements.</p>
      </div>
      <div className="box">
        <img src={mason_icon} alt="Mason" />
        <h3>Mason</h3>
        <p>Elevate your work speed with expert Masons and reduce construction costs, just a click away.</p>
      </div>
      <div className="box">
        <img src={labour_icon} alt="Labour" />
        <h3>Labour</h3>
        <p>Quality talent at your finger tips, efficiently access semi-skilled and un-skilled workers for all your construction needs.</p>
      </div>
    </div>
  </section>
  </div>
  );
};

export default Services;
