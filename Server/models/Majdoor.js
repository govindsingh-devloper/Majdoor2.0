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
    // phoneNumber:{
    //     type:String,
    //     required:true,
    //     trim:true,
        
    // }
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:[10,"Contact number should be atleast 10 digits"],
        maxLength:[10,"Contact number should be 10 digits"],
    },
    preferredLocation:{
        type:String,
        trim:true,
        required:true,
    },
    thekedarID:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Thekedar', 
        // required: true,
        trim:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    image:{
        type:String,
        // required:true,
    },
    token:{
        type:String,
    },
});

const Majdoor = mongoose.model("Majdoor",majdoorSchema);

module.exports = { Majdoor };