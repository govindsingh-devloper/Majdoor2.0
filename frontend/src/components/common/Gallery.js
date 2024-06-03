import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading"> our <span>gallery</span> </h1>
      <div className="gallery-container">
        <a className="box" href="assets/images/g-img-1.jpg"><img src="assets/images/g-img-1.jpg" alt="Gallery 1" /></a>
        <a className="box" href="assets/images/g-img-2.jpg"><img src="assets/images/g-img-2.jpg" alt="Gallery 2" /></a>
        <a className="box" href="assets/images/g-img-3.jpg"><img src="assets/images/g-img-3.jpg" alt="Gallery 3" /></a>
        <a className="box" href="assets/images/g-img-4.jpg"><img src="assets/images/g-img-4.jpg" alt="Gallery 4" /></a>
        <a className="box" href="assets/images/g-img-5.png"><img src="assets/images/g-img-5.png" alt="Gallery 5" /></a>
        <a className="box" href="assets/images/g-img-6.jpg"><img src="assets/images/g-img-6.jpg" alt="Gallery 6" /></a>
      </div>
    </section>
  );
};

export default Gallery;
