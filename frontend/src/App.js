// import "./App.css";
import { useEffect } from "react";
// import { Route,Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homes from "./pages/Home";
import Header from './components/common/Header';
import Footer from './components/common/Footer';


// import Services from "./components/common/Services";
// import Gallery from './components/common/Gallery';
// import Facilities from './components/common/Facilities';
// import Reviews from './components/common/Reviews';

import Login from "./pages/login";
import Signup from "./pages/signup";
import CustomerDashboard from './components/core/auth/Customer/CustomerDashboard';
import MajdoorDashboard from './components/core/auth/Majdoor/MajdoorDashboard';
import VerifyEmail from "./pages/VerifyEmail"
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import LoginForm from "./pages/LoginAsMajdoor";
import EditProfile from "./components/core/auth/Customer/Edit/EditProfile";
import Contact from "./pages/Contact";
import Loginform from "./components/core/auth/Loginform";
import TLoginform from "./components/core/auth/TLoginForm";
import Signupformm from "./components/core/auth/MajdoorSignUpForm";
import Mdashboard from "./pages/Mdashboard";
import SearchMajdoor from "./components/core/auth/Customer/searchMajdoor";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import CustomerHome from "./components/core/auth/Customer/CustomerHome";
import Signupform from "./components/core/auth/Signupform";
import TSignupform from "./components/core/auth/TSignupform";
import Edit from "./components/core/auth/Customer/Edit";
import ChangeProfilePicture from "./components/core/auth/Customer/Edit/ChangeProfilePicture";
import MajdoorConfirmation from "./components/core/auth/Majdoor/MajdoorConfirmation";
import ThekedarDashbord from '../src/components/core/auth/thekedar/ThekedarDashboard';
import SelectedMajdoor from "./components/core/auth/Customer/selectedMajdoor";
import CustomerLayout from "./components/core/auth/Customer/CustomerLayout";
import DeleteAccount from "./components/core/auth/Customer/Edit/DeleteAccount";


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
    <>
      <div>
          <Header />
          <div className="main-content">

          <Routes>
            <Route path="/" element={<Homes/>}/>
            
            <Route path="/verify-email" element={<VerifyEmail/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signupform/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/Update-password/:id' element={<UpdatePassword/>}/>
                        
            {/* login/signup */}
            <Route path='/majdoor-login' element={<LoginForm/>}/>
            <Route path='/majdoor-signup' element={<Signupform/>}/>
            <Route path="/customer-login" element={<Loginform/>}/>
            <Route path="/thekedar-login" element={<TLoginform/>}/>
            <Route path="/thekedar-signup" element={<TSignupform/>}/>
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/services" element={<Services />} />

            {/* Customer */}
            <Route 
              element={
                  <CustomerLayout />
              }
            >   <Route path="/searchMajdoor" element={<SearchMajdoor/>}/>
                <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
                <Route path="/CustomerHome" element={<CustomerHome />} />
                <Route path="/CustomerDashboard/Edit" element={<Edit />} />
                
            </Route>
            <Route path="/CustomerDashboard/Edit" element={<Edit />}/>
            <Route path="/searchMajdoor/:id" element={<SelectedMajdoor/>}/>
            <Route path="/MajdoorConfirmation" element={<MajdoorConfirmation />} />
            
            {/* majdoor */}
            <Route path="/Mdashboard" element={<Mdashboard />} />
            <Route path="/MajdoorDashboard" element={<MajdoorDashboard />} />
           
              
              
            {/* thekedar */}
            <Route path="/ThekedarDashbord" element={<ThekedarDashbord />} />
   
            {/*<Route path="/CustomerDashboard/Edit" element={<ChangeProfilePicture />}/>*/}
            <Route path="/ThekedarDashboard" element={<ThekedarDashbord />} />

            </Routes>
          
          <Footer /> 
          </div>
          
          
          </div>
    </>
        

  );
};

export default App;
