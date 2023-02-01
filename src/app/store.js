import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import thunk from "redux-thunk";

// import { productApi } from "services/productService";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // productApi.middleware,
      thunk
    ),
});

// sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);
