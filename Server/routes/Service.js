const express=require("express");
const router=express.Router();

const { auth, isCustomer,isAdmin } = require("../middlewares/auth")

// Course Controllers Import
const {
    createService,
    showAllServices,
    getServiceDetails,
  } = require("../controllers/Service")
  
  
  // Categories Controllers Import
  const {
    showAllCategories,
    createCategory,
    categoryPageDetails,
  } = require("../controllers/Category")

// ********************************************************************************************************
//                                      Service routes
// ********************************************************************************************************
  router.post("/createService", auth, isAdmin, createService);
  router.get("/getAllServices", showAllServices)
// Get Details for a Specific Courses
  //router.post("/getServiceDetails", getServiceDetails)

// ********************************************************************************************************
//                                      Category routes
// ********************************************************************************************************

router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategories)
router.post("/getCategoryPageDetails", categoryPageDetails)


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
// router.post("/createRating", auth, isCustomer, createRating)
// router.get("/getAverageRating", getAverageRating)
// router.get("/getReviews", getAllRating)

module.exports = router
