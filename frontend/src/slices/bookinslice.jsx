import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    acceptBooking: (state, action) => {
      const { bookingId } = action.payload;
      const bookingIndex = state.bookings.findIndex(booking => booking.id === bookingId);
      if (bookingIndex !== -1) {
        state.bookings[bookingIndex].status = "accepted";
      }
    },
    rejectBooking: (state, action) => {
      const { bookingId } = action.payload;
      const bookingIndex = state.bookings.findIndex(booking => booking.id === bookingId);
      if (bookingIndex !== -1) {
        state.bookings[bookingIndex].status = "rejected";
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addBooking, acceptBooking, rejectBooking, setLoading, setError } = bookingSlice.actions;
export default bookingSlice.reducer;
