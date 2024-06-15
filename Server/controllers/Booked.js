const BookedService=require("../models/BookedService");
const Customer=require("../models/Customer")
const Majdoor=require("../models/Majdoor")


exports.neworder=async(req,res)=>{
    try {
        const{shippingInfo,service}=req.body
        const userid=req.user.id;
        console.log(userid)
        console.log(shippingInfo)
        if(!shippingInfo){
            return res.status(403).json({
                success: false,
                message: "Shipping Info required.",
            });
        }

        const order=await BookedService.create({
            shippingInfo,
            service,
            user:userid,
            // orderInfo,


        })

        if(!order){
            return res.status(401).json({
                success:false,
                message:"No order Created"
            })
        }

        return res.status(200).json({
            sucess:true,
            message:"Order Created SuccessFully",
            order
        })
        
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            message:"Order Not Created SuccessFully",
            error:error.message
        })
        
    }
}

exports.singleorder=async(req,res)=>{
    try {
        const id=req.params.id;
        const order=await BookedService.findById(id).populate("user", "name email").
                                                    populate({
                                                    path: 'service.orderedservice',
                                                    model: 'Majdoor',
                                                    // select: 'skills' // Specify the fields you want to fetch from Majdoor model
        });

        if(!order){
            return res.status(401).json({
                success:false,
                message:"No odered Found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Data Fetched Successfully",
            order
        })
    } catch (error) {
        return res.status(200).json({
            success:false,
            message:"Data Not Found",
            error:error.message
        })
        
    }
}