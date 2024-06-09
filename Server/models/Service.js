const mongoose=require("mongoose");


const serviceSchema=new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Majdoor"
    },
    description:{
        type:String,
    },
    ratingAndReviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReviews",
    },
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    },
      createdAt: { type: Date, default: Date.now },
      
    BookedService:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Customer",
    }

})

module.exports=mongoose.model("Service",serviceSchema)