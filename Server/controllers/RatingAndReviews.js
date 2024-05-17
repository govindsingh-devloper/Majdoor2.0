const RatingAndReview=require("../models/RatingsAndReviews");
const Service=require("../models/Service");


//createRating

exports.createRating=async(req,res)=>{
  try {
      //user id
      const userId=req.user.id;
      //fetch Data from req body
      const{rating,review,serviceId}=req.body;
      //check if user is booked service or not
      const serviceDetails=await Service.findOne(
                                            {_id:userId},
                                            {serviceEnrolled:{$elementMatch:{$eq:userId}}}
      );
      if(!serviceDetails){
        return res.status(404).json({
            success:false,
            message:"User not book this service"
        })
      }
      //check if user already reviewed this service
      const alreadyReviewed= RatingAndReview.findOne({
                                               user:userId,
                                               service:serviceId
      });
      if(alreadyReviewed){
        return res.status(403).json({
            success:false,
            message:"Service is already by the user"
        })
      }
      //create rating and review
      const ratingReview=await RatingAndReview.create({
                                                 rating,review,
                                                 service:serviceId,
                                                 user:userId,
      })

      //update service with this rating/review
      const updatedServiceDetails=await Service.findByIdAndUpdate(serviceId,
                                      {
                                        $push:{
                                            ratingAndReviews:ratingReview._id
                                        }
                                      },
                                    {new:true});
      console.log(updatedServiceDetails);
    //return response
    return res.status(200).json({
        success:true,
        message:"Rating And Review created Successfully",
        ratingReview,
    })
  } catch (error) {
    console.log(error);
    return res.status(404).json({
        success:true,
        message:"Rating And Review Successfully",
        ratingReview
    })
    
  }

}


//get Average Rating

exports.getAverageRating=async(req,res)=>{
    try {
        //get ServiceId
        const serviveId=req.body.serviceId;
        //calculate avg rating
        const result=await RatingAndReview.aggrgate([
            {
                $match:{
                    service:new mongoose.Types.ObjectId(serviveId)
                },
            },
            {
                $group:{
                    _id:null,
                    averageRatings:{$avg:"$rating"}
                },
            },
        ])
        //return rating
        if(result.length>0){
            return res.status(200).json({
                success:false,
                averageRatings:result[0].averageRatings,
        
            })
        }
        //If not review exist
        return res.status(200).json({
            success:true,
            message:"Average Rating is 0,no ratings given till now",
            averageRatings:0,
        })
        
    } catch (error) {
        return res.status(404).json({
            success:false,
            message:"User not book this service"
        })
    }
}


//getALLRating

exports.getAllRating=async(res,res)=>{
    try {
        const allReviews=await RatingAndReview.find({},)
                                                .sort({rating:"desc"})
                                                .populate({
                                                    path:"Customer",
                                                    select:"firstName lastName email image"
                                                })
                                                .populate({
                                                    path:"course",
                                                    select:"ServiceName",

                                                })
                                                .exec();
                                                
                return res.status(404).json({
                         success:false,
                         message:"All reviews fetched successfully",
                         data:allReviews
                                                })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}