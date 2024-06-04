import React from 'react';
import "../css/style.css";
import About from '../components/common/About';
import Reviews from '../components/common/Reviews';
import Services from '../components/common/Services';
import Footer from '../components/common/Footer';
import Gallery from '../components/common/Gallery';

const Home = () => {
  return (
// <<<<<<< HEAD
//     <section className="home" id="home">
//     <div className="image">
//       <img src="../../images/19340.jpg" alt="Home" />
//     </div>
//     <div className="content">
//       <h3>Why fix it yourself? Leave it to the majdoors.</h3>
//       <p>Majdoor is more than just a platform for connecting workers and clients.</p>
//       <a href="#about" className="btn">get started</a>
//     </div>
//   </section>
//   )
// }
    <>
      <section className="home" id="home">
      <div className="image">
        <img src="assets/images/19340.jpg" alt="Home" />
      </div>
      <div className="content">
        <h3>Why fix it yourself? Leave it to the majdoors.</h3>
        <p>Majdoor is more than just a platform for connecting workers and clients.</p>
        <a href="#about" className="btn">get started</a>
      </div>
      <About/>
    <Reviews/>
    <Services/>
    <Gallery/>
    </section>
    

    </>
  );
};

export default Home;