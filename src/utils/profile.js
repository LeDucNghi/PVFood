import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import Cookies from "universal-cookie";
import axios from "axios";
import { storage } from "constants/firebase";

// import { storage } from "firebase/firebase";

// import firebase from "firebase/compat/app";
// import { getAuth } from "firebase/auth";
// import { profileImgUrl } from "actions/Login";

const cookies = new Cookies();
const accountProfile = cookies.get("information");

export const getUserData = async (accountData, { setAccountData }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    idToken: String(accountProfile.idToken),
  };
  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API}`,
      body,
      config
    );
    console.log("🚀 ~ file: profile.js ~ line 6 ~ getUserData ~ res", res.data);

    accountData = res.data.users[0];
    setAccountData(accountData);

    console.log(
      "🚀 ~ file: profile.js ~ line 25 ~ getUserData ~ accountData",
      accountData
    );
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

export const uploadFiles =
  // (selectedFile, imgUrl, { dispatch }, { setImgUrl })
  (
    values,
    selectedFile,
    imgUrl,
    { dispatch },
    { setImgUrl },
    { setSubmitting }
  ) => {
    const storageRef = ref(storage, `files/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const prog =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("File available at", url);
          imgUrl = url;
          setImgUrl(imgUrl);
          console.log(
            "🚀 ~ file: profile.js ~ line 56 ~ getDownloadURL ~ imgUrl",
            imgUrl
          );

          // dispatch(profileImgUrl(imgUrl));
          // if (imgUrl) updateProfile(values, imgUrl, { setSubmitting });
        });
      }
    );
    if (imgUrl) {
      // handleUpdateProfile(values, imgUrl, { setSubmitting });
      updateProfile(values, imgUrl, { setSubmitting });
    }
  };

const updateProfile = async (values, imgUrl, { setSubmitting }) => {
  if (!imgUrl) return;
  console.log("🚀 ~ file: profile.js ~ line 42 ~ values", values);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    idToken: String(accountProfile.idToken),
    displayName: `${values.firstName} ${values.lastName}`,
    photoUrl: String(imgUrl),
    returnSecureToken: true,
  };
  console.log("🚀 ~ file: profile.js ~ line 91 ~ body", body);
  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API}`,
      body,
      config
    );
    console.log(
      "🚀 ~ file: profile.js ~ line 46 ~ updateProfile ~ res",
      res.data
    );
    setTimeout(() => {
      // console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

// const handleUpdateProfile = (values, imgUrl, { setSubmitting }) => {
//   const auth = getAuth();
//   auth
//     .updateCurrentUser(accountProfile.localId, {
//       phoneNumber: values.phone,
//       email: "leducnghi28122000hie@gmail.com",
//       // emailVerified: true,
//       password: "newPassword",
//       displayName: `${values.firstName} ${values.lastName}`,
//       photoURL: String(imgUrl),
//     })
//     .then((userRecord) => {
//       // See the UserRecord reference doc for the contents of userRecord.
//       console.log("Successfully updated user", userRecord.toJSON());
//     })
//     .catch((error) => {
//       console.log("Error updating user:", error);
//     });
// };

// export const handleUpdateProfile = async (
//   values,
//   selectedFile,
//   imgUrl,
//   { dispatch },
//   { setImgUrl },
//   { setSubmitting }
// ) => {
//   await uploadFiles(selectedFile, imgUrl, { dispatch }, { setImgUrl });
//   await updateProfile(values, imgUrl, { setSubmitting });
// };
