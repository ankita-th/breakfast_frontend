import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

export const addToBasketSlice = createSlice({
  name: "basketList",
  initialState,
  reducers: {
  
}
})

export const { } = addToBasketSlice.actions;
export const addToWishListReducer = addToBasketSlice.reducer;

