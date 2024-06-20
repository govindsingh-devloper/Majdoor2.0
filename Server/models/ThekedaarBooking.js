const mongoose = require('mongoose');


const thekedarbookingSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  street: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  status:{type:String,
    enum:["Pending","Booked"],
    default:"Pending"
  },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
  thekedar:{type:mongoose.Schema.Types.ObjectId,ref:'Thekedar'}
});


module.exports = mongoose.model('ThekedaarBooking', thekedarbookingSchema);