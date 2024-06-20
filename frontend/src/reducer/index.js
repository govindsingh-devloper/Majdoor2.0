import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../slices/authslice"
import profileReducer from "../slices/profileSlice"
import categoriesReducer from "../slices/categoriesslice"
import shippingInfoReducer from "../slices/shippingInfoslice"
import ordersReducer from "../services/operations/MajdoorAuthAPI"


const rootReducer=combineReducers({
     auth:authReducer,
     profile:profileReducer,
     categories:categoriesReducer,
     shippingInfoReducer:shippingInfoReducer,
     orders:ordersReducer
})

export default rootReducer;