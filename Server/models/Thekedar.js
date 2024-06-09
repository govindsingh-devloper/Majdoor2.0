const mongoose=require("mongoose");

const thekedarSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true, //It removes all leading and trailing white-spaces characters from the current string/
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
   
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
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