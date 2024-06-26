import React, { useState } from 'react'
import toast from 'react-hot-toast'
// import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authslice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import  { signUp } from '../../../services/operations/MajdoorAuthAPI'


const Signupformm = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        lastName:"",
        firstName:"",
        skills:"",
        contactNumber:"",
        thekedarId:"",
        location:"",
        // navigate,
    })

    const [showPassword,setshowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword]=useState(false)
    const{firstName,lastName,skills,contactNumber,thekedarId,location }=formData
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

    // if (password !== confirmPassword) {
    //   toast.error("Passwords Do Not Match")
    //   return
    // }
    const signupData = {
      ...formData,
    //   accountType,
    }
    console.log(signupData)
    dispatch(signUp(signupData));
      // firstName,
      // lastName,
      // skills,
      // contactNumber,
      // thekedarId,
      // location,
      // navigate
    //))
     // Setting signup data to state
    // To be used after otp verification
    // dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    // dispatch(sendOtp(formData.email, navigate))
     // Reset
     setFormData({
        firstName: "",
        lastName: "",
        skills:"",
        contactNumber:"",
        thekedarId:"",
        location:"",
      })
      toast.success("Sign In Successfully")
};
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
       <p>First Name<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
                                       
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
            placeholder="Enter First Name"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Last Name<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
                                       
            required
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleOnChange}
            placeholder="Enter Last Name"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Skills<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
            required
            type="text"
            name="skills"
            value={skills}
            onChange={handleOnChange}
            placeholder="Enter type of skill"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Contact Number<sup>*</sup></p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
            required
            type={contactNumber?"text":"contactNumber"}
            name="contactNumber"
            value={contactNumber}
            maxLength={10}
            onChange={handleOnChange}
            placeholder="Enter Contact Number"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Thekadar ID</p>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" 
            // required
            type={thekedarId?"text":"thekedarId"}
            name="thekedarId"
            value={thekedarId}
            onChange={handleOnChange}
            placeholder="Enter Thekedar ID if any"
        />
       </label>
       <label className="block text-sm text-gray-600" for="us">
       <p>Location</p>
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
        Sign Up
    </button>

    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signupformm