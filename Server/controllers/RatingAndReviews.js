const Majdoor2 = require("../models/Majdoor2");
const RatingAndReview=require("../models/RatingsAndReviews");
const { mongo, default: mongoose } = require("mongoose");
// const Service=require("../models/Service");


//createRating
exports.createRating = async (req, res) => {
    try{

        //get user id
        const userId = req.user.id;
        //fetchdata from req body
        const {rating, review, majdoorId} = req.body;
        //check if user is enrolled or not
        // const courseDetails = await Course.findOne(
        //                             {_id:courseId,
        //                             studentsEnrolled: {$elemMatch: {$eq: userId} },
        //                         });

        // if(!courseDetails) {
        //     return res.status(404).json({
        //         success:false,
        //         message:'Student is not enrolled in the course',
        //     });
        // }
        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
                                                user:userId,
                                                majdoorName:majdoorId,
                                            });
        if(alreadyReviewed) {
                    return res.status(403).json({
                        success:false,
                        message:'Service is already reviewed by the user',
                    });
                }
        //create rating and review
        const ratingReview = await RatingAndReview.create({
                                        rating, review, 
                                        majdoorName:majdoorId,
                                        user:userId,
                                    });
       
        //update course with this rating/review
        const updatedCourseDetails = await Majdoor2.findByIdAndUpdate({_id:majdoorId},
                                    {
                                        $push: {
                                            ratingAndReviews: ratingReview._id,
                                        }
                                    },
                                    {new: true});
        console.log(updatedCourseDetails);
        //return response
        return res.status(200).json({
            success:true,
            message:"Rating and Review created Successfully",
            ratingReview,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
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

exports.getAllRating=async(req,res)=>{
    try {
        const allReviews=await RatingAndReview.find({},)
                                                .sort({rating:"desc"})
                                                .populate({
                                                    path:"Customer",
                                                    select:"firstName lastName email image"
                                                })
                                                .populate({
                                                    path:"Majddor2",
                                                    select:"Skills",

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