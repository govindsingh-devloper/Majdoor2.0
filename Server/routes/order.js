const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")

const {neworder,singleorder,allorder,updateOrderStatus}=require("../controllers/Booked")
// const { auth } = require("../middlewares/auth")

router.post("/order/new",auth,neworder)
router.get("/order/:id",auth,singleorder)
router.get("/order/booked",allorder)
router.put("/order/:orderId/updateStatus",updateOrderStatus)


module.exports = router;