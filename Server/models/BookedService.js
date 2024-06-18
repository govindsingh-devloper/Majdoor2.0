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



