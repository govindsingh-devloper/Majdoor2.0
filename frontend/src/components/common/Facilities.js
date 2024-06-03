import React from 'react';

const Facilities = () => {
  return (
    <section className="facilities">
      <h1 className="heading"> why <span>choose us?</span> </h1>
      <div className="box-container">
        <div className="box">
          <img src="assets/images/why-choose-icon-1.svg" alt="24/7 support" />
          <h3>24/7 support</h3>
          <p>Foster effective collaboration through instant communication.</p>
        </div>
        <div className="box">
          <img src="assets/images/why-choose-icon-2.svg" alt="quality service" />
          <h3>quality service</h3>
          <p>Promote transparency in wages, job requirements, and worker availability.</p>
        </div>
        <div className="box">
          <img src="assets/images/why-choose-icon-3.svg" alt="Efficiency and Convenience" />
          <h3>Efficiency and Convenience</h3>
          <p>Streamline the process of finding and hiring workers.</p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
