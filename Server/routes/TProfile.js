const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getAllThekedars,
} = require("../controllers/TProfile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile",auth,updateProfile)
router.get("/getUserDetails", auth, getAllThekedars)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)

module.exports = router