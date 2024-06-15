const mongoose=require("mongoose");
// const { resetPasswordToken } = require("../controllers/ResetPassword");


const bookedServiceSchema= new mongoose.Schema({
   shippingInfo:{
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    street:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
   },
 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer",
 },
 service:[{
    orderedservice:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Majdoor",
        required:true
    }
}

],
 orderInfo:{
    id:{
        type:String,
    }
 },
 bookedAt:{
    type:Date,
 },
 orderStatus:{
    type:String,
    default:"Proceesing"
 },
 deliveredAt:Date,
 createdAt:{
    type:Date,
    default:Date.now,
 }
});


module.exports=mongoose.model("BookedService",bookedServiceSchema);