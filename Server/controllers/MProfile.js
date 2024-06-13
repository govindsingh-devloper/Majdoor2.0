const Profile=require("../models/Profile")
// const Customer=require("../models/Customer");
const { uploadImageToCloudinary } = require("../utilis/imageUploader");
const Majdoor = require("../models/Majdoor");


exports.updateProfile=async(req,res)=>{
    try {
        //agr mera user logged in hai ,remember maine auth wale
        //middleware k ander decode krte time req mei id send ki thi

        //get data
        const{dateOfBirtth="",about="",contactNumber,gender}=req.body
        //get UserID
        const id=req.user.id;
        // const id = req.user ? req.user.id : null; 
        //validation
        if(!contactNumber || !gender){
            return res.status(400).json({
                success:true,
                message:"All fields are required"
            })
        }
        //find Profile
        const userDetails=await Majdoor.findById(id);
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const profileId = userDetails.additionalDetails;
        if (!profileId) {
            return res.status(404).json({
                success: false,
                message: "Profile not found for this user"
            });
        }

        const profileDetails = await Profile.findById(profileId);
        //Update Profile
        profileDetails.dateOfBirth=dateOfBirtth;
        profileDetails.about=about;
        profileDetails.contactNumber=contactNumber,
        profileDetails.gender=gender;
        await profileDetails.save();
        console.log(profileDetails)
        //return response
        return res.status(200).json({
            success:true,
            message:"Profile Updated Successfully",
            profileDetails,
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message
        });
        
    }
}



exports.deleteAccount=async(req,res)=>{
    try {
        //get id
        const id=req.user.id
        //validation
        const userDetails=await Majdoor.findById(id)
        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
        //delete user
        await Majdoor.findByIdAndDelete({_id:id});
        //return response
        return res.status(200).json({
            success:true,
            message:"User Deleted Successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"USer Cannot Deleted",
            error:error.message
        })
        
    }
}


//ALL Thekedar Details

exports.getAllMajdoors=async(req,res)=>{
    try {
        //get id
        const id=req.user.id;
        //validation and get user Details
        const userDetails=await Majdoor.findById(id).populate("additionalDetails").exec();
        console.log(userDetails);
        //retrurn response
        return res.status(200).json({
            success:true,
            message:"User Detailed Fetched Successfully"
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await Majdoor.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};