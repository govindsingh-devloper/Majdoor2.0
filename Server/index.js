const dotenv=require("dotenv");
dotenv.config();

const express=require("express");
const app=express();
const cors = require("cors");




const userRoutes=require("./routes/User");
const profileRoutes=require("./routes/Profile");
const MProfileRoutes=require("./routes/MProfile");
const TProfileRoutes=require("./routes/TProfile");
const serviceRoutes=require("./routes/Service");
const thekedarRoutes=require("./routes/ThekedarRoutes");
const majdoorRoutes=require("./routes/MajdoorRoutes");
const contactUsRoute = require("./routes/Contact");
const orderRoutes=require("./routes/order")



const database=require("./config/database");
const cookieParser=require("cookie-parser");

app.use( 
	cors({
		origin:"https://majdoor2-0.onrender.com",
		credentials:true,
	})
)

const {cloudinaryConnect}=require("./config/cloudinary")
const fileupload=require("express-fileupload")




const PORT=process.env.PORT ||4000;


//database connect
database.connect()
//middlewares
app.use(express.json())
app.use(cookieParser());
// app.use({
//     origin:"http://localhost:300",
//     credentials:true,
// })

app.use(
       fileupload({
        useTempfiles:true,
        tempFileDir:"/tmp"
       })
)

//cloudinaryconnection
cloudinaryConnect();

//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/auth",profileRoutes);
app.use("/api/v1/auth",MProfileRoutes);
app.use("/api/v1/auth",TProfileRoutes);
app.use("/api/v1/auth",serviceRoutes);
app.use("/api/v1/auth",thekedarRoutes);
app.use("/api/v1/auth",majdoorRoutes);
app.use("/api/v1/reach",contactUsRoute);
app.use("/api/v1/auth",orderRoutes)




//default rouite
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your Server is up and runing"
    })
});

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})
