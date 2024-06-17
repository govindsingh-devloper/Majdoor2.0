import { toast } from "react-hot-toast"
import { setUser } from "../../slices/profileSlice"
import { setLoading, setToken } from "../../slices/authslice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../api"


const {
  SENDOTP_API_T,
  SIGNUP_API_T,
  LOGIN_API_T,
  RESETPASSTOKEN_API_T,
  RESETPASSWORD_API_T,
} = endpoints


export function Tlogin(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API_T, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.image
          ? response.data.user.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        dispatch(setUser({ ...response.data.user, image: userImage }))
        
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/ThekedarDashboard")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function TsendOtp(email, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SENDOTP_API_T, {
          email,
          checkUserPresent: true,
        })
        console.log("SENDOTP API RESPONSE............", response)
  
        console.log(response.data.success)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("OTP Sent Successfully")
        navigate("/Tverify-email")
      } catch (error) {
        console.log("SENDOTP API ERROR............", error)
        toast.error("Could Not Send OTP")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
  export function TsignUp(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SIGNUP_API_T, {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          otp,
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Signup Successful")
        navigate("/thekedar-login")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/thekedar-signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function getPasswordResetToken(email,setEmailSent){
    return async(dispatch)=>{
      dispatch(setLoading(true));
      try {
        
      const response=await apiConnector("POST",RESETPASSTOKEN_API_T,{email})
      console.log("Reset Password Token Response.....",response)

      if(!response.data.success){
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent")
      setEmailSent(true);
      } catch (error) {
        console.log("Reset Password Token Error");
        toast.error("Failed to sent email for reseting password")
      }
      dispatch(setLoading(false));
    }
  }

  export function resetPassword(password,confirmPassword,token){
    return async(dispatch)=>{
      dispatch(setLoading(true));
      try {
        const response=await apiConnector("POST",RESETPASSWORD_API_T,{password,confirmPassword,token})
        console.log("Reset Password Respons",response)

        if(!response.data.success){
          throw new Error(response.data.message)
        }
        toast.success("Password has been reset successfully");
        
      } catch (error) {

        console.log("Reset Password Error",error);
        toast.error("Unable to reset password");
        
      }
      dispatch(setLoading(false));
    }
  }

  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      // dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }