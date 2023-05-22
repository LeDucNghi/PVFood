import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      thunk
    ),
});

// sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);
