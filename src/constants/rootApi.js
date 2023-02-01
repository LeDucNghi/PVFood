import { firebaseConfig } from "constants/firebase";

export const rootApi = {
  // json-server
  user: process.env.REACT_APP_USER_API_URL,
  trash: process.env.REACT_APP_TRASH_API_URL,
  food: process.env.REACT_APP_FOOD_API_URL,
  new: process.env.REACT_APP_NEW_API_URL,
  bill: process.env.REACT_APP_BILL_API_URL,
  sale: process.env.REACT_APP_SALE_API_URL,

  // firebase
  signUpWithEmailApiUrl: `${firebaseConfig.baseAuthUrl}accounts:signUp?key=${firebaseConfig.apiKey}`,
  signInWithEmailApiUrl: `${firebaseConfig.baseAuthUrl}accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
  resetPasswordApiUrl: `${firebaseConfig.baseAuthUrl}accounts:sendOobCode?key=${firebaseConfig.apiKey}`,
  firestoreApiUrl: `${firebaseConfig.baseFirestoreUrl}projects/${firebaseConfig.projectId}/databases`,
  changePasswordUrl: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`,
  // https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/
};
