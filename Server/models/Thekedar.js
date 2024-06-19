const mongoose = require('mongoose');

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
    location:{
        type:String,
        trim:true,
        required:true,
    },
    majdoors: [{                               
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Majddor2' 
    }], 
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

module.exports = mongoose.model('Thekedar', thekedarSchema);
