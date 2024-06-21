const express = require('express');
const router = express.Router();
const {auth}=require("../middlewares/auth")    
<<<<<<< Updated upstream
const { createOrder,Customerhistory ,CustomerOrder,MajdoorBookings,updateStatus,thekedarOrder} = require('../controllers/Booked');
=======
const { createOrder,Customerhistory ,CustomerOrder,MajdoorBookings,ThekedarBookings,updateStatus} = require('../controllers/Booked');
>>>>>>> Stashed changes



router.post('/orders', createOrder);

//Customer History Routes
router.get("/CustomerBookings",Customerhistory);// ye all Booking k lyie h
router.post("/CustomerOrder",CustomerOrder)

//Majdoor Routes
router.post("/MajdoorBookings",MajdoorBookings)
router.post("/ThekedarBookings",ThekedarBookings)
router.put("/updateStatus",updateStatus)

<<<<<<< Updated upstream
//Thekedar Routes
router.post("/ThekedarOrder",thekedarOrder);




=======
>>>>>>> Stashed changes
module.exports = router