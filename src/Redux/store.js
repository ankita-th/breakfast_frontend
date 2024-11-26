import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productDetailsSlice";







export const store = configureStore({
    reducer: {product : productReducer},
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });