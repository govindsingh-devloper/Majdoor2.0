const Customer=require("../models/Customer");
const mailSender=require("../utilis/mailSender");
const bcrypt=require("bcryptjs");
const crypto=require("crypto");


//resettoken

exports.resetPasswordToken=async(req,res)=>{
    try {
        //get Email from req body
        const {email}=req.body;
        //Check user for this email, email validation
        const user=await Customer.findOne({email:email});
        if(!user){
            return res.json({
                success:true,
                message:"Your Email is not Registered with us"
            });
        }
        //generate Token
        const token=crypto.randomUUID();
        //update user by adding token and expiration time
        const updatedDetails=await Customer.findOne({email:email},
                                                    {
                                                        token:token,
                                                        resetPasswordExpires:Date.now()+5*60*1000,
                                                    },
                                                {new:true})
        //create url
        const url=`http://localhost:3000/update-password/${token}`
        //send mail containing the url
        await mailSender(email,
                         "Password Reset Link",
                         `Password Reset Link ${url}`);
        //return response
        return res.json({
            success:true,
            message:"Email Sent Successsfully, Please check"
        })
    } catch (error) { 
        console.log(error);
        return res.status(500).json({
            success:true,
            message:"Something Went Wrong while reset"
        })
        
    }

}


//ResetPassword

exports.resetPassword=async(req,res)=>{
    try {
        //data fetch
        const{password,confirmpassword,token}=req.body;
        //validation
        if(password!==confirmpassword){
            return res.json({
                success:false,
                message:"Password not Matching",
            })
        }
        //get user details from db using token
        const userDetails=await Customer.findOne({token:token})
        //if no entry exist,Invalid Token
        if(!userDetails){
            return res.json({
                success:false,
                message:"Token Invalid",
            })
        }
        //token time check
        if(userDetails.resetPasswordExpires < Date.now()){
            return res.json({
                success:false,
                message:"Token is Expires,Please regenerate your Token",
            })
    
        }
        //hash passsword
        const hashedPassword=await bcrypt.hash(password,10);
    
    
        //Upadte Password
        await Customer.findOneAndUpdate(
             {token:token},
             {password:hashedPassword},
             {new:true},
        )
        //return response
        return res.status(200).json({
            success:false,
            message:"Password reset Successful",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something Went Wrong while sending reset Password Mail",
        })
        
    }
}