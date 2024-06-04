import React, { useEffect } from 'react';
import './App.css';
import Header from './components/common/Header';
import Home from './pages/Home';
import About from './components/common/About';
import Services from './components/common/Services';
import Gallery from './components/common/Gallery';
import Facilities from './components/common/Facilities';
import Reviews from './components/common/Reviews';
import Footer from './components/common/Footer';
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import VerifyEmail from "./pages/VerifyEmail"

const Home = () => {
  useEffect(() => {
    const lightGalleryScript = document.createElement('script');
    lightGalleryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js';
    lightGalleryScript.async = true;
    document.body.appendChild(lightGalleryScript);

    const customScript = document.createElement('script');
    customScript.src = '/js/script.js';
    customScript.async = true;
    document.body.appendChild(customScript);

    lightGalleryScript.onload = () => {
      if (window.lightGallery) {
        window.lightGallery(document.querySelector('.gallery .gallery-container'));
      }
    };

    return () => {
      document.body.removeChild(lightGalleryScript);
      document.body.removeChild(customScript);
    };
  }, []);
  return (
    <div>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/verify-email" element={<VerifyEmail/>}/>
      </Routes>
    
    <About />
    <Services />
    <Gallery />
    <Reviews />
    <Footer /> 
    </div>
  )
}

export default Home