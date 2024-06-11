const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getAllCustomers,
} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile",updateProfile)
router.get("/getUserDetails", auth, getAllCustomers)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)

module.exports = router