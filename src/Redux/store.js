import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productDetailsSlice";
import { addToWishListReducer } from "./addToWishListSlice";

const reducers = {
  product : productReducer,
  addToWishList : addToWishListReducer
}


export const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });