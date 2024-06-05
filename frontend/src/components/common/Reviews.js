import React from 'react';
import "../../css/style.css";

import Review1 from '../../images/pic-1.png';
import Review2 from '../../images/pic-2.png';
import Review3 from '../../images/pic-3.png';

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading"> clients <span>reviews</span> </h1>
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
            <p>Easy to use application. It offers a variety of payment options, including digital payments, making it easier for clients to pay for services and for workers to receive their earnings. </p>
          </div>
          <div className="user">
            <img src={Review1} alt="Anil Malhotra" />
            <h3>Anil Malhotra</h3>
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
            <p>I have been using Majdoor for 4 months now, and I had found it very easy to find construction workers for my project.</p>
          </div>
          <div className="user">
            <img src={Review2} alt="Sneha Gupta" />
            <h3>Sneha Gupta</h3>
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
            <p>The process of hiring is straightforward and efficient. This accelerated our construction project with skilled construction workers.</p>
          </div>
          <div className="user">
            <img src={Review3} alt="Sajan Rajput" />
            <h3>Sajan Rajput</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
