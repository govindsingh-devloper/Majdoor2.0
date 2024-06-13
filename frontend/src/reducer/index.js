import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../slices/authslice"
import profileReducer from "../slices/profileSlice"
import categoriesReducer from "../slices/categoriesslice"


const rootReducer=combineReducers({
     auth:authReducer,
     profile:profileReducer,
     categories:categoriesReducer,
})

export default rootReducer;