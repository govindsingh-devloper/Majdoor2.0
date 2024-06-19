import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { TsendOtp } from "../../../services/operations/ThekedarAuthAPI"
import { setSignupData } from "../../../slices/authslice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../../css/style.css';


const TSignupform = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        firstName:"",  
        lastName:"",
        password:"",
        email:"",
        confirmPassword:"",
        location:"",
    })

    const [showPassword,setshowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword]=useState(false)
    const{firstName,lastName,email,password,confirmPassword,location }=formData
     // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
    //   accountType,
    }
     // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(TsendOtp(formData.email, navigate))
     // Reset
     setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        location:"",
      })
}

  return (
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-lg">
                <div className="leading-loose">
                    <div id="form-main">
                        <div id="form-div" className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                            <h2 className="sign">Signup Here</h2>
    <form onSubmit={handleOnSubmit} className="form" id="form1" method="post">
    <div>
       <label className="block text-sm text-gray-600" for="us">
       <p>FirstName<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
                                       
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
            placeholder="firstName"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>lastName<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
                                       
            required
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleOnChange}
            placeholder="firstName"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Email<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter Email Address"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Create Password<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
            required
            type={showPassword?"text":"password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Confirm Password<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
            required
            type={showConfirmPassword?"text":"password"}
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            placeholder="Enter Confirm Password"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Location<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
            required
            type={location?"text":"location"}
            name="location"
            value={location}
            onChange={handleOnChange}
            placeholder="Enter Location"
        />
       </label> 
    </div>

    <button>
        Create Button
    </button>

    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    );
  };


export default TSignupform