import React from 'react'
import Template from '../components/core/auth/Template'

const Signup = () => {
  return (
    <>
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
            <div class="w-full max-w-lg">
                <div class="leading-loose">
                    <div id="form-main">
                        <div id="form-div" class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                            <h2 class="sign">Login Here</h2>
                            
                            <form class="form" id="form1" method="post">
                                <div class="mt-2">
                                    <label class="block text-sm text-gray-600" for="us">Name</label>
                                    <input class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" name="us" type="text"
                                        /*class="validate[required,custom[onlyLetter],length[0,100]] feedback-input"*/ placeholder="Name"
                                        id="name" />
                                </div>
                                <div class="mt-2">
                                    <label class="block text-sm text-gray-600" for="pass">Password</label>
                                    <input class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" name="pass" type="password"
                                        /*class="validate[required,custom[email]] feedback-input"*/ id="email" placeholder="Password" />
                                </div>
                                <div class="mt-4 submit">
                                    <input type="submit" value="Login" id="button-blue"
                                        class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" />
                                    <div class="ease"></div>
                                </div>
                            </form>
    
                            <p class="for"><a href="/forgot">Forgot Password</a></p>
                            
                            <a href="/register">
                                <p class="cre"><button class="btn btn-info">Create Account</button></p>
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