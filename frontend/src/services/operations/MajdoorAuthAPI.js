import { toast } from "react-hot-toast"
import { setUser } from "../../slices/profileSlice"
import { setLoading, setToken } from "../../slices/authslice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../api"
import { SearchEndpoint } from "../api"
import { setCategories} from "../../slices/categoriesslice"



const {
//   SENDOTP_API,
  SIGNUP_API_M,
  LOGIN_API_M,
//   RESETPASSTOKEN_API,
//   RESETPASSWORD_API,
} = endpoints

const {ALL_CATEGORIES}=SearchEndpoint


export function login(firstName, contactNumber, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API_M, {
            firstName,
          contactNumber,
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
        navigate("/MajdoorDashboard")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function signUp(
    firstName,
    lastName,
    skills,
    contactNumber,
    thekedarId,
    preferredLocation,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SIGNUP_API_M, {
          firstName,
          lastName,
          skills,
          contactNumber,
          thekedarId,
          preferredLocation,
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Signup Successful")
        navigate("/majdoor-login")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/majdoor-signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }


  export function getCategories(){
    return async (dispatch)=>{
      dispatch(setLoading(true))
      try {
        const response=await apiConnector("GET",ALL_CATEGORIES,{

        })
        console.log("Search Response....",response)
        if(!response){
          throw new Error(response.data.message)
       
        }
      dispatch(setCategories(response.data.allservices))
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("No Related Skills Found")
        // navigate("/majdoor-signup")
      }
      dispatch(setLoading(false));
    }

  }

