const Category=require("../models/Category");

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

exports.createCategory=async(req,res)=>{
    try {
        const{name,description}=req.bodyl
        if(!name){
            return res.status(400).json({
                success:false,
                message:"All fields Are Required",
            });

        }
        const categoryDeatils=Category.create({
            name,
            description,
        });
        console.log(categoryDeatils);
        return res.status(200).json({
            success:true,
            message:"Category Created Successfully",
        });
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        });
        
    }
};

//Show All Categories
exports.showAllCategories = async (req, res) => {
	try {
        console.log("INSIDE SHOW ALL CATEGORIES");
		const allCategorys = await Category.find({});
		res.status(200).json({
			success: true,
			data: allCategorys,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};


//Category Page Details
exports.categoryPageDetails = async (req, res) => {
    try {
      const { categoryId } = req.body
  
      // Get services for the specified category
      const selectedCategory = await Category.findById(categoryId)
        .populate( "services"
        )
        .exec()
  
      console.log("SELECTED Service", selectedCategory)
      // Handle the case when the category is not found
      if (!selectedCategory) {
        console.log("Category not found.")
        return res
          .status(404)
          .json({ success: false, message: "Category not found" })
      }
      // Handle the case when there are no Service
      if (selectedCategory.courses.length === 0) {
        console.log("No service found for the selected category.")
        return res.status(404).json({
          success: false,
          message: "No services found for the selected category.",
        })
      }
  
      // Get services for other categories
      const categoriesExceptSelected = await Category.find({
        _id: { $ne: categoryId },
      })
      let differentCategory = await Category.findOne(
        categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
          ._id
      )
        .populate({
          path: "servicves",
          match: { status: "Published" },
        })
        .exec()
      console.log()
      // Get top-selling services across all categories
      const allCategories = await Category.find()
        .populate({
          path: "services",
          match: { status: "Published" },
        })
        .exec()
      const allservices = allCategories.flatMap((category) => category.services)
      const mostSellingServices = allservices
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 10)
  
      res.status(200).json({
        success: true,
        data: {
          selectedCategory,
          differentCategory,
          mostSellingServices,
        },
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }