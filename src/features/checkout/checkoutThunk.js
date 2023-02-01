import { doc, setDoc, updateDoc } from "firebase/firestore";
import {
  postNewBill,
  postNewBillSuccess,
  postShippingInfo,
  postShoppingInfo,
} from "./checkoutSlice";

import Swal from "sweetalert2";
import { db } from "constants/firebase";
import { faker } from "@faker-js/faker";
import moment from "moment";

export const handleCheckPrice = () => (dispatch, getState) => {
  const listCart = getState().cart.list;
  const promoCodes = getState().checkout.promoCodes;
  const notes = getState().checkout.note;

  if (listCart) {
    const subtotalPrice = listCart.reduce((a, item) => {
      return a + item.qty * item.price;
    }, 0);
    const shipPrice = subtotalPrice > 100 ? 50 : listCart.length === 0 ? 0 : 20;
    const shoppingInfo = {
      subtotalPrice,
      shipPrice,
      promoCodes,
      notes,
    };

    if (!promoCodes) {
      const finalPrice = subtotalPrice + shipPrice;

      dispatch(
        postShoppingInfo({
          finalPrice,
          ...shoppingInfo,
        })
      );
    } else {
      const discountPrice =
        ((subtotalPrice + shipPrice) * promoCodes.ticketPercent) / 100;
      const totalPrice = subtotalPrice + shipPrice;
      const finalPrice = totalPrice - discountPrice;

      dispatch(
        postShoppingInfo({
          finalPrice,
          ...shoppingInfo,
        })
      );
    }
  }
};

export const handleCopyToClipboard = (number) => (dispatch, getState) => {
  navigator.clipboard.writeText(`${number}`);
  Swal.fire({
    icon: "success",
    title: "Coppied",
    showConfirmButton: false,
    timer: 1000,
  });
};

export const handleCheckInfo =
  (values, setValue, info) => (dispatch, getState) => {
    const listCart = getState().cart.list;
    const account = getState().account.accountDetail;
    const { promoCodes, subtotalPrice, finalPrice, note, shipPrice } = info;

    const value = {
      shoppingInfo: {
        items: listCart,
        promoCodes,
        subtotalPrice,
        finalPrice,
        shipPrice,
      },
      userInfo: {
        ...values,
        email: account ? account.data.email : values.email,
        note,
      },
    };

    setValue(`2`);

    dispatch(postShippingInfo(value));
  };

export const handleCheckout = (accountDetail) => async (dispatch, getState) => {
  const info = getState().checkout.shippingInfo;
  // const id = faker.datatype.uuid();

  const id = faker.database.mongodbObjectId();

  const body = {
    id: id,
    orderId: id,
    info: {
      ...info,
    },
    status: "Pending",
    billTime: moment().format("L"),
    createDate: moment(new Date()).format("LLLL"),
    sentDate: "",
    receivedDate: "",
    cancelledDate: "",
  };

  try {
    dispatch(postNewBill());

    await handleUpdateFirestore(accountDetail, body);

    await setDoc(doc(db, `orders`, `${id}`), {
      ...body,
    });

    // await localStorage.removeItem("cart");

    await Swal.fire({
      icon: "success",
      title: "Mua hàng thành công 🥳",
      showConfirmButton: false,
      timer: 1000,
    });

    await dispatch(
      postNewBillSuccess({
        ...body,
      })
    );
  } catch (error) {
    console.log(
      "🚀 ~ file: checkoutThunk.js ~ line 28 ~ handleCheckout ~ error",
      error.message
    );
  }
};

const handleUpdateFirestore = (accountDetail, body) => {
  const ordersRef = doc(
    db,
    "users",
    `${accountDetail ? accountDetail.data.email : body.info.userInfo.email}`
  );

  updateDoc(ordersRef, {
    cart: null,
  });

  // update orders list
  if (accountDetail && Array.isArray(accountDetail.orders) === true) {
    const newUserOrders = [{ ...body }, ...accountDetail.orders];

    updateDoc(ordersRef, {
      orders: newUserOrders,
    });
  } else if (accountDetail && Array.isArray(accountDetail.orders) === false) {
    const userOrders = [];

    const newUserOrders = [{ ...body }, ...userOrders];

    updateDoc(ordersRef, {
      orders: newUserOrders,
    });
  }

  // update address list
  if (accountDetail && Array.isArray(accountDetail.address) === true) {
    const newUserAddresses = [...accountDetail.address];

    const isExisted = newUserAddresses.some(
      (el) =>
        el.address === body.info.userInfo.address &&
        el.name === body.info.userInfo.fullName &&
        el.phone === body.info.userInfo.phone
    );

    const newList = [];

    if (!isExisted) {
      newUserAddresses.unshift({
        id: body.id,
        name: body.info.userInfo.fullName,
        address: body.info.userInfo.address,
        phone: body.info.userInfo.phone,
        default: true,
      });

      for (const object of newUserAddresses) {
        const newObject = { ...object };
        if (newObject.address !== body.info.userInfo.address) {
          newObject.default = false;
        }
        // else {
        //   newObject.default = true;
        // }
        newList.push(newObject);
      }
      updateDoc(ordersRef, {
        address: newList,
      });
    } else {
      for (const object of newUserAddresses) {
        const newObject = { ...object };

        if (newObject.address !== body.info.userInfo.address) {
          newObject.default = false;
        } else {
          newObject.default = true;
        }
        newList.push(newObject);
      }

      updateDoc(ordersRef, {
        address: newList,
      });
    }
  } else if (accountDetail && !Array.isArray(accountDetail.address)) {
    const userAddress = [];

    const newUserAddress = [
      {
        id: body.id,
        name: body.info.userInfo.fullName,
        address: body.info.userInfo.address,
        phone: body.info.userInfo.phone,
        default: true,
      },
      ...userAddress,
    ];

    updateDoc(ordersRef, {
      address: newUserAddress,
    });
  }
};
