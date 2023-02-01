import { Toast, setNewDoc } from "utils";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { db, storage } from "constants/firebase";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { login, loginFailed, loginSuccess, saveImg } from "./authSlice";

import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import { config } from "constants/global";
import firebase from "firebase/compat/app";
import { rootApi } from "constants/rootApi";
import { setAccountDetail } from "../account/accountSlice";

const cookies = new Cookies();

export const unregisterAuthObserver = firebase
  .auth()
  .onAuthStateChanged(async (user) => {
    if (!user) {
      console.log("User is not logged in ");
      return;
    }

    const token = await user.getIdToken(true);

    const userInfo = {
      name: user.displayName,
      token,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerData: user.providerData,
      uid: user.uid,
      refreshToken: user.refreshToken,
      metadata: {
        ...user.metadata,
      },
      expiresIn: user._delegate.stsTokenManager.expirationTime,
    };

    saveCookie(userInfo);

    // window.location.reload();

    // if (token) store.dispatch(loginSuccess(token));

    // console.log("logged user", user._delegate, user);
    // console.log("user token : ", token);
  });

export const signinWithOAuth = (values) => async (dispatch, getState) => {
  dispatch(login());

  const body = {
    email: values.email,
    password: values.password,
    returnSecureToken: true,
  };

  try {
    const res = await axios.post(rootApi.signInWithEmailApiUrl, body, config);
    if (res.data) dispatch(loginSuccess());
    // window.location.href = `/profile`;
    // window.location.reload();
    const newData = {
      ...res.data,
      role: `user`,
    };
    console.log(
      "🚀 ~ file: authThunk.js ~ line 74 ~ signinWithOAuth ~ newData",
      newData
    );
    await Swal.fire(`Login successful`, ``, "success");

    await saveCookie(newData);

    window.location.href = "/home";
  } catch (error) {
    if (error.response) {
      dispatch(loginFailed());
      Swal.fire(`${error.response.data.error.message}`, ``, `error`);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
};

export const uploadAvatar = (selectedFile) => async (dispatch, getState) => {
  const storageRef = ref(storage, `files/${selectedFile.name}`);
  const uploadTask = uploadBytesResumable(storageRef, selectedFile);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // const prog = Math.round(
      //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      // );
      // setProgress(prog);
    },
    (error) => console.log(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log("File available at", url);

        dispatch(saveImg(url));
      });
    }
  );
};

export const signupNewUser = (values) => async (dispatch, getState) => {
  const body = {
    email: values.email,
    password: values.password,
    returnSecureToken: true,
  };

  try {
    const res = await axios.post(rootApi.signUpWithEmailApiUrl, body, config);

    if (res.status === 200) {
      const newBody = {
        data: {
          ...res.data,

          email: values.email,
          id: res.data.localId,
          name: `${values.firstName} ${values.lastName}`,
          password: values.password,
          phone: "",
          role: `user`,
          status: `active`,
          avatarUrl: null,
          address: "",
          ward: "",
          district: "",
          city: "",
          gender: "",
        },

        cart: [],
        orders: [],
        favorites: [],
      };
      // await setDoc(doc(db, `users`, `${res.data.email}`), {
      //   ...newBody,
      // });

      await setNewDoc(`users`, `${res.data.email}`, newBody);

      await Toast.fire(`Register successfully!`, ``, `success`);

      await dispatch(signinWithOAuth(newBody));

      await dispatch(setAccountDetail(newBody));
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.response.data.error.message);

      if (error.response.data) {
        if (error.response.data.error.message === "EMAIL_EXISTS") {
          Toast.fire(`This email already exist `, `Please try again`, `error`);
        } else if (
          error.response.data.error.message ===
          "WEAK_PASSWORD : Password should be at least 6 characters"
        ) {
          Toast.fire(
            `Password is too weak `,
            `Password should be at least 6 characters`,
            `error`
          );
        }
      }
    }
  }
};

export const handleResetPassword = (values) => async (dispatch, getState) => {
  const body = {
    requestType: "PASSWORD_RESET",
    email: values.email,
  };
  try {
    const res = await axios.post(rootApi.resetPasswordApiUrl, body, config);
    console.log(
      "🚀 ~ file: forgot.js ~ line 19 ~ handleResetPasswordApiresetPasswordApiUrl ~ res",
      res.data
    );
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

export const handleLogout = () => async (dispatch, getState) => {
  await cookies.remove("information");

  await localStorage.removeItem("cart");

  const auth = getAuth();

  await signOut(auth)
    .then(() => {
      console.log("User signed out successful");
    })
    .catch((error) => {
      console.log("🚀 ~ file: index.jsx ~ line 26 ~ signOut ~ error", error);
    });

  window.location.href = await "/home";
};

const saveCookie = (data) => {
  cookies.set("information", data, {
    path: "/",
    maxAge: data.expiresIn,
  });
};

export const createUser = (values) => async (dispatch, getState) => {
  const auth = getAuth();
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    if (user.user.uid) {
      const {
        displayName,
        auth,
        metadata,
        proactiveRefresh,
        stsTokenManager,
        ...rest
      } = user.user;

      const newBody = {
        id: user.user.uid,
        data: {
          ...rest,

          displayName: `${values.firstName} ${values.lastName}`,
          password: values.password,
          role: `user`,
          status: `active`,
          gender: "",
        },

        cart: null,
        orders: null,
        favorites: null,
        address: null,
      };

      await setDoc(doc(db, `notifications`, `${user.user.email}`), {});
      await setDoc(doc(db, `users`, `${user.user.email}`), newBody);

      await Swal.fire({
        title: `Sign up successful!`,
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });

      await dispatch(singin({ values, isLogin: false }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: authThunk.js:319 ~ createUser ~ error",
      error.message,
      error.code
    );
  }
};

export const singin =
  ({ values, isLogin }) =>
  async (dispatch, getState) => {
    const auth = getAuth();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      if (isLogin) {
        await Swal.fire(`Login successful`, ``, "success");
      }

      window.location.href = "/home";

      await saveCookie(user.user);
    } catch (error) {
      if (error) {
        console.log(" error: ", error.message);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          Swal.fire({
            title: "Wrong password",
            icon: "error",
          });
        }
        if (
          error.message ===
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        ) {
          Swal.fire({
            title:
              "Your account has been temporarily disabled due to many failed login attempts 😢",
            html: "Please try again later 🤧",
            icon: "error",
          });
        }

        if (error.message === "Firebase: Error (auth/user-not-found).") {
          Swal.fire({
            title: "Cannot find your account 😢",
            html: "Please signup or try to use another account 🤧",
            icon: "error",
          });
        }
      }
    }
  };
