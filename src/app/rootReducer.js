import { accountReducer } from "features/account/accountSlice";
import { authReducer } from "features/auth/authSlice";
import { cartReducer } from "features/cart/cartSlice";
import { checkoutReducer } from "features/checkout/checkoutSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "features/products/productSlice";
import { trackingReducer } from "features/tracking/trackingSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  product: productReducer,
  account: accountReducer,
  tracking: trackingReducer,
});

export default rootReducer;
