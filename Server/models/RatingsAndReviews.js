const mongoose=require("mongoose");


exports.ratingAndreviewsSchema=new mongoose.Schema({
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer",
    },
    rating:{
        type:Number,
        required:true,
    },
    reviews:{
        type:String,
        required:true,
        trim:true,
    }
});

module.exports=mongoose.model("RatingAndReviews",ratingAndreviewsSchema)