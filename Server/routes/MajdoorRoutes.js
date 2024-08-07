const express=require("express")
const router=express.Router();

const{
    login,
    signup,
    allCategories,
    singleService
}=require("../controllers/MajdoorSignup");

const{
    resetPasswordToken,
      resetPassword
    }=require("../controllers/ResetPassword");

const {auth}=require("../middlewares/auth")    

const{createRating}=require("../controllers/RatingAndReviews")
// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/majdoor-login", login)

// Route for user signup
router.post("/majdoor-signup", signup)

// Route for sending OTP to the user's email
// router.post("/majdoor-sendotp", sendOTP)

// Route for Changing the password
// router.post("/m-changepassword", auth, changePassword)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
router.post("/m-reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/m-reset-password", resetPassword)
//Route For Services
router.get("/CustomerHome",allCategories)
router.get("/searchMajdoor/:id",singleService)



// ********************************************************************************************************
//                                      Rating ANd Reviews  routes
// ********************************************************************************************************

router.post("/rating",auth,createRating)

// Export the router for use in the main application
module.exports = router