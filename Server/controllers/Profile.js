const Profile=require("../models/Profile")
const Customer=require("../models/Customer");
//const { uploadImageToCloudinary } = require("../utilis/imageUploader");
const {uploadImageToCloudinary} =require("../utilis/imageUploader");

exports.updateProfile=async(req,res)=>{
    try {
        //agr mera user logged in hai ,remember maine auth wale
        //middleware k ander decode krte time req mei id send ki thi

        //get data
        const{firstName="",lastName="",dateOfBirtth="",about="",contactNumber,gender}=req.body
        //get UserID
        const id=req.user.id;
        console.log("id",id)
        // const id = req.user ? req.user.id : null; 
        //validation
        if(!contactNumber || !gender){
            return res.status(400).json({
                success:true,
                message:"All fields are required"
            })
        }
        //find Profile
        const userDetails=await Customer.findById({_id:id});
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        // console.log("User ki Details",userDetails)
        const profileId = userDetails.additionalDetails;
        console.log("Profile ID",profileId)
        if (!profileId) {
            return res.status(404).json({
                success: false,
                message: "Profile not found for this user"
            });
        }
        //First Name lastName
        const user = await Customer.findByIdAndUpdate(id, {
            firstName,
            lastName,
          })
          await user.save()
          //Profile Update

        const profileDetails = await Profile.findById(profileId);
        //Update Profile
        profileDetails.dateOfBirth=dateOfBirtth;
        profileDetails.about=about;
        profileDetails.contactNumber=contactNumber,
        profileDetails.gender=gender;
        await profileDetails.save();
        console.log(profileDetails)
        //return response

        const updatedUserDetails=await Customer.findById(id).populate("additionalDetails").exec();
        return res.status(200).json({
            success:true,
            message:"Profile Updated Successfully",
            updatedUserDetails,
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
        console.log("Printing ID", req.user.id);
        const id=req.user.id
        //validation
        const userDetails=await Customer.findById({_id: id});
        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
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
      // Check if file exists in request
      if (!req.files || !req.files.displayPicture) {
        return res.status(400).json({
          success: false,
          message: 'No file uploaded',
        });
      }
  
      const displayPicture = req.files.displayPicture;
      console.log("Display Picture",displayPicture)
      const userId = req.user.id;
      console.log("USerID",userId)
  
      // Validate userId
      if (!userId) {
        return res.status(400).json({
          success: false,
          message: 'User ID is missing',
        });
      }
  
      // Upload image to Cloudinary
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      );
  
      console.log("Yeh rhi IMage..............", image);
  
      // Check if image upload was successful
      if (!image || !image.secure_url) {
        throw new Error('Image upload failed');
      }
  
      // Update user profile with new image URL
      const updatedProfile = await Customer.findByIdAndUpdate(
        {_id:userId},
        { image: image.secure_url },
        { new: true }
      );
      console.log("Updated PRofile",updatedProfile)
  
      // Check if profile was updated
      if (!updatedProfile) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      res.send({
        success: true,
        message: 'Image updated successfully',
        data: updatedProfile,
      });
  
    } catch (error) {
      console.error('Error updating display picture:', error); // Log the error message
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
// exports.updateDisplayPicture = async (req, res) => {
//     try {
//       const displayPicture = req.files.displayPicture
//       const userId = req.user.id
//       const image = await uploadImageToCloudinary(
//         displayPicture,
//         process.env.FOLDER_NAME,
//         1000,
//         1000
//       )
//       console.log(image)
//       const updatedProfile = await User.findByIdAndUpdate(
//         { _id: userId },
//         { image: image.secure_url },
//         { new: true }
//       )
//       res.send({
//         success: true,
//         message: `Image Updated successfully`,
//         data: updatedProfile,
//       })
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: error.message,
//       })
//     }
// };