import { firebaseConfig } from "constants/firebase";

export const rootApi = {
  // json-server
  food: process.env.REACT_APP_FOOD_API_URL,
  new: process.env.REACT_APP_NEW_API_URL,

  // firebase
  signUpWithEmailApiUrl: `${firebaseConfig.baseAuthUrl}accounts:signUp?key=${firebaseConfig.apiKey}`,
  signInWithEmailApiUrl: `${firebaseConfig.baseAuthUrl}accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
  resetPasswordApiUrl: `${firebaseConfig.baseAuthUrl}accounts:sendOobCode?key=${firebaseConfig.apiKey}`,
  firestoreApiUrl: `${firebaseConfig.baseFirestoreUrl}projects/${firebaseConfig.projectId}/databases`,
  changePasswordUrl: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`,
};
