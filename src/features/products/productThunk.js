import {
  addProduct,
  removeProduct,
  setFirebaseCart,
  updateQty,
} from "features/cart/cartSlice";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  fetchAllProduct,
  fetchNewProductListSuccess,
  fetchProductByFilter,
  fetchProductByIdFailed,
  fetchProductByIdSuccess,
  fetchProductReviews,
  fetchingProduct,
} from "./productSlice";

import Swal from "sweetalert2";
import axios from "axios";
import { db } from "constants/firebase";
import moment from "moment";
import queryString from "query-string";
import { rootApi } from "constants/rootApi";

export const fetchNewProductList = () => async (dispatch, getState) => {
  dispatch(fetchingProduct());
  try {
    const res = await axios.get(`${rootApi.new}`);

    dispatch(fetchNewProductListSuccess(res.data));
  } catch (error) {
    console.log(
      "🚀 ~ file: productThunk.js ~ line 57 ~ fetchNewProductList ~ error",
      error
    );
  }
};

export const fetchProductById = (id) => async (dispatch) => {
  dispatch(fetchingProduct());

  try {
    const res = await axios.get(`${rootApi.food}/${id}`);
    if (res && res.data) dispatch(fetchProductByIdSuccess(res.data));
  } catch (error) {
    console.log(
      "🚀 ~ file: productThunk.js ~ line 20 ~ fetchProductById ~ error",
      error.message
    );
    dispatch(fetchProductByIdFailed(error.message));
  }
};

// fetch product list by filter
export const handleFetchByFilter =
  (filterName) => async (dispatch, getState) => {
    const params = getState().product.params;

    const paramString = queryString.stringify(params);

    dispatch(fetchingProduct());

    try {
      const res = await axios.get(
        `${rootApi.food}?category=${filterName}&${paramString}`
      );
      console.log("🚀 ~ file: productThunk.js:106 ~ res", res);

      await dispatch(fetchProductByFilter(res.data));
    } catch (error) {
      console.log(
        "🚀 ~ file: productThunk.js:174 ~ handleFetchByFilter ~ error",
        error
      );
    }
  };

// fetch product list by search keyword
export const handleFetchAll = (searchKeyword) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${rootApi.food}`);

    await dispatch(fetchAllProduct(res.data));
  } catch (error) {
    console.log("🚀 ~ file: productThunk.js:158 ~ error", error);
  }
};

// fetch comment
export const handleFetchComment = (id) => async (dispatch, getState) => {
  try {
    // const res = await axios(`${rootApi.food}/${id}/reviews`);
    const docRef = doc(db, "products", `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      dispatch(fetchProductReviews(docSnap.data().comments));
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: Comment.jsx ~ line 16 ~ handleFetchComment ~ error",
      error
    );
  }
};

// post new comment
export const handlePostComment = (values, id) => async (dispatch, getState) => {
  const account = getState().account.accountDetail;
  const productReviews = getState().product.productReviews;

  if (account) {
    const today = new Date();
    const shipDate = new Date(`${account.orders[0].sentDate}`);

    const handleCalculateTimeBetween = today.getTime() - shipDate.getTime();

    const dateBetween = handleCalculateTimeBetween / (1000 * 3600 * 24);

    if (
      (account.orders[0].status === "Shipping" && dateBetween.toFixed(1) < 4) ||
      account.orders[0].status !== "Done"
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your recent order has not been completed that you cannot review this products!",
        // html: "If you have received order already, please confirm ",
        // showConfirmButton : false
      });
    } else {
      const body = {
        productId: id,
        experience: values.experience,
        avatarUrl: account.avatarUrl,
        name: account.name,
        rate: values.rate,
        comment: values.comment,
        createdAt: moment(new Date()).format("LLLL"),
      };
      try {
        var newReviewList;
        if (!productReviews) {
          newReviewList = [];

          await newReviewList.push(body);
        } else {
          newReviewList = await [...productReviews];

          await newReviewList.unshift(body);
        }
        const ordersRef = await doc(db, "products", `${id}`);

        await updateDoc(ordersRef, {
          comments: newReviewList,
        });

        dispatch(fetchProductReviews(newReviewList));
        // setSubmitting(false);

        await Swal.fire({
          icon: "success",
          title: "Rate successful🥳",
          showConfirmButton: false,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: Comment.jsx ~ line 16 ~ handleFetchComment ~ error",
          error
        );
      }
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You need to login to review this products!",
      // showConfirmButton : false
    });
  }
};

// add to cart
export const handleAddToCart = (item) => async (dispatch, getState) => {
  const listCart = getState().cart.list;

  try {
    const existedItem = listCart.find((x) => x.id === item.id);
    if (existedItem) {
      dispatch(updateQty(item));
      Swal.fire({
        icon: "success",
        title: "Add to cart successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Add to cart successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(addProduct(item));
    }
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// delete product from cart
export const handleDeleteProduct = (item) => (dispatch, getState) => {
  const listCart = getState().cart.list;

  const existedItem = listCart.find(
    (x) => x.category === item.category && x.id === item.id
  );
  if (existedItem) dispatch(removeProduct({ item }));
};

// get user'cart from fire store
export const getFirestoreCart =
  (accountDetail) => async (dispatch, getState) => {
    const localCart = getState().cart.list;

    if (accountDetail && accountDetail.cart) {
      dispatch(setFirebaseCart(accountDetail.cart));
      // localStorage.setItem("cart", accountDetail.cart);
    } else dispatch(setFirebaseCart(localCart));
  };

export const handleRatingChange = (
  event,
  newValue,
  setFieldValue,
  setValue
) => {
  setValue(newValue);
  setFieldValue("rate", newValue);
  switch (newValue) {
    case 1:
      setFieldValue("experience", "Very Bad");
      break;

    case 2:
      setFieldValue("experience", "Quite satisfied");
      break;

    case 3:
      setFieldValue("experience", "Satisfied");
      break;

    case 4:
      setFieldValue("experience", "Good");
      break;

    case 5:
      setFieldValue("experience", "Excellent");
      break;

    default:
      break;
  }
};
