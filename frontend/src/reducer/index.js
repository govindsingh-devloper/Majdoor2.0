import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../slices/authslice"
import profileReducer from "../slices/profileSlice"


const rootReducer=combineReducers({
     auth:authReducer,
     profile:profileReducer
})

export default rootReducer;