import { createSlice } from "@reduxjs/toolkit";

export const trackingSlice = createSlice({
  name: "tracking",
  initialState: {
    isLoading: false,
    orderOptions: [],
    orderDetail: null,
    orderSearchResults: [],
  },
  reducers: {
    fetchingOrders: (state, action) => {
      state.isLoading = true;
    },

    fetchOrderSuccess: (state, action) => {
      state.isLoading = false;
      // state.orderOptions.push(action.payload);
      state.orderOptions = action.payload;
    },

    fetchOrderSearchResultSuccess: (state, action) => {
      state.isLoading = false;
      // state.orderOptions.push(action.payload);
      state.orderSearchResults = action.payload;
    },

    fetchOrderDetailSuccess: (state, action) => {
      state.isLoading = false;
      // state.orderOptions.push(action.payload);
      state.orderDetail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchOrderSuccess,
  fetchingOrders,
  fetchOrderSearchResultSuccess,
  fetchOrderDetailSuccess,
} = trackingSlice.actions;

export const selectOrderOptions = (state) => state.tracking.orderOptions;
export const selectOrderSearchResult = (state) =>
  state.tracking.orderSearchResults;
export const selectOrderDetail = (state) => state.tracking.orderDetail;

export const trackingReducer = trackingSlice.reducer;
