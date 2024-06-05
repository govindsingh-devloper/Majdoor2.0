import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import "../css/style.css";
import { login } from '../services/operations/MajdoorAuthAPI'; 

const LoginFormMajdoor = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const[formData,setFormData]=useState({
        firstName:"",
        contactNumber:""
    })

    const[showPassword,setShowPassword]=useState(false);
    const{firstName,contactNumber}=formData

    const handleOnChange=(e)=>{
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(firstName,contactNumber,navigate))
    }

    return (
        <div id="form-main">
            <div id="form-div">
                <h2 className="sign">Login Here</h2>
                <form className="form" id="form1" onSubmit={handleOnSubmit}>
                    <p className="name">
                        <input
                            name="firstName"
                            type="text"
                            className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                            placeholder="Name"
                            id="name"
                            value={firstName}
                            onChange={handleOnChange}
                        />
                    </p>
                    <p className="contact">
                        <input
                            name="contactNumber"
                            type="password"
                            className="validate[required,custom[email]] feedback-input"
                            id="contact"
                            placeholder="Contact"
                            value={contactNumber}
                            onChange={handleOnChange}
                        />
                    </p>
                    <div className="submit">
                        <input type="submit" value="Login" id="button-blue" />
                        <div className="ease"></div>
                    </div>
                </form>
                {/* <Link to="/forgotPassword">
                    <p>Forgot Password</p>
                </Link> */}
                <Link to="/majdoor-signup">
                    <p>Create Account</p>
                </Link>
            </div>
        </div>
    );
};

export default LoginFormMajdoor;
