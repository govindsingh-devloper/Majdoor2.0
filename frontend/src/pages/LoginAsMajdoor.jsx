import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import "../css/style.css";
import { login } from '../services/operations/MajdoorAuthAPI'; 
import {useTranslation} from 'react-i18next';

const LoginFormMajdoor = () => {
    const { t }=useTranslation();
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
                <h2 className="sign">{t('l1')}</h2>
                <form className="form" id="form1" onSubmit={handleOnSubmit}>
                    <p className="name">
                        <input
                            name="firstName"
                            type="text"
                            className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                            placeholder={t('g')}
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
                            placeholder={t('g1')}
                            value={contactNumber}
                            onChange={handleOnChange}
                        />
                    </p>
                    <div className="submit">
                        <input type="submit" value={t('L')} id="button-blue" />
                        <div className="ease"></div>
                    </div>
                </form>
                {/* <Link to="/forgotPassword">
                    <p>Forgot Password</p>
                </Link> */}
                <Link to="/majdoor-signup">
                    <p>{t('g2')}</p>
                </Link>
            </div>
        </div>
    );
};

export default LoginFormMajdoor;
