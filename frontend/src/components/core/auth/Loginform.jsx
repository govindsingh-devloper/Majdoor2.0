import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../services/operations/authAPI';

const Loginform = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const[formData,setFormData]=useState({
        email:"",
        password:""
    })

    const[showPassword,setShowPassword]=useState(false);
    const{email,password}=formData

    const handleOnChange=(e)=>{
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(email,password,navigate))
    }
  return (
    <form onSubmit={handleOnSubmit}>
    <label>
        <p>Email Address</p>
        <input
            required
            type='text'
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder='Enter Email Address'
        />
    </label>
    <label>
        <p>Password</p>
        <input
            required
            type={showPassword?"text":"password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder='Enter Password'
            
        />
        <Link to="/forgotPassword">
            <p>forgot Password</p>
        </Link>
    </label>

    <button>
        Login
    </button>

    </form>
  )
}

export default Loginform