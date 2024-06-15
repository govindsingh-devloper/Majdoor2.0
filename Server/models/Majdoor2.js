const mongoose=require("mongoose");

const majdoor2Schema= new mongoose.Schema({
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
    // password:{
    //     type:String,
    //     required:true,
    //     trim:true,
    //     minLength:[10,"Contact number should be atleast 10 digits"],
    //     maxLength:[10,"Contact number should be 10 digits"],
    // },
    location:{
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

module.exports=mongoose.model("Majddor2",majdoor2Schema);