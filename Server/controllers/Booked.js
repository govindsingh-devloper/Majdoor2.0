const BookedService=require("../models/BookedService");
const Customer=require("../models/Customer")
const Majdoor2=require("../models/Majdoor2")


exports.neworder=async(req,res)=>{
    try {
        const{address,city,street,state,pincode,phoneNumber,country,service,email,firstName}=req.body
        // const userid=req.user.id;
        console.log(userid)
        console.log('Request Body:', req.body); // Log request body
        // console.log(shippingInfo)
        if (!address || !city || !street || !state || !pincode || !phoneNumber || !country || !service || !email || !firstName ||!user) {
            return res.status(403).json({
                success: false,
                message: " ALL fields are required.",
                error:error.message
            });
        }
    //      // Fetch Majdoor details based on serviceId
    //      const serviceId=req.body;
    // const selectedMajdoor = await Majdoor2.findById({serviceId:_id});

    // if (!selectedMajdoor) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Majdoor not found."
    //   });
    // }

        const order=await BookedService.create({
            address,city,street,state,pincode,phoneNumber,country,email,firstName,
            service,
            user,
            orderStatus:'Processing'


        })

        if(!order){
            return res.status(401).json({
                success:false,
                message:"No order Created"
            })
        }
        console.log('Created Order:', order); // Log created order
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
                                                    model: 'Majdoor2',
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

exports.allorder=async(req,res)=>{
    try {
        const bookings = await BookedService.find().sort({ createdAt: -1 });
        if(!bookings){
            return res.status(403).json({
                success:false,
                messsgae:"No current Booking"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Your Booking Details Here",
            data:bookings
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cant find Booking",
            error:error.message
        })
        
    }
}



// PUT /api/bookedServices/:orderId/updateStatus
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    // Validate status
    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status is required.',
      });
    }

    // Update order status
    const updatedOrder = await BookedService.findByIdAndUpdate(
      orderId,
      { orderStatus: status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: 'Order not found.',
      });
    }

    // Return success response with the updated order
    return res.status(200).json({
      success: true,
      message: 'Order status updated successfully.',
      order: updatedOrder,
    });
  } catch (error) {
    console.error('Error updating order status:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update order status.',
      error: error.message,
    });
  }
};
