const jwt=require("jsonwebtoken");
require("dotenv").config();
const Customer=require("../models/Customer");

exports.auth=async(req,res,next)=>{
    try {
        //extract token
        const token=req.cookies.token
                    || req.body.token
                    || req.header("Authorization").replace("Bearer ","");

       //if token missing return res
       if(!token){
       return res.status(401).json({
        success:false,
        message:"Token is missing"
    }) 
}
    //verify Token
    try {
        const decode= jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode);
        req.user=decode;
        
    } catch (error) {
        //verfication Issue
        return res.status(401).json({
            success:false,
            message:"Token is Invalid"
        })
        
    }
    next();

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Something Went Wrong while validating the token",
        });

        
    }

}


//isCustomer
exports.isCustomer=async(req,res)=>{
    try {
        if(req.user.accountType!=="Customer"){
            return res.status(401).json({
                success:false,
                message:"This is a Protected Route for Customer Only"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
        
    }

}

//IsThekedar
exports.isThekedar=async(req,res)=>{
    try {
        if(req.user.accountType!=="Thekedar"){
            return res.status(401).json({
                success:false,
                message:"This is a Protected Route for Thekedar Only"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
        
    }

}

//IsAdmin
exports.isAdmin=async(req,res)=>{
    try {
        if(req.user.accountType!=="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a Protected Route for Admin Only"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
        
    }

}