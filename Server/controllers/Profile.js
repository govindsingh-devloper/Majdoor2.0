const Profile=require("../models/Profile")
const Customer=require("../models/Customer");
const { uploadImageToCloudinary } = require("../utilis/imageUploader");


exports.updateProfile=async(req,res)=>{
    try {
        //agr mera user logged in hai ,remember maine auth wale
        //middleware k ander decode krte time req mei id send ki thi

        //get data
        const{dateOfbirtth="",about="",contactNumber,gender}=req.body
        //get UserID
        const id=req.user.id;
        //validation
        if(!contactNumber || !gender){
            return res.status(400).json({
                success:true,
                message:"All fields are required"
            })
        }
        //find Profile
        const userDetails=await Customer.findById(id);
        const profileId=userDetails.addtionalDetails;
        const profileDetails=await Profile.findById(profileId);
        //Update Profile
        profileDetails.dateofBirth=dateOfbirtth;
        profileDetails.about=about;
        profileDetails.contactNumber=contactNumber,
        profileDetails.gender=gender;
        await profileDetails.save();
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
        const userDetails=await Customer.findById(id)
        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.addtionalDetails});
        //delete user
        await Customer.findByIdAndDelete({_id:id});
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


//ALL Customer Details

exports.getAllCustomers=async(req,res)=>{
    try {
        //get id
        const id=req.user.id;
        //validation and get user Details
        const userDetails=await Customer.findById(id).populate("additionalDetails").exec();
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
      const updatedProfile = await Customer.findByIdAndUpdate(
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