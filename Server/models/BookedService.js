// const mongoose=require("mongoose");
// // const { resetPasswordToken } = require("../controllers/ResetPassword");


// const bookedServiceSchema= new mongoose.Schema({
//     email:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     firstName:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     address:{
//         type:String,
//         required:true,
//     },
//     city:{
//         type:String,
//         required:true,
//     },
//     state:{
//         type:String,
//         required:true,
//     },
//     country:{
//         type:String,
//         required:true,
//     },
//     street:{
//         type:String,
//         required:true,
//     },
//     pincode:{
//         type:Number,
//         required:true,
//     },
//     phoneNumber:{
//         type:Number,
//         required:true,
//     },
//  user:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"Customer",
//  },
// //  service:[{
// //         type:mongoose.Schema.Types.ObjectId,
// //         ref:"Majdoor2",
// //         // required:true
// //     },],



//  orderInfo:{
//     id:{
//         type:String,
//     }
//  },
//  bookedAt:{
//     type:Date,
//  },
//  orderStatus:{
//     type:String,
//     enum: ['Processing', 'Accepted', 'Rejected'],
//     default:"Proceesing"
//  },
//  deliveredAt:Date,
//  createdAt:{
//     type:Date,
//     default:Date.now,
//  }
// });


// module.exports=mongoose.model("BookedService",bookedServiceSchema);


const mongoose = require('mongoose');

const bookedServiceSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  street: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('BookedService', bookedServiceSchema);
