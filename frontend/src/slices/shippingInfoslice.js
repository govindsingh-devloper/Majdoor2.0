import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    shippingInfo: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
};

const shippingInfoslice = createSlice({
    name:"shippingInfo",
    initialState: initialState,
    reducers: {
        setShippingInfo(state, value) {
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setShippingInfo, setLoading} = shippingInfoslice.actions;
export default shippingInfoslice.reducer;