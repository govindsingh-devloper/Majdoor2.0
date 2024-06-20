const Majdoor2=require("../models/Majdoor2");
const Thekedar=require("../models/Thekedar");
// const OTP=require("../models/OTP");
// const otpGenerator=require("otp-generator");
const bcrypt=require("bcrypt");
const Jwt=require("jsonwebtoken");
const Profile = require("../models/Profile");
const mailSender = require("../utilis/mailSender");
require("dotenv").config();
const mongoose=require("mongoose");

//signup

exports.signup=async(req,res)=>{
   try {
     //data fetch from req.body
     const{firstName,
           lastName,
           skills,
           contactNumber,
           thekedarID,
           location  
        }=req.body
     //validate kro
     if(!firstName || !lastName || !skills || !contactNumber || !location){
         return res.status(403).json({
             success:false,
             message:"ALL fields are required",
         })
     }

     // Check if thekedarID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(thekedarID)) {
        return res.status(400).json({
          success: false,
          message: "Invalid Thekedar ID format",
        });
      }

     //check if thekedar exists
     const thekedar = await Thekedar.findById({_id:thekedarID});
     if(!thekedar){
        return res.status(400).json({
            success:false,
            message:"Thekedar ID does not match, please try again",
        })
    }

    //check if user already exists
    const existingUser=await Majdoor2.findOne({contactNumber});
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
    })
   
    // Create new majdoor
    const newMajdoor=await Majdoor2.create({
        firstName,
        lastName,
        skills,
        contactNumber: hashedPassword,
        thekedarID: thekedar._id,
        location,
        additionalDetails:profileDetails._id,
        image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
    })

    await newMajdoor.save();

    // Add majdoor to thekedar's list of majdoors
    if (!Array.isArray(thekedar.majdoors)) {
        thekedar.majdoors = [];
      }

    thekedar.majdoors.push(newMajdoor._id);
    await thekedar.save();
   
     console.log(newMajdoor)
     //return res
     return res.status(200).json({
        success:true,
        newMajdoor,
        message:"Majdoor Registered Successfully",
    })
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"User cannot be registered .Please Try again",
        error:error.message
    })
   };
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
        const user=await Majdoor2.findOne({firstName}).populate("additionalDetails");
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
        console.log(Majdoor2)
        const {name}=req.body
        // const {name}=req.body
        const {firstName}=req.body
        const {skills} =req.body;
        console.log(skills);
        const response=await Majdoor2.find({skills});
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
            success:false,
            messge:"No data found",
            error:error.message
        })
        
    }
}


exports.allCategories=async(req,res)=>{
    try {
        const allservices=await Majdoor2.find({},{
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
            data: allservices
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
        const singleService=await Majdoor2.findById({_id:id});
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
