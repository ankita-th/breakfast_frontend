import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

export const addToWishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishList: (state, action) => {
      state.wishList = action.payload;
    },
  },
});

export const { setWishList } = addToWishListSlice.actions;
export const addToWishListReducer = addToWishListSlice.reducer;
