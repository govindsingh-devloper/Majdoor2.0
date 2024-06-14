const mongoose = require('mongoose');

// // Connection URL
// const url = 'mongodb://localhost:27017/yourDatabaseName';

// // Connect to MongoDB
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected successfully to MongoDB');
//     })
//     .catch(err => {
//         console.error('Connection error', err);
//     });


// Define the schema for thekedar

const thekedarSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true, 
        trim:true, 
    },
    lastName: { 
        type: String, 
        required: true, 
        trim:true, 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        trim:true, 
    },
    password: { 
        type: String, 
        required: true, 
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    // contactNumber:{
    //     type:String,
    //     required:true,
    //     trim:true,
    // },
    image:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        //required:true,
    },
    resetPasswordExpires:{
        type:Date,
    }

});

const Thekedar = mongoose.model('Thekedar', thekedarSchema);

module.exports = { Thekedar };
