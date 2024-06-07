// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { AiFillEye } from "react-icons/ai";
// import { AiFillEyeInvisible } from "react-icons/ai";
// import { Link, useLocation } from 'react-router-dom';
// import { resetPassword } from '../services/operations/authAPI';

// const UpdatePassword = () => {
//     const dispatch=useDispatch();
//     const location=useLocation();
//     const {loading}=useSelector((state)=>state.auth);
//     const[showpassword,setShowPassword]=useState(false);
//     const[showconfirmpassword,setShowConfirmPassword]=useState(false);
//     const[formData,setFormData]=useState({
//         password:"",
//         confirmPassword:"",
//     })
//     const HandleOnchange=(e)=>{
//         setFormData((prevData)=>(
//             {
//                 ...prevData,
//                 [e.target.name]:e.target.value,
//             }
//         ))
//     }

//     const {password,confirmPassword}=formData

//     const handleOnSubmit=(e)=>{
//         e.preventDefault();
//         const token =location.pathname.split('/').at(-1);
//         dispatch(resetPassword(password,confirmPassword,token))
//     }
    
//   return (
//     <div>
//         {
//             loading ? (
//                 <div>Laoding.....</div>
//             ):(
//                 <div>
//                     <h1>Choose new Password</h1>
//                     <p>Almost Done. Enter your new password and yours all set</p>
//                     <form onSubmit={handleOnSubmit}>
//                         <label>
//                             <p>Password<sup>*</sup></p>
//                             <input
//                                 required
//                                 type={showpassword ? 'text' :"password"}
//                                 name='password'
//                                 value={password}
//                                 onChange={HandleOnchange}
//                                 placeholder='Enter Password'
//                             />
//                             <span onClick={()=>setShowPassword((prev)=>!prev)}>
//                                 {
//                                     showpassword ? <AiFillEyeInvisible /> : <AiFillEye />
//                                 }
//                             </span>
//                         </label>
//                         <label>
//                             <p>Password<sup>*</sup></p>
//                             <input
//                                 required
//                                 type={showconfirmpassword ? 'text' :"password"}
//                                 name='confirmPassword'
//                                 value={confirmPassword}
//                                 onChange={HandleOnchange}
//                                 placeholder='Enter Confirm Password'
//                             />
//                              <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
//                                 {
//                                     showconfirmpassword ? <AiFillEyeInvisible /> : <AiFillEye />
//                                 }
//                             </span>
//                         </label>

//                         <button type='submit'>
//                             Reset Password
//                         </button>
//                     </form>
//                     <div>
//                         <Link to="/login">
//                             <p>Back To Login</p>
//                         </Link>
//                     </div>
//                 </div>
//             )
//         }
//     </div>
//   )
// }

// export default UpdatePassword


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';
import '../css/style.css'; // Import your CSS file

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { loading } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const { password, confirmPassword } = formData;

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token));
    };

    return (
        <div id="form-main">
            {loading ? (
                <div>Loading.....</div>
            ) : (
                <div id="form-div">
                    <h1 className="sign">Choose New Password</h1>
                    <p>Almost Done. Enter your new password and you're all set.</p>
                    <form onSubmit={handleOnSubmit}>
                        <label>
                            <p>Password<sup>*</sup></p>
                            <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Enter Password'
                                className="feedback-input"
                            />
                            <span onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </label>
                        <label>
                            <p>Confirm Password<sup>*</sup></p>
                            <input
                                required
                                type={showConfirmPassword ? 'text' : 'password'}
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder='Enter Confirm Password'
                                className="feedback-input"
                            />
                            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </label>

                        <button type='submit' id="button-blue">
                            Reset Password
                        </button>
                    </form>
                    <div className="for">
                        <Link to="/login">
                            <p>Back To Login</p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdatePassword;
