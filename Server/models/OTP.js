const mongoose=require("mongoose");
const mailSender = require("../utilis/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");


const OTPSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    }
});

//a function:Its intent is to sendEmail
async function sendVerficationEmail(email,otp){
    try {
        const mailResponse=await mailSender(email,"verficationEmail from Majdoor",emailTemplate(otp));
        console.log("Email Sent Successfully",mailResponse);
        
    } catch (error) {
        console.log("error ocuured during sending Mail",error);
        throw(error);
        
    }
}

OTPSchema.pre("save",async function(next){
    await sendVerficationEmail(this.email,this.otp);
    next();
})






module.exports=mongoose.model("OTP",OTPSchema);
// const OTP = mongoose.model("OTP", OTPSchema);

// module.exports = OTP;