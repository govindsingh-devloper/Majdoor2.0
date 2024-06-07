const mongoose=require("mongoose");

const thekedarSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    // skills:{
    //     type:String,
    //     required:true,
    //     trim:true,
    // },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:Number,
        required:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    contactNumber:{
        type:String,
        // required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        required:true,
    },
    resetPasswordExpires:{
        type:Date,
    }
    
});
module.exports=mongoose.model("Thekedar",thekedarSchema);