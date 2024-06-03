import React from 'react';

const FunFact = () => {
  return (
    <section className="fun-fact">
      <div className="box">
        <img src="assets/images/fun-fact-icon-1.svg" alt="Repairs done" />
        <div className="info">
          <h3>2890</h3>
          <p>repairs done</p>
        </div>
      </div>
      <div className="box">
        <img src="assets/images/fun-fact-icon-2.svg" alt="Certified Majdoors" />
        <div className="info">
          <h3>25</h3>
          <p>Certified Majdoors</p>
        </div>
      </div>
      <div className="box">
        <img src="assets/images/fun-fact-icon-3.svg" alt="Happy clients" />
        <div className="info">
          <h3>3585</h3>
          <p>happy clients</p>
        </div>
      </div>
      <div className="box">
        <img src="assets/images/fun-fact-icon-4.svg" alt="Active majdoors" />
        <div className="info">
          <h3>45</h3>
          <p>active majdoors</p>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
