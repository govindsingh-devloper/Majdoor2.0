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
    password:{
        type:Number,
        required:true,
    },
    addtionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    contactNumber:{
        type:String,
        trim:true,
    },
    image:{
        type:String,
        // required:true,
    }
});
module.exports=mongoose.model("Majdoor",majdoorSchema);