import { createSlice } from "@reduxjs/toolkit";

const localCart = JSON.parse(localStorage.getItem("cart"));

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: localCart ? localCart : [],
    // list: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.list));
    },
    removeProduct: (state, action) => {
      let index = state.list.findIndex((item) => item.id === action.payload.id);

      state.list.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(state.list));
    },
    updateQty: (state, action) => {
      let index = state.list.findIndex((item) => item.id === action.payload.id);

      state.list[index].qty += 1;

      localStorage.setItem("cart", JSON.stringify(state.list));
    },
    decreaseQty: (state, action) => {
      let index = state.list.findIndex((item) => item.id === action.payload.id);

      state.list[index].qty -= 1;

      localStorage.setItem("cart", JSON.stringify(state.list));
    },
    setFirebaseCart: (state, action) => {
      state.list = action.payload;
      // localStorage.setItem("cart", JSON.stringify(state.list));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  removeProduct,
  updateQty,
  decreaseQty,
  setFirebaseCart,
} = cartSlice.actions;

export const selectListCart = (state) => state.cart.list;

export const cartReducer = cartSlice.reducer;
