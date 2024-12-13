import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productDetailsSlice";
import { addToWishListReducer } from "./addToWishListSlice";
import { addToBasketReducer } from "./addToBasketSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { addToCartReducer } from "./addToCartSlice";


const persistConfig = {
  key: 'root', // The key used to store the Redux state
  storage,     // LocalStorage will be used
  whitelist: ['addToBasket'], // Define which reducers should be persisted
};



const rootReducer = combineReducers({
  product: productReducer,
  addToWishList: addToWishListReducer,
  addToBasket: addToBasketReducer,
  addToCart: addToCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  export const persistor = persistStore(store);