import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    filterTerm: "",
    message: "",

    productReviews: [],
    filterList: [],
    newProductList: [],
    productList: [],

    paginations: 0,

    loading: false,

    productDetail: null,
    searchTerm: null,

    params: {
      _page: 1,
      _limit: 8,
    },
  },
  reducers: {
    fetchingProduct: (state) => {
      state.loading = true;
    },

    fetchProductByIdSuccess: (state, action) => {
      state.loading = false;
      state.productDetail = action.payload;
    },

    fetchProductByFilter: (state, action) => {
      state.loading = false;
      state.filterList = action.payload.data;
      state.params = action.payload.pagination;
    },

    fetchNewProductListSuccess: (state, action) => {
      state.loading = false;
      // state.newProductList = action.payload.data;
      state.newProductList = action.payload;
    },

    fetchProductByIdFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    fetchProductListFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    fetchProductReviews: (state, action) => {
      state.loading = false;
      state.productReviews = action.payload;
    },

    fetchAllProduct: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },

    setParams: (state, action) => {
      state.params = action.payload;
      // console.log("🚀 ~ file: productSlice.js:82 ~ state.params", state.params);
    },

    setPagination: (state, action) => {
      state.paginations = action.payload;
    },

    setNewFilterName: (state, action) => {
      state.filterTerm = action.payload;
    },

    resetParams: (state) => {
      state.params = {
        _page: 1,
        _limit: 8,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchingProduct,
  postFilterKeyword,
  postSearchKeyword,
  setParams,
  setPagination,
  setNullFilterKeyword,
  setNullSearchKeyword,
  setNewFilterName,
  resetParams,
  // fetchProductByid,
  fetchProductByIdSuccess,
  fetchProductByFilter,
  fetchProductByIdFailed,
  fetchProductListFailed,
  fetchProductReviews,
  fetchAllProduct,
  fetchNewProductListSuccess,
} = productSlice.actions;

export const selectProductDetail = (state) => state.product.productDetail;
export const selectIsLoading = (state) => state.product.loading;
export const selectFilterList = (state) => state.product.filterList;
export const selectSearchKeyword = (state) => state.product.searchTerm;
export const selectFilterKeyword = (state) => state.product.filterTerm;
export const selectMessage = (state) => state.product.message;
export const selectParams = (state) => state.product.params;
export const selectPagination = (state) => state.product.paginations;
export const selectProductReviews = (state) => state.product.productReviews;
export const selectProductList = (state) => state.product.productList;
export const selectNewProductList = (state) => state.product.newProductList;

export const productReducer = productSlice.reducer;
