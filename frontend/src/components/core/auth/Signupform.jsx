import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { sendOtp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authslice";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../../css/style.css';
import backgroundImage from "../../../images/SignUp.png"

const inputClasses = "block w-full text-gray-700 dark:text-black-300 border border-black-300 dark:border-black-600 rounded-lg p-2 mt-1";
const buttonClasses = "bg-black-600 hover:bg-blue-700 text-white dark:bg-yellow-700 dark:hover:bg-black-800 px-4 py-2 rounded-lg mt-4";
const labelClasses = "block text-black-700 dark:text-black-300 mb-2";
const containerClasses = "min-w-screen flex items-center justify-center bg-cover bg-center pt-20";
const formContainerClasses = "bg-white light:bg-black-800 shadow-md rounded-lg p-8 max-w-md w-full";

const Signupform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    password: "",
    email: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
    };
    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate));
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className={`${containerClasses}`} style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className={formContainerClasses}>
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label className={labelClasses}>First Name</label>
            <input
              type="text"
              name="firstName"
              className={inputClasses}
              value={firstName}
              onChange={handleOnChange}
              required
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Last Name</label>
            <input
              type="text"
              name="lastName"
              className={inputClasses}
              value={lastName}
              onChange={handleOnChange}
              required
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              name="email"
              className={inputClasses}
              value={email}
              onChange={handleOnChange}
              required
              placeholder="Enter Email Address"
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Create Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={inputClasses}
              value={password}
              onChange={handleOnChange}
              required
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <label className={labelClasses}>Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className={inputClasses}
              value={confirmPassword}
              onChange={handleOnChange}
              required
              placeholder="Enter Confirm Password"
            />
          </div>
          <div class="flex justify-between items-center">
        <button
          type="submit"
          class="bg-black text-white dark:bg-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-lg"
        >
          Register
        </button>
        <Link to="/login" class="text-zinc-700 dark:text-black-300"
          >Already have an account?
          <button
            class="bg-black text-white dark:bg-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-lg"
          >
            Login
          </button></Link>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Signupform;


