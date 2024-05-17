const mongoose=require("mongoose");


const serviceSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer",
        required:true,
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
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",

    },
    status: {
        type: String,
        enum: ["Draft", "Published"],
      },
      createdAt: { type: Date, default: Date.now },
      
    BookedService:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Customer",
    }

})

module.exports=mongoose.model("Service",serviceSchema)