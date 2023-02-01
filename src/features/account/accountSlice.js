import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    isFetchingAccount: false,
    isFetchingOrderDetail: false,
    isFetchingFilterList: false,

    orderDetail: null,
    accountDetail: null,
    status: null,

    filterList: [],
    orderList: [],
    addressList: [],
    notifications: [],
  },
  reducers: {
    fetchingAccount: (state, action) => {
      state.isFetchingAccount = true;
    },

    fetchingFilter: (state, action) => {
      state.isFetchingFilterList = true;
    },

    fetchingOrderDetail: (state, action) => {
      state.isFetchingOrderDetail = true;
    },

    fetchOrderDetailSuccess: (state, action) => {
      state.isFetchingOrderDetail = false;
      state.orderDetail = action.payload;
    },

    fetchOrderListSuccess: (state, action) => {
      // state.isfet = false;
      state.orderList = action.payload;
    },

    fetchFilterList: (state, action) => {
      state.isFetchingFilterList = false;
      state.filterList = action.payload;
    },

    fetchNotification: (state, action) => {
      // state.isFetchingFilterList = false;
      state.notifications = action.payload;
    },

    setAccountDetail: (state, action) => {
      state.isFetchingAccount = false;
      state.accountDetail = action.payload;
    },

    setNewStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchingOrderDetail,
  fetchingFilter,
  fetchOrderDetailSuccess,
  fetchOrderListSuccess,
  fetchingAccount,
  fetchFilterList,
  fetchNotification,

  setAccountDetail,
  setNewStatus,
  deleteOrders,
} = accountSlice.actions;

export const selectOrderDetail = (state) => state.account.orderDetail;

export const selectIsFetchingOrderDetail = (state) =>
  state.account.isFetchingOrderDetail;
export const selectAccountDetail = (state) => state.account.accountDetail;
export const selectIsFetching = (state) => state.account.isFetchingAccount;
export const selectStatus = (state) => state.account.status;
export const selectFilterList = (state) => state.account.filterList;
export const selectNotifications = (state) => state.account.notifications;
export const selectIsFetchingFilter = (state) =>
  state.account.isFetchingFilterList;

export const accountReducer = accountSlice.reducer;
