import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {
    const {loading}=useSelector((state)=>state.auth);
    const[email,setEmail]=useState("");
    const[emailSent,setEmailSent]=useState(false);
    const dispatch=useDispatch();

    const handleonSubmit=(e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent))

    }
  return (
    <div>

        {
            loading ? (
                <div>Loading.....</div>
            ):(
                <div>
                   <h1> {
                    !emailSent ? "Reset your Password" : "Check Your Email"
                   }</h1>

                   <p>
                    {

                        !emailSent ? "Have no fear. Well email you instructions to reset your password. If u dont have access to you account we can try account recovery"
                                       :`We have sent ema1${email}`
                    }
                   </p>

                   <form onSubmit={handleonSubmit}>
                    {
                        !emailSent && (
                            <label>
                                <p>Email Address <sup>*</sup></p>
                                <input
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder='Enter ur email'
                                />
                            </label>
                        )
                    }

                    <button>
                        {
                            !emailSent ? "Reset Password":"Resend Email"
                        }
                    </button>
                   </form>
                   <Link to='/login'>
                    <p>Back to login</p>
                   </Link>
                </div>
            )
        }
    </div>
  )
}

export default ForgotPassword