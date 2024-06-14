const Majdoor=require("../models/Majdoor");
// const OTP=require("../models/OTP");
// const otpGenerator=require("otp-generator");
const bcrypt=require("bcrypt");
const Jwt=require("jsonwebtoken");
const Profile = require("../models/Profile");
const mailSender = require("../utilis/mailSender");
require("dotenv").config();


//signup

exports.signup=async(req,res)=>{
   try {
     //data fetch from req.body
     const{firstName,
           lastName,
           skills,
           contactNumber,
           thekedarID  
        }=req.body
     //validate kro
     if(!firstName || !lastName || !skills || !contactNumber){
         return res.status(403).json({
             success:false,
             message:"ALL fields are required",
         })
     }
 
     //check user already exist
     const existingUser=await Majdoor.findOne({contactNumber});
     if(existingUser){
         return res.status(400).json({
             success:false,
             message:"USer Already Existed",
         });
     }
    
     //hashPassword
 
     const hashedPassword=await bcrypt.hash(contactNumber,10);
     //entry in DB
     const profileDetails=await Profile.create({
         gender:null,
         dateOfBirth:null,
         about:null,
        //  contactNumber:null,
     })

     const user=await Majdoor.create({
         firstName,
         lastName,
         skills,
         contactNumber:hashedPassword,
         thekedarID,
         additionalDetails:profileDetails._id,
         image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
     })
     console.log(user)
     //return res
     return res.status(200).json({
        success:true,
        user,
        message:"Majdoor Registered Successfully",
    })
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"User cannot be registered .Please Try again",
    })
    
   }
};

//Login

exports.login=async(req,res)=>{
    try {
        //get data from req.body
        const{firstName,contactNumber}=req.body;
        //validation
        if(!firstName || !contactNumber){
            return res.status(403).json({
                success:false,
                message:"ALL fields are required,please try again",
            })
        }
        //check user exist or not
        const user=await Majdoor.findOne({firstName}).populate("additionalDetails");
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered,Please signup",
            });
        }
        //generate JWT, after passsword matching
        if(await bcrypt.compare(contactNumber,user.contactNumber)){
            const payload={
                firstName:user.firstName,
                id:user._id,
                // accountType:user.accountType,
            }
            const token=Jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user.token=token;
            user.contactNumber=undefined;
            
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
                message:"Contact is incorrect"
            })
            

        }
      
        
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success:false,
            message:"Login Failed. Please Try Again"
        })
        
    }
}

exports.getallServices=async(req,res)=>{
    try {
        // const {name}=req.body
        const {firstName}=req.body
        const {skills} =req.body;
        console.log(skills);
        const response=await Majdoor.find({skills},{ firstName: 1, skills: 1 });
        if(!response){
            return res.status(401).json({
                success:false,
                message:"No Related service was found"
            })
        }
        console.log(response)
        return res.status(200).json({
            success:true,
            data:response,
        })
    } catch (error) {
        return res.status(500).json({
            success:true,
            meaasge:error.meaasge,
        })
        
    }
}

exports.allCategories=async(req,res)=>{
    try {
        const allservices=await Majdoor.find({},{
            firstName:true,
            lastName:true,
            skills:true

        }
            
        )
        if(!allservices){
            return res.status(401).json({
                success:false,
                message:"No services was found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Data Fetched Successfully",
            allservices
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}

exports.singleService=async(req,res)=>{
    try {
        const {id}=req.params;
        const singleService=await Majdoor.findById({_id:id});
        if(!singleService){
            return res.status(401).json({
                success:false,
                message:"Service Not Found"
            })
        }

        console.log("Selected Majdoor",singleService);
        return res.status(200).json({
            success:true,
            message:"Your Selected Service is Here",
            data:singleService
        })
    } catch (error) {
        return res.status(200).json({
            success:false,
            message:error.message,
        })
        
    }
}
