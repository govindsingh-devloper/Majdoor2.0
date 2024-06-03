// import "./App.css";
import { Route,Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import VerifyEmail from "./pages/VerifyEmail"

// function App() {
//   return (
    
//     <div>
//     <Navbar/>
//       <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/signup" element={<Signup/>}/>
//       </Routes>

//     </div>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import './App.css';
import Header from './components/common/Header';
import Home from './pages/Home';
//import FunFact from './components/common/FunFact';
import About from './components/common/About';
import Services from './components/common/Services';
import Gallery from './components/common/Gallery';
import Facilities from './components/common/Facilities';
import Reviews from './components/common/Reviews';
import Footer from './components/common/Footer';
import CustHome from "./components/core/auth/Customer/CustHome";

const App = () => {
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
      <Route path="/login" element={<Login/>}/>
      <Route path="/verify-email" element={<VerifyEmail/>}/>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      


      <Route path="/CustHome" element={<CustHome />}/>
      
      </Routes>

   
    
    {/* <About />
    <Services />
    <Gallery />
    <Reviews />
    <Footer />  */}
    <Footer/>
    </div>
  );
};

export default App;
// =======
// import "./App.css";
// import { Route,Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/common/Navbar";
// import Login from "./pages/login";
// import Signup from "./pages/signup";

// function App() {
//   return (
    
//     <div>
//     <Navbar/>
//       <Routes>
//       <Route path="/" element={<Home/>} />

//       <Route path="/login" element={<Login/>}/>
//       <Route path="/signup" element={<Signup/>}/>
//       </Routes>

//     </div>
//   );
// }

// export default App;
// >>>>>>> 5295a03b91be99f54e9b3a615b80e3c798f7b87d
