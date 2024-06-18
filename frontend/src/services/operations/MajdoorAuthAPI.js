import { toast } from "react-hot-toast"
import { setUser } from "../../slices/profileSlice"
import { setLoading, setToken } from "../../slices/authslice"
import { apiConnector } from "../apiconnector"
import { ORDER_ENDPOINT, endpoints } from "../api"
import { SearchEndpoint } from "../api"
import { setCategories} from "../../slices/categoriesslice"
import { setShippingInfo } from "../../slices/shippingInfoslice"
import { useNavigate } from "react-router-dom"


import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


import { setLocations } from "../../slices/categoriesslice";
const BASE_URL=process.env.REACT_APP_BASE_URL






const {
//   SENDOTP_API,
  SIGNUP_API_M,
  LOGIN_API_M,
//   RESETPASSTOKEN_API,
//   RESETPASSWORD_API,
} = endpoints


const {ALL_CATEGORIES,
  SINGLE_SERVICE
}=SearchEndpoint


const{ORDER_API}=ORDER_ENDPOINT




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
  export const getSingleService = async (id) => {
    // const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector("GET", `${BASE_URL}/auth/searchMajdoor/${id}`)
      console.log("Single Service..........", response)
 
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data
    } catch (error) {
      console.log("SingleService API............", error)
      result = error.response.data
      // toast.error(error.response.data.message);
    }
    // toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
  }


  //orders API
  export const getorders = (token, orderData, navigate) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
  
  
      const {data} = await apiConnector('POST', ORDER_API, orderData, config);
  
  
      console.log(data);
      toast.success("Your Request has been sent to Majdoor. Please wait for confirmation.");
        navigate('/CustomerHome');
      dispatch(orderCreated(data));
      toast.success(data.message);
    } catch (error) {
      console.error('Error creating order:', error.message);
      toast.error('Failed to create order. Please try again later.');
    }
  };
  
  
  const orderSlice = createSlice({
    name: 'order',
    initialState: {
      orders: [],
      loading: false,
      error: null,
    },
    reducers: {
      orderCreated: (state, action) => {
        state.orders.push(action.payload.order);
      },
    },
  });
  
  
  export const { orderCreated } = orderSlice.actions;
  export default orderSlice.reducer;
  

///////////////////////////////////////////////
export function getLocations() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", SearchEndpoint.ALL_LOCATIONS, {});
      console.log("Location Response....", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setLocations(response.data.allLocations)); // Adjust according to your API response structure
    } catch (error) {
      console.log("GET LOCATIONS API ERROR............", error);
      toast.error("No Related Locations Found");
    }
    dispatch(setLoading(false));
  };
}


///////////////////////////////////////////////////////HISTORY API/////////////////////////////////




