import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authslice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Signupform = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        lastName:"",
        firstName:"",
        password:"",
        email:"",
        confirmPassword:""
    })

    const [showPassword,setshowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword]=useState(false)
    const{firstName,lastName,email,password,confirmPassword }=formData
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
    dispatch(sendOtp(formData.email, navigate))
     // Reset
     setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
}
    return (
    <form onSubmit={handleOnSubmit}>
    <div>
       <label>
       <p>FirstName<sup>*</sup></p>
        <input
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
            placeholder="firstName"
        />
       </label>
       {/* <label>
       <p>LastName<sup>*</sup></p>
        <input
            required
            type="text"
            name="lasttName"
            value={lastName}
            onChange={handleOnChange}
            placeholder="lastName"
        />
       </label> */}
       <label>
       <p>Email<sup>*</sup></p>
        <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
        />
       </label>
       <label>
       <p>Create Password<sup>*</sup></p>
        <input
            required
            type={showPassword?"text":"password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter password"
        />
       </label>
       <label>
       <p>Create Password<sup>*</sup></p>
        <input
            required
            type={showConfirmPassword?"text":"password"}
            name="password"
            value={confirmPassword}
            onChange={handleOnChange}
            placeholder="Enter confirm Passsword"
        />
       </label>

    </div>

    <button>
        Create Button
    </button>

    </form>
  )
}

export default Signupform