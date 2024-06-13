import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories: [],
  loading: false,

}

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
  },
})

export const {
  setCategories,
  setLoading
  
} = categoriesslice.actions

export default categoriesslice.reducer