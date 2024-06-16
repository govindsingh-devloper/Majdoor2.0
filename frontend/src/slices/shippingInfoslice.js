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
        setShippingInfo(state, value) {
            state.shippingInfo = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setShippingInfo, setLoading} = shippingInfoslice.actions;
export default shippingInfoslice.reducer;