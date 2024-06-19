const Order = require('../models/BookedService');
const Customer=require('../models/Customer')
const Majdoor2=require("../models/Majdoor2")


exports.createOrder = async (req, res) => {
  try {
    const {
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber,
      street,
      email,
      firstName,
      service,
      user,
      status,
    } = req.body;


    const newOrder = new Order({
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber,
      street,
      email,
      firstName,
      service,
      user,
      status
    });


    await newOrder.save();
    res.status(201).json({ success: true, message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, message: 'Failed to create order', error });
  }
};

//My Bookings for Customer Side
exports.Customerhistory=async(req,res)=>{
  try {
    // const userid=req.body
    const history=await Order.find({}).populate({
      path:"user",
      select:"firstName lastName email "
  })
  .populate({
      path:"service",
      // model: 'Majdoor2',
      select:"skills firstName lastName",

  })
  .exec();
    if(!history){
      return res.status(403).json({
        success:false,
        message:"Customer Nor Found",
      })
    }
    console.log(history)
    return res.status(201).json({
      success:true,
      message:"ALL Details Fetched Success Fully",
      data:history,
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Internal Server Error",
      error:error.message
    })
    
  }
}

exports.CustomerOrder=async(req,res)=>{
  try {
    const {userid}=req.body;
    const response=await Order.find({user:userid}).populate({
      path:"service",
      select:"firstName lastName skills"
    })
    if(!response){
      return res.status(403).json({
        success:false,
        message:"No Customer Found"
      })
    }
    console.log(response)
    return res.status(200).json({
      success:true,
      message:"Data Fetched Successfully",
      data:response
    })
   
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"No Related Customer",
      error:error.message

    })
  }
}


//Majdoor Ki Bookings
exports.MajdoorBookings=async(req,res)=>{
  try {
    const {userid}=req.body;
    const response=await Order.find({service:userid}).populate({
      path:"user",
      select:"firstName lastName"
    })
    if(!response){
      return res.status(403).json({
        success:false,
        message:"No Majdoor Found"
      })
    }
    console.log(response)
    return res.status(200).json({
      success:true,
      message:"Data Fetched Successfully",
      data:response
    })
   
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"No Related Majdoor",
      error:error.message

    })
  }
}

exports.updateStatus=async(req,res)=>{
  try {
    const {orderid,status}=req.body;
    const updatedstatus=await Order.findByIdAndUpdate()

    
  } catch (error) {
    
  }
}
