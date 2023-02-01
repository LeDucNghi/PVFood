import "firebase/compat/auth";
import "firebase/compat/firestore";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID,
  baseAuthUrl: process.env.REACT_APP_BASE_AUTH_API,
  baseFirestoreUrl: process.env.REACT_APP_FIRESTORE_API,
};

const app = firebase.initializeApp(firebaseConfig);

// firebase - all activities must do after initializeApp

// firebase
//   .auth()
//   .currentUser.getIdToken(true)
//   .then((idToken) => console.log("token", idToken))
//   .catch((err) => console.log("err", err));

// export const auth = getAuth(app);

// firebase.auth().currentUser.getIdToken(true);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
