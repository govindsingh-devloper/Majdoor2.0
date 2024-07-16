const express = require('express');
const router = express.Router();
const {auth}=require("../middlewares/auth")    
//const { createOrder,Customerhistory ,CustomerOrder,MajdoorBookings,updateStatus,thekedarOrder} = require('../controllers/Booked');
const { createOrder,Customerhistory ,CustomerOrder,MajdoorBookings,ThekedarBookings,updateStatus,thekedarOrder,TCustomerhistory,TCustomerOrder,TupdateStatus} = require('../controllers/Booked');



router.post('/orders', createOrder);

//Customer History Routes
router.get("/CustomerBookings",Customerhistory);// ye all Booking k lyie h
router.post("/CustomerOrder",CustomerOrder)

//Majdoor Routes
router.post("/MajdoorBookings",MajdoorBookings)

router.put("/updateStatus",updateStatus)

//Thekedar Routes
router.post("/ThekedarBookings",ThekedarBookings)
router.get("/TCustomerBookings",TCustomerhistory);
router.post("/ThekedarOrder",thekedarOrder);//New Thehedaar Order
router.post("/TCustomerOrder",TCustomerOrder)
router.put("/TupdateStatus",TupdateStatus)

module.exports = router