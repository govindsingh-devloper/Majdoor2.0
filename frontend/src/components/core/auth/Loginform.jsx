import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../services/operations/authAPI';
import {useTranslation} from 'react-i18next';
const Loginform = () => {
    const { t }=useTranslation();
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
    <div id="form-main">
        <div id="form-div">
            <h2 className="sign">{t('l1')}</h2>
            <form className="form" id="form1" onSubmit={handleOnSubmit}>           
                <p className="name">
                    <input
                        required
                        type='text'
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        className="validate[required,custom[email]] feedback-input"
                        placeholder='Enter Email Address'
                    />
                </p>
                <p className="contact">
                    <input
                        required
                        type={showPassword?"text":"password"}
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        className="validate[required,custom[email]] feedback-input"
                        placeholder='Enter Password'
                    />
                </p>
                <div className="submit">
                        <input type="submit" value="Login" id="button-blue" />
                        <div className="ease"></div>
                </div>
            </form>
                <Link to="/forgotPassword">
                    <p>Forgot Password</p>
                </Link>
                <Link to="/signup">
                    <p>Create Account</p> 
                </Link>

    {/* <button>
        Sign In
    </button> */}
        </div>
    </div>
  )
}

export default Loginform