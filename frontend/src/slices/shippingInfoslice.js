import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    shippingInfo: localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")) :  {
        address: '',
        country: '',
        state: '',
        phone: '',
        pincode: '',
        street: '',
        city: ''
      },
    loading: false,
};

const shippingInfoslice = createSlice({
    name:"shippingInfo",
    initialState: initialState,
    reducers: {
        setShippingInfo(state, action) {
            state.shippingInfo = action.payload;
            localStorage.setItem("shippingInfo", JSON.stringify(action.payload));

        },
        setLoading(state, action) {
            state.loading = action.payload;
          },
    },
});

export const {setShippingInfo, setLoading} = shippingInfoslice.actions;
export default shippingInfoslice.reducer;