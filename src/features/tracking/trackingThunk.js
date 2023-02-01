import { collection, getDocs } from "firebase/firestore";
import {
  fetchOrderSearchResultSuccess,
  fetchOrderSuccess,
} from "./trackingSlice";

import { db } from "constants/firebase";

export const handleSearchOrders = (values) => async (dispatch, getState) => {
  const orderOptions = getState().tracking.orderOptions;

  // const { value, list, isLoggedIn } = values;

  const res = orderOptions.filter((el) => el.orderId.includes(values));

  dispatch(fetchOrderSearchResultSuccess(res));

  // if (isLoggedIn === true) {
  //   dispatch(fetchOrderListSuccess(res));
  // } else dispatch(fetchOrderSearchResultSuccess(res));

  // const orderOptions = getState().tracking.orderOptions;
  // const res = orderOptions.filter((el) => el.orderId.includes(values));

  // const res = orderOptions.find((obj) =>
  //   Object.values(obj).some((val) => val.includes(values))
  // );
};

export const fetchOrderOptions = () => async (dispatch, getState) => {
  const querySnapshot = await getDocs(collection(db, "orders"));
  var options = [];
  querySnapshot.forEach((doc) => {
    options.push(doc.data());
  });

  dispatch(fetchOrderSuccess(options));
};
