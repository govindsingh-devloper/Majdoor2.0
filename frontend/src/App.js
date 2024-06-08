// import "./App.css";
import { useEffect } from "react";
import Homes from "./pages/Home";
// import { Route,Routes } from "react-router-dom";
import './App.css';
import Header from './components/common/Header';
import About from './components/common/About';
import Services from "./components/core/auth/Customer/Services";
import Gallery from './components/common/Gallery';
import Facilities from './components/common/Facilities';
import Reviews from './components/common/Reviews';
import Footer from './components/common/Footer';
import { Route,Routes } from "react-router-dom";
// import Navbar from "./components/common/Navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import CustHome from './components/core/auth/Customer/CustHome';
import VerifyEmail from "./pages/VerifyEmail"
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import LoginForm from "./pages/LoginAsMajdoor";
import Service from "./components/common/Services";
import EditProfile from "./components/core/auth/Customer/Edit/EditProfile";
import Contact from "./pages/Contact";
import Loginform from "./components/core/auth/Loginform";
import Signupform from "./components/core/auth/MajdoorSignUpForm";
import Mdashboard from "./pages/Mdashboard";


//import Navbar from "./components/common/Navbar";
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
   {/* <Navbar /> */}
    <Header />
    <Routes>
      <Route path="/" element={<Homes/>}/>
      <Route path="/verify-email" element={<VerifyEmail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/Update-password/:id' element={<UpdatePassword/>}/>
      <Route path='/serviceS' element={<Services/>}/>
      <Route path='/CustHome' element={<CustHome/>}/>
      <Route path='/majdoor-login' element={<LoginForm/>}/>
      <Route path='/majdoor-signup' element={<Signupform/>}/>
      <Route path="/CustHome/Edit" element={<EditProfile/>}/>
      <Route path="/customer-login" element={<Loginform/>}/>
      <Route path="/thekedar-login" element={<Loginform/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/Mdashboard" element={<Mdashboard />} />
      </Routes>
    
    {/* <About />
    <Services />
    <Gallery />
    <Reviews />
    <Footer />  */}
    </div>
  );
};

export default Home;
