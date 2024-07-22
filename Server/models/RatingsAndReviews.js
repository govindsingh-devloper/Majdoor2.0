const mongoose=require("mongoose");


const ratingAndReviewsSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer",
    },
    rating:{
        type:Number,
        required:true,
    },
    review:{
        type:String,
        required:true,
        trim:true,
    },
    majdoorName: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Majddor2",
		index: true,
	},
});

module.exports=mongoose.model("RatingAndReviews",ratingAndReviewsSchema)