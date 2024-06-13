const mongoose=require("mongoose");

const majdoorSchema= new mongoose.Schema({
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
    skills:{
        type:String,
        required:true,
        trim:true,
    },
    contactNumber:{
        type:String,
        required:true,
        trim:true,
    },
    preferredLocation:{
        type:String,
        trim:true,
    },
    thekedarID:{
        type:String,
        trim:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    // contactNumber:{
    //     type:String,
    //     trim:true,
    // },
    image:{
        type:String,
        // required:true,
    },
    token:{
        type:String,
    },
});
module.exports=mongoose.model("Majdoor",majdoorSchema);