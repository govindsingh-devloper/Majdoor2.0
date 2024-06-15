const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")

const {neworder,singleorder}=require("../controllers/Booked")

router.post("/order/new",auth,neworder)
router.get("/order/:id",auth,singleorder)


module.exports = router;