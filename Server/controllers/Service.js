const Service=require("../models/Service");
const Customer=require("../models/Customer");
const Category=require("../models/Category");
const Majdoor=require("../models/Majdoor");
const {uploadImageToCloudinary}=require("../utilis/imageUploader")



//createService

exports.createService=async(req,res)=>{
    try {
        //agr service create ho rhi h to loggedIn honge hm, to id k lyie ,,req.user=decode kra tha na
        //fetch data

        const{name,description,price,status,category}=req.body
        //get thumbnail
        const thumbnail=req.files.thumbnailImage

        //validation
        if(!name || !description || !price || !thumbnail){
            return res.status(400).json({
                success:false,
                message:"All fields are manadatory",
            });
        }

        if(!status || status===undefined){
            status=="Draft"
        }


        //check for admin, but why hm to middleware mei already check kr chuke h
        const userId=req.user.id;
        const adminDetails=await Customer.findById(userId,{
            accountType:"admin"
        });
        console.log("AdminDetails",adminDetails);


        if(!adminDetails){
            return res.status(404).json({
                success:false,
                message:"Admin not Found",
            });

        }
        const categoryDetails = await Category.findById(category)
        if (!categoryDetails) {
          return res.status(404).json({
            success: false,
            message: "Category Details Not Found",
          })
        }

        //Upload Image To Cloudinary
        const thumbnailImage=await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);


        //create an entry for new Service
        const newService=await Service.create({
            name,
            description,
            admin:adminDetails._id,
            price,
            caategory:categoryDetails._id,
            thumbnail:thumbnailImage.secure_url,
        })

        //add the new service in Admin Schema
        await Customer.findByIdAndUpdate(
            {_id:adminDetails._id},
            {
                $push:{
                    service:newService._id,
                }
            },
            {new:true},
        )

        //Add the new service to the Categopries
        const categoryDeatils2=await Category.findByIdAndUpdate(
            {_id:category},
            {
                $push:{
                    services:newService._id
                }
            },
            {new :true},
        )
        console.log("service Details",categoryDeatils2)
        //return response
        return res.status(200).json({
            success:true,
            message:"Service Created Successfully",
            data:newService,
        });

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Failed to create service",
            error:error.message,
        });

        
    }
};


//show all services

exports.showAllServices=async(req,res)=>{
    try {
        const allServices=await Service.find({},{name:true,
                                                 price:true,
                                                 thumbnail:true,
                                                 ratingAndReviews:true,
                                                 BookedService:true,
                                                 
                                                 })
                                                 .populate("Admin")
                                                 .exec();
        return res.status(200).json({
        success:true,
        message:"Data for all Service Fetched Successfuly",
        data:allServices,
        });                                                                             
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Cannot fetch service data",
            error:error.message,
        });
        
    }
}

exports.singleservice=async(req,res)=>{
    try {
        const service=await Service.find({_id:serviceId}).populate("Majdoor").exec();
        console.log(service);
        return res.status(200).json({
            success:true,
            message:"Service Fetched Succesfully",
            data:service,
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Service Not Fetched Succesfully",
            error:error.message,
        })
    }
}