import { doc, setDoc } from "firebase/firestore";

import Swal from "sweetalert2";
import { db } from "constants/firebase";
import { store } from "app/store";

export const getStatusColor = (status) => {
  // status : waiting || verified || pending || delivering || received

  if (status === "verified") return `color : ...`;
  if (status === "pending") return ` color : ...`;
  if (status === "delivering") return `color : ...`;
  if (status === "received") return `color : ...`;
  return `color : ...`;
};

export const getFieldsValue = (name) => {
  const userProfile = store.getState().user.userProfile;
  const newName = `${name}`;

  return userProfile[newName];
};

export const reInitialize = (values, data) => {
  // return {
  //   ...values,
  //   ...data,
  // };

  if (!data) return { ...values };
  else return Object.assign(values, data);
};

export const setNewDoc = (collectionName, docName, data) => {
  return setDoc(doc(db, `${collectionName}`, `${docName}`), {
    ...data,
  });
};

export const firestoreRestApiCall = () => {};

export const notify = (icon, title, timer) => {};

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
