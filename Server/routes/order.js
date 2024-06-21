const express = require('express');
const router = express.Router();
const {auth}=require("../middlewares/auth")    
// const { createOrder,Customerhistory ,CustomerOrder,MajdoorBookings,updateStatus,thekedarOrder} = require('../controllers/Booked');
const { createOrder,Customerhistory ,CustomerOrder,MajdoorBookings,ThekedarBookings,updateStatus, thekedarOrder} = require('../controllers/Booked');



router.post('/orders', createOrder);

//Customer History Routes
router.get("/CustomerBookings",Customerhistory);// ye all Booking k lyie h
router.post("/CustomerOrder",CustomerOrder)

//Majdoor Routes
router.post("/MajdoorBookings",MajdoorBookings)
router.post("/ThekedarBookings",ThekedarBookings)
router.put("/updateStatus",updateStatus)

//Thekedar Routes
router.post("/ThekedarOrder",thekedarOrder);
module.exports = router