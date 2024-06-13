const express=require("express")
const router=express.Router();

const{
    login,
    signup,
    sendOTP,
    changePassword
}=require("../controllers/Auth");

const{
    resetPasswordToken,
      resetPassword
    }=require("../controllers/ResetPassword");

// const {auth}=require("../middlewares/auth")    
// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/thekedar-login", login)

// Route for user signup
router.post("/thekedar-signup", signup)

// Route for sending OTP to the user's email
router.post("/t-sendotp", sendOTP)

// Route for Changing the password
// router.post("/t-changepassword", auth, changePassword)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
router.post("/t-reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/t-reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router