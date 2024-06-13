const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getAllMajdoors,
} = require("../controllers/MProfile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile",auth,updateProfile)
router.get("/getUserDetails", auth, getAllMajdoors)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)

module.exports = router