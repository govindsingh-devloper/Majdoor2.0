import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories: [],
  locations:[],
  loading: false,

};

const categoriesslice= createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setLocations: (state, action) => {
      state.locations = action.payload;
    },
  },
})

export const {
  setCategories,
  setLoading,
  setLocations
  
} = categoriesslice.actions

export default categoriesslice.reducer