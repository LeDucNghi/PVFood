import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    shippingInfo: null,
    shoppingInfo: null,
    promoCodes: null,
    loading: false,
    isSuccess: false,
    note: "",
    info: null,
  },
  reducers: {
    postShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },

    postShoppingInfo: (state, action) => {
      state.shoppingInfo = action.payload;
    },

    postPromoCodes: (state, action) => {
      console.log(
        "🚀 ~ file: checkoutSlice.js ~ line 23 ~  action.payload",
        action.payload
      );
      state.promoCodes = action.payload;
    },

    postNewBill: (state) => {
      state.loading = true;
    },

    postNewBillSuccess: (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.info = action.payload;
    },

    postNote: (state, action) => {
      state.note = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  postShippingInfo,
  postNewBill,
  postNewBillSuccess,
  postShoppingInfo,
  postPromoCodes,
  postNote,
} = checkoutSlice.actions;

export const selectShippingInfo = (state) => state.checkout.shippingInfo;
export const selectIsLoading = (state) => state.checkout.loading;
export const selectIsSuccess = (state) => state.checkout.isSuccess;
export const selectShoppingInfo = (state) => state.checkout.shoppingInfo;
export const selectPromoCodes = (state) => state.checkout.promoCodes;
export const selectNote = (state) => state.checkout.note;
export const selectInfo = (state) => state.checkout.info;

export const checkoutReducer = checkoutSlice.reducer;
