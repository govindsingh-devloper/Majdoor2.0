const Customer=require("../models/Customer");
const OTP=require("../models/OTP");
const otpGenerator=require("otp-generator");
const bcrypt=require("bcrypt");
const Jwt=require("jsonwebtoken");
const Profile = require("../models/Profile");
const mailSender = require("../utilis/mailSender");
require("dotenv").config();





//send OTP

exports.sendOTP=async(req,res)=>{
    try {
        //fetch email from req body
        const{email}=req.body;
        //check User already exist or not
        const checkUserPresent=await Customer.findOne({email});
        //If user already exist then send response
        if(checkUserPresent){
            return res.status(401).json({
                success:false,
                message:"User already exist"
            })
        }

        //genearte OTP
        var otp=otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        console.log("OTP Generated:",otp)
        //check unique otp
        const result=await OTP.findOne({otp:otp});

        while(result){
            opt=otpGenerator(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,

            });
            result=await OTP.findOne({otp:otp});
        }

      //create this otp entry in DB
      const otpPayload={email,otp};
      const otpBody=await OTP.create(otpPayload);
      console.log(otpBody)

      //return response successfully
      res.status(200).json({
        success:true,
        message:"OTP sent Successfully",
        otp,
      })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:true,
            message:error.message,
        })
        
    }
};

//signup

exports.signup=async(req,res)=>{
   try {
     //data fetch from req.body
     const{firstName,
           lastName,
          email,
          password,
          confirmPassword,
          accountType,
          otp }=req.body
     //validate kro
     if(!firstName || !lastName || !password || !confirmPassword || !otp){
         return res.status(403).json({
             success:false,
             message:"ALL fields are required",
         })
     }
     //2 password match krlo
     if(password!==confirmPassword){
         return res.status(400).json({
             success:false,
             message:"Password and ConfirmPassword Value does not match, please try again",
         })
 
     }
     //check user already exist
     const existingUser=await Customer.findOne({email});
     if(existingUser){
         return res.status(400).json({
             success:false,
             message:"USer Already Existed",
         });
     }
     //find most recent otp
     const recentOtp=await OTP.find({email}).sort({createdAt:-1}).limit(1);
     console.log(recentOtp)
     //validate otp
     if(recentOtp.length==0){
         //OTP not found
         return res.status(400).json({
             success:false,
             message:"OTP Notfound",
         })
     }
     else if(otp!==recentOtp[0].otp){
         //Inavlid OTP
         return res.status(400).json({
             success:false,
             message:"Inavlid OTP",
         })
 
     }
     //hashPassword
 
     const hashedPassword=await bcrypt.hash(password,10);
     //entry in DB
     const profileDetails=await Profile.create({
         gender:null,
         dateOfBirth:null,
         about:null,
         contactNumber:null,
     })
     const user=await Customer.create({
         firstName,
         lastName,
         email,
         password:hashedPassword,
         accountType,
         addtionalDetails:profileDetails._id,
         image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
     })
     //return res
     return res.status(200).json({
        success:true,
        user,
        message:"Cutomer Registered Successfully",
    })
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"USer cannot be registered .Please Try again",
    })
    
   }
};

//Login

exports.login=async(req,res)=>{
    try {
        //get data from req.body
        const{email,password}=req.body;
        //validation
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"ALL fields are required,please try again",
            })
        }
        //check user exist or not
        const user=await Customer.findOne({email}).populate("addtionalDetails");
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered,Please signup",
            });
        }
        //generate JWT, after passsword matching
        if(await bcrypt.compare(password,user.password)){
            const payload={
                email:user.email,
                id:user._id,
                accountType:user.accountType,
            }
            const token=Jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user.token=token;
            user.password=undefined;
            
            //Cookie
            const options={
                expires:new Date(Date.now()+3*34*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User Logged In Successfully"
            })

        }
        else{
            return res.status(401).json({
                success:false,
                message:"Password is incorrect"
            })
            

        }
      
        
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success:false,
            message:"Login Failure Please Try Again"
        })
        
    }
}

//ChangePassword

exports.changePassword=async(req,res)=>{
   try {
     //get data from req body
     const userDetails=await Customer.findById(req.user.id);
     //get oldPassword , newPassword, confirmPassword
     const{oldPassword,newPassword,confirmPassword}=req.body;
     //validate kro oldpasssword
     const isPasswordMatch=await bcrypt.compare(oldPassword,userDetails.password);
     if(!isPasswordMatch){
         //if old password doesnot match return 401 unauthorized requiest
         return res.status(401).json({
             success:false,
             message:"Password is Incorrect"
         })
     }
     //Match new Password and Confirm Passowrd
     if(newPassword!==confirmPassword){
         return res.status(401).json({
             success:false,
             message:"Old Password and New Password doesnot match"
         })
     }
     //update Password
     const encryptedPassword=await bcrypt.hash(newPassword,10);
     const updatedUserDetails=await Customer.findByIdAndUpdate(req.user.id,
                                                            {password:encryptedPassword},
                                                            {new:true},
     )
     //Mail Send Password Updated
     try {
         const mailResponse=await mailSender(
             updatedUserDetails.email,
             passwordUpdated(
                 updatedUserDetails.email,
                 `Password Updated Succesfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
 
             )
         )
         console.log("email sent Successfully",mailResponse)
     } catch (error) {
         //If there an error sending mail return response
         console.log("Error occured while UPoadting Password",error);
         return res.status(500).json({
             success:false,
             message:"Error Occured while Sending Mail",
             error:error.message
         })
         
     }
     return res.status(200).json({
        success:true,
        message:"Password Changed Successfully"
     })
     //return response
   } catch (error) {
    //if there and error updating Password ,log the error and return 500(Internal Server Error) error
    console.log("Error Occured while UPdating the Password",error);
    return res.status(500).json({
        status:false,
        message:"Error Occured while Updating Password",
        error:error.message,
    })
    
   }

}