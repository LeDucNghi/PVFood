import { db, storage } from "constants/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  fetchNotification,
  fetchOrderDetailSuccess,
  fetchingAccount,
  fetchingOrderDetail,
  setAccountDetail,
} from "./accountSlice";
import { getAuth, updatePassword } from "firebase/auth";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import Swal from "sweetalert2";
import moment from "moment";

export const fetchOrderDetail = (id) => async (dispatch, getState) => {
  dispatch(fetchingOrderDetail());
  const docRef = doc(db, "orders", `${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    dispatch(fetchOrderDetailSuccess(docSnap.data()));
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const fetchAccount = (email) => async (dispatch, getState) => {
  const ordersRef = await doc(db, "users", `${email}`);
  const docSnap = await getDoc(ordersRef);
  dispatch(fetchingAccount());

  if (docSnap.exists()) {
    await dispatch(setAccountDetail(docSnap.data()));
  } else {
    // doc.data() will be undefined in this case
    console.log("Does not have any users");
  }
};

export const fetchNotifications = (email) => async (dispatch, getState) => {
  const ordersRef = doc(db, "notifications", `${email}`);
  const docSnap = await getDoc(ordersRef);
  dispatch(fetchingAccount());

  if (docSnap.exists()) {
    // console.log("notifications:", docSnap.data());

    const newList = [];
    newList.push(docSnap.data());
    dispatch(fetchNotification(newList));
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const handleConfirmReceived =
  (id, status) => async (dispatch, getState) => {
    const accountDetail = getState().account.accountDetail;

    if (accountDetail) {
      const newAccountOrders = [...accountDetail.orders];

      const index = newAccountOrders.findIndex((el) => el.orderId === id);

      const ordersAllRef = doc(db, "orders", `${id}`);
      const ordersUserRef = doc(db, "users", `${accountDetail.data.email}`);

      if (status === "Cancelled") {
        await Swal.fire({
          title: "Do you want to cancel this invoice?",
          // showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Cancel this invoice for me🤧",
          // denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            const newOrderAtIndex = {
              ...newAccountOrders[index],
              status: status,
              cancelledDate: moment(new Date()).format("LLLL"),
            };

            newAccountOrders[index] = newOrderAtIndex;

            updateDoc(ordersAllRef, {
              status: status,
              cancelledDate: moment(new Date()).format("LLLL"),
            });

            Swal.fire("Cancelled!", "", "success");
          }
        });
      } else {
        const newOrderAtIndex = {
          ...newAccountOrders[index],
          status: status,
          receivedDate: moment(new Date()).format("LLLL"),
        };

        newAccountOrders[index] = newOrderAtIndex;

        await updateDoc(ordersAllRef, {
          status: status,
          receivedDate: moment(new Date()).format("LLLL"),
        });
      }

      console.log(
        "🚀 ~ file: accountThunk.js:113 ~ newAccountOrders[index]",
        newAccountOrders[index]
      );
      await updateDoc(ordersUserRef, {
        orders: newAccountOrders,
      });

      // await dispatch(setNewStatus(status));
    } else {
      const ordersRef = doc(db, "orders", `${id}`);

      await updateDoc(ordersRef, {
        status: status,
        receivedDate: moment(new Date()).format("LLLL"),
      });
    }
  };

export const handleUpdateProfile = (values) => async (dispatch, getState) => {
  const ordersRef = doc(db, "users", `${values.email}`);
  try {
    if (!values.avatarUrl) {
      await updateDoc(ordersRef, {
        [`data.displayName`]: values.name,
        [`data.email`]: values.email,
        [`data.phoneNumber`]: values.phone,
        [`data.gender`]: values.gender,
      });

      await Swal.fire({
        showConfirmButton: false,
        title: "Update successful 🥳",
        icon: "success",
      });
    } else {
      if (typeof values.avatarUrl === "string") {
        await updateDoc(ordersRef, {
          [`data.displayName`]: values.name,
          [`data.email`]: values.email,
          [`data.phoneNumber`]: values.phone,
          [`data.gender`]: values.gender,
          [`data.photoURL`]: values.avatarUrl,
        });

        await Swal.fire({
          showConfirmButton: false,
          title: "Update successful 🥳",
          icon: "success",
        });
      } else {
        let isExisted;
        const listRef = await ref(storage, "files");
        await listAll(listRef).then((res) => {
          const object = res.items.find(
            (el) => el.name === values.avatarUrl.name
          );
          if (object) isExisted = true;
          else isExisted = false;
        });

        if (!isExisted) {
          const storageRef = ref(storage, `files/${values.avatarUrl.name}`);
          const uploadTask = uploadBytesResumable(storageRef, values.avatarUrl);
          var avatarUrl = null;

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              // setProgress(prog);
            },
            (error) => console.log(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                avatarUrl = url;

                updateDoc(ordersRef, {
                  [`data.displayName`]: values.name,
                  [`data.email`]: values.email,
                  [`data.phoneNumber`]: values.phone,
                  [`data.gender`]: values.gender,
                  [`data.photoURL`]: avatarUrl,
                });
              });

              Swal.fire({
                showConfirmButton: false,
                title: "Update successful 🥳",
                icon: "success",
              });
            }
          );
        } else {
          await updateDoc(ordersRef, {
            [`data.displayName`]: values.name,
            [`data.email`]: values.email,
            [`data.phoneNumber`]: values.phone,
            [`data.gender`]: values.gender,
          });
          await Swal.fire({
            showConfirmButton: false,
            title: "Update successful 🥳",
            icon: "success",
          });
        }
      }
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: accountThunk.js:112 ~ handleUpdateProfile ~ error",
      error
    );
  }
};

export const handleChangePassword = (values) => async (dispatch, getState) => {
  const accountDetail = getState().account.accountDetail;
  const auth = getAuth();
  const user = auth.currentUser;

  try {
    if (values.oldPass !== accountDetail.data.password) {
      Swal.fire({
        icon: "error",
        title: "Your old password is invalid 🤔",
        html: "Please try again 😢",
      });
    } else {
      const res = await updatePassword(user, values.newPass);

      const ordersRef = await doc(db, "users", `${accountDetail.data.email}`);

      await updateDoc(ordersRef, { [`data.password`]: values.newPass });

      await Swal.fire({
        icon: "success",
        title: "Update password successful 🥳",
        // html: "Please try again 😢",
      });
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: accountThunk.js:126 ~ handleChangePassword ~ error",
      error
    );
    if (error) {
      if (error.message === "Firebase: Error (auth/requires-recent-login).") {
        Swal.fire({
          icon: "error",
          title: `Please login again to change the password 😢`,
          html: "Sorry for the inconvenience 😢",
        });
      }
    }
  }
};

export const handleSetDefaultAddress = (address) => (dispatch, getState) => {
  const accountDetail = getState().account.accountDetail;
  const newAccountAddressList = [...accountDetail.address];

  var newList = [];
  for (const object of newAccountAddressList) {
    const newObject = { ...object };

    if (newObject.address === address) {
      newObject.default = true;
    } else {
      newObject.default = false;
    }
    newList.push(newObject);
  }
  const ordersRef = doc(db, "users", `${accountDetail.email}`);

  updateDoc(ordersRef, {
    address: newList,
  });

  dispatch(setAccountDetail({ ...accountDetail, address: newList }));
};

export const handleDelete =
  ({ list, isOrderList }) =>
  async (dispatch, getState) => {
    const account = getState().account.accountDetail;

    const ordersRef = await doc(db, "users", `${account.data.email}`);

    await updateDoc(
      ordersRef,
      isOrderList === true
        ? {
            orders: list,
          }
        : {
            address: list,
          }
    );

    await Swal.fire({
      icon: "success",
      title: "Deleted!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

export const handleUpdateNotify =
  ({ email, isUnRead }) =>
  async (dispatch, getState) => {
    try {
      const ordersRef = doc(db, "notifications", `${email}`);

      await updateDoc(ordersRef, {
        isUnRead: isUnRead,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: accountThunk.js:316 ~ handleUpdateNotify ~ error",
        error
      );
      await Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
