import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../slices/authslice"
import profileReducer from "../slices/profileSlice"
import categoriesReducer from "../slices/categoriesslice"
import shippingInfoReducer from "../slices/shippingInfoslice"
import ordersReducer from "../services/operations/MajdoorAuthAPI"
// import { orderCreated1 } from "../services/operations/MajdoorAuthAPI"
import thekerdarbooked from "../services/operations/MajdoorAuthAPI"


const rootReducer=combineReducers({
     auth:authReducer,
     profile:profileReducer,
     categories:categoriesReducer,
     shippingInfoReducer:shippingInfoReducer,
     order:ordersReducer,
     orders1:thekerdarbooked
})

export default rootReducer;