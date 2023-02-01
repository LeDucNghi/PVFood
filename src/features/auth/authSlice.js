import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    url: null,
    oob: "",

    logging: false,
    currentUser: null,
  },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveImg: (state, action) => {
      state.url = action.payload;
    },
    saveOOB: (state, action) => {
      state.oob = action.payload;
    },

    login(state) {
      state.logging = true;
    },

    loginSuccess(state) {
      state.logging = false;
    },

    loginFailed(state, action) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveToken,
  saveImg,
  saveOOB,
  login,
  loginSuccess,
  loginFailed,
  logout,
} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLogging = (state) => state.auth.logging;

export const authReducer = authSlice.reducer;
