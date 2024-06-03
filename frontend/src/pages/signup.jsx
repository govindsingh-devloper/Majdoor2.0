import React from 'react'
import Template from '../components/core/auth/Template'

const Signup = () => {
  return (
    <>
    <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-lg">
                <div className="leading-loose">
                    <div id="form-main">
                        <div id="form-div" className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                            <h2 className="sign">Login Here</h2>
                            
                            <form className="form" id="form1" method="post">
                                <div className="mt-2">
                                    <label className="block text-sm text-gray-600" for="us">Name</label>
                                    <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" name="us" type="text"
                                        /*className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"*/ placeholder="Name"
                                        id="name" />
                                </div>
                                <div className="mt-2">
                                    <label className="block text-sm text-gray-600" for="pass">Password</label>
                                    <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" name="pass" type="password"
                                        /*className="validate[required,custom[email]] feedback-input"*/ id="email" placeholder="Password" />
                                </div>
                                <div className="mt-4 submit">
                                    <input type="submit" value="Login" id="button-blue"
                                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" />
                                    <div className="ease"></div>
                                </div>
                            </form>
    
                            <p className="for"><a href="/forgot">Forgot Password</a></p>
                            
                            <a href="/register">
                                <p className="cre"><button className="btn btn-info">Create Account</button></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Signup