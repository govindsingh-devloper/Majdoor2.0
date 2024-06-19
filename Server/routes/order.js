const express = require('express');
const router = express.Router();
const {auth}=require("../middlewares/auth")    
const { createOrder,Customerhistory ,CustomerOrder,MajdoorBookings,updateStatus} = require('../controllers/Booked');



router.post('/orders', createOrder);

//Customer History Routes
router.get("/CustomerBookings",Customerhistory);// ye all Booking k lyie h
router.post("/CustomerOrder",CustomerOrder)
router.post("/MajdoorBookings",MajdoorBookings)
router.put("/updateStatus",updateStatus)


module.exports = router